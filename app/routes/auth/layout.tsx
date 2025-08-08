// src/routes/auth/layout.tsx
import { Outlet, NavLink } from "react-router";

export default function AuthLayout() {
    return (
        <div style={{ padding: 8 }}>
            <h2>Auth</h2>
            <nav style={{ display: "flex", gap: 8 }}>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </nav>
            <Outlet />
        </div>
    );
}
