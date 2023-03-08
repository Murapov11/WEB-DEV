export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  img: string;
  shopLink: string;
  category: string;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: 689699,
    description: 'технология NFC: Да, цвет: фиолетовый',
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    category: 'Телефоны и гаджеты',
    likes: 0
  },
  {
    id: 2,
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 169990,
    description: 'диагональ экрана: 15.6 дюйм, процессор: Intel Pentium Gold 7505',
    rating: 4,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item',
    category: 'Компьютеры',
    likes: 0
  },
  {
    id: 3,
    name: 'BASILICO Дымка 19 см',
    price: 499,
    description: 'тип: тарелка, назначение: суповая',
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h30/h04/32549004247070/basilico-dymka-19-sm-100197357-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/basilico-dymka-19-sm-100197357/?c=750000000#!/item',
    category: 'Товары для дома',
    likes: 0
  },
  {
    id: 4,
    name: 'Султан Спираль 400 г',
    price: 359,
    description: 'тип: макаронные изделия, форма выпуска: спирали',
    rating: 4,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/hcb/46066221350942/sultan-spiral-400-g-100212062-1-Container.jpg',
    shopLink: 'https://kaspi.kz/shop/p/sultan-spiral-400-g-100212062/?c=750000000#!/item',
    category: 'Продукты питания',
    likes: 0
  },
  {
    id: 5,
    name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный',
    price: 104024,
    description: 'технология NFC: Да, цвет: черный',
    rating: 4,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item',
    category: 'Телефоны и гаджеты',
    likes: 0
  },
  {
    id: 6,
    name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ оранжевый',
    price: 104448,
    description: 'технология NFC: Да, цвет: оранжевый',
    rating: 3,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/h07/49792674463774/samsung-galaxy-a23-128gb-peach-104347752-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-oranzhevyi-104347752/?c=750000000#!/item',
    category: 'Телефоны и гаджеты',
    likes: 0
  },
  {
    id: 7,
    name: 'Смартфон Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ серый',
    price: 138610,
    description: 'технология NFC: Да, цвет: серый',
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item',
    category: 'Телефоны и гаджеты',
    likes: 0
  },
  {
    id: 8,
    name: 'Смартфон Apple iPhone 13 128Gb синий',
    price: 368920,
    description: 'технология NFC: Да, цвет: синий',
    rating: 4,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h1d/46392661737502/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg',
    shopLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000#!/item',
    category: 'Телефоны и гаджеты',
    likes: 0
  },
  {
    id: 9,
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 389800,
    description: 'диагональ экрана: 15.6 дюйм, процессор: Intel Core i5 11400H',
    rating: 2,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    category: 'Компьютеры',
    likes: 0
  },
  {
    id: 10,
    name: 'Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный',
    price: 349930,
    description: 'диагональ экрана: 15.6 дюйм, процессор: AMD Ryzen 5 4600H',
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item',
    category: 'Компьютеры',
    likes: 0
  },
  {
    id: 11,
    name: 'Ноутбук Apple MacBook Air 13 MLXW3 серый',
    price: 627205,
    description: 'диагональ экрана: 13.6 дюйм, процессор: Apple M2',
    rating: 4,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/he9/52679187890206/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxw3-seryi-105933794/?c=750000000#!/item',
    category: 'Компьютеры',
    likes: 0
  },
  {
    id: 12,
    name: 'Ноутбук Apple MacBook Air 13 MGND3 золотистый',
    price: 490080,
    description: 'диагональ экрана: 13.3 дюйм, процессор: Apple M1',
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h54/33286638272542/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-1-Container.jpg',
    shopLink: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=750000000#!/item',
    category: 'Компьютеры',
    likes: 0
  },
  {
    id: 13,
    name: 'Гель для стирки Maxi Power Color 3300 мл',
    price: 3962,
    description: 'Гель для стирки цветных тканей.',
    rating: 3,
    img: 'https://aromika.info/image/cache/catalog/maxipower/maxipower-stirka-3300-color-600x600.jpg',
    shopLink: 'https://kaspi.kz/shop/p/basilico-dymka-19-sm-100197357/?c=750000000#!/item',
    category: 'Товары для дома',
    likes: 0
},
  {
    id: 14,
    name: 'Жидкое средство Domestos Ультра Белый 750 мл',
    price: 1185,
    description: 'тип: жидкое средство, назначение: для ванны и туалета',
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/h3e/33962853761054/domestos-ultra-belyj-750-ml-101105068-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/zhidkoe-sredstvo-domestos-ul-tra-belyi-750-ml-101105068/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item',
    category: 'Товары для дома',
    likes: 0
  },
  {
    id: 15,
    name: 'Порошок Вантуз Растворитель Волос',
    price: 269,
    description: 'средство: порошок, назначение: для труб',
    rating: 4,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2c/hef/45029955108894/vantuz-rastvoritel-volos-70-g-102167864-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/poroshok-vantuz-rastvoritel-volos-102167864/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item',
    category: 'Товары для дома',
    likes: 0
  },
  {
    id: 16,
    name: 'Кусковое мыло туалетное Safeguard Natural Detox с экстрактом чайного дерева 110 г',
    price: 399,
    description: 'средство: кусковое мыло, вид мыла: туалетное',
    rating: 3,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/h3b/47497400483870/kuskovoe-mylo-tualetnoe-safeguard-natural-detox-s-ekstraktom-chainogo-dereva-110-g-102833921-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/kuskovoe-mylo-tualetnoe-safeguard-natural-detox-s-ekstraktom-chainogo-dereva-110-g-102833921/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item',
    category: 'Товары для дома',
    likes: 0
  },
  {
    id: 17,
    name: 'Султан Особые спагетти 1600 г',
    price: 1459,
    description: 'тип: макаронные изделия, форма выпуска: спагетти',
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf2/hbe/33934385512478/sultan-osobye-spagetti-1-6-kg-101112573-1-Container.jpg',
    shopLink: 'https://kaspi.kz/shop/p/sultan-osobye-spagetti-1600-g-101112573/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item',
    category: 'Продукты питания',
    likes: 0
  },
  {
    id: 18,
    name: 'Натуральная Кухня Рис для плова 700 г',
    price: 599,
    description: 'тип: рис, вид: крупа',
    rating: 4,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbb/h41/44644135141406/naturalnaa-kuhna-ris-dla-plova-700-g-102084342-1-Container.jpg',
    shopLink: 'https://kaspi.kz/shop/p/natural-naja-kuhnja-ris-dlja-plova-700-g-102084342/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item',
    category: 'Продукты питания',
    likes: 0
  },
  {
    id: 19,
    name: 'MAKFA гречневая крупа ядрица 800 г',
    price: 1009,
    description: 'тип: гречневая, вид: крупа',
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/h90/46674545573918/makfa-krupa-grecnevaa-adrica-800-g-100983023-1-Container.jpg',
    shopLink: 'https://kaspi.kz/shop/p/makfa-grechnevaja-krupa-jadritsa-800-g-100983023/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item  ',
    category: 'Продукты питания',
    likes: 0
  },
  {
    id: 20,
    name: 'Достык гречневая крупа',
    price: 565,
    description: 'тип: гречневая, вид: крупа',
    rating: 3,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h3b/65966544191518/dostyk-grechnevaya-krupa-103559483-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/dostyk-grechnevaja-krupa-103559483/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA0cyfBhBREiwAAtStHF18kKBKOMXRc0Hg-Y_9mW9lAoAbUHwXoZJ7ln3-rEaDs02SB4DwwhoCLi8QAvD_BwE#!/item',
    category: 'Продукты питания',
    likes: 0
  },

];
export class ProductClass{
  public remove(product: Product){
    products.splice(products.indexOf(product), 1);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/