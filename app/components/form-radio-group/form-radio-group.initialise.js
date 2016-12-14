$(document).ready(function () {
  // govuk_template sets this, we're not loading the template as a wrapper for components so set it here
  $('body').addClass('js-enabled')
  // Use GOV.UK selection-buttons.js to set selected
  // and focused states for block labels
  var $blockLabels = $(".gv-c-form-custom input[type='radio'], .gv-c-form-custom input[type='checkbox']")
  new GOVUK.SelectionButtons($blockLabels) // eslint-disable-line
})
