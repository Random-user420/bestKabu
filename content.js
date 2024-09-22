chrome.runtime.onMessage.addListener((request) => {
    if (request.color) {
        set_stored_color(request.color);
        const elements = document.querySelectorAll('.weekdayToday');
        elements.forEach((el) => {
            el.style.setProperty('fill', request.color, 'important');
        });
    }
    else if (request.pawssword && request.username) {
        processCredentials(request.username, request.pawssword);
    }
});
