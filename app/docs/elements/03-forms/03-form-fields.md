---
title: Form fields
---

Make field widths proportional to the input they take.

Ensure that users can enter the information they need at smaller screen sizes.

Snap form fields to 100% width at smaller screen sizes.

## Form focus states

#FFBF47
$focus-colour

All elements use the yellow focus style as a highlight, as either a fill or 3px outline.

Click on the label “Full name” or inside the form field to show the focus state.

## Spacing between form elements

```html
<!-- Use .form-group to create spacing when wrapping label and input pairs -->
<div class="form-group">
  <label class="form-label" for="first-name-2">First name</label>
  <input class="form-control" id="first-name-2" name="first-name-2" type="text">
</div>
<div class="form-group">
  <label class="form-label" for="last-name-2">Last name</label>
  <input class="form-control" id="last-name-2" name="last-name-2" type="text">
</div>
```

