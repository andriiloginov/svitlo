$(document).ready(function() {
    $('#menu').load('../../snippets/menu.html');
    $('#footer').load('../../snippets/footer.html');

    $('#fullpage').fullpage({
        continuousVertical: false,
        autoScrolling: false
    });
});
