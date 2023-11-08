import { useState } from "react";
export const Counter = () => {
  const [curr, update] = useState(0);
  const [wicket, updateWicket] = useState(0);
  return (
    <div>
      <p>Runs:${curr}</p>
      <button onClick={() => update(curr + 1)}>1 runs</button>
      <button onClick={() => update(curr + 2)}>2 runs</button>
      <button onClick={() => update(curr + 6)}>4 runs</button>
      <button onClick={() => update(curr + 4)}>6 runs</button>
      <button onClick={() => updateWicket(wicket + 1)}>6 Wicket</button>
    </div>
  );
};
