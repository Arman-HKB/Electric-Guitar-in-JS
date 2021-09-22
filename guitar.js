$(document).ready(function(){
    $(".note").hover(function(){
        $(this).css({"background-color": "#33333380"});
        }, function(){
        $(this).css({"background-color": "unset"});
    });
});