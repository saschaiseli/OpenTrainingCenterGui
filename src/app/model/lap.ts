export class Lap {
  constructor(public id: number,
    public start: number,
    public end: number,
    public duration: number,
    public heartBeat: number,
    public pace: string
    ) {}
}
