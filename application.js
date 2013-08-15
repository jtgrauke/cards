// The computer chooses a random number between 1 and 9, and logs it to the console.
var chosenOne = Math.floor((Math.random()*9)+1);
console.log(chosenOne);

// Function to submit the user's choice
function pickOne(){
    var choice = $(this).attr('cardNum');
        distance = Math.abs(choice - chosenOne);
        cardColor = Array('#5CD357', '#FF5757', '#FF8657', '#FFCB47', '#FFDC83', '#92CCE7', '#5EAFD5', '#4897BD', '#2C72A2');

    switch (distance) {
        case 1:
            $(this).css({'background-color':cardColor[1]});
            break;
        case 2:
            $(this).css({'background-color':cardColor[2]});
            break;
        case 3:
            $(this).css({'background-color':cardColor[3]});
            break;
        case 4:
            $(this).css({'background-color':cardColor[4]});
            break;
        case 5:
            $(this).css({'background-color':cardColor[5]});
            break;
        case 6:
            $(this).css({'background-color':cardColor[6]});
            break;
        case 7:
            $(this).css({'background-color':cardColor[7]});
            break;
        case 8:
            $(this).css({'background-color':cardColor[8]});
            break;
        default:
            $('.feedback').text("Nice! You got it.").show();
            $('.reset').show();
            $(this).css({'background-color':cardColor[0]});
            break;
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
