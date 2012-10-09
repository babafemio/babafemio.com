
/*
 * GET home page.
 */

var gallery = {[
					url: '/img/capoeira-ipanema-brazil_58696_990x742.jpg',
					caption: 'Ipanema, Brazil',
					description: 'Brazilian capoeira is a traditional dance with amazing fight steps originating from slavery',
					source: 'National Geographic',
					source_url: 'www.nationalgeographic.com'

				]};

exports.index = function(req, res){
  res.render('index', { title: 'babafemio.com' }, gallery);
};