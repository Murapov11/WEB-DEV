export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  img: string;
  shopLink: string;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Samsung Galaxy A23',
    price: 104605,
    description: ' 6 ГБ/128 ГБ черный',
    rating: 3,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy6LxWg98Dkq89eq_KRrjIB9Fo3bRC3XtnvGarDMPKe6EubqzBUkRtBoCE7QQAvD_BwE#!/item'
  },
  {
    id: 2,
    name: 'Смартфон Samsung Galaxy A13',
    price: 90170,
    description: '4 ГБ/128 ГБ черный',
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h49/49613711966238/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy6LxWg98Dkq89eq_KRrjIB9Fo3bRC3XtnvGarDMPKe6EubqzBUkRtBoCE7QQAvD_BwE#!/item'
  },
  {
    id: 3,
    name: 'Смартфон Xiaomi Redmi 10C ',
    price: 71977,
    description: '4 ГБ/128 ГБ серый',
    rating: 4,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy6LxWg98Dkq89eq_KRrjIB9Fo3bRC3XtnvGarDMPKe6EubqzBUkRtBoCE7QQAvD_BwE#!/item'
  },
  {
    id: 4,
    name: 'Смартфон Xiaomi Redmi Note 10 Pro ',
    price: 128350,
    description: '8 ГБ/256 ГБ серый',
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy6LxWg98Dkq89eq_KRrjIB9Fo3bRC3XtnvGarDMPKe6EubqzBUkRtBoCE7QQAvD_BwE#!/item'
  },
  {
    id: 5,
    name: 'Смартфон Apple iPhone 13',
    price: 373770,
    description: '128Gb черный',
    rating: 4,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    shopLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy6LxWg98Dkq89eq_KRrjIB9Fo3bRC3XtnvGarDMPKe6EubqzBUkRtBoCE7QQAvD_BwE#!/item'
  },
  {
    id: 6,
    name: 'Смартфон Xiaomi Redmi Note 11 Pro',
    price: 139145,
    description: '8 ГБ/128 ГБ серый',
    rating: 3,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy6LxWg98Dkq89eq_KRrjIB9Fo3bRC3XtnvGarDMPKe6EubqzBUkRtBoCE7QQAvD_BwE#!/item'
  },
  {
    id: 7,
    name: 'Смартфон Apple iPhone 11',
    price: 293040,
    description: '128Gb Slim Box черный',
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    shopLink: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy6LxWg98Dkq89eq_KRrjIB9Fo3bRC3XtnvGarDMPKe6EubqzBUkRtBoCE7QQAvD_BwE#!/item'
  },
  {
    id: 8,
    name: 'Смартфон Apple iPhone 14 Pro Max',
    price: 701777,
    description: '256Gb фиолетовый',
    rating: 5,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy6LxWg98Dkq89eq_KRrjIB9Fo3bRC3XtnvGarDMPKe6EubqzBUkRtBoCE7QQAvD_BwE#!/item'
  },
  {
    id: 9,
    name: 'Смартфон Samsung Galaxy A33 5G',
    price: 129680,
    description: '6 ГБ/128 ГБ черный',
    rating: 4,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h8c/49894748160030/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy6LxWg98Dkq89eq_KRrjIB9Fo3bRC3XtnvGarDMPKe6EubqzBUkRtBoCE7QQAvD_BwE#!/item'
  },
  {
    id: 10,
    name: 'Смартфон Apple iPhone 14 ',
    price: 421222,
    description: '128Gb черный',
    rating: 3,
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h61/63072540131358/apple-iphone-14-128gb-cernyj-106363023-1.jpg',
    shopLink: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA9NGfBhBvEiwAq5vSy6LxWg98Dkq89eq_KRrjIB9Fo3bRC3XtnvGarDMPKe6EubqzBUkRtBoCE7QQAvD_BwE#!/item'
  }

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/