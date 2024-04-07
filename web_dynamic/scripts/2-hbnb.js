$(document).ready(function () {
  const apiStatus = $('#api_status');
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      apiStatus.addClass('available');
    } else {
      apiStatus.removeClass('available');
    }
  }).fail(function () {
    apiStatus.removeClass('available');
  });
});
