// The computer chooses a random number between 1 and 9, and logs it to the console.
var chosenOne = Math.floor((Math.random()*9)+1);
console.log(chosenOne);

// Function to submit the user's choice
function pickOne(){
    var choice = $(this).attr('cardNum');
        distance = Math.abs(choice - chosenOne);

    switch (distance) {
        case 1:
            $(this).addClass('wrong-by-1');
            break;
        case 2:
            $(this).addClass('wrong-by-2');
            break;
        case 3:
            $(this).addClass('wrong-by-3');
            break;
        case 4:
            $(this).addClass('wrong-by-4');
            break;
        case 5:
            $(this).addClass('wrong-by-5');
            break;
        case 6:
            $(this).addClass('wrong-by-6');
            break;
        case 7:
            $(this).addClass('wrong-by-7');
            break;
        case 8:
            $(this).addClass('wrong-by-8');
            break;
        default:
            $('.feedback').text("Nice! You got it.").show();
            $('.reset').show();
            $(this).addClass('correct');
            break;
    }
}

function reset(){
    chosenOne = Math.floor((Math.random()*9)+1);
    console.log(chosenOne);
    $('.cards ul li').removeClass();
    $('.reset').hide();
    $('.feedback').hide();
}

$(document).ready(function(){

    // Run the pickOne function once a card has been chosen...
    $('.cards ul li').click(pickOne);

    // Reload the browser to reset the game, and pick another random number
    $('.reset').click(reset);

});
