import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 1 } });
  };
  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 1 } });
  };
  const increase5 = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const decrease5 = () => {
    dispatch({ type: "DECREMENT", payload: { num: 5 } });
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "billy", password: "qwer" } });
  };
  return (
    <div className="mx-auto mt-12 w-fit space-y-10 rounded-3xl bg-slate-100 p-10 text-center shadow-xl">
      <h1 className="text-5xl font-bold">{count}</h1>
      <h2 className="text-3xl font-bold">
        ID: {id} PW: {password}
      </h2>
      <div className="space-x-8">
        <button
          onClick={increase}
          className="size-24 rounded-2xl bg-yellow-200 text-2xl"
        >
          +1
        </button>
        <button
          onClick={decrease}
          className="size-24 rounded-2xl bg-yellow-200 text-2xl"
        >
          -1
        </button>
        <button
          onClick={increase5}
          className="size-24 rounded-2xl bg-red-300 text-2xl"
        >
          +5
        </button>
        <button
          onClick={decrease5}
          className="size-24 rounded-2xl bg-red-300 text-2xl"
        >
          -5
        </button>
        <button
          onClick={login}
          className="size-24 rounded-2xl bg-cyan-300 text-2xl"
        >
          Log In
        </button>
      </div>

      <Box></Box>
    </div>
  );
}

export default App;
