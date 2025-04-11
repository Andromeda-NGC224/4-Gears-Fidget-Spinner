import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import css from './OrderModal.module.css';
import { XMarkIcon } from '@heroicons/react/24/outline';

type OrderModalProps = {
  onClose: () => void;
};

const OrderModal = ({ onClose }: OrderModalProps) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const onSubmit = (data: unknown) => {
    console.log(data);
    onClose();
    reset();
  };

  return (
    <div className={css.modalContainer}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={css.overlay}
        onClick={onClose}
        role="button"
        tabIndex={0}
        aria-label="Закрити модалку"
      />

      <div className={css.modalWrapper}>
        <motion.div
          initial={{ scale: 0.95, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 50 }}
          className={css.modalContent}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button
            onClick={onClose}
            className={css.closeButton}
            aria-label="Закрити"
          >
            <XMarkIcon className={css.closeIcon} />
          </button>

          <h1 id="modal-title" className={css.title}>
            Форма замовлення
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
            <div className={css.formGroup}>
              <label htmlFor="name" className={css.label}>
                <input
                  {...register('name', { required: true })}
                  id="name"
                  type="text"
                  className={css.input}
                  required
                  placeholder="Ім'я"
                />
              </label>
            </div>

            <div className={css.formGroup}>
              <label htmlFor="surname" className={css.label}>
                <input
                  {...register('surname', { required: true })}
                  id="surname"
                  type="text"
                  className={css.input}
                  required
                  placeholder="Прізвище"
                />
              </label>
            </div>

            <fieldset className={css.contactMethods}>
              <legend className={css.legend}>Спосіб зв'язку</legend>
              {['Telegram', 'WhatsApp', 'Viber'].map((method) => (
                <label key={method} className={css.radioLabel}>
                  <input
                    {...register('contactMethod', { required: true })}
                    type="radio"
                    value={method}
                    className={css.radioInput}
                  />
                  <span>{method}</span>
                </label>
              ))}
            </fieldset>

            <div className={css.formGroup}>
              <label htmlFor="phoneNumber" className={css.label}>
                <input
                  {...register('phoneNumber', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  id="phoneNumber"
                  type="phoneNumber"
                  className={css.input}
                  required
                  placeholder="Номер телефону"
                />
              </label>
            </div>

            <div className={css.formGroup}>
              <label htmlFor="email" className={css.label}>
                <input
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  id="email"
                  type="email"
                  className={css.input}
                  required
                  placeholder="E-mail"
                />
              </label>
            </div>

            <button type="submit" className={css.submitButton}>
              Замовити
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderModal;
