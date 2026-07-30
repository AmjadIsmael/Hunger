import burgerImage from '../assets/hero-burger-optimized.webp'
import chickenImage from '../assets/hero-crispy-chicken-optimized.webp'
import wrapImage from '../assets/hero-wrap-optimized.webp'
import chickenSubImage from '../assets/chickensup-optimized.webp'
import francescoImage from '../assets/fransisco-optimized.webp'
import fajitaImage from '../assets/fahita-optimized.webp'
import chickensupremeImage from '../assets/chickensupreme-optimized.webp'
import tawookImage from '../assets/tawook-optimized.webp'
import sojukImage from '../assets/sojuk-optimized.webp'
import mexicanaImage from '../assets/mexicana-optimized.webp'
import chickenpestoImage from '../assets/chicken pesto.png'
import philadelphiaImage from '../assets/pheldelphia.png'
import rostoImage from '../assets/rosto.png'
import friesImage from '../assets/fries.png'
import pepsiImage from '../assets/pepsi-optimized.webp'
import pepsiDietImage from '../assets/pepsi-diet-optimized.webp'
import sevenUpImage from '../assets/seven-up-optimized.webp'
import sevenUpDietImage from '../assets/seven-up-diet-optimized.webp'
import mirindaImage from '../assets/mirinda-optimized.webp'
import ayranImage from '../assets/ayran-optimized.webp'
import waterImage from '../assets/water-optimized.webp'
import garlicDipImage from '../assets/garlic-dip-optimized.webp'
import spicyDipImage from '../assets/spicy-dip-optimized.webp'
import honeyMustardDipImage from '../assets/honey-mustard-dip-optimized.webp'
import barbecueDipImage from '../assets/barbecue-dip-optimized.webp'
import cocktailDipImage from '../assets/cocktail-dip-optimized.webp'
import crispyChickenImage from '../assets/crispy.webp'
import chickenBurgerImage from '../assets/chicken burger.webp'
import chickenMushroomBurgerImage from '../assets/chicken mushroom.webp'
import chickenMozzarellaBurgerImage from '../assets/chicken mozzarella burger.webp'
import mushroomBurgerImage from '../assets/mushroom.webp'
import mozzarellaBurgerImage from '../assets/mozzarella meat burger.webp'
import smashedBurgerImage from '../assets/smashed.webp'
import lebaneseBurgerImage from '../assets/lebanese.webp'
import americanBurgerImage from '../assets/american.webp'

const item = (id, category, image, price, enName, arName, enDescription, arDescription) => ({
  id,
  category,
  image,
  price,
  name: { en: enName, ar: arName },
  description: { en: enDescription, ar: arDescription },
})

const menuItems = [
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

  item('philadelphia', 'beef-sandwiches', philadelphiaImage, 550000, 'Philadelphia', 'فيلادلفيا',
    'Tender beef, sautéed onions, green peppers, mushrooms, mozzarella, and special sauce.',
    'لحم طري، بصل، فليفلة خضراء، فطر، موزاريلا وصلصة خاصة.'),
  item('rosto', 'beef-sandwiches', rostoImage, 550000, 'Rosto', 'روستو',
    'Roast beef, lettuce, tomato, pickles, cheddar, mayonnaise, and mustard.',
    'روست بيف، خس، طماطم، مخلل، شيدر، مايونيز وخردل.'),
  item('sojuk', 'beef-sandwiches', sojukImage, 500000, 'Sojuk', 'سجق',
    'Spicy sojuk, tomato, pickles, onions, mozzarella, and garlic or spicy sauce.',
    'سجق حار، طماطم، مخلل، بصل، موزاريلا وصلصة ثوم أو حارة.'),

  item('batata', 'vegetarian', friesImage, 350000, 'Batata', 'بطاطا',
    'Crispy fries, coleslaw, pickles, ketchup, mayonnaise, and garlic sauce.',
    'بطاطا مقلية، كولسلو، مخلل، كاتشب، مايونيز وصلصة الثوم.'),

  item('chicken-burger', 'chicken-burgers', chickenBurgerImage, 500000, 'Chicken Burger', 'تشيكن برغر',
    'Grilled or crispy chicken, lettuce, tomato, pickles, cheddar, and mayonnaise.',
    'دجاج مشوي أو مقرمش، خس، طماطم، مخلل، شيدر ومايونيز.'),
  item('chicken-mushroom-burger', 'chicken-burgers', chickenMushroomBurgerImage, 550000, 'Chicken Mushroom Burger', 'تشيكن مشروم برغر',
    'Chicken patty, sautéed mushrooms, mozzarella, lettuce, and creamy mushroom sauce.',
    'قطعة دجاج، فطر، موزاريلا، خس وصلصة فطر كريمية.'),
  item('chicken-mozzarella-burger', 'chicken-burgers', chickenMozzarellaBurgerImage, 550000, 'Chicken Mozzarella Burger', 'تشيكن موزاريلا برغر',
    'Chicken patty, melted mozzarella, lettuce, tomato, pickles, and garlic mayonnaise.',
    'قطعة دجاج، موزاريلا، خس، طماطم، مخلل ومايونيز بالثوم.'),

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

export default menuItems
