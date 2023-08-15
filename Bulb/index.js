export const Bulb = (props) => {
    const { isOn } = props;
    const bulbElement = document.createElement("div");
    bulbElement.classList.add("bulb");
    if (isOn) {
      bulbElement.classList.add("bulb--on");
    }
    bulbElement.addEventListener("click", () => {
      bulbElement.replaceWith(Bulb({ isOn: !isOn }));
    });
    return bulbElement;
  };