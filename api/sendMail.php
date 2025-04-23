<?php
require 'PHPMailerAutoload.php';
var_dump('TESTTEST',$_POST['email']);
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['message'];

$emailData = 'Email From : '.$name.' Email ID : '.$email.' Message : '.$message;
// $dataToSend = json_encode($myData);
//var_dump('DATA = ',$name, $email, $message, $emailData);
if(isset($_REQUEST['name']) && isset($_REQUEST['email']) && isset($_REQUEST['message']))
{
$email = 'vivian3050@gmail.com';
$password = 'magicaldays32';

// $to_id = $_POST['toid'];
// $message = $_POST['message'];
$subject = 'contactUs';

$mail = new PHPMailer;

//var_dump('TEST IN: ',$_POST);

//$mail->isSMTP(); if on local uncomment
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = $email;
$mail->Password = $password;

$mail->addAddress($email);
$mail->Subject = $subject;

$mail->msgHTML($message);
var_dump('asdasdasd : ', $mail->send(), $mail->ErrorInfo);
if (!$mail->send()) {
$error = "Mailer Error: " . $mail->ErrorInfo;
echo '<p id="para">'.$error.'</p>';
}
else {
echo '<p id="para">Message sent!</p>';
}
}
else{
echo '<p id="para">Please enter valid data</p>';
}
?>