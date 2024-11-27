document.addEventListener("DOMContentLoaded", () => {
    const firstRecent = document.querySelectorAll(".second-recent");
    const transitionContainers = document.querySelectorAll(".transition-container");

    // Initially hide all transition containers
    transitionContainers.forEach(container => {
        container.style.height = "0";
        container.style.overflow = "hidden"; // Prevent content spill
        container.style.transition = "height 0.3s ease";
    });

    let openContainer = null; // Track the currently open container

    firstRecent.forEach((recent, index) => {
        recent.addEventListener("click", () => {
            const targetContainer = transitionContainers[index];

            // Close the currently open container, if any
            if (openContainer && openContainer !== targetContainer) {
                openContainer.style.height = "0";
            }

            // Toggle the clicked container
            if (targetContainer.style.height === "0px") {
                targetContainer.style.height = `${targetContainer.scrollHeight}px`; // Open
                openContainer = targetContainer; // Update the open container
            } else {
                targetContainer.style.height = "0"; // Close
                openContainer = null; // Reset the open container tracker
            }
        });
    });
});
