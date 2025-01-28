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

const main = document.querySelector("main");
const newPostBtn = document.getElementById("new-post-btn");
const postFieldset = document.querySelector("fieldset");
const newPostImg = document.getElementById("new-post-img");
const imgIcon = document.querySelector("fa-regular");
const postBtn = document.getElementById("post-btn");
const comment = document.querySelector("textaerea");

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

  main.innerHTML += feed;
}

renderFeed();

newPostBtn.addEventListener("click", () => {
  postFieldset.classList.add("active");
  document.body.style.pointerEvents = "none";
  postFieldset.style.pointerEvents = "all";
});

postFieldset.addEventListener("change", () => {
  if(newPostImg.files[0]){
    imgIcon.classList.replace("fa-image", "fa-check");
    imgIcon.classList.replace("fa-regular", "fa-solid");
  }
})

postBtn.addEventListener("click", () => {
  imgIcon.classList.replace("fa-check", "fa-image");
  imgIcon.classList.replace("fa-solid", "fa-regular");

  posts.unshift({
    name: "Per Harald Borgen",
    username: "tharealphd",
    location: "Oslo, Norway",
    avatar: "images/user-avatar.jpg",
    post: newPostImg.files[0],
    comment: comment.value,
    likes: Math.floor(Math.random() * 10000) + 1
  });

  renderFeed();
});