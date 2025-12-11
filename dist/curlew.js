"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Curlew {
    constructor() {
        this.config = {
            _: [],
        };
    }
    reset() {
        this.config = {
            _: [],
        };
    }
    init(defaults = {}) {
        this.reset();
        this.config = Object.assign(Object.assign({}, this.config), defaults);
        let pendingArgument = null;
        process.argv.slice(2).forEach((val) => {
            if (pendingArgument) {
                if (this.isDashArgument(val)) {
                    this.config[pendingArgument] = true;
                    pendingArgument = this.formatDashValue(val);
                }
                else {
                    this.config[pendingArgument] = val;
                    pendingArgument = null;
                }
            }
            else {
                if (this.isDashArgument(val)) {
                    pendingArgument = this.formatDashValue(val);
                }
                else {
                    this.config._.push(val);
                }
            }
        });
        if (pendingArgument) {
            this.config[pendingArgument] = true;
        }
        return this.config;
    }
    isDashArgument(val) {
        return /^--?([A-z]+)$/.test(val);
    }
    formatDashValue(val) {
        let res = /^--?([A-z]+)$/.exec(val);
        return res[1];
    }
}
exports.default = new Curlew();
//# sourceMappingURL=curlew.js.map