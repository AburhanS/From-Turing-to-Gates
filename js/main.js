$(document).ready(function(){

    $("img").click(function(){
        let imgSrc = $(this).attr("src");
        if (imgSrc.endsWith("a.jpg")) {
            $(this).attr("src", imgSrc.replace("a.jpg", "b.jpg"));
        } else {
            $(this).attr("src", imgSrc.replace("b.jpg", "a.jpg"));
        };
    });

});