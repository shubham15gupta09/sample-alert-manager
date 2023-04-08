import { useAlert, AlertMessageType } from "../hooks/useAlert";

const textColorMap: Record<AlertMessageType, string> = {
  info: "blue",
  warning: "red",
  success: "green",
};

const buttonStyle = {
  border: "1px solid black",
  margin: "5px",
  backgroundColor: "white",
};

const Alert = () => {
  const { alerts, pushAlert, deleteAlert } = useAlert();

  const info = () => pushAlert({ message: "I am an info", type: "info" });

  const warning = () =>
    pushAlert({ message: "I am a warning", type: "warning" });

  const success = () =>
    pushAlert({ message: "I am a success", type: "success" });

  return (
    <div>
      {alerts.map((alert) => (
        <p
          key={alert.id}
          style={{ color: textColorMap[alert.type] }}
          onClick={() => deleteAlert(alert.id ?? "")}
        >
          {alert.message}
        </p>
      ))}

      <button style={{ ...buttonStyle, color: "red" }} onClick={warning}>
        create Warning
      </button>
      <button style={{ ...buttonStyle, color: "blue" }} onClick={info}>
        create info
      </button>
      <button style={{ ...buttonStyle, color: "green" }} onClick={success}>
        create success
      </button>
    </div>
  );
};

export { Alert };
