import { Container } from "pixi.js";
type Options = {
    [key: string]: any;
};
export declare abstract class Component {
    container: Container;
    options: Options;
    private afterShowFunction;
    private beforeShowFunction;
    private beforeHideFunction;
    private afterHideFunction;
    constructor(options?: Options);
    setOptions(options?: Options): void;
    show(): void;
    hide(): void;
    onBeforeShow(f: Function): void;
    onAfterShow(f: Function): void;
    onBeforeHide(f: Function): void;
    onAfterHide(f: Function): void;
    isVisible(): boolean;
    getOptions(): Options;
    destroy(): void;
    px(value: number): number;
    render(): void;
}
export declare const componentsProxyHandler: ProxyHandler<any>;
export {};
