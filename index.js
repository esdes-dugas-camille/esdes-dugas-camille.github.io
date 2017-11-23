console.log(document);

var name= "camille";

function changeName(newName){
    name = newName;
    alert(name);
}

function changeClass(newName){
   var button = document.getElementById("myButton");
   if (button.className =="rotate"){
    button.className = "";

} else {
     button.className = "rotate";

}
}

