
const postBody = document.getElementById('post-text')
const postTitle = document.getElementById('post-title')
const postListHtml = document.querySelector('.blog-list')
const form = document.querySelector('#new-post')

let data = {}
let postsArray = []

const renderPosts = () => {
    postListHtml.innerHTML = ''
    for (let post of postsArray) {
        postListHtml.innerHTML += `
        <div className="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div><hr/>
        `
    }
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
    })

const postSubmit = (e) => {
    e.preventDefault()
    data = {
        title: postTitle.value,
        body: postBody.value
    }
    // postTitle.value = ''
    // postBody.value = ''
    form.reset()

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', options)
        .then(res => res.json())
        .then(data => {
            postsArray.unshift(data)
            renderPosts()
        })
}




form.addEventListener('submit', postSubmit)

