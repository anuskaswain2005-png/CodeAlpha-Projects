function followUser(){

let btn=document.getElementById("followBtn");
let followers=document.getElementById("followers");

if(btn.innerText==="Follow"){

btn.innerText="Following";
followers.innerText=parseInt(followers.innerText)+1;

}else{

btn.innerText="Follow";
followers.innerText=parseInt(followers.innerText)-1;

}

}

function likePost(button){

let count=button.nextElementSibling;
let likes=parseInt(count.innerText);

if(button.classList.contains("liked")){

button.classList.remove("liked");
button.innerHTML="🤍 Like";
count.innerText=likes-1;

}else{

button.classList.add("liked");
button.innerHTML="❤️ Liked";
count.innerText=likes+1;

}

}

function addComment(button){

let input=button.previousElementSibling;
let text=input.value.trim();

if(text==="") return;

let comments=
button.parentElement.nextElementSibling;

let li=document.createElement("li");

li.innerText=text;

comments.appendChild(li);

input.value="";

}

function createPost(){

let input=document.getElementById("postInput");

let text=input.value.trim();

if(text==="") return;

let time=new Date().toLocaleString();

let post=document.createElement("div");

post.className="post";

post.innerHTML=`

<div class="post-header">

<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80">

<div>
<h4>Anuska Swain</h4>
<small>${time}</small>
</div>

</div>

<p>${text}</p>

<div class="actions">
<button onclick="likePost(this)">🤍 Like</button>
<span class="like-count">0</span>
</div>

<div class="comment-box">
<input type="text" placeholder="Add a comment">
<button onclick="addComment(this)">Comment</button>
</div>

<ul class="comments"></ul>

`;

document.getElementById("posts").prepend(post);

input.value="";

}