// static/github.js
document.addEventListener('DOMContentLoaded', function() {
  const username = 'barishaxxer'; // Replace with your GitHub username
  const url = `https://api.github.com/users/${username}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const profileContainer = document.getElementById('github-profile');
      if (profileContainer) {
        profileContainer.innerHTML = `
          <h2>${data.name}</h2>
          <img src="${data.avatar_url}" alt="${data.name}" style="width: 100px; height: 100px; border-radius: 50%;">
          <p>${data.bio || 'No bio available.'}</p>
          <a href="${data.html_url}" target="_blank">View GitHub Profile</a>
        `;
      }
    })
    .catch(error => {
      console.error('Error fetching GitHub profile:', error);
    });
});
