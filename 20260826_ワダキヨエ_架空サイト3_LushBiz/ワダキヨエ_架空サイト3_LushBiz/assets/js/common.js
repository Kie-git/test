/*====================================================================================================
*
*   スムーススクロール
*
====================================================================================================*/

$(function () {
	// #で始まるリンクをクリックしたら実行される
	$('a[href^="#"]').click(function () {
		var speed = 400; // スクロール速度 - ミリ秒で記述
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({
			scrollTop: position
		}, speed, 'swing');
		return false;
	});
});

/*====================================================================================================
*
*    ハンバーガーメニュー
*
====================================================================================================*/

const ham = $('#js-hamburger') //js-hamburgerの要素を取得
const nav = $('#js-nav')
ham.on('click', function () {
	// console.log("ok!")
	ham.toggleClass('is-active') //ハンバーガーメニューにactiveクラス追加
	nav.toggleClass('is-active') //ハンバーガーメニューにactiveクラス追加
});

// メニューリンクをクリックしたら閉じる
$('#js-nav a').on('click', function () {
	ham.removeClass('is-active');
	nav.removeClass('is-active');
});

/*====================================================================================================
*
*    fv__img
*
====================================================================================================*/

jQuery(function ($) {
	var $images = $('.fv__slide img');

	$images.css('opacity', 0);

	// 画像をランダムにフェードインさせる順番を生成
	var order = [];
	$images.each(function (index) {
		order.push(index);
	});

	// ランダムに並べ替える
	order = order.sort(function () {
		return Math.random() - 0.5;
	});

	// 順番にフェードインさせる
	$.each(order, function (index, value) {
		$images.eq(value).delay(500 * index).animate({ opacity: 1 }, 1000);
	});
});

/*====================================================================================================
*
*    fade-in
*
====================================================================================================*/

// その場でフェードイン
jQuery(function ($) {
	$(window).on('load scroll', function () {

		var box = $('.fadeIn');
		var animated = 'animated';

		box.each(function () {

			var boxOffset = $(this).offset().top;
			var scrollPos = $(window).scrollTop();
			var wh = $(window).height();

			if (scrollPos > boxOffset - wh + 100) {
				$(this).addClass(animated);
			}
		});
	});
})

/*====================================================================================================
*
*   Swiper
*
====================================================================================================*/

const swiper = new Swiper('.swiper', {

	// Optional parameters
	loop: true,
	speed: 3000,// スライドが移動する速さ（ms）
	autoplay: {
		// 自動再生
		disableOnInteraction: false,
		delay: 0, // 1秒後に次のスライド（初期値：3000）
	},

	// freeMode: true,
	freeModeMomentum: false,

	// If we need pagination
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	clickable: true, // クリック有効化
	// },

	// スライドの表示枚数
	slidesPerView: 2,
	spaceBetween: 18,

	breakpoints: {

		// スライドの表示枚数：600px以上の場合
		600: {
			slidesPerView: 3,
			spaceBetween: 30,

		},
	},
	centeredSlides: true, // アクティブなスライドを中央にする
	slidesOffsetBefore: 100, // ←左余白
	// slidesOffsetAfter: 24,  // ←右余白
});

/*====================================================================================================
*
*   スクロールボタン
*
====================================================================================================*/

$(window).on('scroll', function () {
	if ($(this).scrollTop() > 100) {
		$('#js-page-top').addClass('is-show');
	} else {
		$('#js-page-top').removeClass('is-show');
	}
});