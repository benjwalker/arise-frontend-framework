<?php

class Helper
{
    public function __construct()
    {

    }

}

function pp($value = "", $return = false)
{
    $page = "";

    if (is_array($value)) {
        $page .= "<b>" . ucfirst(gettype($value)) . " &times; " . count($value) . "</b>\n";
    }

    $page .= "<pre>" .
        print_r($value, true) .
        "</pre>\n";

    if ($return) {
        return $page;
    } else {
        echo $page;
    }

}

function dd($value, $return = false)
{
    pp($value, $return);
    die();
}

function print_ul($array = [], $return = false)
{
    $array = (array)$array;

    $page = "<ul>";

    foreach ($array as $row) {
        $page .= "<li>$row</li>";
    }

    $page .= "</ul>";

    if ($return) {
        return $page;
    } else {
        echo $page;
    }
}
