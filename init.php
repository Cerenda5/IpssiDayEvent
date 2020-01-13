<?php
    //$event = new PDO('mysql:host=localhost:8080;dbname=ipssi', 'root', 'root', array(PDO::MYSQL_ATTR_INIT_COMMAND=>'SET NAMES UTF8') ); //connexion bdd mac en local
    $bdd = new PDO('mysql:host=localhost:3308;dbname=ipssi', 'root', 'root', array(PDO::MYSQL_ATTR_INIT_COMMAND=>'SET NAMES UTF8') ); //connexion bdd windows en local
?>