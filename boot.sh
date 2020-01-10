#!/bin/bash
source venv/bin/activate
flask db upgrade
exec gunicorn -b :5000 -k gevent --worker-connections 1000 --timeout 120 --workers 4 --access-logfile - --error-logfile - server:datasets