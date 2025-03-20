
$(document).ready(function () {
    $(".goTop").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 400);
    });
});

$('a[href^="#"]').click(function(){

var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(the_id).offset().top
    }, 'slow');

return false;});







jQuery(document).ready(function($) {
	
	
	
});









var _mainHeader = document.getElementsByClassName("main-header")[0];
var _container_1 = _mainHeader.getElementsByClassName("container-1")[0];
var _container_2 = _mainHeader.getElementsByClassName("container-2")[0];
var _toggle = _mainHeader.getElementsByClassName("cross_hamburger_menu")[0];



jQuery(document).ready(function($) {
	
	var _searchWrapper = document.getElementById("search-bar-wrapper");
	var _mobileToggleWrapper = document.getElementsByClassName("mobile-toggle-wrapper")[0];
	var _logoWrapper = document.getElementsByClassName("logo-wrapper")[0];
	
	var _mainHeader = document.getElementsByClassName("main-header")[0];
	var _col_1 = _mainHeader.getElementsByClassName("col_1")[0];
	var _col_2 = _mainHeader.getElementsByClassName("col_1")[0];
	var _col_3 = _mainHeader.getElementsByClassName("col_1")[0];
	
	$('#btn-search').on('click', function(e) {	
		e.stopPropagation();
		
		var width = window.innerWidth;	
		
		if (this.classList.contains("search-active")) {	
			this.children[0].style.left = "0";
			this.children[0].style.opacity = "1";
			this.children[1].style.right = "-100%";
			this.children[1].style.opacity = "0";
			
			_searchWrapper.style.opacity = "0";
			_searchWrapper.style.visibility = "hidden";			
			
			if (width <= 991) {
				_mobileToggleWrapper.style.opacity = "1";
				_logoWrapper.style.opacity = "1";
			}
			
			
		} 	
		else {
			this.children[0].style.left = "-100%";
			this.children[0].style.opacity = "0";
			this.children[1].style.right = "0";
			this.children[1].style.opacity = "1";
			
			_searchWrapper.style.opacity = "1";
			_searchWrapper.style.visibility = "visible";
			
			
			if (width <= 991) {
				_mobileToggleWrapper.style.opacity = "0";
				_logoWrapper.style.opacity = "0";
			}
			
		}
		
		this.classList.toggle("search-active");
		
	});
	
	
});














/* Animation for Mobile Menu Toggle */

jQuery(document).ready(function($) {	
	
	var _offset = _container_1.offsetHeight;
	
	
	$('.cross_hamburger_menu').on('click', function(e) {
		e.preventDefault();		
		
		if (this.classList.contains("cross_hamburger_menu--toggled")) {	
			_container_2.style.top = "-100vh";
			_container_2.style.opacity = "0";
		} 		
		else {
			_container_2.style.top = _offset + "px";
			_container_2.style.opacity = "1";
		}		
		
		$(this).toggleClass('cross_hamburger_menu--toggled');
		
	});
	
	
});



jQuery(window).resize(function() {
	
	var width = window.innerWidth;		
	var _offset = _container_1.offsetHeight;
	
	if (width <= 991) {
		resetMenuNavMobile();
	}
	else {		
		setDefaultMenuNavDesktop();		
	}
});



jQuery(document).ready(function($) {
	
	var width = window.innerWidth;		
	var _offset = _container_1.offsetHeight;
	
	if (width <= 991) {
		resetMenuNavMobile();
	}
	else {		
		setDefaultMenuNavDesktop();		
	}
});





function setDefaultMenuNavDesktop () {
	_container_2.style.position = "relative";
	_container_2.style.height = "auto";
	_container_2.style.top = "0";
	_container_2.style.opacity = "1";
}

function resetMenuNavMobile () {
	var _offset = _container_1.offsetHeight;
	_container_2.style.position = "absolute";
	_container_2.style.height = "calc(100vh - " + _offset +"px)";
	_container_2.style.top = "-100vh";
	_container_2.style.opacity = "0";
	
	_toggle.classList.remove('cross_hamburger_menu--toggled');	
	
}











