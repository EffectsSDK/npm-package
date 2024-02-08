import { LowerThird, LtOptions } from "../../lowerThird";
export declare class LtTwoSlideRects extends LowerThird {
    private titleBox;
    private subtitleBox;
    private isTitleTextShown;
    private isTitleRectHidden;
    private isSubtitleTextShown;
    private isSubtitleRectHidden;
    private delay;
    private gap;
    private isReady;
    constructor(options: LtOptions);
    render(): void;
    private addShowFunction;
    private addHideFunction;
}
