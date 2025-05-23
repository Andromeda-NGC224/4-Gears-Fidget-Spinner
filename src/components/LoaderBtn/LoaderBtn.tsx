'use client';

import { useState } from 'react';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import css from './LoaderBtn.module.css';

interface LoaderBtn {
  pages?: number;
  className?: string;
}

const LoaderBtn = ({ pages = 5, className }: LoaderBtn) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(pages, prev + 1));
  };

  return (
    <div className={`${css.btnContainer} ${className || ''}`}>
      <button
        className={css.prevArrow}
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        <IoIosArrowDropleftCircle size={45} />
      </button>

      {pages === 0 ? (
        <span className={`${css.paging} ${css.active}`} />
      ) : (
        <div className={css.pagination}>
          {Array.from({ length: pages }).map((_, index) => (
            <span
              key={index}
              className={`${css.paging} ${
                index + 1 === currentPage ? css.active : ''
              }`}
            />
          ))}
        </div>
      )}

      <button
        className={css.nextArrow}
        onClick={handleNext}
        disabled={currentPage === pages}
      >
        <IoIosArrowDroprightCircle size={45} />
      </button>
    </div>
  );
};

export default LoaderBtn;
