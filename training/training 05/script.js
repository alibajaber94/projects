var btn = document.querySelector("button");

btn.onclick = () =>{
    window.print();
}

var printArea = document.getElementById('printArea');

var myAll_div   = document.querySelectorAll("div"),
    myAll_p     = document.querySelectorAll("p"),
    myAll_span  = document.querySelectorAll("span"),
    myAll_h1    = document.querySelectorAll("h1"),
    myAll_h3    = document.querySelectorAll("h3"),
    myAll_h4    = document.querySelectorAll("h4"),
    myAll_h5    = document.querySelectorAll("h5");


for (let i = 0; i < myAll_div.length; i++){
     
    myAll_div[i].contentEditable = "true"; 

}
for (let i = 0; i < myAll_p.length; i++){
     
    myAll_p[i].contentEditable = "true"; 

}
for (let i = 0; i < myAll_span.length; i++){
     
    myAll_span[i].contentEditable = "true"; 

}
for (let i = 0; i < myAll_h1.length; i++){
     
    myAll_h1[i].contentEditable = "true"; 

}
for (let i = 0; i < myAll_h3.length; i++){
     
    myAll_h3[i].contentEditable = "true"; 

}
for (let i = 0; i < myAll_h4.length; i++){
     
    myAll_h4[i].contentEditable = "true"; 

}
for (let i = 0; i < myAll_h5.length; i++){
     
    myAll_h5[i].contentEditable = "true"; 

}