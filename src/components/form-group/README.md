## Form fields

* make field widths proportional to the input they take
* ensure that users can enter the information they need at smaller screen sizes
* snap form fields to 100% width at smaller screen sizes

{{ '@form-group'|preview(100) }}

### Labels

* all form fields should be given labels
* don’t hide labels, unless the surrounding context makes them unnecessary
* labels should be aligned above their fields
* label text should be short, direct and in sentence case
* avoid colons at the end of labels
* labels should be associated with form fields using the for attribute

### Optional and mandatory fields

* only ask for the information you absolutely need
* if you do ask for optional information, mark the labels of optional fields with ‘(optional)’
don’t mark mandatory fields with asterisks

### Hint text

* don’t use placeholder text in form fields, as this will disappear once content is entered into the form field
* use hint text for supporting contextual help, this will always be shown
* hint text should sit above a form field
* ensure hint text can be read correctly by screen readers

{{ '@form-group--has-hint'|preview(120) }}

## Arguments

| Name                   | Purpose | Type | Default | Required |
|------------------------|---------|------|---------|----------|
| id                     |         |      |         |          |
| name                   |         |      |         |          |
| legend                 |         |      |         |          |
| hint                   |         |      |         |          |
| error                  |         |      |         |          |
| day                    |         |      |         |          |
| month                  |         |      |         |          |
| year                   |         |      |         |          |
