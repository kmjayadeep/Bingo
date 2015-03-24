function init(){
	if(localStorage){
		if(localStorage.loggedIn==1){
			$('#accountText').html(" Logout");
			$('#playtext').html("Play");
		}
		else{
			$('#accountText').html(" Login");
			$('#playtext').html("Login to play Bingo!");
		}	

	}else{
		console.log('not supported');
	}

	initEvents();

}

function initEvents(){
	$('[data-link]').click(function(){
		window.location = $(this).data('link');
	});
}