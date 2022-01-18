<?php
require '../bootstrap.php';

function createProduit($nomProduit, $prixProduit)
{
    global $entityManager;
    $produit = new Produit;

    $produit->setNomproduit($nomProduit);
    $produit->setPrixproduit($prixProduit);

    $entityManager->persist($produit);
    $entityManager->flush();
}

function GetProduit($nomProduit)
{
    global $entityManager;
    $cr = $entityManager->getRepository('Produit');
    $produit = $cr->findOneByLogin($nomProduit);
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