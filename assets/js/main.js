$(document).ready(function () {
    

// refs
var messageInput = $('.chat-footer input');
var sendIcon = $('.chat-footer > .fa-microphone');
var chat = $('.user-chat');
var timeStamp = getTime();
var searchBar = $('#search-input');
var user = $('.user');
var contactHeaderName = $('.chat-header .contact-details .user-name');




// Selezione chat attiva 
user.click( function() {

    // assegno attributo data-chat del contatto a variabile
    var chatId = $(this).attr('data-chat');
    // assegno attributo src dell'avatar a variabile
    var imgSrc = $(this).children('.avatar').attr('src');
    

    // rimuovo classe active da tutte le chat e dai contatti
    chat.removeClass('active');
    user.removeClass('active');

    
    // aggiungo classe active alla chat con data-chat uguale a contatto
    $('.user-chat[data-chat="' + chatId + '"]').addClass('active').show();
    
    // aggiungo dettagli contatto in header chat
    contactHeaderName.text($(this).find('.user-name').text());
    $('.chat-header .avatar').attr('src', imgSrc);
   
    
    // aggiungo classe active a contatto attivo
    $(this).addClass('active');

    
});

// aggiungere messaggio a chat
// cambio icona 
messageInput.on('focus blur', function() {
    sendIcon.toggleClass('fa-microphone fa-paper-plane');

});


// invio messaggio da input
messageInput.keyup(function(e) {
    var messageText = $(this).val().trim();

    if (messageText.length > 0) {
        if (e.which == 13) {
            sendMessage();
            // risposta automatica dopo 1 secondo
            setTimeout(receiveBot, 1000);
           
        };
    };
});


// invio messaggio da click icona
sendIcon.click(function() {
    var messageText = messageInput.val().trim();

    if (messageText.length > 0) {
        sendMessage();
        // risposta automatica dopo 1 secondo
        setTimeout(receiveBot, 1000);

    };
});

// ricerca contatti in sidebar
searchBar.keyup(function() {
    var searchLetters = $(this).val().toLowerCase().trim();
    
    $('.user-details .user-name').each(function() {
        var contactName = $(this).text().toLowerCase();
        
        if (contactName.includes(searchLetters)) {
            $(this).parents('.user').show();

        } else {
            $(this).parents('.user').hide();

        } 
    });
});


/*************
 * FUNZIONI
 *************/

// funzione per spedire messaggio
function sendMessage() {
    var messageText = messageInput.val().trim();
    var messageTemplate = $('.templates .message').clone().addClass('sent');

    messageTemplate.children('.message-text').text(messageText);
    messageTemplate.children('.message-time').text(timeStamp);
    $('.user-chat.active').append(messageTemplate);
    messageInput.val('');

    // auto scroll
    scroll();
};

// funzione per risposta automatica
function receiveBot() {
    var messageTemplate = $('.templates .message').clone().addClass('received');
    messageTemplate.children('.message-text').text('Ok');
    messageTemplate.children('.message-time').text(timeStamp);
    $('.user-chat.active').append(messageTemplate);

    // auto scroll
    scroll();
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
};

// funzione per scrollare all'aggiunta dei messaggi
function scroll() {
    var height = $('.user-chat').height();
    $('.chat-main').animate({
       scrollTop: height, 
    }, 400);
};


}); // end doc ready

