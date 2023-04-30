import { useAlert, AlertMessageType } from "../hooks/useAlert";

const textColorMap: Record<AlertMessageType, string> = {
  info: "blue",
  warning: "red",
  success: "green",
};

const Alert = () => {
  const { alerts, deleteAlert } = useAlert();

  return (
    <div>
      {alerts.map((alert) => (
        <h3
          key={alert.id}
          style={{
            color: textColorMap[alert.type],
            border: `2px solid ${textColorMap[alert.type]}`,
          }}
          onClick={() => deleteAlert(alert.id ?? "")}
        >
          {alert.message}
        </h3>
      ))}
    </div>
  );
};

export { Alert };
