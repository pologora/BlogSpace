
const postBody = document.getElementById('post-text')
const postTitle = document.getElementById('post-title')
const submitForm = document.getElementById('blog-list')
const blogPost = document.querySelector('#blog-list')

let data = {}

const addPost = (title, body) => {
    const h3 = document.createElement('h3')
    h3.textContent = title
    const p = document.createElement('p')
    p.textContent = body
    blogPost.append(h3,p)
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        const limitData = data.slice(0, 5)
        console.log(limitData)
        for (let index = 0; index < limitData.length; index++) {
            addPost(limitData[index].title, limitData[index].body)
        }
    })

const postSubmit = (e) => {
    e.preventDefault()
    data = {
        title: postTitle.value,
        body: postBody.value
    }
    addPost(postTitle.value, postBody.value)
    postTitle.value = ''
    postBody.value = ''
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data=>{
        console.log(data)
    })
}




submitForm.addEventListener('submit', postSubmit)

