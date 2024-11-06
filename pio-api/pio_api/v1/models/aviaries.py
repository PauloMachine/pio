from v1.db import mongo
from bson.objectid import ObjectId


def find_aviaries_for_user(user_id):
    """
    Retrieve all aviaries associated with a specific user, sorted by creation date.
    """
    try:
        return list(mongo.db.aviaries.find({'userId': ObjectId(user_id)}).sort('createdAt', -1))
    except Exception as e:
        raise RuntimeError(f"Error retrieving aviaries for user {user_id}: {e}")


def find_one_aviary_for_id_and_user(aviary_id, user_id):
    """
    Find a single aviary by ID and user ID.
    """
    try:
        return mongo.db.aviaries.find_one({
            '_id': ObjectId(aviary_id),
            'userId': ObjectId(user_id)
        })
    except Exception as e:
        raise RuntimeError(f"Error retrieving aviary with ID {aviary_id} for user {user_id}: {e}")


def find_one_aviary_for_name_and_user(name, user_id):
    """
    Find a single aviary by name and user ID.
    """
    try:
        return mongo.db.aviaries.find_one({'name': name, 'userId': ObjectId(user_id)})
    except Exception as e:
        raise RuntimeError(f"Error retrieving aviary with name {name} for user {user_id}: {e}")


def insert_one_aviary(aviary):
    """
    Insert a new aviary document into the database.
    """
    try:
        return mongo.db.aviaries.insert_one(aviary)
    except Exception as e:
        raise RuntimeError(f"Error inserting aviary: {e}")


def update_one_aviary_for_id_and_user(aviary_id, user_id, gross_value=None, net_value=None, total_costs=None):
    """
    Update an aviary by ID and user ID. Only the provided fields are updated.
    """
    update_fields = {}

    if gross_value is not None:
        update_fields['grossValue'] = gross_value
    if net_value is not None:
        update_fields['netValue'] = net_value
    if total_costs is not None:
        update_fields['totalCosts'] = total_costs

    if not update_fields:
        raise ValueError("No update fields provided.")

    try:
        return mongo.db.aviaries.update_one(
            {'_id': ObjectId(aviary_id), 'userId': ObjectId(user_id)},
            {'$set': update_fields}
        )
    except Exception as e:
        raise RuntimeError(f"Error updating aviary with ID {aviary_id}: {e}")
