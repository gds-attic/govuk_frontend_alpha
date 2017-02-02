*Note: These instructions describe setting up the alpha version of govuk_frontend and can/will change*

## Add govuk_frontend_alpha to your application

The package is not available on the NPM registry.

You will need to manually include it as a dependency.

## Amend package.json

Add this line to your dependencies in `package.json`:

```bash
  "govuk_frontend_alpha": "https://github.com/alphagov/govuk_frontend_alpha/releases/download/0.0.1-alpha/govuk_frontend_alpha-0.0.1-npm.tgz"
```

## Install the govuk_frontend_alpha dependency

If you're using [Yarn](https://yarnpkg.com/):

```bash
yarn
```

If you're using [NPM](https://www.npmjs.com/):

```bash
npm install
```

## Use the GOV.UK layout

The govuk_frontend_alpha package provides a GOV.UK layout, `govuk_template.njk`.

Create a file `layout.njk` in `views`, use this file to extend the GOV.UK template.

Insert into `layout.njk`:

```nunjucks
{% raw %}
{% extends "govuk_template.njk" %}
{% endraw %}
```

If you are using the [starter application](https://github.com/alphagov/govuk-frontend-alpha-starter-kit-node), the `layout.njk` file has already been created for you.

Replace the text **'Layout template'** at the top of the `layout.njk` file with:

```nunjucks
{% raw %}
{% extends "govuk_template.njk" %}
{% endraw %}
```

Start your app using `node app.js`

Go to http://localhost:3000, you should see the familiar GOV.UK brand, with the text "Hello world!".

### Customise the layout

GOV.UK Frontend has [template blocks](https://mozilla.github.io/nunjucks/templating.html#block) that you can use to override bits of the layout.

[The starter app provides a template block 'content'](https://github.com/alphagov/govuk-frontend-alpha-starter-kit-node/blob/master/views/index.njk#L3), in `index.njk` as an example.

```nunjucks
{% raw %}
{% block content %}
  Hello world!
{% endblock %}
{% endraw %}
```

You'll need to set the `page_title` and `stylesheet` blocks (illustrated below), but there are [many other blocks](template-blocks.md) you can use if you need to.

To set the `page_title` block, in `index.njk` add:

```nunjucks
{% raw %}
{% block page_title %}
  My page title
{% endblock %}
{% endraw %}
```

To set the `stylesheet` block, in `layout.njk` add:


```nunjucks
{% block stylesheet %}
  <link href="{{ asset_path }}stylesheets/styles.css" media="screen" rel="stylesheet" />
{% endblock %}
```

Replace `styles.css` with the name of your application stylesheet.

## Importing the govuk-frontend SCSS files

In your stylesheet `styles.scss`, add this to the start:

```scss
@import '../../node_modules/govuk-frontend/';
```

Or configure includePaths to include the path to the govuk_frontend_alpha package, within node_modules and instead use:

```scss
@import 'govuk-frontend';
```

To configure includePaths for gulp-sass:

```
.pipe(sass({
  includePaths: ['node_modules/govuk_frontend_alpha/assets/scss/']
})
```

You'll need to ensure your stylesheet is included in the `stylesheet` block - see above.

## Calling components

In your index template, add this line underneath `{% raw %}{% extends "layout.njk" %}{% endraw %}` to import all components:

```nunjucks
{% raw %}
{% import "components.njk" as govuk %}
{% endraw %}
```

Your index template, `views/index.njk` should now look like this:

```nunjucks
{% raw %}
{% extends "layout.njk" %}
{% import "components.njk" as govuk %}
{% endraw %}
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

Go to http://localhost:3000

This will render the Button component with the `text` of 'Save and continue'