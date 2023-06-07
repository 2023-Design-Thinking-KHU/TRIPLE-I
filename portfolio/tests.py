from django.test import TestCase

import json
import requests

url = 'http://localhost:8000/portfolio/'  # 적절한 URL로 변경하세요

data = {
        'id':1,
        'name':"jeongwon",
	'amount': 10000,
        'importance': 1,
        'risk': 0.5,
        'profit': 0.8,
}

response = requests.post(url, data=data)
response_data = json.loads(response.text)

print(response_data)

