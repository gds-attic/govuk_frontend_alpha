---
title: Grid
---

## Grid unit proportions

* introduce columns as the content requires it – base column ratios on halves, thirds or quarters of the page width
* for screen breakpoints use media queries – find these in the GOV.UK frontend toolkit _conditionals.scss file

## Grid

```
TODO: [Insert grid layout example from here](http://govuk-elements.herokuapp.com/layout/example-grid-layout/)
```

```html
<div class="grid-row">
  <div class="column-two-thirds">
    <h2 class="bold-medium">Two thirds</h2>
    <div class="text">
      <p>
        This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
      </p>
      <p>
        This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
      </p>
    </div>
  </div>
  <div class="column-one-third">
    <h2 class="bold-medium">One third</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
</div>
<div class="grid-row">
  <div class="column-one-third">
    <h2 class="bold-medium">One third</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
  <div class="column-one-third">
    <h2 class="bold-medium">One third</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
  <div class="column-one-third">
    <h2 class="bold-medium">One third</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
</div>
<div class="grid-row">
  <div class="column-one-half">
    <h2 class="bold-medium">One half</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
  <div class="column-one-half">
    <h2 class="bold-medium">One half</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
</div>
<div class="grid-row">
  <div class="column-one-half">
    <h2 class="bold-medium">One half</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
  <div class="column-one-quarter">
    <h2 class="bold-medium">One quarter</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
  <div class="column-one-quarter">
    <h2 class="bold-medium">One quarter</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
</div>
<div class="grid-row">
  <div class="column-one-quarter">
    <h2 class="bold-medium">One quarter</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
  <div class="column-one-quarter">
    <h2 class="bold-medium">One quarter</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
  <div class="column-one-quarter">
    <h2 class="bold-medium">One quarter</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
  <div class="column-one-quarter">
    <h2 class="bold-medium">One quarter</h2>
    <p>
      This guide shows how to make your service look consistent with the rest of GOV.UK. It includes example code and guidance for layout, typography, colour, images, icons, forms, buttons and data.
    </p>
  </div>
</div>
```
## Grid unit proportions

### Full width

```
TODO: [Insert example from here](http://govuk-elements.herokuapp.com/layout/)
```

```html
<div class="grid-row">
  <div class="column-full">
    <p>Content</p>
  </div>
</div>
```

### Halves

```
TODO: [Insert example from here](http://govuk-elements.herokuapp.com/layout/)
```

```html
<div class="grid-row">
  <div class="column-one-half">
    <p>Content</p>
  </div>
  <div class="column-one-half">
    <p>Content</p>
  </div>
</div>
```

### Thirds

```
TODO: [Insert example from here](http://govuk-elements.herokuapp.com/layout/)
```

```html 
<div class="grid-row">
  <div class="column-one-third">
    <p>Content</p>
  </div>
  <div class="column-one-third">
    <p>Content</p>
  </div>
  <div class="column-one-third">
    <p>Content</p>
  </div>
</div>
```

### Two thirds / One third

```
TODO: [Insert example from here](http://govuk-elements.herokuapp.com/layout/)
```

```html
<div class="grid-row">
  <div class="column-two-thirds">
    <p>Content</p>
  </div>
  <div class="column-one-third">
    <p>Content</p>
  </div>
</div>
```

### One third / Two thirds

```
TODO: [Insert example from here](http://govuk-elements.herokuapp.com/layout/)
```

```html
<div class="grid-row">
  <div class="column-one-third">
    <p>Content</p>
  </div>
  <div class="column-two-thirds">
    <p>Content</p>
  </div>
</div>
```

### Quarters

```
TODO: [Insert example from here](http://govuk-elements.herokuapp.com/layout/)
```

```html 
<div class="grid-row">
  <div class="column-one-quarter">
    <p>Content</p>
  </div>
  <div class="column-one-quarter">
    <p>Content</p>
  </div>
  <div class="column-one-quarter">
    <p>Content</p>
  </div>
  <div class="column-one-quarter">
    <p>Content</p>
  </div>
</div>
```
