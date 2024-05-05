
let slider = document.querySelectorAll('img');
 let prevbtn = document.querySelector('.prev')
 let nextbtn = document.querySelector('.next')

count= 0 ;

slider.forEach((elm ,index) => {
console.log(elm ,index);
elm.style.left = `${index * 100}%`;
})


prevbtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
imgslide()
    }

})

nextbtn.addEventListener( 'click', () => {
    if ( count < slider.length-1) {
        count++
    imgslide()
    }


})


const imgslide = (() =>{  

slider.forEach((elm, index)=>{
elm.style.transform = `translateX(-${count * 100}%)`;

})
})
