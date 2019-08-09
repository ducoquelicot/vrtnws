from app import datasets, db
from app.models import Dataset, DatasetSchema
from flask import request, jsonify
from str2bool import str2bool

data_schema = DatasetSchema()
datas_schema = DatasetSchema(many=True)

@datasets.route('/add_dataset', methods=['POST'])
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

@datasets.route('/search_dataset', methods=['GET'])
def search_dataset():
    qstring = request.form['query']
    results, total = Dataset.search(qstring)

    output = {}
    output["results"] = []
    for result in results:
        values = {
            'name' : result.name,
            'area' : result.area,
            'source' : result.source,
            'file_type' : result.file_type,
            'link' : result.link,
            'dictionary' : str(bool(result.dictionary)),
            'date_obtained' : result.date_obtained,
            'clean' : str(bool(result.clean)),
            'tags' : result.tags,
        #    'file' : str(result.file)
        }
        output["results"].append(values)

    return jsonify(output), 200

@datasets.route('/dataset/<id>', methods=['GET', 'PUT'])
def update_dataset(id):
    if request.method == 'GET':
        ds = Dataset.query.get_or_404(id)
        # return data_schema.jsonify(ds)

        output = {
            'name' : ds.name,
            'area' : ds.area,
            'source' : ds.source,
            'file_type' : ds.file_type,
            'link' : ds.link,
            'dictionary' : str(bool(ds.dictionary)),
            'date_obtained' : ds.date_obtained,
            'clean' : str(bool(ds.clean)),
            'tags' : ds.tags,
        #   'file' : str(ds.file)
        }
        return jsonify(output), 200        

    elif request.method == 'PUT':
        ds = Dataset.query.get_or_404(id)

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

        ds.name = name
        ds.area = area
        ds.source = source
        ds.file_type = file_type
        ds.link = link
        ds.dictionary = dictionary
        ds.date_obtained = date_obtained
        ds.clean = clean
        ds.tags = tags
        ds.file = file

        db.session.commit()
        return "Successfully updated dataset {}".format(file.filename), 200