if (document.addEventListener) {
	document.addEventListener('click', function(e){
		$('#contextmenu').fadeOut(0)
	})
	document.addEventListener('keydown', function(e){
		if (e.keyCode == 27){
			$('#contextmenu').fadeOut(0)
		}
	})
  document.addEventListener('contextmenu', function(e) {
	try {
		if ( e.target.parentElement.dataset.context){ // Show custom menu. Click element whith data-context=true attribute
			$('#contextmenu').fadeOut(0)
				let screen = $(window).width()
				let left = e.clientX
				let top = e.clientY
				if (left >= screen - $('#contextmenu').width() ) { left = left - $('#contextmenu').width() }
				$('#contextmenu').css({
					'left':left+'px', 
					'top':top+'px'
					})
				$('#contextmenu').fadeIn(200)
				e.preventDefault();
		} else { /* handler for default menu*/ return }
	} catch { return }
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
	window.event.returnValue = false;
  });
}
