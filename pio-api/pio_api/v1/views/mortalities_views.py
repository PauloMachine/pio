from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from v1.services.authorization_services import get_current_user_id
from v1.services.lots_services import update_lot_for_id_and_user
from v1.services.mortalities_services import (
    get_mortalities_for_lot_and_user,
    post_mortality_for_lot_and_user
)

mortalities_bp = Blueprint('mortalities', __name__)


@mortalities_bp.route('/lots/<lot_id>/mortalities', methods=['GET'])
@jwt_required()
def get_mortalities(lot_id):
    user_id = get_current_user_id()
    try:
        mortalities = get_mortalities_for_lot_and_user(lot_id=lot_id, user_id=user_id)
        return jsonify({'mortalities': mortalities}), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 500


@mortalities_bp.route('/lots/<lot_id>/mortalities', methods=['POST'])
@jwt_required()
def post_mortality(lot_id):
    user_id = get_current_user_id()
    data = request.json

    if not data or 'chicksMortalityCount' not in data:
        return jsonify({'message': 'Invalid request: Missing chicksMortalityCount'}), 400

    try:
        post_mortality_for_lot_and_user(
            lot_id=lot_id,
            user_id=user_id,
            data=data
        )

        result = update_lot_for_id_and_user(
            lot_id=lot_id,
            user_id=user_id,
            chicks_mortality_count=int(data.get('chicksMortalityCount', 0))
        )

        if result.modified_count == 0:
            return jsonify({'message': 'Lot not found or not authorized'}), 404

        return jsonify({'message': 'Mortality record added successfully'}), 201
    except Exception as e:
        return jsonify({'message': str(e)}), 500
