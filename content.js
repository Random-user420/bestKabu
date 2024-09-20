chrome.runtime.onMessage.addListener((request) => {
    if (request.color) {
        const elements = document.querySelectorAll('.weekdayToday');
        elements.forEach((el) => {
            el.style.setProperty('fill', request.color, 'important');
        });
    }
});
