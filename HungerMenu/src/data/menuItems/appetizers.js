import friesImage from '../../assets/fries.png'
import wrapImage from '../../assets/hero-wrap-optimized.webp'
import { item } from './item'

const appetizers = [
  item('regular-fries', 'appetizers', friesImage, 150000, 'Regular Fries', 'بطاطا عادية',
    'Golden crispy French fries.', 'بطاطا مقلية ذهبية ومقرمشة.'),
  item('spicy-fries', 'appetizers', friesImage, 200000, 'Spicy Fries', 'بطاطا حارة',
    'Crispy fries tossed in our spicy seasoning.', 'بطاطا مقرمشة مع بهاراتنا الحارة.'),
  item('cheesy-fries', 'appetizers', friesImage, 300000, 'Cheesy Fries', 'بطاطا بالجبنة',
    'Golden fries covered with melted cheese.', 'بطاطا ذهبية مغطاة بالجبنة الذائبة.'),
  item('loaded-fries', 'appetizers', friesImage, 350000, 'Loaded Fries', 'لودد فرايز',
    'Fries loaded with cheese, sauce, and savory toppings.', 'بطاطا مع جبنة وصلصة وإضافات شهية.'),
  item('onion-rings', 'appetizers', friesImage, 250000, 'Onion Rings', 'حلقات البصل',
    'Crispy golden battered onion rings.', 'حلقات بصل ذهبية ومقرمشة.'),
  item('coleslaw', 'appetizers', wrapImage, 150000, 'Coleslaw', 'كولسلو',
    'Fresh creamy house-made coleslaw.', 'سلطة كولسلو طازجة وكريمية.'),
]

export default appetizers
