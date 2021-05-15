const APIURL = "https://api.github.com/users/";
const form = document.getElementById('form');
const main = document.getElementById('main');
const search = document.getElementById('search');

search.addEventListener('keydown', () => {
    search.classList.add('scale');
});

search.addEventListener('keyup', () => {
    search.classList.remove('scale');
});

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username);

        createUserCard(data);
        getRepos(username);
    } catch (error) {
        createErrorCard('Problem fetching repos');
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created');

        addReposToCard(data);
    } catch (error) {
        createErrorCard('No profile with this username');
    }
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');

    repos.slice.forEach((repo) => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.target = '_blank';
        repoEl.innerText = repo.name;

        reposEl.appendChild(repoEl);
    });
}

function createUserCard(user) {
    const cardHTML = `
        <div class="card">
            <div>
                <img id="avatar" class="avatar" src="${user.avatar_url}" alt="${user.name}">
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>

                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos">
                </div>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

    main.innerHTML = cardHTML;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if (! user) {
        return false;
    }

    getUser(user);
    search.value = '';
});