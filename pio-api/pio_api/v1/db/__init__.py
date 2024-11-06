import logging
from flask_pymongo import PyMongo
from settings import Settings

mongo = PyMongo()


def init_db(app):
    """
    Initialize the MongoDB connection with the Flask application.

    Args:
        app (Flask): The Flask application instance.
    """
    app.config['MONGO_URI'] = f"mongodb+srv://{Settings.MONGO_DB_USER}:{Settings.MONGO_DB_PASSWORD}@{Settings.CLUSTER_URI}?retryWrites=true&w=majority&appName={Settings.APP_NAME}"

    try:
        mongo.init_app(app, connect=False, tls=True, tlsAllowInvalidCertificates=True)
        logging.info("MongoDB connection initialized successfully.")
    except Exception as e:
        # Log the exception and handle errors accordingly
        logging.error(f"Error initializing MongoDB: {e}")
        raise
