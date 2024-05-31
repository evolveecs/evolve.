// Function to increase the percentage value and update the display
function increasePercentage(elementId) {
    const element = document.getElementById(elementId);
    let currentValue = parseInt(element.textContent.replace('%', ''));
    currentValue += 5; // Increase by 5 percentage points
    if (currentValue > 100) {
        currentValue = 100; // Cap at 100%
    }
    element.textContent = currentValue + '%';
}

// Function to update the Hyderabad e-waste statistics with a smooth animation
function updateHyderabadStats() {
    const hyderabadEWasteGenerated = document.getElementById('hyderabadEWasteGenerated');
    const hyderabadEWasteRecyclingRate = document.getElementById('hyderabadEWasteRecyclingRate');

    // Animate the e-waste generated value
    let currentGenerated = 20000;
    const targetGenerated = 25000; // Target value for e-waste generated in metric tons
    const incrementGenerated = (targetGenerated - currentGenerated) / 100;

    const generateAnimationFrame = () => {
        currentGenerated += incrementGenerated;
        if (currentGenerated >= targetGenerated) {
            currentGenerated = targetGenerated;
        }
        hyderabadEWasteGenerated.textContent = `${Math.round(currentGenerated)} mt`;
        if (currentGenerated < targetGenerated) {
            requestAnimationFrame(generateAnimationFrame);
        }
    };
    generateAnimationFrame();

    // Animate the recycling rate value
    let currentRecyclingRate = 12;
    const targetRecyclingRate = 20; // Target value for recycling rate in percentage
    const incrementRecyclingRate = (targetRecyclingRate - currentRecyclingRate) / 100;

    const recyclingAnimationFrame = () => {
        currentRecyclingRate += incrementRecyclingRate;
        if (currentRecyclingRate >= targetRecyclingRate) {
            currentRecyclingRate = targetRecyclingRate;
        }
        hyderabadEWasteRecyclingRate.textContent = `${currentRecyclingRate.toFixed(1)}%`;
        if (currentRecyclingRate < targetRecyclingRate) {
            requestAnimationFrame(recyclingAnimationFrame);
        }
    };
    recyclingAnimationFrame();
}

// Call the updateHyderabadStats function when the page loads
window.onload = updateHyderabadStats;