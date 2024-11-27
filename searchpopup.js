document.addEventListener("DOMContentLoaded", () => {
    const popup = document.querySelector('.search-popup');
    const searchInput = document.getElementById('search-input'); // Main screen input
    
    let startY = 0; // Track the initial touch position
    let isDragging = false; // Track dragging status
  
    // Show popup and transform input
    searchInput.addEventListener('click', () => {
        popup.style.bottom = '0'; // Show popup
        searchInput.classList.add('transformed'); // Transform input
    });

    // Start dragging
    popup.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        isDragging = true;
    });

    // Dragging
    popup.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const currentY = e.touches[0].clientY;
        const diffY = currentY - startY;

        // Only allow dragging downwards
        if (diffY > 0) {
            popup.style.bottom = `-${diffY}px`;
        }
    });

    // End dragging
    popup.addEventListener('touchend', (e) => {
        isDragging = false;

        // If dragged down far enough, hide the popup
        const diffY = e.changedTouches[0].clientY - startY;
        if (diffY > 200) {
            popup.style.bottom = '-100%'; // Hide popup
            searchInput.classList.remove('transformed'); // Reset input transformation
        } else {
            popup.style.bottom = '0'; // Reset to visible state
        }
    });
});
