$(document).ready(function() {

  $("form#form").submit(function(event) {
    
    event.preventDefault()
    let answers = [];

    $('input').each(function() {
      
      answers.push($(this).val());
    });

    let answersCopy = [];
    answersCopy.push(answers[1], answers[0],answers[2]);
    
    let answersCopyCopy = [];
    answersCopyCopy = answers.concat(answersCopy);
    console.log(answersCopyCopy);

    answersCopyCopy.forEach(function(favThing) {
      $("ul#favorite-things").prepend("<li>" + favThing + "</li>");
    });
    

  });

  let flavors = ["mint", "chocolate", "vanilla", "mudslide"];

  flavors.forEach(function(flavorType) {
    $("ul#ice-cream-list").append("<li>" + flavorType + "</li>");
  });

  


});