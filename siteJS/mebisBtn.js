function showMebisButton() {
    if (window.location.pathname.includes("Stundenplan")) {
        let box = document.getElementById("stdplanheading");
        if (box === null) {
            box = document.querySelector('div[style="margin-left:10px;"]');
        }

        if (box) { // Check if box exists before appending
            const mebisButton = document.createElement('button');
            mebisButton.textContent = 'Mebis';
            mebisButton.id = 'mebisButton';

            // Style the button (optional)
            mebisButton.style.padding = '10px 20px';
            mebisButton.style.fontSize = '16px';
            mebisButton.style.cursor = 'pointer';

            // Add an event listener to handle the click event
            mebisButton.addEventListener('click', () => {
                window.open('https://portal.bycs.de/', '_blank');
            });

            // Append the button to the box
            box.appendChild(mebisButton);
        } else {
            console.warn("Element for Mebis button not found. Retrying...");
            // Retry after a short delay if element is not found
            setTimeout(showMebisButton, 1000);
        }
    }
}
