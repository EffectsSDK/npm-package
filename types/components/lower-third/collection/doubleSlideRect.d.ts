import { LowerThird, LtOptions } from "@/components/lower-third/lowerThird";
export declare class LtDoubleSlideRect extends LowerThird {
    private titleContainer;
    private subtitleContainer;
    private rectFront;
    private rectBack;
    private animations;
    private isReady;
    private ltWidth;
    private ltHeight;
    private smoothPower;
    constructor(options: LtOptions);
    render(): void;
    private createSubtitle;
    private createTitle;
    private createRectangles;
    private addShowFunction;
    private addHideFunction;
}
