document.getElementById('uploadBtn').addEventListener('click', () => {
    document.getElementById('uploadForm').classList.toggle('hidden');
});

document.getElementById('submitBtn').addEventListener('click', () => {
    const videoFile = document.getElementById('videoFile').files[0];
    const videoName = document.getElementById('videoName').value;
    const privacy = document.getElementById('privacy').value;

    if (videoFile && videoName) {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video');
        videoElement.dataset.url = URL.createObjectURL(videoFile);  // Temporarily URL for local file

        const videoTitle = document.createElement('h3');
        videoTitle.textContent = videoName;

        const videoPrivacy = document.createElement('p');
        videoPrivacy.textContent = `Privacy: ${privacy}`;

        videoElement.appendChild(videoTitle);
        videoElement.appendChild(videoPrivacy);
        videoElement.addEventListener('click', () => {
            window.open(`video.html?url=${encodeURIComponent(videoElement.dataset.url)}&name=${encodeURIComponent(videoName)}`, '_blank');
        });

        document.getElementById('videos').appendChild(videoElement);

        document.getElementById('uploadForm').classList.add('hidden');
        document.getElementById('videoFile').value = '';
        document.getElementById('videoName').value = '';
        document.getElementById('privacy').value = 'public';
    } else {
        alert('Please fill out all fields.');
    }
});
