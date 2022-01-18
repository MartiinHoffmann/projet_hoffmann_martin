<?php
require '../bootstrap.php';

function CreateClient($nom, $prenom, $ville, $codePostal, $email, $tel, $civilite, $login, $password)
{
    global $entityManager;
    $client = new Client;

    $client->setNom($nom);
    $client->setPrenom($prenom);
    $client->setVille($ville);
    $client->setCodepostal($codePostal);
    $client->setEmail($email);
    $client->setTelephone($tel);
    $client->setCivilite($civilite);
    $client->setLogin($login);
    $client->setPassword($password);

    $entityManager->persist($client);
    $entityManager->flush();
}

function AuthentifierClient($login, $password)
{
    global $entityManager;
    $cr = $entityManager->getRepository('Client');
    $client = $cr->findOneByLogin($login);
    if(is_null($client))
    {
        return array("status" => "erreur", "message" => "Le compte n'est pas trouvé");
    }

    if($password != $client->getPassword())
    {
        return array("status" => "erreur", "message" => "Mauvais mot de passe");
    }

    return array("status" => "ok", "message" => $client);
}