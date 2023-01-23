const fs = require('fs');
const inquirer = require('inquirer');

var html = 
`
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
        Hello my name is ${'name'}
      </h1>
      <p class="subtitle">
        I live in ${'location'}. ${'bio'}. You can find out more about me here ${'linked'} and here ${'github'}. 
      </p>
    </div>
  </section>
  </body>
</html>
`
