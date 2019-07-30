from sqlalchemy import Column, String, Integer, LargeBinary, Text, Boolean
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Dataset(Base):
    __tablename__ = 'datasets'

    id = Column(Integer, primary_key=True)
    name = Column(String(200), index=True)
    area = Column(String(50))
    source = Column(String(50))
    file_type = Column(String(50))
    link = Column(Text)
    dictionary = Column(Boolean)
    date_obtained = Column(String(50))
    clean = Column(Boolean)
    tags = Column(Text, index=True)

    def __repr__(self):
        return "Dataset: {}. Source: {}. Tags: {}".format(self.name, self.source, self.tags)


