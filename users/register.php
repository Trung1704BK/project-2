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
$conn = connect($servername, $username, $password, $dbname);
$data = json_decode(file_get_contents('php://input'), true);
if ($_POST && isset($_POST['email']) && isset($_POST['password'])) {
    $data = $_POST;
}

$email = isset($data["email"]) ? $data["email"] : '';
$pass = isset($data["password"]) ? $data["password"] : '';
$salt = '9wehgky3496u4oyh346u934';


$returnData = array(
    'success' => false,
    'message' => '',
    'errors' => []
);

$errors = array();

if (empty($data["email"])) {
    $errors[] = array(
        'field' => 'email',
        'code' => 'ERROR_EMPTY',
        'message' => 'Email is empty'
    );
}

if (empty($data["password"])) {
    $errors[] = array(
        'field' => 'password',
        'code' => 'ERROR_EMPTY',
        'message' => 'Password is empty'
    );
}

if (!sizeof($errors)) {
    // validate email
    $select = "SELECT `email` FROM `register` WHERE `email` = '$email'";
    $result = $conn->query($select);
    if ($result->num_rows > 0) {
        $errors[] = array(
            'field' => 'email',
            'code' => 'ERROR_EXIST',
            'message' => 'Email is exist'
        );
    } else {
        $pass = md5($pass);
        $returnData['success'] = true;
        $sql = "INSERT INTO register(email,password) VALUES ('$email' ,'" . $salt . $pass . "')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => true]);
        } else {
            echo json_encode(["success" => false]);
        }
    }
}


$returnData['errors'] = $errors;
echo json_encode($returnData);
