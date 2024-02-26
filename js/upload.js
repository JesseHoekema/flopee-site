// upload.js
document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    uploadForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const videoFile = document.getElementById('videoFile').files[0];
      const storageRef = firebase.storage().ref(`videos/${videoFile.name}`);
      const uploadTask = storageRef.put(videoFile);
  
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Progress monitoring if needed
        },
        (error) => {
          console.error('Error uploading video:', error);
        },
        () => {
          console.log('Video uploaded successfully!');
          alert('Video uploaded successfully!');
          uploadForm.reset();
        }
      );
    });
  });
  