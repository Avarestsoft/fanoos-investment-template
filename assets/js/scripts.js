$(document).ready(function(){
    $('.form-control').blur(function(){
        if ($(this).val()) {
            $(this).parent().addClass('visited');
        }
        else{
            $(this).parent().removeClass('visited');
        }
    });
});

$(document).ready(function() { 
  $(".modal_scroll").slimScroll({   
      width: '100%',
      height: '400px',
      size: '3px',
      opacity: 1,
      position: 'left',
      borderRadius: '10px',
      color: '#727d7d',
      alwaysVisible: true,
      distance: '3px',
      railVisible: true,
      railColor: '#fff',
      railOpacity: 1,
      wheelStep: 10,
      railBorderRadius:'10px',
      allowPageScroll: false,
      disableFadeOut: false,
      touchScrollStep :75
  });
});