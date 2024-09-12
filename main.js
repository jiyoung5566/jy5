document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}
function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}
function yellow() {
  document.body.style.backgroundColor = 'yellow'
}
function reset() {
  document.body.style.backgroundColor = 'white'
}

function showhtml() {
  document.getElementById('fig').src = 'img/html5.jpg'
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 언어이다.'
}
function showcss() {
  document.getElementById('fig').src = 'img/css3.jpg'
  document.getElementById('desc').innerHTML =
    '<b>CSS3</b>는 HTML 문서의 스타일을 지정하기 위한 언어이다.'
}
function showjs() {
  document.getElementById('fig').src = 'img/Javascript.jpg'
  document.getElementById('desc').innerHTML =
    '<b>CSS3</b>은 HTML 문서의 스타일을 지정하기 위한 언어이다.'
}
