// $(document).on('ready', function() {
//   $(window).keypress(function() {
//     $('.racecar1').animate({ "left": "+=50px" }, "slow" );
//   });
// });
// // jquery animate

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
  console.log('swim!');
});
