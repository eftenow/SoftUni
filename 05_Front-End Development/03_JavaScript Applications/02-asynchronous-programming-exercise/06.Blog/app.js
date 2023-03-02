async function attachEvents() {
    const postsResponse = await fetch(`http://localhost:3030/jsonstore/blog/posts`);

    const posts = await postsResponse.json();

    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewBtn = document.getElementById('btnViewPost');
    const postsSection = document.getElementById('posts');


    loadPostsBtn.addEventListener('click', function () {
        Object.keys(posts).forEach(post => {
            const postTitle = posts[post].title;
            const postBody = posts[post].body;
            const postId = posts[post].id;

            const newOption = document.createElement('option');
            newOption.value = postId;
            newOption.textContent = postTitle;
            postsSection.appendChild(newOption);
        });

        viewBtn.addEventListener('click', async function () {

            const selectedPost = postsSection.querySelector(`option:checked`);
            const commentsResponse = await fetch(`http://localhost:3030/jsonstore/blog/comments/`);
            const comments = await commentsResponse.json();
            const commentSection = document.getElementById('post-comments');
            commentSection.innerHTML = '';

            document.getElementById('post-title').textContent = selectedPost.textContent;
            document.getElementById('post-body').textContent = posts[selectedPost.value].body;

            Object.entries(comments)
                .filter(entry => entry[1].postId == selectedPost.value)
                .map(entry => {
                    const commentId = entry[1].id;
                    const commentText = entry[1].text;

                    const commentTextLi = document.createElement('li');
                    commentTextLi.textContent = commentText;
                    commentTextLi.id = commentId;

                    commentSection.appendChild(commentTextLi);
                })
            







        })

    })

}

attachEvents();