
/*
 * GET home page.
 */

var gallery = [
				{	
					url: '/img/capoeira-ipanema-brazil_58696_990x742.jpg',
					caption: 'Ipanema, Brazil',
					description: 'Brazilian capoeira is a traditional dance with amazing fight steps originating from slavery',
					source: 'National Geographic',
					source_url: 'http://www.nationalgeographic.com',
					active: true
				},
				{	
					url: '/img/beltane-fire-festival-scotland-richardson_41129_990x742.jpg',
					caption: 'Beltane Fire Festival, Scotland',
					description: 'On the eve of the Beltane Fire Festival, these costumed participants help celebrate the beginning of the summer growing season. The pagan festival, which has roots in Celtic fertility rituals, also features drummers and acrobats.',
					source: 'National Geographic',
					source_url: 'http://www.nationalgeographic.com'
				},
				{	
					url: '/img/children-ball-game_57269_990x742.jpg',
					caption: 'Children at Play',
					description: 'They are brothers and with a limitless spirit they roam the world, with an infinite source of happiness, they feed the world with life; they are the performers of ecstasy and they are the lead entertainers.',
					source: 'National Geographic',
					source_url: 'http://www.nationalgeographic.com'
				},
				{	
					url: '/img/new-year-thailand_58007_990x742.jpg',
					caption: 'New Year Celebration, Thailand',
					description: 'In Thailand, people celebrate Songkran as the traditional New Year’s Day. The water splashed is meant as a symbol of washing all of the bad away and traditionally to pay respects to elders, including family members, friends, neighbors, and monks.',
					source: 'National Geographic',
					source_url: 'http://www.nationalgeographic.com'
				},
				{	
					url: '/img/prayer-flags-huey_59625_990x742.jpg',
					caption: 'Prayer Flags, Wyoming',
					description: 'Nine-year-old Wakinyan Two Bulls places prayer flags in a tree near Mato Tipila ("bear lodge"), or Devils Tower, in Wyoming. The story of the Oglala—their spirituality and their fight to remedy old wrongs—goes well beyond the Pine Ridge Reservation.',
					source: 'National Geographic',
					source_url: 'http://www.nationalgeographic.com'
				},
				{	
					url: '/img/tai-chi-dawn-shanghai_53927_990x742.jpg',
					caption: 'Tai Chi, Shanghai',
					description: 'I was jet-lagged after a 16-hour flight from Chicago. Since I was awake anyway, I figured I would walk along the Bund for some photo shooting. There is a lot of activity in the morning: people riding bikes, running, flying kites, etc. I got lucky—this man was doing tai chi as the sun rose among the skyscrapers. It made for a great photo opportunity.',
					source: 'National Geographic',
					source_url: 'http://www.nationalgeographic.com'
				}


				];

var last_tweet = 'Sony should redesign the Sony stores... They should tell me what I can do with all the electronics and not what the electronics can do...';

exports.index = function(req, res){
  res.render('index', { title: 'Babafemi Ogungbamila', gallery: gallery, last_tweet: last_tweet });
};