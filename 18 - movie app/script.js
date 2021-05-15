const api_url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9c01e3d4a2fb2d5f660ef46954a96ae2&page=1';
const img_path = 'https://image.tmdb.org/t/p/w1280';
const search_api = 'https://api.themoviedb.org/3/search/movie?api_key=9c01e3d4a2fb2d5f660ef46954a96ae2&query="';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// get initial movies
getMovies(api_url);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieEl = document.createElement('div');

        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${img_path + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>`;

        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(search_api + searchTerm);

        search.value = '';
    } else {
        window.location.reload();
    }
});