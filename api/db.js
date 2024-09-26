const faker = require('faker');

const TOTAL_PAGES = 5;

const baseProducts = [
	{ name: 'Rustic ceramic mug', description: 'Embrace the warmth of mornings with our rustic ceramic mug, perfect for your favorite brew. Its earthy texture and sturdy handle ensure comfort with every sip', image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg', category: 'mugs'},
	{
		name: 'Not today t-shirt',
		description: 'Make a statement with our "Not Today" t-shirt, a bold declaration of your independence and determination. Crafted from premium cotton for both style and comfort.',
		image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg',
		category: 't-shirts' 
	},
	{
		name: 'Black Ring mug',
		description: 'Elevate your coffee experience with our Black Ring mug. Its sleek design and matte finish exude sophistication, while its generous size ensures your favorite beverage stays hot.',
		image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg',
		category: 'mugs' 
	},
	{
		name: 'Broken Saints t-shirt',
		description: 'Channel your inner rebel with our "Broken Saints" t-shirt. Inspired by street art, this tee combines edgy graphics with superior comfort for a look that' + "'s effortlessly cool.",
		image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg',
		category: 't-shirts' 
	},
	{
		name: 'Outcast t-shirt',
		description: 'Stand out from the crowd in our "Outcast" t-shirt. With its unique design and comfortable fit, it' + "'s the perfect way to express your individuality and confidence.",
		image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg',
		category: 't-shirts' 
	},
	{
		name: 'The Grounds mug',
		description: "Dive into your day with The Grounds mug. Its timeless design and durable construction make it the perfect companion for your morning routine, whether you're at home or on the go.",
		image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg',
		category: 'mugs' 
	},
	{
		name: 'Evening t-shirt',
		description: 'Unwind in style with our "Evening" t-shirt. Crafted from soft, breathable fabric and featuring a relaxed fit, it' + "'s the perfect choice for laid-back evenings and casual outings.",
		image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg',
		category: 't-shirts' 
	},
	{
		name: 'Matte black mug',
		description: 'Add a touch of elegance to your coffee ritual with our Matte Black mug. Its minimalist design and sleek finish create a modern aesthetic, while its sturdy build ensures long-lasting enjoyment.',
		image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg',
		category: 'mugs' 
	},
	{
		name: 'Never settle mug',
		description: 'Start your day with the right attitude with our "Never Settle" mug. With its motivational message and durable construction, it' + "'s the perfect reminder to pursue your goals with determination.",
		image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg',
		category: 'mugs' 
	},
	{
		name: 'DREAMER t-shirt',
		description: 'Inspire others with our "DREAMER" t-shirt. Featuring a bold design and comfortable fabric, it' + "'s the perfect choice for dreamers who aren't afraid to chase their aspirations.",
		image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg',
		category: 't-shirts' 
	},
	{
		name: 'Decaf! P&Co mug',
		description: 'Enjoy your caffeine fix in style with our Decaf! P&Co mug. Its playful design and premium quality make it the perfect companion for your morning routine, whether you prefer caffeinated or decaffeinated brews',
		image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg',
		category: 'mugs' 
	},
	{
		name: 'Ramones t-shirt',
		description: "Pay homage to rock 'n' roll legends with our Ramones t-shirt. Featuring iconic graphics and a classic fit, it's a must-have for music enthusiasts and trendsetters alike.",
		image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg',
		category: 't-shirts' 
	},
]

const allProducts = new Array(TOTAL_PAGES).fill(1).reduce((acc) => {
  const products = baseProducts.map(product => ({
    ...product,

    id: faker.datatype.uuid(),
    price_in_cents: faker.datatype.number({
      min: 2000,
      max: 10000,
    }),
    sales: faker.datatype.number(40),
    created_at: faker.date.past()
  })).sort(() => .5 - Math.random());

  return [...acc,
...products]
},
[])

module.exports = {
  products: allProducts
}
