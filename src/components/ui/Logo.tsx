import React from 'react';
import { Sprout } from 'lucide-react';
import { cn } from '../../lib/utils';

interface LogoProps {
  className?: string;
  iconClassName?: string;
}

export function Logo({ className, iconClassName }: LogoProps) {
  return (
    <div className={cn("flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 via-[#f5f5dc] to-white shadow-sm shrink-0 border border-green-100", className)}>
      <Sprout className={cn("text-green-700 drop-shadow-sm", iconClassName)} />
    </div>
  );
}
