import type React from 'react';

import { cn } from '@/lib/utils';

interface MaterialIconProps {
  name: string;
  filled?: boolean;
  size?: number;
  className?: string;
}

export const MaterialIcon = ({
  name,
  filled = false,
  size,
  className,
}: MaterialIconProps): React.ReactElement => {
  const style: React.CSSProperties = {};
  if (filled) {
    style.fontVariationSettings = "'FILL' 1";
  }
  if (size) {
    style.fontSize = `${size}px`;
  }

  return (
    <span
      className={cn('material-symbols-outlined', className)}
      style={Object.keys(style).length > 0 ? style : undefined}
      aria-hidden="true"
    >
      {name}
    </span>
  );
};
