import { CheckIcon, TrashIcon } from './Icons'
import '../styles/Toast.css'

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
