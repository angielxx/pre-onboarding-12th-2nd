type CallBackType = () => void;

export const toScrollFit = (callBack: CallBackType) => {
  let tick = false;

  return function trigger() {
    if (tick) {
      return;
    }

    tick = true;
    return requestAnimationFrame(function task() {
      tick = false;
      return callBack();
    });
  };
};
