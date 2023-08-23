<?php
    $inp = file_get_contents('php://input');
    session_id($inp);
    session_start();
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    echo '{un: "'.session_id().'", name: "'.$_SESSION['name'].'"}';
    session_unset();
?>