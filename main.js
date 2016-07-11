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
    visible = !visible;
    //fishes appear after button hides
    $('.fishes').show(500).slideDown(100);
    //player 2 fish starts to move
    function doriMove() {
      var lapCount = 0;
      function $swimDori() {
        $('.swimTwo').animate({"margin-left": "+=18%"}, 1000);
        lapCount++;
      }
      for (var i=0; i<5; i++) {
        $swimDori(i);
      }
      $.when(lapCount=5).done(console.log('hi'));
    }
    doriMove();
    // function botWin(){
    //     $('.winPopUp').show(100).append("<h2>Congrats!<br>" + dori.name + " wins!</h2><br><a class='btn reset' href='index.html'><strong>New Game<strong></a>");
    //     $('.swimOne').stop();
    //     $('.swimTwo').stop();
    //     $('.swimOne').clearQueue();
    //     $('.swimTwo').clearQueue();
    //     $("body").off('keypress');
    // }
    // $.when(doriMove()).done(botWin());

    // or maybe moving a smaller increments and add a counter and when that counter reaches a certain number, alert dori wins
    // add an event listener for dori's win...need condition where dori's
    // jquery.css maybe if the element has a css width of 90 then you can alert that dori won
  });

  $(".select2Player").click(function(){
    if (visible) {
      $(".choosePlayers").slideUp('slow',function(){
        $(".choosePlayers").addClass('hide').slideDown(0);
      });
    }
    visible =!visible;
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
      if(nemo.stroke===27) {
        $('.winPopUp').show(100).append("<h2>Congrats!<br>" + nemo.name + " wins!</h2><br><a class='btn reset' href='index.html'><strong>New Game<strong></a>");
        $('.swimOne').stop();
        $('.swimTwo').stop();
        $('.swimOne').clearQueue();
        $('.swimTwo').clearQueue();
        $("body").off('keypress');
      }
    } else if (event.keyCode === 47) {
      $('.swimTwo').animate({"margin-left": "+=4%"}, "fast" );
      dori.name = 'Dori';
      dori.lap();
      if(dori.stroke===27) {
        $('.winPopUp').show(100).append("<h2>Congrats!<br>" + dori.name + " wins!</h2><br><a class='btn reset' href='index.html'><strong>New Game<strong></a>");
        $('.swimOne').stop();
        $('.swimTwo').stop();
        $('.swimOne').clearQueue();
        $('.swimTwo').clearQueue();
        $("body").off('keypress');
      }
    }
  });
  //new game button appears upon win screen
  $('.reset').on("click", function(){
    $('.btn').append('');
  });
  //when someone wins, document.off('keypress') to take off all of the keypress handlers
  // setTimeout
});

//fish object
function Fish() {
  this.stroke = 0;
  this.name = '';
  this.lap = function() {
    this.stroke++;
  };
}

//TODO:
// determine how to show that dori wins during 1 player mode
// add in a 3-2-1 counter that appears then disappears
// opens to a game board screen that chooses 1 or 2 player mode with option to choose nemo or dori vs just nemo on 1 player
