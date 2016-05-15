var mq = window.matchMedia( "(max-width: 768px)" );
var feature_icon = $('.feature-icon');

if (mq.matches) {
  // window width is 768px or less
  feature_icon.css('color', 'rgba(255, 76, 0, 0.67)');
} else {
  // window width is greater than 768px
}
