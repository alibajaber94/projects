$(function(){
    $.getJSON("usersJson.json", function(json_Data){
        console.log(json_Data);

        var containt = '';

        for (let x in json_Data){

            containt += "<div>" + json_Data[x].username + "</div>";
            containt += "<p>" + json_Data[x].Age + "</p>";
        }

        $("#info").html(containt);
        // $("div.info").css("display", "inline");
        // $("span.info").css("display", "block");

    });
});