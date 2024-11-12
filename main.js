const jokeContainer = document.getElementById('joke')
const btn = document.getElementById('btn')
const url = "https://v2.jokeapi.dev/joke/Any"

let getJokes = () => {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.type === 'single') {
                jokeContainer.textContent = data.joke;
            } else if (data.type === 'twopart') {
                jokeContainer.textContent = `${data.setup} ${data.delivery}`;
            }
        })
        .catch(error => jokeContainer.textContent = `Error: ${error.message}`)
}

btn.addEventListener('click', getJokes)