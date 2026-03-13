import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({ text, className = '' }) => {
  return (
    <svg
      viewBox="0 0 200 50"
      className={`w-full h-auto ${className}`}
      role="img"
      aria-label={text}
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-lg font-bold fill-current"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
