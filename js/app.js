$(document).ready(function() {
	$('#select').on('change', function(){

		var proxy = 'https://cors-anywhere.herokuapp.com/';
		var apiLinkDS = 'https://api.darksky.net/forecast/fdf732579d7ba902372d1852018d2145/-33.4488897,-70.6692655';

		$.ajax({
			url: proxy + apiLinkDS ,
			method: 'GET',			
		}).then(function(data) {
			console.log(data);
			
		});
	});
});



