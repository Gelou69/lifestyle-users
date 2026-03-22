const cur = document.getElementById('cur'), ring = document.getElementById('ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY });
    (function a() {
      rx += (mx - rx) * .12; ry += (my - ry) * .12;
      cur.style.cssText = `left:${mx}px;top:${my}px`;
      ring.style.cssText = `left:${rx}px;top:${ry}px`;
      requestAnimationFrame(a);
    })();
    document.querySelectorAll('a,button,.tcard,.pcat,.pillar,.eitem,.ac-step').forEach(el => {
      el.addEventListener('mouseenter', () => { cur.classList.add('h'); ring.classList.add('h') });
      el.addEventListener('mouseleave', () => { cur.classList.remove('h'); ring.classList.remove('h') });
    });


    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => nav.classList.toggle('s', window.scrollY > 70));


    document.getElementById('ham').addEventListener('click', () => document.getElementById('mob').classList.toggle('open'));
    function cm() { document.getElementById('mob').classList.remove('open') }


    const obs = new IntersectionObserver(ents => {
      ents.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') });
    }, { threshold: .1 });
    document.querySelectorAll('.rev').forEach(r => obs.observe(r));

    // Media slideshow
    (function initSlideshow() {
      const slides = document.querySelectorAll('#mediaSlideshow .slide');
      if (!slides.length) return;
      let index = 0;
      const cycle = () => {
        slides.forEach((slide, i) => {
          const video = slide.querySelector('video');
          if (i === index) {
            slide.classList.add('active');
            if (video) video.play().catch(() => {});
          } else {
            slide.classList.remove('active');
            if (video) {
              video.pause();
              video.currentTime = 0;
            }
          }
        });
        index = (index + 1) % slides.length;
      };
      cycle();
      setInterval(cycle, 7000);
    })();