// The computer chooses a random number between 1 and 9, and logs it to the console.
var chosenOne = Math.floor((Math.random()*9)+1);
console.log(chosenOne);

// Function to submit the user's choice
function pickOne(){
    var choice = $(this).attr('cardNum');
        distance = Math.abs(choice - chosenOne);
    if (distance == 0) {
        $('.feedback').text("Nice! You got it.").css({color:"#333"});
        $('.reset').show();
        $(this).css({'background-color':'#65DF74'});
    } else if (distance == 1) {
        $('.feedback').text("SO CLOSE!");
        $(this).css({'background-color':'#EB3030'});
    } else if (distance == 2) {
        $('.feedback').text("Close.");
        $(this).css({'background-color':'#FF5757'});
    } else if (distance == 3) {
        $('.feedback').text("Close but no cigar.");
        $(this).css({'background-color':'#FFCB47'});
    } else if (distance == 4) {
        $('.feedback').text("Hmmm, yeah no.");
        $(this).css({'background-color':'#FFDC83'});
    } else if (distance == 5) {
        $('.feedback').text("Ooo, off by about ' — ' much.");
        $(this).css({'background-color':'#92CCE7'});
    } else if (distance == 6) {
        $('.feedback').text("Yikes, nope.");
        $(this).css({'background-color':'#5EAFD5'});
    } else if (distance == 7) {
        $('.feedback').text("Waaay off.");
        $(this).css({'background-color':'#4897BD'});
    } else {
        $('.feedback').text("Try the other side!");
        $(this).css({'background-color':'#2C72A2'});
    }

    $('.feedback').show();
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
