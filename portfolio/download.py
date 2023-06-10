from django.http import FileResponse
from django.conf import settings
import os

def download_weights_csv(request):
    weights_file_path = os.path.join(settings.MEDIA_ROOT, 'weights.csv')
    backtest_result_path = os.path.join(settings.MEDIA_ROOT, 'back.png')

    if os.path.exists(weights_file_path) and os.path.exists(backtest_result_path):
        with open(weights_file_path, 'rb') as weights_file, open(backtest_result_path, 'rb') as backtest_result_file:
            response = FileResponse(weights_file, as_attachment=True, content_type='text/csv')
            response['Content-Disposition'] = 'attachment; filename="weights.csv"'

            # Set the response headers for the backtest image file
            response['X-Backtest-Image'] = 'back.png'
            response['X-Backtest-Image-Type'] = 'image/png'
            response['X-Backtest-Image-Disposition'] = 'attachment; filename="back.png"'
            response.set_cookie('fileDownload', 'true')  # Optional: To handle file download in some browsers

            # Read the backtest image file and attach it to the response
            backtest_image_data = backtest_result_file.read()
            response.content = backtest_image_data

            return response

