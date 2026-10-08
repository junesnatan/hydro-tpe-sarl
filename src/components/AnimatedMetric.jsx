import React, { useState, useEffect, useRef } from 'react';

export const AnimatedMetric = ({ 
  value, 
  duration = 2000 
}) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  // Parse value structure
  // Examples: "18+", "350+", "12/12", "1.8M+", "100%"
  const parseMetric = (valStr) => {
    if (valStr === '18+') return { target: 18, decimals: 0, suffix: '+' };
    if (valStr === '350+') return { target: 350, decimals: 0, suffix: '+' };
    if (valStr === '12/12') return { target: 12, decimals: 0, suffix: '/12' };
    if (valStr === '1.8M+') return { target: 1.8, decimals: 1, suffix: 'M+' };
    if (valStr === '100%') return { target: 100, decimals: 0, suffix: '%' };

    // Fallback parser
    const numMatch = valStr.match(/[\d.]+/);
    if (!numMatch) return { target: 0, decimals: 0, suffix: valStr };
    const target = parseFloat(numMatch[0]);
    const decimals = numMatch[0].includes('.') ? numMatch[0].split('.')[1].length : 0;
    const suffix = valStr.replace(numMatch[0], '');
    return { target, decimals, suffix };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const { target, decimals, suffix } = parseMetric(value);
          let startTime = null;

          const easeOutQuad = (t) => t * (2 - t);

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuad(progress);
            const current = easedProgress * target;

            const formattedNum = decimals > 0 
              ? current.toFixed(decimals) 
              : Math.floor(current).toString();

            setDisplayValue(`${formattedNum}${suffix}`);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              const finalNum = decimals > 0 ? target.toFixed(decimals) : target.toString();
              setDisplayValue(`${finalNum}${suffix}`);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {hasAnimated ? displayValue : '0'}
    </span>
  );
};
