<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
'host' => '51.159.25.115',
'driver' => 'pdo_mysql',
'user' => 'martin',
'password' => '[V769\Xs#E8',
'dbname' => 'projectweb',
'port' => '10406'
);
$entityManager = EntityManager::create($conn, $config);