




jQuery(document).ready(function($) {	


	var _product_description = document.getElementsByClassName("st-product-description")[0];
	
	var _nav = _product_description.getElementsByClassName("content-nav")[0].children;
	var _tabs = _product_description.getElementsByClassName("content-tabs")[0].children;
	
	var current_index = getCurrentIndex(_tabs);
	
	$('.st-product-description .content-nav .nav-item').on('click', function(e) {
		e.preventDefault();		
		
		var new_index = parseInt(this.getAttribute("data-option"));
		
		if (current_index != new_index) {
			_tabs[current_index].classList.remove("active-tab");
			_tabs[new_index].classList.add("active-tab");
			
			current_index = new_index;
		}
		
		
	});	
	
});



function getCurrentIndex (tabs) {
	var current_index = -1;
	for (var i=0; i<tabs.length; i++) {
		if (tabs[i].classList.contains("active-tab")) {
			current_index = i;
		}
	}
	return current_index;
}















jQuery(document).ready(function($) {	
	
	$('.variant-select .variant').on('click', function(e) {	
		e.stopPropagation();
		var _selected = this.parentNode.previousElementSibling;
		var _selectedValue = _selected.children[0];
		
		_selectedValue.innerHTML = this.innerHTML;
		_selected.classList.remove("active-select-items");
		_selected.classList.toggle("select-arrow-active");	
		
		$(this.parentNode).slideUp();
		
	});
	
});




jQuery(document).ready(function($) {	
	
	$('.variant-select .variant-selected').on('click', function(e) {
		e.preventDefault();		
		if (this.classList.contains("active-select-items")) {	
			this.classList.remove("active-select-items");
			$(this.nextElementSibling).slideUp();
		} 		
		else {
			$(this.nextElementSibling).slideDown();
			this.classList.add("active-select-items");			
		}		
		this.classList.toggle("select-arrow-active");		
	});	
	
});









