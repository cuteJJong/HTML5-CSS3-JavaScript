window.addEventListener('load', init, false);

function init(){
  const button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', myClick, false);
}

function myClick(evt) {
  console.log(evt);
}
