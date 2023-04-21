const commentFormHandler = async (event) => {
    event.preventDefault();

    const postId = document.querySelector('input[name="post-id"').value;

    if (body) {
        await fetch('/api/comment', {
            method: 'Post',
            body: JSON.stringify({
                postId,
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        document.location.reload();
    }
};

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);