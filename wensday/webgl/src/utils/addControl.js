import { GL } from "alfrid";

import * as dat from "dat.gui";
import Config from "../Config";
import Settings from "../Settings";
import { saveJson } from "./";

export default (anim) => {
  const { refresh, reload } = Settings;
  const oControl = {
    save: () => {
      saveJson(Config, "Settings");
    },
  };

  const gui = new dat.GUI({ width: 300 });
  window.gui = gui;
  gui.add(Config, "numRipples", 3, 10).step(1).onFinishChange(reload);

  gui.add(Config, "autoSave").onFinishChange(reload);
  gui.add(oControl, "save").name("Save Settings");
  gui.add(Settings, "reset").name("Reset Default");
};
