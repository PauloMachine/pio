from v1.db import mongo
import logging
from bson import ObjectId


def find_mortalities_for_lot_and_user(lot_id, user_id):
    """
    Retrieve a list of mortalities for a specific lot and user, sorted by creation date in descending order.
    """
    try:
        mortalities = list(mongo.db.mortalities.find(
            {'lotId': ObjectId(lot_id), 'userId': ObjectId(user_id)}
        ).sort('createdAt', -1))

        logging.info(f"Retrieved {len(mortalities)} mortalities for lot_id {lot_id} and user_id {user_id}")
        return mortalities
    except Exception as e:
        logging.error(f"Error retrieving mortalities: {e}")
        raise


def insert_one_mortality(mortality):
    """
    Insert a new mortality record into the mortalities collection.
    """
    try:
        result = mongo.db.mortalities.insert_one(mortality)
        logging.info(f"Inserted mortality with id {result.inserted_id}")
        return result
    except Exception as e:
        logging.error(f"Error inserting mortality: {e}")
        raise
