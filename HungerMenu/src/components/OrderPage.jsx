import { useMemo, useState } from 'react'
import Footer from './Footer'
import { formatPrice } from '../utils/currency'
import './OrderPage.css'

const copy = {
  en: {
    title: 'Your order',
    item: 'item',
    items: 'items',
    emptyTitle: 'Your cart is hungry',
    emptyText: 'Add something delicious from the menu and it will appear here.',
    remove: 'Remove',
    decrease: 'Decrease quantity',
    increase: 'Increase quantity',
    summary: 'Order summary',
    checkoutTitle: 'Checkout',
    fullName: 'Full Name',
    fullNamePlaceholder: 'Your full name',
    phone: 'Phone Number',
    phonePlaceholder: '03 000 000',
    deliveryMethod: 'Delivery method',
    deliveryAddress: 'Delivery Address',
    pickup: 'Pickup',
    address: 'Address',
    addressPlaceholder: 'Street, building, apartment no.',
    deliveryNote: 'Delivery Note (Optional)',
    notePlaceholder: 'Any extra instructions?',
    subtotal: 'Subtotal',
    delivery: 'Delivery',
    deliveryValue: 'Calculated on WhatsApp',
    total: 'Total',
    checkout: 'Place Order',
    note: 'Delivery fee is handled by the delivery service and will be calculated upon arrival.',
    messageTitle: 'Hello Hungers! I would like to place this order:',
    messageTotal: 'Total',
    customerDetails: 'Customer details',
  },
  ar: {
    title: 'طلبك',
    item: 'صنف',
    items: 'أصناف',
    emptyTitle: 'سلتك فارغة',
    emptyText: 'أضف وجبتك المفضلة من القائمة وستظهر هنا.',
    remove: 'إزالة',
    decrease: 'تقليل الكمية',
    increase: 'زيادة الكمية',
    summary: 'ملخص الطلب',
    checkoutTitle: 'إتمام الطلب',
    fullName: 'الاسم الكامل',
    fullNamePlaceholder: 'الاسم الكامل',
    phone: 'رقم الهاتف',
    phonePlaceholder: '03 000 000',
    deliveryMethod: 'طريقة الاستلام',
    deliveryAddress: 'توصيل إلى العنوان',
    pickup: 'استلام من المطعم',
    address: 'العنوان',
    addressPlaceholder: 'الشارع، المبنى، رقم الشقة',
    deliveryNote: 'ملاحظات التوصيل (اختياري)',
    notePlaceholder: 'أي تعليمات إضافية؟',
    subtotal: 'المجموع الفرعي',
    delivery: 'التوصيل',
    deliveryValue: 'يُحسب عبر واتساب',
    total: 'المجموع',
    checkout: 'تأكيد الطلب',
    note: 'تتولى خدمة التوصيل احتساب الرسوم، ويتم تحديدها عند الوصول.',
    messageTitle: 'مرحباً هنغرز! أود تقديم الطلب التالي:',
    messageTotal: 'المجموع',
    customerDetails: 'معلومات الزبون',
  },
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M9 3h6l1 4H8l1-4ZM6 7l1 14h10l1-14M10 11v6M14 11v6" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
      <path d="M8.3 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.5l.7 1.7c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.7 1.2 1.6 2.1 2.9 2.7.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.7.8c.3.2.5.3.5.5 0 .2-.1 1.2-.7 1.8-.6.6-1.4.8-2.3.6-1-.2-2.4-.7-4-2.1-1.2-1.1-2.1-2.4-2.5-3.4-.4-1-.4-1.8-.1-2.5l.8-.9Z" />
    </svg>
  )
}

const getItemPrice = (item) =>
  item.offer?.active ? item.offer.price : item.price

