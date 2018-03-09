var play = window.prompt('do you want to play a guessing game? Yes or no?')

if (play === null || play === undefined) {
  window.alert('Refresh the page and try again')
} else {
  play = play.trim().toLowerCase()
  if (play === 'no') {
    window.alert('bummer :( refesh the page if you change your mind.')
  } else if (play === 'yes') {
    var question = window.prompt('Awesome! I\'m thinking of a number between one and three. What is the number?')
    question = question.trim()
    question = parseInt(question)
    var randomNumber = Math.random()
    if (randomNumber > 0.66) {
      randomNumber = 1
    } else if (randomNumber > 0.33) {
      randomNumber = 2
    } else {
      randomNumber = 3
    }
    if (question !== randomNumber) {
      window.alert('Sorry wrong choice. Refresh the page to try again!')
    } else if (question === randomNumber) {
      var confirmed = window.confirm('Are you sure you want to go with this guess?')
      if (confirmed) {
        window.alert('Congrats, You guessed it!')
      } else {
        window.alert('You should really stick with your gut more often. Refresh the page to play again')
      }
    }
  }
}
