console.log(`I'm client side JS`)


let input = document.getElementById('myInput')
let locationButton = document.getElementById('locationButton')

locationButton.addEventListener("click", (e) => {
  e.preventDefault();

  let location = input.value
  messageOne.textContent = 'Loading ...'
  messageTwo.textContent = ''
  
  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      } //end else
    })
  })
})




