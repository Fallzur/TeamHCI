// Get the video element by its ID
const video = document.getElementById('autoplayVideo');

// Function to handle video play/pause and mute
function handleVideoPlay(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // When the video is in the viewport, play it and mute it
            video.play();
            video.volume = 0; // Set the volume to 0 (muted)
        } else {
            // When the video is not in the viewport, pause it and restore the volume
            video.pause();
            video.volume = 1; // Restore the volume to 1 (unmuted)
        }
    });
}

// Create an Intersection Observer with a callback function
const observer = new IntersectionObserver(handleVideoPlay);

// Observe the video element
observer.observe(video);


