$(document).on('click', '#go-search', function(){
	findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
});

$(document).on('keydown', '#search-term', function(e) {
	if (e.keyCode == 13) 
	{
		$('#go-search').click();
	}
});

$(document).on('mouseover', '#search-results img', function() {
	var url = $(this).data('url');
	$("#workspace img").remove();
	var img = $("<img>").attr('src', url);
	$("#workspace").append(img);
});


$(document).on('input', '#text', function() {
	$("#caption").text($(this).val());

});

$(document).on('change', '#left', function() {
	var leftInput = parseInt($(this).val(), 10);
	var width = parseInt($("#caption").css("width"), 10);
	maxLeftInt = (600 - width);
	maxLeft = maxLeftInt.toString();
	if ( leftInput + width > 600 )
	{	
		$("#caption").css("left", maxLeft + 'px');
		$("#left").val(maxLeft);
		
	}
	else
	{
		$("#caption").css("left", $(this).val() + 'px' );
	}
});

$(document).on('change', '#top', function() {
	$("#caption").css("top", $(this).val() + 'px');
});

$(document).on('change', '#width', function() {
	$("#caption").css("width", $(this).val() + 'px');
});

$(document).on('change', '#size', function() {
	$("#caption").css("font-size", $(this).val() + 'px');
});

$(document).on('change', '#colour', function() {
	$("#caption").css("color", $(this).val());
});

$(document).on('change', '#align', function() {
	$("#caption").css("text-align", $(this).val());
});

$(document).on('click', "#save", function(){
	var image_url = $('#workspace img').attr("src")
	$.post('/?image_url=' + image_url, function(){
		$('#workspace img').attr("src", '/images/my_file.jpg');
	})


})

$(document).on('click', '#make-image', function() {
	useCORS: true,
	// allowTaint: true,
	html2canvas(document.getElementById('workspace'), {
	  onrendered: function(canvas) {
	    document.body.appendChild(canvas);
	  }
	});
});
