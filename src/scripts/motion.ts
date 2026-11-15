// El contenido siempre es visible. Las entradas se animan una sola vez, al llegar a ellas.
const media = matchMedia('(prefers-reduced-motion: reduce)');
const root = document.documentElement;
const button = document.querySelector<HTMLButtonElement>('[data-motion-toggle]');
const animations = new Set<Animation>();
let paused = media.matches;
try { paused ||= sessionStorage.getItem('sanuk:motion') === 'paused'; } catch { /* almacenamiento opcional */ }

const update = () => {
  root.dataset.motion = paused ? 'paused' : 'running';
  if (paused) animations.forEach((animation) => animation.finish());
  if (button) {
    button.hidden = false;
    button.textContent = paused ? 'Activar animaciones' : 'Pausar animaciones';
    button.setAttribute('aria-pressed', String(paused));
  }
};
update();
button?.addEventListener('click', () => {
  paused = !paused;
  try { sessionStorage.setItem('sanuk:motion', paused ? 'paused' : 'running'); } catch { /* opcional */ }
  update();
});
media.addEventListener('change', () => { paused = media.matches; update(); });

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (paused || media.matches) continue;
      if (entry.target.matches('.rm')) entry.target.setAttribute('data-arrived', '');
      const animation = entry.target.animate(
        [{ opacity: 0.25, transform: 'translateY(24px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)' },
      );
      animations.add(animation);
      animation.finished.then(() => animations.delete(animation)).catch(() => animations.delete(animation));
    }
  }, { threshold: 0.12 });
  document.querySelectorAll('.hero-txt, .hero-noi, .section h2, .section .card, .rm').forEach((element) => observer.observe(element));
}
