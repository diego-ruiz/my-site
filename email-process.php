<?php
# Include the Autoloader (see "Libraries" for install instructions)
require 'vendor/autoload.php';
use Mailgun\Mailgun;

# Instantiate the client.
$mgClient = new Mailgun('key-d244944ffe2edf1a0d95b54756474cd1');
$domain = "sandbox350b360240074869bee001fc443387d5.mailgun.org";

# Make the call to the client.
$result = $mgClient->sendMessage("$domain",
                  array('from'    => $_REQUEST['name'].' <'.$_REQUEST['email'].'>',
                        'to'      => 'Diego Ruiz <dieg.ruiz098@gmail.com>',
                        'subject' => "Diegruiz.com Contact Form Submission - ".$_REQUEST['subject'],
                        'text'    => $body));

if(!$result) {
	echo '<div class="contact_return_msg_error">Message could not be sent. Email at dieg.ruiz098@gmail.com</div>';
	//echo 'Mailer Error: ' . $mail->ErrorInfo;
	//exit;
}
else{
	echo "<div class='contact_return_msg_success'>Message sent! I'll get in contact soon</div>";
}
?>