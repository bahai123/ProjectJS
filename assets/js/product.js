var product = {
	btnPrev: '<span class="btn-prev">',
	btnNext: '<span class="btn-next">',
	btnLoad: '<i class="fa fa-spin fa-spinner">',
	btnRemove: '<i class="fa fa-minus-circle remove" data-toggle="tooltip" title="Bỏ chọn">',
	post: function(){
		var post = {};
		var postid = "ws-product-json";
		if(post = document.getElementById(postid)) {
			post = JSON.parse(post.textContent);
		}
		return post;
	},
	vote: function(num, self){
		var node = self.closest(".stars");
		for(i=1; i<=5; i++) {
			objname = 'vote_'+i;
			var cls = (i<=num) ? 'active fa fa-star' : 'fa fa-star-o';
			$(node).find('.'+objname).attr('class', objname);
			$(node).find('.'+objname).addClass(cls);
		}
		$(node).attr("data-votes", num);
	},
	postID: function(){
		var post_id = 0;
		var bodyClass, regex = /\d+/g;
		bodyClass = document.body.className;
		bodyClass = bodyClass.replace("postid-", "");
		post_id = Number(bodyClass.match(regex));
		return post_id;
	},
	animate: function(args){
		$([document.documentElement, document.body]).animate({
			scrollTop: $(args.el).offset().top - args.top,
		});
	},
	loading: function(e){
		e.classList.add("loading");
		$(e).html(product.btnLoad);
	},
	archive: function(){
		var form, post_name, evt = "view_item_list";
		form = document.querySelector(".form-filter");
		post_name = $(".breadcrumb li:last span").text();
		var cat_id = Number(form.cats.value);
		var brand_id = Number(form.brands.value);
		var series_id = Number(form.series_id.value);
		if("product_category_brand" == form.pagenow.value) {
			core.ajax({
				url: ajaxurl,
				data: {
					evt: evt,
					action: "product_gtag_event",
					args: {
						cat_id: cat_id,
						post_id: post_id,
						brand_id: brand_id,
						series_id: series_id,
						post_name: post_name,
						post_slug: post_slug,
					}
				}
			}, function(response){
				global.gTagEvent(evt, response.results.args);
			});
		}
		$("ul.filters .dropdown").not(".filter-cats").each(function(){
			var self = this;
			var item = $(self).find("a").length;
			if(! item) {
				item = $(self).find("button").length;
			}
			if(item>6) {
				this.classList.add('col-3');
			}
			else if(item>4) {
				this.classList.add('col-2');
			}
			$(this).find("button .active").each(function(){
				$(self).prepend(product.btnRemove);
				$("[data-toggle=tooltip]").tooltip();
			});
			$(this).find(".remove").on("click", function(){
				var form, node, name, value = 0;
				node = this.closest(".dropdown");
				form = this.closest(".form-filter");
				name = (node.id).substr(11);
				switch(name) {
					case "brands":
						form.series_id.value = 0;
						$(node).find("a.active").removeClass("active");
					break;
					case "options":
						value = [];
						$(node).find("button.active").removeClass("active");
						$(form).find(".filter-options button.active").each(function(){
							value.push(this.dataset.value);
						});
						value = (value) ? value.join(",") : 0;
					break;
					default:
						$(node).find("a.active").removeClass("active");
					break;
				}
				$(form).find("input[name="+name+"]").val(value);
				$(form).submit();
			});
			$(this).find("li>a").on("click", function(){
				var form, node, name, value;
				value = this.dataset.value;
				node = this.closest(".dropdown");
				form = this.closest(".form-filter");
				name = (node.id).substr(11);
				$(node).find("a.active").removeClass("active");
				switch(name) {
					case "cats":
					case "brands":
						form.series_id.value = 0;
					break;
				}
				$(form).find("input[name="+name+"]").val(value);
				this.classList.add("active");
				$(form).submit();
				return false;
			});
			$(this).find("li>button").on("click", function(){
				var form, node, name, value;
				value = this.dataset.value;
				node = this.closest(".dropdown");
				form = this.closest(".form-filter");
				name = (node.id).substr(11);
				$(node).find("button.active").removeClass("active");
				switch(name) {
					case "options":
						value = value.split(",");
						$(form).find(".filter-options button.active").each(function(){
							value.push(this.dataset.value);
						});
						value = value.join(",");
					break;
				}
				$(form).find("input[name="+name+"]").val(value);
				this.classList.add("active");
				$(form).submit();
				return false;
			});
		});
		$(".box-banners").each(function(){
			let loop = ($(this).find('a').length > 1) ? true : false;
			$(this).owlCarousel({
				nav: false,
				navText: [
					product.btnPrev,
					product.btnNext,
				],
				loop: loop,
				dots: false,
				autoplay: true,
				touchDrag: false,
				mouseDrag: false,
				autoplaySpeed: 3000,
				autoplayTimeout: 4000,
				autoplayHoverPause: true,
				margin: 20,
				responsive : {
					0 : {
						items: 1
					},
					768 : {
						items: 2,
					}
				}
			});
		});
		$(".box-brands").each(function(){
			$(this).owlCarousel({
				nav: true,
				navText: [
					product.btnPrev,
					product.btnNext,
				],
				loop: true,
				dots: false,
				autoplay: false,
				touchDrag: false,
				mouseDrag: false,
				autoplaySpeed: 3000,
				autoplayTimeout: 4000,
				autoplayHoverPause: true,
				margin: 20,
				items: 8,
				responsive : {
					0 : {
						items: 3,
					},
					360 : {
						items: 4,
						margin: 10,
					},
					536 : {
						items: 4,
						margin: 10,
					},
					768 : {
						items: 5,
						margin: 15,
					},
					1024: {
						items: 7,
						margin: 15,
					},
					1200: {
						items: 8,
						margin: 20,
					}
				}
			});
		});
		$("#series a").on("click", function(){
			var form = this.closest("form");
			var series_id = (this.id).substr(7);
			form.series_id.value = series_id;
			$(form).submit();
			return false;
		});
		$(document).on("click", ".ws-tags-nav a", function(e){
			e.preventDefault();
			var id = (this.href).split('#')[1];
			product.animate({
				el: document.getElementById(id),
				top: document.body.classList.contains("mobile") ? 110 : 95,
			});
		});
		$("button.showmore").on("click", function(){
			if(this.classList.contains("loading")) {
				return false;
			}
			var count,
				e = this,
				f = e.form,
				node = e.parentNode,
				widthWin = window.screen.width;
			f.action.value = "product_load_more";
			product.loading(e);
			if(widthWin <= 1200) {
				f.show_more.value = 8;
			}
			core.ajax({
				url: ajaxurl,
				data: $(f).serialize(),
				beforeSend: function(){
					product.animate({
						el: e.parentNode,
						top: document.body.classList.contains("mobile") ? 110 : 95,
					});
					$(f).find(".box-body").append("<div class=products>");
					$(f).find(".products:last").css("display", "none");
				},
			}, function(response){
				if(response.results.posts){
					$.each(response.results.posts, function(index, html){
						$(f).find(".products:last").append(html).fadeIn();
					});
				}
				e.classList.remove("loading");
				e.innerHTML = response.results.label;
				count = $(f).find(".product").length;
				f.show.value = count;
				if(count == response.results.count){
					$(node.parentNode).remove();
				}
				history.pushState({}, null, response.results.redirect);
				global.isMobile(function(){
					e.classList.add("active");
				});
			});
		});
		$(".term-desc").each(function(){
			$(this).find(".stars .fa").each(function(i){
				let stt = i+1;
				this.classList.add("vote_"+stt);
				this.setAttribute("onmouseover", "product.vote("+stt+", this)");
			});
			$(this).find(".stars .fa").on("click", function(){
				var box = this.closest(".star-wrap");
				var node = this.closest(".stars");
				var votes = Number(node.dataset.votes);
				core.ajax({
					url: ajaxurl,
					data: {
						url: seourl,
						votes: votes,
						action: "product_term_save_vote",
					},
					beforeSend: function(){
						$(box).find('.message').each(function(){
							$(this).fadeOut(function(){
								$(this).remove();
							});
						});
					},
				}, function(response){
					$(box).append(response.results.message);
				});
			});
			var heightFixed = 395.5;
			var heightBox = $(this).outerHeight();
			var box = this.querySelector(".entry");
			if(heightBox >= heightFixed) {
				$(box).addClass("entry-show");
				$(box).append("<div class=\"entry-more-btn\"><span>");
				$(box).find(".entry-more-btn span").html(jslang.product_btn_show);
			}
			$(box).find(".entry-more-btn span").on("click", function(){
				if(box.classList.contains("entry-hide")) {
					$(box).addClass("entry-show");
					$(box).removeClass("entry-hide");
					$(this).html(jslang.product_btn_show);
				}
				else {
					$(box).addClass("entry-hide");
					$(box).removeClass("entry-show");
					$(this).html(jslang.product_btn_hide);
				}
			});
		});
	},
	single: function(){
		
		var post = this.post();
		
		$(".slider-for").slick({
			speed: 800,
			fade: true,
			arrows: true,
			autoplay: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			focusOnSelect: true,
			autoplaySpeed: 5000,
			asNavFor: ".slider-nav",
			prevArrow: product.btnPrev,
			nextArrow: product.btnNext,
		});
		$(".slider-nav").slick({
			speed: 800,
			arrows: false,
			autoplay: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			focusOnSelect: true,
			autoplaySpeed: 5000,
			asNavFor: ".slider-for",
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
				}
			}]
		});
		$("a.fbbox").fancybox({
			padding: 0,
			helpers: {title: null}
		});
		global.isDesktop(function(){
			if($("#slider-for .variation-img").length > 0) {
				product.ezZoom($("#slider-for .variation-img"));
			}
			else {
				product.ezZoom($("#slider-for .slick-current"));
			}
		});
		$(".slider-for").on("afterChange", function(){
			$("#slider-for a.variation-img").remove();
			global.isDesktop(function(){
				product.ezZoom($(".slider-for .slick-current"));
			});
		});
		$(".entry").each(function(){
			$(this).find('iframe').each(function(){
				$(this).wrap(function(){
					return "<div class='embed-iframe embed-responsive embed-responsive-16by9'>";
				});
				let src = this.dataset.src;
				if(src && src != "undefined") {
					this.src = src;
				}
			});
			$(this).find('video').wrap(function(){
				return "<div class='embed-video embed-responsive embed-responsive-16by9'>";
			});
		});
		$("#box-sidebar").each(function(){
			var node = document.getElementById("box-desc");
			if(node) {
				var box = node.querySelector(".entry");
				var heightLeft = $(node).outerHeight();
				var heightRight = $(this).outerHeight();
				if(heightLeft > heightRight) {
					$(box).addClass("entry-more");
					$(box).outerHeight(heightRight);
					$(box).append("<div class=\"entry-more-btn\"><span>");
					$(box).find(".entry-more-btn span").html(jslang.product_btn_show);
				}
				$(box).find(".entry-more-btn span").on("click", function(){
					if(box.classList.contains("entry-hide")) {
						$(box).addClass("entry-more");
						$(box).outerHeight(heightRight);
						$(box).removeClass("entry-hide");
						$(this).html(jslang.product_btn_show);
					}
					else {
						$(box).removeAttr("style");
						$(box).addClass("entry-hide");
						$(box).removeClass("entry-more");
						$(this).html(jslang.product_btn_hide);
					}
				});
			}
		});
		$(".box-pname .star-wrap").on("click", function(){
			var nav = document.getElementById("ws-nav");
			product.animate({
				top: $(nav).outerHeight() + 10,
				el: document.getElementById("cmt-list"),
			});
		});
		if(! document.body.classList.contains("mobile")) {
			$(".box-product-focus").each(function(){
				var owl = $(this).find(".products");
				if(owl.find(".product").length > 5) {
					owl.owlCarousel({
						nav: true,
						navText: [
							product.btnPrev,
							product.btnNext,
						],
						loop: false,
						dots: false,
						autoplay: false,
						touchDrag: false,
						mouseDrag: false,
						autoplaySpeed: 3000,
						autoplayTimeout: 4000,
						autoplayHoverPause: true,
						margin: 1,
						responsive : {
							0 : {
								items: 1
							},
							360 : {
								items: 2,
							},
							768 : {
								items: 3
							},
							992: {
								items: 4,
							},
							1200: {
								items: 5,
							}
						}
					});
					owl.css("background", "#cdd1d8");
				}
			});
			$(".box-product-viewed").each(function(){
				var owl = $(this).find(".products");
				if(owl.find(".product").length > 5) {
					owl.owlCarousel({
						nav: true,
						navText: [
							product.btnPrev,
							product.btnNext,
						],
						loop: false,
						dots: false,
						autoplay: false,
						touchDrag: false,
						mouseDrag: false,
						autoplaySpeed: 3000,
						autoplayTimeout: 4000,
						autoplayHoverPause: true,
						margin: 1,
						responsive : {
							0 : {
								items: 1
							},
							360 : {
								items: 2,
							},
							536 : {
								items: 3
							},
							768 : {
								items: 3
							},
							1024: {
								items: 4,
							},
							1200: {
								items: 5,
							}
						}
					});
					owl.css("background", "#cdd1d8");
				}
			});
		}
		$("#box-info").on("submit", function(){
			core.ajax({
				url: ajaxurl,
				data: $(this).serialize(),
				beforeSend: function(){
					core.loader("show");
					product.gTagAddToCart(post);
				},
			}, function(response){
				core.loader("hide");
				let widget = response.results.widget;
				$("#order-widget").replaceWith(widget);
				window.location.href = response.results.url;
			});
		});
		$(document).on("click", ".add-to-cart.ajax", function(){
			var self = this;
			var post_id = Number(self.dataset.product);
			var options = $(self.form).find(".item.active").attr("data-code");
			options = options ? Number(options) : 0;
			core.ajax({
				url: ajaxurl,
				data: {
					quantity: 1,
					options: options,
					action: "add_to_cart",
					"add-to-cart": post_id,
				}
			}, function(response){
				product.gTagAddToCart(post);
				let widget = response.results.widget;
				$("#order-widget").replaceWith(widget);
				$.confirm({
					title: jslang.anounce,
					content: "Đã thêm sản phẩm vào giỏ hàng.",
					buttons: {
						cancel: {
							text: "Đóng",
							action: function(){
								return true;
							}
						},
						confirm: {
							text: "Xem giỏ hàng",
							btnClass: 'ws-btn',
							action: function(){
								window.location.href = response.results.url;
							}
						}
					}
				});
			});
		});
		$("#s").on("focus", function(){
			product.compareSearch(this.form);
		});
		$("#s").on("keyup", global.delay(function(){
			product.compareSearch(this.form);
		}, 500));
		$(document).on("click", ".box-compare .results .product", function(){
			var form = this.closest("form");
			var post_id = Number(this.dataset.id);
			core.ajax({
				url: ajaxurl,
				data: {
					type: "add",
					post_id: post_id,
					post_type: "product",
					action: "product_compare",
				},
			}, function(response){
				form.keyword.value = response.results.title;
				window.location.href = response.results.redirect;
			});
			return false;
		});
		$(document).click(function(e){
			if(!$(e.target).closest(".compare-search-inner.open").length){
				$(".compare-search-inner.open").each(function(){
					this.classList.remove("open");
				});
			}
		});
		$(document).on("click", ".box-product-group a.item", function(event){
			event.preventDefault();
			var form = this.closest("form");
			var node = this.closest(".items");
			var code = Number(this.dataset.code);
			var pa_id = Number(this.dataset.pa_id);
			$(node).find("a").removeClass("active");
			$(node).find("input").prop("checked", false);
			$(this).find("input").prop("checked", true);
			this.classList.add("active");
			core.ajax({
				url: ajaxurl,
				data: {
					code: code,
					pa_id: pa_id,
					post_id: product.postID(),
					action: "product_variation_active",
				},
				beforeSend: function(){
					core.loader("show");
				},
			}, function(response){
				let price = response.results.price;
				core.loader("hide", 400, function(){
					$("#slider-for").find(".variation-img").remove();
					$("#slider-for").append(response.results.anchor);
					$("#slider-for a.variation-img").fadeIn(300);
					product.ezZoom($("#slider-for a.variation-img"));
					$(form).find(".price-html-ul span.price").html(price);
					global.gTagEvent("select_item", response.results.args);
				});
			});
		});

		// button tragop
		$(".add-to-cart.tragop").on("click", function(e){
			core.loader("show");
			product.gTagAddToCart(post);
		});

		// box-product-group
		$(".box-product-group .items a").each(function(){
			global.redirect(this);
		});

		product.gTagViewItem(post);
		global.contentPopup('div.entry', 'gallery');
		global.contentPopup('div.thumb', 'gallery');
	},
	gTagAddToCart: function(post){
		var item, price, categories = [],
		item_list_id = "", item_list_name = "";
		price = $("#box-info li .price").text();
		price = price.trim().replace(/\./g, "");
		price = Number(price.replace(/[^0-9\.]+/g, ""));
		$(".breadcrumb li a").each(function(i, e){
			if(i) {
				let k = "item_category";
				k = (i == 1) ? k : k + i;
				categories[k] = e.textContent;
			}
			if(i == $(".breadcrumb li a").length - 1) {
				item_list_name = e.textContent;
				item_list_id = (e.href).replace(rooturl, "");
				item_list_id = item_list_id.replace(".html", "");
			}
		});
		item = {
			item_id: post.sku,
			item_name: post.name,
			item_brand: post.brand.name,
			affiliation: jslang.sitename+" online store",
			discount: 0,
			index: 0,
			item_list_id: item_list_id,
			item_list_name: item_list_name,
			item_variant: ($(".box-product-group .item.active").text()).trim(),
			price: price,
			quantity: 1,
		};
		Object.assign({}, categories);
		Object.assign(item, categories);
		global.gTagEvent("add_to_cart", {
			currency: "VND",
			value: price,
			items: [item]
		});
	},
	gTagViewItem: function(post){
		var item, price, categories = [],
		item_list_id = "", item_list_name = "";
		price = $("#box-info li .price").text();
		price = price.trim().replace(/\./g, "");
		price = Number(price.replace(/[^0-9\.]+/g, ""));
		$(".breadcrumb li a").each(function(i, e){
			if(i) {
				let k = "item_category";
				k = (i == 1) ? k : k + i;
				categories[k] = e.textContent;
			}
			if(i == $(".breadcrumb li a").length - 1) {
				item_list_name = e.textContent;
				item_list_id = (e.href).replace(rooturl, "");
				item_list_id = item_list_id.replace(".html", "");
			}
		});
		item = {
			item_id: post.sku,
			item_name: post.name,
			item_brand: post.brand.name,
			affiliation: jslang.sitename+" online store",
			discount: 0,
			index: 0,
			item_list_id: item_list_id,
			item_list_name: item_list_name,
			item_variant: ($(".box-product-group .item.active").text()).trim(),
			price: price,
			quantity: 1,
		};
		Object.assign({}, categories);
		Object.assign(item, categories);
		global.gTagEvent("view_item", {
			currency: "VND",
			value: price,
			items: [item]
		});
	},
	compareSearch: function(f){
		var keyword = f.keyword.value;
		var node = f.querySelector('.dropdown');
		var btn = f.querySelector(".btn-search");
		var results = f.querySelector('.results');
		if(keyword.length > 1) {
			core.ajax({
				url: ajaxurl,
				data: $(f).serialize(),
				beforeSend: function() {
					product.loading(btn);
					node.classList.remove("open");
				}
			}, function(response) {
				if(response.success) {
					node.classList.add("open");
					$(results).html(response.results);
				}
				else {
					$(results).empty();
					node.classList.remove("open");
				}
				btn.classList.remove("loading");
			});
		}
		else {
			$(results).empty();
			$(results).removeClass("show");
			node.classList.remove("open");
		}
	},
	ezZoom: function(e, size = 200){
		var img = e.find("img");
		var src = img.attr("src");
		if(! img.attr("data-zoom-image")) {
			img.attr("data-zoom-image", src);
		}
		$(".zoomContainer").each(function(){
			$(this).remove();
		});
		if(! document.body.classList.contains("mobile")) {
			img.elevateZoom({
				lensSize: size,
				zoomType: 'lens',
				scrollZoom : true,
				lensShape: 'round',
				borderColour: 'var(--c2)',
			});
		}
	},
	bestseller: function(e){
		$(e).find(".box-galleries").each(function(){
			$(".slider-for").slick({
				speed: 800,
				fade: true,
				arrows: true,
				infinite: false,
				autoplay: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				focusOnSelect: true,
				autoplaySpeed: 5000,
				asNavFor: ".slider-nav",
				prevArrow: product.btnPrev,
				nextArrow: product.btnNext,
			});
			$(".slider-nav").slick({
				speed: 800,
				arrows: false,
				infinite: false,
				autoplay: false,
				slidesToShow: 5,
				slidesToScroll: 1,
				focusOnSelect: true,
				autoplaySpeed: 5000,
				asNavFor: ".slider-for",
				responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 1,
					}
				}]
			});
			$("a.fbbox").fancybox({
				padding: 0,
				helpers: {title: null}
			});
			global.isDesktop(function(){
				if($("#slider-for .variation-img").length > 0) {
					product.ezZoom($("#slider-for .variation-img"));
				}
				else {
					product.ezZoom($("#slider-for .slick-current"));
				}
			});
			$(".slider-for").on("afterChange", function(){
				$("#slider-for a.variation-img").remove();
				global.isDesktop(function(){
					product.ezZoom($(".slider-for .slick-current"));
				});
			});
		});

		$(e).find(".entry").each(function(){
			$(this).find('iframe').each(function(){
				$(this).wrap(function(){
					return "<div class='embed-iframe embed-responsive embed-responsive-16by9'>";
				});
				let src = this.dataset.src;
				if(src && src != "undefined") {
					this.src = src;
				}
			});
			$(this).find('video').wrap(function(){
				return "<div class='embed-video embed-responsive embed-responsive-16by9'>";
			});
		});

		$(".star-barsub").each(function(i, e){
			var percent = e.dataset.percent+"%";
			$(this).animate({width: percent}, 5000, function(){
				delete e.parentNode.dataset.percent;
			});
		});

		// box-product-group
		$(".box-product-group .items a").each(function(){
			global.redirect(this);
		});

		$("#box-comment textarea").on("focus", function(){
			$("#box-faqs-poster .box-faqs-form").remove();
		});

		$(document).on("submit", "#box-comment-term", function(){
			var f = this;
			if(Number(f.hvote.value) == 0) {
				alert("Vui lòng chọn một mức đánh giá.");
				return false;
			}
			core.ajax({
				url: ajaxurl,
				data: $(f).serialize(),
				beforeSend: function(){
					var div = '<div class="cmt-loading alert alert-warning" style="display:none">';
					$(f).append(div);
				}
			}, function(response){
				$(f).find('.cmt-loading').addClass("alert-success");
				$(f).find('.cmt-loading').removeClass("alert-warning");
				$(f).find('.cmt-loading').html(response.results.message);
				$(f).find('.cmt-loading').fadeIn().delay(2000).fadeOut(function(){
					f.reset();
					location.reload();
					$("#reviewsModal").modal("hide");
				});
			});
			return false;
		});

		$(document).on("click", "#box-reviews .loadmore button", function(){
			var box = this.closest(".comment-list");
			$(box).find(".comment-item.hide").each(function(i, e){
				if(i < 5) {
					e.classList.remove("hide");
				}
			});
			if(! $(box).find(".comment-item.hide").length) {
				$(this.parentNode).remove();
			}
		});

		$(document).on("click", "#box-faqs-poster .loadmore button", function(){
			var box = this.closest(".comment-list");
			$(box).find(".comment-item.hide").each(function(i, e){
				if(i < 5) {
					let rowid = e.dataset.id;
					rowid = rowid.substr(12);
					e.classList.remove("hide");
					$(".comment-parent-"+rowid).removeClass("hide");
					$(".comment-parent-"+rowid).find(".hide").removeClass("hide");
				}
			});
			if(! $(box).find(".comment-item.hide").length) {
				$(this.parentNode).remove();
			}
		});

		$(document).on("click", ".box-product-group a.item", function(event){
			event.preventDefault();
			var form = this.closest(".single-bestseller");
			var node = this.closest(".items");
			var code = Number(this.dataset.code);
			var pa_id = Number(this.dataset.pa_id);
			$(node).find("a").removeClass("active");
			$(node).find("input").prop("checked", false);
			$(this).find("input").prop("checked", true);
			this.classList.add("active");
			core.ajax({
				url: ajaxurl,
				data: {
					code: code,
					pa_id: pa_id,
					post_id: form.dataset.post_id,
					action: "product_variation_active",
				},
				beforeSend: function(){
					core.loader("show");
				},
			}, function(response){
				core.loader("hide", 400, function(){
					$("#slider-for").find(".variation-img").remove();
					$("#slider-for").append(response.results.anchor);
					$("#slider-for a.variation-img").fadeIn(300);
					product.ezZoom($("#slider-for a.variation-img"));
					$(form).find(".price").html(response.results.price);
				});
			});
		});

		$(document).on("click", ".faqs-reply", function(){
			var node = this.closest(".faqs-poster");
			var poster_id = (node.dataset.id).substr(12);
			if(! $(node).find(".box-faqs-form").length) {
				$("#box-faqs-poster .box-faqs-form").remove();
				var clone, form = $(".box-faqs-form .box-comment");
				clone = form.clone().appendTo($(node).find(".commentBody"));
				clone.find("input[name=cid]").val(poster_id);
				clone.find(".comment-form").attr("data-parent", poster_id);
				clone.wrap("<div class='box-faqs-form'><div class='comment-form-sub'>");
			}
			$(node).find(".box-faqs-form textarea").focus();
		});

		$(document).on("submit", ".comment-faqs", function(){
			var f = this;
			core.ajax({
				url: ajaxurl,
				data: $(f).serialize(),
				beforeSend: function(){
					var div = '<div class="cmt-loading alert alert-warning" style="display:none">';
					$(f).append(div);
				}
			}, function(response){
				$(f).find('.cmt-loading').addClass("alert-success");
				$(f).find('.cmt-loading').removeClass("alert-warning");
				$(f).find('.cmt-loading').html(response.results.message);
				$(f).find('.cmt-loading').fadeIn().delay(2000).fadeOut(function(){
					f.reset();
				});
			});
			return false;

			var box = this.closest(".comment-form");
			core.ajax({
				url: ajaxurl,
				type: "post",
				data: {
					name: name,
					phone: phone,
					email: email,
					seourl: seourl,
					message: message,
					parentid: parentid,
					action: "faqs_send",
				}
			}, function(response){
				if(! document.getElementById("ws-jconfirm")) {
					let styles = response.results.assets.styles;
					let scripts = response.results.assets.scripts;
					$("head").prepend('<link href="'+styles+'" rel="stylesheet">');
					$("body").append('<script id="ws-jconfirm" src="'+scripts+'">');
				}
				$.confirm({
					title: jslang.anounce,
					content: response.results.notice,
					buttons: {
						confirm: {
							text: "Đóng",
							btnClass: "btn-red",
							action: function(){
								if(response.results.success) {
									location.reload();
									$(box).find(".form-control").val("");
								}
								else {
									setTimeout(function(){
										$(box).find("textarea").focus();
									}, 300);
								}
							}
						}
					}
				});
			});
		});
	},
	init: function(){
		$("body.archive").each(function(){
			product.archive(this);
			product.bestseller(this);
		});
		$("body.single").each(function(){
			product.single(this);
		});
		$(".flashsale-info").each(function(){
			global.dealTime(this);
		});
	}
};

$(function(){
	product.init();
});