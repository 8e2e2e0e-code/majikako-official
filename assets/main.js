// 마지카코 majikako_onna — brand page
// 스크롤 등장 애니메이션 + 연도 표기 (그 외 외부 스크립트 없음)

(function () {
  // 현재 연도
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = String(new Date().getFullYear());

  // 스크롤 등장
  var items = document.querySelectorAll('.fi');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('vis'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('vis');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  items.forEach(function (el, i) {
    el.style.transitionDelay = (i % 4) * 60 + 'ms';
    io.observe(el);
  });
})();
