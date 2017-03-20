(function (Modules) {
  'use strict'

  // Imported as a dependency from `typeahead.js` through `components.manifest.js`
  var AccessibleTypeahead = window.AccessibleTypeahead

  Modules.Typeahead = function () {
    this.start = function ($element) {
      var $label = $element.find('label')
      var $select = $element.find('select')
      var typeaheadInputId = $select.attr('id') + '-typeahead-input'

      // Construct a mounting point for the
      var $typeaheadContainer = $('<div class="gv-c-typeahead__js"></div>')
      $select.after($typeaheadContainer)

      // Extract typeahead data from select
      var results = $select.find('option').map(function () { return this.text }).toArray()

      function suggest (query, syncResults) {
        var matches = []
        if (query) {
          matches = results.filter(function (result) {
            return result.toLowerCase().indexOf(query.toLowerCase()) !== -1
          })
        }
        syncResults(matches)
      }

      AccessibleTypeahead({
        element: $typeaheadContainer[0],
        id: typeaheadInputId,
        source: suggest
      })

      $select.hide()
      $label.attr('for', typeaheadInputId)
    }
  }
})(window.GOVUK.Modules)
