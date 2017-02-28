---
title: Links
---

* links within body copy should be blue and underlined
* links without surrounding text should not have a full stop at the end
* link colours can be found in the colour palette

<div class="example example--typography">
  <div class="gv-s-prose">
    <p>
      <a href="#">A 19px link without surrounding text</a>
    </p>

    <p>
      <a href="#">A 19px body copy link</a>. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
    </p>
  </div>
</div>

```html
<div class="gv-s-prose">
  <p>
    <a href="#">A 19px link without surrounding text</a>
  </p>

  <p>
    <a href="#">A 19px body copy link</a>. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
  </p>
</div>
```

## Back links

<div class="example-preview">
  {{ '@link-back'|preview(60) }}
</div>

The back link is provided as a [component](/components/browser/link-back--default/).