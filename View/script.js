let d = document;
const open_modal = document.getElementById('open_modal');
const modal_container = document.getElementById('modal_container');
const modal_ = document.getElementById('modal_');
const submit_btn = document.getElementById('submit_btn');
const starsA= document.querySelectorAll(".stars a");
const rated_stars = document.querySelectorAll('.rated-stars a');
let totalAverageRating = "2";

let arrayOfReview = [
  {
    starsRated: '4',
    reviewText: 'book was full of fluff'
  },
  {
    starsRated: '3',
    reviewText: 'book was fluff'
  },
  {
    starsRated: '4',
    reviewText: 'book was amazing'
  }
];

const reviews_container = document.getElementById('reviews_container');

{
  arrayOfReview.forEach((review, idx) => {
    // create div with review-list class
    let parentDiv = d.createElement('div')
    let textToAdd = d.createTextNode("")
    parentDiv.appendChild(textToAdd);
    parentDiv.classList.add('review-list')
    reviews_container.appendChild(parentDiv)

    //create nested element
    let starDiv = d.createElement('div')
    // let textToAdd = d.createTextNode("")
    starDiv.appendChild(textToAdd);
    starDiv.classList.add('stars', 'disabled', 'rated-stars')
    parentDiv.appendChild(starDiv)

    //create star

    let aTag = d.createElement('a')
    let aText = d.createTextNode("⭐")
    aTag.appendChild(aText);
    aTag.classList.add('star', 'active')
    starDiv.prepend(aTag)

    //add bold text
    let bTag = d.createElement('b')
    let boldText = d.createTextNode(review.starsRated)
    let boldText2 = d.createTextNode(",")
    bTag.classList.add('rating-bold')
    bTag.appendChild(boldText);
    bTag.appendChild(boldText2);
    parentDiv.appendChild(bTag)

    //review text
    let pTag = d.createElement('p')
    let pText = d.createTextNode(review.reviewText)
    pTag.classList.add('rating-text')
    pTag.appendChild(pText);
    parentDiv.appendChild(pTag)

  })





  rated_stars.forEach((star, idx) => {
    //add active class to total average stars

    if (idx <= Math.round(+totalAverageRating) - 1) {
      star.classList.add("active")
    }
  })

  document.getElementById('average_rating').innerHTML = totalAverageRating

  starsA.forEach((star, clickedIdx) => {
    star.addEventListener('click', () => {
      // otherStar.classList.add("disabled")
      starsA.forEach((starJ, idxJ)=> {
        // console.log(idxJ, clickedIdx)
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
}


