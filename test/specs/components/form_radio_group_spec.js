const expectComponent = require('./helper').expectComponent

describe('Form radio group component', () => {
  it('should render', () => {
    expectComponent(
      'form-radio-group',
      {
        'id': 'contact',
        'name': 'contact-group',
        'legend': 'How do you want to be contacted?',
        'radioGroup': [
          {
            'id': 'example-contact-by-email',
            'value': 'contact-by-email',
            'label': 'Email'
          },
          {
            'id': 'example-contact-by-phone',
            'value': 'contact-by-phone',
            'label': 'Phone'
          },
          {
            'id': 'example-contact-by-text',
            'value': 'contact-by-text',
            'label': 'Text'
          }
        ]
      },
      `<div class="gv-c-form-group ">
        <fieldset>
          <legend>
            <span class="gv-c-form-group__label">How do you want to be contacted?</span>
          </legend>
          <label class="gv-c-form-custom selection-button-radio" for="example-contact-by-email">
            <input class="gv-c-form-custom__control" id="example-contact-by-email"
            type="radio" name="contact" value="contact-by-email">Email</label>
          <label class="gv-c-form-custom selection-button-radio" for="example-contact-by-phone">
            <input class="gv-c-form-custom__control" id="example-contact-by-phone"
            type="radio" name="contact" value="contact-by-phone">Phone</label>
          <label class="gv-c-form-custom selection-button-radio" for="example-contact-by-text">
            <input class="gv-c-form-custom__control" id="example-contact-by-text"
            type="radio" name="contact" value="contact-by-text">Text</label>
        </fieldset>
      </div>`
    )
  })
})
