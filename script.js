let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

// Validating form
let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Please enter some text";
  } else {
    msg.innerHTML = "Posted!";
    acceptData();
  }
};

// Accepting data
let data = {};
let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

// Create Posts
let createPost = () => {
  posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onclick="editPost(this)" class="fas fa-edit"></i>
            <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};

// Dark Mode
let toggleDarkMode = () => {
    console.log("dark mode")
    document.body.classList.toggle("dark-mode")
    document.getElementById("submit-button").classList.toggle("dark-mode")
}