from datetime import datetime
from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from v1.services.authorization_services import get_current_user_id
from v1.services.aviaries_services import update_aviary_for_id_and_user
from v1.services.lots_services import (
    get_lot_for_id_and_user,
    get_lots_for_aviary_and_user,
    post_lot_for_aviary_and_user,
    update_lot_for_id_and_user,
)
import logging

lots_bp = Blueprint('lots', __name__)


@lots_bp.route('/aviaries/<aviary_id>/lots', methods=['GET'])
@jwt_required()
def get_lots(aviary_id):
    """
    Retrieve all lots for a specific aviary and user.
    """
    user_id = get_current_user_id()
    try:
        lots = get_lots_for_aviary_and_user(aviary_id=aviary_id, user_id=user_id)
        return jsonify({'lots': lots}), 200
    except Exception as e:
        logging.error(f"Error retrieving lots: {e}")
        return jsonify({'message': 'Error retrieving lots'}), 500


@lots_bp.route('/lots/<lot_id>', methods=['GET'])
@jwt_required()
def get_lot(lot_id):
    """
    Retrieve a specific lot by ID for the current user.
    """
    user_id = get_current_user_id()
    try:
        lot = get_lot_for_id_and_user(lot_id, user_id)
        if not lot:
            return jsonify({'message': 'Lot not found or not authorized'}), 404
        return jsonify({'lot': lot}), 200
    except Exception as e:
        logging.error(f"Error retrieving lot: {e}")
        return jsonify({'message': 'Error retrieving lot'}), 500


@lots_bp.route('/lots', methods=['POST'])
@jwt_required()
def post_lot():
    """
    Create a new lot for the current user.
    """
    user_id = get_current_user_id()
    data = request.json

    if not data or 'chicksCount' not in data or int(data.get('chicksCount', 0)) <= 0:
        return jsonify({'message': 'Invalid request: chicksCount is required and must be greater than 0'}), 400

    try:
        post_lot_for_aviary_and_user(user_id=user_id, data=data)
        return jsonify({'message': 'Lot added successfully'}), 201
    except Exception as e:
        logging.error(f"Error adding lot: {e}")
        return jsonify({'message': 'Error adding lot'}), 500


@lots_bp.route('/lots/<lot_id>/finish', methods=['POST'])
@jwt_required()
def finish_lot(lot_id):
    """
    Finish a specific lot for the current user.
    """
    user_id = get_current_user_id()
    try:
        lot = get_lot_for_id_and_user(lot_id=lot_id, user_id=user_id)
        if not lot:
            return jsonify({'message': 'Lot not found or not authorized'}), 404

        #  Update the lot as completed
        update_lot_for_id_and_user(
            lot_id=lot_id,
            user_id=user_id,
            finished_at=datetime.now(),
        )

        # Update the aviary with the lot values
        update_aviary_for_id_and_user(
            aviary_id=lot.get('aviaryId'),
            user_id=user_id,
            grossValue=lot.get('grossValue', 0),
            netValue=lot.get('netValue', 0),
            totalCosts=lot.get('totalCosts', 0)
        )

        return jsonify({'message': 'Lot finished successfully'}), 200
    except Exception as e:
        logging.error(f"Error finishing lot: {e}")
        return jsonify({'message': 'Error finishing lot'}), 500
