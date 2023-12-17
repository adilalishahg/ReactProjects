import { useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap fixed justify-center bottom-10 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <Button color="red" name="Red" onClick={() => setColor("red")} />
          <Button
            color="green"
            name="Green"
            onClick={() => setColor("green")}
          />
          <Button color="blue" name="Blue" onClick={() => setColor("blue")} />
          <Button
            color="orange"
            name="Orange"
            onClick={() => setColor("orange")}
          />
          <Button
            color="purple"
            name="Purple"
            onClick={() => setColor("purple")}
          />
        </div>
      </div>
    </div>
  );
}
