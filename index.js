$("li").click(function(){
    $("li").addClass("clicked");
    setTimeout(function(){
        $(".link").removeClass("clicked");
    },1000);
})