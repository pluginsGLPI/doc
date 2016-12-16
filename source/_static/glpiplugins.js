$(function(){
    var get_data = {
        project: READTHEDOCS_DATA.project,
        version: READTHEDOCS_DATA.version,
        page: READTHEDOCS_DATA.page,
        theme: READTHEDOCS_DATA.theme,
        format: "jsonp",
    };

    $.ajax({
        url: READTHEDOCS_DATA.api_host + "/api/v2/footer_html/",
        crossDomain: true,
        xhrFields: {
            withCredentials: true,
        },
        dataType: "jsonp",
        data: get_data,
        success: function (data) {
            $('.wy-side-nav-search').append('<div id="glpiplugins-langs"></div>');
            var _langs= $(data['html']).find('dl:first-child')
            $('#glpiplugins-langs').html(_langs);
        },
        error: function () {
            console.error('Error loading langs');
        }
    });
});
