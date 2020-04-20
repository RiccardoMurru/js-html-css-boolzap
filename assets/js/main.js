$(document).ready(function () {
    

// refs
var messageInput = $('.chat-footer input');
var sendIcon = $('.chat-footer > .fa-microphone');
var chat = $('.user-chat.active');
var timeStamp = getTime();


// aggiungere messaggio a chat
// cambio icona 
messageInput.on('focus blur', function() {
    sendIcon.toggleClass('fa-microphone fa-paper-plane');
});

// invio messaggio da input
messageInput.keyup(function(e) {
    if (e.which == 13) {
        sendMessage();
        // risposta automatica dopo 1 secondo
        setTimeout(receiveBot, 1000);
    };
});


// invio messaggio da click icona
sendIcon.click(function() {
    sendMessage();
    // risposta automatica dopo 1 secondo
    setTimeout(receiveBot, 1000);
});




/*************
 * FUNZIONI
 *************/

// funzione per spedire messaggio
function sendMessage() {
    var messageText = messageInput.val().trim();

    if (messageText.length > 0) {
        var messageTemplate = $('.templates .message').clone().addClass('sent');
        messageTemplate.children('.message-text').text(messageText);
        messageTemplate.children('.message-time').text(timeStamp);
        chat.append(messageTemplate);
        messageInput.val('');

    }
};

// funzione per risposta automatica
function receiveBot() {
    var messageTemplate = $('.templates .message').clone().addClass('received');
    messageTemplate.children('.message-text').text('Ok');
    messageTemplate.children('.message-time').text(timeStamp);
    chat.append(messageTemplate);
}

// funzione per timestamp
function getTime() {
    var date = new Date;
    var hours = date.getHours();
    var mins = date.getMinutes();

    if (hours < 10) { 
        hours = '0' + hours;
    } else if (mins < 10) {
        mins = '0' + mins;
    }


    return hours + ':' + mins;

}


}); // end doc ready

