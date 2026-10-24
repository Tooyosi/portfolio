'use strict';

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const filters = document.querySelector('.filters');
const projects = [...document.querySelectorAll('.project-card')];
const count = document.querySelector('#project-count');

if (filters && count) {
  filters.hidden = false;
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    const category = button.dataset.filter;
    for (const project of projects) {
      project.hidden = category !== 'all' && project.dataset.category !== category;
    }
    for (const filter of filters.querySelectorAll('button')) {
      const selected = filter === button;
      filter.classList.toggle('is-active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    }
    const visible = projects.filter((project) => !project.hidden).length;
    count.textContent = `${visible} contribution${visible === 1 ? '' : 's'}`;
  });
}

// Animate only when motion is welcome. Content stays visible without JavaScript.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealTargets = document.querySelectorAll(
  '.section-heading, .contribution-card, .ui-card, .career-entry, .about-copy, .contact-heading'
);
let revealObserver;
const activeReveals = new Set();

function startReveals() {
  if (motionPreference.matches || !('IntersectionObserver' in window) ||
      typeof Element.prototype.animate !== 'function') return;

  revealObserver = new IntersectionObserver((entries) => {
    const visibleEntries = entries.filter((entry) => entry.isIntersecting);
    visibleEntries.forEach((entry, index) => {
      const animation = entry.target.animate(
        [{ opacity: 0, transform: 'translateY(18px)' },
          { opacity: 1, transform: 'translateY(0)' }],
        { duration: 600, delay: Math.min(index * 70, 210),
          easing: 'cubic-bezier(.2,.65,.3,1)', fill: 'backwards' }
      );
      activeReveals.add(animation);
      animation.onfinish = () => activeReveals.delete(animation);
      animation.oncancel = () => activeReveals.delete(animation);
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  revealTargets.forEach((target) => revealObserver.observe(target));
}

startReveals();
motionPreference.addEventListener('change', () => {
  revealObserver?.disconnect();
  activeReveals.forEach((animation) => animation.cancel());
  if (!motionPreference.matches) startReveals();
});
