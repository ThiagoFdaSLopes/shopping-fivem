import React, { useEffect, useState } from "react";
import { AppContext } from "../Context/appContext";
import { isEnvBrowser } from "../misc/misc";
import { useNuiEvent } from "../hooks/useNuiEvent";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useNuiEvent("open", setVisible);

  useEffect(() => {
    if (!visible) return;

    const keyHandler = (e: KeyboardEvent) => {
      if (["Escape"].includes(e.code) && isEnvBrowser()) {
        setVisible(false);
      }
    };

    window.addEventListener("keydown", keyHandler);

    return () => window.removeEventListener("keydown", keyHandler);
  }, [visible]);

  return (
    <AppContext.Provider value={{ visible, setVisible }}>
      {visible && children}
    </AppContext.Provider>
  );
}
