import { useEffect, useState } from "react";
import ButtonPrimary from "~/components/ui/buttons/ButtonPrimary";

export default function SampleComponent() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("mounted");
  }, []);

  function increment(i: number) {
    setCounter(counter + i);
  }

  return (
    <div>
      <ButtonPrimary onClick={() => increment(1)}>Counter: {counter}</ButtonPrimary>
    </div>
  );
}
