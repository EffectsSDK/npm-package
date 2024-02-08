import { LowerThird, LtOptions } from "../lowerThird";
export declare class LtHorizontalMirror extends LowerThird {
    private isReady;
    private middleLine;
    private titleContainer;
    private subtitleContainer;
    private animations;
    private ltWidth;
    private ltHeight;
    private smoothPower;
    constructor(options: LtOptions);
    render(): void;
    private createText;
    private createRectangles;
    private addShowFunction;
    private addHideFunction;
}
