let username = '';
let currentCategory = '';
let termsData = {};

document.getElementById('start-btn').addEventListener('click', () => {
    username = document.getElementById('username').value.trim();
    if (username) {
        document.getElementById('user-name').textContent = username;
        document.getElementById('welcome-screen').style.display = 'none';
        document.getElementById('category-screen').style.display = 'block';
    } else {
        alert("Пожалуйста, введите ваше имя.");
    }
});

function loadCategory(category) {
    currentCategory = category;
    document.getElementById('category-screen').style.display = 'none';
    document.getElementById('word-screen').style.display = 'block';
    fetchTerms();
}

function fetchTerms() {
    fetch('terms.json')
        .then(response => response.json())
        .then(data => {
            termsData = data;
            generateRandomWord();
        })
        .catch(error => console.log(error));
}

function generateRandomWord() {
    const categoryTerms = termsData[currentCategory];
    const randomTerm = categoryTerms[Math.floor(Math.random() * categoryTerms.length)];

    document.getElementById('term').textContent = randomTerm.term;
    document.getElementById('definition').textContent = randomTerm.definition;
}
