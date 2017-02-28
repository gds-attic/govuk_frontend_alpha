---
title: Typography
context:
  lede: For GOV.UK domains, always use the GDS Transport Website font in Light and Bold.
---

<div class="lede">
  {{ lede }}
</div>

## Prose

Styles for headings, paragraph text and lists can be applied using a `prose` scope.

```html
<div class="gv-s-prose">
</div>
```
A scope requires a parent class to style its children, the `prose` scope uses the parent class `.gv-s-prose`.


## Prose example

<div class="example-preview example--typography">
  {{ '@prose'|preview(600) }}
</div>

```html
<div class="gv-s-prose">

  <h1>A 48px heading</h1>

  <p>
  This is an intro paragraph at 24px. Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.
  </p>

  <h2>A 36px heading</h2>

  <p>
  This is a body copy paragraph at 19px. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.
  </p>

  <h3>A 24px heading</h3>

  <p>
  Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.
  </p>

  <h4>A 19px heading</h4>

  <p>
  Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.
  </p>

  <ul>
    <li>here is a bulleted list</li>
    <li>vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</li>
    <li>vestibulum id ligula porta felis euismod semper</li>
    <li>integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
  </ul>

  <ol>
    <li>here is a numbered list</li>
    <li>vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</li>
    <li>vestibulum id ligula porta felis euismod semper</li>
    <li>integer posuere erat a ante venenatis dapibus posuere velit aliquet</li>
  </ol>

  <p>
    Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo.
  </p>

</div>
```
