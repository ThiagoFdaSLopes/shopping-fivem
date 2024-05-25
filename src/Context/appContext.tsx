import { createContext } from "react";

export interface IAppContext {
  visible: boolean;
  setVisible: (state: boolean) => void;
}

const AppContext = createContext<IAppContext | null>(null);

export { AppContext };
