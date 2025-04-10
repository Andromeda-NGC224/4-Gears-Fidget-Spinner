import css from './OrderBtn.module.css';

type OrderBtnProps = {
  style?: React.CSSProperties;
};

const OrderBtn = ({ style }: OrderBtnProps) => {
  return (
    <button style={style} className={css.orderButton}>
      Замовити
    </button>
  );
};

export default OrderBtn;
