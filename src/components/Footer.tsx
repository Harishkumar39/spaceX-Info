import React from "react";

const Footer: React.FC<{}> = (props) => {
    return(
        <footer className="bg-black text-white text-center p-3">
            <p>SpaceX Info @ {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer