<?php

// check if fields passed are empty
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) ) {
	echo "No arguments Provided!";
	return false;
}
	
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
	
// create email body and send it	
$to = 'camlaborde@gmail.com';
// $to = 'theplugsband@live.fr';
$email_subject = "The Plugs Website : message envoyé par:  $name";
$email_body = "Vous avez reçu un nouveau message ! \n\n".
				  "Nom: $name \n".
				  "Email: $email_address\n".
				  "Message: \n\n $message";	
$headers = "From: theplugs@free.fr\n";
$headers .= "Reply-To: $email_address";	
mail($to,$email_subject,$email_body,$headers);

return true;			
?>
