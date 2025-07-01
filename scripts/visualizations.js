// Global variables for animation delay control
let c_delay = 0;         // Cumulative delay for setTimeout scheduling
let delay_time = 100;    // Initial animation speed (ms)

// Dynamically adjust delay_time based on speed slider
const speedInput = document.getElementById("a_speed");
if (speedInput) {
    speedInput.addEventListener("input", function () {
        delay_time = 320 - parseInt(this.value) * 60;
    });
}

// Function to update a bar (height and color) with animation
function div_update(div, height, color) {
    window.setTimeout(() => {
        div.style.height = height + "%";
        div.style.backgroundColor = color;
    }, c_delay);
    
    c_delay += delay_time;
}

// Re-enable sorting buttons and sliders after sorting completes
function enable_buttons() {
    window.setTimeout(() => {
        document.querySelectorAll(".algos button").forEach(btn => {
            btn.classList.remove("butt_locked");
            btn.disabled = false;
        });

        document.getElementById("a_generate").disabled = false;
        document.getElementById("a_size").disabled = false;
        document.getElementById("a_speed").disabled = false;
    }, c_delay);
}
