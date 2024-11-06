from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from v1.services.authorization_services import get_current_user_id
from v1.services.lots_services import update_lot_for_id_and_user
from v1.services.costs_services import (
    get_costs_for_lot_and_user,
    post_cost_for_lot_and_user
)

costs_bp = Blueprint('costs', __name__)


@costs_bp.route('/lots/<lot_id>/costs', methods=['GET'])
@jwt_required()
def get_costs(lot_id):
    user_id = get_current_user_id()
    try:
        costs = get_costs_for_lot_and_user(lot_id=lot_id, user_id=user_id)
        return jsonify({'costs': costs}), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 500


@costs_bp.route('/lots/<lot_id>/costs', methods=['POST'])
@jwt_required()
def post_cost(lot_id):
    user_id = get_current_user_id()
    data = request.json

    if not data or 'costName' not in data or 'costValue' not in data:
        return jsonify({'message': 'Invalid request: Missing costName or costValue'}), 400

    try:
        post_cost_for_lot_and_user(
            lot_id=lot_id,
            user_id=user_id,
            data=data
        )

        result = update_lot_for_id_and_user(
            lot_id=lot_id,
            user_id=user_id,
            costs_value=float(data.get('costValue', 0))
        )

        if result.modified_count == 0:
            return jsonify({'message': 'Lot not found or not authorized'}), 404

        return jsonify({'message': 'Cost record added successfully'}), 201
    except Exception as e:
        return jsonify({'message': str(e)}), 500
