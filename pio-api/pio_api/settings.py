import os


class Settings:
    """Base configuration class."""
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'pio')
    MONGO_DB_USER = os.getenv('MONGO_DB_USER', 'pio')
    MONGO_DB_PASSWORD = os.getenv('MONGO_DB_PASSWORD', 'BWlSzy3QbJiVlKEsF3S1SADSA1')
    CLUSTER_URI = os.getenv('CLUSTER_URL', 'pio.mongodb.net/pio')
    APP_NAME = os.getenv('APP_NAME', 'pio')
