$(document).ready(function(){
  var millisec = 0;
  var sec = 0;
  var min = 0;
  var hour = 0;

  var timer;

  //スタートボタン
  $('#start').click(function(){
    timer = setInterval(countup, 100);
   $(this).prop('disabled',true);
   $('#stop, #reset').prop('disabled',false);
  });

  //ストップボタン
  $('#stop').click(function(){
    clearInterval(timer);
    $(this).prop('disabled', true);
    $('#start, #reset').prop('disabled', false);
  });

  //リセットボタン
  $('#reset').click(function(){
     millisec = 0;
     sec = 0;
     min = 0;
     hour = 0;
    $('#clock').html('0:0:0:0');
    $(this).prop('disabled', true);
    $('#start, #stop').prop('disabled', false);
  })
  //countup
  function countup(){
    millisec++

    if (millisec > 9){
      millisec = 0;
      sec++;
    }
    if (sec > 59){
      sec = 0;
      min++;
    }
    if (min > 59){
      min = 0;
      hour++;
    }
  $('#clock').html(hour + ':' + min + ':' + sec + ':' + millisec);
  }
});