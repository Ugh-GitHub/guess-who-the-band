console.log('Here are all the available people:', people);

$(document).ready(loadUp);


function loadUp() {
    console.log('Hello Jquery');
    divBuilder(people);
}

function divBuilder(objArray) {
    console.log("in divAppend");
    objArray.forEach(element => {
        // console.log(element.githubUsername)
        $('#buildSite').append(`<div data-name='${element.name}' 
        data-githubUsername='${element.githubUsername}'>Some Text</div>`)
    });
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}