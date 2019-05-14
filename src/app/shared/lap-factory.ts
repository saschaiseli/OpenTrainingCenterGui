import { Lap } from '../model/lap';

export class LapFactory {
  static fromObject(rawLap: any): Lap {
    return new Lap(
      rawLap.id,
      rawLap.start,
      rawLap.end,
      rawLap.duration,
      rawLap.heartBeat,
      rawLap.pace,
    );
  }

  static fromObjects(rawLaps: any[]): Lap[] {
    var laps = new Array(rawLaps.length);
    rawLaps.forEach((item, index) => {
      laps[index] = this.fromObject(item);
    });
    return laps;
  }
}
