from v1.db import mongo
from bson import ObjectId
import logging


def find_lots_for_aviary_and_user(aviary_id, user_id):
    """
    Retrieve lots for a specific aviary and user, sorted by creation date.
    """
    try:
        return list(mongo.db.lots.find({
            'aviaryId': ObjectId(aviary_id),
            'userId': ObjectId(user_id)
        }).sort('createdAt', -1))
    except Exception as e:
        logging.error(f"Error finding lots for aviary {aviary_id} and user {user_id}: {e}")
        raise


def find_one_lot_for_id_and_user(lot_id, user_id):
    """
    Retrieve a single lot by ID and user ID.
    """
    try:
        return mongo.db.lots.find_one({
            '_id': ObjectId(lot_id),
            'userId': ObjectId(user_id)
        })
    except Exception as e:
        logging.error(f"Error finding lot with ID {lot_id} for user {user_id}: {e}")
        raise


def insert_one_lot(lot):
    """
    Insert a new lot into the database.
    """
    try:
        return mongo.db.lots.insert_one(lot)
    except Exception as e:
        logging.error(f"Error inserting lot: {e}")
        raise


def update_one_lot_for_id_and_user(lot_id, user_id, query):
    """
    Update a specific lot for a given user based on the query.
    """
    try:
        result = mongo.db.lots.update_one(
            {'_id': ObjectId(lot_id), 'userId': ObjectId(user_id)},
            query
        )
        if result.matched_count == 0:
            logging.warning(f"No lot found to update with ID {lot_id} for user {user_id}")
        return result
    except Exception as e:
        logging.error(f"Error updating lot with ID {lot_id} for user {user_id}: {e}")
        raise
