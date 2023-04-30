import { createContext, useContext, useState, ReactNode } from "react";

type AlertMessageType = "info" | "warning" | "success";

type AlertMessage = {
  id?: string;
  message: string;
  type: AlertMessageType;
};

type TAlertContext = {
  alerts: AlertMessage[];
  pushAlert: (newAlert: AlertMessage) => void;
  deleteAlert: (id: string) => void;
};

const AlertContext = createContext(null as unknown as TAlertContext);

const useAlert = () => {
  const alert = useContext(AlertContext);
  if (!alert) throw "'useAlert' must be usd within 'AlertContextProvider' ";
  return alert;
};

const generateUniqueId = () => (Math.random() + 1).toString(36).substring(7);

const AlertContextProvider = ({ children }: { children: ReactNode }) => {
  const [alerts, setAlerts] = useState([] as AlertMessage[]);

  const pushAlert = (newAlert: AlertMessage) => {
    setAlerts([...alerts, { ...newAlert, id: generateUniqueId() }]);
  };
  const deleteAlert = (id: string) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={{ pushAlert, alerts, deleteAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export { useAlert, AlertContextProvider };
export type { AlertMessageType };
