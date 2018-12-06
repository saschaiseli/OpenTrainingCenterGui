import { Lap } from './../model/lap';
import { TrackpointRaw } from './trackpoint-raw';

export interface TrainingRaw {
  timeInSeconds: number;
  distanceInKm: number;
  avgHeartBeat: number;
  maxHeartBeat: number;
  pace: string;
  trainingEffect: string;
  anaerobTrainingEffect: string;
  geoJSON: string;
  trackPoints: TrackpointRaw[];
  laps: Lap[];
  athleteId: number;
}
