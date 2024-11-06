from v1.db import mongo
import logging
from bson import ObjectId


def find_costs_for_lot_and_user(lot_id, user_id):
    """
    Retrieve a list of costs for a specific lot and user, sorted by creation date in descending order.
    """
    try:
        costs = list(mongo.db.costs.find({
            'lotId': ObjectId(lot_id),
            'userId': ObjectId(user_id)
        }).sort('createdAt', -1))

        logging.info(f"Retrieved {len(costs)} costs for lot_id {lot_id} and user_id {user_id}")
        return costs
    except Exception as e:
        logging.error(f"Error retrieving costs: {e}")
        raise


def insert_one_cost(cost):
    """
    Insert a new cost record into the costs collection.
    """
    try:
        result = mongo.db.costs.insert_one(cost)
        logging.info(f"Inserted cost with id {result.inserted_id}")
        return result
    except Exception as e:
        logging.error(f"Error inserting cost: {e}")
        raise
