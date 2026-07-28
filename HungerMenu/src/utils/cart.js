export const COMBO_EXTRA = 250000

export const COMBO_CATEGORIES = new Set([
  'chicken-sandwiches',
  'beef-sandwiches',
  'vegetarian',
  'chicken-burgers',
  'beef-burgers',
])

export const getCartKey = (item) => `${item.id}:${item.combo ? 'combo' : 'std'}`

export const getItemPrice = (item) => {
  const base = item.offer?.active ? item.offer.price : item.price
  return item.combo ? base + COMBO_EXTRA : base
}