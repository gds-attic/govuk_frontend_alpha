module.exports = {
  title: 'Form radio group',
  status: 'wip',
  context: {
    setup: {
      initScript: 'var $blockLabels = $(".gv-c-form-custom input[type=\'radio\'], .gv-c-form-custom input[type=\'checkbox\']"); new GOVUK.SelectionButtons($blockLabels);',
      openWrapper: '<form>',
      closeWrapper: '</form>'
    },
    id: 'contact',
    name: 'contact-group',
    legend: 'How do you want to be contacted?',
    hint: '',
    error: '',
    radioGroup: [{
      id: 'example-contact-by-email',
      value: 'contact-by-email',
      label: 'Email'
    }, {
      id: 'example-contact-by-phone',
      value: 'contact-by-phone',
      label: 'Phone'
    }, {
      id: 'example-contact-by-text',
      value: 'contact-by-text',
      label: 'Text'
    }]
  },
  variants: [{
    name: 'has hint',
    context: {
      hint: 'Hint text in here'
    }
  },
  {
    name: 'has error',
    context: {
      error: 'Error text in here'
    }
  },
  {
    name: 'has hint and error',
    context: {
      hint: 'Hint text in here',
      error: 'Error text in here'
    }
  }],
  arguments: ['id', 'name', 'legend', 'hint', 'error', 'radioGroup']
}
