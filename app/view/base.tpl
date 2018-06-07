<html>
  <head>
    <meta charset="utf-8"/>
    <title>{{ title }}</title>
    <link rel="icon" href="/public/img/favicon.ico" type="image/x-icon">
    <!-- cdn依赖： http://www.bootcdn.cn/ -->
    <script src="https://cdn.bootcss.com/react/16.3.2/umd/react.production.min.js"></script>
    <script src="https://cdn.bootcss.com/react-dom/16.3.2/umd/react-dom.production.min.js"></script>
    <script src="https://cdn.bootcss.com/moment.js/2.22.1/moment.min.js"></script>
    <script src="https://cdn.bootcss.com/antd/3.5.4/antd.min.js"></script>
    <script src="https://cdn.bootcss.com/axios/0.18.0/axios.min.js"></script>
    <link type="text/css" rel="stylesheet" href="https://cdn.bootcss.com/antd/3.5.4/antd.min.css"/>
    <script src="/public/webpack/js/base.js"></script>
  </head>

  <body>
    <div class="layout">
      {% block body %}
        {# 用于继承的block区域 #}
      {% endblock %}
    </div>
  </body>
</html>
