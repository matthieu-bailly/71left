$(document).ready(function(){

$(".answer").on('click',function(){

        
        $.ajax({

      type: "POST",
      url : 'http://venus.iut-velizy.uvsq.fr/~mbailly/php/cordova_traitement.php',
      data : {order : $(this).attr('id')},
      success: function(retour)
      {
        console.log(retour);

      }

    });
});


$(".done").on('click',function(){



        
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

$(".start").on('click',function(){



        
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

$('.pourcentages').ready(function(){
$.ajax({

      type: "POST",
      url : 'http://venus.iut-velizy.uvsq.fr/~mbailly/php/cordova_traitement.php',
      data : {order : $(this).attr('id')},
      success: function(retour)
      {
        $(this).attr('id').html(retour);

      }

    });

});









});