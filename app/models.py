from app import db, ma
from marshmallow_sqlalchemy import ModelSchema

class Dataset(db.Model):
    __tablename__ = 'datasets'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), index=True)
    area = db.Column(db.String(50), index=True)
    source = db.Column(db.String(50))
    file_type = db.Column(db.String(50))
    link = db.Column(db.Text)
    dictionary = db.Column(db.Boolean)
    date_obtained = db.Column(db.String(50))
    clean = db.Column(db.Boolean)
    tags = db.Column(db.Text, index=True)
    file = db.Column(db.LargeBinary)

    def __repr__(self):
        return "Dataset: {}. Source: {}. Tags: {}".format(self.name, self.source, self.tags)

class DatasetSchema(ma.ModelSchema):
    class Meta:
        model = Dataset
