const jokeEl = document.getElementById('joke');
const jokebtn = document.getElementById('jokeBtn');

jokebtn.addEventListener('click', generateJoke);
generateJoke();

// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     };

//     fetch('https://icanhazdadjoke.com', config)
//         .then((response) => response.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke;
//         });
// }

/**
 * NOTE: Any time you use await in a function, that function needs to be 
 * labeld with async! NOT OPTIONAL
 * Also, from the video, he prefers using await since using the .then functions
 * gets messy pretty quick
 */
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    };

    // await is how you tell it to await a promise
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();

    jokeEl.innerHTML = data.joke;
}