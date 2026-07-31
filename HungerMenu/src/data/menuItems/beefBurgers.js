import americanBurgerImage from '../../assets/american.webp'
import lebaneseBurgerImage from '../../assets/lebanese.webp'
import mushroomBurgerImage from '../../assets/mushroom.webp'
import mozzarellaBurgerImage from '../../assets/mozzarella meat burger.webp'
import smashedBurgerImage from '../../assets/smashed.webp'
import burgerImage from '../../assets/hero-burger-optimized.webp'
import { item } from './item'

const beefBurgers = [
  item('classic-beef-burger', 'beef-burgers', americanBurgerImage, 500000, 'Classic Beef Burger', 'كلاسيك بيف برغر',
    'Beef patty, lettuce, tomato, pickles, onions, cheddar, and classic burger sauce.',
    'قطعة لحم، خس، طماطم، مخلل، بصل، شيدر وصلصة البرغر.'),
  item('lebanese-burger', 'beef-burgers', lebaneseBurgerImage, 500000, 'Lebanese Burger', 'برغر لبناني',
    'Beef patty, coleslaw, fries, tomato, pickles, ketchup, and mayonnaise.',
    'قطعة لحم، كولسلو، بطاطا، طماطم، مخلل، كاتشب ومايونيز.'),
  item('mushroom-burger', 'beef-burgers', mushroomBurgerImage, 550000, 'Mushroom Burger', 'مشروم برغر',
    'Beef patty, sautéed mushrooms, melted cheese, caramelized onions, and mushroom sauce.',
    'قطعة لحم، فطر، جبنة، بصل مكرمل وصلصة الفطر.'),
  item('mozzarella-burger', 'beef-burgers', mozzarellaBurgerImage, 550000, 'Mozzarella Burger', 'موزاريلا برغر',
    'Beef patty, melted mozzarella, lettuce, tomato, onions, pickles, and burger sauce.',
    'قطعة لحم، موزاريلا، خس، طماطم، بصل، مخلل وصلصة البرغر.'),
  item('smashed-burger', 'beef-burgers', smashedBurgerImage, 550000, 'Smashed Burger', 'سماش برغر',
    'Two smashed beef patties, cheddar, grilled onions, pickles, and HUNGERS sauce.',
    'قطعتان لحم سماش، شيدر، بصل مشوي، مخلل وصلصة هنغرز.'),
  item('hungers-special-burger', 'beef-burgers', burgerImage, 650000, 'HUNGERS Special Burger', 'برغر هنغرز الخاص',
    'Double beef, crispy chicken or turkey, cheddar, mozzarella, vegetables, and HUNGERS sauce.',
    'قطعتان لحم، دجاج مقرمش أو حبش، شيدر، موزاريلا، خضار وصلصة هنغرز.'),
]

export default beefBurgers
