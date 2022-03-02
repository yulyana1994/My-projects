const chackObj = {
    'en': {
        'content': 'Make me laught chack!'
},
    'ru': {
    'content': 'Рассмеши меня, Чак!'
    }
}

let lang = 'en';
 function getTranslate(lang){
    const nodeList = document.querySelector('[data-chack]');
        let atribut = nodeList.dataset.chack;
        let textContent = chackObj[lang][atribut];
        if (textContent){
         nodeList.textContent = chackObj[lang][atribut]
        }
 }

const buttonLangRu = document.querySelector('.btnRu');
 buttonLangRu.addEventListener('click',()=> {  
  if (lang === 'en'){
      lang = 'ru';
   }
   getTranslate(lang);
}
 )

const buttonLangEn = document.querySelector('.btnEn');
 buttonLangEn.addEventListener('click',()=> {  
  if (lang === 'ru'){
      lang = 'en';
   }
   getTranslate(lang);
}
 )

const url = 'https://api.icndb.com/jokes/random';
async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    return data;
  }
  getData()
  
  async function getQuotes() {  
    const quotes = 'quotes.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
    return data;
  }
  getQuotes();

const btn = document.querySelector('.floating-button');
  btn.addEventListener('click',() =>{
    if (lang === 'ru'){
      getTextRu();
    }
    if (lang === 'en'){
      getText(); 
    }
    playAudio();
  });

const div = document.querySelector('.content')

async function getText (){
  let content = await getData(url);
  div.textContent=  content.value.joke;
  }
  getText ()

function random(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.round(rand);
}
 
async function getTextRu (){
  let content = await getQuotes(url);
  const randomIndex = random(0,content.length-1);
  div.textContent=  content[randomIndex].text;
  console.log(content)
  }
  getTextRu ()

const audio = document.querySelector('audio');
function playAudio() {
    audio.currentTime = 0;
    audio.play();
}
playAudio();