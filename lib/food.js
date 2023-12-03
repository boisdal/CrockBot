import {
	calories_huge,
	calories_large,
	calories_med,
	calories_medsmall,
	calories_small,
	calories_superhuge,
	calories_tiny,
	dry_fast,
	dry_med,
	dry_superfast,
	healing_huge,
	healing_large,
	healing_med,
	healing_medlarge,
	healing_medsmall,
	healing_small,
	healing_superhuge,
	healing_tiny,
	modes,
	perish_fast,
	perish_med,
	perish_one_day,
	perish_preserved,
	perish_slow,
	perish_superfast,
	perish_superslow,
	perish_two_day,
	sanity_huge,
	sanity_med,
	sanity_medlarge,
	sanity_small,
	sanity_supertiny,
	sanity_tiny,
	spoiled_health,
	spoiled_hunger,
	stack_size_largeitem,
	stack_size_meditem,
	stack_size_smallitem,
	total_day_time
} from './constants.js';

export const food = {
	
//--------------------------------------------------------------------------------\\	
//	               DON'T STARVE VANILLA INGREDIENTS + EDIBLES                     \\
//--------------------------------------------------------------------------------\\

	acorn: {
		name: 'Birchnut',
		seed: 1,
		perish: perish_preserved,
		stack: stack_size_smallitem,
		mode: 'giants'
	},
	acorn_cooked: {
		name: 'Roasted Birchnut',
		ideal: true,
		seed: 1,
		hunger: calories_tiny,
		health: healing_tiny,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'giants'
	},
	butter: {
		name: 'Butter',
		fat: 1,
		dairy: 1,
		health: healing_large,
		hunger: calories_med,
		sanity: 0,
		perish: perish_superslow,
		stack: stack_size_smallitem
	},
	butterflywings: {
		name: 'Butterfly Wings',
		decoration: 2,
		health: healing_medsmall,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem
	},
	cactusflower: {
		name: 'Cactus Flower',
		veggie: 0.5,
		hunger: calories_small,
		health: healing_medsmall,
		sanity: sanity_tiny,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		defaultExclude: true,
		mode: 'giants'
	},
	deerclopseyeball: {
		name: 'Deerclops Eyeball',
		uncookable: true,
		health: healing_huge,
		hunger: calories_huge,
		sanity: -sanity_med
	},
	bird_egg: {
		name: 'Egg',
		egg: 1,
		health: 0,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		defaultExclude: true,
		rot: 'rottenegg',
	},
	bird_egg_cooked: {
		name: 'Cooked Egg',
		egg: 1,
		precook: 1,
		health: 0,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem
	},
	rottenegg: {
		name: 'Rotten Egg',
		uncookable: true,
		health: spoiled_health,
		hunger: spoiled_hunger,
		sanity: 0,
		stack: stack_size_smallitem
	},
	cutlichen: {
		name: 'Lichen',
		isveggie: true,
		veggie: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: -sanity_tiny,
		perish: perish_two_day
	},
	eel: {
		name: 'Eel',
		ismeat: true,
		meat: 0.5,
		fish: 1,
		health: healing_small,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		dry: 'morsel_dried',
		drytime: dry_fast
	},
	eel_cooked: {
		name: 'Cooked Eel',
		ismeat: true,
		meat: 0.5,
		fish: 1,
		health: healing_medsmall,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem
	},
	fish: {
		name: 'Fish',
		ismeat: true,
		meat: 0.5,
		fish: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		drytime: dry_fast,
		dry: 'morsel_dried'
	},
	fish_cooked: {
		name: 'Cooked Fish',
		ismeat: true,
		meat: 0.5,
		fish: 1,
		precook: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem
	},
	froglegs: {
		name: 'Frog Legs',
		ismeat: true,
		meat: 0.5,
		health: 0,
		hunger: calories_small,
		perish: perish_fast,
		sanity: -sanity_small,
		stack: stack_size_smallitem
	},
	froglegs_cooked: {
		name: 'Cooked Frog Legs',
		ismeat: true,
		meat: 0.5,
		precook: 1,
		health: healing_tiny,
		hunger: calories_small,
		perish: perish_med,
		sanity: 0,
		stack: stack_size_smallitem
	},
	//Pre-Hamlet foliage could be eaten but wasn't an ingredient
	// foliage: {
	// name: 'Foliage',
	// uncookable: true,
	// health: healing_tiny,
	// hunger: 0,
	// sanity: 0,
	// perish: perish_fast,
	// stack: stack_size_smallitem
	// },
	goatmilk: {
		name: 'Electric Milk',
		dairy: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: sanity_small,
		perish: perish_fast,
		stack: stack_size_smallitem,
		defaultExclude: true,
		mode: 'giants'
	},
	honey: {
		name: 'Honey',
		sweetener: true,
		health: healing_small,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_superslow,
		stack: stack_size_smallitem,
		defaultExclude: true
	},
	honeycomb: {
		name: 'Honeycomb',
		skip: true,
		sweetener: true,
		defaultExclude: true
	},
	ice: {
		name: 'Ice',
		isfrozen: true,
		frozen: 1,
		health: healing_tiny / 2,
		hunger: calories_tiny / 4,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		defaultExclude: true,
		mode: 'giants'
	},
	lightbulb: {
		name: 'Light Bulb',
		health: healing_tiny,
		hunger: 0,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		uncookable: true
	},
	mandrake: {
		name: 'Mandrake',
		veggie: 1,
		magic: 1,
		health: healing_huge,
		hunger: calories_huge,
		sanity: 0,
		defaultExclude: true,
		stack: stack_size_smallitem
	},
	mandrake_cooked: {
		name: 'Cooked Mandrake',
		uncookable: true,
		veggie: 1,
		magic: 1,
		precook: 1,
		health: healing_superhuge,
		hunger: calories_superhuge,
		sanity: 0,
		stack: stack_size_smallitem
	},
	mole: {
		name: 'Moleworm',
		ideal: true,
		meat: 0.5,
		perish: total_day_time * 2,
		cook: 'morsel_cooked',
		defaultExclude: true,
		mode: 'giants'
	},
	plantmeat: {
		name: 'Leafy Meat',
		ismeat: true,
		meat: 1,
		health: 0,
		hunger: calories_small,
		sanity: -sanity_small,
		perish: perish_fast,
		stack: stack_size_smallitem,
		defaultExclude: true
	},
	plantmeat_cooked: {
		name: 'Cooked Leafy Meat',
		ismeat: true,
		meat: 1,
		health: healing_tiny,
		hunger: calories_medsmall,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		defaultExclude: true
	},
	monstermeat: {
		name: 'Monster Meat',
		ismeat: true,
		meat: 1,
		monster: true,
		health: -healing_med,
		hunger: calories_medsmall,
		sanity: -sanity_med,
		perish: perish_fast,
		stack: stack_size_meditem,
		dry: 'monstermeat_dried',
		drytime: dry_fast
	},
	monstermeat_cooked: {
		name: 'Cooked Monster Meat',
		ismeat: true,
		meat: 1,
		monster: true,
		precook: 1,
		health: -healing_small,
		hunger: calories_medsmall,
		sanity: -sanity_small,
		perish: perish_slow,
		stack: stack_size_meditem
	},
	monstermeat_dried: {
		name: 'Monster Jerky',
		ismeat: true,
		meat: 1,
		monster: true,
		dried: 1,
		health: -healing_small,
		hunger: calories_medsmall,
		sanity: -sanity_tiny,
		perish: perish_preserved,
		stack: stack_size_meditem
	},
	meat: {
		name: 'Meat',
		ismeat: true,
		meat: 1,
		health: healing_tiny,
		hunger: calories_med,
		sanity: -sanity_small,
		perish: perish_fast,
		stack: stack_size_meditem,
		dry: 'meat_dried',
		drytime: dry_med
	},
	meat_cooked: {
		name: 'Cooked Meat',
		ismeat: true,
		meat: 1,
		precook: 1,
		health: healing_small,
		hunger: calories_med,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_meditem
	},
	meat_dried: {
		name: 'Jerky',
		ismeat: true,
		meat: 1,
		dried: 1,
		health: healing_med,
		hunger: calories_med,
		sanity: sanity_med,
		perish: perish_preserved,
		stack: stack_size_meditem
	},
	morsel: {
		name: 'Morsel',
		ismeat: true,
		meat: 0.5,
		health: 0,
		hunger: calories_small,
		sanity: -sanity_small,
		perish: perish_fast,
		stack: stack_size_smallitem,
		drytime: dry_fast,
		dry: 'morsel_dried'
	},
	morsel_cooked: {
		name: 'Cooked Morsel',
		raw: 'morsel',
		ismeat: true,
		meat: 0.5,
		precook: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem
	},
	morsel_dried: {
		name: 'Small Jerky',
		wet: 'morsel',
		ismeat: true,
		meat: 0.5,
		dried: 1,
		health: healing_medsmall,
		hunger: calories_small,
		sanity: sanity_small,
		perish: perish_preserved,
		stack: stack_size_smallitem
	},
	drumstick: {
		name: 'Drumstick',
		ismeat: true,
		ideal: true,
		meat: 0.5,
		health: 0,
		hunger: calories_small,
		sanity: -sanity_small,
		perish: perish_fast,
		stack: stack_size_meditem,
		drytime: dry_fast,
		dry: 'morsel_dried'
	},
	drumstick_cooked: {
		name: 'Fried Drumstick',
		ismeat: true,
		meat: 0.5,
		precook: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_meditem
	},
	batwing: {
		name: 'Batilisk Wing',
		ismeat: true,
		meat: 0.5,
		health: healing_small,
		hunger: calories_small,
		sanity: -sanity_small,
		perish: perish_fast,
		stack: stack_size_smallitem,
		drytime: dry_med,
		defaultExclude: true,
		dry: 'morsel_dried'
	},
	batwing_cooked: {
		name: 'Cooked Batilisk Wing',
		ismeat: true,
		meat: 0.5,
		health: healing_medsmall,
		hunger: calories_medsmall,
		sanity: 0,
		defaultExclude: true,
		perish: perish_med
	},
	minotaurhorn: {
		name: 'Guardian\'s Horn',
		uncookable: true,
		ismeat: true,
		health: healing_huge,
		hunger: calories_huge,
		sanity: -sanity_med
	},
	red_mushroom: {
		name: 'Red Cap',
		basename: 'CapRed',
		veggie: 0.5,
		ideal: true,
		health: -healing_med,
		hunger: calories_small,
		sanity: 0,
		perish: perish_med,
		cook: 'red_mushroom_cooked',
		stack: stack_size_smallitem,
		defaultExclude: true
	},
	red_mushroom_cooked: {
		name: 'Cooked Red Cap',
		veggie: 0.5,
		health: healing_tiny,
		hunger: 0,
		sanity: -sanity_small,
		perish: perish_med,
		stack: stack_size_smallitem,
		defaultExclude: true
	},
	green_mushroom: {
		name: 'Green Cap',
		basename: 'CapGreen',
		veggie: 0.5,
		ideal: true,
		health: 0,
		hunger: calories_small,
		sanity: -sanity_huge,
		perish: perish_med,
		cook: 'green_mushroom_cooked',
		stack: stack_size_smallitem,
		defaultExclude: true
	},
	green_mushroom_cooked: {
		name: 'Cooked Green Cap',
		veggie: 0.5,
		health: -healing_tiny,
		hunger: 0,
		sanity: sanity_med,
		perish: perish_med,
		stack: stack_size_smallitem,
		defaultExclude: true
	},
	blue_mushroom: {
		name: 'Blue Cap',
		basename: 'CapBlue',
		veggie: 0.5,
		ideal: true,
		health: healing_med,
		hunger: calories_small,
		sanity: -sanity_med,
		perish: perish_med,
		cook: 'blue_mushroom_cooked',
		stack: stack_size_smallitem
	},
	blue_mushroom_cooked: {
		name: 'Cooked Blue Cap',
		veggie: 0.5,
		health: -healing_small,
		hunger: 0,
		sanity: sanity_small,
		perish: perish_med,
		stack: stack_size_smallitem
	},
	petals: {
		name: 'Petals',
		uncookable: true,
		health: healing_tiny,
		hunger: 0,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem
	},
	petals_evil: {
		name: 'Dark Petals',
		basename: 'Petals.',
		uncookable: true,
		health: 0,
		hunger: 0,
		sanity: -sanity_tiny,
		perish: perish_fast,
		stack: stack_size_smallitem
	},
	seeds: {
		name: 'Seeds',
		uncookable: true,
		health: 0,
		//seed: 1,
		//  In Don't Starve's code, this is commented out.
		//  I'm guessing they considered making these usable
		//  in the crock pot again, but changed their minds.
		hunger: calories_tiny / 2,
		sanity: 0,
		perish: perish_superslow,
		stack: stack_size_smallitem
	},
	seeds_cooked: {
		name: 'Toasted Seeds',
		uncookable: true,
		health: healing_tiny,
		hunger: calories_tiny / 2,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem
	},
	spoiled_food: {
		name: 'Rot',
		uncookable: true,
		health: spoiled_health,
		hunger: spoiled_hunger,
		sanity: 0,
		stack: stack_size_smallitem
	},
	tallbirdegg: {
		name: 'Tallbird Egg',
		egg: 4,
		health: healing_small,
		hunger: calories_med,
		sanity: 0,
		defaultExclude: true
	},
	tallbirdegg_cooked: {
		name: 'Fried Tallbird Egg',
		egg: 4,
		precook: 1,
		health: 0,
		hunger: calories_large,
		sanity: 0,
		perish: perish_fast,
		defaultExclude: true
	},
	trunk_summer: {
		name: 'Koalefant Trunk',
		uncookable: true,
		ismeat: true,
		health: healing_medlarge,
		hunger: calories_large,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_meditem
	},
	trunk_summer_cooked: {
		name: 'Koalefant Trunk Steak',
		uncookable: true,
		ismeat: true,
		health: healing_large,
		hunger: calories_huge,
		sanity: 0,
		perish: perish_slow,
		stack: stack_size_meditem
	},
	trunk_winter: {
		name: 'Winter Koalefant Trunk',
		uncookable: true,
		ismeat: true,
		health: healing_medlarge,
		hunger: calories_large,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_meditem
	},
	twigs: {
		name: 'Twigs',
		inedible: 1
	},
	cave_banana: {
		// Shipwrecked calls them bananas, less confusing to go with that one (instead of Cave Banana)
		name: 'Banana',
		ideal: true,
		isfruit: true,
		fruit: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_med
	},
	cave_banana_cooked: {
		name: 'Cooked Banana',
		isfruit: true,
		fruit: 1,
		precook: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast
	},
	carrot: {
		name: 'Carrot',
		isveggie: true,
		veggie: 1,
		health: healing_tiny,
		hunger: calories_small,
		perish: perish_med,
		sanity: 0,
		stack: stack_size_smallitem
	},
	carrot_cooked: {
		name: 'Roasted Carrot',
		isveggie: true,
		veggie: 1,
		precook: 1,
		health: healing_small,
		hunger: calories_small,
		perish: perish_fast,
		sanity: 0,
		stack: stack_size_smallitem
	},
	corn: {
		name: 'Corn',
		ideal: true,
		isveggie: true,
		veggie: 1,
		health: healing_small,
		hunger: calories_med,
		perish: perish_med,
		sanity: 0,
		stack: stack_size_smallitem
	},
	corn_cooked: {
		name: 'Popcorn',
		isveggie: true,
		veggie: 1,
		precook: 1,
		health: healing_small,
		hunger: calories_small,
		perish: perish_slow,
		sanity: 0,
		stack: stack_size_smallitem
	},
	pumpkin: {
		name: 'Pumpkin',
		isveggie: true,
		veggie: 1,
		health: healing_small,
		hunger: calories_large,
		perish: perish_med,
		sanity: 0,
		stack: stack_size_meditem
	},
	pumpkin_cooked: {
		name: 'Hot Pumpkin',
		isveggie: true,
		veggie: 1,
		precook: 1,
		health: healing_medsmall,
		hunger: calories_large,
		perish: perish_fast,
		sanity: 0,
		stack: stack_size_meditem
	},
	eggplant: {
		name: 'Eggplant',
		isveggie: true,
		veggie: 1,
		health: healing_medsmall,
		hunger: calories_med,
		perish: perish_med,
		sanity: 0,
		stack: stack_size_meditem
	},
	eggplant_cooked: {
		name: 'Braised Eggplant',
		isveggie: true,
		veggie: 1,
		precook: 1,
		health: healing_med,
		hunger: calories_med,
		perish: perish_fast,
		sanity: 0,
		stack: stack_size_meditem
	},
	durian: {
		name: 'Durian',
		isfruit: true,
		monster: 1,
		fruit: 1,
		health: -healing_small,
		hunger: calories_med,
		perish: perish_med,
		sanity: -sanity_tiny,
		stack: stack_size_meditem
	},
	durian_cooked: {
		name: 'Extra Smelly Durian',
		isfruit: true,
		monster: 1,
		fruit: 1,
		precook: 1,
		health: 0,
		hunger: calories_med,
		perish: perish_fast,
		sanity: -sanity_tiny,
		stack: stack_size_meditem
	},
	pomegranate: {
		name: 'Pomegranate',
		isfruit: true,
		fruit: 1,
		health: healing_small,
		hunger: calories_tiny,
		perish: perish_fast,
		sanity: 0,
		stack: stack_size_smallitem
	},
	pomegranate_cooked: {
		name: 'Sliced Pomegranate',
		isfruit: true,
		fruit: 1,
		precook: 1,
		health: healing_med,
		hunger: calories_small,
		perish: perish_superfast,
		sanity: 0,
		stack: stack_size_smallitem
	},
	dragonfruit: {
		name: 'Dragon Fruit',
		isfruit: true,
		fruit: 1,
		health: healing_small,
		hunger: calories_tiny,
		perish: perish_fast,
		sanity: 0,
		stack: stack_size_smallitem
	},
	dragonfruit_cooked: {
		name: 'Prepared Dragon Fruit',
		isfruit: true,
		fruit: 1,
		precook: 1,
		health: healing_med,
		hunger: calories_small,
		perish: perish_superfast,
		sanity: 0,
		stack: stack_size_smallitem
	},
	berries: {
		name: 'Berries',
		isfruit: true,
		fruit: 0.5,
		health: 0,
		hunger: calories_tiny,
		perish: perish_fast,
		sanity: 0,
		stack: stack_size_smallitem
	},
	berries_cooked: {
		name: 'Roasted Berries',
		isfruit: true,
		fruit: 0.5,
		precook: 1,
		health: healing_tiny,
		hunger: calories_small,
		perish: perish_superfast,
		sanity: 0,
		stack: stack_size_smallitem
	},

//--------------------------------------------------------------------------------\\	
//	               DON'T STARVE REIGN OF GIANTS INGREDIENTS                       \\
//--------------------------------------------------------------------------------\\

	cactusmeat: {
		name: 'Cactus Flesh',
		ideal: true,
		veggie: 1,
		hunger: calories_small,
		health: -healing_small,
		perish: perish_med,
		sanity: -sanity_tiny,
		stack: stack_size_smallitem,
		mode: 'giants'
	},
	cactusmeat_cooked: {
		name: 'Cooked Cactus Flesh',
		veggie: 1,
		hunger: calories_small,
		health: healing_tiny,
		perish: perish_med,
		sanity: sanity_med,
		precook: 1,
		stack: stack_size_smallitem,
		mode: 'giants'
	},
	watermelon: {
		name: 'Watermelon',
		isfruit: true,
		fruit: 1,
		ideal: true,
		hunger: calories_small,
		health: healing_small,
		perish: perish_fast,
		sanity: sanity_tiny,
		stack: stack_size_smallitem,
		mode: 'giants'
	},
	watermelon_cooked: {
		name: 'Grilled Watermelon',
		isfruit: true,
		fruit: 1,
		hunger: calories_small,
		health: healing_tiny,
		perish: perish_superfast,
		sanity: sanity_tiny * 1.5,
		precook: 1,
		stack: stack_size_smallitem,
		mode: 'giants'
	},
	wormlight: {
		name: 'Glow Berry',
		uncookable: true,
		health: healing_medsmall + healing_small,
		hunger: calories_medsmall,
		sanity: -sanity_small,
		perish: perish_med,
		note: 'Gives 90 seconds of light'
	},
	glommerfuel: {
		name: 'Glommer\'s Goop',
		uncookable: true,
		health: healing_large,
		hunger: calories_tiny,
		sanity: -sanity_huge,
		mode: 'giants'
	},

//--------------------------------------------------------------------------------\\	
//	                   DON'T STARVE SHIPWRECKED INGREDIENTS                       \\
//--------------------------------------------------------------------------------\\

	coral_brain: {
		name: 'Brainy Matter',
		uncookable: true,
		health: -10,
		hunger: 10,
		sanity: 50,
		perish: perish_one_day,
		mode: 'shipwrecked'
	},
	blubber: {
		name: 'Blubber',
		uncookable: true,
		health: 10,
		hunger: 10,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_largeitem,
		mode: 'shipwrecked'
	},
	seaweed: {
		name: 'Seaweed',
		ideal: true,
		veggie: 1,
		health: healing_tiny,
		hunger: calories_tiny,
		sanity: -sanity_small,
		perish: perish_fast,
		stack: stack_size_smallitem,
		dry: 'seaweed_dried',
		drytime: dry_fast,
		mode: 'shipwrecked'
	},
	seaweed_cooked: {
		name: 'Roasted Seaweed',
		veggie: 1,
		health: healing_small,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'shipwrecked'
	},
	seaweed_dried: {
		name: 'Dried Seaweed',
		veggie: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: 0,
		perish: perish_preserved,
		stack: stack_size_smallitem,
		mode: 'shipwrecked'
	},
	sweet_potato: {
		name: 'Sweet Potato',
		veggie: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'shipwrecked'
	},
	sweet_potato_cooked: {
		name: 'Cooked Sweet Potato',
		veggie: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'shipwrecked'
	},
	coffeebeans: {
		name: 'Coffee Beans',
		fruit: 0.5,
		health: 0,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'shipwrecked'
	},
	coffeebeans_cooked: {
		name: 'Roasted Coffee Beans',
		ideal: true,
		fruit: 1,
		health: 0,
		hunger: calories_tiny,
		sanity: -sanity_tiny,
		perish: perish_slow,
		stack: stack_size_smallitem,
		note: 'Gives 5 bonus speed (+83%) for 30 seconds',
		mode: 'shipwrecked'
	},
	coconut_halved: {
		name: 'Halved Coconut',
		basename: 'Coconut.',
		fruit: 1,
		fat: 1,
		health: healing_tiny,
		hunger: calories_tiny / 2,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		cook: 'coconut_cooked',
		mode: 'shipwrecked'
	},
	coconut_cooked: {
		name: 'Roasted Coconut',
		fruit: 1,
		fat: 1,
		health: healing_tiny,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'shipwrecked'
	},
	doydoyegg: {
		name: 'Doydoy Egg',
		egg: 1,
		health: healing_small,
		hunger: calories_med,
		sanity: 0,
		perish: perish_med,
		mode: 'shipwrecked'
	},
	doydoyegg_cooked: {
		name: 'Fried Doydoy Egg',
		egg: 1,
		health: 0,
		hunger: calories_large,
		sanity: 0,
		perish: perish_fast,
		mode: 'shipwrecked'
	},
	tropical_fish: {
		name: 'Tropical Fish',
		skip: true,
		ismeat: true,
		meat: 0.5,
		fish: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		cook: 'fish_raw_small_cooked',
		dry: 'morsel_dried',
		drytime: dry_fast,
		mode: 'shipwrecked'
	},
	fish_raw: {
		name: 'Raw Fish',
		meat: 0.5,
		fish: 1,
		health: healing_tiny,
		hunger: calories_med,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		cook: 'fish_med_cooked',
		dry: 'meat_dried',
		drytime: dry_fast,
		mode: 'shipwrecked'
	},
	fish_med: {
		name: 'Dead Dogfish',
		meat: 0.5,
		fish: 1,
		health: healing_tiny,
		hunger: calories_med,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		rot: 'spoiled_fish',
		dry: 'meat_dried',
		drytime: dry_fast,
		mode: 'shipwrecked'
	},
	dead_swordfish: {
		name: 'Swordfish',
		uncookable: true,
		health: healing_tiny,
		hunger: calories_med,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		cook: 'fish_med_cooked',
		rot: 'spoiled_fish',
		dry: 'meat_dried',
		drytime: dry_fast,
		mode: 'shipwrecked'
	},
	fish_med_cooked: {
		name: 'Fish Steak',
		meat: 0.5,
		fish: 1,
		health: healing_med,
		hunger: calories_med,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'shipwrecked'
	},
	/* swordfish: { // this refers to the living prefab, probably an accident?
		name: 'Swordfish',
		meat: 0.5,
		fish: 1,
		health: healing_tiny,
		hunger: calories_med,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		rot: 'spoiled_fish',
		mode: 'shipwrecked',
		cook: 'fish_med_cooked'
	}, */
	shark_fin: {
		name: 'Shark Fin',
		meat: 0.5,
		fish: 1,
		health: healing_med,
		hunger: calories_med,
		sanity: -sanity_med,
		perish: perish_fast,
		stack: stack_size_largeitem,
		mode: 'shipwrecked'
	},
	limpets: {
		name: 'Limpets',
		ideal: true,
		fish: 0.5,
		health: 0,
		hunger: calories_small,
		sanity: -sanity_small,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'shipwrecked'
	},
	limpets_cooked: {
		name: 'Cooked Limpets',
		fish: 0.5,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'shipwrecked'
	},
	mussel: {
		name: 'Mussel',
		fish: 0.5,
		health: 0,
		hunger: calories_small,
		sanity: -sanity_small,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		mode: 'shipwrecked'
	},
	mussel_cooked: {
		name: 'Cooked Mussel',
		fish: 0.5,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		mode: 'shipwrecked'
	},
	mysterymeat: {
		name: 'Bile-Covered Slop',
		uncookable: true,
		health: spoiled_health,
		hunger: spoiled_hunger,
		sanity: 0,
		stack: stack_size_meditem,
		mode: 'shipwrecked'
	},
	jellyfish: {
		name: 'Jellyfish',
		fish: 1,
		jellyfish: 1,
		monster: 1,
		perish: perish_one_day * 1.5,
		mode: 'shipwrecked'
	},
	jellyfish_dead: {
		name: 'Dead Jellyfish',
		basename: 'Jellyfish.',
		fish: 1,
		jellyfish: 1,
		monster: 1,
		health: 10,
		hunger: 10,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_meditem,
		cook: 'jellyfish_cooked',
		dry: 'jellyfish_dried',
		drytime: dry_fast,
		mode: 'shipwrecked'
	},
	jellyfish_cooked: {
		name: 'Cooked Jellyfish',
		fish: 1,
		jellyfish: 1,
		monster: 1,
		health: 10,
		hunger: calories_medsmall,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_meditem,
		mode: 'shipwrecked'
	},
	jellyfish_dried: {
		name: 'Dried Jellyfish',
		fish: 1,
		jellyfish: 1,
		monster: 1,
		health: 10,
		hunger: calories_medsmall,
		sanity: 0,
		perish: perish_preserved,
		stack: stack_size_meditem,
		mode: 'shipwrecked'
	},
	lobster: {
		name: 'Wobster',
		fish: 2,
		perish: total_day_time * 2,
		defaultExclude: true,
		mode: 'shipwrecked'
	},
	lobster_dead: {
		name: 'Dead Wobster',
		basename: 'Wobster.',
		uncookable: true,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_largeitem,
		cook: 'lobster_cooked',
		mode: 'shipwrecked'
	},
	lobster_cooked: {
		name: 'Delicious Wobster',
		uncookable: true,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'shipwrecked'
	},
	crab: {
		name: 'Crab',
		skip: true,
		fish: 0.5,
		perish: total_day_time * 2,
		cook: 'fish_raw_small_cooked',
		mode: 'shipwrecked'
	},
	fish_raw_small: {
		name: 'Fish Morsel',
		fish: 0.5,
		health: healing_tiny,
		hunger: calories_small,
		perish: perish_superfast,
		sanity: 0,
		stack: stack_size_smallitem,
		dry: 'morsel_dried',
		drytime: dry_fast,
		mode: 'shipwrecked'
	},
	fish_raw_small_cooked: {
		name: 'Cooked Fish Morsel',
		fish: 0.5,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'shipwrecked'
	},
	tigereye: {
		name: 'Eye of the Tiger Shark',
		uncookable: true,
		health: healing_huge,
		hunger: calories_huge,
		sanity: -sanity_med,
		stack: stack_size_largeitem,
		mode: 'shipwrecked'
	},
	dragoonheart: {
		name: 'Dragoon Heart',
		uncookable: true,
		health: healing_medsmall + healing_small,
		hunger: calories_med,
		sanity: -sanity_small,
		perish: perish_med,
		stack: stack_size_largeitem,
		note: 'Gives 90 seconds of light',
		mode: 'shipwrecked'
	},
	roe: {
		name: 'Roe',
		meat: 0.5,
		fish: 1,
		health: healing_tiny,
		hunger: calories_tiny / 2,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		mode: 'shipwrecked'
	},
	roe_cooked: {
		name: 'Cooked Roe',
		meat: 0.5,
		fish: 1,
		health: 0,
		hunger: calories_tiny / 2,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'shipwrecked'
	},
	fish3: {
		name: 'Purple Grouper',
		meat: 0.5,
		fish: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		note: 'Gives 2 bonus speed (+33%) for 30 seconds',
		mode: 'shipwrecked'
	},
	fish3_cooked: {
		name: 'Cooked Purple Grouper',
		meat: 0.5,
		fish: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		note: 'Gives 2 bonus speed (+33%) for 30 seconds',
		mode: 'shipwrecked'
	},
	fish4: {
		name: 'Pierrot Fish',
		meat: 0.5,
		fish: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		note: 'Dries 1/s for 30 seconds',
		mode: 'shipwrecked'
	},
	fish4_cooked: {
		name: 'Cooked Pierrot Fish',
		meat: 0.5,
		fish: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		note: 'Dries 1/s for 30 seconds',
		mode: 'shipwrecked'
	},
	fish5: {
		name: 'Neon Quattro',
		meat: 0.5,
		fish: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		note: '-3 heat',
		mode: 'shipwrecked'
	},
	fish5_cooked: {
		name: 'Cooked Neon Quattro',
		meat: 0.5,
		fish: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		note: '-3 heat',
		mode: 'shipwrecked'
	},
	rainbowjellyfish: {
		name: 'Rainbow Jellyfish',
		fish: 1,
		jellyfish: 1,
		monster: 1,
		perish: perish_one_day * 1.5,
		note: 'Makes the player glow in the dark for 2 minutes',
		mode: 'shipwrecked'
	},
	rainbowjellyfish_dead: {
		name: 'Dead Rainbow Jellyfish',
		basename: 'Rainbow Jellyfish.',
		fish: 1,
		jellyfish: 1,
		monster: 1,
		health: healing_med / 2,
		hunger: 10,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_meditem,
		cook: 'rainbowjellyfish_cooked',
		dry: 'jellyfish_dried',
		drytime: dry_fast,
		note: 'Makes the player glow in the dark for 2 minutes',
		mode: 'shipwrecked'
	},
	rainbowjellyfish_cooked: {
		name: 'Cooked Rainbow Jellyfish',
		fish: 1,
		jellyfish: 1,
		monster: 1,
		health: healing_med / 2,
		hunger: calories_medsmall,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_meditem,
		mode: 'shipwrecked'
	},

//--------------------------------------------------------------------------------\\	
//	                     DON'T STARVE HAMLET INGREDIENTS                          \\
//--------------------------------------------------------------------------------\\

	asparagus: {
		name: 'Asparagus',
		isveggie: true,
		veggie: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'hamlet'
	},
	asparagus_cooked: {
		name: 'Cooked Asparagus',
		isveggie: true,
		veggie: 1,
		health: healing_small,
		hunger: calories_med,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		mode: 'hamlet'
	},
	radish: {
		name: 'Radish',
		isveggie: true,
		veggie: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_slow,
		stack: stack_size_smallitem,
		mode: 'hamlet'
	},
	radish_cooked: {
		name: 'Cooked Radish',
		isveggie: true,
		veggie: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'hamlet'
	},
	aloe: {
		name: 'Aloe',
		isveggie: true,
		veggie: 1,
		health: healing_medsmall,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'hamlet'
	},
	aloe_cooked: {
		name: 'Cooked Aloe',
		isveggie: true,
		veggie: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		mode: 'hamlet'
	},
	jellybug: {
		name: 'Bean Bugs',
		bug: 1,
		health: 0,
		hunger: calories_tiny,
		sanity: -sanity_small,
		perish: perish_superslow,
		stack: stack_size_smallitem,
		mode: 'hamlet'
	},
	jellybug_cooked: {
		name: 'Cooked Bean Bugs',
		bug: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: -sanity_tiny,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'hamlet'
	},
	foliage: {
		name: 'Foliage',
		veggie: 1,
		health: healing_tiny,
		hunger: 0,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'hamlet' //as an ingredient, but was a food before... probably okay to leave like this
	},
	cutnettle: {
		name: 'Nettle',
		antihistamine: 1,
		health: 0,
		hunger: 0,
		sanity: 0,
		note: 'Prevents hayfever for 200 seconds',
		stack: stack_size_smallitem,
		mode: 'hamlet'
	},
	snake_bone: {
		name: 'Snake Bone',
		isbone: true,
		bone: 1,
		stack: stack_size_meditem,
		mode: 'hamlet'
	},
	piko_orange: {
		name: 'Orange Piko',
		filter: 1,
		perish: total_day_time * 2,
		cook: 'morsel_cooked',
		mode: 'hamlet'
	},
	slugbug: {
		name: 'Gummy Slug',
		bug: 1,
		health: 0,
		hunger: calories_tiny,
		sanity: -sanity_small,
		perish: perish_superslow,
		stack: stack_size_smallitem,
		mode: 'hamlet'
	},
	slugbug_cooked: {
		name: 'Cooked Gummy Slug',
		bug: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: -sanity_tiny,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'hamlet'
	},
	weevole_carapace: {
		name: 'Weevole Carapace',
		inedible: 1,
		stack: stack_size_smallitem,
		mode: 'hamlet'
	},

//--------------------------------------------------------------------------------\\	
//	                       DON'T STARVE HAMLET EDIBLES                            \\
//--------------------------------------------------------------------------------\\

	clippings: {
		name: 'Clippings',
		uncookable: true,
		isveggie: true,
		health: healing_tiny,
		hunger: calories_tiny / 2,
		sanity: 0,
		stack: stack_size_smallitem,
		mode: 'hamlet'
	},
	lotus_flower: {
		name: 'Lotus Flower',
		uncookable: true,
		isveggie: true,
		health: healing_tiny,
		hunger: calories_small,
		sanity: sanity_tiny,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'hamlet'
	},
	lotus_flower_cooked: {
		name: 'Cooked Lotus Root',
		uncookable: true,
		isveggie: true,
		health: healing_tiny,
		hunger: calories_small,
		sanity: sanity_med,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'hamlet'
	},
	venus_stalk: {
		name: 'Flytrap Stalk',
		uncookable: true,
		health: 0,
		hunger: calories_small,
		sanity: -sanity_small,
		perish: perish_fast,
		stack: stack_size_smallitem,
		dry: 'walkingstick',
		drytime: dry_fast,
		mode: 'hamlet'
	},
	nectar_pod: {
		name: 'Nectar',
		uncookable: true,
		health: healing_small,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_superslow,
		stack: stack_size_smallitem,
		mode: 'hamlet'
	},
	teatree_nut: {
		name: 'Seed Pod',
		uncookable: true,
		health: healing_tiny,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_preserved,
		stack: stack_size_smallitem,
		note: 'Prevents hayfever for 60 seconds',
		mode: 'hamlet'
	},
	teatree_nut_cooked: {
		name: 'Cooked Seed Pod',
		uncookable: true,
		health: healing_small,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		note: 'Prevents hayfever for 120 seconds',
		mode: 'hamlet'
	},
	tuber_crop: {
		name: 'Tuber',
		uncookable: true,
		isveggie: true,
		health: 0,
		hunger: calories_small,
		sanity: 0,
		perish: perish_preserved,
		stack: stack_size_largeitem,
		note: 'Poisonous',
		mode: 'hamlet'
	},
	tuber_crop_cooked: {
		name: 'Fried Tuber',
		uncookable: true,
		health: healing_small,
		hunger: calories_medsmall,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_largeitem,
		note: 'Poisonous',
		mode: 'hamlet'
	},
	tuber_bloom_crop: {
		name: 'Blooming Tuber',
		uncookable: true,
		isveggie: true,
		health: 0,
		hunger: calories_small,
		sanity: 0,
		perish: perish_preserved,
		stack: stack_size_largeitem,
		mode: 'hamlet'
	},
	tuber_bloom_crop_cooked: {
		name: 'Fried Blooming Tuber',
		uncookable: true,
		health: healing_small,
		hunger: calories_medsmall,
		sanity: sanity_tiny,
		perish: perish_fast,
		stack: stack_size_largeitem,
		mode: 'hamlet'
	},
	waterdrop: {
		name: 'Magic Water',
		uncookable: true,
		isveggie: true,
		health: healing_superhuge * 3,
		hunger: calories_superhuge * 3,
		sanity: sanity_huge * 3,
		note: 'Cures poison',
		mode: 'hamlet'
	},
	// This is only found in game data and is not available while playing
	/*
	whisperpod: {
		name: 'Magic Water',
		uncookable: true,
		health: 0,
		hunger: calories_tiny / 2,
		sanity: 0,
		perish: perish_superslow,
		stack: stack_size_smallitem,
		cook: 'seeds_cooked',
		mode: 'hamlet'
	},
	*/
	bramble_bulb: {
		name: 'Bramble Bulb',
		uncookable: true,
		health: healing_tiny,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_preserved,
		mode: 'hamlet'
	},
	froglegs_poison: {
		name: 'Poison Dartfrog Legs',
		uncookable: true,
		health: -healing_small,
		hunger: calories_small,
		sanity: -sanity_small,
		perish: perish_fast,
		stack: stack_size_smallitem,
		cook: 'froglegs_poison_cooked',
		note: 'Poisonous',
		mode: 'hamlet'
	},
	froglegs_poison_cooked: {
		name: 'Cooked Dartfrog Legs',
		uncookable: true,
		precook: 1,
		health: -healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		note: 'Poisonous',
		mode: 'hamlet'
	},

//--------------------------------------------------------------------------------\\	
//	                   DON'T STARVE TOGETHER INGREDIENTS                          \\
//--------------------------------------------------------------------------------\\
	
//PORTED INGREDIENTS FROM DS + DLC's GET THE DST SUFFIX TO DIFFERENTIATE FROM THE DS VERSION OF THE INGREDIENT\\

	acorn_dst: {
		name: 'Birchnut',
		perish: perish_preserved,
		stack: stack_size_smallitem,
		cook: 'acorn_cooked_dst',
		mode: 'together'
	},
	acorn_cooked_dst: {
		name: 'Roasted Birchnut',
		ideal: true,
		seed: 1,
		hunger: calories_tiny,
		health: healing_tiny,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	butter_dst: {
		name: 'Butter',
		fat: 1,
		dairy: 1,
		health: healing_large,
		hunger: calories_med,
		sanity: 0,
		perish: perish_superslow,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	butterflywings_dst: {
		name: 'Butterfly Wings',
		isveggie: true,
		decoration: 2,
		health: healing_medsmall,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	cactusflower_dst: {
		name: 'Cactus Flower',
		isveggie: true,
		veggie: 0.5,
		hunger: calories_small,
		health: healing_medsmall,
		sanity: sanity_tiny,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		defaultExclude: true,
		mode: 'together'
	},
	deerclopseyeball_dst: {
		name: 'Deerclops Eyeball',
		uncookable: true,
		health: healing_huge,
		hunger: calories_huge,
		sanity: -sanity_med,
		mode: 'together'
	},
	bird_egg_dst: {
		name: 'Egg',
		egg: 1,
		health: 0,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		rot: 'rottenegg_dst',
		cook: 'bird_egg_cooked_dst',
		defaultExclude: true,
		mode: 'together'
	},
	bird_egg_cooked_dst: {
		name: 'Cooked Egg',
		egg: 1,
		precook: 1,
		health: 0,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	rottenegg_dst: {
		name: 'Rotten Egg',
		uncookable: true,
		health: spoiled_health,
		hunger: spoiled_hunger,
		sanity: 0,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	cutlichen_dst: {
		name: 'Lichen',
		isveggie: true,
		veggie: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: -sanity_tiny,
		perish: perish_two_day,
		mode: 'together'
	},
	eel_dst: {
		name: 'Eel',
		ismeat: true,
		meat: 0.5,
		fish: 1,
		health: healing_small,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		//dry: 'morsel_dried',
		drytime: dry_fast,
		cook: 'eel_cooked_dst',
		mode: 'together'
	},
	eel_cooked_dst: {
		name: 'Cooked Eel',
		ismeat: true,
		meat: 0.5,
		fish: 1,
		health: healing_medsmall,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	froglegs_dst: {
		name: 'Frog Legs',
		ismeat: true,
		meat: 0.5,
		health: 0,
		hunger: calories_small,
		perish: perish_fast,
		sanity: -sanity_small,
		stack: stack_size_smallitem,
		cook: 'froglegs_cooked_dst',
		mode: 'together'
	},
	froglegs_cooked_dst: {
		name: 'Cooked Frog Legs',
		ismeat: true,
		meat: 0.5,
		precook: 1,
		health: healing_tiny,
		hunger: calories_small,
		perish: perish_med,
		sanity: 0,
		stack: stack_size_smallitem,
		mode: 'together'
	},

	foliage_dst: {
		 name: 'Foliage',
		 uncookable: true,
		 health: healing_tiny,
		 hunger: 0,
		 sanity: 0,
		 perish: perish_fast,
		 stack: stack_size_smallitem,
		 mode: 'together'
	},
	goatmilk_dst: {
		name: 'Electric Milk',
		dairy: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: sanity_small,
		perish: perish_fast,
		stack: stack_size_smallitem,
		defaultExclude: true,
		mode: 'together'
	},
	honey_dst: {
		name: 'Honey',
		sweetener: true,
		health: healing_small,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_superslow,
		stack: stack_size_smallitem,
		defaultExclude: true,
		mode: 'together'
	},
	honeycomb_dst: {
		name: 'Honeycomb',
		sweetener: true,
		mode: 'together',
		defaultExclude: true,
		skip: true,
	},
	ice_dst: {
		name: 'Ice',
		isfrozen: true,
		frozen: 1,
		health: healing_tiny / 2,
		hunger: calories_tiny / 4,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		defaultExclude: true,
		mode: 'together'
	},
	lightbulb_dst: {
		name: 'Light Bulb',
		health: healing_tiny,
		hunger: 0,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		uncookable: true,
		mode: 'together'
	},
	mandrake_dst: {
		name: 'Mandrake',
		veggie: 1,
		magic: 1,
		health: healing_huge,
		hunger: calories_huge,
		sanity: 0,
		stack: stack_size_smallitem,
		cook: 'mandrake_cooked_dst',
		defaultExclude: true,
		mode: 'together'
	},
	mandrake_cooked_dst: {
		name: 'Cooked Mandrake',
		uncookable: true,
		veggie: 1,
		magic: 1,
		precook: 1,
		health: healing_superhuge,
		hunger: calories_superhuge,
		sanity: 0,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	mole_dst: {
		name: 'Moleworm',
		ideal: true,
		meat: 0.5,
		perish: total_day_time * 2,
		cook: 'morsel_cooked_dst',
		defaultExclude: true,
		mode: 'together'
	},
	plantmeat_dst: {
		name: 'Leafy Meat',
		ismeat: true,
		meat: 1,
		health: 0,
		hunger: calories_small,
		sanity: -sanity_small,
		perish: perish_fast,
		stack: stack_size_smallitem,
		cook: 'plantmeat_cooked_dst',
		defaultExclude: true,
		mode: 'together'
	},
	plantmeat_cooked_dst: {
		name: 'Cooked Leafy Meat',
		ismeat: true,
		meat: 1,
		health: healing_tiny,
		hunger: calories_medsmall,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		defaultExclude: true,
		mode: 'together'
	},
	monstermeat_dst: {
		name: 'Monster Meat',
		ismeat: true,
		meat: 1,
		monster: true,
		health: -healing_med,
		hunger: calories_medsmall,
		sanity: -sanity_med,
		perish: perish_fast,
		stack: stack_size_meditem,
		dry: 'monstermeat_dried_dst',
		drytime: dry_fast,
		cook: 'monstermeat_cooked_dst',
		mode: 'together'
	},
	monstermeat_cooked_dst: {
		name: 'Cooked Monster Meat',
		ismeat: true,
		meat: 1,
		monster: true,
		precook: 1,
		health: -healing_small,
		hunger: calories_medsmall,
		sanity: -sanity_small,
		perish: perish_slow,
		stack: stack_size_meditem,
		mode: 'together'
	},
	monstermeat_dried_dst: {
		name: 'Monster Jerky',
		ismeat: true,
		meat: 1,
		monster: true,
		dried: 1,
		health: -healing_small,
		hunger: calories_medsmall,
		sanity: -sanity_tiny,
		perish: perish_preserved,
		stack: stack_size_meditem,
		mode: 'together'
	},
	meat_dst: {
		name: 'Meat',
		ismeat: true,
		meat: 1,
		health: healing_tiny,
		hunger: calories_med,
		sanity: -sanity_small,
		perish: perish_fast,
		stack: stack_size_meditem,
		dry: 'meat_dried_dst',
		drytime: dry_med,
		cook: 'meat_cooked_dst',
		mode: 'together'
	},
	meat_cooked_dst: {
		name: 'Cooked Meat',
		ismeat: true,
		meat: 1,
		precook: 1,
		health: healing_small,
		hunger: calories_med,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_meditem,
		mode: 'together'
	},
	meat_dried_dst: {
		name: 'Jerky',
		ismeat: true,
		meat: 1,
		dried: 1,
		health: healing_med,
		hunger: calories_med,
		sanity: sanity_med,
		perish: perish_preserved,
		stack: stack_size_meditem,
		mode: 'together'
	},
	morsel_dst: {
		name: 'Morsel',
		ismeat: true,
		meat: 0.5,
		health: 0,
		hunger: calories_small,
		sanity: -sanity_small,
		perish: perish_fast,
		stack: stack_size_smallitem,
		drytime: dry_fast,
		dry: 'morsel_dried_dst',
		cook: 'morsel_cooked_dst',
		mode: 'together'
	},
	morsel_cooked_dst: {
		name: 'Cooked Morsel',
		raw: 'morsel_dst',
		ismeat: true,
		meat: 0.5,
		precook: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	morsel_dried_dst: {
		name: 'Small Jerky',
		wet: 'morsel_dst',
		ismeat: true,
		meat: 0.5,
		dried: 1,
		health: healing_medsmall,
		hunger: calories_small,
		sanity: sanity_small,
		perish: perish_preserved,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	drumstick_dst: {
		name: 'Drumstick',
		ismeat: true,
		ideal: true,
		meat: 0.5,
		health: 0,
		hunger: calories_small,
		sanity: -sanity_small,
		perish: perish_fast,
		stack: stack_size_meditem,
		drytime: dry_fast,
		dry: 'morsel_dried_dst',
		cook: 'drumstick_cooked_dst',
		mode: 'together'
	},
	drumstick_cooked_dst: {
		name: 'Fried Drumstick',
		ismeat: true,
		meat: 0.5,
		precook: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_meditem,
		mode: 'together'
	},
	batwing_dst: {
		name: 'Batilisk Wing',
		ismeat: true,
		meat: 0.5,
		health: healing_small,
		hunger: calories_small,
		sanity: -sanity_small,
		perish: perish_fast,
		stack: stack_size_smallitem,
		drytime: dry_med,
		dry: 'morsel_dried_dst',
		cook: 'batwing_cooked_dst',
		defaultExclude: true,
		mode: 'together'
	},
	batwing_cooked_dst: {
		name: 'Cooked Batilisk Wing',
		ismeat: true,
		meat: 0.5,
		health: healing_medsmall,
		hunger: calories_medsmall,
		sanity: 0,
		perish: perish_med,
		defaultExclude: true,
		mode: 'together'
	},
	minotaurhorn_dst: {
		name: 'Guardian\'s Horn',
		uncookable: true,
		ismeat: true,
		health: healing_huge,
		hunger: calories_huge,
		sanity: -sanity_med,
		mode: 'together'
	},
	red_mushroom_dst: {
		name: 'Red Cap',
		basename: 'CapRed',
		isveggie: true,
		veggie: 0.5,
		ideal: true,
		health: -healing_med,
		hunger: calories_small,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		cook: 'red_mushroom_cooked_dst',
		defaultExclude: true,
		mode: 'together'
	},
	red_mushroom_cooked_dst: {
		name: 'Cooked Red Cap',
		isveggie: true,
		veggie: 0.5,
		health: healing_tiny,
		hunger: 0,
		sanity: -sanity_small,
		perish: perish_med,
		stack: stack_size_smallitem,
		defaultExclude: true,
		mode: 'together'
	},
	green_mushroom_dst: {
		name: 'Green Cap',
		basename: 'CapGreen',
		isveggie: true,
		veggie: 0.5,
		ideal: true,
		health: 0,
		hunger: calories_small,
		sanity: -sanity_huge,
		perish: perish_med,
		stack: stack_size_smallitem,
		cook: 'green_mushroom_cooked_dst',
		defaultExclude: true,
		mode: 'together'
	},
	green_mushroom_cooked_dst: {
		name: 'Cooked Green Cap',
		isveggie: true,
		veggie: 0.5,
		health: -healing_tiny,
		hunger: 0,
		sanity: sanity_med,
		perish: perish_med,
		stack: stack_size_smallitem,
		defaultExclude: true,
		mode: 'together'
	},
	blue_mushroom_dst: {
		name: 'Blue Cap',
		basename: 'CapBlue',
		isveggie: true,
		veggie: 0.5,
		ideal: true,
		health: healing_med,
		hunger: calories_small,
		sanity: -sanity_med,
		perish: perish_med,
		stack: stack_size_smallitem,
		cook: 'blue_mushroom_cooked_dst',
		mode: 'together'
	},
	blue_mushroom_cooked_dst: {
		name: 'Cooked Blue Cap',
		isveggie: true,
		veggie: 0.5,
		health: -healing_small,
		hunger: 0,
		sanity: sanity_small,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	petals_dst: {
		name: 'Petals',
		uncookable: true,
		health: healing_tiny,
		hunger: 0,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	petals_evil_dst: {
		name: 'Dark Petals',
		basename: 'Petals.',
		uncookable: true,
		health: 0,
		hunger: 0,
		sanity: -sanity_tiny,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	seeds_dst: {
		name: 'Seeds',
		uncookable: true,
		health: 0,
		hunger: calories_tiny / 2,
		sanity: 0,
		perish: perish_superslow,
		stack: stack_size_smallitem,
		cook: 'seeds_cooked_dst',
		mode: 'together'
	},
	seeds_cooked_dst: {
		name: 'Toasted Seeds',
		uncookable: true,
		health: healing_tiny,
		hunger: calories_tiny / 2,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	spoiled_food_dst: {
		name: 'Rot',
		uncookable: true,
		health: spoiled_health,
		hunger: spoiled_hunger,
		sanity: 0,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	tallbirdegg_dst: {
		name: 'Tallbird Egg',
		egg: 4,
		health: healing_small,
		hunger: calories_med,
		sanity: 0,
		cook: 'tallbirdegg_cooked_dst',
		defaultExclude: true,
		mode: 'together'
	},
	tallbirdegg_cooked_dst: {
		name: 'Fried Tallbird Egg',
		egg: 4,
		precook: 1,
		health: 0,
		hunger: calories_large,
		sanity: 0,
		perish: perish_fast,
		defaultExclude: true,
		mode: 'together'
	},
	trunk_summer_dst: {
		name: 'Koalefant Trunk',
		ismeat: true,
		health: healing_medlarge,
		hunger: calories_large,
		sanity: 0,
		perish: perish_fast,
		meat: 1,
		stack: stack_size_meditem,
		cook: 'trunk_summer_cooked_dst',
		defaultExclude: true,
		mode: 'together'
	},
	trunk_summer_cooked_dst: {
		name: 'Koalefant Trunk Steak',
		ismeat: true,
		health: healing_large,
		hunger: calories_huge,
		sanity: 0,
		perish: perish_slow,
		meat: 1,
		stack: stack_size_meditem,
		defaultExclude: true,
		mode: 'together'
	},
	trunk_winter_dst: {
		name: 'Winter Koalefant Trunk',
		basename: 'KoalefantB',//so it shows up next to summer trunk on sim
		ismeat: true,
		health: healing_medlarge,
		hunger: calories_large,
		sanity: 0,
		perish: perish_fast,
		meat: 1,
		stack: stack_size_meditem,
		cook: 'trunk_summer_cooked_dst',
		defaultExclude: true,
		mode: 'together'
	},
	twigs_dst: {
		name: 'Twigs',
		inedible: 1,
		mode: 'together'
	},

	cave_banana_dst: {
		name: 'Banana',
		ideal: true,
		isfruit: true,
		fruit: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_med,
		cook: 'cave_banana_cooked_dst',
		mode: 'together'
	},
	cave_banana_cooked_dst: {
		name: 'Cooked Banana',
		isfruit: true,
		fruit: 1,
		precook: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast,
		mode: 'together'
	},
	carrot_dst: {
		name: 'Carrot',
		isveggie: true,
		veggie: 1,
		health: healing_tiny,
		hunger: calories_small,
		perish: perish_med,
		sanity: 0,
		cook: 'carrot_cooked_dst',
		stack: stack_size_smallitem,
		cook: 'carrot_cooked_dst',
		mode: 'together'
	},
	carrot_cooked_dst: {
		name: 'Roasted Carrot',
		isveggie: true,
		veggie: 1,
		precook: 1,
		health: healing_small,
		hunger: calories_small,
		perish: perish_fast,
		sanity: 0,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	corn_dst: {
		name: 'Corn',
		ideal: true,
		isveggie: true,
		veggie: 1,
		health: healing_small,
		hunger: calories_med,
		perish: perish_med,
		sanity: 0,
		stack: stack_size_smallitem,
		cook: 'corn_cooked_dst',
		mode: 'together'
	},
	corn_cooked_dst: {
		name: 'Popcorn',
		isveggie: true,
		veggie: 1,
		precook: 1,
		health: healing_small,
		hunger: calories_small,
		perish: perish_slow,
		sanity: 0,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	pumpkin_dst: {
		name: 'Pumpkin',
		isveggie: true,
		veggie: 1,
		health: healing_small,
		hunger: calories_large,
		perish: perish_med,
		sanity: 0,
		stack: stack_size_meditem,
		cook: 'pumpkin_cooked_dst',
		mode: 'together'
	},
	pumpkin_cooked_dst: {
		name: 'Hot Pumpkin',
		isveggie: true,
		veggie: 1,
		precook: 1,
		health: healing_medsmall,
		hunger: calories_large,
		perish: perish_fast,
		sanity: 0,
		stack: stack_size_meditem,
		mode: 'together'
	},
	eggplant_dst: {
		name: 'Eggplant',
		isveggie: true,
		veggie: 1,
		health: healing_medsmall,
		hunger: calories_med,
		perish: perish_med,
		sanity: 0,
		stack: stack_size_meditem,
		cook: 'eggplant_cooked_dst',
		mode: 'together'
	},
	eggplant_cooked_dst: {
		name: 'Braised Eggplant',
		isveggie: true,
		veggie: 1,
		precook: 1,
		health: healing_med,
		hunger: calories_med,
		perish: perish_fast,
		sanity: 0,
		stack: stack_size_meditem,
		mode: 'together'
	},
	durian_dst: {
		name: 'Durian',
		isfruit: true,
		monster: 1,
		fruit: 1,
		health: -healing_small,
		hunger: calories_med,
		perish: perish_med,
		sanity: -sanity_tiny,
		stack: stack_size_meditem,
		cook: 'durian_cooked_dst',
		mode: 'together'
	},
	durian_cooked_dst: {
		name: 'Extra Smelly Durian',
		isfruit: true,
		monster: 1,
		fruit: 1,
		precook: 1,
		health: 0,
		hunger: calories_med,
		perish: perish_fast,
		sanity: -sanity_tiny,
		stack: stack_size_meditem,
		mode: 'together'
	},
	pomegranate_dst: {
		name: 'Pomegranate',
		isfruit: true,
		fruit: 1,
		health: healing_small,
		hunger: calories_tiny,
		perish: perish_fast,
		sanity: 0,
		stack: stack_size_smallitem,
		cook: 'pomegranate_cooked_dst',
		mode: 'together'
	},
	pomegranate_cooked_dst: {
		name: 'Sliced Pomegranate',
		isfruit: true,
		fruit: 1,
		precook: 1,
		health: healing_med,
		hunger: calories_small,
		perish: perish_superfast,
		sanity: 0,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	dragonfruit_dst: {
		name: 'Dragon Fruit',
		isfruit: true,
		fruit: 1,
		health: healing_small,
		hunger: calories_tiny,
		perish: perish_fast,
		sanity: 0,
		stack: stack_size_smallitem,
		cook: 'dragonfruit_cooked_dst',
		mode: 'together'
	},
	dragonfruit_cooked_dst: {
		name: 'Prepared Dragon Fruit',
		isfruit: true,
		fruit: 1,
		precook: 1,
		health: healing_med,
		hunger: calories_small,
		perish: perish_superfast,
		sanity: 0,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	
	berries_dst: {
		name: 'Berries',
		isfruit: true,
		fruit: 0.5,
		health: 0,
		hunger: calories_tiny,
		perish: perish_fast,
		sanity: 0,
		stack: stack_size_smallitem,
		cook: 'berries_cooked_dst',
		mode: 'together'
	},
	berries_cooked_dst: {
		name: 'Roasted Berries',
		isfruit: true,
		fruit: 0.5,
		precook: 1,
		health: healing_tiny,
		hunger: calories_small,
		perish: perish_superfast,
		sanity: 0,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	cactusmeat_dst: {
		name: 'Cactus Flesh',
		ideal: true,
		isveggie: true,
		veggie: 1,
		hunger: calories_small,
		health: -healing_small,
		perish: perish_med,
		sanity: -sanity_tiny,
		stack: stack_size_smallitem,
		cook: 'cactusmeat_cooked_dst',
		mode: 'together'
	},
	cactusmeat_cooked_dst: {
		name: 'Cooked Cactus Flesh',
		isveggie: true,
		veggie: 1,
		hunger: calories_small,
		health: healing_tiny,
		perish: perish_med,
		sanity: sanity_med,
		precook: 1,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	watermelon_dst: {
		name: 'Watermelon',
		isfruit: true,
		fruit: 1,
		ideal: true,
		hunger: calories_small,
		health: healing_small,
		perish: perish_fast,
		sanity: sanity_tiny,
		stack: stack_size_smallitem,
		cook: 'watermelon_cooked_dst',
		mode: 'together'
	},
	watermelon_cooked_dst: {
		name: 'Grilled Watermelon',
		isfruit: true,
		fruit: 1,
		hunger: calories_small,
		health: healing_tiny,
		perish: perish_superfast,
		sanity: sanity_tiny * 1.5,
		precook: 1,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	wormlight_dst: {
		name: 'Glow Berry',
		basename:'GlowberryNormal',//so it's to the right of lesser glowberries
		isfruit: true,
		fruit: 1,
		health: healing_medsmall + healing_small,
		hunger: calories_medsmall,
		sanity: -sanity_small,
		perish: perish_med,
		note: 'Gives 90 seconds of light',
		mode: 'together'
	},
	glommerfuel_dst: {
		name: 'Glommer\'s Goop',
		uncookable: true,
		health: healing_large,
		hunger: calories_tiny,
		sanity: -sanity_huge,
		mode: 'together'
	},
	//Lobsters exist in both games but were difficult to port. 
	// For simplicity's sake, the prefab name for lobsters in DST will be referred to as wobster.
	// Their display name will have DST added to it due to a conflict since their image name is the same as SW
	wobster: {
		name: 'Wobster DST',
		ismeat: true,
		meat: 1,
		fish: 1,
		perish: total_day_time * 4,
		defaultExclude: true,
		mode: 'together'
	},
	wobster_dead: {
		name: 'Dead Wobster DST',
		basename: 'Wobster.',
		uncookable: true,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_largeitem,
		cook: 'wobster_cooked',
		mode: 'together'
	},
	wobster_cooked: {
		name: 'Delicious Wobster DST',
		uncookable: true,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	
//DST EXCLUSIVE INGREDIENTS DO NOT GET THE 'dst' SUFFIX\\
	
/*
I (lakhnish) tried to add the 'dst' suffix to some ingredients below (i.e. kelp) and the simulator would break for reasons I don't understand.
For example: the Jelly Beans recipe has a specific for Royal Jelly and needed the prefabname to match royal_jelly_dst in order for the simulator to actually load. 
However, if I do the same for kelp and rename it to kelp_dst, the simulator would stop loading entirely and idk why.
*/
	
	wormlight_lesser: {
		name: 'Lesser Glow Berry',
		basename:'GlowberryLesser', //so it's next to glowberries
		isfruit: true,
		fruit: 0.5,
		health: healing_small,
		hunger: calories_small,
		sanity: -sanity_small,
		perish: perish_med,
		stack: stack_size_smallitem,
		note: 'Gives 22.5 seconds of light',
		mode: 'together'
	},
	berries_juicy: {
		name: 'Juicy Berries',
		basename: 'BerriesJ',
		isfruit: true,
		fruit: 0.5,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_two_day,
		stack: stack_size_smallitem,
		cook: 'berries_juicy_cooked',
		mode: 'together'
	},
	berries_juicy_cooked: {
		name: 'Roasted Juicy Berries',
		isfruit: true,
		fruit: 0.5,
		precook: 1,
		health: healing_small,
		hunger: calories_medsmall,
		sanity: 0,
		perish: perish_one_day,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	phlegm: {
		name: 'Phlegm',
		uncookable: true,
		health: 0,
		hunger: calories_small,
		sanity: -sanity_med,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	royal_jelly: {
		name: 'Royal Jelly',
		sweetener: 3,
		health: healing_large,
		hunger: calories_small,
		sanity: sanity_med,
		perish: perish_med,
		mode: 'together'
	},
	succulent_picked: {
		name: 'Succulent',
		uncookable: true,
		isveggie: true,
		health: healing_tiny,
		hunger: 0,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'together'
	},

	//DST Turn Of Tides Additions
	kelp: {
		name: 'Kelp Fronds',
		isveggie: true,
		veggie: 0.5,
		health: -healing_tiny,
		hunger: calories_tiny,
		sanity: -sanity_small,
		perish: perish_med,
		stack: stack_size_smallitem,
		dry: 'kelp_dried',
		drytime: dry_superfast,
		mode: 'together'
	},
	kelp_cooked: {
		name: 'Cooked Kelp Fronds',
		isveggie: true,
		veggie: 0.5,
		precook: 1,
		health: 0,
		hunger: calories_tiny,
		sanity: -sanity_tiny,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	kelp_dried: {
		name: 'Dried Kelp Fronds',
		isveggie: true,
		veggie: 0.5,
		dried: 1,
		health: healing_tiny,
		hunger: calories_tiny,
		sanity: sanity_small,
		perish: perish_preserved,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	moonbutterflywings: {
		name: 'Moon Moth Wings',
		decoration: 2,
		health: healing_medsmall,
		hunger: calories_tiny,
		sanity: sanity_med,
		perish: perish_fast,
		stack: stack_size_smallitem,
		defaultExclude: true,
		mode: 'together'
	},
	moon_tree_blossom: {
		name: 'Lune Tree Blossom',
		uncookable: true,
		isveggie: true,
		health: healing_tiny,
		hunger: 0,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	rock_avocado_fruit_ripe: {
		name: 'Ripe Stone Fruit',
		isveggie: true,
		veggie: 1,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		cook: 'rock_avocado_fruit_ripe_cooked',
		mode: 'together'
	},
	rock_avocado_fruit_ripe_cooked: {
		name: 'Cooked Stone Fruit',
		isveggie: true,
		veggie: 1,
		precook: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: 0,
		perish: perish_two_day,
		stack: stack_size_smallitem,
		mode: 'together'
	},

	//DST Additions From Warly's Update
	asparagus_dst: {
		name: 'Asparagus',
		isveggie: true,
		veggie: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		cook: 'asparagus_cooked_dst',
		mode: 'together'
	},
	asparagus_cooked_dst: {
		name: 'Cooked Asparagus',
		isveggie: true,
		veggie: 1,
		health: healing_small,
		hunger: calories_med,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	pepper: {
		name: 'Pepper',
		isveggie: true,
		veggie: 1,
		health: -healing_med,
		hunger: calories_tiny,
		sanity: -sanity_med,
		perish: perish_slow,
		stack: stack_size_smallitem,
		cook: 'pepper_cooked',
		mode: 'together'
	},
	pepper_cooked: {
		name: 'Roasted Pepper',
		isveggie: true,
		veggie: 1,
		precook: 1,
		health: -healing_small,
		hunger: calories_tiny,
		sanity: -sanity_small,
		perish: perish_slow,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	potato: {
		name: 'Potato',
		isveggie: true,
		veggie: 1,
		health: -healing_small,
		hunger: calories_small,
		sanity: -sanity_tiny,
		perish: perish_med,
		stack: stack_size_smallitem,
		cook: 'potato_cooked',
		mode: 'together'
	},
	potato_cooked: {
		name: 'Roasted Potato',
		isveggie: true,
		veggie: 1,
		precook: 1,
		health: healing_med,
		hunger: calories_med,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	garlic: {
		name: 'Garlic',
		isveggie: true,
		veggie: 1,
		health: 0,
		hunger: calories_tiny,
		sanity: -sanity_small,
		perish: perish_slow,
		stack: stack_size_smallitem,
		cook: 'garlic_cooked',
		mode: 'together'
	},
	garlic_cooked: {
		name: 'Roasted Garlic',
		isveggie: true,
		veggie: 1,
		precook: 1,
		health: healing_tiny,
		hunger: calories_tiny,
		sanity: -sanity_tiny,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	tomato: {
		name: 'Toma Root',
		isveggie: true,
		veggie: 1,
		health: healing_small,
		hunger: calories_small,
		sanity: 0,
		perish: perish_fast,
		stack: stack_size_smallitem,
		cook: 'tomato_cooked',
		mode: 'together'
	},
	tomato_cooked: {
		name: 'Roasted Toma Root',
		isveggie: true,
		veggie: 1,
		precook: 1,
		health: healing_med,
		hunger: calories_small,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	onion: {
		name: 'Onion',
		isveggie: true,
		veggie: 1,
		health: 0,
		hunger: calories_tiny,
		sanity: -sanity_small,
		perish: perish_slow,
		stack: stack_size_smallitem,
		cook: 'onion_cooked',
		mode: 'together'
	},
	onion_cooked: {
		name: 'Roasted Onion',
		isveggie: true,
		veggie: 1,
		precook: 1,
		health: healing_tiny,
		hunger: calories_tiny,
		sanity: -sanity_tiny,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	lightninggoathorn: {
		name: 'Volt Goat Horn',
		inedible: 1,
		defaultExclude: true,
		mode: 'together'
	},
	nightmarefuel: {
		name: 'Nightmare Fuel',
		inedible: 1,
		magic: 1,
		defaultExclude: true,
		mode: 'together'
	},
	boneshard: {
		name: 'Bone Shards',
		inedible: 1,
		defaultExclude: true,
		mode: 'together'
	},

	//DST Hook, Line, and Inker
	pondfish: {
		name: 'Freshwater Fish',
		basename: 'FishMo', //so that it shows up next to fish morsel
		ismeat: true,
		meat: 0.5,
		fish: 0.5,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		cook: 'fishmeat_small_dst',
		defaultExclude: true,
		mode: 'together'
	},
	pondeel: {
		name: 'Live Eel',
		basename: 'EelA', //so that it's to the left of cooked eel
		ismeat: true,
		meat: 0.5,
		fish: 1,
		health: healing_small,
		hunger: calories_tiny,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		cook: 'eel_cooked_dst',
		defaultExclude: true,
		mode: 'together'
	},
	spoiled_fish: {
		name: 'Spoiled Fish',
		uncookable: true,
		health: spoiled_health,
		hunger: spoiled_hunger,
		sanity: 0,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	spoiled_fish_morsel: {
		name: 'Spoiled Fish Morsel',
		uncookable: true,
		health: spoiled_health,
		hunger: spoiled_hunger,
		sanity: 0,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	//_dst because it's ported from SW but added in this update
	fishmeat_small_dst: {
		name: 'Fish Morsel',
		ismeat: true,
		meat: 0.5,
		fish: 0.5,
		health: healing_tiny,
		hunger: calories_med,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		cook: 'fishmeat_small_cooked_dst',
		dry: 'morsel_dried_dst',
		drytime: dry_fast,
		mode: 'together'
	},
	//_dst because it's ported from SW but added in this update
	fishmeat_small_cooked_dst: {
		name: 'Cooked Fish Morsel',
		ismeat: true,
		meat: 0.5,
		fish: 0.5,
		health: healing_tiny,
		hunger: calories_med,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	fishmeat: {
		name: 'Fish Meat',
		ismeat: true,
		meat: 1,
		fish: 1,
		health: healing_tiny,
		hunger: calories_med,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		cook: 'fishmeat_cooked',
		dry: 'meat_dried',
		drytime: dry_fast,
		mode: 'together'
	},
	fishmeat_cooked: {
		name: 'Cooked Fish Meat',
		ismeat: true,
		meat: 1,
		fish: 1,
		health: healing_med,
		hunger: calories_med,
		sanity: 0,
		perish: perish_superfast,
		stack: stack_size_smallitem,
		mode: 'together'
	},

	//All the small ocean fish
	//Don't add what they rot or cook into, it seems to break the simulator.
	//basename is just so they are grouped together. They used to be all over the place and it was annoying to navigate. 

	oceanfish_small_1_inv: {
		name: 'Runty Guppy',
		basename: 'oceanBaby6',
		ismeat: true,
		meat: 0.5,
		fish: 0.5,
		perish: perish_one_day,
		skip: true, // TODO: simplify the way these get handled, but for now exclude them from the statistics analyzer
		mode: 'together'
	},
	oceanfish_small_2_inv: {
		name: 'Needlenosed Squirt',
		basename: 'oceanBaby4',
		ismeat: true,
		meat: 0.5,
		fish: 0.5,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},
	oceanfish_small_3_inv: {
		name: 'Bitty Baitfish',
		basename: 'oceanBaby1',
		ismeat: true,
		meat: 0.5,
		fish: 0.5,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},
	oceanfish_small_4_inv: {
		name: 'Smolt Fry',
		basename: 'oceanBaby8',
		ismeat: true,
		meat: 0.5,
		fish: 0.5,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},
	oceanfish_small_5_inv: {
		name: 'Popperfish',
		basename: 'oceanBaby5',
		ismeat: true,
		veggie: 1,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},
	oceanfish_small_6_inv: {
		name: 'Fallounder',
		basename: 'oceanBaby3',
		ismeat: true,
		meat: 0.5,
		fish: 0.5,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},
	oceanfish_small_7_inv: {
		name: 'Bloomfin Tuna',
		basename: 'oceanBaby2',
		ismeat: true,
		meat: 0.5,
		fish: 0.5,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},
	oceanfish_small_8_inv: {
		name: 'Scorching Sunfish',
		basename: 'oceanBaby7',
		ismeat: true,
		meat: 0.5,
		fish: 0.5,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},
	oceanfish_small_9_inv: {
		name: 'Spittlefish',
		basename: 'oceanBaby9',
		ismeat: true,
		meat: 0.5,
		fish: 0.5,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},

	//All the medium sized fish
	oceanfish_medium_1_inv: {
		name: 'Mudfish',
		basename: 'oceanBig8',
		ismeat: true,
		meat: 1,
		fish: 1,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},
	oceanfish_medium_2_inv: {
		name: 'Deep Bass',
		basename: 'oceanBig5',
		ismeat: true,
		meat: 1,
		fish: 1,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},
	oceanfish_medium_3_inv: {
		name: 'Dandy Lionfish',
		basename: 'oceanBig3',
		ismeat: true,
		meat: 1,
		fish: 1,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},
	oceanfish_medium_4_inv: {
		name: 'Black Catfish',
		basename: 'oceanBig1',
		ismeat: true,
		meat: 1,
		fish: 1,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},
	oceanfish_medium_5_inv: {
		name: 'Corn Cod',
		basename: 'oceanBig2',
		ismeat: true,
		veggie: 1,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},
	oceanfish_medium_6_inv: {
		name: 'Dappled Koi',
		basename: 'oceanBig4',
		ismeat: true,
		meat: 1,
		fish: 1,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},
	oceanfish_medium_7_inv: {
		name: 'Golden Koi',
		basename: 'oceanBig6',
		ismeat: true,
		meat: 1,
		fish: 1,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},	
	oceanfish_medium_8_inv: {
		name: 'Ice Bream',
		basename: 'oceanBig7',
		ismeat: true,
		isfrozen: true,
		meat: 1,
		fish: 1,
		frozen: 1,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},	
	oceanfish_medium_9_inv: {
		name: 'Sweetish Fish',
		basename: 'oceanBig9',
		ismeat: true,
		meat: 1,
		fish: 1,
		perish: perish_one_day,
		skip: true,
		mode: 'together'
	},	

	// DST Return of Them: Troubled Waters food
	barnacle: {
		name: 'Barnacles',
		ismeat: true,
		meat: 0.25,
		fish: 0.25,
		health: 0,
		hunger: calories_small,
		sanity: -sanity_tiny,
		cook: 'barnacle_cooked',
		perish: perish_fast,
		stack: stack_size_meditem,
		cook: 'barnacle_cooked',
		mode: 'together'
	},
	barnacle_cooked: {
		name: 'Cooked Barnacles',
		ismeat: true,
		meat: 0.25,
		fish: 0.25,
		health: healing_tiny,
		hunger: calories_small,
		sanity: 0,
		perish: perish_slow,
		stack: stack_size_meditem,
		mode: 'together'
	},

	// DST Return of Them: Forgotten Knowledge food
	moon_mushroom: {
		name: 'Moon Shroom',
		basename: 'CapMoon',
		isveggie: true,
		veggie: 0.5,
		health: 0,
		hunger: calories_small,
		sanity: sanity_small,
		cook: 'moon_mushroom_cooked',
		perish: perish_med,
		stack: stack_size_smallitem,
		note: 'Puts the player to sleep',
		cook: 'moon_mushroom_cooked',
		mode: 'together'
	},
	moon_mushroom_cooked: {
		name: 'Cooked Moon Shroom',
		isveggie: true,
		veggie: 0.5,
		health: 0,
		hunger: -calories_small,
		sanity: -sanity_small,
		perish: perish_med,
		stack: stack_size_smallitem,
		note: 'Removes grogginess effect',
		mode: 'together'
	},

	// DST Return of Them: Reap What You Sow food
	forgetmelots: {
		name: 'Forget-Me-Lots',
		decoration: 1,
		health: 0,
		hunger: 0,
		sanity: sanity_supertiny,
		stack: stack_size_smallitem,
		defaultExclude: true,
		mode: 'together'
	},
	
	// DST Return of Them: Waterlogged beta
	fig: {
		name: 'Fig',
		isfruit: true,
		fruit: 0.5,
		health: 0,
		hunger: calories_small,
		perish: perish_fast,
		sanity: 0,
		stack: stack_size_smallitem,
		cook: 'fig_cooked',
		mode: 'together'
	},
	fig_cooked: {
		name: 'Cooked Fig',
		isfruit: true,
		fruit: 0.5,
		precook: 1,
		health: healing_tiny,
		hunger: calories_medsmall,
		perish: perish_superfast,
		sanity: 0,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	batnose: {
		name: 'Naked Nostrils',
		ismeat: true,
		meat: 0.5,
		health: healing_small,
		hunger: calories_small,
		sanity: -sanity_small,
		cook: 'batnose_cooked',
		//idk why the guide uses "morsel" 'cause the prefab name is "smallmeat"
		//dry: 'smallmeat_dried',
		dry: 'morsel_dried_dst',
		drytime: 'dry_med',
		perish: perish_fast,
		stack: stack_size_smallitem,
		defaultExclude: true,
		mode: 'together'
	},
	batnose_cooked: {
		name: 'Charred Nostrils',
		raw: 'batnose',
		ismeat: true,
		meat: 0.5,
		precook: 1,
		health: healing_medsmall,
		hunger: calories_medsmall,
		sanity: 0,
		perish: perish_med,
		stack: stack_size_smallitem,
		mode: 'together'
	},
	refined_dust: {
		name: "Collected Dust",
		decoration: 2,
		defaultExclude: true,
		mode: 'together'
	},
	milkywhites: {
		name: "Milky Whites",
		dairy: 1,
		health: healing_medsmall,
		hunger: calories_small,
		sanity: -sanity_medlarge,
		perish: perish_med,
		stack: stack_size_smallitem,
		defaultExclude: true,
		mode: 'together'
	},
};

for (const key in food) {
	if (!food.hasOwnProperty(key)) {
		continue;
	}

	const f = food[key];

	f.match = 0;
	f.lowerName = f.name.toLowerCase();
	f.id = key;
	f.nameObject = {};
	f.nameObject[key] = 1;
	f.img = 'img/' + f.name.replace(/ /g, '_').replace(/'/g, '').toLowerCase() + '.png';
	f.preparationType = f.preparationType || 'raw';

	if (food[key + '_cooked']) {
		f.cook = food[key + '_cooked'];
	}

	if (typeof f.cook === 'string') {
		f.cook = food[f.cook];
	}

	if (f.cook && !f.cook.raw) {
		f.cook.raw = f;
		f.cook.cooked = true;
		if (!f.cook.basename) {
			f.cook.basename = (f.basename || f.name) + '.';
		}
	}

	if (!f.mode) {
		f.mode = 'vanilla';
	}

	f[f.mode] = true;

	f.modeMask = modes[f.mode].bit;

	f.modeMask = modes[f.mode].bit || 0;
	f.modeNode = '[tag:' + f.mode + '|img/' + modes[f.mode].img + ']';

	if (typeof f.raw === 'string') {
		f.raw = food[f.raw];
		f.cooked = true;
		if (!f.basename) {
			f.basename = (f.raw.basename || f.raw.name) + '.';
		}
	}

	if (typeof f.dry === 'string') {
		f.dry = food[f.dry];
	}

	if (f.dry && !f.dry.wet) {
		f.dry.wet = f;
		f.dry.rackdried = true;
		if (!f.dry.basename) {
			f.dry.basename = (f.basename || f.name) + '..';
		}
	}

	if (typeof f.wet === 'string') {
		f.rackdried = true;
		f.wet = food[f.wet];
		if (!f.basename) {
			f.basename = (f.wet.basename || f.wet.name) + '..';
		}
	}

	if (f.cook) {
		f.cook.preparationType = 'cooked';
	}

	if (f.dry) {
		f.dry.preparationType = 'dried';
	}
}
