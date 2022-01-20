<?php
require '../bootstrap.php';

function CreateProduit($nomProduit, $prixProduit)
{
    global $entityManager;
    $produit = new Produit;

    $produit->setNomproduit($nomProduit);
    $produit->setPrixproduit($prixProduit);

    $entityManager->persist($produit);
    $entityManager->flush();
}

function GetProduit($idProduit)
{
    global $entityManager;
    $cr = $entityManager->getRepository('Produit');
    $produit = $cr->findOneByIdproduit($idProduit);
    if(is_null($produit))
    {
        return array("status" => "erreur", "message" => "Le produit n'est pas trouvé");
    }

    return array("status" => "ok", "message" => $produit);
}

function GetAllProduit()
{
    global $entityManager;
    $cr = $entityManager->getRepository('Produit');
    $allProduit = $cr->findAll();
    if(is_null($allProduit))
    {
        return array("status" => "erreur", "message" => "Les produits ne sont pas trouvé");
    }

    return array("status" => "ok", "message" => $allProduit);
}