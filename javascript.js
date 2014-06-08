
// changes the h1 node's text
$(document).ready(function(){
   $("h1").text("Here I am!");

   // changes all li's to Orlando
   $("li").text("Orlando");

   //changes element with class of .promo
   $(".promo").text("Changed!");

   //descendant selector, selects all li children of destinations
   $("#destinations li").text("hi!!");

   //selects only the direct descendants! this symbol >
   $("#destinations > li").text("direct child only!");

   //selects multiple items, sep by comma
   $(".promo, #france").text("OVERRIDE");


   //selecting elements by traversing the DOM (FASTER!!)
   $("#destinations").find("li").text("change text!");

   //changes last element's text
   $("li").last().text("change last element");



   //puts this created price node at the bottom of #destinations
   // every time the button class is clicked it adds the new node!!
   //other useful method is .prepend

    $('button').on('click', function(){
      var price = $('<p>From $400</p>');
      $('#destinations').append(price)
      //line below will append the <p> with the price to the closest node to #destinations
      $(this).closest('#destinations').append(price);
      // this line below means that ONLY the button that was clicked will be removed
      $(this).remove();
      });

  });
