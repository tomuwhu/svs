<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$mysqli = new mysqli("mysql-server-path", "username", "password", "database-name");
$mysqli->set_charset("utf8");
$mysqli->set_charset("utf8");
$sql = "SELECT * FROM sob_users";
$line = [];
if ($result = $mysqli->query($sql)) {
    while ($row = $result->fetch_assoc()) {
        $line[] = $row;
    }
}
echo json_encode($line);
$result->close();
unset($obj);
unset($sql);
?>