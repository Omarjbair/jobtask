import Link from "next/link";
import Login from "./Login";

const Navbar = () => {
    return (
        <header className="head">
            <div className="navbar">
                <Link style={{width: "fit-content"}} className="update-button" href={'/websocket'}>
                    websocket
                </Link>
                <Link style={{width: "fit-content"}} className="update-button" href={'/redux'}>
                    Redux
                </Link>
            </div>
            <Login/>
        </header>
    );
}

export default Navbar;
