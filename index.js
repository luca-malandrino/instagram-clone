const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152
  }
]

function renderFeed() {
  let feed = "";

  for(let i = 0; i < posts.length; i++) {
    let user = posts[i];
    feed += 
    `
      <div class="painter-profile">
        <img src=${user.avatar} alt="A selfie / self-portrait of ${user.name}.">
        <h2>${user.name}</h2>
        <p>${user.location}</p>
      </div>

      <img src=${user.post}>

      <div class="btn-container">
        <img src="images/icon-heart.png" alt="Like button.">
        <img src="images/icon-comment.png" alt="Comment button.">
        <img src="images/icon-dm.png" alt="DM button.">
      </div>

      <div class="post-stats">
        <p class="like-num">${user.likes} likes</p>
        <p><span class="username">${user.username}</span> ${user.comment}</p>
      </div>
    `
    ; 
  }

  document.body.innerHTML += feed;
}

renderFeed();