$(function () {
  const amenities = {};

  $('.amenities input[type="checkbox"]').change(function () {
    if (this.checked) {
      amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }
    $('.amenities h4').text(Object.values(amenities).join(', '));
  });

  $('#api_status').addClass('available');

  function fetchPlaces (data = {}) {
    $.ajax({
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function (places) {
        $('section.places').empty();
      }
    });
  }

  fetchPlaces();

  $('button').click(function () {
    const data = {
      amenities: Object.keys(amenities)
    };
    fetchPlaces(data);
  });
});
