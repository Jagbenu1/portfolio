<?php
  if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

if(empty($name) && empty($subject) && empty($mailFrom) && empty($message)){
  header("Location: ../My_site_contact.html.php?mailsend=not_finished");
  exit();
}

if(!empty($mailFrom) && empty($name) && !empty($subject) && !empty($message)){
  header("Location: ../My_site_contact.html.php?mailsend=no_name");
  exit();
}

if(empty($mailFrom) && !empty($name) && !empty($subject) && !empty($message)){
  if(!filter_var($mailFrom,FILTER_VALIDATE_EMAIL)){
    header("Location: ../My_site_contact.html.php?mailsend=email_invalid");
    exit();
  }
}

if(!empty($mailFrom) && !empty($name) && empty($subject) && !empty($message)){
  header("Location: ../My_site_contact.html.php?mailsend=subject_empty");
  exit();
}

if(!empty($mailFrom) && !empty($name) && !empty($subject) && empty($message)){
  if(strlen($message)<10){
    header("Location: ../My_site_contact.html.php?mailsend=message_short");
    exit();
    }
}

if(!empty($mailFrom) && !empty($name) && !empty($subject) && !empty($message)){
//put some error handling when done
    $mailTo = "koffdfgc7txk@jacquesagbenu.com";
    $headers = "From: " . $mailFrom;
    $txt = "You have recieved and email from " . $name.".\n\n". $message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: ../My_site_contact.php?mailsent");
  }
}



 ?>
