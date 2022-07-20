<?php
require 'dbCon.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods:  POST');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json; charset=utf-8');
include_once "./dbCon.php";
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "shopping";
$conn = new mysqli($servername, $username, $password, $dbname);
$data = $_GET;


$email = isset($data["email"]) ? $data["email"] : '';
$page = isset($data["page"]) && $data["page"] >= 1 ? $data["page"] : 1;
$limit = 6;
$where = '1=1';

if ($email) {
    $where .= ' AND email="' . $email . '"';
}

//tim tong
$totalItems = 0;
$countSQL = "SELECT count(*) as total FROM register WHERE $where";
$result = $conn->query($countSQL);

if ($result->num_rows > 0) {
    // output data of each row
    $row = $result->fetch_assoc();
    $totalItems = $row['total'];
} else {
    echo "0 results";
}

//tim danh sach o trang hien taire

// $listCurrent 
$offset = ($page - 1) * $limit;
$contentPage = "SELECT * FROM register WHERE $where ORDER BY id LIMIT $limit OFFSET $offset";

$resultDatas = $conn->query($contentPage);

$datas = [];
if ($resultDatas->num_rows > 0) {
    // output data of each row
    while ($row = $resultDatas->fetch_assoc()) {
        $datas[] = $row;
    }
    // var_dump($rows);
}

$returnData = array(
    'currentPage' => $page,
    'limit' => $limit,
    'offset' => $offset,
    'total' => $totalItems,
    'data' => $datas
);

echo json_encode($returnData);
