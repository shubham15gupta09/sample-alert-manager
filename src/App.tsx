import { Alert } from "./component/Alert";
import { useAlert } from "./hooks/useAlert";

const buttonStyle = {
  border: "1px solid black",
  margin: "5px",
  backgroundColor: "white",
  fontSize: "26px",
};

const App = () => {
  const { pushAlert } = useAlert();

  const info = () => pushAlert({ message: "I am an info", type: "info" });

  const warning = () =>
    pushAlert({ message: "I am a warning", type: "warning" });

  const success = () =>
    pushAlert({ message: "I am a success", type: "success" });

  return (
    <>
      <button style={{ ...buttonStyle, color: "red" }} onClick={warning}>
        Warning
      </button>
      <button style={{ ...buttonStyle, color: "blue" }} onClick={info}>
        Info
      </button>
      <button style={{ ...buttonStyle, color: "green" }} onClick={success}>
        Success
      </button>
      <Alert />
    </>
  );
};

export default App;
