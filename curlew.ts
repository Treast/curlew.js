interface CurlewConfig {
  [key: string]: any;
  _: string[];
}

class Curlew {
  private config: CurlewConfig = {
    _: [],
  };

  reset(): void {
    this.config = {
      _: [],
    };
  }

  init(defaults: object = {}): CurlewConfig {
    this.reset();

    this.config = {
      ...this.config,
      ...defaults,
    };

    let pendingArgument: string | null = null;

    process.argv.slice(2).forEach((val: string) => {
      if (pendingArgument) {
        if (this.isDashArgument(val)) {
          this.config[pendingArgument] = true;
          pendingArgument = this.formatDashValue(val);
        } else {
          this.config[pendingArgument] = val;
          pendingArgument = null;
        }
      } else {
        if (this.isDashArgument(val)) {
          pendingArgument = this.formatDashValue(val);
        } else {
          this.config._.push(val);
        }
      }
    });

    if (pendingArgument) {
      this.config[pendingArgument] = true;
    }

    return this.config;
  }

  isDashArgument(val: string): boolean {
    return /^--?([A-z]+)$/.test(val);
  }

  formatDashValue(val: string): string {
    let res: RegExpExecArray | null = /^--?([A-z]+)$/.exec(val) as RegExpExecArray;

    return res[1];
  }
}

export default new Curlew();
