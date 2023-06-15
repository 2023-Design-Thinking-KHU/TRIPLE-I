from django.http import FileResponse
from django.conf import settings
import zipfile
import os

def download_weights_csv(request):
    file_paths = [
        os.path.join(settings.MEDIA_ROOT, 'weights.csv'),
        os.path.join(settings.MEDIA_ROOT, '차트.png'),
    ]
    zip_file_path = os.path.join(settings.MEDIA_ROOT, 'download.zip')
    
    with zipfile.ZipFile(zip_file_path, 'w') as zip_file:
        for file_path in file_paths:
            if os.path.exists(file_path):
                zip_file.write(file_path, os.path.basename(file_path))
    
    if os.path.exists(zip_file_path):
        with open(zip_file_path, 'rb') as file:
            response = FileResponse(file, as_attachment=True, content_type='application/zip')
            response['Content-Disposition'] = 'attachment; filename="download.zip"'
            return response
