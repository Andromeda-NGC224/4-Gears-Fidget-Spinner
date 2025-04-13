'use client';

import { useState } from 'react';
import css from './OrderBtn.module.css';
import OrderModal from '@/app/[locale]/components/OrderModal/OrderModal';

type OrderBtnProps = {
  style?: React.CSSProperties;
  className?: string;
};

const OrderBtn = ({ style, className }: OrderBtnProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        style={style}
        className={`${css.orderButton} ${className || ''}`}
      >
        Замовити
      </button>
      {isModalOpen && <OrderModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default OrderBtn;
