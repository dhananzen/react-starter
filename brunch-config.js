module.exports = {
	files  : {
		javascripts: {
			joinTo: 'app.js'
		}
	},
	plugins: {
		babel: {
			presets: ['es2015', "stage-2", 'react']
		}
	},
};