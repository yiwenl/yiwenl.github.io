// animation frame source
let afSource = window;

// expected frame rate, for defer / usurp tasks
let frameRate = 60;

// time
let startTime = performance.now();
let deltaTime = 0;
let elapsedTime = 0;
let prevTime = startTime;

// tasks
const enterframeTasks = [];
const delayTasks = [];
const deferTasks = [];
const usurpTasks = [];
let highTasks = [];
let nextTasks = [];

// animation frame id
let requestAnimationFrameId = -1;

// indexing
let idTable = 0;

/**
 * Add an enterframe task
 *
 * @param {function} mFunc the function to be called in enterframe
 * @param {object} mArgs the arguments for the function
 * @returns {number} the id of the task
 */
function addEF(mFunc, mArgs) {
  const id = ++idTable;
  enterframeTasks[id] = { func: mFunc, args: mArgs };
  return id;
}

/**
 * Remove an enterframe task
 *
 * @param {number} mIndex the id of the task to be removed
 * @returns {number} return -1
 */
function removeEF(mIndex) {
  if (enterframeTasks[mIndex] !== undefined) {
    enterframeTasks[mIndex] = null;
  }
  return -1;
}

/**
 * Add a delayed task
 *
 * @param {function} mFunc the function to be called
 * @param {object} mArgs the arguments for the function
 * @param {number} mDelay the delay time for the task
 * @returns {number} the id of the task
 */
function delay(mFunc, mArgs, mDelay) {
  const time = performance.now();
  delayTasks.push({ func: mFunc, args: mArgs, delay: mDelay, time });
}

/**
 * Add a task for next frame
 *
 * @param {function} mFunc the function to be called
 * @param {object} mArgs the arguments for the function
 * @returns {number} the id of the task
 */
function next(mFunc, mArgs) {
  nextTasks.push({ func: mFunc, args: mArgs });
}

/**
 * Add a deffered task that only execute when there's enough time left in the frame.
 * Otherwise try again in the next frame ( Green threading )
 *
 * @param {function} mFunc the function to be called
 * @param {object} mArgs the arguments for the function
 * @returns {number} the id of the task
 */
function defer(mFunc, mArgs) {
  deferTasks.push({ func: mFunc, args: mArgs });
}

/**
 * Add an usurp task, that only execute when there's enough time left in the frame, otherwise abandoned.
 *
 * @param {function} mFunc the function to be called
 * @param {object} mArgs the arguments for the function
 * @returns {number} the id of the task
 */
function usurp(mFunc, mArgs) {
  usurpTasks.push({ func: mFunc, args: mArgs });
}

/**
 * Get the delta time from last frame
 *
 * @returns {number} the elapsed time from the last frame
 */
function getDeltaTime() {
  return deltaTime;
}

/**
 * Get the elapsed time from the app starts
 *
 * @returns {number} the elapsed tiem of the app ( in sec )
 */
function getElapsedTime() {
  return elapsedTime;
}

/**
 * Set the animation source of the scheduler
 *
 * @param {object} mSource the source of animation frame, e.g. window or XR
 */
function setRequestAnimationFrameSource(mSource) {
  if (requestAnimationFrameId > -1) {
    window.cancelAnimationFrame(requestAnimationFrameId);
  }
  afSource = mSource;
  loop();
}

/**
 * Set the (expected) frame rate for defer / usurp tasks
 *
 * @param {number} mFrameRate the frame rate
 */
function setFrameRate(mFrameRate) {
  frameRate = mFrameRate;
}

/**
 * Process all scheduled tasks
 */
function process() {
  let i = 0;
  let task;
  let interval = 1000 / frameRate;
  let current = 0;

  // enterframe tasks
  for (i = 0; i < enterframeTasks.length; i++) {
    task = enterframeTasks[i];
    if (task !== null && task !== undefined) {
      task.func(task.args);
    }
  }

  // high priority tasks
  while (highTasks.length > 0) {
    task = highTasks.pop();
    task.func(task.args);
  }

  // get current time
  let currentTime = performance.now();
  elapsedTime = (currentTime - startTime) / 1000;
  deltaTime = currentTime - prevTime;

  // delay tasks
  for (i = 0; i < delayTasks.length; i++) {
    task = delayTasks[i];
    if (currentTime - task.time > task.delay) {
      task.func(task.args);
      delayTasks.splice(i, 1);
    }
  }

  // defer tasks
  currentTime = performance.now();
  while (deferTasks.length > 0) {
    task = deferTasks.shift();
    current = performance.now();
    if (current - currentTime < interval) {
      task.func(task.args);
    } else {
      deferTasks.unshift(task);
      break;
    }
  }

  // usurp tasks
  currentTime = performance.now();
  while (usurpTasks.length > 0) {
    task = usurpTasks.shift();
    current = performance.now();
    if (current - currentTime < interval) {
      task.func(task.args);
    }
    // else do nothing, tasks abandoned
  }

  // save time
  prevTime = currentTime;

  // clear tasks
  highTasks = highTasks.concat(nextTasks);
  nextTasks = [];
}

/**
 * Looping
 */
function loop() {
  process();
  requestAnimationFrameId = afSource.requestAnimationFrame(loop);
}

// start the engine
loop();

// exports
export default {
  addEF,
  removeEF,
  delay,
  next,
  defer,
  usurp,
  setRequestAnimationFrameSource,
  setFrameRate,
  getElapsedTime,
  getDeltaTime,
};
