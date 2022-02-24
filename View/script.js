
const open_modal = document.getElementById('open_modal');
const modal_container = document.getElementById('modal_container');
const submit_btn = document.getElementById('submit_btn');

(function () {

  open_modal.addEventListener('click', (event) => {
    event.preventDefault()
    modal_container.classList.add('show')
  })

  submit_btn.addEventListener('click', (event) => {
    event.preventDefault()
    modal_container.classList.remove('show')

  })
})();
