$(document).ready(function(){


$("#launch_acci").on('click',function(){

        $.ajax({
            type : "POST",
            url : 'http://cadusoft.sites.iut-velizy.uvsq.fr/appcontrol.php',
            data : {envoi : "oui"},
            success : function(retour)
            {
               alert('tester la base de données -- entrée accomplie');

            }
        })

    });






});