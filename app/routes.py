from app import datasets, db
from app.models import Dataset, DatasetSchema
from flask import request, jsonify
from str2bool import str2bool
import cgitb, cgi

data_schema = DatasetSchema()
datas_schema = DatasetSchema(many=True)

@datasets.route('/dataset', methods=['POST'])
def create_dataset():
    name = request.form['name']
    area = request.form['area']
    source = request.form['source']
    file_type = request.form['file_type']
    link = request.form['link']
    dictionary = str2bool(request.form['dictionary'])
    date_obtained = request.form['date_obtained']
    clean = str2bool(request.form['clean'])
    tags = request.form['tags']
    file = request.files['file']

    new_dataset = Dataset(name=name, area=area, source=source, file_type=file_type, link=link, dictionary=dictionary,
        date_obtained=date_obtained, clean=clean, tags=tags, file=file.read())

    db.session.add(new_dataset)
    db.session.commit()

    return "New dataset added. The uploaded file was {}".format(file.filename), 200


