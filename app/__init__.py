from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from elasticsearch import Elasticsearch
from flask_cors import CORS
import logging

logging.getLogger('flask_cors').level = logging.DEBUG

datasets = Flask(__name__)
datasets.config.from_object(Config)
db = SQLAlchemy(datasets)
migrate = Migrate(datasets, db)
ma = Marshmallow(datasets)
es = Elasticsearch([datasets.config['ELASTICSEARCH_URL']])
cors = CORS(datasets)

from app import routes, models