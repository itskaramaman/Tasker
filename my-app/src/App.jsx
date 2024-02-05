import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import store from "./utils/redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <main className="p-10">
          <Outlet />
        </main>
      </Provider>
    </>
  );
}

export default App;
