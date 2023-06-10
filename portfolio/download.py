from django.http import FileResponse
from django.conf import settings
import os

def download_weights_csv(request):
    file_path = os.path.join(settings.MEDIA_ROOT, 'weights.csv')
    if os.path.exists(file_path):
        with open(file_path, 'rb') as file:
            response = FileResponse(file, as_attachment=True, content_type='text/csv')
            response['Content-Disposition'] = 'attachment; filename="weights.csv"'
            return response
