<?php
ini_set('display_errors', '1');
error_reporting(E_ALL ^ E_NOTICE ^ E_STRICT);

//Get account root directory
$root = realpath($_SERVER["DOCUMENT_ROOT"]);
define('ROOT_PATH', $root);

//Find and include class files
$includes_dir = "$root/php/classes/";
$includes = scandir($includes_dir);
unset($includes[0]);
unset($includes[1]);
array_unshift($includes, "../../vendor/autoload.php");

foreach ($includes as $file) {
    require_once("$includes_dir$file");
}