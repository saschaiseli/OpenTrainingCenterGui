export interface SimpleTrainingRaw {
  id: number;
  timeInSeconds: number;
  distanceInMeter: number;
  avgHeartBeat: number;
  maxHeartBeat: number;
  pace: string;
  trainingEffect: string;
  anaerobTrainingEffect: string;
  athleteId: number;
}
