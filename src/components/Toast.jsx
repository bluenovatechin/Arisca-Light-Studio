import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';

export default function Toast() {
  const { toasts, removeToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        if (toast.type === 'info') Icon = Info;
        if (toast.type === 'warning' || toast.type === 'error') Icon = AlertCircle;

        return (
          <div key={toast.id} className={`toast-card toast-${toast.type}`}>
            <Icon className="toast-icon" size={20} />
            <div className="toast-content">{toast.message}</div>
            <button
              className="toast-close"
              onClick={() => removeToast(toast.id)}
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
