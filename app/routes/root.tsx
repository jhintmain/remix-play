import {Link, Outlet} from "react-router";

export default function Root() {
    return (
        <div style={{padding: 16}}>
            <h1>Demo Auth</h1>
            <nav style={{display: "flex", gap: 8}}>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
            <hr/>
            <Outlet/>
        </div>
    );
}