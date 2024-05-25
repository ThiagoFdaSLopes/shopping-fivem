import { debugData } from "../src/utils/debugData";
import React from "react";
import { CardComponent } from "./MyComponents/card";

debugData([{ action: "open", data: true }]);

function App() {
  return (
    <React.Fragment>
      <div style={{ width: 200 }}>
        <CardComponent />
      </div>
    </React.Fragment>
  );
}

export default App;
