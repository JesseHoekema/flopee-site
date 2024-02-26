// gallery.js
document.addEventListener('DOMContentLoaded', async () => {
    const videoGallery = document.getElementById('videoGallery');
    const storageRef = firebase.storage().ref('videos');
    const videoList = await storageRef.listAll();
  
    videoList.items.forEach(async (videoRef) => {
      const videoUrl = await videoRef.getDownloadURL();
      const videoElement = document.createElement('video');
      videoElement.src = videoUrl;
      videoElement.controls = true;
      videoGallery.appendChild(videoElement);
    });
  });
  