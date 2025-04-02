document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video');
    
    // Prevent right-click/download
    videos.forEach(video => {
        video.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            alert('Video downloading is disabled to protect tutor content.');
        });
        
        // Add dynamic watermark
        video.addEventListener('play', function() {
            const watermark = document.createElement('div');
            watermark.className = 'video-watermark';
            watermark.textContent = 'Hobbitant - ' + new Date().toLocaleString();
            
            const container = video.parentElement;
            container.style.position = 'relative';
            container.appendChild(watermark);
            
            // Update watermark position periodically
            const updateWatermark = () => {
                if (!video.paused) {
                    watermark.textContent = 'Hobbitant - ' + new Date().toLocaleString();
                    setTimeout(updateWatermark, 1000);
                }
            };
            updateWatermark();
        });
    });
});