from datetime import datetime

from bson import ObjectId
from v1.models.lots import (
    find_one_lot_for_id_and_user,
    insert_one_lot,
    find_lots_for_aviary_and_user,
    update_one_lot_for_id_and_user
)
import logging


def get_lots_for_aviary_and_user(aviary_id, user_id):
    """
    Retrieve all lots for a specific aviary and user, formatted for output.
    """
    try:
        lots = find_lots_for_aviary_and_user(aviary_id=aviary_id, user_id=user_id)
        return [{
            'id': str(lot.get('_id')),
            'aviaryId': str(lot.get('aviaryId')),
            'createdAt': lot.get('createdAt').isoformat() if isinstance(lot.get('createdAt'), datetime) else None,
            'finishedAt': lot.get('finishedAt'),
            'chicksCount': lot.get('chicksCount', 0),
            'chickValue': lot.get('chickValue', 0),
            'chicksMortalityCount': lot.get('chicksMortalityCount', 0),
            'totalCosts': lot.get('totalCosts', 0),
            'grossValue': lot.get('grossValue', 0),
            'netValue': lot.get('netValue', 0),
        } for lot in lots]
    except Exception as e:
        logging.error(f"Error retrieving lots: {e}")
        raise


def get_lot_for_id_and_user(lot_id, user_id):
    """
    Retrieve a specific lot by ID for a given user.
    """
    lot = find_one_lot_for_id_and_user(lot_id=lot_id, user_id=user_id)
    if not lot:
        return {}
    return {
        'id': str(lot.get('_id')),
        'aviaryId': str(lot.get('aviaryId')),
        'createdAt': lot.get('createdAt'),
        'finishedAt': lot.get('finishedAt'),
        'chicksCount': lot.get('chicksCount', 0),
        'chickValue': lot.get('chickValue', 0),
        'chicksMortalityCount': lot.get('chicksMortalityCount', 0),
        'totalCosts': lot.get('totalCosts', 0),
        'grossValue': lot.get('grossValue', 0),
        'netValue': lot.get('netValue', 0),
    }


def post_lot_for_aviary_and_user(user_id, data):
    """
    Create a new lot for a specific aviary and user.
    """
    try:
        lot = {
            'aviaryId': ObjectId(data.get('aviaryId')),
            'userId': ObjectId(user_id),
            'createdAt': datetime.now(),
            'chicksCount': int(data.get('chicksCount', 0)),
            'chickValue': float(data.get('chickValue', 0)),
            'grossValue': float(int(data.get('chicksCount', 0)) * float(data.get('chickValue', 0))),
            'netValue': float(int(data.get('chicksCount', 0)) * float(data.get('chickValue', 0)))
        }
        return insert_one_lot(lot=lot)
    except Exception as e:
        logging.error(f"Error inserting lot: {e}")
        raise


def update_lot_for_id_and_user(
    lot_id,
    user_id,
    finished_at=None,
    chicks_mortality_count=None,
    costs_value=None
):
    """
    Update specific fields of a lot for a given user.
    """
    try:
        fields = {}

        if finished_at is not None:
            fields['finishedAt'] = finished_at

        if chicks_mortality_count is not None:
            fields['chicksMortalityCount'] = {'$inc': int(chicks_mortality_count)}

            lot = get_lot_for_id_and_user(lot_id=lot_id, user_id=user_id)
            fields['netValue'] = {'$inc': -float(int(chicks_mortality_count) * float(lot.get('chickValue', 0)))}

        if costs_value is not None:
            fields['totalCosts'] = {'$inc': float(costs_value)}
            fields['netValue'] = {'$inc': float(-costs_value)}

        query = {}
        if fields:
            query.update({'$set': {k: v for k, v in fields.items() if not isinstance(v, dict)}})
            query.update({'$inc': {k: v['$inc'] for k, v in fields.items() if isinstance(v, dict)}})

        return update_one_lot_for_id_and_user(
            lot_id=lot_id,
            user_id=user_id,
            query=query
        )
    except Exception as e:
        logging.error(f"Error updating lot with ID {lot_id}: {e}")
        raise
