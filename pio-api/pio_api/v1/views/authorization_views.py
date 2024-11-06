from flask import Blueprint, request, jsonify
from v1.services.authorization_services import (
    check_password,
    generate_password,
    create_token,
    get_user_for_username,
    post_user,
)

authorization_bp = Blueprint('authorization', __name__)


def validate_login_data(data):
    """
    Validate login request data.
    """
    return 'username' in data and 'password' in data


def validate_registration_data(data):
    """
    Validate registration request data.
    """
    return 'username' in data and 'password' in data


@authorization_bp.route('/login', methods=['POST'])
def login():
    auth = request.json

    if not validate_login_data(auth):
        return jsonify({'message': 'Username and password are required'}), 400

    user = get_user_for_username(auth['username'])

    if not user:
        return jsonify({'message': 'Invalid credentials'}), 401

    if check_password(user['password'], auth['password']):
        access_token = create_token(user)
        return jsonify({'token': access_token}), 200

    return jsonify({'message': 'Invalid credentials'}), 401


@authorization_bp.route('/register', methods=['POST'])
def register():
    data = request.json

    if not validate_registration_data(data):
        return jsonify({'message': 'Username and password are required'}), 400

    if get_user_for_username(data['username']):
        return jsonify({'message': 'Username already exists'}), 400

    hashed_password = generate_password(data['password'])
    user = {
        'username': data['username'],
        'password': hashed_password
    }

    post_user(user)
    return jsonify({'message': 'User registered successfully'}), 201
