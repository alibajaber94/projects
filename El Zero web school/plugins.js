$(document).ready(function () {
    
    $(".list").click(function()
    {
        $("ul").toggle("slow");
    });

    $(".image").click(function()
    {
        $("img").toggle("fast");
        
    });
    $("img").hover(function() {
        $("img").fadeTo("fast", 1.0)
    },
    function(){
        $("img").fadeTo(2000, 0.5)
    });
    
    /*      fade    */
    $(".fade").click(function()
    {
        $("ul").fadeToggle("fast");
    });

    $(".fade_img").click(function()
    {
        $("img").fadeTo("fast", 0.5);
    });
    
    //container3 git
    $(".get").click(function(){
        $(".input1").val($(".footer").text())
    });
    //container3 set
    $(".set").click(function(){
        $(".paragraph").text($(".input1").val())
    });
    //container3 Attr
    $(".attri").click(function(){
        $(".input1").attr({
            "type":"text",
            "class":"input2"
        })
    });
    //container4 delete
    $(".delete").click(function(){
        $(".paragraph").remove() //paragraph element  will remove form html document
    });
    //variable
    var addtext = $("<p>");
    addtext.prepend("<i>New text here</i>");//$(".p1").html(<p> <i>New text here</i> </p>);
    
    
    $(".append").click(function(){
        $(".p1").html(addtext);
        $(".p2").html("<p> <i>222New 222text222 here2222</i> </p>");
    });
    //container5 slid-up slid-down 
    $(".slid").click(function(){
        $(".linear").slideToggle(3000, "linear");
        $(".ease_in").slideToggle(3000, "swing");
        $(".ease_out").slideToggle(3000, "linear");
        $(".ease_in_out").slideToggle(3000, "swing");
    });
    
    $(".fade_action").click(function(){
        $(".linear").fadeToggle(3000, "linear");
        $(".ease_in").fadeToggle(3000, "swing");
        $(".ease_out").fadeToggle(3000, "linear");
        $(".ease_in_out").fadeToggle(3000, "swing");
    });
    


});