// JavaScript Document search bar
const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site= 'Home.html','Categories.html','About Us.html','Nasi Lemak.html','Char Kuey Teow.html','Nasi Kandar.html','Nonya Kueh.html','Chicken Rice.html';//Hi sir this search function needs the webpage to be listed online in order to function, as this function utilises the google search engine.

function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);