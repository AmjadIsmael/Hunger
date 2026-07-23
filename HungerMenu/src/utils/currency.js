export const formatPrice = (value) =>
  `${new Intl.NumberFormat('en-US').format(value)} L.L`
