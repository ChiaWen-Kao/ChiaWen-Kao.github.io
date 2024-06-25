document.addEventListener("DOMContentLoaded", function() {
    // hide main content
    var header = document.getElementsByTagName('header')[0];
    var footer = document.getElementById('footer');
    var mainContent = document.getElementById('mainContent');

    // check if the element is exist
    if (header) {
        header.style.display = 'none';
    }
    if (footer) {
        footer.style.display = 'none';
    }
    if (mainContent) {
        mainContent.style.display = 'none';
    }

    header.style.display = 'none';
    footer.style.display = 'none';
    mainContent.style.display = 'none';

    // show the text carousel with greetings
    const greetings = ['Hello!', '你好！'];
    var loadingScreen = document.getElementById('loadingScreen');
    var textCarousel = document.getElementById('textCarousel');
    var currentGreetingIndex = 0;

    function displayNextGreeting() {
        textCarousel.innerHTML = greetings[currentGreetingIndex];
        if (currentGreetingIndex < greetings.length) {
            currentGreetingIndex = currentGreetingIndex + 1;
            setTimeout(displayNextGreeting, 1000)  // display each greeting for 0.5 secs
        } else if (currentGreetingIndex == greetings.length) {
            loadingScreen.style.display = 'none';
            header.style.display = 'block';
            footer.style.display = 'block';
            mainContent.style.display = 'block';
        }
    }

    // start displaying greetings
    displayNextGreeting();  // first round
});