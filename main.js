// Preparation steps 

// select the dom nodes 

const emailListEl = document.getElementById("email_list")

// create global variables

const randomEmailList = []

// make an ajax request to the boolean endpoint and wrap it in a function

function pushRandomEmail(randomEmailList) {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => response.json())
    .then(data => {
      // save the random email in a variable 
      const randomEmail = data.response
      randomEmailList.push(randomEmail)
    })
}

for (let i = 0; i < 10; i++) {
  pushRandomEmail(randomEmailList)
}



