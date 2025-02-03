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
  const main = document.querySelector("main");

  for(let i = 0; i < posts.length; i++) {
    let user = posts[i];
    feed += 
    `
      <div>
        <div class="painter-profile">
          <div class="container">
            <img src=${user.avatar} alt="${user.name}'s profile picture.">
            <div>
              <h2>${user.name}</h2>
              <p>${user.location}</p>
            </div>
          </div>
        </div>

        <img src=${user.post} id="post-${i}" class="post-img" alt="A selfie / self-portrait of ${user.name}.">

        <div class="btn-container">
          <div class="container">
            <img src="images/icon-heart.png" class="like-btn" id="like-btn-${i}" alt="Like button.">
            <img src="images/icon-comment.png" alt="Comment button.">
            <img src="images/icon-dm.png" alt="DM button.">
          </div>
        </div>

        <div class="post-stats">
          <div class="container">
            <h2 class="like-num" id="like-${i}">${user.likes} likes</h2>
            <p><span class="username">${user.username}</span> ${user.comment}</p>
          </div>
        </div>
      </div>
    `
    ; 
  }

  main.innerHTML += feed;

  const newPostBtn = document.getElementById("new-post-btn");
  const newPostFieldset = document.querySelector("fieldset");
  const newPostImg = document.getElementById("new-post-img");
  const imgIcon = document.querySelector(".fa-regular");
  const postBtn = document.getElementById("post-btn");
  const comment = document.querySelector("textarea");
  const postImgs = document.querySelectorAll(".post-img");
  const likeBtns = document.querySelectorAll(".like-btn");
  const xBtn = document.querySelector(".x-btn");

  newPostBtn.addEventListener("click", () => {
    newPostFieldset.classList.add("active");
    document.body.style.pointerEvents = "none";
  });
  
  newPostImg.addEventListener("change", () => {
    if(newPostImg.files[0]){
      imgIcon.classList.replace("fa-image", "fa-check");
      imgIcon.classList.replace("fa-regular", "fa-solid");
    }
  })
  
  postBtn.addEventListener("click", () => {
    if(!comment.value || !newPostImg.value) {
      window.alert("select an image and enter a comment");
    } else {
      const checkIcon = document.querySelector(".fa-solid");
      newPostFieldset.classList.remove("active");
      checkIcon.classList.replace("fa-check", "fa-image");
      checkIcon.classList.replace("fa-solid", "fa-regular");
    
      posts.unshift({
        name: "Per Harald Borgen",
        username: "tharealphd",
        location: "Oslo, Norway",
        avatar: "images/user-avatar.png",
        post: URL.createObjectURL(newPostImg.files[0]),
        comment: comment.value,
        likes: Math.floor(Math.random() * 100000) + 1
      })
    
      main.innerHTML = `
        <div class="container">
          <button aria-label="New post." id="new-post-btn">+</button>
        </div>
    
        <fieldset>
          <input type="file" id="new-post-img" accept="image/*" aria-label="Select an image to post.">
          <label for="new-post-img"><i class="fa-regular fa-image"></i></label>
    
          <label for="comment">Comment</label>
          <textarea id="comment"></textarea>
    
          <button id="post-btn" type="submit">Post</button>
        </fieldset>`;

      renderFeed();
      document.body.style.pointerEvents = "all";
    }

  })

  postImgs.forEach(postImg => {
    postImg.addEventListener("dblclick", () => {
      let liked = "images/icon-heart - Copia.png";
      let notLiked = "images/icon-heart.png";
      let postIndex = Number(postImg.id.split("-").pop());
      let likeEl = document.getElementById("like-" + postIndex);

      if(likeBtns[postIndex].src.endsWith(notLiked)) {
        likeEl.textContent = (Number(likeEl.textContent.split(" ").shift()) + 1) + " likes";
        likeBtns[postIndex].src = liked;
      } else {
        likeEl.textContent = (Number(likeEl.textContent.split(" ").shift()) - 1) + " likes";
        likeBtns[postIndex].src = notLiked;
      }
    })
    
  })

  likeBtns.forEach(likeBtn => {
    likeBtn.addEventListener("click", () => {
      let postIndex = Number(likeBtn.id.split("-").pop());
      let liked = "images/icon-heart - Copia.png";
      let notLiked = "images/icon-heart.png";
      let likeEl = document.getElementById("like-" + postIndex);

      if(likeBtn.src.endsWith(notLiked)) {
        likeEl.textContent = (Number(likeEl.textContent.split(" ").shift()) + 1) + " likes";
        likeBtn.src = liked;
      } else {
        likeEl.textContent = (Number(likeEl.textContent.split(" ").shift()) - 1) + " likes";
        likeBtn.src = notLiked;
      }
    })
    
  })

  xBtn.addEventListener("click", () => {
    const checkIcon = document.querySelector(".fa-solid");
    newPostFieldset.classList.remove("active");
    if(checkIcon){
      checkIcon.classList.replace("fa-check", "fa-image");
      checkIcon.classList.replace("fa-solid", "fa-regular");    
    }
    document.body.style.pointerEvents = "all";
  })
}

renderFeed();