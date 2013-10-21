<?php
require 'includes/PHPMailer-master/class.phpmailer.php';
$body = $_REQUEST['email_body'];

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = "localhost";
$mail->SMTPAuth = true;     // turn on SMTP authentication
$mail->Username = "diegruiz";        // Make sure to replace this with your shell enabled user
$mail->Password = "class08";
$mail->From = $_REQUEST['email'];
$mail->FromName = $_REQUEST['name'];
$mail->addAddress('dieg.ruiz098@gmail.com', 'Diego Ruiz');
$mail->isHTML(true);
$mail->Subject= "Diegruiz.com Contact Form Submission - ".$_REQUEST['subject'];
$mail->Body =$body;
if(!$mail->send()) {
	echo '<div class="contact_return_msg_error">Message could not be sent. Email at dieg.ruiz098@gmail.com</div>';
	//echo 'Mailer Error: ' . $mail->ErrorInfo;
	//exit;
}
echo "<div class='contact_return_msg_success'>Message sent! I'll get in contact soon</div>";
?>