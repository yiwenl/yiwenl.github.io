import { EaseNumber } from "./alfrid";
import { random } from "./utils";

class Ripple {
  constructor() {
    this._center = [0, 0];
    const easing = 0.015;
    this._waveFront = new EaseNumber(0, easing * 0.5);
    this._waveHeight = new EaseNumber(0, easing);
    this._waveLength = new EaseNumber(0, easing);
  }

  reset() {
    const t = 0.25;
    this._center = [random(t, 1 - t), random(t, 1 - t)];
    this._waveFront.setTo(0);
    this._waveHeight.setTo(random(1, 1.5));
    this._waveLength.setTo(random(1, 1.5));

    this._waveFront.value = random(0.5, 1);
    this._waveHeight.value = 0;
    this._waveLength.value = 0;

    setTimeout(() => this.reset(), random(8000, 4000));
  }

  get center() {
    return this._center;
  }

  get wave() {
    return [
      this._waveFront.value,
      this._waveHeight.value,
      this._waveLength.value,
    ];
  }

  get waveFront() {
    return this._waveFront.value;
  }

  get waveHeight() {
    return this._waveHeight.value;
  }

  get waveLength() {
    return this._waveLength.value;
  }
}

export default Ripple;
