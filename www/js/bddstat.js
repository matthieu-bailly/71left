$(document).ready(function(){

$(".answer").on('click',function(){

        
        $.ajax({

      type: "POST",
      url : 'http://venus.iut-velizy.uvsq.fr/~mbailly/php/cordova_traitement.php',
      data : {order : $(this).attr('id')},
      success: function(retour)
      {
        alert(retour);

      }

    });
});


$(".done").on('click',function(){

        
        $.ajax({

      type: "POST",
      url : 'http://venus.iut-velizy.uvsq.fr/~mbailly/php/cordova_traitement.php',
      data : {order : $(this).attr('id')},
      {
        alert(retour);

      }

    });
});











});