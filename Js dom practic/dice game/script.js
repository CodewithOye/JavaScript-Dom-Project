

const body = document.querySelector('body');
body.style.marginTop ='50px';

const div1 = document.createElement('div');

const div2 = document.createElement('div');
div1.style.margin ='auto';
div1.style.padding ='20px';
div1.style.border ='5px solid';
div1.style.textAlign ='center';

const div = document.createElement('div');
div.style.margin ='auto';
div.style.width ='50%';
div.style.padding ='30px';
div.style.border ='5px solid';
div.style.textAlign ='center';



const a = document.createElement('label')
a.setAttribute('class','aLabel')
a.innerText = 0;
a.style.marginRight = '10px';
a.style.marginTop ='50px';


const b = document.createElement('label')
b.setAttribute('class','bLabel')
b.innerText = 0;
b.style.marginRight = '10px'

const c = document.createElement('label');
c.setAttribute('class','cLabel');
c.innerText = 0;

const button = document.createElement('button');
button.setAttribute('class','roll');
button.textContent =  'Roll';
button.style.position ='relative';
button.style.marginRight = '8px';
button.style.marginTop = '30px';
button.style.padding ='5px 10px'


const resetB = document.createElement('button');
resetB.textContent = 'Reset';
resetB.setAttribute('class','reset');
resetB.style.marginTop = '10px';
resetB.style.padding ='5px 10px';
resetB.style.position ='relative';

//append to html

body.append(div);
div.append(div1,div2)
div1.append(a,b,c)
div2.append(button,resetB)

//roll button

document.querySelector('.roll').onclick = () => {
 let d = Math.floor(Math.random() * 6 ) + 1;
 let e = Math.floor(Math.random() * 6 ) + 1;
 let f = Math.floor(Math.random() * 6 ) + 1;

  document.querySelector('.aLabel').innerText = d;
  document.querySelector('.bLabel').innerText = e;
  document.querySelector('.cLabel').innerText = f;
}

//reset button

document.querySelector('.reset').onclick = () => {
  let n = 0;
  document.querySelector('.aLabel').innerText = n;
  document.querySelector('.bLabel').innerText = n;
  document.querySelector('.cLabel').innerText = n;
}


console.log(body.innerHTML)
