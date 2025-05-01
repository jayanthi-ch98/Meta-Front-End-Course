import { useState } from "react";

function ModeHandler() {
    let darkModeOn = useState(true);
    const darkMode = <h1>Dark Mode</h1>;
    const lightMode = <h1>Light Mode</h1>;

    const clickHandler = () => {
        darkModeOn = !darkModeOn;
        console.log("Handler clicked :" + darkModeOn);
    }

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={clickHandler}>Change Mode</button>

        </div>
    );
}
export default ModeHandler;