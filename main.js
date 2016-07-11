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

  var nemo = new Fish();
  var dori = new Fish();

  var $winner = function(){
    $('.winPopUp').show(100).append('<p>Congrats!</p><br>' + this.name + ' wins!');
  };

  //press Z or / to make nemo or dori move to the right
  $("body").keypress(function(event){
    if (event.keyCode === 122) {
      $('.swimOne').animate({"margin-left": "+=4%" }, "fast" );
      nemo.name = nemo;
      nemo.lap();
      if(nemo.stroke===5) {
        // $('.board-wrapper').append('<div class="overlay"></div>');
        // $('.overlay').append('<p>Nemo Wins!</p>');
        // alert("nemo wins!");
        return $winner();
      }
    } else if (event.keyCode === 47) {
      $('.swimTwo').animate({"margin-left": "+=4%" }, "fast" );
      dori.name = dori;
      dori.lap();
      if(dori.stroke===5) {
        $('.winPopUp').show(100);
        return $winner();
      }
    }
  });
  // initMap();
});

function Fish() {
  this.stroke = 0;
  this.name = null;
  this.lap = function() {
    this.stroke++;
  };
}



// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 13, lng: -100},
//     zoom: 3
//   });
//   var marker = new google.maps.Marker({
//     position: {lat: 35, lng: -40},
//     map: map,
//   });
// }
