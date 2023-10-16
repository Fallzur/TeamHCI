window.addEventListener("load", function () {
    // Function to hide the loader
    function hideLoader() {
        document.getElementById("loader-overlay").style.display = "none";
    }

    // Simulate page load (replace with your actual content loading event)
    setTimeout(function () {
        hideLoader();
    }, 2000); // Adjust the time as needed
});

