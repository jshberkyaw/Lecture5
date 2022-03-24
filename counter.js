let counter = 0;
function count() {
  counter++;

if (counter % 10 === 0) {
alert(`Count is now ${counter}`);
    }

 document.querySelector('h1').innerHTML = counter;
}

document.addEventListener('DOMContentLoaded', function() {
document.querySelector('button').onclick = count;
});