const body = document.querySelector('body');
body.style.backgroundColor ='lightBlue';

const div = document.createElement('div');
div.style.textAlign ='center';
div.style.height =' 300px';
div.style.borderStyle ='none';

const header = document.createElement('h1');
header.setAttribute('class','header')
header.style.color ='green';
header.innerText ='Counter App';
header.style.marginBottom ='40px'
header.style.marginTop ='70px'


let count = 0;

//label

const counter = document.createElement('label');
counter.setAttribute('class','counter');
counter.style.display ='block';
counter.style.color ='blue';
counter.innerText ='0';
counter.style.fontSize ='30px'
counter.style.marginBottom = '10px';

//increase button

const increase = document.createElement('button');
increase.setAttribute('class','increaseBtn');
increase.innerText ='Increase';
increase.style.marginRight ='10px';
increase.style.padding = '10px';
increase.style.borderRadius = '5px';
increase.style.boxShadow = '2px 2px 2px blue';
div.style.borderStyle ='none';


//decrease button


const decrease = document.createElement('button');
decrease.setAttribute('class','decreaseBtn');
decrease.innerText ='decrease';
decrease.style.padding = '10px';
decrease.style.borderRadius = '5px';
decrease.style.boxShadow = '2px 2px 2px blue';

//reset button

const reset = document.createElement('button');
reset.setAttribute('class','reset');
reset.innerText ='reset';
reset.style.marginRight ='10px';
reset.style.padding = '10px';
reset.style.borderRadius = '5px';
reset.style.boxShadow = '2px 2px 2px blue';


body.append(div);
div.append(header,counter,increase,reset,decrease);


document.querySelector('.increaseBtn').onclick = () => {
  count += 1;
  counter.innerText = count;
};

document.querySelector('.decreaseBtn').onclick = (e) => {
  if( count == 0){
    e.stopPropagation();
  }else {
    count -= 1;
  }
  counter.innerText = count;
};

document.querySelector('.reset').onclick = () => {
  count = 0;
  counter.innerText = count;
};











