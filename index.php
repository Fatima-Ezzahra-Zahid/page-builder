<?php

include_once '_config/config.php';
include_once '_config/db.php';
include_once '_functions/functions.php';
include_once '_classes/Articles.php';

//definition page courante
if(isset($_GET['page']) and !empty($_GET['page'])){

  $page = trim(strtolower($_GET['page']));

}

else {

    $page = 'home';
}


//definition d'un array qui comporte les dossier de la logique
$allpages = scandir('controllers/');


if(in_array($page.'_controller.php',$allpages))  {

  include_once 'models/'.$page.'_model.php';
  include_once 'controllers/'.$page.'_controller.php';
  include_once 'views/'.$page.'_view.php';

} else {

  echo 'ERROR 404';
}




