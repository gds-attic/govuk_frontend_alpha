Button text should be short and describe the action the button performs.

{{ '@button'|preview(60) }}

## Alignment

Align the primary action button to the left edge of your form, in the user’s line of sight.

## Disabled state

- don’t disable buttons, unless there’s a good reason to
- if you have to disable buttons, make sure they look like you can’t click them (use 50% opacity)
- an example of a useful disabled option is a calendar with greyed out days where no bookings are available
- provide another way for the user to continue, add an error message or text to explain why the button is disabled

## Button arguments

| Name    | Purpose                                              | Type    | Default                                | Required |
|---------|------------------------------------------------------|---------|----------------------------------------|----------|
| text    | The content of the button                            | text    | N/A                                    | Yes      |
| isStart | Render the 'Start' button variant                    | Boolean | False                                  | Yes      |
| type    | The type of the button (submit, reset, button, menu) | text    | submit (if attribute is not specified) | No       |
