import { Trackpoint } from '../model/trackpoint';

export class TrackpointFactory {
  static fromObject(rawPoint: any): Trackpoint {
    return new Trackpoint(
      rawPoint.id,
      rawPoint.distance,
      rawPoint.altitude,
      rawPoint.time,
      rawPoint.lng,
      rawPoint.lat
    );
  }

  static fromObjects(rawPoints: any[]): Trackpoint[] {
    var trackpoints = new Array(rawPoints.length);
    rawPoints.forEach((item, index) => {
      trackpoints[index] = this.fromObject(item);
    });
    return trackpoints;
  }
}
