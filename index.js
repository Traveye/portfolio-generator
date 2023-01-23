const fs = require('fs');
const inquirer = require('inquirer');

inquirer
.prompt([
  {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where do you live?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Tell us about yourself.',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn URL?',
      name: 'linked',
    },
    {
      type: 'input',
      message: 'What is your GitHub URL?',
      name: 'github',
    },
  ])

  .then((answers) => {
    console.log(answers)
    var html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Hello Bulma!</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    <body>
    <section class="section">
      <div class="container">
        <h1 class="title">
          Hello my name is ${answers.name}
        </h1>
        <p class="subtitle">
          I live in ${answers.location}. 
          ${answers.bio}. 
          
          You can find out more about me here ${answers.linked} and here ${answers.github}. 

        </p>
      </div>
    </section>
    </body>
  </html>
  `
    fs.appendFile('profile.html', html, (err) => err ? console.log(err) : console.log('Sucess'))
  })

  
  