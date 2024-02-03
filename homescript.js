function yesnoCheck(that) {
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