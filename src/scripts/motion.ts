// El contenido siempre es visible. Las entradas se animan una sola vez, al llegar a ellas.
const media = matchMedia('(prefers-reduced-motion: reduce)');
const root = document.documentElement;
const toggle = document.querySelector<HTMLInputElement>('[data-motion-toggle]');
const animations = new Set<Animation>();
let paused = false;
try { paused = sessionStorage.getItem('sanuk:motion') === 'paused'; } catch { /* almacenamiento opcional */ }

const update = () => {
  const running = !paused && !media.matches;
  root.dataset.motion = running ? 'running' : 'paused';
  if (!running) animations.forEach((animation) => animation.finish());
  if (toggle) {
    toggle.closest('label')!.hidden = media.matches;
    toggle.checked = running;
  }
};
update();
toggle?.addEventListener('change', () => {
  paused = !toggle.checked;
  try { sessionStorage.setItem('sanuk:motion', paused ? 'paused' : 'running'); } catch { /* opcional */ }
  update();
});
media.addEventListener('change', update);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (paused || media.matches) continue;
      if (entry.target.matches('.rm')) entry.target.setAttribute('data-arrived', '');
      const animation = entry.target.animate(
        [{ transform: 'translateY(12px)' }, { transform: 'translateY(0)' }],
        { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)' },
      );
      animations.add(animation);
      animation.finished.then(() => animations.delete(animation)).catch(() => animations.delete(animation));
    }
  }, { threshold: 0.12 });
  document.querySelectorAll('.hero-txt, .hero-noi, .section h2, .section .card, .rm').forEach((element) => observer.observe(element));
}
