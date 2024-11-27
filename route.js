document.addEventListener("DOMContentLoaded", () => {
  const openPopupButtons = document.querySelectorAll('.open-popup-btn'); // Select all buttons with the 'open-popup-btn' class
  const popup = document.querySelector('.stop-popup');
  const popupTitle = popup.querySelector('h3');
  const busList = popup.querySelector('.busess');

  let startY = 0; // Track the initial touch position
  let isDragging = false; // Track dragging status

  // Show popup and update content
  openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
      
     /* const stopName = button.getAttribute('data-stop-name') || "Stop Name";

      
      const buses = JSON.parse(button.getAttribute('data-buses')) || [];

      
      popupTitle.textContent = stopName;
      busList.innerHTML = buses.map(bus => `
        <div class="bussec">
          <div>
            <img src="front-of-bus.png" alt="">
            <span>${bus.name}</span>
          </div>
          <span>${bus.fare}</span>
        </div>
      `).join('');*/

      popup.style.bottom = '0'; // Show popup
    });
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
    } else {
      popup.style.bottom = '0'; // Reset to visible state
    }
  });
});
