export interface SimpleTrainingRaw {
  id: number;
  start: number;
  timeInSeconds: number;
  distanceInKm: number;
  avgHeartBeat: number;
  maxHeartBeat: number;
  pace: string;
  trainingEffect: string;
  anaerobTrainingEffect: string;
  athleteId: number;
}
