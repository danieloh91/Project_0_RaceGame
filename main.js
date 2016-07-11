$(document).on('ready', function(){
  visible = true;
  //choose 1 or 2 players
  $(".select1Player").click(function(){
    if (visible) {
      $(".choosePlayers").slideUp('slow',function(){
        $(".choosePlayers").addClass('hide').slideDown(0);
      });
    }
    visible = ! visible;
    $('.fishes').show(500).slideDown(100);
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
      if(nemo.stroke===5) {
        $('.winPopUp').show(100).append('<h2>Congrats!<br>' + nemo.name + ' wins!</h2>');
        $('.swimOne').stop();
        $('.swimTwo').stop();
      }
    } else if (event.keyCode === 47) {
      $('.swimTwo').animate({"margin-left": "+=4%"}, "fast" );
      dori.name = 'Dori';
      dori.lap();
      if(dori.stroke===5) {
        $('.winPopUp').show(100).append('<p>Congrats!<br>' + dori.name + ' wins!</p>');
        $('.swimOne').stop();
      }
    }
  });
});

function Fish() {
  this.stroke = 0;
  this.name = '';
  this.lap = function() {
    this.stroke++;
  };
}
