import { EaseNumber } from "alfrid";
class Ripple {
  constructor() {
    this._waveFront = new EaseNumber(0);
    this._waveHeight = new EaseNumber(0);
    this._waveLength = new EaseNumber(0);
  }
}

export default Ripple;
