<?php
require_once(realpath($_SERVER["DOCUMENT_ROOT"]) . "/php/settings.php");

$t = new Template;
echo $t->route($_SERVER['REQUEST_URI']);