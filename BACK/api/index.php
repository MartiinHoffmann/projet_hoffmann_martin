<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Tuupola\Middleware\JwtAuthentication as JwtAuthentication;
use \Firebase\JWT\JWT;
require '../vendor/autoload.php';
require '../Controllers/ClientController.php';
require '../Controllers/ProduitController.php';

const JWT_MDP = "voicilemdpduJWT";

$app = AppFactory::create();

$app->add(new JwtAuthentication([
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],
    "secret" => JWT_MDP,

    "path" => ["/api"],
    "ignore" => ["/api/hello", "/api/auth", "/api/login", "/api/inscription", "/api/detailClient", "/api/produit", "/api/listeProduit", "/api/createUser"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
        $response = $response->withStatus(401);
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
]));

$app->get('/api/hello/{login}', function (Request $request, Response $response, $args) {
    $response->getBody()->write($args['login']);
    return $response;
    });

$app->get('/api/auth/{prenom}', function (Request $request, Response $response, $args) {
    $token_jwt = Generer_Token_JWT(0, "email@gmail.com", $args["prenom"]);
    return $response->withHeader("Authorization", "Bearer { $token_jwt }");
});

//GetAllProduit, récupération d'un produit avec son id
$app->get('/api/listeProduit', function (Request $request, Response $response, $args) 
{
    $response = ajoutHeadersCors($response);
    $produitArray = GetAllProduit();

    $listProduit = array();
    foreach ($produitArray["message"] as $produit) {
        $listProduit[] = array(
            "idProduit" => $produit->getIdproduit(),
            "nomProduit" => $produit->getNomproduit(),
            "prixProduit" => $produit->getPrixproduit()
        );
    }

    $response = $response->withStatus(200);
    $response = $response->withHeader("Content-Type", "application/json");
    $response->getBody()->write(json_encode($listProduit));

    return $response;

});

//GetProduit, récupération d'un produit avec son id
$app->get('/api/produit/{idProduit}', function (Request $request, Response $response, $args) 
{
    $response = ajoutHeadersCors($response);
    $produitArray = GetProduit(array("idProduit" => $args['idProduit']));

    $produit = $produitArray["message"];
    $detailProduit = array(
        "nomProduit" => $produit->getNomproduit(),
        "prixProduit" => $produit->getPrixproduit()
    );

    $response = $response->withStatus(200);
    $response = $response->withHeader("Content-Type", "application/json");
    $response->getBody()->write(json_encode($detailProduit));

    return $response;

});

//GetClient, récupération d'un client avec son id
$app->get('/api/detailClient/{idClient}', function (Request $request, Response $response, $args) 
{
    $response = ajoutHeadersCors($response);
    $clientArray = GetClient(array("idClient" => $args['idClient']));

    $client = $clientArray["message"];
    $detailClient = array(
        "nom" => $client->getNom(),
        "prenom" => $client->getPrenom(),
        "ville" => $client->getVille(),
        "codePostal" => $client->getCodepostal(),
        "tel" => $client->getTelephone(),
        "email" => $client->getEmail(),
        "civilite" => $client->getCivilite()
    );

    $response = $response->withStatus(200);
    $response = $response->withHeader("Content-Type", "application/json");
    $response->getBody()->write(json_encode($detailClient));

    return $response;

});

//Création d'un client
$app->post('/api/inscription', function (Request $request, Response $response, $args)
{
    $body = $request->getParsedBody();
    $login = $body['login'];
    $password = $body['password'];
    $nom = $body['nom'];
    $prenom = $body['prenom'];
    $ville = $body['ville'];
    $codePostal = $body['codePostal'];
    $email = $body['email'];
    $tel = $body['tel'];
    $civilite = $body['civilite'];

    if(is_null($login) || $login == "" || is_null($password) || $password == "" || is_null($nom) || $nom == "" || is_null($prenom) || $prenom == "" || is_null($ville) || $ville == "" || is_null($codePostal) || $codePostal == "" || is_null($email) || $email == "" || is_null($tel) || $tel == "" || is_null($civilite) || $civilite == "")
    {
        $response = $response->withStatus(400);
        $response = $response->withHeader("Content-Type", "application/json");
        $response->getBody()->write(json_encode(array("message" => "Il y a des données manquantes")));
        return $response;
    }

    $response = ajoutHeadersCors($response);

    CreateClient($nom, $prenom, $ville, $codePostal, $email, $tel, $civilite, $login, $password);

    return $response;
});

//Check si l'authentification est juste
$app->post('/api/login', function (Request $request, Response $response, $args) {
    $body = $request->getParsedBody();
    $login = $body['login'];
    $password = $body['password'];

    if(is_null($login) || $login == "" || is_null($password) || $password == "")
    {
        $response = $response->withStatus(400);
        $response = $response->withHeader("Content-Type", "application/json");
        $response->getBody()->write(json_encode(array("message" => "Login ou mot de passe manquant")));
        return $response;
    }

    $resultatClient = AuthentifierClient($login, $password);

    if($resultatClient['status'] == "erreur")
    {
        $response = $response->withStatus(401);
        $response = $response->withHeader("Content-Type", "application/json");
        $response->getBody()->write(json_encode(array("message" => $resultatClient["message"])));
        return $response;
    }

    $client = $resultatClient["message"];

    $response = ajoutHeadersCors($response);
    $token_jwt = Generer_Token_JWT($client->getIdclient());
    $response = $response->withHeader("Authorization", "Bearer { $token_jwt }");
    $response = $response->withHeader("Content-Type", "application/json");
    $response->getBody()->write(json_encode(array(
        "login" => $client->getLogin(),
        "prenom" => $client->getPrenom(),
        "nom" => $client->getNom(),
        "ville" => $client->getVille(),
        "codePostal" => $client->getCodepostal(),
        "telephone" => $client->getTelephone(),
        "email" => $client->getEmail(),
        "civilite" => $client->getCivilite()
    )));

    return $response;
});

function ajoutHeadersCors($response) {
    $response = $response->withHeader("Content-Type", "application/json")
        ->withHeader("Access-Control-Allow-Origin", "https://projet-hoffmann-martin.herokuapp.com")
        ->withHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
        ->withHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
        ->withHeader("Access-Control-Expose-Headers", "Authorization");
    
    return $response;
}

function Generer_Token_JWT(int $idClient)
{
    $issuedAt = time();
    $expirationTime = $issuedAt + 600;
    $payload = array(
        'sub' => $idClient,
        'iat' => $issuedAt,
        'exp' => $expirationTime
    );
    $token_jwt = JWT::encode($payload, JWT_MDP, "HS256");
    return $token_jwt;
}

// Run app
$app->run();

?>