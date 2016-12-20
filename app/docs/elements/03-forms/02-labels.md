---
title: Labels
---

* all form fields should be given labels
* don’t hide labels, unless the surrounding context makes them unnecessary
* labels should be aligned above their fields
* label text should be short, direct and in sentence case
* avoid colons at the end of labels
* labels should be associated with form fields using the for attribute

```html
<label class="form-label" for="full-name-f1">Full name</label>
<input class="form-control" id="full-name-f1" type="text">
```

Hint text

* don’t use placeholder text in form fields, as this will disappear once content is entered into the form field
* use hint text for supporting contextual help, this will always be shown
* hint text should sit above a form field
* ensure hint text can be read correctly by screen readers

```html
<label class="form-label" for="ni-number">
  National Insurance number
  <span class="form-hint">
    It's on your National Insurance card, benefit letter, payslip or P60.
    <br>
    For example, ‘QQ 12 34 56 C’.
  </span>
</label>
<input class="form-control" id="ni-number" type="text">
```
