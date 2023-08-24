<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
$mysqli = new mysqli("mysql-server-path", "username", "password", "database-name");
    $mysqli -> set_charset("utf8");
    $sql = "SELECT * FROM sob_users";
    $line = [];
    $s = "[";
    if ($result = $mysqli->query($sql)) {
        while($obj = $result->fetch_object()){
            $s .= json_encode($obj).',';
        }
    }
    echo rtrim($s,",")."]";
    $result->close();
    unset($obj);
    unset($sql);
?>