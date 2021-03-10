let buttonRules = document.querySelector('#br')
    modalBack = document.querySelector('.modal-back')
    modalWindow = modalBack.querySelector('#mw')
    x = modalWindow.querySelector('#x')
    waves=document.querySelector('.waves')

  buttonRules.addEventListener('click', func1) 
  function func1() { 
    modalBack.classList.toggle('mod-back')
  }

  x.addEventListener('click', func2) 
  function func2() {
    modalBack.classList.toggle('mod-back')
  } 
  let showone = document.querySelector('.showone')
      showtwo = document.querySelector('.showtwo')
      hone = document.querySelector('.hone')
      htwo = document.querySelector('.htwo')
      hthree = document.querySelector('.hthree')
      hzero = document.querySelector('.hzero')
      center = document.querySelector('.center')

      userCount = document.querySelector('.user')
      houseCount = document.querySelector('.house')
      wrapper = document.querySelector('#wrapper')
      circleYellow = document.querySelector('.circle-yellow') 
      circleBlue = document.querySelector('.circle-blue')
      circleRed = document.querySelector('.circle-red')
      pLose = document.querySelector('.lose')
      

  let userChoice = 'scissors',compSelect,compChoise
  let i = 0
  let j = 0
    let yImg = {
      col: circleYellow.classList.value, 
      im: './images/icon-scissors.svg'
    }
    let bImg = {
      col: circleBlue.classList.value,
      im: './images/icon-paper.svg'
    }
    let rImg = {
      col: circleRed.classList.value,
      im: './images/icon-rock.svg'
    }

  wrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('listen')) { 
      console.log(event.target)
      userChoice = event.target.dataset.listen
      compSelect = Math.floor(Math.random() * 3)

      showone.classList.add('h')
      showtwo.classList.remove('h')
      hone.classList.remove('h')
      htwo.classList.remove('h')

      console.log(compSelect)
      
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

    console.log(userChoice,compChoise)

    let check = userChoice + ' ' + compChoise

    console.log(check)
      
    switch (check) {
      case 'paper paper':
      case 'rock rock':
      case 'scissors scissors':
        break

      case 'rock paper':
      case 'scissors rock':
      case 'paper scissors':
        pLose.innerHTML = 'YOU LOSE'
        waves.classList.add('wl')
        waves.classList.remove('h')
        i++
        setTimeout(() => {
          houseCount.innerHTML = i
        },4000)  
        break  

      case 'paper rock':
      case 'rock scissors':
      case 'scissors paper':
        pLose.innerHTML = 'YOU WIN'
        waves.classList.add('wr')
        waves.classList.remove('h')
        j++
        setTimeout(() => {
          userCount.innerHTML = j
        },4000)  
        break 
         
    }
      if (userChoice == 'paper') {
        changeProps(circleYellow, bImg, 'circle-yellow')
      }
      if (userChoice == 'rock') {
        changeProps(circleYellow, rImg, 'circle-yellow')
      }  
      if ( compChoise == 'paper') {
        changeProps(circleRed,bImg,'circle-red')
      }
      if ( compChoise == 'scissors') {
        changeProps(circleRed,yImg,'circle-red')
      }
    
      console.log(circleYellow)
      console.log(circleRed)

      setTimeout(() => {
        htwo.classList.add('h')
        hthree.classList.remove('h')
        return setTimeout(() => {
          center.classList.remove('h')
          modalBack.classList.add('win')
          modalBack.classList.toggle('mod-back')
          modalWindow.classList.add('h')
        },2000)
      }, 2000)
    }
  })

  function changeProps(circ, temp, cl) {
    circ.classList.add(`${temp.col}`)
    circ.classList.remove(cl)
    circ.lastElementChild.lastElementChild.src = temp.im
  }
  let again = document.querySelector('.again')

   again.addEventListener('clck', () => {
     eventPreventDefault
   })  
