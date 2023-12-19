import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
export default function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setconvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setconvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  };
  const BackgroundImage2 =
    "https://images.pexels.com/photos/17765583/pexels-photo-17765583/free-photo-of-a-black-background-with-a-bunch-of-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  const BackgroundImage =
    "https://images.pexels.com/photos/19283549/pexels-photo-19283549/free-photo-of-hot-air-balloons-in-cappadocia-turkey.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <div
      className="flex flex-wrap items-center justify-center w-full h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="flex w-full">
        <div
          className="w-1/4 max-w-md p-3 mx-4 bg-center bg-no-repeat bg-cover border border-gray-200 rounded-lg backdrop-blur-md bg-white/30"
          style={{
            backgroundImage: `url('${BackgroundImage2}')`,
          }}
        ></div>
        <div className="w-1/2 max-w-md p-5 mx-auto border rounded-lg border-gray-60 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                currencyOption={options}
                onCurrencyChange={(currency) => {
                  setAmount(amount);
                  setFrom(currency);
                }}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisale
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
