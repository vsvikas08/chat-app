import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./component/HomePage";
import UserInputDialog from "./component/UserInputDialog";

function App() {
    const [openDialog, setOpenDialog] = useState(false);
    useEffect(() => {
        if (!localStorage.getItem("email")) {
            setOpenDialog(true);
        }
    }, [localStorage.getItem("email")]);
    return (
        <div>
            <HomePage />
            {openDialog && <UserInputDialog />}
        </div>
    );
}

export default App;
