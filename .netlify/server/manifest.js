export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/home/clients/cdf-logo.png","assets/home/clients/ibis.png","assets/home/clients/logitech.png","assets/home/clients/novotel.png","assets/home/defibrillator.png","assets/home/maintenance.png","assets/home/phillips_hs1_home.png","assets/home/statistics.png","assets/home/training.png","assets/logo.svg","assets/products/first_aid_kit.jpg","assets/products/phillips_frx.jpg","assets/products/phillips_hs1.jpg","favicon.png","fonts/Oswald-SemiBold.ttf","fonts/Outfit-Regular.ttf"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.e372b0ad.js","app":"_app/immutable/entry/app.28168548.js","imports":["_app/immutable/entry/start.e372b0ad.js","_app/immutable/chunks/scheduler.77b7f510.js","_app/immutable/chunks/singletons.cd5def43.js","_app/immutable/chunks/index.1993e28c.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.28168548.js","_app/immutable/chunks/scheduler.77b7f510.js","_app/immutable/chunks/index.42ca7bc2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/products",
				pattern: /^\/products\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/products/[slug]",
				pattern: /^\/products\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/training",
				pattern: /^\/training\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
