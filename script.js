$(document).ready(function() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const upper = $('#upper');
  const upperRow = $('#upper-row');
  const main = $('#main');
  const low = $('#low');
  const lslider = $('#ls');
  const h1 = (21.9284294 * height) / 100;
  const s1h = (16.92 * height) / 100;
  const hh1 = (11.9284294 * height) / 100;
  const h2 = ((80.1908549 * height) / 100) - 2;
  const tr = (66.6 * height) / 100;
  const sliderh = (7 * height) / 100;
  const style1 = $("#style1");
  const tx = (80 * width) / 100;
  const ty = (67 * height) / 100;
  const template_t = $("#template-trigger");
  const lower = $("#lower");
  const e_elements = $("#main > *");

  upper.css('height', hh1)
  upperRow.css('height', hh1);
  main.css('height', h2);
  low.css('height', h1);
  low.css('transform', "translateY(" + tr + "px)");
  lslider.css('height', sliderh);
  style1.css('height', s1h + sliderh + 12);
  template_t.css('top', ty + "px");
  template_t.css('left', tx + "px");

  template_t.click(() => {
    low.fadeToggle()
    lower.fadeToggle();
  });


});