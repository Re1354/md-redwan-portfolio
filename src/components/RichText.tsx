import React from 'react';

type RichTextProps = {
  text: string;
  strongClassName?: string;
};

// Renders **marked** segments as emphasized text.
export function RichText({ text, strongClassName = 'font-semibold text-ink' }: RichTextProps) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
      i % 2 === 1 ?
      <strong key={i} className={strongClassName}>
            {part}
          </strong> :

      <React.Fragment key={i}>{part}</React.Fragment>

      )}
    </>);

}