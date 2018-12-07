import { Lap } from './lap';
import { Trackpoint } from './trackpoint';

export class Training {

  constructor(public id: number,
    public geoJSON: string,
    public dateOfImport: Date,
    public fileName: string,
    public geoQuality: number,
    public note: string,
    public upMeter: number,
    public downMeter: number,
    public trackPoints: Trackpoint[],
    public laps: Lap[]
    ) {}
}
