<?php
//get data from form  
$name = $_POST['full-name"'];
$email= $_POST['email'];
$number= $_POST['mobile'];
$message= $_POST['message'];
$subject= $_POST['subject'];
$to = "balakolla0014@gmail.com";
$txt ="full-name = ". $name . "\r\n  email = " . $email . "\r\n mobile =" . $number . "\r\n Message =" . $message . "\r\n subject =" . $subject;
$headers = "From: noreply@balakolla.com" . "\r\n" .
"CC: balakrishnakolla00014@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>