const i18Obj = {
   'en': {
     'skills': 'Skills',
     'portfolio': 'Portfolio',
     'video': 'Video',
     'price': 'Price',
     'contacts': 'Contacts',
     'hero-title': 'Alexa Rise',
     'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
     'hire': 'Hire me',
     'skill-title-1': 'Digital photography',
     'skill-text-1': 'High-quality photos in the studio and on the nature',
     'skill-title-2': 'Video shooting',
     'skill-text-2': 'Capture your moments so that they always stay with you',
     'skill-title-3': 'Rotouch',
     'skill-text-3': 'I strive to make photography surpass reality',
     'skill-title-4': 'Audio',
     'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
     'winter': 'Winter',
     'spring': 'Spring',
     'summer': 'Summer',
     'autumn': 'Autumn',
     'price-description-1-span-1': 'One location',
     'price-description-1-span-2': '120 photos in color',
     'price-description-1-span-3': '12 photos in retouch',
     'price-description-1-span-4': 'Readiness 2-3 weeks',
     'price-description-1-span-5': 'Make up, visage',
     'price-description-2-span-1': 'One or two locations',
     'price-description-2-span-2': '200 photos in color',
     'price-description-2-span-3': '20 photos in retouch',
     'price-description-2-span-4': 'Readiness 1-2 weeks',
     'price-description-2-span-5': 'Make up, visage',
     'price-description-3-span-1': 'Three locations or more',
     'price-description-3-span-2': '300 photos in color',
     'price-description-3-span-3': '50 photos in retouch',
     'price-description-3-span-4': 'Readiness 1 week',
     'price-description-3-span-5': 'Make up, visage, hairstyle',
     'order': 'Order shooting',
     'contact-me': 'Contact me',
     'send-message': 'Send message'
   },
   'ru': {
     'skills': 'Навыки',
     'portfolio': 'Портфолио',
     'video': 'Видео',
     'price': 'Цены',
     'contacts': 'Контакты',
     'hero-title': 'Алекса Райс',
     'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
     'hire': 'Пригласить',
     'skill-title-1': 'Фотография',
     'skill-text-1': 'Высококачественные фото в студии и на природе',
     'skill-title-2': 'Видеосъемка',
     'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
     'skill-title-3': 'Ретушь',
     'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
     'skill-title-4': 'Звук',
     'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
     'winter': 'Зима',
     'spring': 'Весна',
     'summer': 'Лето',
     'autumn': 'Осень',
     'price-description-1-span-1': 'Одна локация',
     'price-description-1-span-2': '120 цветных фото',
     'price-description-1-span-3': '12 отретушированных фото',
     'price-description-1-span-4': 'Готовность через 2-3 недели',
     'price-description-1-span-5': 'Макияж, визаж',
     'price-description-2-span-1': 'Одна-две локации',
     'price-description-2-span-2': '200 цветных фото',
     'price-description-2-span-3': '20 отретушированных фото',
     'price-description-2-span-4': 'Готовность через 1-2 недели',
     'price-description-2-span-5': 'Макияж, визаж',
     'price-description-3-span-1': 'Три локации и больше',
     'price-description-3-span-2': '300 цветных фото',
     'price-description-3-span-3': '50 отретушированных фото',
     'price-description-3-span-4': 'Готовность через 1 неделю',
     'price-description-3-span-5': 'Макияж, визаж, прическа',
     'order': 'Заказать съемку',
     'contact-me': 'Свяжитесь со мной',
     'send-message': 'Отправить'
   }
 }
 
 const burgerButton = document.getElementById('burger');
burgerButton.onclick = toggalMenu;

function toggalMenu (){
   const nav = document.getElementById('nav');
   burgerButton.classList.toggle('open');
   nav.classList.toggle('open');
}


const portfolioBtns = document.querySelectorAll('.portfolio-btn');
const portfolioImage = document.querySelectorAll('.portfolio-image');


portfolioBtns.forEach((btn)=>btn.addEventListener('click', (event) => {
   changeImage(event)
   changeClassActive(event)
}));


function changeImage(event) {
   const season = event.target.dataset.season;
   if(event.target.classList.contains('portfolio-btn')) {
      portfolioImage.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
   }
 }

 function changeClassActive(e){
   portfolioBtns.forEach((i) => i.classList.remove('active'));
   e.target.classList.add('active');
 }


 function preloadImages() {
   const seasons = ['winter', 'spring', 'summer', 'autumn'];
   seasons.forEach((season) =>  {
      for(let i = 1; i <= 6; i++) {
         const img = new Image();
         img.src = `./assets/img/${season}/${i}.jpg`;
   }
 }
   )
}
 preloadImages()

 let theme = 'dark';
const sunBtn = document.querySelector('.sun');
function changeTheme(isSetWhiteTheme){
   const array = document.querySelectorAll('.lightTheme');
   array.forEach((m)=> {
      if (isSetWhiteTheme){
         m.classList.add('light-theme')
      }else{
         m.classList.remove('light-theme')
      }
   }
   )
}
sunBtn.addEventListener('click', ()=>{
   if (theme === 'dark'){
      theme = 'light';
      changeTheme(true)
   }else{
      theme = 'dark'
      changeTheme(false)
   }
}
)

let lang = 'en';
 function getTranslate(lang){
    const nodeList = document.querySelectorAll('[data-i18]');
     nodeList.forEach((currentElement)=>{
        let atribut = currentElement.dataset.i18;
        let textContent = i18Obj[lang][atribut];
        if (textContent){
         currentElement.textContent = i18Obj[lang][atribut]
        }
     })
 }
 const buttonLang = document.querySelector('.langBtn');
 buttonLang.addEventListener('click',()=> {  
  if (lang === 'ru'){
      lang = 'en';
   }else{
      lang = 'ru';
   }
   getTranslate(lang);
}
 )


function setLocalStorage() {
   localStorage.setItem('lang', lang);
   localStorage.setItem('theme', theme);
}
 window.addEventListener('beforeunload', setLocalStorage);

 function getLocalStorage() {
   if(localStorage.getItem('lang')) {
      lang = localStorage.getItem('lang')
     getTranslate(lang);
   }
   if(localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
      if (theme === 'light'){
         changeTheme(true)
      }else{
         changeTheme(false)
      }
   }
 }
 window.addEventListener('load', getLocalStorage)