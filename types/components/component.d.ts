type Options = {
    [key: string]: any;
};

export interface ComponentPosition {
    x: number;
    y: number;
    placement: ComponentPlacement;
  }
  
export type ComponentPlacement =
    | "top-left"
    | "bottom-left"
    | "center"
    | "top-right"
    | "bottom-right"
    | "custom";

    
export declare abstract class Component {
    protected options: Options;
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
