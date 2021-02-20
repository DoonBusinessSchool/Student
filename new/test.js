



var showLoading = function(selector) {
    var html ="<div class='text-center'>";
    html += "img src='img/ajax-loader.gif'></div>";
    insertHtml(selector, html);

};

document.addEventListener("DOMContentLoded", function (event)  {
showLoading("#btnn");
$ajaxUtils.sendGetRequest(
    homeHtml,
    function (responseText){
        document.querySelector("#btnn")
        .innerHTML = responseText;
    },
    false);
});
