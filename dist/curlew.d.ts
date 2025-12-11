interface CurlewConfig {
    [key: string]: any;
    _: string[];
}
declare class Curlew {
    private config;
    reset(): void;
    init(defaults?: object): CurlewConfig;
    isDashArgument(val: string): boolean;
    formatDashValue(val: string): string;
}
declare const _default: Curlew;
export default _default;
