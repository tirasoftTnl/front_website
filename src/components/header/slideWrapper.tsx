import React from 'react';
import clsx from 'clsx';

export function SlideWrapper(props: {
  index: number;
  hovering: number | null;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        'absolute w-full transition-all duration-300',
        props.hovering === props.index ? 'opacity-100' : 
        'opacity-0 pointer-events-none',
        props.hovering === props.index 
        ? 'transform-none' 
        : props.hovering! > props.index
        ? "-translate-x-2"
        : "translate-x-2",
      )}
    >
      {props.children}
    </div>
  );
}