'use client';

import { useState } from 'react';

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div>
      {items.map((item, idx) => (
        <div key={idx} className={`faq-item${openIndex === idx ? ' is-open' : ''}`}>
          <button
            className="faq-item__question"
            onClick={() => toggle(idx)}
            aria-expanded={openIndex === idx}
          >
            {item.question}
            <span className="faq-item__icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
            </span>
          </button>
          <div className="faq-item__answer" style={{ maxHeight: openIndex === idx ? '500px' : '0' }}>
            <div className="faq-item__answer-inner">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
