$(document).ready(function () {
    

// refs
var messageInput = $('.chat-footer input');
var micIcon = $('.chat-footer > .fa-microphone');
var sendIcon = $('.chat-footer > .fa-paper-plane');
var chat = $('.user-chat');

// fake timestamp
var timeStamp = '15:45';

// aggiungere messaggio a chat

// cambio icona 
messageInput.focus(function() {
    sendIcon.show();
    micIcon.hide();
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

    var messageText = messageInput.val();
    var messageTemplate = $('.templates .message').clone();
    messageTemplate.children('.message-text').append(messageText);
    messageTemplate.children('.message-time').append(timeStamp);
    chat.append(messageTemplate);
};



    

}); // end doc ready