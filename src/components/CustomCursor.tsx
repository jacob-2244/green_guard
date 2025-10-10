// components/CustomCursor.tsx
'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Correctly type the event as MouseEvent
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor fixed pointer-events-none w-4 h-4 rounded-full bg-green-500 mix-blend-difference z-[9999] transition-transform duration-75"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default CustomCursor;
