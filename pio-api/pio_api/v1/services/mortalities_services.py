from datetime import datetime

from bson import ObjectId
from v1.models.mortalities import (
    find_mortalities_for_lot_and_user,
    insert_one_mortality
)
import logging


def get_mortalities_for_lot_and_user(lot_id, user_id):
    """
    Retrieve mortalities for a specific lot and user.
    """
    try:
        mortalities = find_mortalities_for_lot_and_user(lot_id=lot_id, user_id=user_id)
        return [{
            'id': str(mortality.get('_id')),
            'lotId': str(mortality.get('lotId')),
            'createdAt': mortality.get('createdAt').isoformat() if isinstance(mortality.get('createdAt'), datetime) else None,
            'chicksMortalityCount': mortality.get('chicksMortalityCount', 0)
        } for mortality in mortalities]
    except Exception as e:
        logging.error(f"Error retrieving mortalities: {e}")
        raise


def post_mortality_for_lot_and_user(lot_id, user_id, data):
    """
    Insert a new mortality record for a specific lot and user.
    """
    try:
        chicks_mortality_count = int(data.get('chicksMortalityCount', 0))
        if chicks_mortality_count < 0:
            raise ValueError("chicksMortalityCount must be a positive integer")

        mortality = {
            'createdAt': datetime.now(),
            'chicksMortalityCount': chicks_mortality_count,
            'lotId': ObjectId(lot_id),
            'userId': ObjectId(user_id)
        }

        return insert_one_mortality(mortality=mortality)
    except ValueError as ve:
        logging.error(f"Invalid data: {ve}")
        raise
    except Exception as e:
        logging.error(f"Error inserting mortality: {e}")
        raise
