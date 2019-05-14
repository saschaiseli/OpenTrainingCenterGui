import { Lap } from './../model/lap';
import { TrackpointRaw } from './trackpoint-raw';

export interface TrainingRaw {
  id: number;
  dateOfImport: Date;
  fileName: string;
  geoQuality: number;
  note: string;
  upMeter: number;
  downMeter: number;
  geoJSON: string;
  trackPoints: TrackpointRaw[];
  laps: Lap[];
}
