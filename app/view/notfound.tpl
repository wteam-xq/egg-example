<html lang="en" data-dpr="1" style="font-size: 41.4px;">
  <head>
    <title>{{ metaData.title.substring(0,1) | upper | safe }}{{ metaData.title.substring(1) | safe }}</title>
    <link rel="icon" href="/public/img/favicon.ico" type="image/x-icon">
  </head>
  <body style="font-size: 12px;">
    <div class="not-found">
        <div class="pic">
            <img src="/public/img/error.png" alt="404">
            <p>404 Page Not Found</p>
            <div class="download">
              <a id="fixedDownloadBtn" href="/app-free-download">Download App</a>
            </div>
        </div>
    </div>
    <script src="/public/js/notfound.js"></script>
  </body>
</html>