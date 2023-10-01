let posts = document.querySelectorAll(".postContainer");
let postChildren;
for (let i = 0; i < posts.length; i++) {
	postChildren = posts[i].getElementsByTagName("div");
	for (let j = 0; j<postChildren.length; j++) {
		filePost = postChildren.item(j)
		if (filePost.className === "fileText" && filePost.textContent.includes("SoyBooru")) {
				console.log("soy found!11, engaging lethal weapons")
				posts[i].style.display = "none"
		}
	}
}
