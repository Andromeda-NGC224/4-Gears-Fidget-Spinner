'use client';

export interface GlobalErrorProps {
  error: Error;
}

export default function GlobalErrorComponent({ error }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>{`Something globally went wrong: ${error.message}`}</p>
        </div>
      </body>
    </html>
  );
}
