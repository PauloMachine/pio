from datetime import datetime

from bson import ObjectId
from v1.models.costs import (
    find_costs_for_lot_and_user,
    insert_one_cost
)
import logging


def get_costs_for_lot_and_user(lot_id, user_id):
    """
    Retrieve costs for a specific lot and user.
    """
    try:
        costs = find_costs_for_lot_and_user(lot_id=lot_id, user_id=user_id)
        return [{
            'id': str(cost.get('_id')),
            'lotId': str(cost.get('lotId')),
            'createdAt': cost.get('createdAt').isoformat() if isinstance(cost.get('createdAt'), datetime) else None,
            'costName': cost.get('costName', ''),
            'costValue': str(cost.get('costValue', 0.0))
        } for cost in costs]
    except Exception as e:
        logging.error(f"Error retrieving costs: {e}")
        raise


def post_cost_for_lot_and_user(lot_id, user_id, data):
    """
    Insert a new cost record for a specific lot and user.
    """
    try:
        cost_name = data.get('costName', '').strip()
        cost_value = float(data.get('costValue', 0))

        if cost_value < 0:
            raise ValueError("costValue must be a positive number")

        cost = {
            'createdAt': datetime.now(),
            'costName': cost_name,
            'costValue': float(cost_value),
            'lotId': ObjectId(lot_id),
            'userId': ObjectId(user_id)
        }

        return insert_one_cost(cost=cost)
    except ValueError as ve:
        logging.error(f"Invalid data: {ve}")
        raise
    except Exception as e:
        logging.error(f"Error inserting cost: {e}")
        raise
