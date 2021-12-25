
fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        const limitData = data.slice(0, 5)
        console.log(limitData)
        for (let index = 0; index < limitData.length; index++) {
            const h3 = document.createElement('h3')
            const p = document.createElement('p')
            h3.textContent = limitData[index].title
            p.textContent = limitData[index].body
            document.querySelector('#blog-list').append(h3)
            h3.classList = 'title'
            document.querySelector('#blog-list').append(p)
        }
    })