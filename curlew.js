class Curlew {
	init(defaults = {}) {
		this.config = defaults;
		let isThereADashArgument = null;
		process.argv.slice(2).forEach((val, index) => {
			if (isThereADashArgument) {
				if (this.isDashArgument(val)) {
					this.config[isThereADashArgument] = true;
					isThereADashArgument = this.formatDashValue(val);
				} else {
					this.config[isThereADashArgument] = val;
					isThereADashArgument = false;
				}
			} else {
				if (this.isDashArgument(val)) {
					isThereADashArgument = this.formatDashValue(val);
				} else {
					this.config[val] = true;
				}
			}
		});
		if (isThereADashArgument) {
			this.config[isThereADashArgument] = true;
		}
		return this.config;
	}

	isDashArgument(val) {
		return /^--([A-z]+)$/.test(val) || /^-([A-z]+)$/.test(val);
	}

	formatDashValue(val) {
		let res = /^--([A-z]+)$/.exec(val);
		if (!res) {
			res = /^-([A-z]+)$/.exec(val);
		}
		return res[1];
	}
}

module.exports = new Curlew();
