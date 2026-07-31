import pepsiImage from '../../assets/pepsi-optimized.webp'
import pepsiDietImage from '../../assets/pepsi-diet-optimized.webp'
import sevenUpImage from '../../assets/seven-up-optimized.webp'
import sevenUpDietImage from '../../assets/seven-up-diet-optimized.webp'
import mirindaImage from '../../assets/mirinda-optimized.webp'
import waterImage from '../../assets/water-optimized.webp'
import ayranImage from '../../assets/ayran-optimized.webp'
import { item } from './item'

const drinks = [
  item('pepsi', 'drinks', pepsiImage, 100000, 'Pepsi', 'بيبسي',
    'Chilled classic Pepsi.', 'بيبسي باردة.'),
  item('diet-pepsi', 'drinks', pepsiDietImage, 100000, 'Diet Pepsi', 'بيبسي دايت',
    'Chilled Diet Pepsi.', 'بيبسي دايت باردة.'),
  item('seven-up', 'drinks', sevenUpImage, 100000, 'Seven Up', 'سفن أب',
    'Chilled classic Seven Up.', 'سفن أب باردة.'),
  item('diet-seven-up', 'drinks', sevenUpDietImage, 100000, 'Diet Seven Up', 'سفن أب دايت',
    'Chilled Diet Seven Up.', 'سفن أب دايت باردة.'),
  item('mirinda', 'drinks', mirindaImage, 100000, 'Mirinda', 'ميراندا',
    'Chilled classic Mirinda.', 'ميراندا باردة.'),
  item('water', 'drinks', waterImage, 50000, 'Water', 'مياه',
    'Chilled bottled water.', 'عبوة مياه باردة.'),
  item('ayran', 'drinks', ayranImage, 100000, 'Ayran', 'عيران',
    'Cold and refreshing ayran.', 'عيران بارد ومنعش.'),
]

export default drinks
