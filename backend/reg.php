<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    $inp = json_decode(file_get_contents('php://input'));
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    $un = $inp->un;
    $name = $inp->name;
    $mail = $inp->mail;
    $web = $inp->web;
    $git = $inp->git;
    $pw = $inp->pw;
    if ($un and $pw and $name and $web) {
        $mysqli = new mysqli("mysql-server-path/domain.hu","tnemeth","password","database-name");
        $mysqli -> set_charset("utf8");
        $query = "INSERT INTO sob_users VALUES('".$un."','".$pw."','".$name."','".$mail."','".$web."','".$git."')";
        $result = $mysqli->query($query);
        $answ = $result;
    } else $answ = false;
    if ($answ) {
        session_id($un);
        session_start();
        $_SESSION['name'] = $name;
        $_SESSION['un'] = $un;
    }
    echo json_encode($answ);
?>