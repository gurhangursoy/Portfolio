// Selectors

const commentInput = document.querySelector(".comment-input");
const commentButton = document.querySelector(".comment-button");
const commentList = document.querySelector(".comment-list");

// Event Listeners

commentButton.addEventListener("click" , addComment);
commentList.addEventListener("click", deleteCheck);

//Functions

function addComment(event){
    event.preventDefault();

// comment DIV
const commentDiv = document.querySelector(".comment-list");


// Create list
const newComment = document.createElement("li");
newComment.innerText = commentInput.value;
newComment.classList.add("comment-item");
commentDiv.appendChild(newComment);

// Check Trash Button
const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
newComment.appendChild(trashButton);

// Append to List
commentList.appendChild(commentDiv);

//Clear comment input value
commentInput.value = "";
}

function deleteCheck(e){
const item = e.target;

//delete comment
if (item.classList[0] === "trash-btn") {
    const comment = item.parentElement;
    comment.remove(); 
}
}
