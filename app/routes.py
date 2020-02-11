from app import datasets, db
from app.models import Dataset, DatasetSchema
from flask import request, jsonify, send_from_directory
from datetime import datetime
import os
from werkzeug.utils import secure_filename

data_schema = DatasetSchema()
datas_schema = DatasetSchema(many=True)

ALLOWED_EXTENSIONS = {'pdf', 'xlsx', 'csv', 'json', 'kml'}
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@datasets.route('/api/add_dataset', methods=['POST'])
def create_dataset():
    name = request.form['name']
    area = request.form['area']
    source = request.form['source']
    file_type = request.form['file_type']
    link = request.form['link']
    date_obtained = request.form['date_obtained']
    tags = request.form['tags']
    file = request.files['file']

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(datasets.config['UPLOAD_FOLDER'], filename)

        if os.path.exists(filepath):
            new_filename = '{}_{}.{}'.format(filename.rsplit('.', 1)[0], datetime.now.tostrftime('%H%M'), filename.rsplit('.', 1)[1])
            new_filepath = os.path.join(datasets.config['UPLOAD_FOLDER'], new_filename)
            file.save(os.path.join(datasets.config['UPLOAD_FOLDER'], new_filename))
            new_dataset = Dataset(name=name, area=area, source=source, file_type=file_type, link=link,
            date_obtained=date_obtained, tags=tags, file=new_filepath)
        else:
            file.save(os.path.join(datasets.config['UPLOAD_FOLDER'], filename))
            new_dataset = Dataset(name=name, area=area, source=source, file_type=file_type, link=link,
            date_obtained=date_obtained, tags=tags, file=filepath)

    db.session.add(new_dataset)
    db.session.commit()

    return jsonify({'status' : 'success'}), 200

@datasets.route('/api/search_dataset', methods=['GET'])
def search_dataset():
    qstring = request.args.get('query')
    results, total = Dataset.search(qstring)

    output = {}
    output["total"] = total
    output["results"] = []
    for result in results:
        values = {
            'name' : result.name,
            'area' : result.area,
            'source' : result.source,
            'file_type' : result.file_type,
            'link' : result.link,
            'date_obtained' : result.date_obtained,
            'tags' : result.tags,
            'id' : result.id,
        }
        output["results"].append(values)

    return jsonify(output), 200

@datasets.route('/api/dataset/<id>', methods=['GET', 'PUT'])
def update_dataset(id):
    if request.method == 'GET':
        ds = Dataset.query.get_or_404(id)

        output = {
            'name' : ds.name,
            'area' : ds.area,
            'source' : ds.source,
            'file_type' : ds.file_type,
            'link' : ds.link,
            'date_obtained' : ds.date_obtained,
            'tags' : ds.tags
        }
        return jsonify(output), 200

    elif request.method == 'PUT':
        ds = Dataset.query.get_or_404(id)

        name = request.form['name']
        area = request.form['area']
        source = request.form['source']
        file_type = request.form['file_type']
        link = request.form['link']
        date_obtained = request.form['date_obtained']
        tags = request.form['tags']

        ds.name = name
        ds.area = area
        ds.source = source
        ds.file_type = file_type
        ds.link = link
        ds.date_obtained = date_obtained
        ds.tags = tags

        db.session.commit()
        return jsonify({'status' : 'success'}), 200

@datasets.route('/api/download/dataset/<id>', methods=['GET'])
def download_ds(id):
    ds = Dataset.query.get_or_404(id)
    filename = os.path.basename(ds.file)
    filepath = os.path.join(datasets.config['UPLOAD_FOLDER'], filename)
    # return send_from_directory(datasets.config['UPLOAD_FOLDER'], filename=filename, attachment_filename=filename, as_attachment=True)
    return jsonify({"path": filepath})

@datasets.route('/api/delete/dataset/<id>', methods=['DELETE'])
def delete_dataset(id):
    ds = Dataset.query.get_or_404(id)
    db.session.delete(ds)
    db.session.commit()

    return jsonify({'status' : 'success'}), 200

@datasets.route('/api/text', methods=['GET'])
def test_connection():
    return("Connection is up"), 200