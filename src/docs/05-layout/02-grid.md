---
title: Grid layout
context:
  lede: A mobile-first, float-based layout system.
---

<div class="lede">
  {{ lede}}
</div>


## Grid unit proportions

* introduce columns as the content requires it – base column ratios on halves, thirds or quarters of the page width
* for screen breakpoints use media queries – find these in the _conditionals.scss file


## Grid unit proportions

### Full width

<div class="example example--grid">
  <div class="gv-o-grid-row">
    <div class="gv-o-grid-item gv-u-full">
      <p>Content</p>
    </div>
  </div>
</div>

```html
<div class="gv-o-grid-row">
  <div class="gv-o-grid-item gv-u-full">
    <p>Content</p>
  </div>
</div>
```


### Halves

<div class="example example--grid">
  <div class="gv-o-grid-row">
    <div class="gv-o-grid-item gv-u-one-half">
      <p>Content</p>
    </div>
    <div class="gv-o-grid-item gv-u-one-half">
      <p>Content</p>
    </div>
  </div>
</div>

```html
<div class="gv-o-grid-row">
  <div class="gv-o-grid-item gv-u-one-half">
    <p>Content</p>
  </div>
  <div class="gv-o-grid-item gv-u-one-half">
    <p>Content</p>
  </div>
</div>
```

### Thirds

<div class="example example--grid">
  <div class="gv-o-grid-row">
    <div class="gv-o-grid-item gv-u-one-third">
      <p>Content</p>
    </div>
    <div class="gv-o-grid-item gv-u-one-third">
      <p>Content</p>
    </div>
    <div class="gv-o-grid-item gv-u-one-third">
      <p>Content</p>
    </div>
  </div>
</div>

```html
<div class="gv-o-grid-row">
  <div class="gv-o-grid-item gv-u-one-third">
    <p>Content</p>
  </div>
  <div class="gv-o-grid-item gv-u-one-third">
    <p>Content</p>
  </div>
  <div class="gv-o-grid-item gv-u-one-third">
    <p>Content</p>
  </div>
</div>
```

### Two thirds / One third

<div class="example example--grid">
  <div class="gv-o-grid-row">
    <div class="gv-o-grid-item gv-u-two-thirds">
      <p>Content</p>
    </div>
    <div class="gv-o-grid-item gv-u-one-third">
      <p>Content</p>
    </div>
  </div>
</div>

```html
<div class="gv-o-grid-row">
  <div class="gv-o-grid-item gv-u-two-thirds">
    <p>Content</p>
  </div>
  <div class="gv-o-grid-item gv-u-one-third">
    <p>Content</p>
  </div>
</div>
```

### One third / Two thirds

<div class="example example--grid">
  <div class="gv-o-grid-row">
    <div class="gv-o-grid-item gv-u-one-third">
      <p>Content</p>
    </div>
    <div class="gv-o-grid-item gv-u-two-thirds">
      <p>Content</p>
    </div>
  </div>
</div>

```html
<div class="gv-o-grid-row">
  <div class="gv-o-grid-item gv-u-one-third">
    <p>Content</p>
  </div>
  <div class="gv-o-grid-item gv-u-two-thirds">
    <p>Content</p>
  </div>
</div>
```

### Quarters

<div class="example example--grid">
  <div class="gv-o-grid-row">
    <div class="gv-o-grid-item gv-u-one-quarter">
      <p>Content</p>
    </div>
    <div class="gv-o-grid-item gv-u-one-quarter">
      <p>Content</p>
    </div>
    <div class="gv-o-grid-item gv-u-one-quarter">
      <p>Content</p>
    </div>
    <div class="gv-o-grid-item gv-u-one-quarter">
      <p>Content</p>
    </div>
  </div>
</div>

```html
<div class="gv-o-grid-row">
  <div class="gv-o-grid-item gv-u-one-quarter">
    <p>Content</p>
  </div>
  <div class="gv-o-grid-item gv-u-one-quarter">
    <p>Content</p>
  </div>
  <div class="gv-o-grid-item gv-u-one-quarter">
    <p>Content</p>
  </div>
  <div class="gv-o-grid-item gv-u-one-quarter">
    <p>Content</p>
  </div>
</div>
```
