// The computer chooses a random number between 1 and 9, and logs it to the console.
var chosenOne = Math.floor((Math.random()*9)+1);
console.log(chosenOne);

// Function to submit the user's choice
function pickOne(){
    var choice = $(this).attr('cardNum');
        distance = Math.abs(choice - chosenOne);
    if (distance == 0) {
        $('.feedback').text("Nice! You got it.").css({color:"#333"}).show();
        $('.reset').show();
        $(this).css({'background-color':'#5CD357'});
    } else if (distance == 1) {
        $(this).css({'background-color':'#FF5757'});
    } else if (distance == 2) {
        $(this).css({'background-color':'#FF8657'});
    } else if (distance == 3) {
        $(this).css({'background-color':'#FFCB47'});
    } else if (distance == 4) {
        $(this).css({'background-color':'#FFDC83'});
    } else if (distance == 5) {
        $(this).css({'background-color':'#92CCE7'});
    } else if (distance == 6) {
        $(this).css({'background-color':'#5EAFD5'});
    } else if (distance == 7) {
        $(this).css({'background-color':'#4897BD'});
    } else {
        $(this).css({'background-color':'#2C72A2'});
    }
}

function reset(){
    chosenOne = Math.floor((Math.random()*9)+1);
    console.log(chosenOne);
    $('.cards ul li').css({'background-color': '#aaa'});
    $('.reset').hide();
    $('.feedback').hide();
}

$(document).ready(function(){

    // Run the pickOne function once a card has been chosen...
    $('.cards ul li').click(pickOne);

    // Reload the browser to reset the game, and pick another random number
    $('.reset').click(reset);

});
