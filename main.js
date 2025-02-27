// Preparation steps 

// select the dom nodes 

const emailListEl = document.getElementById("email_list")

// make an ajax request to the boolean endpoint

fetch("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(response => response.json())
  .then(data => {
    // save the random email in a variable 
    const randomEmail = data.response
  })
