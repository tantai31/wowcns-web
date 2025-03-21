







// category Products
jQuery(document).ready(function($) {
	var stShopCates = document.getElementById("st-product-cates");
	

	var _navItems = stShopCates.getElementsByClassName("cate-nav")[0].children;
	var _cates = stShopCates.getElementsByClassName("cate-tabs")[0].children;
	
	
	var currentIndex = -1;
	
	
	
	$('.cate-nav .nav-item').on('click', function(e) {	
		e.stopPropagation();
		var index = this.getAttribute("data-option");	
		
		
		for (var i=0; i<_navItems.length; i++) {			
			if (_navItems[i].classList.contains("active-item") == true) {
				currentIndex = i;
			}
		}
		
		
		if (currentIndex != index) {
			/* Reset current active slide*/
			_cates[currentIndex].classList.remove("active-tab");
			_navItems[currentIndex].classList.remove("active-item");
			
			/* Activate new slide*/
			this.classList.add("active-item");
			_cates[index].classList.add("active-tab");
		}
		
	});
	
});






// featured Products
jQuery(document).ready(function($) {
	var stShopFeat = document.getElementById("st-featured-products");
	

	var _navItems = stShopFeat.getElementsByClassName("featured-nav")[0].children;
	var _featured = stShopFeat.getElementsByClassName("featured-tabs")[0].children;
	
	
	var currentIndex = -1;
	
	
	
	$('.featured-nav .nav-item').on('click', function(e) {	
		e.stopPropagation();
		var index = this.getAttribute("data-option");	
		
		
		for (var i=0; i<_navItems.length; i++) {			
			if (_navItems[i].classList.contains("active-item") == true) {
				currentIndex = i;
			}
		}
		
		
		if (currentIndex != index) {
			/* Reset current active slide*/
			_featured[currentIndex].classList.remove("active-tab");
			_navItems[currentIndex].classList.remove("active-item");
			
			/* Activate new slide*/
			this.classList.add("active-item");
			_featured[index].classList.add("active-tab");
		}
		
	});
	
});













/*

window.onload = function() {
	var _catesWrapper = document.getElementsByClassName("cates-wrapper")[0];	
	var _cates = _catesWrapper.children;	
	var n = _cates.length;	
	_catesWrapper.classList.add("layout-" + n);
	
	
	var col_1 = document.createElement("DIV");
	col_1.setAttribute("class", "col col_1");
	
	var col_1_row_1 = document.createElement("DIV");
	col_1_row_1.classList.add("row");
	
	var col_1_row_2 = document.createElement("DIV");
	col_1_row_2.classList.add("row");
	
	
	col_1.appendChild(col_1_row_1);	
	col_1.appendChild(col_1_row_2);	
	
	
	var col_2 = document.createElement("DIV");
	col_2.setAttribute("class", "col col_2");
		
	
	if (n == 5) {
		
		_cates[0].classList.add("col-6");
		_cates[1].classList.add("col-6");
		_cates[2].classList.add("col-6");
		_cates[3].classList.add("col-6");
		
		
		var _new_0 = _cates[0];
		var _new_1 = _cates[1];
		var _new_2 = _cates[2];
		var _new_3 = _cates[3];
		var _new_4 = _cates[4];	

		col_1_row_1.appendChild(_new_0);
		col_1_row_1.appendChild(_new_1);	
		col_1_row_2.appendChild(_new_2);
		col_1_row_2.appendChild(_new_3);
		
		col_2.appendChild(_new_4);

	}
	
	_catesWrapper.appendChild(col_1);	
	_catesWrapper.appendChild(col_2);	
	
	_catesWrapper.style.visibility = "visible";

};
*/



window.addEventListener('load', function () {


	
	//alert(n);
})




jQuery(document).ready(function($) {	
	
	
	
});


function deleteOldItems (arrs) {
	for (var i=0; i<arrs.length; i++) {
		arrs[i].remove();
	}
}

























/*
	
	jQuery(document).ready(function($) {	
	
	var _boxesWrapper = document.getElementsByClassName("box-layout")[0];
	
	var _boxes = _boxesWrapper.children;
	
	var n = _boxes.length;	
	
	
	var _width = _boxesWrapper.offsetWidth;
	var _height = _width*0.575;
	
	
	
	var products = _boxesWrapper.children;
	
	
	
	_boxesWrapper.style.height = _height + "px";
	
	var spacing = 0.02*_width;
	
	if (n == 1) {
	
	}
	
	if (n == 2) {
	
	}
	
	if (n == 3) {
	products[0].style.height = (_height - spacing)/2 + "px";
	products[1].style.height = (_height - spacing)/2 + "px";
	
	products[0].style.marginBottom = spacing + "px";		
	}
	
	if (n == 4) {
	products[0].style.height = (_height - spacing)/2 + "px";
	products[1].style.height = (_height - spacing)/2 + "px";
	
	products[0].style.marginBottom = spacing + "px";
	products[0].style.marginBottom = spacing + "px";
	}
	
	if (n == 5) {
	products[0].style.height = (_height - spacing)/2 + "px";
	products[0].style.width = (_width -spacing*2)/4 + "px";
	
	products[1].style.height = (_height - spacing)/2 + "px";
	products[1].style.width = (_width -spacing*2)/4 + "px";
	
	products[2].style.height = (_height - spacing)/2 + "px";
	products[2].style.width = (_width -spacing*2)/4 + "px";
	
	products[3].style.height = (_height - spacing)/2 + "px";
	products[3].style.width = (_width -spacing*2)/4 + "px";
	
	products[0].style.marginBottom = spacing + "px";
	products[0].style.marginRight = spacing + "px";
	
	products[1].style.marginBottom = spacing + "px";
	}
	
	if (n == 6) {
	
	}
	
	if (n == 7) {
	
	}	
	
	
	for (var i=0; i<n; i++) {
	
	
	}
	
	});
	
	
*/




















