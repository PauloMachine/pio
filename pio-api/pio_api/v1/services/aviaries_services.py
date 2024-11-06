from datetime import datetime

from bson import ObjectId
from v1.models.aviaries import (
    find_aviaries_for_user,
    find_one_aviary_for_name_and_user,
    find_one_aviary_for_id_and_user,
    update_one_aviary_for_id_and_user,
    insert_one_aviary,
)
import logging


def get_aviaries_for_user(user_id):
    """
    Retrieve all aviaries for a specific user and return formatted data.
    """
    try:
        aviaries = find_aviaries_for_user(user_id=user_id)
        return [{
            'id': str(aviary.get('_id')),
            'name': aviary.get('name'),
            'createdAt': aviary.get('createdAt').isoformat() if aviary.get('createdAt') else None,
            'grossValue': str(aviary.get('grossValue', 0)),
            'netValue': str(aviary.get('netValue', 0)),
            'totalCosts': str(aviary.get('totalCosts', 0))
        } for aviary in aviaries]
    except Exception as e:
        logging.error(f"Error retrieving aviaries for user {user_id}: {e}")
        raise


def get_aviary_for_name_and_user(name, user_id):
    """
    Retrieve a specific aviary by name and user ID.
    """
    try:
        return find_one_aviary_for_name_and_user(name=name, user_id=user_id)
    except Exception as e:
        logging.error(f"Error retrieving aviary with name {name} for user {user_id}: {e}")
        raise


def post_aviary_for_user(data, user_id):
    """
    Create a new aviary for the user with the provided data.
    """
    if not data or not data.get('name'):
        raise ValueError("Aviary name is required.")

    try:
        if get_aviary_for_name_and_user(name=data.get('name'), user_id=user_id):
            raise ValueError("Aviary name already exists.")

        aviary = {
            'name': data.get('name'),
            'userId': ObjectId(user_id),
            'createdAt': datetime.now(),
            'grossValue': float(0.0),
            'netValue': float(0.0),
            'totalCosts': float(0.0)
        }
        insert_one_aviary(aviary=aviary)
    except ValueError as e:
        logging.warning(f"Validation error: {e}")
        raise
    except Exception as e:
        logging.error(f"Error creating aviary for user {user_id}: {e}")
        raise


def get_aviary_for_id_and_user(aviary_id, user_id):
    """
    Retrieve a specific aviary by ID and user ID.
    """
    if not aviary_id:
        raise ValueError("Aviary ID is required.")

    try:
        aviary = find_one_aviary_for_id_and_user(aviary_id=aviary_id, user_id=user_id)
        if not aviary:
            return None
        return {
            'id': str(aviary.get('_id')),
            'name': aviary.get('name'),
            'createdAt': aviary.get('createdAt').isoformat() if aviary.get('createdAt') else None,
            'grossValue': aviary.get('grossValue', 0),
            'netValue': aviary.get('netValue', 0),
            'totalCosts': aviary.get('totalCosts', 0)
        }
    except Exception as e:
        logging.error(f"Error retrieving aviary with ID {aviary_id} for user {user_id}: {e}")
        raise


def update_aviary_for_id_and_user(
    aviary_id,
    user_id,
    gross_value,
    net_value,
    total_costs
):
    """
    Update a specific aviary by ID and user ID.
    """
    if not aviary_id:
        raise ValueError("Aviary ID is required.")

    query = {
        '$set': {
            'grossValue': gross_value,
            'netValue': net_value,
            'totalCosts': total_costs
        }
    }

    try:
        result = update_one_aviary_for_id_and_user(
            aviary_id=aviary_id,
            user_id=user_id,
            query=query
        )
        if result.matched_count == 0:
            raise ValueError("Aviary not found or not authorized.")
    except ValueError as e:
        logging.warning(f"Validation error: {e}")
        raise
    except Exception as e:
        logging.error(f"Error updating aviary with ID {aviary_id} for user {user_id}: {e}")
        raise
