(function () {
  const order = window.SLIDE_ORDER || [];
  const sections = new Map();
  document.querySelectorAll('.slide').forEach(s => sections.set(s.id, s));

  const pagerLabel = document.getElementById('pager-label');

  function show(id) {
    if (!sections.has(id)) id = order[0];
    sections.forEach((el, key) => {
      el.classList.toggle('is-active', key === id);
    });
    const idx = order.indexOf(id);
    if (idx >= 0 && pagerLabel) {
      pagerLabel.textContent = `${idx + 1} / ${order.length} · ${id}`;
    }
    document.title = `${id} · VirtualLiveTRPG 線上推廣企劃`;
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'auto' : 'auto' });
  }

  function currentId() {
    const h = (location.hash || '').replace(/^#/, '');
    return sections.has(h) ? h : order[0];
  }

  function go(delta) {
    const cur = currentId();
    let idx = order.indexOf(cur);
    if (idx < 0) idx = 0;
    idx = Math.max(0, Math.min(order.length - 1, idx + delta));
    const next = order[idx];
    if (next !== cur) location.hash = next;
    else show(next);
  }

  window.addEventListener('hashchange', () => show(currentId()));
  document.querySelectorAll('.pager-btn').forEach(btn => {
    btn.addEventListener('click', () => go(btn.dataset.act === 'next' ? 1 : -1));
  });
  document.addEventListener('keydown', (e) => {
    if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); go(1); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(-1); }
    else if (e.key === 'Home') { e.preventDefault(); location.hash = order[0]; }
    else if (e.key === 'End') { e.preventDefault(); location.hash = order[order.length - 1]; }
  });

  show(currentId());
})();
