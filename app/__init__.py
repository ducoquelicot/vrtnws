from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from elasticsearch import Elasticsearch

datasets = Flask(__name__)
datasets.config.from_object(Config)
db = SQLAlchemy(datasets)
migrate = Migrate(datasets, db)
ma = Marshmallow(datasets)
es = Elasticsearch([datasets.config['ELASTICSEARCH_URL']])

from app import routes, models