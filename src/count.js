var reductio_count = {
	add: function(prior, path) {
		return function (p, v) {
			if(prior) prior(p, v);
			path(p).count++;
			return p;
		};
	},
	remove: function(prior, path) {
		return function (p, v) {
			if(prior) prior(p, v);
			path(p).count--;
			return p;
		};
	},
	initial: function(prior, path) {
		return function (p) {
			if(prior) p = prior(p);
			// if(p === undefined) p = {};
			path(p).count = 0;
			return p;
		};
	}
};

module.exports = reductio_count;