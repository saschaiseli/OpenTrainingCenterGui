import { Lap } from './lap';
import { Trackpoint } from './trackpoint';

export class Training {

  constructor(public id: number,
    public timeInSeconds: number,
    public distanceInKm: number,
    public avgHeartBeat: number,
    public maxHeartBeat: number,
    public pace: string,
    public trainingEffect: string,
    public anaerobTrainingEffect: string,
    public geoJSON: string,
    public trackPoints: Trackpoint[],
    public laps: Lap[],
    public athleteId: number) {}
}
