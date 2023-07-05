const APIURL = "https://api.github.com/users/";
const fullName = document.querySelector(".name");
const profileImg = document.getElementById("image");
const Location = document.querySelector(".location");
const details = document.querySelector(".details");
const form = document.getElementById('form');
const input = document.querySelector('input');
const card = document.querySelector('.card');
const error = document.querySelector('.error');
const follower = document.getElementById('follower');
const followings = document.getElementById('following');
const repos = document.getElementById('repo');


async function getUser(userName) {
    const res = await fetch(APIURL + userName);
    const resData = await res.json();
    fetchUser(resData);
}

function fetchUser(user) {
    const { avatar_url, name, bio, location, message, followers, following, public_repos } = user;
    if (!message) {
        fullName.innerHTML = name;
        profileImg.setAttribute("src", avatar_url);
        details.innerHTML = bio;
        Location.innerHTML = location;
        follower.innerHTML = followers;
        followings.innerHTML = following;
        repos.innerHTML = public_repos;
        card.style.display = "flex";
        error.style.display = "none";
    } else {
        card.style.display = "none";
        error.style.display = "flex";
        
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const term = input.value;
    getUser(term);
    input.value = "";
})