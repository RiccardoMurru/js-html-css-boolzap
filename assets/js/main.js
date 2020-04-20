$(document).ready(function () {
    

// refs
var messageInput = $('.chat-footer input');
var micIcon = $('.chat-footer > .fa-microphone');
var sendIcon = $('.chat-footer > .fa-microphone');
var chat = $('.user-chat');
// fake timestamp
var timeStamp = getTime;

// aggiungere messaggio a chat

// cambio icona 
messageInput.on('focus blur', function() {
    sendIcon.toggleClass('fa-microphone fa-paper-plane');
});

// invio messaggio da input
messageInput.keyup(function(e) {
    if (e.which == 13) {
        
        sendMessage();
        $(this).val('');
    };
});


// invio messaggio da click icona
sendIcon.click(function() {
    sendMessage();
    messageInput.val('');
});


// funzione per spedire messaggio
function sendMessage() {
    var messageText = messageInput.val().trim();

    if (messageText.length > 0) {
        var messageTemplate = $('.templates .message').clone();
        messageTemplate.children('.message-text').append(messageText);
        messageTemplate.children('.message-time').append(timeStamp);
        chat.append(messageTemplate);

    }
};


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

