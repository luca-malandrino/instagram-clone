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
        <div class="container">
          <img src=${user.avatar} alt="${user.name}'s profile picture.">
          <div>
            <h2>${user.name}</h2>
            <p>${user.location}</p>
          </div>
        </div>
      </div>

      <img src=${user.post} class="post-img" alt="A selfie / self-portrait of ${user.name}.">

      <div class="btn-container">
        <div class="container">
          <img src="images/icon-heart.png" alt="Like button.">
          <img src="images/icon-comment.png" alt="Comment button.">
          <img src="images/icon-dm.png" alt="DM button.">
        </div>
      </div>

      <div class="post-stats">
        <div class="container">
          <h2 class="like-num">${user.likes} likes</h2>
          <p><span class="username">${user.username}</span> ${user.comment}</p>
        </div>
      </div>
    `
    ; 
  }

  document.querySelector("main").innerHTML += feed;
}

renderFeed();

document.getElementById("new-post-btn").addEventListener("click", () => {
  document.querySelector("fieldset").classList.add("active");
  document.body.style.pointerEvents = "none";
});

document.getElementById("new-post-img").addEventListener("change", () => {
  if(document.getElementById('new-post-img').files[0]){
    document.querySelector(".fa-regular").classList.replace("fa-image", "fa-check");
    document.querySelector(".fa-regular").classList.replace("fa-regular", "fa-solid");
  }
})
