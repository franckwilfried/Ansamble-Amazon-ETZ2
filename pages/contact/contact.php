<?php
    if (
        isset($_POST) && !empty($_POST['first-name']) && !empty($_POST['last-name']) && !empty( $_POST(['genre']) ) && !empty( $_POST(['adresse']) ) && !empty( $_POST(['city']) ) && !empty( $_POST(['sender']) ) && !empty( $_POST(['phone']) ) && !empty( $_POST(['stat']) ) && !empty( $_POST(['object']) && !empty($_POST['message']) ) 
        ){
            extract($_POST);
            $destinataire = 'wilfiedfranck@gmail.com'
            $expediteur = $last-name.'<'.$sender.'>';
            $mail = mail($destinataire , $object , $message , $expediteur.'Du site Amazon ETZ2'); 

            if($mail)echo'Email envoyé avec succès!!';else echo'Echec envoie'
        }else echo"Formulaire non soumis des champs sont vide ou invalides";
    mail('franckkodo@hotmail.com', 'Envoi depuis la page Contact', 'text', 'From: wilfiedfranck@gmail.com');

?>