jQuery(document).ready(function($) {	
	
	$('.category-select .category').on('click', function(e) {	
		e.stopPropagation();
		var _selected = this.parentNode.previousElementSibling;
		
		var width = window.innerWidth;
		if (width <= 991) {
			_selected.classList.remove("active-select-items");
			_selected.classList.toggle("select-arrow-active");	
			
			$(this.parentNode).slideUp(400);
			
			
			var width = window.innerWidth;		
			var _offset = _container_1.offsetHeight;
		}
		else {		
			
		}
		
	});
	
	
	
	$('.category-select .category-selected').on('click', function(e) {
		e.preventDefault();		
		
		var width = window.innerWidth;
		if (width <= 991) {
			if (this.classList.contains("active-select-items")) {	
				this.classList.remove("active-select-items");
				$(this.nextElementSibling).slideUp(400);
			} 		
			else {
				$(this.nextElementSibling).slideDown(400);
				this.classList.add("active-select-items");
			}		
			this.classList.toggle("select-arrow-active");	
		}
		else {		
			
		}
		
		
	});	
	
});









/*

jQuery(document).ready(function($) {
	var stIntro = document.getElementById("st-intro-slides");
	
	var _slides = stIntro.getElementsByClassName("slides-wrapper")[0].children;
	var _navItems = stIntro.getElementsByClassName("slides-nav-wrapper")[0].children;
	
	var currentIndex = -1;
	
	
	
	$('.slides-nav-wrapper .nav-item').on('click', function(e) {	
		e.stopPropagation();
		var index = this.getAttribute("data-index");	
		
		for (var i=0; i<_navItems.length; i++) {			
			if (_navItems[i].classList.contains("active-item") == true) {
				currentIndex = i;
			}
		}
		
		if (currentIndex != index) {

			_slides[currentIndex].classList.remove("active-slide");
			_navItems[currentIndex].classList.remove("active-item");
			

			this.classList.add("active-item");
			_slides[index].classList.add("active-slide");
		}
		
	});
	
});

*/

/* Autoplay */

jQuery(document).ready(function($) {
	
	
});


setInterval(function() { 
	
	var stIntro = document.getElementById("st-intro-slides");
	
	var _slides = stIntro.getElementsByClassName("slides-wrapper")[0].children;
	var _navItems = stIntro.getElementsByClassName("slides-nav-wrapper")[0].children;
	
	var currentIndex, index;
	
	for (var i=0; i<_navItems.length; i++) {			
		if (_navItems[i].classList.contains("active-item") == true) {
			currentIndex = i;
		}
	}
	
	if (currentIndex == (_navItems.length - 1)) {
		index = 0;
		} else {
		index = currentIndex + 1;
	}
	
	_slides[currentIndex].classList.remove("active-slide");
	_navItems[currentIndex].classList.remove("active-item");
	
	_navItems[index].classList.add("active-item");
	_slides[index].classList.add("active-slide");
    
}, 3000);





















jQuery(document).ready(function($) {
	var _productsWrappers = document.getElementsByClassName("products-wrapper");
	
	for (var i=0; i<_productsWrappers.length; i++) {
		createProductBorders(_productsWrappers[i]);
	}
	
	
});

function createProductBorders (_productsWrapper) {
	var products = _productsWrapper.children;
	for (var i=0; i<products.length; i++) {
		for (var j=0; j<4; j++) {
			var _span = document.createElement("span");
			products[i].insertBefore(_span, products[i].firstChild);
		}		
	}
}




$(".products-wrapper .product").mouseenter(function() {
	spans = this.getElementsByTagName("span");
	
	spans[0].style.animation = "animateYIn .4s";	
	spans[0].style.animationFillMode = "forwards";
	
	spans[1].style.animation = "animateXIn .4s";	
	spans[1].style.animationFillMode = "forwards";
	
	spans[2].style.animation = "animateYIn .4s";	
	spans[2].style.animationFillMode = "forwards";
	
	spans[3].style.animation = "animateXIn .4s";
	spans[3].style.animationFillMode = "forwards";
});


$(".products-wrapper .product").mouseleave(function() {
	spans = this.getElementsByTagName("span");
	
	spans[0].style.animation = "animateYOut .4s";	
	spans[0].style.animationFillMode = "forwards";
	
	spans[1].style.animation = "animateXOut .4s";	
	spans[1].style.animationFillMode = "forwards";
	
	spans[2].style.animation = "animateYOut .4s";	
	spans[2].style.animationFillMode = "forwards";
	
	spans[3].style.animation = "animateXOut .4s";
	spans[3].style.animationFillMode = "forwards";
});








