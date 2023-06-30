import './App.css';
import Section from './components/Section';
import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./reducers";
import { Provider } from "react-redux";

const store = configureStore({ reducer: allReducers });

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Section />
      </Provider>
    </div>
  );
}

export default App;
