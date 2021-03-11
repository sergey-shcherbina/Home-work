let userChoice = 'scissors',compChoise

let buttonRules = document.querySelector('#br')
    modalBack = document.querySelector('.modal-back')
    modalWindow = modalBack.querySelector('#mw')
    x = modalWindow.querySelector('#x')
    waves=document.querySelector('.waves')
    userCount = document.querySelector('.user')
    houseCount = document.querySelector('.house')
    showone = document.querySelector('.showone')
    wrapper = showone.querySelector('#wrapper')
    showtwo = document.querySelector('.showtwo')
    hone = showtwo.querySelector('.hone')
    htwo = showtwo.querySelector('.htwo')
    hthree = showtwo.querySelector('.hthree')
    circleYellow = showtwo.querySelector('.circle-yellow') 
    circleRed = showtwo.querySelector('.circle-red')
    center = showtwo.querySelector('.center')
    again = center.querySelector('.again')
    pLose = center.querySelector('.lose')
    hzero = document.querySelector('.hzero')
    circleBlue = document.querySelector('.circle-blue')

const yellowImg = {
  col: circleYellow.classList.value, 
  im: './images/icon-scissors.svg'
}
const blueImg = {
  col: circleBlue.classList.value,
  im: './images/icon-paper.svg'
}  
const redImg = {
  col: circleRed.classList.value,
  im: './images/icon-rock.svg'
}  
   
buttonRules.addEventListener('click', toggle) 

x.addEventListener('click', toggle)

again.addEventListener('clck', () => {
  eventPreventDefault
})

wrapper.addEventListener('click', (event) => {
  if (event.target.classList.contains('listen')) { 
    console.log(event.target)
    userChoice = event.target.dataset.listen
    let compSelect = Math.floor(Math.random() * 3)

    showone.classList.add('h')
    showtwo.classList.remove('h')
    hone.classList.remove('h')
    htwo.classList.remove('h')

    switch (compSelect) {
      case 0 :
        compChoise = 'paper'
        break
      case 1 :
        compChoise = 'rock'
        break
      case 2 :
        compChoise = 'scissors'
        break
    }
    
    if (userChoice == 'paper') {
      changeProps(circleYellow, blueImg, 'circle-yellow')
      }
    if (userChoice == 'rock') {
      changeProps(circleYellow, redImg, 'circle-yellow')
    }  
    if ( compChoise == 'paper') {
      changeProps(circleRed,blueImg,'circle-red')
    }
    if ( compChoise == 'scissors') {
      changeProps(circleRed,yellowImg,'circle-red')
    }

    var check = userChoice + ' ' + compChoise
    setTimeout(() => {
      htwo.classList.add('h')
      hthree.classList.remove('h')
      return setTimeout(() => {
        winner(check)
        center.classList.remove('h')
        modalBack.classList.add('win')
        modalBack.classList.toggle('mod-back')
        modalWindow.classList.add('h')
      },2000)
    }, 2000)
  }
})
  function toggle() { 
    modalBack.classList.toggle('mod-back')
  }
  function winner(check) {
    let i = 0
    let j = 0
    switch (check) {
      // case 'paper paper':
      // case 'rock rock':
      // case 'scissors scissors':
      //   break

      case 'rock paper':
      case 'scissors rock':
      case 'paper scissors':
        pLose.innerHTML = 'YOU LOSE'
        waves.classList.add('wl')
        waves.classList.remove('h')
        i++
        houseCount.innerHTML = i 
        break  

      case 'paper rock':
      case 'rock scissors':
      case 'scissors paper':
        pLose.innerHTML = 'YOU WIN'
        waves.classList.add('wr')
        waves.classList.remove('h')
        j++
          userCount.innerHTML = j  
        break 
         
    }
  }

  function changeProps(circ, temp, cl) {
    circ.classList.add(`${temp.col}`)
    circ.classList.remove(cl)
    circ.lastElementChild.lastElementChild.src = temp.im
  }


