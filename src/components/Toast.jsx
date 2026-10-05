import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, Info, AlertCircle, X, ArrowRight } from 'lucide-react';

const ACTIONS = {
  cart: 'View basket',
  wishlist: 'View saved'
};

export default function Toast({ onNavigate }) {
  const { toasts, removeToast, openCart } = useCart();

  const runAction = (toast) => {
    removeToast(toast.id);
    if (toast.action === 'cart') openCart();
    if (toast.action === 'wishlist') onNavigate?.('/wishlist');
  };

  return (
    <div className="toast-container" aria-live="polite" aria-atomic="true">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        if (toast.type === 'info') Icon = Info;
        if (toast.type === 'warning' || toast.type === 'error') Icon = AlertCircle;

        return (
          <div key={toast.id} className={`toast-card toast-${toast.type}`} role="status">
            {toast.image ? (
              <span className="toast-thumb">
                <img src={toast.image} alt="" />
                <Icon className="toast-thumb-icon" size={16} aria-hidden="true" />
              </span>
            ) : (
              <span className="toast-icon"><Icon size={18} aria-hidden="true" /></span>
            )}

            <div className="toast-content">
              {toast.title && <strong className="toast-title">{toast.title}</strong>}
              <span className="toast-message">{toast.message}</span>
            </div>

            {toast.action && (
              <button type="button" className="toast-action" onClick={() => runAction(toast)}>
                {ACTIONS[toast.action]} <ArrowRight size={14} />
              </button>
            )}

            <button
              type="button"
              className="toast-close"
              onClick={() => removeToast(toast.id)}
              aria-label="Dismiss notification"
            >
              <X size={15} />
            </button>
            <span className="toast-timer" style={{ animationDuration: `${toast.duration || 3600}ms` }} aria-hidden="true" />
          </div>
        );
      })}
    </div>
  );
}
