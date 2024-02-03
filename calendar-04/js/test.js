var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': my_url,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 

console.log(json());