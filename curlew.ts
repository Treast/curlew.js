interface IConfig {
	[key: string]: any;
	_: string[];
}

class Curlew {
	config: IConfig = {
		_: [],
	};

	init(defaults: object = {}): IConfig {
		this.config = {
			...this.config,
			...defaults,
		};
		let isThereADashArgument: string | null = null;
		process.argv.slice(2).forEach((val: string) => {
			if (isThereADashArgument) {
				if (this.isDashArgument(val)) {
					this.config[isThereADashArgument] = true;
					isThereADashArgument = this.formatDashValue(val);
				} else {
					this.config[isThereADashArgument] = val;
					isThereADashArgument = null;
				}
			} else {
				if (this.isDashArgument(val)) {
					isThereADashArgument = this.formatDashValue(val);
				} else {
					this.config._.push(val);
				}
			}
		});
		if (isThereADashArgument) {
			this.config[isThereADashArgument] = true;
		}
		return this.config;
	}

	isDashArgument(val: string): boolean {
		return /^--([A-z]+)$/.test(val) || /^-([A-z]+)$/.test(val);
	}

	formatDashValue(val: string): string {
		let res: RegExpExecArray | null = /^--([A-z]+)$/.exec(val);
		if (!res) {
			res = /^-([A-z]+)$/.exec(val) as RegExpExecArray;
		}
		return res[1];
	}
}

export default new Curlew();
