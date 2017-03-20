module.exports = {
  title: 'Typeahead',
  status: 'wip',
  variants: [{
    name: 'default',
    context: {
      id: 'country',
      name: 'country',
      label: 'Select your country',
      options: [
        {label: 'United Kindgom', value: 'united-kingdom'},
        {label: 'France', value: 'france'}
      ]
    }
  },
  {
    name: 'person',
    context: {
      id: 'person',
      name: 'person',
      label: 'Select a person',
      options: [
        {label: 'David Singleton', value: 1},
        {label: 'Gemma Leigh', value: 2},
        {label: 'Robin Whittleton', value: 3},
        {label: 'Theodor Vararu', value: 4}
      ]
    }
  }],
  arguments: ['id', 'name', 'label', 'hint', 'options', 'value']
}
