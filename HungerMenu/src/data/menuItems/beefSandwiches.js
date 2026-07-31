import philadelphiaImage from '../../assets/pheldelphia.png'
import rostoImage from '../../assets/rosto.png'
import sojukImage from '../../assets/sojuk-optimized.webp'
import { item } from './item'

const beefSandwiches = [
  item('philadelphia', 'beef-sandwiches', philadelphiaImage, 550000, 'Philadelphia', 'فيلادلفيا',
    'Tender beef, sautéed onions, green peppers, mushrooms, mozzarella, and special sauce.',
    'لحم طري، بصل، فليفلة خضراء، فطر، موزاريلا وصلصة خاصة.'),
  item('rosto', 'beef-sandwiches', rostoImage, 550000, 'Rosto', 'روستو',
    'Roast beef, lettuce, tomato, pickles, cheddar, mayonnaise, and mustard.',
    'روست بيف، خس، طماطم، مخلل، شيدر، مايونيز وخردل.'),
  item('sojuk', 'beef-sandwiches', sojukImage, 500000, 'Sojuk', 'سجق',
    'Spicy sojuk, tomato, pickles, onions, mozzarella, and garlic or spicy sauce.',
    'سجق حار، طماطم، مخلل، بصل، موزاريلا وصلصة ثوم أو حارة.'),
]

export default beefSandwiches
