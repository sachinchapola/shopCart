export class ProductListingAllResponse {
  allResponseData: any = {
    status: 'success',
    data: {
      page: 1,
      pageSize: 32,
      totalProducts: 32,
      totalPages: 2,
      filters: [
        'Headphone Type',
        'Price',
        'Review',
        'Color',
        'Material',
        'Offer',
        'All Filters',
      ],
      sortOptions: ['Sort by'],
      products: [
        {
          id: '1019',
          name: 'HP Victus gaming AMD Ryzen 5',
          description: 'Hexa Core 5600H - (8 GB/512 GB SSD/4 GB Graphics/AMD Radeon RX 6500M/60 Hz) 15-fb0147AX Gaming Laptop',
          price: 597.82,
          currency: 'USD',
          inStock: true,
          rating: 4.8,
          reviewsCount: 325,
          images: [
            'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/c/c/t/15-fb0147ax-gaming-laptop-hp-original-imahfa8gsz6yv6sk.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/z/m/15-fb0132ax-gaming-laptop-hp-original-imahyq4ntthxch6w.jpeg?q=70'
          ],
          category: 'Laptop',
          brand: 'HP',
          tags: ['hp', 'laptop', 'gaming', 'audio'],
          colors: ['Blue', 'Mica Silver' ]
        },
        {
          id: '1001',
          name: 'Wireless Earbuds, IPX8',
          description: 'Organic Cotton, fairtrade certified',
          price: 89.29,
          currency: 'USD',
          inStock: true,
          rating: 4.9,
          reviewsCount: 212,
          images: [
            'https://rukminim2.flixcart.com/image/850/1000/xif0q/headphone/u/3/0/-original-imagqhqk5gkhuj8f.jpeg?q=90&crop=false',
            'https://rukminim2.flixcart.com/image/850/1000/xif0q/headphone/p/0/p/-original-imagp6skfbnypq5g.jpeg?q=90&crop=false',
            'https://rukminim2.flixcart.com/image/850/1000/xif0q/headphone/k/i/o/-original-imagp6skdxptyrjt.jpeg?q=90&crop=false',
            'https://rukminim2.flixcart.com/image/850/1000/xif0q/headphone/5/q/q/-original-imagqhqktuhwvmme.jpeg?q=90&crop=false',
            'https://rukminim2.flixcart.com/image/850/1000/xif0q/headphone/f/g/z/-original-imaghzfpykshtyn2.jpeg?q=20&crop=false'
          ],
          category: 'Headphones',
          brand: 'Noise',
          tags: ['wireless', 'earbuds', 'bluetooth', 'audio'],
          colors: ['Clam White', 'Jet Black', 'Celeste Blue', 'Deep Wine', 'Aurora Green'  ]
        },
        {
          id: '1020',
          name: 'Google Pixel 7a',
          description: '8 GB RAM | 256 GB ROM , 15.49 cm (6.1 inch) Full HD+ Display, 64MP (OIS) + 13MP | 13MP Front Camera, Tensor G2 Processor',
          price: 442.32,
          currency: 'USD',
          inStock: true,
          rating: 4.7,
          reviewsCount: 1205,
          images: [
            'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/b/d/-original-imagpgx48f4szdvf.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/f/d/-original-imagpgx4g2m63gfh.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/a/r/-original-imagtrf9qm3dufq9.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/i/d/-original-imagpgx4erjqnpzx.jpeg?q=70'
          ],
          category: 'Phone',
          brand: 'Google Pixel',
          tags: ['google pixel', 'phone', 'camera', 'audio'],
          colors: ['Sea', 'Snow', 'Coral', 'Charcoal']
        },
        {
          id: '1002',
          name: 'AirPods Max',
          description: 'A perfect balance of high-fidelity audio aand the effortless magic of AirPods.',
          price: 559.05,
          currency: 'USD',
          inStock: true,
          rating: 4.8,
          reviewsCount: 289,
          images: [
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011_FMT_WHH?wid=607&hei=556&fmt=jpeg&qlt=90&.v=1633623988000',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604709508000',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-green-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604022364000',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-skyblue-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604022365000',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604022365000',
          ],
          category: 'Headphones',
          brand: 'Apple',
          tags: ['airpods', 'headphones', 'bluetooth', 'audio'],
          colors: ['Pink', 'Space Gray', 'Green', 'Sky Blue', 'Silver' ]
        },
        {
          id: '1018',
          name: 'ASUS Vivobook 15',
          description: 'Intel Celeron N4020, 15.6" (39.62 cms) HD, Thin and Light Laptop (8GB/512GBSSD/Integrated Graphic',
          price: 321.58,
          currency: 'USD',
          inStock: true,
          rating: 4.7,
          reviewsCount: 890,
          images: [
            'https://m.media-amazon.com/images/I/41rJ+ha25XL._SY300_SX300_.jpg'
          ],
          category: 'Laptop',
          brand: 'ASUS',
          tags: ['asus', 'laptop', ],
          colors: ['Silver']
        },
        {
          id: '1004',
          name: 'Boult Z40',
          description: 'Wireless Earbuds With Mic',
          price: 39.25,
          currency: 'USD',
          inStock: true,
          rating: 4.8,
          reviewsCount: 225,
          images: [
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/o/x/t/-original-imahfkc7th4zhmxj.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/q/q/n/-original-imagmugg8hx9v5fr.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/z/v/y/-original-imagmuggusa94g3u.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/o/z/8/-original-imagtr2n2wzggxuh.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/x/4/9/-original-imagtr2nezygmu4f.jpeg?q=70'
          ],
          category: 'Headphones',
          brand: 'Boult',
          tags: ['earbuds', 'wireless', 'audio'],
          colors: ['Brown', 'White', 'Blue', 'jungle', 'Midnight']
        },
        {
          id: '1005',
          name: 'JBL TUNE 600BTNC',
          description: 'Premium Bass. On-Ear Bluetooth',
          price: 59.09,
          currency: 'USD',
          inStock: true,
          rating: 4.8,
          reviewsCount: 321,
          images: [
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/j/l/r/-original-imagydwpwwpdyzrb.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/a/j/c/-original-imahyxyjhyttyqzp.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/l/b/c/-original-imahyxyjxpq3jb5e.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/m/v/w/-original-imagydwpusn8npjf.jpeg?q=70'
          ],
          category: 'Headphones',
          brand: 'JBL',
          tags: ['jbl', 'bluetooth', 'headphones', 'audio'],
          colors: ['Black', 'White', 'red', 'Blue']
        },
        {
          id: '1006',
          name: 'Sony WH-CH520',
          description: 'Bluetooth version: 5.2 & With up to 50-hour battery life and quick charging, you will have enough power for multi-day road trips and long festival weekends.',
          price: 349.99,
          currency: 'USD',
          inStock: true,
          rating: 4.8,
          reviewsCount: 480,
          images: [
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/p/x/k/wh-ch510-sony-original-imagz5rbr2ncbrey.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/i/x/x/wh-ch510-sony-original-imagz5r5qqrsfteq.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/e/0/c/wh-ch510-sony-original-imagz5rcxcudrdnz.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/t/q/m/wh-ch510-sony-original-imagz5r8krvjzhyg.jpeg?q=70'
          ],
          category: 'Headphones',
          brand: 'Sony',
          tags: ['sony', 'noise cancelling', 'bluetooth', 'headphones'],
          colors: ['Blue', 'Black', 'Taupe', 'White']
        },
        {
          id: '1007',
          name: 'Samsung Galaxy Buds2 Pro',
          description: 'True Wireless Earbuds w/ Active Noise Cancelling',
          price: 199.99,
          currency: 'USD',
          inStock: true,
          rating: 4.6,
          reviewsCount: 520,
          images: [
            'https://m.media-amazon.com/images/I/61Qqg+T8nsL._AC_UF1000,1000_QL80_.jpg',
            'https://m.media-amazon.com/images/I/61efn6CoyOL._AC_UF1000,1000_QL80_.jpg',
            'https://ennap.com/cdn/shop/products/samsung-galaxy-buds-2-pro-sound-by-akg-samsung-galaxy-buds-2-pro-sound-by-akg-ennap-com-3.jpg?v=1697851014',
          ],
          category: 'Headphones',
          brand: 'Samsung',
          tags: ['samsung', 'noise cancelling', 'bluetooth', 'earbuds'],
          colors: ['Graphite', 'White', 'Bora Purple']
        },
        {
          id: '1008',
          name: 'Sony WF-1000XM4',
          description:
            'Industry Leading Noise Canceling Truly Wireless Earbuds',
          price: 279.99,
          currency: 'USD',
          inStock: true,
          rating: 4.8,
          reviewsCount: 430,
          images: [
            'https://rukminim2.flixcart.com/image/612/612/l1ch4sw0/headphone/m/t/o/wf-1000xm4-sony-original-imagcxgjqhvejxbd.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/612/612/l1ch4sw0/headphone/9/6/z/wf-1000xm4-sony-original-imagcxgjhpasuhn6.jpeg?q=70'
          ],
          category: 'Headphones',
          brand: 'Sony',
          tags: ['sony', 'noise cancelling', 'bluetooth', 'earbuds'],
          colors: ['Silver', 'Black' ]
        },
        {
          id: '1009',
          name: 'Apple AirPods Pro',
          description: 'Active Noise Cancellation, Transparency Mode',
          price: 249.79,
          currency: 'USD',
          inStock: true,
          rating: 4.7,
          reviewsCount: 1100,
          images: [
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985',
          ],
          category: 'Headphones',
          brand: 'Apple',
          tags: ['apple', 'airpods', 'noise cancelling', 'bluetooth'],
          colors: ['White']
        },
        {
          id: '1010',
          name: 'iPhone 15 (128 GB)',
          description:
            '15.49 cm Super Retina XDR Display , 48MP + 12MP | 12MP Front Camera & A16 Bionic Chip, 6 Core Processor',
          price: 749.59,
          currency: 'USD',
          inStock: true,
          rating: 4.7,
          reviewsCount: 230,
          images: [
            'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/l/g/-original-imagtc5frtz9j7tb.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70'
          ],
          category: 'Phone',
          brand: 'Apple',
          tags: [
            'apple', 'iphone', 'camera'],
          colors: ['Black', 'Blue', 'Pink', 'Yellow', 'Green' ]
        },
        {
          id: '1011',
          name: 'Sennheiser Momentum 3',
          description: 'Wireless Noise Cancelling Headphones with Alexa',
          price: 399.75,
          currency: 'USD',
          inStock: true,
          rating: 4.6,
          reviewsCount: 180,
          images: [
            'https://www.laptopsdirect.co.uk/Images/M3AEBTXL_1_Supersize.jpg?v=3',
            'https://images-cdn.ubuy.co.in/634f9881b6b6fc02d84b31e6-sennheiser-momentum-3-over-ear-wireless.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkgBUzDWDkIFESEFKVLin0JiPgsf2QxE5Qcm8z4U6qnr_ZyWgs44jl-06WW-TfIk7pTM&usqp=CAU'
          ],
          category: 'Headphones',
          brand: 'Sennheiser',
          tags: ['sennheiser', 'noise cancelling', 'bluetooth', 'headphones'],
          colors: ['Dark Gray', 'Silver', 'Black']
        },
        {
          id: '1012',
          name: 'SAMSUNG Galaxy S23 FE',
          description: 'Samsung Exynos 2200 Processor & 8 GB RAM | 256 GB ROM & 16.26 cm (6.4 inch) Full HD+ Display & 50MP + 12MP | 10MP Front Camera',
          price: 199.93,
          currency: 'USD',
          inStock: true,
          rating: 4.6,
          reviewsCount: 340,
          images: [
            'https://m.media-amazon.com/images/I/61H2nUIKiNL._AC_UF1000,1000_QL80_.jpg',
            'https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/b/o/j/-original-imagztn8vv8htmyx.jpeg?q=90&crop=false',
            'https://m.media-amazon.com/images/I/617l83eY1rL._AC_UF1000,1000_QL80_.jpg',
            'https://m.media-amazon.com/images/I/610Q2I5Or8L._AC_UF1000,1000_QL80_.jpg'
          ],
          category: 'Phone',
          brand: 'Samsung',
          tags: ['samsung', 'phone', 'camera'],
          colors: ['Cream', 'Graphite', 'Mint', 'Purple']
        },
        {
          id: '1013',
          name: 'Redmi Buds 5',
          description: 'Around-Ear Wireless Headphone with Noise Cancellation',
          price: 199.95,
          currency: 'USD',
          inStock: true,
          rating: 4.5,
          reviewsCount: 370,
          images: [
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/d/j/9/m2316e1-redmi-original-imagxmxfshcftc9c.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/3/b/d/m2316e1-redmi-original-imagxmxj7zfftbcy.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/5/y/t/m2316e1-redmi-original-imagxmxhsjzgnjxu.jpeg?q=70'
          ],
          category: 'Headphones',
          brand: 'Redmi',
          tags: ['jbl', 'noise cancelling', 'bluetooth', 'headphones'],
          colors: ['Black', 'Purple', 'White']
        },
        {
          id: '1014',
          name: 'boAt Airpods 121v2',
          description: 'Wireless Earbuds with Apple H1 Headphone Chip',
          price: 249.15,
          currency: 'USD',
          inStock: true,
          rating: 4.6,
          reviewsCount: 420,
          images: [
            'https://5.imimg.com/data5/SELLER/Default/2022/12/RY/RQ/BJ/98921853/boat-airdopes-121v2-tws-black-true-wireless-earbuds.jpg',
            'https://www.boat-lifestyle.com/cdn/shop/products/airdopes-121-v2-pink.png?v=1678773275',
            'https://d2j6dbq0eux0bg.cloudfront.net/images/1107006/1896778806.jpg'
          ],
          category: 'Headphones',
          brand: 'boAt',
          tags: ['beats', 'wireless', 'bluetooth', 'earbuds'],
          colors: ['Black', 'Pink', 'LightsteelBlue']
        },
        {
          id: '1015',
          name: 'Samsung Galaxy Buds',
          description: 'Wireless Earbuds with Apple H1 Headphone Chip',
          price: 249.91,
          currency: 'USD',
          inStock: true,
          rating: 4.6,
          reviewsCount: 420,
          images: [
            'https://dailydeals365.in/wp-content/uploads/2023/05/samsung-buds-live-brone.webp',
            'https://images-cdn.ubuy.ae/64ada7661361c6611a4bb0ad-samsung-galaxy-buds-live-true-wireless.jpg',
            'https://m.media-amazon.com/images/I/61noNa-QbFL._AC_UF894,1000_QL80_.jpg',
            'https://www.sentriq.my/image/galex/image/cache/data/all_product_images/product-3820/28FcyRU11637050796-1000x1000.jpg',

          ],
          category: 'Headphones',
          brand: 'Samsung',
          tags: ['beats', 'wireless', 'bluetooth', 'earbuds'],
          colors: ['Mystic Bronze', 'black', 'Navy Blue', 'White']
        },
        {
          id: '1016',
          name: 'OnePlus Buds pro 2',
          description: 'Wireless Earbuds with Apple H1 Headphone Chip',
          price: 249.55,
          currency: 'USD',
          inStock: true,
          rating: 4.6,
          reviewsCount: 420,
          images: [
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/z/l/f/buds-pro-2-oneplus-original-imaghtn6pfhr9yya.jpeg?q=70',
            'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/k/9/j/buds-pro-2-oneplus-original-imaghtn8geqzfvj7.jpeg?q=70'
          ],
          category: 'Headphones',
          brand: 'onePlus',
          tags: ['beats', 'wireless', 'bluetooth', 'earbuds'],
          colors: ['Green', 'Black']
        },
        {
          id: '1017',
          name: 'MacBook Air',
          description: 'Apple M3 chip with 8-core CPU, 10-core GPU, 16-core Neural Engine  8GB unified memory & 256GB SSD storage',
          price: 1700.5,
          currency: 'USD',
          inStock: true,
          rating: 4.9,
          reviewsCount: 786,
          images: [
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-starlight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367845124',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-spacegray-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688029',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba13-silver-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688030'
          ],
          category: 'Laptop',
          brand: 'Apple',
          tags: ['apple', 'laptop', 'graphic'],
          colors: ['Midnight', 'Starlight', 'Space Grey', 'Silver' ]
        },
      ],
    },
  };
}
