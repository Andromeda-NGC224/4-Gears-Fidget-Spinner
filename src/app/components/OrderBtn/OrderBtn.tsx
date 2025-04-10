import css from './OrderBtn.module.css';

type OrderBtnProps = {
  style?: React.CSSProperties;
  className?: string;
};

const OrderBtn = ({ style, className }: OrderBtnProps) => {
  return (
    <button style={style} className={`${css.orderButton} ${className || ''}`}>
      Замовити
    </button>
  );
};

export default OrderBtn;
