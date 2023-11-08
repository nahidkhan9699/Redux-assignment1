import React from "react";
import { Provider } from "react-redux";
import { configStore } from "./state/configStore";
import Landing from "./components/Landing";
function App() {
  const mystore=configStore();
  return (
   <Provider store={mystore}>
    <Landing />

   </Provider>


    
  );
}

export default App;
