<?php
    /*
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    */
    $inp = json_decode(file_get_contents('php://input'));
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    $un = $inp->un;
    $pw = $inp->pw;
    session_id($un);
    session_start();
    $mysqli = new mysqli("mysql-server-path/domain.hu","tnemeth","password","database-name");
    $mysqli -> set_charset("utf8");
    $query = "  SELECT *    FROM    sob_users 
                            WHERE   un = '".$un."' 
                                    and 
                                    pw = '".$pw."'";
    $result = $mysqli->query($query);
    $ans = $result->fetch_assoc();
    $_SESSION['name'] = $ans['name'];
    $_SESSION['un'] = $ans['un'];
    if (!$_SESSION['un']) session_unset();
    $answ = ['un' => $_SESSION['un'], 'name' => $_SESSION['name']];
    echo json_encode($answ);
?>