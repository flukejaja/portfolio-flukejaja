import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap-trial/dist/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';

function TimelineAnimation() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
    gsap.defaults({ ease: 'none' });

    const pulses = gsap.timeline({
      defaults: {
        duration: 0.05,
        autoAlpha: 1,
        scale: 2,
        transformOrigin: 'center',
        ease: 'elastic(2.5, 1)',
      },
    }).to('.ball02, .text01', {}, 0.2)
      .to('.ball03, .text02', {}, 0.33)
      .to('.ball04, .text03', {}, 0.46);

    gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: svg,
        scrub: true,
        start: 'top center',
        end: 'bottom center',
      },
    }).to('.ball01', { duration: 0.01, autoAlpha: 1 })
      .from('.theLine', { drawSVG: 1 }, 0)
      .to('.ball01', {
        motionPath: {
          path: '.theLine',
          align: '.theLine',
          alignOrigin: [0.5, 0.5],
        },
      }, 0)
      .add(pulses, 0);
  }, []);

  return (
    <div className='bg-pink-600'>
      <h1 className="header-section">Scroll to see a timeline animation</h1>

      <svg ref={svgRef} viewBox="0 0 600 600" width="100" height="800">
        <path
          d="M -2,0 Q 300 153 200 300 T 86 500 Q 67 567 200 667 T 100 400"
          className="theLine"
          fill="none"
          stroke="white"
          strokeWidth="5"
        />
      </svg>
    </div>)
}
export default TimelineAnimation