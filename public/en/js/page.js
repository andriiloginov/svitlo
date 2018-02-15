$(document).ready(function() {
    $( '#menu' ).load('../snippets/menu.html');

    $('#fullpage').fullpage({
        continuousVertical: false,
        autoScrolling: false
    });
});