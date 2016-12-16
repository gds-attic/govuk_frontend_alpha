<link media="all" rel="stylesheet" href="{{ '/stylesheets/govuk-frontend.css' | path }}">

# Buttons

## Use buttons to move though a transaction, aim to use only one button per page.

### Button text

Button text should be short and describe the action the button performs.

{% render '@button' %}

### Button alignment

Align the primary action button to the left edge of your form, in the user’s line of sight.

Disabled buttons

- don’t disable buttons, unless there’s a good reason to
- if you have to disable buttons, make sure they look like you can’t click them (use 50% opacity)
- an example of a useful disabled option is a calendar with greyed out days where no bookings are available
- provide another way for the user to continue, add an error message or text to explain why the button is disabled

<input class="button" type="submit" value="Save and continue" disabled="disabled">
