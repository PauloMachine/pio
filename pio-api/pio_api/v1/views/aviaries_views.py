from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from werkzeug.exceptions import BadRequest
from v1.services.authorization_services import get_current_user_id
from v1.services.aviaries_services import (
    get_aviaries_for_user,
    get_aviary_for_id_and_user,
    get_aviary_for_name_and_user,
    post_aviary_for_user,
)
import logging

aviaries_bp = Blueprint('aviaries', __name__)


@aviaries_bp.route('/aviaries', methods=['GET'])
@jwt_required()
def get_aviaries():
    """
    Retrieve all aviaries for the current user.
    """
    user_id = get_current_user_id()
    try:
        aviaries = get_aviaries_for_user(user_id=user_id)
        return jsonify({'aviaries': aviaries}), 200
    except Exception as e:
        logging.error(f"Error retrieving aviaries for user {user_id}: {e}")
        return jsonify({'message': 'Error retrieving aviaries'}), 500


@aviaries_bp.route('/aviaries/<aviary_id>', methods=['GET'])
@jwt_required()
def get_aviary(aviary_id):
    """
    Retrieve a specific aviary by ID for the current user.
    """
    user_id = get_current_user_id()
    if not aviary_id:
        return jsonify({'message': 'Aviary ID is required'}), 400

    try:
        aviary = get_aviary_for_id_and_user(aviary_id=aviary_id, user_id=user_id)
        if not aviary:
            return jsonify({'message': 'Aviary not found or not authorized'}), 404
        return jsonify({'aviary': aviary}), 200
    except Exception as e:
        logging.error(f"Error retrieving aviary with ID {aviary_id} for user {user_id}: {e}")
        return jsonify({'message': 'Error retrieving aviary'}), 500


@aviaries_bp.route('/aviaries', methods=['POST'])
@jwt_required()
def post_aviary():
    """
    Create a new aviary for the current user.
    """
    user_id = get_current_user_id()
    data = request.json

    if not data or not data.get('name'):
        raise BadRequest('Aviary name is required.')

    try:
        if get_aviary_for_name_and_user(name=data.get('name'), user_id=user_id):
            return jsonify({'message': 'Aviary name already exists'}), 400

        post_aviary_for_user(data=data, user_id=user_id)
        return jsonify({'message': 'Aviary added successfully'}), 201
    except BadRequest as e:
        raise e
    except Exception as e:
        logging.error(f"Error creating aviary for user {user_id}: {e}")
        return jsonify({'message': 'Error creating aviary'}), 500
