export const item = (id, category, image, price, enName, arName, enDescription, arDescription) => ({
  id,
  category,
  image,
  price,
  name: { en: enName, ar: arName },
  description: { en: enDescription, ar: arDescription },
})
