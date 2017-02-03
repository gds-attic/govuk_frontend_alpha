*Note: These instructions describe setting up the alpha version of govuk_frontend and can/will change*

## Add govuk_frontend_alpha to your application

```bash
npm install govuk_frontend_alpha
```

> ❗️ __Alpha Note:__ *`govuk_frontend_alpha` isn't available on the NPM registry. You'll need to install it manually (see below).

## Amend package.json

Add this line to your dependencies in `package.json`:

```bash
  "govuk_frontend_alpha": "https://github.com/alphagov/govuk_frontend_alpha/releases/download/0.0.1-alpha/govuk_frontend_alpha-0.0.1-npm.tgz"
```

## Install the govuk_frontend_alpha dependency

```bash
npm install
```

## Use the GOV.UK layout

Create a file `index.njk` in `views`, use this file to extend the GOV.UK template.

In `views/index.njk` add:

```nunjucks
{% raw %}
{% extends "govuk_template.njk" %}
{% endraw %}
```

You'll need to configure your application to find this template.

In server.js, add this line to your application's views:

```
path.join(__dirname, '/node_modules/govuk_frontend_alpha/templates/')
```

Start your app using `npm start`

Go to http://localhost:3000, you should see the familiar GOV.UK brand, with the text "Hello world!".

## Customise the template

GOV.UK Frontend has [template blocks](/docs/template-blocks/) that you can use to override bits of the layout.

### Add content

```nunjucks
{% raw %}
{% block content %}
  Hello world!
{% endblock %}
{% endraw %}
```

### Change the page title

To set the `page_title` block, in `index.njk` add:

```nunjucks
{% raw %}
{% block page_title %}
  My page title
{% endblock %}
{% endraw %}
```

## Configure paths for static assets

You'll need to configure the paths to static assets, to server the the govuk_frontend_alpha assets from the node_modules directory.

In server.js add:

```
app.use('/public', express.static(path.join(__dirname, '/node_modules/govuk_frontend_alpha/assets/')))
app.use('/images/template', express.static(path.join(__dirname, '/node_modules/govuk_frontend_alpha/assets/images/template/')))
```

## Importing the govuk-frontend SCSS files

First, you'll need to add a stylesheet block:

To set a `stylesheet` block, in `layout.njk` add:


```nunjucks
{% raw %}
{% block stylesheet %}
  <link href="{{ asset_path }}stylesheets/styles.css" media="screen" rel="stylesheet" />
{% endblock %}
{% endraw %}
```

Replace `styles.css` in the example above with the name of your application stylesheet, for example `application.css`.

In `application.scss`, import the govuk_frontend_alpha stylesheets:

```scss
@import '../../node_modules/govuk_frontend_alpha/assets/scss/govuk-frontend';
```

To test this has worked, change the colour of the body element.

```
body {
  background: pink;
}
```

Restart the app to see your changes, you should see the GOV.UK brand, Hello World! and a pink background.


_You can delete the pink background._

### Compiling your own scss files

If you'd prefer to configure includePaths to include the path to the govuk_frontend_alpha package, instead use:

```scss
@import 'govuk-frontend';
```

If you haven't defined includePaths, you may well see an error:

```
Parent style sheet: /assets/scss/application.scss
        on line 4 of assets/scss/application.scss
>> @import 'govuk-frontend';
```

Fix this by configuring includePaths for gulp-sass, in your gulpfile.js:

```
.pipe(sass({
  includePaths: ['node_modules/govuk_frontend_alpha/assets/scss/']
})
```

## Before using a component

In your index template, add this line underneath `{% raw %}{% extends "govuk_template.njk" %}{% endraw %}` to import all components:

```nunjucks
{% raw %}
{% import "components.njk" as govuk %}
{% endraw %}
```

Your index template, `views/index.njk` should now look like this:

```nunjucks
{% raw %}
{% extends "govuk_template.njk" %}
{% import "components.njk" as govuk %}
{% endraw %}
```

You'll need to configure your application to find the components.

In server.js, add this line to your application's views:

```
path.join(__dirname, '/node_modules/govuk_frontend_alpha/components/')
```

## Use a component in your application

[You can find all the components here](http://govuk-frontend-alpha.herokuapp.com/).

Copy the Nunjucks macro to implement a component.

Here is an example of a macro for a button component:

```nunjucks
{% raw %}
{{ govuk.button(text="Change this button text") }}
{% endraw %}
```

Copy and paste this macro into your index template and change the button text.

```nunjucks
{% raw %}
{{ govuk.button(text="Save and continue") }}
{% endraw %}
```

Go to `http://localhost:3000`

This will render the Button component with the `text` of 'Save and continue'
