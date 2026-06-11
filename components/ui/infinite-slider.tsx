'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
  children: ReactNode;
  gap?: number;
  duration?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const size = direction === 'horizontal' ? width : height;
    if (size === 0) return;

    const contentSize = size + gap;
    const from = reverse ? -contentSize : 0;
    const to = reverse ? 0 : -contentSize;

    // 1. If the user is hovering, completely stop the controls right here
    if (isPaused) {
      return;
    }

    // 2. Otherwise, start animating cleanly from its exact current pixel position
    const currentPos = translation.get();
    
    // Ensure position wraps around cleanly if it overshoots the boundaries
    const startPos = currentPos === to ? from : currentPos;
    
    // Calculate exact remaining time for this partial segment loop to maintain perfect uniform speed
    const remainingDistance = Math.abs(startPos - to);
    const segmentDuration = duration * (remainingDistance / contentSize);

    const controls = animate(translation, [startPos, to], {
      ease: 'linear',
      duration: segmentDuration,
      onComplete: () => {
        // Reset seamlessly back to start when a loop completes
        translation.set(from);
        
        // Kick off the infinite loop cycles
        const loopControls = animate(translation, [from, to], {
          ease: 'linear',
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 0,
          onRepeat: () => {
            translation.set(from);
          },
        });
        return loopControls.stop;
      },
    });

    return () => controls.stop();
  }, [width, height, gap, isPaused, duration, direction, reverse, translation]);

  // Handle local hover states cleanly without messing with speed timelines
  const hoverProps = {
    onHoverStart: () => setIsPaused(true),
    onHoverEnd: () => setIsPaused(false),
  };

  return (
    <div className={cn('overflow-hidden w-full', className)}>
      <motion.div
        className='flex w-max'
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        {...hoverProps}
      >
        <div 
          ref={ref} 
          className='flex shrink-0' 
          style={{ 
            gap: `${gap}px`,
            flexDirection: direction === 'horizontal' ? 'row' : 'column' 
          }}
        >
          {children}
        </div>
        
        <div 
          className='flex shrink-0' 
          style={{ 
            gap: `${gap}px`,
            flexDirection: direction === 'horizontal' ? 'row' : 'column' 
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}