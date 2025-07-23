type FunctionListener = () => void;


const addClickEventListener = (listener: FunctionListener) => {
  document.addEventListener("click", listener);
};

addClickEventListener(() => {
  console.log("Clicked!");
});

addClickEventListener(
  // @ts-expect-error
  "abc",
);
