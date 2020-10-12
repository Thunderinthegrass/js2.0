let one = document.querySelector('.one');

one.style.color = '#3AE2CE';
console.log(one.style);

one.classList.add('two', 'three');
one.classList.remove('three');

let btnLesson = document.querySelector('.btn-lesson').onclick = function() {
  this.classList.toggle('active');
}

// ----------------------------------------------------------------