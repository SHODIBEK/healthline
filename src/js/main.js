import './vendor';

$(document).ready(() => {
	let $slider1 = $('.slider ul');

	let $window = $(window);

	let links = $('.slider a');

	let nav = $('span.bg-nav');

	let slider = $('.slider');

	let slider2 = $('.footer-carousel .owl-carousel');

	let reviews = $('.index-reviews__blocks.owl-carousel');

	let Omenu = $('#menu');

	let wmenu = $('.open-menu');

	let cmenu = $('#cmenu');

	let submenu = $('.submenu');

	let newsSlider = $('[data-fancybox="images"]');

	let gallery = $('[data-fancybox^="gallery"]');

	let video = $('[data-fancybox="video"]');

	let pagination = $('.pagination li');

	let cartImg = $('.catalog-cart__img.owl-carousel');

	let formgroup = $('.form-group input,.form-group textarea');

	let next = $('#next');

	let prev = $('#prev');

	links.on('click', (e) => {
		e.preventDefault();
		let $this = $(e.currentTarget);
		let blockpos = $this.offset().left;
		let sliderpos = slider.offset().left;
		let allpos = blockpos - sliderpos;
		let attr = $this.attr('href');
		let active = $(document).find(attr);

		$this.addClass('activ')
			.closest('li')
			.siblings()
			.find('a')
			.removeClass('activ');
		active.addClass('activ')
			.siblings()
			.removeClass('activ');
		nav.css('left', allpos);
	});

	slider2.owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		autoWidth: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				margin: 0,
			},
			768: {
				items: 4,
			},
			1441: {
				items: 5,
			},
		},
	});

	cartImg.owlCarousel({
		nav: true,
		dots: false,
		items: 1,
	});

	if ($window.width() <= 1440) {
		$slider1.owlCarousel({
			nav: true,
			dots: false,
			loop: true,
			margin: 10,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					margin: 0,
				},
				768: {
					items: 5,
				},
			},
		});

		let e = $('table');

		if (e.length === 1) {
			$('.swipe-table').length === 0 &&
			$('body').append(
				'<div class="swipe-table"><span class="swipe_table"></span></div>'
			);

			let a = e.offset();
			let t = e.innerHeight();
			let i = a.top + t;
			let s = $(window).scrollTop() + $(window).height();

			let l = a.top + (t - 100) / 2;

			i < s &&
			($('.swipe-table').css({
				top: l + 20,
			}),
			$('.swipe-table').fadeIn('slow'),
			setTimeout(() => {
				$('.swipe-table').fadeOut('slow');
			}, 2500));
		}
	}

	if ($window.width() <= 767) {
		reviews.owlCarousel({
			nav: true,
			dots: false,
			loop: true,
			items: 1,
		});

		$(window).scroll(function () {
			if ($(this).scrollTop() >= 200) {
				$('.mobile-header').addClass('fixed');
			} else {
				$('.mobile-header').removeClass('fixed');
			}
		});
	}

	$(window).scroll(function () {
		if ($(this).scrollTop() >= 50) {
			$('#back-top').fadeIn(200);
		} else {
			$('#back-top').fadeOut(200);
		}
	});

	$('#back-top').click(() => {
		$('body,html').animate({
			scrollTop: 0,
		}, 1000);
	});

	Omenu.on('click', (e) => {
		e.preventDefault();
		wmenu.addClass('open');
	});

	cmenu.on('click', (e) => {
		e.preventDefault();
		wmenu.removeClass('open');
	});

	submenu.on('click', (e) => {
		e.preventDefault();
		let $this = $(event.currentTarget);

		$this.find('ul').slideToggle();
		$this.toggleClass('open');
	});

	newsSlider, gallery.fancybox({
		animationEffect: 'zoom-in-out',
		transitionEffect: 'tube',
		buttons: ['close'],
		infobar: false,
		closeBtn: false,
		smallBtn: false,
		beforeLoad() {
			let caption = $('.fancybox-caption');
			let nav = $('.fancybox-navigation');
			let close = $('.fancybox-toolbar');
			let closeBtn = $('#closeBtn');

			close.hide();
			nav.hide();
			closeBtn.show();

			caption.hide();
			setTimeout(() => {
				this.$content.append(
					'<a data-fancybox-prev class="fancybox-button modal_button modal_button_left" href="javascript:;">' +
					'</a>'
				),
				this.$content.append(
					'<a data-fancybox-next class="fancybox-button modal_button modal_button_right"  href="javascript:;">' +
						'</a>'
				),
				this.$content.append(
					'<button data-fancybox-close="" id="closeBtn" class="fancybox-close-small"><span data-text="Закрыть" class="close-gallery">Закрыть</span></button>'
				);
			}, 700);
		},
	});
	newsSlider.fancybox({
		animationEffect: 'zoom-in-out',
		transitionEffect: 'tube',
		buttons: ['close'],
		infobar: false,
		closeBtn: false,
		smallBtn: false,
		beforeLoad() {
			let caption = $('.fancybox-caption');
			let nav = $('.fancybox-navigation');
			let close = $('.fancybox-toolbar');
			let closeBtn = $('#closeBtn');

			close.hide();
			nav.hide();
			closeBtn.show();

			caption.hide();
			setTimeout(() => {
				this.$content.append(
					'<a data-fancybox-prev class="fancybox-button modal_button modal_button_left" href="javascript:;">' +
					'</a>'
				),
					this.$content.append(
						'<a data-fancybox-next class="fancybox-button modal_button modal_button_right"  href="javascript:;">' +
						'</a>'
					),
					this.$content.append(
						'<button data-fancybox-close="" id="closeBtn" class="fancybox-close-small"><span data-text="Закрыть" class="close-gallery">Закрыть</span></button>'
					);
			}, 700);
		},
	});
	video.fancybox({
		beforeLoad() {
			let caption = $('.fancybox-caption');
			let nav = $('.fancybox-navigation');
			let close = $('.fancybox-toolbar');
			let closeBtn = $('#closeBtn');

			close.hide();
			nav.hide();
			closeBtn.show();

			caption.hide();
			setTimeout(() => {
				this.$content.append(
					'<button data-fancybox-close="" id="closeBtn" class="fancybox-close-small"><span data-text="Закрыть" class="close-gallery">Закрыть</span></button>'
				);
			}, 700);
		},
	});

	if (pagination.length == 0) {
		$('.pagination').hide();
	}

	let x; let i; let j; let selElmnt; let a; let b; let
		c;
	/* look for any elements with the class "custom-select":*/

	x = document.getElementsByClassName('filter');
	for (i = 0; i < x.length; i++) {
		selElmnt = x[i].getElementsByTagName('select')[0];
		/* for each element, create a new DIV that will act as the selected item:*/
		a = document.createElement('DIV');
		a.setAttribute('class', 'select-selected');
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		x[i].appendChild(a);
		/* for each element, create a new DIV that will contain the option list:*/
		b = document.createElement('DIV');
		b.setAttribute('class', 'select-items select-hide');
		for (j = 0; j < selElmnt.length; j++) {
			/* for each option in the original select element,
            create a new DIV that will act as an option item:*/
			c = document.createElement('DIV');
			c.innerHTML = selElmnt.options[j].innerHTML;

			c.addEventListener('click', function () {
				/* when an item is clicked, update the original select box,
                and the selected item:*/
				let y; let i; let k; let s; let
					h;

				s = this.parentNode.parentNode.getElementsByTagName('select')[0];
				h = this.parentNode.previousSibling;
				for (i = 0; i < s.length; i++) {
					if (s.options[i].innerHTML === this.innerHTML) {
						s.selectedIndex = i;
						h.innerHTML = this.innerHTML;
						y = this.parentNode.getElementsByClassName('same-as-selected');
						for (k = 0; k < y.length; k++) {
							y[k].removeAttribute('class');
						}
						this.setAttribute('class', 'same-as-selected');
						break;
					}
				}
				h.click();
			});
			b.appendChild(c);
		}
		x[i].appendChild(b);
		a.addEventListener('click', function (e) {
			/* when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle('select-hide');
			this.classList.toggle('select-arrow-active');
		});
	}
	function closeAllSelect(elmnt) {
		/* a function that will close all select boxes in the document,
        except the current select box:*/
		let x; let y; let i; let
			arrNo = [];

		x = document.getElementsByClassName('select-items');
		y = document.getElementsByClassName('select-selected');
		for (i = 0; i < y.length; i++) {
			if (elmnt === y[i]) {
				arrNo.push(i);
			} else {
				y[i].classList.remove('select-arrow-active');
			}
		}
		for (i = 0; i < x.length; i++) {
			if (arrNo.indexOf(i)) {
				x[i].classList.add('select-hide');
			}
		}
	}
	/* if the user clicks anywhere outside the select box,
    then close all select boxes:*/
	document.addEventListener('click', closeAllSelect);

	// /textarea///
	let maxWidth = '100%';
	let maxHeight = 500;
	let minHeight = 24;

	$('.form-group textarea')
		.on('input', function () {
			if (this.clientWidth >= maxWidth) {
				this.style.width = maxWidth;
				this.style.whiteSpace = 'pre-wrap';
			}
			if (this.clientHeight > maxHeight) {
				return;
			}
			if (this.scrollHeight > this.clientHeight) {
				this.style.height = `${this.scrollHeight}px`;
			}
		})
		.blur(function () {
			if ($(this).val() == '') {
				$(this).css('height', minHeight);
			}
		});

	formgroup.focus((e) => {
		let $this = $(e.currentTarget);
		let parent = $this.parent();
		let label = parent.children('label');

		parent.addClass('focused');

		if ($this.val() !== '') {
			label.show();
		}
	})
		.blur((e) => {
			let $this = $(e.currentTarget);
			let parent = $this.parent();
			let label = parent.children('label');

			if ($this.val() === '') {
				parent.removeClass('focused');
			}
			if ($this.val() !== '') {
				parent.removeClass('focused');
				label.hide();
			}
		})
		.change((e) => {
			let $this = $(e.currentTarget);
			let parent = $this.parent();
			let label = parent.children('label');

			if ($this.val() !== '') {
				label.hide();
				parent.removeClass('focused');
			} else {
				label.show();
			}
		});
	$('.order-group').each(function () {
		$(this).on('click', function () {
			if ($(this).hasClass('other')) {
				$(this).children('.other-group').find('input').prop('disabled', false);
			} else {
				$('.order-group.other').children('.other-group').find('input').prop('disabled', true);
			}
		});
	});

	next.on('click', () => {
		$('.order').find('.order-block.active').each(function () {
			$(this).next().addClass('active');
			$(this).removeClass('active');
			let indexElement = $(this).attr('data-id');

			if (indexElement == 2) {
				$('#next').css('display', 'none');
				$('#complete').css('display', 'block');
			} else {
				$('#next').css('display', 'block');
				$('#complete').css('display', 'none');
			}
			$('#prev').css('display', 'block');
		});
		if ( $window.width() > 767) {
			$('.order-items').find('li.active').each(function () {
				$(this).next().addClass('active');
			});
		}
		if ( $window.width() <= 767) {
			$('.order-items').find('li.active').each(function () {
				$(this).next().addClass('active');
				$(this).removeClass('active');
			});
		}
	});
	prev.on('click', () => {
		$('.order').find('.order-block.active').each(function () {
			$(this).prev().addClass('active');
			$(this).removeClass('active');
			let indexElement = $(this).attr('data-id');

			if (indexElement == 2) {
				$('#prev').css('display', 'none');
			} else if (indexElement == 3) {
				$('#next').css('display', 'block');
				$('#complete').css('display', 'none');
			}
		});
		if ( $window.width() > 767) {
			$('.order-items').find('li.active').each(function () {
				$(this).prev().addClass('active');
				$(this).removeClass('active');
			});
		}
		if ( $window.width() <= 767) {
			$('.order-items').find('li.active').each(function () {
				$(this).prev().addClass('active');
				$(this).removeClass('active');
			});
		}
	});

	// //new///
	// $('.inner-reviews__item').on('click', function (e) {
	// 	e.preventDefault();
	// 	$(this).addClass('open');
	//
	// });
	// $('.collapse').on('click', function (e) {
	// 	e.preventDefault();
	// 	$(this).closest('.inner-reviews__item').removeClass('open');
	// 	e.stopPropagation();
	// });

});

