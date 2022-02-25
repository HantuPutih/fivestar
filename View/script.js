
const open_modal = document.getElementById('open_modal');
const modal_container = document.getElementById('modal_container');
const modal_ = document.getElementById('modal_');
const submit_btn = document.getElementById('submit_btn');
const starsA= document.querySelectorAll(".stars a");



(function () {
  starsA.forEach((star, clickedIdx) => {
    star.addEventListener('click', () => {
      // otherStar.classList.add("disabled")
      starsA.forEach((starJ, idxJ)=> {
        console.log(idxJ, clickedIdx)
      starJ.classList.remove("active")
        if (idxJ <= clickedIdx) {
          starJ.classList.add("active")
        }
      })

      console.log(`star ${clickedIdx + 1} was clicked`) //hit to backend
    })
  })

//I'm using "click" but it works with any event
  document.addEventListener('click', function(event) {
    const isClickInside = modal_.contains(event.target);

    // console.log(modal_container.classList.contains('show'))
    if (!isClickInside) {
      // modal_container.classList.remove('show')
      //the click was outside the specifiedElement, do something  && modal_container.classList.includes('show'))
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


