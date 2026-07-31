import chickenSubImage from '../../assets/chickensup-optimized.webp'
import fajitaImage from '../../assets/fahita-optimized.webp'
import chickensupremeImage from '../../assets/chickensupreme-optimized.webp'
import crispyChickenImage from '../../assets/crispy.webp'
import mexicanaImage from '../../assets/mexicana-optimized.webp'
import francescoImage from '../../assets/fransisco-optimized.webp'
import tawookImage from '../../assets/tawook-optimized.webp'
import chickenpestoImage from '../../assets/chicken pesto.png'
import { item } from './item'

const chickenSandwiches = [
  item('chicken-sub', 'chicken-sandwiches', chickenSubImage, 500000, 'Chicken Sub', 'تشيكن صب',
    'Grilled chicken breast, lettuce, tomato, pickles, corn, cheddar, mayonnaise, and garlic sauce.',
    'صدر دجاج مشوي، خس، طماطم، مخلل، ذرة، شيدر، مايونيز وصلصة الثوم.'),
  item('fajita', 'chicken-sandwiches', fajitaImage, 500000, 'Fajita', 'فاهيتا',
    'Seasoned chicken, sautéed onions, colored peppers, mushrooms, mozzarella, and fajita sauce.',
    'دجاج متبل، بصل، فليفلة ملونة، فطر، موزاريلا وصلصة الفاهيتا.'),
  item('chicken-supreme', 'chicken-sandwiches', chickensupremeImage, 550000, 'Chicken Supreme', 'تشيكن سوبريم',
    'Grilled chicken, turkey, mushrooms, mozzarella, lettuce, mayonnaise, and garlic sauce.',
    'دجاج مشوي، حبش، فطر، موزاريلا، خس، مايونيز وصلصة الثوم.'),
  item('crispy', 'chicken-sandwiches', crispyChickenImage, 500000, 'Crispy', 'كريسبي',
    'Golden crispy chicken, lettuce, tomato, pickles, cheddar, mayonnaise, and garlic sauce.',
    'دجاج ذهبي مقرمش، خس، طماطم، مخلل، شيدر، مايونيز وصلصة الثوم.'),
  item('mexicana', 'chicken-sandwiches', mexicanaImage, 550000, 'Mexicana', 'مكسيكانا',
    'Spicy chicken, onions, colored peppers, corn, jalapeños, cheddar, and Mexican sauce.',
    'دجاج حار، بصل، فليفلة ملونة، ذرة، هالبينو، شيدر وصلصة مكسيكية.'),
  item('francisco', 'chicken-sandwiches', francescoImage, 500000, 'Francisco', 'فرانسيسكو',
    'Grilled chicken, mushrooms, corn, mozzarella, lettuce, and creamy mayonnaise.',
    'دجاج مشوي، فطر، ذرة، موزاريلا، خس ومايونيز كريمي.'),
  item('tawook', 'chicken-sandwiches', tawookImage, 500000, 'Tawook', 'طاووق',
    'Marinated tawook, pickles, French fries, coleslaw, and garlic sauce.',
    'طاووق متبل، مخلل، بطاطا مقلية، كولسلو وصلصة الثوم.'),
  item('chicken-pesto', 'chicken-sandwiches', chickenpestoImage, 550000, 'Chicken Pesto', 'تشيكن بيستو',
    'Grilled chicken, mozzarella, tomato, rocket leaves, and creamy pesto sauce.',
    'دجاج مشوي، موزاريلا، طماطم، روكا وصلصة بيستو كريمية.'),
]

export default chickenSandwiches
