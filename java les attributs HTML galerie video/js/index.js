
// exemple 1

// let link = document.querySelector('a');
// let p = document.querySelector('p');

// link.addEventListener('click', event => {
//     event.preventDefault();
//     if(p.getAttribute('hidden')){
//         p.removeAttribute('hidden');
//         return;
//     }
//     p.setAttribute('hidden', 'hidden');
// });



// exemple 2
// let p = [...document.querySelectorAll('p')];

// for (let value of p) {
//     let color = value.dataset.color;
//     value.style.color = color;
// }



let a = [...document.querySelectorAll('.liste a')];
let video = document.querySelector('.bloq iframe');


const lien = 'https://www.youtube.com/embed/';
// console.log(a);
for (let value of a) {
    value.addEventListener('click', event => {
        event.preventDefault();
        // console.log('click');
        let url = value.dataset.url;
        // console.log(url);
        video.setAttribute('src', lien + url)
    })
    
}

