var play = window.prompt('do you want to play a guessing game? Yes or no?')

if (!play) {
  window.alert('Refresh the page and try again')
} else {
  play = play.trim().toLowerCase()
  if (play !== 'yes') {
    window.alert('bummer :(, you either didn\'t reply with \'yes\' or \'no\', or you just chose \'no\'. Refesh the page if you change your mind.')
  } else if (play === 'yes') {
    var question = window.prompt('Awesome! I\'m thinking of a number between one and three. What is the number?')
    question = question.trim()
    question = parseInt(question)
    var randomNumber = parseInt(Math.random() * 3 + 1)
    if (question !== randomNumber) {
      window.alert('Sorry wrong choice. Refresh the page to try again!')
    } else {
      var confirmed = window.confirm('Are you sure you want to go with this guess?')
      if (confirmed) {
        window.alert('Congrats, You guessed it!')
      } else {
        window.alert('You should really stick with your gut more often. Refresh the page to play again')
      }
    }
  }
}
