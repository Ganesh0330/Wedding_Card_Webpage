import React, { useEffect } from 'react';

export default function ToastNotification({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3200);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div id="royal-toast" className="royal-toast-pill" role="status" aria-live="polite">
      {message}
    </div>
  );
}
