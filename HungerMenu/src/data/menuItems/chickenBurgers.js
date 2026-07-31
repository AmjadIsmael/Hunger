import chickenBurgerImage from '../../assets/chicken burger.webp'
import chickenMushroomBurgerImage from '../../assets/chicken mushroom.webp'
import chickenMozzarellaBurgerImage from '../../assets/chicken mozzarella burger.webp'
import { item } from './item'

const chickenBurgers = [
  item('chicken-burger', 'chicken-burgers', chickenBurgerImage, 500000, 'Chicken Burger', 'تشيكن برغر',
    'Grilled or crispy chicken, lettuce, tomato, pickles, cheddar, and mayonnaise.',
    'دجاج مشوي أو مقرمش، خس، طماطم، مخلل، شيدر ومايونيز.'),
  item('chicken-mushroom-burger', 'chicken-burgers', chickenMushroomBurgerImage, 550000, 'Chicken Mushroom Burger', 'تشيكن مشروم برغر',
    'Chicken patty, sautéed mushrooms, mozzarella, lettuce, and creamy mushroom sauce.',
    'قطعة دجاج، فطر، موزاريلا، خس وصلصة فطر كريمية.'),
  item('chicken-mozzarella-burger', 'chicken-burgers', chickenMozzarellaBurgerImage, 550000, 'Chicken Mozzarella Burger', 'تشيكن موزاريلا برغر',
    'Chicken patty, melted mozzarella, lettuce, tomato, pickles, and garlic mayonnaise.',
    'قطعة دجاج، موزاريلا، خس، طماطم، مخلل ومايونيز بالثوم.'),
]

export default chickenBurgers
