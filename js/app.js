//carousel
const carousel_btns = document.querySelectorAll('.carousel_btn');

const carousel__rows = document.querySelectorAll('.carousel__row');

let carousel_index = 0;

for(const carousel_btn of carousel_btns){
    carousel_btn.addEventListener('click', ()=>{
        let c_btn = carousel_btn.dataset.carouselIndex;
        console.log(c_btn);
        let carousel__active = document.querySelector('.carousel__active');
        carousel__active.classList.remove('carousel__active');
        carousel_index += Number(c_btn);
        
        if(carousel_index < 0){
            carousel_index = carousel__rows.length -1
        }else if(carousel_index >= carousel__rows.length){
            carousel_index = 0;
        }
        carousel__rows[carousel_index].classList.add('carousel__active');
        
    });
}
//end carousel

//arrow up
//show "arrow up" button when scrolling down
const navbar = document.querySelector('#navbar');
const navbar_height = navbar.getBoundingClientRect().height;
const arrow_up = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {

    if(window.scrollY > navbar_height / 2){
        arrow_up.classList.add('visible');
    }else{
        arrow_up.classList.remove('visible');
    }
});

// Handle click on the "arrow up" button
arrow_up.addEventListener('click', () => {
    window.scrollTo(0, 0);
});
//end arrow up

//astric mark click
const astric_mark = document.querySelector('#astric_mark');
astric_mark.addEventListener('click', () => {
    for(let i =0;i<5;i++){
        console.log(' '.repeat(5-i)+'*'.repeat(2*i+1));
    }
});
//end astric mark click