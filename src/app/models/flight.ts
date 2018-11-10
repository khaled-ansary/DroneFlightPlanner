
/** flight model */
import { Schedule } from './schedule';

export class Flight {
    flightId: number;
    arrival: Schedule;
    departure: Schedule;
}
