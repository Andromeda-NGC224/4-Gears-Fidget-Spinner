'use client';

import { useState } from 'react';
import css from './OrderBtn.module.css';
import OrderModal from '@/app/[locale]/components/OrderModal/OrderModal';
import { useTranslations } from 'next-intl';

type OrderBtnProps = {
  style?: React.CSSProperties;
  className?: string;
};

const OrderBtn = ({ style, className }: OrderBtnProps) => {
  const t = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        style={style}
        className={`${css.orderButton} ${className || ''}`}
      >
        {t('order')}
      </button>
      {isModalOpen && <OrderModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default OrderBtn;
