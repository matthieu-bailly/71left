$(document).ready(function(){

$(".answer").on('click',function(){

        
        $.ajax({

      type: "POST",
      url : 'http://71left.iut-velizy.uvsq.fr/cordova_traitement.php',
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
      url : 'http://71left.iut-velizy.uvsq.fr/cordova_traitement.php',
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
      url : 'http://71left.iut-velizy.uvsq.fr/cordova_traitement.php',
      data : {order : $(this).attr('id')},
      success: function(retour)
      {
        alert(retour);

      }

    });
});

$('#pourcentage1').ready(function(){
$.ajax({

      type: "POST",
      url : 'http://71left.iut-velizy.uvsq.fr/cordova_traitement.php',
      data : {order : "pourcentage1"},
      success: function(retour)
      {
        $(this).html(retour);

      }

    });

});

$('#pourcentage2').ready(function(){
$.ajax({

      type: "POST",
      url : 'http://71left.iut-velizy.uvsq.fr/cordova_traitement.php',
      data : {order : "pourcentage2"},
      success: function(retour)
      {
        $(this).html(retour);

      }

    });

});

$('#pourcentage3').ready(function(){
$.ajax({

      type: "POST",
      url : 'http://71left.iut-velizy.uvsq.fr/cordova_traitement.php',
      data : {order : "pourcentage3"},
      success: function(retour)
      {
        $(this).html(retour);

      }

    });

});









});