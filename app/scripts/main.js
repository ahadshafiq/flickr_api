/*jshint -W108 */
/*jshint -W109 */
'use strict';
$(document).ready(function(){
	$('button').click(function(){
		$('button').removeClass('selected');
		$(this).addClass('selected');
		var flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
		var animal = $(this).text();
		var flickerOptions = {
			tags: animal,
			format: 'json'
		};// end flickerOptions
		function displayPhotos(data){
			var photoHTML = '<ul>';
			$.each(data.items, function(i, photo){
				photoHTML += '<li class="grid-25 tablet-grid-50">';
				photoHTML += '<a href="' + photo.link + '" class="image">';
				photoHTML += '<img src="' + photo.media.m + '"></a></li>';
			});//end $.each
			photoHTML += '</ul>';
			$('#photos').html(photoHTML); // add this to our HTML
		}
		$.getJSON(flickerAPI, flickerOptions, displayPhotos);
	}); //end button
}); //end ready