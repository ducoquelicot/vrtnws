from elasticsearch_dsl import Search, Q
from app import datasets, es, db, models
import csv, os

def add_to_index(model):
    payload = {}
    for field in model.__searchable__:
        payload[field] = getattr(model, field)
    es.index(index="datasets", doc_type='_doc', id=model.id, body=payload)

def remove_from_index(model):
    es.delete(index='datasets', doc_type='_doc', id=model.id)

def query_index(qstring):
    q = Q("query_string",
            query = "{}~".format(qstring),
            fuzziness = "AUTO",
            fields = ['name', 'tags']
        )

    s = Search(using=es, index='datasets').query(q)
    total = s.count()
    s = s[0:total]
    response = s.execute()

    ids = [int(hit['_id']) for hit in response.hits.hits]

    return ids, total
