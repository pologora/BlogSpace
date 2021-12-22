

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
.then(res=>res.json())
.then(data => {
    console.log(data)
    for (let index = 0; index < data.length; index++) {
        const p = document.createElement('p')
        const span = document.createElement('span')
        span.textContent = index + 1
        p.textContent =  data[index].title
        document.body.append(span)
        document.body.append(p)
    }
})