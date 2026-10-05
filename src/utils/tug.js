// Replays the "cord pulled" animation on a pull-switch button. Removing the
// class, forcing a reflow, then re-adding it restarts the CSS animation even
// when the switch is clicked again mid-animation.
export function tug(el) {
  if (!el) return;
  el.classList.remove('is-tugging');
  void el.offsetWidth;
  el.classList.add('is-tugging');
  clearTimeout(el._tugTimer);
  el._tugTimer = setTimeout(() => el.classList.remove('is-tugging'), 700);
}
