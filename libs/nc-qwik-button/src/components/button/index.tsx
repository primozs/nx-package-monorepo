import { Slot, component$, QwikIntrinsicElements } from "@builder.io/qwik";

type Props = QwikIntrinsicElements["button"];

export const Button = component$<Props>((props) => {
  return (
    <button {...props}>
      <Slot></Slot> krneki
    </button>
  );
});
