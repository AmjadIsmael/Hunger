import './Toast.css'

const copy = {
  en: {
    added: 'Added to cart',
    addedCombo: 'Added as combo',
    removed: 'Removed from cart',
    cleared: 'Cart cleared',
    viewCart: 'View Cart',
  },
  ar: {
    added: 'أضيف إلى السلة',
    addedCombo: 'أضيف كوجبة',
    removed: 'أزيل من السلة',
    cleared: 'تم إفراغ السلة',
    viewCart: 'عرض السلة',
  },
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12l5 5L20 6" />
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M9 3h6l1 4H8l1-4ZM6 7l1 14h10l1-14M10 11v6M14 11v6" />
    </svg>
  )
}

function Toast({ kind, item, leaving, language, onViewCart }) {
  if (!item && kind !== 'clear') return null
  const content = copy[language]
  const isRemoval = kind === 'remove' || kind === 'clear'

  const message = kind === 'clear'
    ? content.cleared
    : kind === 'remove'
      ? content.removed
      : item.combo
        ? content.addedCombo
        : content.added

  return (
    <div className={`toast-viewport${leaving ? ' leaving' : ''}`} role="status" aria-live="polite">
      <div className="toast">
        <span className={`toast-check${isRemoval ? ' removal' : ''}`}>
          {isRemoval ? <TrashIcon /> : <CheckIcon />}
        </span>
        {item && <img className="toast-image" src={item.image} alt="" />}
        <div className="toast-info">
          {item && <strong>{item.name[language]}</strong>}
          <span>{message}</span>
        </div>
        {kind === 'add' && (
          <button type="button" className="toast-view-cart" onClick={onViewCart}>
            {content.viewCart}
          </button>
        )}
      </div>
    </div>
  )
}

export default Toast
