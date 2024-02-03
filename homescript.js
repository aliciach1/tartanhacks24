function sortSummary(that) {
    listHW = document.getElementsByClassName("homework");
    listTest = document.getElementsByClassName("test");
    listEvent = document.getElementsByClassName("event");

    if (that.value == "1") {
        for(i = 0; i < listTest.length; i++){
            listTest[i].style.display = "none";
        }
        for(i = 0; i < listEvent.length; i++){
            listEvent[i].style.display = "none";
        }
        for(i = 0; i < listHW.length; i++){
            listHW[i].style.display = "block";
        }

    } else if(that.value == "2") {
        for(i = 0; i < listTest.length; i++){
            listTest[i].style.display = "block";
        }
        for(i = 0; i < listEvent.length; i++){
            listEvent[i].style.display = "none";
        }
        for(i = 0; i < listHW.length; i++){
            listHW[i].style.display = "none";
        }
    } else if(that.value == "3") {
        for(i = 0; i < listTest.length; i++){
            listTest[i].style.display = "none";
        }
        for(i = 0; i < listEvent.length; i++){
            listEvent[i].style.display = "block";
        }
        for(i = 0; i < listHW.length; i++){
            listHW[i].style.display = "none";
        }
    } else {
        for(i = 0; i < listTest.length; i++){
            listTest[i].style.display = "block";
        }
        for(i = 0; i < listEvent.length; i++){
            listEvent[i].style.display = "block";
        }
        for(i = 0; i < listHW.length; i++){
            listHW[i].style.display = "block";
        }
    }
}

function addNote() {
    var newDiv = document.createElement("div");
    newDiv.className = 'group';

    var inputElem = document.createElement("input");
    inputElem.type = "textarea";
    inputElem.style.height = "100px";
    inputElem.style.width = "90%";
    inputElem.style.padding = "2%";
    newDiv.appendChild(inputElem);

    var btnElem = document.createElement("button");
    btnElem.type = "button";
    btnElem.textContent = "-";
    btnElem.style.border = "black";

    btnElem.addEventListener("click", removeUrlBox);
    newDiv.appendChild(btnElem);

    var element = document.getElementById("NotesWrite");
    element.appendChild(newDiv);
}

function removeUrlBox() {
    this.closest('.group').remove();
}
