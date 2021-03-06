export class SimpleTraining {

  constructor(public id: number,
    public start: number,
    public timeInSeconds: number,
    public formatedDuration: string,
    public distanceInKm: number,
    public avgHeartBeat: number,
    public maxHeartBeat: number,
    public pace: string,
    public trainingEffect: string,
    public anaerobTrainingEffect: string,
    public athleteId: number) {}
}
