from flask import Flask
from flask_jwt_extended import JWTManager
from v1.db import init_db
from v1.views.authorization_views import authorization_bp
from v1.views.aviaries_views import aviaries_bp
from v1.views.lots_views import lots_bp
from v1.views.mortalities_views import mortalities_bp
from v1.views.costs_views import costs_bp
from settings import Settings


def create_app():
    app = Flask(__name__)
    app.config.from_object(Settings)

    init_db(app)

    jwt = JWTManager(app)

    app.register_blueprint(authorization_bp)
    app.register_blueprint(aviaries_bp, url_prefix='/v1')
    app.register_blueprint(lots_bp, url_prefix='/v1')
    app.register_blueprint(mortalities_bp, url_prefix='/v1')
    app.register_blueprint(costs_bp, url_prefix='/v1')

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
