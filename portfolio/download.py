from django.http import FileResponse
from django.conf import settings
import os
import urllib.request

def download_weights_csv(request):
    weights_file_path = os.path.join(settings.MEDIA_ROOT, 'weights.csv')
    chart_file_url = 'https://triplei.herokuapp.com/media/chart.png'

    if os.path.exists(weights_file_path):
        with open(weights_file_path, 'rb') as weights_file:
            response = FileResponse()
            response['Content-Disposition'] = 'attachment; filename="weights_and_chart.zip"'
            response['Content-Type'] = 'application/zip'

            response.write(weights_file.read())

            # Download the chart file and append it to the response
            with urllib.request.urlopen(chart_file_url) as chart_file:
                response.write(chart_file.read())

            return response
