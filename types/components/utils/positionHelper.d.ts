import { ComponentPosition } from "../component";

interface SizeData {
    width: number;
    height: number;
}
export declare class PositionHelper {
    static calcPosition(position: ComponentPosition, size: SizeData): {
        x: number;
        y: number;
    };
    private static getPositionFromPlacement;
    private static getCustomPosition;
}
export {};
