export type Category = 'Вино' | 'Игристое' | 'Виски' | 'Коньяк' | 'Джин' | 'Ром' | 'Текила' | 'Водка';
export type Product = { id: string; code: string; name: string; category: Category; country: string; region: string; color?: string; style: string; volume: string; alcohol: string; sugar?: string; composition: string; description: string; basePrice: number; discount: number; stock: number; image: string; isFeatured?: boolean; isSpecialOffer?: boolean };
export type BasketLine = { productId: string; quantity: number };
