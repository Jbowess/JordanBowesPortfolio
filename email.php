<?php
    $name = $_POST['fname'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'Website';

    $email_subject = 'Website Enquiry';
 
    $email_body = "Full Name: $name.\n". 
                    "Email: $visitor_email.\n". 
                    "Message: $message.\n";



    $to = "jordanbowes12@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location index.html");








?>