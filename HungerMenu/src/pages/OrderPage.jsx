import { useMemo, useState } from 'react'
import Footer from '../components/Footer'
import { formatPrice } from '../utils/currency'
import { COMBO_CATEGORIES, getCartKey, getItemPrice } from '../utils/cart'
import { TrashIcon, WhatsAppIcon } from '../components/Icons'
import { WHATSAPP_NUMBER } from '../config'
import '../styles/OrderPage.css'

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
    deliveryNote: ' Note (Optional)',
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
    regular: 'Regular',
    comboBadge: 'Combo',
    comboSuffix: '(+ fries & drink)',
    makeCombo: 'Make it combo',
    makeRegular: 'Make it regular',
    clearCart: 'Clear cart',
    clearCartConfirm: 'Remove all items from your cart?',
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
    deliveryNote: 'ملاحظات (اختياري)',
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
    regular: 'عادي',
    comboBadge: 'وجبة',
    comboSuffix: '(+ بطاطا ومشروب)',
    makeCombo: 'حوّلها إلى وجبة',
    makeRegular: 'حوّلها عادية',
    clearCart: 'إفراغ السلة',
    clearCartConfirm: 'هل تريد إزالة كل العناصر من السلة؟',
  },
}

function OrderPage({
  language,
  cartItems,
  onNavigate,
  onIncrease,
  onDecrease,
  onRemove,
  onConvertCombo,
  onClearCart,
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
      if (current) {
        if (item.combo) current.comboQty += 1
        else current.regularQty += 1
      } else {
        groups.set(item.id, {
          base: item,
          id: item.id,
          category: item.category,
          image: item.image,
          name: item.name,
          description: item.description,
          regularQty: item.combo ? 0 : 1,
          comboQty: item.combo ? 1 : 0,
        })
      }
    })
    return [...groups.values()]
  }, [cartItems])

  const total = groupedItems.reduce((sum, group) => {
    const regularPrice = getItemPrice({ ...group.base, combo: false })
    const comboPrice = getItemPrice({ ...group.base, combo: true })
    return sum + regularPrice * group.regularQty + comboPrice * group.comboQty
  }, 0)

  const updateCustomer = (field, value) => {
    setCustomer((details) => ({ ...details, [field]: value }))
  }

  const clearCart = () => {
    if (window.confirm(content.clearCartConfirm)) {
      onClearCart()
    }
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
      ...groupedItems.flatMap((group) => {
        const lines = []
        if (group.regularQty > 0) {
          const price = getItemPrice({ ...group.base, combo: false })
          lines.push(`• ${group.regularQty} × ${group.name[language]} — ${formatPrice(price * group.regularQty)}`)
        }
        if (group.comboQty > 0) {
          const price = getItemPrice({ ...group.base, combo: true })
          lines.push(`• ${group.comboQty} × ${group.name[language]} (${content.comboBadge}) — ${formatPrice(price * group.comboQty)}`)
        }
        return lines
      }),
      '',
      `${content.messageTotal}: ${formatPrice(total)}`,
      '',
      `— ${content.customerDetails} —`,
      ...customerLines,
    ].join('\n')

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`,
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
              {groupedItems.map((group) => {
                const comboEligible = COMBO_CATEGORIES.has(group.category)
                const regularItem = { ...group.base, combo: false }
                const comboItem = { ...group.base, combo: true }
                const regularPrice = getItemPrice(regularItem)
                const comboPrice = getItemPrice(comboItem)
                const groupTotal = regularPrice * group.regularQty + comboPrice * group.comboQty
                return (
                  <article className="order-item" key={group.id}>
                    <img src={group.image} alt={group.name[language]} />
                    <div className="order-item-info">
                      <div>
                        <h2>{group.name[language]}</h2>
                        <p>{group.description[language]}</p>
                        <div className="variant-groups">
                        {group.regularQty > 0 && (
                          <div className="variant-row">
                            <div className="quantity-control">
                              <button
                                type="button"
                                aria-label={content.decrease}
                                onClick={() => onDecrease(getCartKey(regularItem))}
                              >
                                −
                              </button>
                              <span>{group.regularQty}</span>
                              <button
                                type="button"
                                aria-label={content.increase}
                                onClick={() => onIncrease(regularItem)}
                              >
                                +
                              </button>
                            </div>
                            <span className="variant-label">{content.regular}</span>
                            {comboEligible && (
                              <button
                                type="button"
                                className="convert-link"
                                onClick={() => onConvertCombo(regularItem, true)}
                              >
                                {content.makeCombo}
                              </button>
                            )}
                          </div>
                        )}

                        {group.comboQty > 0 && (
                          <div className="variant-row">
                            <div className="quantity-control">
                              <button
                                type="button"
                                aria-label={content.decrease}
                                onClick={() => onDecrease(getCartKey(comboItem))}
                              >
                                −
                              </button>
                              <span>{group.comboQty}</span>
                              <button
                                type="button"
                                aria-label={content.increase}
                                onClick={() => onIncrease(comboItem)}
                              >
                                +
                              </button>
                            </div>
                            <span className="variant-label combo">{content.comboBadge}</span>
                            <button
                              type="button"
                              className="convert-link"
                              onClick={() => onConvertCombo(comboItem, false)}
                            >
                              {content.makeRegular}
                            </button>
                          </div>
                        )}
                        </div>
                      </div>
                      <div className="order-item-footer">
                        <button
                          className="remove-item"
                          type="button"
                          onClick={() => onRemove(group.base)}
                        >
                          <TrashIcon />
                          {content.remove}
                        </button>
                        <strong className="order-item-price">{formatPrice(groupTotal)}</strong>
                      </div>
                    </div>
                  </article>
                )
              })}

              <button
                className="clear-cart-button"
                type="button"
                onClick={clearCart}
              >
                <TrashIcon />
                {content.clearCart}
              </button>
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

      <Footer language={language} onNavigate={onNavigate} />
    </main>
  )
}

export default OrderPage
