function abreModalCV(){
  $('.modal-cv').fadeToggle()
}

$(document).ready(function(){
  $(".crow-float,.crow-menu-button").click(function(){
      $(".crow-menu").animate({
          width: "toggle"
      });
  });
});