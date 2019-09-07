from app import datasets, db
from app.models import Dataset

@datasets.shell_context_processor
def make_shell_context():
    return {'db':db, 'Dataset': Dataset}