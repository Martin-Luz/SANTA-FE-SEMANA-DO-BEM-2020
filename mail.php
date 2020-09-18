<?php
require "phpmailer/PHPMailerAutoload.php";
$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host       = "smtp.googlemail.com";
$mail->SMTPAuth   = true;
$mail->Username   = "desenvolvimento@martinluz.com.br";
$mail->Password   = "client-martinluz";
$mail->SMTPSecure = "ssl";
$mail->Port       = 465;
$mail->CharSet    = "UTF-8";
$mail->AddAddress("rodrigo.bibiano@martinluz.com.br");
$mail->AddCC("contato@santafe.org.br");
$mail->AddCC("weversonfds@live.com");
$mail->FromName = "Santa Fé | Site";
$mail->isHTML(true);
$mail->Subject = "Santa Fé | Site";
$which_form    = "Santa Fé | Site";


if(isset($_POST['nome'])){
   //CORPO DO EMAIL
$mail_Body  = '<b>Santa Fé | Leads</b><br>';
$mail_Body  .= '<br><b>Nome: </b> ' .$_POST['nome'];
$mail_Body  .= '<br><b>E-mail: </b> ' .$_POST['email'];
$mail->Body = $mail_Body; 
sendErs($mail);
header("Location: https://www.ingresse.com/semana-do-bem#comprar");
}

//ENVIANDO O MEIAL
function sendErs($mail)
{
    try {
        $mail->send();
    }
    catch (Exception $e) {
        //MENSAGEM NAO ENVIADA
        return false;
    }
}
