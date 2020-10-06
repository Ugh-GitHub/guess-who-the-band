console.log('Here are all the available people:', people);

$(document).ready(loadUp);
let pick = randomNumber(0,people.length-1);


function loadUp() {
    console.log('Hello Jquery');
    
    // console.log(pick);
    divBuilder(people);

    $('#prompt').empty();
    $('#prompt').append('Here are the guesses: ',people[pick].name);
    $('#buildSite').on('click','.gamePiece',guessChecker);
    
}



function divBuilder(objArray) {
    console.log("in divBuilder");
    for (let i = 0; i < objArray.length; i++) {
        $(buildSite).append(`<div>
        <input type="image" data-id=${[i]} data-name=${objArray[i].name} src="Images/${objArray[i].githubUsername}.jpeg" class="gamePiece" />
        </div>`);
        
    }
    // objArray.forEach(element => {
    //     // console.log(element.githubUsername)
        // $(buildSite).append(`<div data-id=${element}>
        // <input type="image" src="Images/${element.githubUsername}.jpeg" name="guessWho" class="gamePiece" />
        // </div>`)
    // });
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function guessChecker() {
    console.log('in guessChecker');
    console.log($(this).data('id'));
    if (pick == $(this).data('id')) {
        window.alert("You got it!!!");
        pick = randomNumber(0,people.length-1);
        $('#prompt').empty();
        $('#prompt').append('Here are the guesses: ',people[pick].name);
    }
    else {
    window.alert("try again");
    }
}