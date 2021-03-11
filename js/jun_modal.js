(function ($) {
	$(function () {
		/* .jModal(); jun_modal_popup -start- */
		/* jun_Modal_popup Code by comdsam@naver.com */
		$('body').append('<div id="jun-modal-lbx"><div id="jun-img-lbx"></div><div id="jun-close-lbx"><div id="jun-close-border-lbx"></div></div></div>');

		$.fn.jModal = function (action) {
			var $modalPop = $('#jun-modal-lbx'),
				$namePopup = $(this),
				$imgPop = $modalPop.children('#jun-img-lbx'),
				$closePop = $modalPop.children('#jun-close-lbx');

			if (action === 'all') {
				var $thisPop = $namePopup.find('a');
			} else {
				var $thisPop = $namePopup.children('a');
			}

			$thisPop.on('click', function (a) {
				a.preventDefault();

				var imgObj = new Image();
				imgObj.src = $(this).attr('href');

				if (imgObj.complete) {
					$imgPop.append('<img src="' + $(this).attr('href') + '">');

					if (imgObj.width >= imgObj.height) {
						$imgPop.children('img').css('width', '100%');
					} else {
						$imgPop.children('img').css('height', '100%');
					}
					$modalPop.addClass('on');
				} else {
					location.href = $(this).attr('href');
				}
			});

			$modalPop.on('click', function () {
				$imgPop.empty();
				$modalPop.removeClass('on');
			});

			$(window).resize(function () {
				popupSize();
			});

			function popupSize() {
				var wrWidth = $(window).width(),
					wrHeight = $(window).height(),
					wWidth = wrWidth * 0.9,
					wHeight = wrHeight * 0.9;
				if (wrWidth > wrHeight) {
					$imgPop.css({
						width: wHeight + 'px',
						height: wHeight + 'px'
					});
				} else {
					$imgPop.css({
						width: wWidth + 'px',
						height: wWidth + 'px'
					});
				}
			};

			$modalPop.on('scroll touchmove mousewheel selectstart dragstart', function (event) {
				event.preventDefault();
				event.stopPropagation();
				return false;
			});

			popupSize();
		};
		/* .jModal(); jun_Modal_popup -end- */
	});
}(jQuery));
