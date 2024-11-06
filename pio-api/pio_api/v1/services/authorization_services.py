from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import create_access_token, get_jwt_identity
from datetime import timedelta

from v1.models.authorization import find_one_user_for_username, insert_one_user


def check_password(stored_password, provided_password):
    """
    Check if the provided password matches the stored hashed password.

    Args:
        stored_password (str): The stored hashed password.
        provided_password (str): The password provided by the user.

    Returns:
        bool: True if the password matches, False otherwise.
    """
    return check_password_hash(stored_password, provided_password)


def generate_password(password):
    """
    Generate a hashed version of the provided password.

    Args:
        password (str): The password to hash.

    Returns:
        str: The hashed password.
    """
    return generate_password_hash(password)


def create_token(user):
    """
    Create an access token for the user.

    Args:
        user (dict): A dictionary containing user information.

    Returns:
        str: The access token.
    """
    return create_access_token(
        identity={'username': user['username'], 'userId': str(user['_id'])},
        expires_delta=timedelta(days=365)  # Consider parameterizing this value
    )


def get_current_user_id():
    """
    Get the current user's ID from the JWT token.

    Returns:
        str: The current user's ID.
    """
    return get_jwt_identity().get('userId')


def get_user_for_username(username):
    """
    Retrieve a user by their username.

    Args:
        username (str): The username to search for.

    Returns:
        dict: The user information if found, None otherwise.
    """
    return find_one_user_for_username(username=username)


def post_user(user):
    """
    Insert a new user into the database.

    Args:
        user (dict): The user information to insert.

    Returns:
        InsertOneResult: The result of the insertion operation.
    """
    return insert_one_user(user=user)
