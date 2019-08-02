from app import datasets, db
from app.models import Dataset, DatasetSchema
from flask import request, jsonify
from str2bool import str2bool

data_schema = DatasetSchema()
datas_schema = DatasetSchema(many=True)

@datasets.route('/dataset', methods=['POST'])
def create_dataset():
    response = request.get_data()

    # if response != {}:
    #     name = response['name']
    #     area = response['area']
    #     source = response['source']
    #     file_type = response['file_type']
    #     link = response['link']
    #     dictionary = str2bool(response['dictionary'])
    #     date_obtained = response['date_obtained']
    #     clean = str2bool(response['clean'])
    #     tags = response['tags']
    #     file = response['file'].encode('utf-8')

    # new_dataset = Dataset(name=name, area=area, source=source, file_type=file_type, link=link, dictionary=dictionary,
    #     date_obtained=date_obtained, clean=clean, tags=tags, file=file)

    # db.session.add(new_dataset)
    # db.session.commit()

    # return data_schema.jsonify(new_dataset), 200
    # else:
    return response


