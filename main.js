var forEach = function(arr, func){
  for(var i = 0; i < arr.length; i++){
    func(arr[i], i, arr)
  }
}

document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  var num = answerPTagWithValue.textContent
  answerPTagWithValue.textContent = num * 2
  // you do the rest

})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circleBlkWht = document.querySelector('#circle-bw')

  var circleStyles = window.getComputedStyle(circleBlkWht)

  if (circleStyles.backgroundColor === 'rgb(0, 0, 0)') {
    circleBlkWht.style.backgroundColor = '#fff'
  } else {
    circleBlkWht.style.backgroundColor = 'rgb(0, 0, 0)'
  }

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}

  //THIS ONE IS FOR WRITING
  // this is where you will take the manipulated value and apply it
  var bigButton = document.getElementById('circle-red');
  //===================================

  //THIS ONE IS FOR READING
  //You will get your values from here and manipulate them
  var bigButtonStyle = window.getComputedStyle(bigButton);
  //==========================================

  var daWidth = bigButtonStyle.width.split('p')
  var daHeight = bigButtonStyle.height

  console.log(daWidth)

  console.log(bigButton.style.width);
  if(parseInt(bigButtonStyle.width) < 320){
  bigButton.style.width = (daWidth[0] * 2) + "px"
  bigButton.style.height = (daWidth[0] * 2) + "px"
}else {
  bigButton.style.width = "40px"
  bigButton.style.height = "40px"
}

})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5

  //(1)select all <li> elements under #user-list
  //(2)loop over the <li> elements
  //(3)on each iteration, check the .className on the DOM element to see
  //  if it has value of 'active'
  //(4)if the DOm element has a class of 'active', we need to
  //       append to a string
  //(5)When finished w/ loop, inject large-string as .innerHTML
  //      to   #user-list (the list container)

  var userListEls = document.querySelectorAll('#user-list li')
  var userListContainerEl = document.querySelector('#user-list')

  //var largeHtmlStr = ''

  //forEach(userListEls, function(domElement, index, theArray){
  //  if(domElement.className === 'active'){
  //    console.log(domElement)
  //    largeHtmlStr += '<li class="active">active user</li>'
  //  }
  //})

//userListContainerEl.innerHTML = largeHtmlStr

 forEach(userListEls, function(domElement, index, theArray){
   if(domElement.className.indexOf('inactive') >= 0 ){
     userListContainerEl.removeChild(domElement)
   }
 })
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  // (1) seleect all elements that are have class of .square w/ document.querySelectorAll()
  var everySquareEl = document.querySelectorAll('.square')
  // OPTIMAL
 // (2) iterate over elements backwards ... for ( var i = allSquares.length - 1 ; i >= 0 ; i-- )
  // (3) select #reverse-squares .answer-box and .appendChild( squareDomElement  )
  for (var i = everySquareEl.length - 1 ; i >= 0 ; i--){
    let listOfReversedSquares = document.querySelector('#reverse-squares .answer-box')
    //console.log(listOfReversedSquares)
    listOfReversedSquares.appendChild(everySquareEl[i])
   }
   //console.log(everySquareEl)
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var listElements = document.querySelectorAll('#tasks li')
  var pigLatinContainer = document.querySelector('#tasks')

      forEach(listElements, function(liEl, index, array){
        var currentText = liEl.innerHTML
        liEl.innerHTML = ''
        console.log(liEl.innerHTML)
        for (var i = currentText.length -1; i >= 0; i--) {
             reverseArr = currentText[i]
             //console.log(reverseArr)
             liEl.innerHTML += reverseArr
             console.log(pigLatinContainer.innerHTML)
           }

      })

})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
