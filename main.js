// Preparation steps 

// select the dom nodes 

const emailListEl = document.getElementById("email_list")

// make an ajax request to the boolean endpoint and wrap it in a function

function pushRandomEmail10times() {
  for (let i = 0; i < 10; i++) {
    fetch("https://flynn.boolean.careers/exercises/api/random/mail")
      .then(response => response.json())
      .then(data => {
        // save the random email in a variable 
        const randomEmail = data.response
        // modify the html
        console.log(randomEmail);
        // create a new li node element
        const liEl = document.createElement('li')
        console.log(liEl);
        // append the content to the list items
        liEl.append(randomEmail)
        // append the li child to the ul parent
        emailListEl.appendChild(liEl)
      })
  }
}

pushRandomEmail10times()

