from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow

datasets = Flask(__name__)
datasets.config.from_object(Config)
db = SQLAlchemy(datasets)
migrate = Migrate(datasets, db)
ma = Marshmallow(datasets)

from app import routes, models