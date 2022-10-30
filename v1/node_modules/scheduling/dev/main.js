// main.js
// import Scheduler from "../src/scheduler";
import Scheduler from "../build/scheduler";

let count = 0;
let efIndex;

function logMessage(msg) {
  console.log(msg, Scheduler.getDeltaTime(), Scheduler.getElapsedTime());
}

function log(msg) {
  logMessage(msg ? msg : "-");

  if (count++ > 60) {
    Scheduler.removeEF(efIndex);
  }
}
efIndex = Scheduler.addEF(log);

Scheduler.delay(log, "Delayed task - ", 2000);

function deferTest(o) {
  let t = 0;
  while (t < o.target) {
    t += Math.random();
  }
}

for (let i = 0; i < 10; i++) {
  const t = 600000;
  const target = Math.floor(t + Math.random() * t);
  Scheduler.defer(deferTest, { name: "task" + i, target });
}
