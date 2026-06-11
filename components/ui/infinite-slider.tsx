'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
  children: ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
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
  const [currentDuration, setCurrentDuration] = useState(duration);
  
  // CRITICAL FIX: Measure only the inner list so width represents exactly ONE loop cycle length
  const [ref, { width, height }] = useMeasure();
  
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === 'horizontal' ? width : height;
    
    // If the elements haven't rendered or measured yet, skip setting up controls
    if (size === 0) return;

    // The single track content size including its dynamic margin gap
    const contentSize = size + gap;
    const from = reverse ? -contentSize : 0;
    const to = reverse ? 0 : -contentSize;

    if (isTransitioning) {
      if (currentDuration === duration) {
        setIsTransitioning(false);
        controls = animate(translation, [translation.get(), to], {
          ease: 'linear',
          duration: duration * Math.abs((translation.get() - to) / contentSize),
          onComplete: () => {
            setKey((prevKey) => prevKey + 1);
          },
        });
      } else {
        controls = animate(translation, [translation.get(), to], {
          ease: 'easeOut',
          duration: 0.5,
          onComplete: () => {
            setIsTransitioning(false);
            setKey((prevKey) => prevKey + 1);
          },
        });
      }
    } else {
      // CONSTANT LOOP REGULAR PLAYBACK
      const currentPos = translation.get();
      // Ensure positioning wraps back around seamlessly inside single track limits
      const startPos = currentPos === to ? from : currentPos;
      
      controls = animate(translation, [startPos, to], {
        ease: 'linear',
        duration: currentDuration * Math.abs((startPos - to) / contentSize),
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentDuration,
    duration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = {
    onHoverStart: () => {
      setIsTransitioning(true);
      setCurrentDuration(999999);
    },
    onHoverEnd: () => {
      setIsTransitioning(true);
      setCurrentDuration(duration);
    },
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
        {/* FIRST TRACK PASSED TO THE MEASURE REF */}
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
        
        {/* SECOND TRACK REPLICATED SEAMLESSLY (Not measured, fills the loop window) */}
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