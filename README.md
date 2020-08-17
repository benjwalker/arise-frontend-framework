# Arise Front-end Framework

This framework is intended to assist any front-end developer creating code for Arise's projects.

##Requirements
To run this code you should have handy...

- PHP / Apache
- Composer
- NPM

## First run
- Run `composer install` in the root directory
- Navigate to the `/assets` directory and then run `npm install`

## Gulp
- Run `gulp` within the `/assets` directory to compile all Javascript and CSS
- You may also run `gulp watch` to watch for changes to any files
- Optionally you can also compile Javascript and CSS separately using `gulp compile-js` or `gulp compile-scss`

## Smarty Templates & URLs
- Templates are automatically wrapped in a base template, by default this is `/templates/base.tpl`
- If you point your browser to the root directory, e.g. `http://frontend.local/` you will see all section templates wrapped in the base template
- You can also wrap templates in different base templates, for example I've set up `/templates/blog.tpl`. You can then load this by adding the template name to the end of the URL, e.g. `http://frontend.local/blog` or `http://frontend.local/base` - this will show you all templates wrapped in the chosen base template.
- If you want to show only a particular section template, you can simply add the template name onto the end of that URL, e.g. to show `/templates/sections/template.tpl` go to `http://frontend.local/base/template`
