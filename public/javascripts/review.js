// //local reviews data 
// const reviews = [
//   {
//         id: 0,
//         name: 'Amar Thorat',
//         job: '⭐⭐⭐⭐⭐',
//         img: '../images/r1.jpg',
//         text: 'Good dealer give good knowledge of car purchases from him',

//     },  
//   {
//         id: 1,
//         name: 'susan smith',
//         job: '⭐⭐⭐⭐⭐',
//         img: '../images/r2.jpg',
//         text: 'Purchase car from him and become his friend lovable person to visit once',

//     },
//     {
//         id: 2,
//         name: 'anna johnson',
//         job: '⭐⭐⭐⭐⭐',
//         img: '../images/r3.jpg',
//         text: 'Purchase car from him brezza good person to deal honset dealer',

//     },
//     {
//         id: 3,
//         name: 'peter jones',
//         job: '⭐⭐⭐⭐⭐',
//         img: '../images/r4.jpg',
//         text: 'From latur purchase car good car condition satisfaction Good person to purchase car from him',
//     },
//     {
//         id: 4,
//         name: 'bill anderson',
//         job: '⭐⭐⭐⭐⭐',
//         img: '../images/r5.jpg',
//         text: 'Good car collection and nice personality to deal',
//     },
// ];

// // select items

// const img = document.getElementById('person-img');
// const author = document.getElementById('author');
// const job = document.getElementById('job');
// const info = document.getElementById('info');


// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// const randomBtn = document.querySelector('.random-btn');

// // set starting item 

// let currentItem = 0;

// // load initial item 
// window.addEventListener('DOMContentLoaded', function() {
//     showPerson();
// });

// // show person based on item 

// function showPerson() {
//     const item =  reviews[currentItem];
//     img.src = item.img;
//     author.textContent = item.name;
//     job.textContent = item.job;
//     info.textContent = item.text;
// }

// // show next person 

// nextBtn.addEventListener('click', function(){
//     currentItem++;
//     if (currentItem > reviews.length - 1){
//         currentItem = 0;
//     }
//     showPerson(currentItem);
// });
// // show prev person 
// prevBtn.addEventListener('click', function(){
//     currentItem--;
//    if (currentItem < 0){
//     currentItem = reviews.length -1;
//    }
    
//     showPerson(currentItem);
// });

// // show random person

// randomBtn.addEventListener('click',  function(){
//     currentItem = Math.floor(Math.random() * reviews.length);
//     console.log(currentItem);
//     showPerson();
// });


document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star-rating .star');
    const ratingMsg = document.getElementById('rating-msg');
    let selectedRating = 0;

    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            selectedRating = index + 1;
            updateRating(selectedRating);
        });

        star.addEventListener('mouseenter', function() {
            updateRating(index + 1);
        });

        star.addEventListener('mouseleave', function() {
            updateRating(selectedRating);
        });
    });

    function updateRating(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
});
