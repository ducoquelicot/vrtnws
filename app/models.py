from app import db, ma
from marshmallow_sqlalchemy import ModelSchema
from app.search import add_to_index, remove_from_index, query_index

class SearchableMixin(object):
    @classmethod
    def search(cls, qstring):
        ids, total = query_index(qstring)
        
        if total == 0:
            return cls.query.filter_by(id=0), 0
        when = []
        for i in range(len(ids)):
            when.append((ids[i], i))
        return cls.query.filter(cls.id.in_(ids)).order_by(
            db.case(when, value=cls.id)), total

    @classmethod
    def before_commit(cls, session):
        session._changes = {
            'add' : list(session.new),
            'update' : list(session.dirty),
            'delete' : list(session.deleted)
        }

    @classmethod
    def after_commit(cls, session):
        for obj in session._changes['add']:
            if isinstance(obj, SearchableMixin):
                add_to_index(obj)
        for obj in session._changes['update']:
            if isinstance(obj, SearchableMixin):
                add_to_index(obj)
        for obj in session._changes['delete']:
            if isinstance(obj, SearchableMixin):
                remove_from_index(obj)
        session._changes = None

db.event.listen(db.session, 'before_commit', SearchableMixin.before_commit)
db.event.listen(db.session, 'after_commit', SearchableMixin.after_commit)

class Dataset(SearchableMixin, db.Model):
    __tablename__ = 'datasets'
    __searchable__ = ['name', 'tags']

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