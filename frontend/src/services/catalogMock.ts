import type { Category, Product } from '../types/catalog';

// TODO: BACKEND INTEGRATION — this data is replaced by GET /products and GET /categories.
const images = [
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?auto=format&fit=crop&w=900&q=85',
];
const specs: Array<Omit<Product, 'id' | 'code' | 'basePrice' | 'discount' | 'stock' | 'image' | 'isFeatured' | 'isSpecialOffer'>> = [
  { name: 'Château de Montfaucon Côtes du Rhône', category: 'Вино', country: 'Франция', region: 'Долина Роны', color: 'Красное', style: 'Сухое', volume: '0.75 л', alcohol: '14%', sugar: 'Сухое', composition: 'Гренаш, Сира, Сенсо', description: 'Глубокое, собранное вино с тонами чёрной вишни и пряностей.' },
  { name: 'Planeta Chardonnay Sicilia', category: 'Вино', country: 'Италия', region: 'Сицилия', color: 'Белое', style: 'Сухое', volume: '0.75 л', alcohol: '13.5%', sugar: 'Сухое', composition: 'Шардоне', description: 'Элегантное белое вино с деликатной минеральностью.' },
  { name: 'Whispering Angel Rosé', category: 'Вино', country: 'Франция', region: 'Прованс', color: 'Розовое', style: 'Сухое', volume: '0.75 л', alcohol: '13%', sugar: 'Сухое', composition: 'Гренаш, Сенсо', description: 'Свежее и утончённое розовое с нотами персика.' },
  { name: 'Billecart-Salmon Brut Réserve', category: 'Игристое', country: 'Франция', region: 'Шампань', style: 'Brut', volume: '0.75 л', alcohol: '12%', composition: 'Пино Нуар, Шардоне, Менье', description: 'Тонкий шампанский стиль, цитрус и свежая выпечка.' },
  { name: 'Ca’ del Bosco Franciacorta Cuvée', category: 'Игристое', country: 'Италия', region: 'Ломбардия', style: 'Brut', volume: '0.75 л', alcohol: '12.5%', composition: 'Шардоне, Пино Бьянко', description: 'Структурное игристое с кремовой текстурой.' },
  { name: 'The Macallan Double Cask 12 Years', category: 'Виски', country: 'Шотландия', region: 'Спейсайд', style: 'Single malt', volume: '0.7 л', alcohol: '40%', composition: 'Ячменный солод', description: 'Мягкий виски с оттенками мёда, дуба и цитруса.' },
  { name: 'Glenfiddich 15 Years Solera', category: 'Виски', country: 'Шотландия', region: 'Спейсайд', style: 'Single malt', volume: '0.7 л', alcohol: '40%', composition: 'Ячменный солод', description: 'Насыщенный и округлый, с нотами сухофруктов.' },
  { name: 'Hennessy X.O', category: 'Коньяк', country: 'Франция', region: 'Коньяк', style: 'X.O.', volume: '0.7 л', alcohol: '40%', composition: 'Коньячные спирты', description: 'Многослойный коньяк с тёплой пряностью и какао.' },
  { name: 'Roku Japanese Craft Gin', category: 'Джин', country: 'Япония', region: 'Осака', style: 'Dry gin', volume: '0.7 л', alcohol: '43%', composition: 'Шесть японских ботаникалов', description: 'Чистый, цветочный и очень гармоничный джин.' },
  { name: 'Diplomático Reserva Exclusiva', category: 'Ром', country: 'Венесуэла', region: 'Лара', style: 'Dark rum', volume: '0.7 л', alcohol: '40%', composition: 'Сахарный тростник', description: 'Шёлковистый ром с тонами шоколада и апельсиновой цедры.' },
  { name: 'Don Julio Blanco', category: 'Текила', country: 'Мексика', region: 'Халиско', style: 'Blanco', volume: '0.7 л', alcohol: '38%', composition: 'Голубая агава', description: 'Свежая, чистая текила с травяными и цитрусовыми нотами.' },
  { name: 'Beluga Noble', category: 'Водка', country: 'Россия', region: 'Сибирь', style: 'Классическая', volume: '0.7 л', alcohol: '40%', composition: 'Солодовый спирт', description: 'Мягкий вкус и деликатное зерновое послевкусие.' },
];
export const products: Product[] = Array.from({ length: 38 }, (_, index) => { const s = specs[index % specs.length]; return { ...s, id: `p-${index + 1}`, code: `LP-${1001 + index}`, basePrice: 2400 + (index * 463) % 12800, discount: [10, 20, 30, 45, 15][index % 5], stock: index % 17 === 0 ? 0 : 2 + (index % 12), image: images[index % images.length], isFeatured: index < 14, isSpecialOffer: index % 4 === 0 }; });
export const categories = Array.from(new Set(products.map(({ category }) => category))) as Category[];
export const clientPrice = (product: Product) => Math.round(product.basePrice * (1 - product.discount / 100));
