//

const candles = {
	title: 'Handicrafted Scented Candles',
	subtitle: 'With over hundreds of candles to choose from',
	products: [
		{ name: 'Ocean Breeze', image: '/candles/Ocean Breeze.jpg', size: '9oz' },
		{
			name: 'For You A Thousand Times Over',
			image: '/candles/For You A Thousand Times Over.jpg',
			size: '9oz',
		},
		{
			name: 'Call me by your Name',
			image: '/candles/Call me by your Name.jpg',
			size: '9oz',
		},
	],
};

const bathSalt = {
	title: 'Aroma Therapy Bath Salts',
	subtitle: 'To soothe your mind, body & spirit',
	products: [
		{
			name: 'Lavender Bath Salt',
			image: '/bathsalt/Lavender Bath Salt.jpg',
			size: '5oz',
		},
		{
			name: 'Mint - Lemongrass Bath Salt',
			image: '/bathsalt/Mint - Lemongrass Bath Salt.jpg',
			size: '5oz',
		},
		{
			name: 'Sweet Orange Bath Salt',
			image: '/bathsalt/Sweet Orange Bath Salt.jpg',
			size: '5oz',
		},
	],
};

const satinScrinchies = {
	title: 'Satin Scrunchies',
	subtitle: 'To keep your hair healthy, silky & smooth ',
	products: [
		{
			name: 'Go Pastel',
			image: '/satinmask/Go Pastel.jpg',
			size: '5oz',
		},
		{
			name: 'Midnight Blues',
			image: '/satinmask/Midnight Blues.jpg',
			size: '5oz',
		},
		{
			name: 'The Elite ',
			image: '/satinmask/The Elite.jpg',
			size: '5oz',
		},
	],
};

const satinMask = {
	title: 'Satin Masks',
	subtitle: 'To keep your hair healthy, silky & smooth ',
	products: [
		{
			name: 'Go Pastel',
			image: '/satinmask/Go Pastel.jpg',
			size: '5oz',
		},
		{
			name: 'Midnight Blues',
			image: '/satinmask/Midnight Blues.jpg',
			size: '5oz',
		},
		{
			name: 'The Elite ',
			image: '/satinmask/The Elite.jpg',
			size: '5oz',
		},
	],
};

export const sectionData = {
	candles: candles,
	bathsalt: bathSalt,
	satinscrunchies: satinScrinchies,
	satinmask: satinMask,
};

export const dummyItem = {
	name: 'For You A Thousand Times Over',
	image: '/candles/For You A Thousand Times Over.jpg',
	description: '',
	size: '9oz',
	price: 850,
	description: [
		{
			tag: 'p',
			details:
				'From little green aliens of unknown species to large beasts such as the formidable Rancor, from Light Sabers, an elegant weapon of a more civilized age, to the blasters, from the swift Starfighters to the terrifying Death Stars, Star Wars has it all. ',
		},
		{
			tag: 'p',
			details:
				'The universe created by George Lucas, the worldwide pop-culture phenomenon, Star Wars has a place in our hearts like no other. ',
		},
		{
			tag: 'p',
			details: 'And 4th May is Star Wars Day! ',
		},
		{
			tag: 'p',
			details:
				'In that honor, and as fans of Star Wars, Vincents Sphere is proud to present its limited edition "Star Wars Themed Candle: MAY THE FORCE BE WITH YOU featuring our current favorite, Grogu aka Baby Yoda',
		},
	],
	notes: 'Spring Flowers, Natural Patchouli & White Cedar',
};
