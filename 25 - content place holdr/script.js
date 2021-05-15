const header = document.getElementById('header');
const title = document.getElementById('title');
const exerpt = document.getElementById('exerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1596808119772-d3ad38f5d8b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2251&q=80" alt="">';
    title.innerHTML = 'Lorem ipsum dolor sit amet.';
    exerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, recusandae!';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
    name.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 8th, 2020';

    animated_bgs.forEach((bg) => {
        bg.classList.remove('animated-bg');
    });
    
    animated_bgs_texts.forEach((bg) => {
        bg.classList.remove('animated-bg-text');
    });
}