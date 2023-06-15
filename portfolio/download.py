from django.http import FileResponse
from django.conf import settings
import os

def download_weights_csv(request):
    weights_file_path = os.path.join(settings.MEDIA_ROOT, 'weights.csv')
    chart_file_path = os.path.join(settings.MEDIA_ROOT, 'chart.png')
    
    if os.path.exists(weights_file_path) and os.path.exists(chart_file_path):
        with open(weights_file_path, 'rb') as weights_file, open(chart_file_path, 'rb') as chart_file:
            response = FileResponse()
            response['Content-Disposition'] = 'attachment; filename="weights_and_chart.zip"'
            response['Content-Type'] = 'application/zip'
            
            response.write(weights_file.read())
            response.write(chart_file.read())
            
            return response
