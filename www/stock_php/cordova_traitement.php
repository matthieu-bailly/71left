<?php
session_start();
header("Access-Control-Allow-Origin: *");



if(isset($_POST['order']))
{
      $link      = mysqli_connect("venus", "mbailly", "Frieza200", "mbailly");
  
      switch($_POST['order']){

        case "e10" :
        $_SESSION['e1'] = 1;
        echo ($_SESSION['e1']);
        break;

        case "e11" :
        $_SESSION['e1'] = 0;
        echo ($_SESSION['e1']);
        break;

        case "e20" :
        $_SESSION['e2'] = 1;
        echo ($_SESSION['e2']);
        break;

        case "e21" :
        $_SESSION['e2'] = 0;
        echo ($_SESSION['e2']);
        break;

        case "e30" :
        $_SESSION['e3'] = 1;
        echo ($_SESSION['e3']);
        break;

        case "e31" :
        $_SESSION['e3'] = 0;
        echo ($_SESSION['e3']);
        break;

        case "e40" :
        $_SESSION['e4'] = 1;
        echo ($_SESSION['e4']);
        break;

        case "e41" :
        $_SESSION['e4'] = 0;
        echo ($_SESSION['e4']);
        break;

        case "e50" :
        $_SESSION['e5'] = 1;
        echo ($_SESSION['e5']);
        break;

        case "e51" :
        $_SESSION['e5'] = 0;
        echo ($_SESSION['e5']);
        break;

         case "e60" :
        $_SESSION['e6'] = 1;
        echo ($_SESSION['e6']);
        break;

        case "e61" :
        $_SESSION['e6'] = 0;
        echo ($_SESSION['e6']);
        break;

        case 'e100':
        $request="INSERT INTO `stat_etouff` (`app_etouff_id`, `app_etouff_q1`, `app_etouff_q2`, `app_etouff_q3`, `app_etouff_q4`, `app_etouff_q5`, `app_etouff_q6`, `app_etouff_done`) VALUES (NULL, '".$_SESSION['e1']."', '".$_SESSION['e2']."', '".$_SESSION['e3']."', '".$_SESSION['e4']."', '".$_SESSION['e5']."', '".$_SESSION['e6']."', '1')";
            break;
        case 'stat1':
                $statrequest = "SELECT COUNT(`app_etouff_q2`) FROM `stat_etouff` WHERE `app_etouff_q2` = 1";
                $statrequest2 = "SELECT COUNT(`app_etouff_q2`) FROM `stat_etouff`";
                $statanswer = mysqli_query($link,$statrequest);
                $statanswer2 = mysqli_query($link,$statrequest2);
                $rang = mysqli_fetch_row($statanswer);
                $rang2 = mysqli_fetch_row($statanswer2);
                $pourcentage = ($rang[0]*100)/($rang2[0]);
                echo (floor($pourcentage));

                break;      

        default :
        echo ("no order");
        break;
      }

      if(isset($request))
     { 
     
     if(mysqli_query($link,$request))
     {
      echo("Réponses bien insérées");
      session_destroy();
     }
     else
     {
      echo("Erreur lors de l'envoi des réponses");
     }
   }
  

    }
else
{
  echo("No order");
}    
    ?>

 