import { forwardRef } from "react";
function Button(props, ref) {
  return (
    <div>
      <button ref={ref}>Click me</button>
    </div>
  );
}

export default forwardRef(Button);
