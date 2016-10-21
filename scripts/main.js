var main = function() {
  
  //$('p').fadeTo('slow', .5);
  //$('.car').fadeOut('slow');
  $('li').draggable();
//  $('#note').resizable();

  $('form').submit(function() {
    
    var noteText = $('#note').val();
    
    if(noteText !== "") {
      var html = $('<li>').text(noteText);
      $(html).prependTo('.noteSpace'); 
      $('li').draggable();     
    }
  
    return false;
  });
};

$(document).ready(main);