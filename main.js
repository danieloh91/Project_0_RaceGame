$(document).on('ready', function(){
  visible = true;
  //hide Player 1 after submit
  $(".button1").click(function(){
    if (visible) {
      $(".player1").slideUp('slow',function(){
        $(".player1").addClass('hide').slideDown(0);
      });
    }
    visible = ! visible;
  });
  //hide Player 2 after submit
  $(".button2").click(function(){
    if (visible) {
      $(".player2").slideUp('fast',function(){
        $(".player2").addClass('hide').slideDown(0);
      });
    }
    visible = ! visible;
  });
  //press Z or / to make nemo or dori move to the right
  $("html").keypress(function(event){
    if (event.keyCode === 122) {
      $('.swimOne').animate({"margin-left": "+=50px" }, "fast" );
    } else if (event.keyCode === 47) {
      $('.swimTwo').animate({"margin-left": "+=50px" }, "fast" );
    }
  });
});
