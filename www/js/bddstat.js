$(document).ready(function(){

$(".answer").on('click',function(){


$.ajax({

      type: "POST",
      url : 'http://71left.iut-velizy.uvsq.fr/cordova_traitement.php',
      data : {order : "test"},
      success: function(retour)
      {
          console.log(retour);

      }

    });
        
        $.ajax({

      type: "POST",
      url : 'http://71left.iut-velizy.uvsq.fr/cordova_traitement.php',
      data : {order : $(this).attr('id')},
      success: function(retour)
      {
   

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
        swal({
    title: "Terminé !",
    text: "Vos réponses ont été envoyés à la base de données.",
    icon: "success"
}).then(function() {
    window.location = "../../index.html";
});
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
        $('#pourcentage1').text(retour);
        $('#pourcentage1').append('%');

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
        $('#pourcentage2').text(retour);
        $('#pourcentage2').append('%');

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
        $('#pourcentage3').text(retour);
        $('#pourcentage3').append('%');

      }

    });

});









});