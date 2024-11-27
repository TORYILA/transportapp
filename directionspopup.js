document.addEventListener("DOMContentLoaded", () => {
    const directionsPopup = document.querySelector('.directions-div');
    const secondRecentDivs = document.querySelectorAll('.second-recent'); // All second-recent divs
    const closeIndicator = directionsPopup.querySelector('.close-indicator-directions');
    const searchInputII = document.getElementById('search-inputII'); // Input to autofill

    // Function to show directions popup
    const showDirectionsPopup = (event) => {
        directionsPopup.style.bottom = '0'; // Slide up from the bottom

        // Get specific text from the clicked element
        const locationText = event.currentTarget.querySelector('#recent-txt span:first-child').textContent;
        
        // Autofill the input
        searchInputII.value = locationText;
    };

    // Function to hide directions popup
    const hideDirectionsPopup = () => {
        directionsPopup.style.bottom = '-100%'; // Hide to bottom
    };

    // Add click event listener to all second-recent divs
    secondRecentDivs.forEach(div => {
        div.addEventListener('click', showDirectionsPopup);
    });

    // Close the popup when close indicator is clicked
    closeIndicator.addEventListener('click', hideDirectionsPopup);

    // Handle drag-to-close functionality
    let startY = 0; // Initial touch position
    let isDragging = false; // Drag status

    directionsPopup.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        isDragging = true;
    });

    directionsPopup.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const currentY = e.touches[0].clientY;
        const diffY = currentY - startY;

        // Only allow dragging downwards
        if (diffY > 0) {
            directionsPopup.style.bottom = `-${diffY}px`;
        }
    });

    directionsPopup.addEventListener('touchend', (e) => {
        isDragging = false;
        const diffY = e.changedTouches[0].clientY - startY;

        // If dragged down far enough, hide the popup
        if (diffY > 200) {
            hideDirectionsPopup();
        } else {
            directionsPopup.style.bottom = '0'; // Reset to visible state
        }
    });
});
