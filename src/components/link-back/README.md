On multi-page forms, don't break the browser back button, and use 'back' links where appropriate.

{{ '@link-back'|preview(60) }}

## Don't break the back button
The browser back button should return the user to the screen they were previously on, in the state that they last saw it. If they entered or changed any data on this screen then this should be retained.

## Unless...
An exception to the above is when the user has just performed an action that must only be done once, like make a payment or submit an application. In these cases the back button should still work but the user should be shown a sensible message rather than be allowed to perform that action again.

## Add back links if users need them
Some users mistrust the browser's back button when they're filling out forms, because of negative experiences in the past where their data has been lost. If you observe this behaviour in your service then adding an explicit 'Back' link can help.

## Back links should look and work as expected
Back links should be styled as links, not buttons. They're a form of navigation, not an action.
Back links should go to the user's actual previous page, not some pre-determined page. If this requires JavaScript then make sure the links aren't visible to non-JavaScript users.

## Position back links at the top of the page
This is consistent with the positioning of back buttons on browsers. It means users will immediately see that they can go back if they need to. It also means they'll be less likely to enter data on the current page, then hit 'back' and lose that data.

## Link back arguments

| Name        | Purpose                                           | Type | Default | Required               |
|-------------|---------------------------------------------------|------|---------|------------------------|
| link        | The value of the link href attribute              | text | N/A     | Yes                    |
| text        | The link text                                     | text | Back    | Yes                    |
