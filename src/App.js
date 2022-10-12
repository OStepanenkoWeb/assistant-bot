import './App.css';
import NotificatorForm from "./layouts/NotificatorForm/NotificatorForm";
import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";

function App() {
    const {tg} = useTelegram()
    useEffect(() => {
        tg.ready()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div className="App">
       <NotificatorForm/>
    </div>
  );
}

export default App;
