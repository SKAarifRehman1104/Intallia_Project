import React from 'react';

export type BadgeType = 'demand' | 'hot' | 'favorite';

interface BadgeProps {
  type: BadgeType;
  label: string;
  selected?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({ type, label, selected = false }) => {
  const getBadgeStyles = (): string => {
    const base = 'border rounded-full text-sm font-medium inline-flex items-center gap-1.5 px-3 py-1.5 transition-all duration-200';
    const color =
      type === 'demand'
        ? selected
          ? 'border-white text-white'
          : 'border-rose-500 bg-white'
        : type === 'hot'
        ? selected
          ? 'border-white text-white'
          : 'border-orange-500 bg-white'
        : type === 'favorite'
        ? selected
          ? 'border-white text-white'
          : 'border-red-500 bg-white'
        : 'border-gray-300 text-gray-700 bg-white';

    return `${base} ${color}`;
  };

  const getIcon = (): React.ReactNode => {
    return (
      <span className={`flex-shrink-0 ${!selected ? getIconColorClass(type) : "text-white"}`}>
        {type === 'demand' && (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 7L13 15L9 11L3 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 7H15M21 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {type === 'hot' && (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.25C10.0716 4.16289 9 6.72352 9 9.375C9 12.0265 10.0716 14.5871 12 16.5C13.9284 14.5871 15 12.0265 15 9.375C15 6.72352 13.9284 4.16289 12 2.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16.5C15.3137 16.5 18 14.2614 18 11.5C18 9.5 16.5 8 15.75 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.25 7.5C7.5 8 6 9.5 6 11.5C6 14.2614 8.68629 16.5 12 16.5C15.3137 16.5 18 18.7386 18 21.5H6C6 18.7386 8.68629 16.5 12 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {type === 'favorite' && (
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20.25L3.75 12C3.75 12 2.25 10.5 2.25 9C2.25 7.5 3 5.25 5.25 5.25C7.5 5.25 9 6.75 9 6.75L12 9.75L15 6.75C15 6.75 16.5 5.25 18.75 5.25C21 5.25 21.75 7.5 21.75 9C21.75 10.5 20.25 12 20.25 12L12 20.25Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
    );
  };

  const getIconColorClass = (type: BadgeType): string => {
    switch (type) {
      case 'demand':
        return 'text-rose-600';
      case 'hot':
        return 'text-orange-600';
      case 'favorite':
        return 'text-red-600';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div className={getBadgeStyles()}>
      {getIcon()}
      <span className={`${!selected ? "text-black" : ""}`}>{label}</span>
    </div>
  );
};
