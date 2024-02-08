import { LowerThird, LtOptions } from "../lowerThird";
export declare class LtLeftTextbox extends LowerThird {
    private rectBack;
    private rectFront;
    private mask;
    private ltContainer;
    private animations;
    private ltWidth;
    private ltHeight;
    private smoothPower;
    constructor(options: LtOptions);
    render(): void;
    private createText;
    private addRectangles;
    private addSpriteMask;
    private addShowFunction;
    private addHideFunction;
}
