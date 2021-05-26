function getRepo() {
    
    var myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function(){

        console.log("ready state is " + this.readyState);
        
        if (this.readyState === 4 && this.status === 200){

            console.log("status is " + this.status +" "+ this.statusText);
            
            // console.log(this.responseText);

            var myObject = JSON.parse(this.responseText),
                myText = "";
            
            console.log(myObject);

            for (var i = 0; i < myObject.length; i++){

                myText += "<div>" + myObject[i].username + " " + "<span>" + myObject[i].Age + "</span>" + "</div>";
                console.log(myText);
            }
            document.getElementById("show").innerHTML = myText;
            var spanElements = document.getElementsByTagName("span");
            for (var x = 0; x < spanElements.length ; x++){
                spanElements[x].style.color = "yellow" ;
                spanElements[x].style.textDecoration  = "underline" ;

            }
        }
    };

    myRequest.open(
        "GET",
        "usersJson.json",
        true);
    myRequest.send();

}



// https://api.github.com/users/ElzeroWebSchool/repos