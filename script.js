function maquinaDeEscrever(element, time){
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((item, i)=>{
    setTimeout(()=> element.innerHTML += item, time * i);
  });
};
function Loop(){
  setTimeout(() => {
    maquinaDeEscrever(topAnimation, 90);
    Loop();
  }, 2000);
}


const subTitle = document.querySelector(".home__subtitle");
const description = document.querySelector(".home__description");
const topAnimation = document.querySelector(".animation");

maquinaDeEscrever(subTitle, 75);
maquinaDeEscrever(description, 50);

Loop();