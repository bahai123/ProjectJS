var CMT = {
	animate: function(e, h = 0, t = 400){
		$([document.documentElement, document.body]).animate({
			scrollTop: $(e).offset().top - h,
		}, t);
	},
	send: function(f){
		core.ajax({
			url: ajaxurl,
			data: $(f).serialize(),
			beforeSend: function(){
				var div = '<div class="cmt-loading alert alert-warning"></div>';
				$(f).append(div);
				$(f).find('.cmt-loading').html('Đang xử lý ...');
			}
		}, function(response){
			$(f).find('.cmt-loading').html(response.results);
			$(f).find('.cmt-loading').addClass("alert-success");
			$(f).find('.cmt-loading').removeClass("alert-warning");
			setTimeout(function(){
				f.reset();
				$(f).find('.cmt-loading').remove();
			}, 3000);
		});
		return false;
	},
	reply: function(id){
		core.ajax({
			url: ajaxurl,
			data: {
				id: id,
				is_vote: is_vote,
				post_id: post_id,
				post_slug: post_slug,
				post_type: post_type,
				action: "comment_reply",
			},
			beforeSend: function(){
				CMT.closeSatis(id);
				let box = $('#box-comment');
				box.find('.comment-hide').hide();
				$('.comment-form-sub').remove();
			}
		}, function(response) {
			let box = $('#comment-'+id);
			box.find('.commentBody').append(response.results);
			box.find('textarea').focusEnd();
		});
	},
	like: function(id){
		core.ajax({
			url: ajaxurl,
			data: {
				id: id,
				action: "comment_like",
			},
		}, function(response) {
			let box = $('#comment-'+id),
				el = box.find('.commentLike>span');
			el.text(response.results.message);
			el.attr('onclick', 'CMT.unlike('+id+')');
		});
	},
	unlike: function(id){
		core.ajax({
			url: ajaxurl,
			data: {
				id: id,
				action: "comment_unlike",
			}
		}, function(response) {
			let box = $('#comment-'+id),
				el = box.find('.commentLike>span');
			el.text(response.results.message);
			el.attr('onclick', 'CMT.like('+id+')');
		});
	},
	satisfied: function(id){
		var box = $('#comment-'+id);
		core.ajax({
			url: ajaxurl,
			data: {
				id: id,
				action: "comment_satisfied",
			},
			beforeSend: function(){
				CMT.closeSatis(id);
				box.find('.commentSatisfied>span').addClass('clicked');
			}
		}, function(response) {
			box.find('.commentInfo .mwrs').remove();
			box.find('.commentInfo').append('<li class="mwrs">');
			box.find('.commentInfo .mwrs').text(response.results.message);
			box.find('.commentInfo .mwrs').fadeOut(5000, function(){
				$(this).remove();
				box.find('.clicked').removeClass('clicked');
			});
		});
	},
	unsatisfied: function(id){
		var box = $('#comment-'+id),
			name = box.find(".name").text();
		core.ajax({
			url: ajaxurl,
			data: {
				id: id,
				name: name.trim(),
				action: "comment_unsatisfied",
			},
			beforeSend: function(){
				CMT.clear(id);
				box.find('.commentUnsatisfied>span').addClass('clicked');
			}
		}, function(response) {
			box.find('.commentInfo .wrapsatis').remove();
			box.find('.commentUnsatisfied').append(response.results);
			box.find('.commentUnsatisfied>span').addClass('clicked');
		});
	},
	feedback: function(f, id){
		var box = $('#comment-'+id);
		var content = f.ustCt.value;
		var name = f.ustName.value;
		var phone = f.ustPhone.value;
		core.ajax({
			url: ajaxurl,
			data: {
				id: id,
				lang : lang,
				name : name,
				phone : phone,
				content : content,
				action: "comment_feedback",
			},
			beforeSend: function(){
				CMT.clear(id);
			}
		}, function(response){
			CMT.closeSatis(id);
			box.find('.commentInfo .mwrs').remove();
			box.find('.commentInfo').append('<li class="mwrs">');
			box.find('.commentInfo .mwrs').text(response.results.message);
			box.find('.commentInfo .mwrs').fadeOut(5000, function(){
				$(this).remove();
			});
		});
		return false;
	},
	vote: function(num, cmt_id = 0){
		var cmt = cmt_id ? $('#comment-'+cmt_id) : $('.form-comment');
		var lbl = cmt.find(".vote_"+num).attr("title");
		for(i=1; i<=5; i++) {
			objname = 'vote_'+i;
			var cls = (i<=num) ? 'active fa fa-star' : 'fa fa-star-o';
			cmt.find('.'+objname).attr('class', objname);
			cmt.find('.'+objname).addClass(cls);
		}
		if(cmt.find('.vote-label').length) {
			cmt.find('.vote-label').html(lbl);
		}
		if(cmt.find('input[name=hvote]').length) {
			cmt.find('input[name=hvote]').val(num);
		}
		core.dd(num);
	},
	scrollTop: function(id, time = 400, offset = 90){
		var box = id ? 'comment-'+id : 'box-comment';
		if(box = document.getElementById(box)) {
			CMT.animate(box, offset, time);
		}
	},
	showName: function(id){
		var box = id ? '#frm-comment-'+id : '.comment-form';
		if(!id) 
		{
			$('.comment-form-sub').remove();
		}
		$(box).find('.comment-hide').stop().slideDown();
	},
	closeSatis: function(id){
		var box = $('#comment-'+id);
		box.find('.wrapsatis').remove();
		box.find('.clicked').removeClass('clicked');
	},
	clear: function(id){
		var box = $('#comment-'+id);
		box.find('.wrapsatis').remove();
		box.find('.comment-form-sub').remove();
		box.find('.clicked').removeClass('clicked');
	},
	list: function(){
		$.ajax({
			type: 'POST',
			url: root + 'comment',
			dataType: 'json',
			data: {
				mod: pagenow,
				lang: lang,
				post_id: post_id,
			},
			success: function(response) {
				$(elCMT).html(response);
				CMT.hash();
			}
		});
	},
	result: function(p=1, cb = false){
		var box = $(elCMT),
			s = box.find('input[name=s]').val();
		core.ajax({
			url: ajaxurl,
			data: {
				s: s,
				paged: p,
				lang: lang,
				post_id: post_id,
				post_type: post_type,
				post_slug: post_slug,
				action: "comment_result",
				is_vote: (typeof is_vote != 'undefined' && is_vote==1) ? 1 : 0,
			}
		}, function(response) {
			var hash = window.location.hash;
			var id = parseInt(hash.substr(9));
			if(id || p>1) { CMT.scrollTop(id) };
			$(elCMT).html(response.results.html);
			core.handle(cb, elCMT);
		});
		return false;
	},
	init: function(){
		if(typeof(elCMT)!='undefined' && elCMT!==null) {
			CMT.result(1, function(response){
				let URL, ID = 0;
				URL = window.location.href;
				URL = URL.replace(seourl, "");
				ID = Number(URL.substr(9));
				if(ID) {
					CMT.scrollTop(ID);
				}
			});
		}
		$(document).on("click", "#cmt-list .cmt-nav>li>a", function(e){
			var href = this.href;
			var paged = this.dataset.paged;
			return CMT.result(paged);
		});
		$(document).on("keyup", ".cmt-search>input", global.delay(function(){
			CMT.result(1, function(){
				$(".cmt-search>input").focus();
			});
		}, 500));
	}
};

$(function(){
	CMT.init();
});

$.fn.focusEnd = function() {
	return this.each(function() {
		$(this).focus()
		if (this.setSelectionRange) {
			var len = $(this).val().length * 2;
			this.setSelectionRange(len, len);
		}
		else {
			$(this).val($(this).val());
		}
		this.scrollTop = 999999;
	});
};