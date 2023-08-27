let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');

const images = document.querySelectorAll('.img');
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy');
const closeModal = document.querySelector('.bx.bx-x');



document.addEventListener('DOMContentLoaded', function() {
    
    loadVideo();
    getGaleria();
    navegacionFija();
    scrollNav();

    
});

function navegacionFija(){
    const barra = document.querySelector('.header');
    const ubicate = document.querySelector('.ubicate');
    const body = document.querySelector('body');


     window.addEventListener('scroll',function(){
       

        if(ubicate.getBoundingClientRect().bottom < 0){
           barra.classList.add('fijo');
           barra.classList.add('body-scroll');
        }else{
            barra.classList.remove('fijo');
            barra.classList.remove('body-scroll');
        }


     });

}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion__principal a'); // Agregado el punto antes de "navegacion__principal"

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth" });
        });

    });
}



function getGaleria(){

   images.forEach(image =>{
    image.addEventListener('click',() =>{
        
        addImage(image.getAttribute('src'),image.getAttribute('alt'));
       
         
    })

   })

   const addImage = (srcImage,altImage)=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src = srcImage;
    copy.innerHTML = altImage;

   }

   closeModal.addEventListener('click',()=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
   })

}

 

function loadVideo () {
    listVideo.forEach(video => {
        video.onclick = () => {
            listVideo.forEach(vid => vid.classList.remove('active'));
            video.classList.add('active');

            if (video.classList.contains('active')) {
                let src = video.querySelector('video source').getAttribute('src');
                mainVideo.src = src;

                // Carga el video
                mainVideo.load();

                let text = video.querySelector('.title').innerHTML;
                title.innerHTML = text;
            }

            /* if (window.innerWidth <= 768) { // Cambia el valor según tu diseño responsive
                window.scrollTo(0, 0);
            } */
        }
    });
}


    




