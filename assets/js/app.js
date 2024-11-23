
function valuePush(){
    var userInput = prompt("Enter Do You Want To Push!");
    if(userInput === null || userInput === ""){
        alert("Please Enter The Do You Want!");
    }
    else{
        createParagraph(userInput, "end");
    }
}

function valuePop(){
    var container = document.getElementById("result");
    if (container.lastElementChild.tagName === "P") {
        container.removeChild(container.lastElementChild);
    } else {
        alert("Nothing To Remove!");
    }
}

function valueShift(){
    var container = document.getElementById("result");
    var firstParagraph = container.querySelector("p");
    if (firstParagraph) {
        container.removeChild(firstParagraph);
    } else {
        alert("Nothing To Remove!");
    }
}

function valueUnshift(){
    var userInput = prompt("Enter Do You Want To Unshift!");
    if(userInput === null || userInput === ""){
        alert("Please Enter The Do You Want!");
    }
    else{
        createParagraph(userInput, "start");
    }
}

function createParagraph(text, position) {
    var container = document.getElementById("result");
    var newP = document.createElement("p");
    newP.textContent = text;

    if (position === "start") {
        container.prepend(newP);
    } else if (position === "end") {
        container.appendChild(newP);
    }
}