function OrderPage({
  language,
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  onBrowseMenu,
}) {
  const content = copy[language]
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    method: 'delivery',
    address: '',
    note: '',
  })

  const groupedItems = useMemo(() => {
    const groups = new Map()
    cartItems.forEach((item) => {
      const current = groups.get(item.id)
      groups.set(item.id, current
        ? { ...current, quantity: current.quantity + 1 }
        : { ...item, quantity: 1 })
    })
    return [...groups.values()]
  }, [cartItems])

  const total = groupedItems.reduce(
    (sum, item) => sum + getItemPrice(item) * item.quantity,
    0,
  )

  const updateCustomer = (field, value) => {
    setCustomer((details) => ({ ...details, [field]: value }))
  }

  const placeOrder = (event) => {
    event.preventDefault()
    const customerLines = [
      `${content.fullName}: ${customer.name}`,
      `${content.phone}: ${customer.phone}`,
      `${content.deliveryMethod}: ${
        customer.method === 'delivery' ? content.deliveryAddress : content.pickup
      }`,
    ]

    if (customer.method === 'delivery') {
      customerLines.push(`${content.address}: ${customer.address}`)
    }
    if (customer.note.trim()) {
      customerLines.push(`${content.deliveryNote}: ${customer.note}`)
    }

    const whatsappMessage = [
      content.messageTitle,
      '',
      ...groupedItems.map((item) => {
        const price = getItemPrice(item)
        return `• ${item.quantity} × ${item.name[language]} — ${formatPrice(price * item.quantity)}`
      }),
      '',
      `${content.messageTotal}: ${formatPrice(total)}`,
      '',
      `— ${content.customerDetails} —`,
      ...customerLines,
    ].join('\n')

    window.open(
      `https://wa.me/96171230797?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <main className="order-page">
      <section className="order-container">
        <div className="order-heading">
          <div>
            <p>HUNGERS</p>
            <h1>{content.title}</h1>
          </div>
          <span>
            {cartItems.length} {cartItems.length === 1 ? content.item : content.items}
          </span>
        </div>

        {groupedItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-mark">H</div>
            <h2>{content.emptyTitle}</h2>
            <p>{content.emptyText}</p>
            <button type="button" onClick={onBrowseMenu}>{language === 'ar' ? 'تصفح القائمة' : 'Browse menu'}</button>
          </div>
        ) : (
          <div className="order-layout">
            <section className="order-items">
              {groupedItems.map((item) => {
                const price = getItemPrice(item)
                return (
                  <article className="order-item" key={item.id}>
                    <img src={item.image} alt={item.name[language]} />
                    <div className="order-item-info">
                      <div>
                        <h2>{item.name[language]}</h2>
                        <p>{item.description[language]}</p>
                      </div>
                      <button
                        className="remove-item"
                        type="button"
                        onClick={() => onRemove(item.id)}
                      >
                        <TrashIcon />
                        {content.remove}
                      </button>
                    </div>
                    <div className="order-item-actions">
                      <strong>{formatPrice(price * item.quantity)}</strong>
                      <div className="quantity-control">
                        <button
                          type="button"
                          aria-label={content.decrease}
                          onClick={() => onDecrease(item.id)}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          aria-label={content.increase}
                          onClick={() => onIncrease(item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </section>

            <aside className="order-summary">
              <h2>{content.summary}</h2>
              <div className="summary-line">
                <span>{content.subtotal}</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <div className="summary-line delivery-fee">
                <span>{content.delivery}</span>
                <small>{content.deliveryValue}</small>
              </div>
              <div className="summary-total">
                <span>{content.total}</span>
                <strong>{formatPrice(total)}</strong>
              </div>

              <form className="checkout-form" onSubmit={placeOrder}>
                <h2>{content.checkoutTitle}</h2>

                <label>
                  <span>{content.fullName} <b>*</b></span>
                  <input
                    type="text"
                    value={customer.name}
                    placeholder={content.fullNamePlaceholder}
                    autoComplete="name"
                    required
                    onChange={(event) => updateCustomer('name', event.target.value)}
                  />
                </label>

                <label>
                  <span>{content.phone} <b>*</b></span>
                  <input
                    type="tel"
                    value={customer.phone}
                    placeholder={content.phonePlaceholder}
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    onChange={(event) => updateCustomer('phone', event.target.value)}
                  />
                </label>

                <label>
                  <span>{content.deliveryMethod}</span>
                  <select
                    value={customer.method}
                    onChange={(event) => updateCustomer('method', event.target.value)}
                  >
                    <option value="delivery">{content.deliveryAddress}</option>
                    <option value="pickup">{content.pickup}</option>
                  </select>
                </label>

                {customer.method === 'delivery' && (
                  <label>
                    <span>{content.address} <b>*</b></span>
                    <textarea
                      value={customer.address}
                      placeholder={content.addressPlaceholder}
                      autoComplete="street-address"
                      required
                      rows="3"
                      onChange={(event) => updateCustomer('address', event.target.value)}
                    />
                  </label>
                )}

                <label>
                  <span>{content.deliveryNote}</span>
                  <textarea
                    value={customer.note}
                    placeholder={content.notePlaceholder}
                    rows="3"
                    onChange={(event) => updateCustomer('note', event.target.value)}
                  />
                </label>

                <p className="delivery-notice">* {content.note}</p>

                <button className="place-order-button" type="submit">
                  <WhatsAppIcon />
                  {content.checkout}
                </button>
              </form>
            </aside>
          </div>
        )}
      </section>

      <Footer language={language} />
    </main>
  )
}

export default OrderPage
