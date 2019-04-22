$(document).ready(function() {
    $('#js-yoBtn').on('click', clickYoButton);
    $('#container').on('click', '.js-delete', deleteBox);
});

let clickCount = 0;

function deleteBox() {
    $(this).parent().remove();
}

function clickYoButton() {
    if(clickCount >= 3) {
        clickCount = 0;
    }

    clickCount++;
    $('#container').append('<div class="box"></div>');
    let divJustCreated = $('#container').children().last();
    divJustCreated.append('<button class="js-delete">delete</button>');

    if (clickCount == 1) {
        divJustCreated.addClass('red');
    } else if(clickCount == 2) {
        divJustCreated.addClass('yellow');
    } else if(clickCount == 3) {
        divJustCreated.addClass('green');
    }
}

