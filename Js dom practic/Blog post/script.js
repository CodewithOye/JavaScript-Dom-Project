const header = document.querySelector('header');

const blueButton = document.getElementById('color-button-blue');

const brownButton = document.getElementById('color-button-brown');

const greenButton = document.getElementById('color-button-green');

const noneButton = document.getElementById('color-button-none');

const addPostBtn = document.querySelector('#add-post');

const articleSection = document.querySelector('section');


const removePostBtn = document.querySelector('#remove-post')

blueButton.addEventListener('click', () => {

header.classList.add('blue-background', 'text-white');
header.classList.remove('brown-background', 'green-background');

});

brownButton.addEventListener('click', () => {

  header.classList.add('brown-background', 'text-white');
  header.classList.remove('blue-background', 'green-background');

})

greenButton.addEventListener('click', () => {

  header.classList.add('green-background', 'text-white');
  header.classList.remove('blue-background','brown-background');

})

noneButton.addEventListener('click', () => {

  header.classList.remove('blue-background','brown-background','green-background','text-white');

})

addPostBtn.addEventListener('click', () => {
  const  newPost = createNewPost();
  articleSection.appendChild(newPost)
})

function createNewPost() {

  let newArticle = document.createElement('article');
  let newHeading = document.createElement('h5');
  let newParagraph = document.createElement('p');

  newHeading.textContent ='Another Blog post';
  newParagraph.textContent = 'Roll on the floor purring your whiskers off. Trip on catnip nap all day, eat too much then proceed to regurgitate all over living room carpet while humans eat dinner nya nya nyan. Attack the child groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked playing with balls of wool.';

  newArticle.appendChild(newHeading);
  newArticle.appendChild(newParagraph);

  newArticle.classList.add('list-group-item');

  return newArticle;
}

removePostBtn.addEventListener('click', () => {
  const articleCount = articleSection.childElementCount;
  if (articleCount > 1 ){
    articleSection.removeChild(articleSection.children[articleCount -1])
  }
})