
/** flight model */
import { Point } from './point';

export class Flight {
    flightId: number;
    location: string;
    points: Array<Point>;

    constructor () {
        this.points = new Array<Point>();
    }
}
