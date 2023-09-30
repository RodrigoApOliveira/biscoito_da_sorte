const home = document.querySelector('.home')
const luck = document.querySelector('.luck')
// const hide = document.querySelector('.hide')
const cookie = document.querySelector('#cookie')
const message = document.querySelector('#message')
const newCookie = document.querySelector('#newCookie')

const messages = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão',
    'Defeitos e virtudes são apenas dois lados da mesma moeda'
  ]
  
  cookie.addEventListener('click', () => {
  const randomMessage = Math.floor(Math.random() * messages.length);
  message.innerHTML = messages[randomMessage]

  setTimeout(() => {
    home.classList.add('hide')
    luck.classList.remove('hide')
  })
})

newCookie.addEventListener('click', () => {
  home.classList.remove('hide')
  luck.classList.add('hide')
})














// function handleOpenCookie(event) {
//   event.preventDefault()
  
//   const cookie = document.querySelector('#cookie')
  
//   if(Number(cookie.innerText) == randomMessage){
//     document.querySelector(".home").classList.add("hide")
//     document.querySelector(".luck").classList.remove("hide")
//     console.log("click")
  
//   }
  
// }














//cookie.addEventListener('click', handleOpenCookie)


//let randomMessage = luckMessages[Math.round(Math.random() * luckMessages.length)];