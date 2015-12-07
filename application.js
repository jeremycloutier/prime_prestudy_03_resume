$(document).ready(function() {
  $(".display").hide();
  $('#show').on('click', function() {
    $('.display').show();
	$('button').remove();
  });	
});
