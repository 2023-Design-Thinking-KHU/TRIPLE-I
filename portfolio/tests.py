from django.test import TestCase

import json
import requests

url = 'http://127.0.0.1:8000/portfolio/portfolio/'  # 적절한 URL로 변경하세요

data = {
        'name':"jeongwon",
	'amount': 10000,
        'importance': 1,
        'risk': 0.2,
        'profit': 0.2,
}

response = requests.post(url, data=data)
response_data = json.loads(response.text)

print(response)

