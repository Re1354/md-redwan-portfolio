import React from 'react';
import { ArrowDownIcon, ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'inverse';
type IconKind = 'right' | 'down' | 'external';

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  icon?: IconKind;
  external?: boolean;
  download?: boolean | string;
};

const variantClasses: Record<Variant, string> = {
  primary: 'bg-ink text-paper shadow-soft hover:bg-accent',
  secondary: 'border border-line bg-white text-ink shadow-soft hover:border-ink/40',
  inverse: 'bg-bone text-ink hover:bg-white'
};

const iconMotion: Record<IconKind, string> = {
  right: 'group-hover:translate-x-0.5',
  down: 'group-hover:translate-y-0.5',
  external: 'group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
};

export function ActionLink({
  href,
  children,
  variant = 'primary',
  icon = 'right',
  external = false,
  download = false
}: ActionLinkProps) {
  const Icon = icon === 'down' ? ArrowDownIcon : icon === 'external' ? ArrowUpRightIcon : ArrowRightIcon;
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      download={download ? (typeof download === 'string' ? download : true) : undefined}
      className={`group inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5 text-[14px] font-semibold transition-[background-color,border-color,color,transform] duration-150 ease-out active:scale-[0.98] ${variantClasses[variant]}`}>
      
      {children}
      <Icon
        aria-hidden="true"
        className={`h-4 w-4 transition-transform duration-150 ease-out ${iconMotion[icon]}`}
        strokeWidth={1.75} />
      
    </a>);

}