var height = 10;


$(document).ready(function () {
  $('#1').click(function () {
    height +=10;
    if ( height > 100) {
      height=10;
    }
    $('.rectangle').css('height', height+'px')
  });
 $(function () {
   $('#2').click(function () {
     $('.rectangle').css('background-color', 'green');
   })
 });
 $(function () {
   $('#3').click(function () {
     $('.rectangle').css('background-color', 'red')
   })
 });
$(function () {
  $('#4').click(function () {
     $('.rectangle').hide();
  })
})
$(function () {
  $('#5').click(function () {
     $('.rectangle').show();
  })
});
});
