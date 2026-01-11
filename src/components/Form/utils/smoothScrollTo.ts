type TScrollOptions = {
  duration?: number;
  easing?: "easeInOutCubic" | "easeOutQuad" | "easeInQuad";
  offset?: number;
  callback?: () => void;
};

export function smoothScrollTo(element: Nullable<Element>, options: TScrollOptions = {}) {
  const { duration = 600, easing, offset = 0, callback } = options;

  if (!element) return;

  const targetRect = element.getBoundingClientRect();
  const startPosition = window.scrollY;
  const targetPosition = targetRect.top + startPosition - offset;
  let startTime: number | null = null;

  function animate(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    let ease: Optional<number>;

    switch (easing) {
      case "easeInOutCubic":
        ease = easeInOutCubic(progress);
        break;
      case "easeInQuad":
        ease = easeInQuad(progress);
        break;
      case "easeOutQuad":
        ease = easeOutQuad(progress);
        break;
      default:
        ease = easeInOutCubic(progress);
        break;
    }

    window.scrollTo(0, startPosition + (targetPosition - startPosition) * ease);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      callback?.();
    }
  }

  requestAnimationFrame(animate);
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

function easeOutQuad(t: number): number {
  return 1 - (1 - t) * (1 - t);
}

function easeInQuad(t: number): number {
  return t * t;
}
