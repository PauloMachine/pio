from v1.db import mongo
import logging
from pymongo import ReturnDocument
from pymongo.errors import PyMongoError


def find_one_user_for_username(username):
    """
    Find a user by their username.

    Args:
        username (str): The username of the user to find.

    Returns:
        dict: The user document if found, None otherwise.
    """
    try:
        return mongo.db.users.find_one({'username': username})
    except PyMongoError as e:
        # Log the exception here
        logging.error(f"Error finding user by username: {e}")
        return None


def insert_one_user(user):
    """
    Insert a new user into the database.

    Args:
        user (dict): The user document to insert.

    Returns:
        InsertOneResult: The result of the insertion operation.
    """
    try:
        # Basic validation (optional)
        if 'username' not in user or 'password' not in user:
            raise ValueError("User document must contain 'username' and 'password'")

        return mongo.db.users.insert_one(user)
    except (PyMongoError, ValueError) as e:
        # Log the exception here
        logging.error(f"Error inserting user: {e}")
        return None
