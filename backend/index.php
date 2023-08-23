<?php
    session_id(file_get_contents('php://input'));
    session_start();
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    echo '{"un": "'.session_id().'", "name": "'.$_SESSION['name'].'"}';
?>