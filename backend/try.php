<?php
/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ERROR);
*/
session_start();
ini_set("proxy_buffering", "off");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
$mysqli = new mysqli("mysql-server-path", "username", "password", "database-name");
$mysqli->set_charset("utf8");
$sql = "SELECT un, name, id, user, msg FROM sob_users, strdata WHERE sob_users.name = strdata.user";

while (true) {
    $line = [];
    if ($result = $mysqli->query($sql)) {
        while ($row = $result->fetch_assoc()) {
            $row['currtime'] = date('r');
            $line[] = $row;
        }
    }
    $result->close();
    echo "data: " . json_encode($line) . "\n\n";

    ob_flush();
    flush();

    sleep(5);
}
?>