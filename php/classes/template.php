<?php

class Template
{
    public function __construct()
    {

    }

    public function route($request = [])
    {
        $sm = new Smarty;

        $request = trim($request, "\/");
        $request = explode("/", $request);

        $extend = $request[0];
        $template = $request[1];

        if (empty($extend)) {
            $extend = "base";
        }

        $body = "";

        if (empty($template) || $template == "all") {
            $templates_dir = ROOT_PATH . "/templates/sections/";
            $templates = scandir($templates_dir);

            unset($templates[0]);
            unset($templates[1]);

            foreach ($templates as $template_filename) {
                $body .= $sm->fetch(ROOT_PATH . "/templates/sections/$template_filename");
            }
        } else {
            $body .= $sm->fetch(ROOT_PATH . "/templates/sections/$template.tpl");
        }

        $page = $sm->fetch(ROOT_PATH . "/templates/$extend.tpl", ['body' => $body]);

        return $page;
    }

}