
const open_modal = document.getElementById('open_modal');
const modal_container = document.getElementById('modal_container');
const submit_btn = document.getElementById('submit_btn');


(function () {
//I'm using "click" but it works with any event
  document.addEventListener('click', function(event) {
    var isClickInside = modal_container.contains(event.target);

    console.log(isClickInside)
    if (!isClickInside) {
      // modal_container.classList.remove('show')
      //the click was outside the specifiedElement, do something
    }
  });

  open_modal.addEventListener('click', (event) => {
    event.preventDefault()
    modal_container.classList.add('show')
  })

  submit_btn.addEventListener('click', (event) => {
    event.preventDefault()
    modal_container.classList.remove('show')
  })
})();
