var $slideContainer = null;
var maxSlideIndex = 0;
var currentSlideIndex = 0;

$(document).ready(function() {
  $slideContainer = $('.slide-container');
  maxSlideIndex = $('.slide').length - 1;
  setArrowContainerVisibilty();

  $('.arrow-container-left').click(function(event) {
    event.preventDefault();
    if (currentSlideIndex > 0) {
      currentSlideIndex--;
      setCurrentSlide();
    }
  });

  $('.arrow-container-right').click(function(event) {
    event.preventDefault();
    if (currentSlideIndex < maxSlideIndex) {
      currentSlideIndex++;
      setCurrentSlide();
    }
  });

  $('.bullet a').click(function(event) {
    event.preventDefault();
    currentSlideIndex = $(this).closest('.bullet').index();
    setCurrentSlide();
  });

  var shouldHideMessage = getBrowserInfo()[0] !== 'Safari';
  $('.browser-warning').toggleClass('hide', shouldHideMessage);
});

var setCurrentSlide = function() {
  $slideContainer.attr('data-active-slide', currentSlideIndex);
  setCurrentBullet();
  setArrowContainerVisibilty();
};

var setCurrentBullet = function() {
  $('.bullet.is-current').removeClass('is-current');
  $('.bullet:eq(' + currentSlideIndex + ')').addClass('is-current');
};

var setArrowContainerVisibilty = function() {
  $('.arrow-container-left').toggleClass('arrow-container-active', currentSlideIndex > 0);
  $('.arrow-container-right').toggleClass('arrow-container-active', currentSlideIndex < maxSlideIndex);
};

var getBrowserInfo = function() {
  var N= navigator.appName, ua= navigator.userAgent, tem;
  var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
  if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
  M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
  return M;
};
