$(document).on('ready', function(){
  visible = true;
  //choose 1 or 2 players
  $(".select1Player").click(function(){
    //1 and 2 player buttons hide after selection
    if (visible) {
      $(".choosePlayers").slideUp('slow',function(){
        $(".choosePlayers").addClass('hide').slideDown(0);
      });
    }
    visible = ! visible;
    //fishes appear after button hides
    $('.fishes').show(500).slideDown(100);
    //player 2 fish starts to move
    $('.swimTwo').animate({"margin-left": "+=90%"}, 9900);
  });
  $(".select2Player").click(function(){
    if (visible) {
      $(".choosePlayers").slideUp('slow',function(){
        $(".choosePlayers").addClass('hide').slideDown(0);
      });
    }
    visible = ! visible;
    $('.fishes').show(500).slideDown(100);
  });

  var dori = new Fish();
  var nemo = new Fish();

  //press Z or / to make nemo or dori move to the right
  $("body").keypress(function(event){
    if (event.keyCode === 122) {
      $('.swimOne').animate({"margin-left": "+=4%"}, "fast" );
      nemo.name = 'Nemo';
      nemo.lap();
      if(nemo.stroke===23) {
        $('.winPopUp').show(100).append("<h2>Congrats!<br>" + nemo.name + " wins!</h2><br><a class='btn reset' href='index.html'><strong>New Game<strong></a>");
        $('.swimOne').stop();
        $('.swimTwo').stop();
      }
    } else if (event.keyCode === 47) {
      $('.swimTwo').animate({"margin-left": "+=4%"}, "fast" );
      dori.name = 'Dori';
      dori.lap();
      if(dori.stroke===23) {
        $('.winPopUp').show(100).append("<h2>Congrats!<br>" + dori.name + " wins!</h2><br><a class='btn reset' href='index.html'><strong>New Game<strong></a>");
        $('.swimOne').stop();
      }
    }
  });
  //new game button appears upon win screen
  $('.reset').on("click", function(){
    $('.btn').append('');
  });
});

//fish object
function Fish() {
  this.stroke = 0;
  this.name = '';
  this.lap = function() {
    this.stroke++;
  };
}
