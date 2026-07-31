import garlicDipImage from '../../assets/garlic-dip-optimized.webp'
import spicyDipImage from '../../assets/spicy-dip-optimized.webp'
import honeyMustardDipImage from '../../assets/honey-mustard-dip-optimized.webp'
import barbecueDipImage from '../../assets/barbecue-dip-optimized.webp'
import cocktailDipImage from '../../assets/cocktail-dip-optimized.webp'
import burgerImage from '../../assets/hero-burger-optimized.webp'
import { item } from './item'

const dips = [
  item('garlic-dip', 'dips', garlicDipImage, 50000, 'Garlic Dip', 'صلصة الثوم',
    'Creamy house-made garlic dip.', 'صلصة ثوم كريمية محضرة في المطعم.'),
  item('spicy-dip', 'dips', spicyDipImage, 50000, 'Spicy Dip', 'صلصة حارة',
    'A creamy dip with a bold spicy kick.', 'صلصة كريمية بنكهة حارة وقوية.'),
  item('honey-mustard-dip', 'dips', honeyMustardDipImage, 75000, 'Honey Mustard Dip', 'صلصة العسل والخردل',
    'Sweet and tangy honey mustard dip.', 'صلصة العسل والخردل الحلوة والحامضة.'),
  item('barbecue-dip', 'dips', barbecueDipImage, 50000, 'Barbecue Dip', 'صلصة الباربكيو',
    'Smoky and sweet barbecue dip.', 'صلصة باربكيو مدخنة وحلوة.'),
  item('cocktail-dip', 'dips', cocktailDipImage, 50000, 'Cocktail Dip', 'صلصة الكوكتيل',
    'Tangy tomato-based cocktail dip.', 'صلصة كوكتيل بنكهة الطماطم.'),
  item('hungers-special-dip', 'dips', burgerImage, 75000, 'HUNGERS Special Dip', 'صلصة هنغرز الخاصة',
    'Our rich and creamy signature HUNGERS sauce.', 'صلصة هنغرز الخاصة الغنية والكريمية.'),
]

export default dips
