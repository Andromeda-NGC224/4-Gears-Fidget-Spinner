'use client';

import { Fredoka } from 'next/font/google';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalErrorComponent({
  error,
  reset,
}: GlobalErrorProps) {
  return (
    <html>
      <body className={fredoka.className}>
        <div>
          <h2>Щось пішло не так!</h2>
          <p>{`Помилка: ${error.message}`}</p>
          <button onClick={reset}>Спробувати знову</button>
        </div>
      </body>
    </html>
  );
}
