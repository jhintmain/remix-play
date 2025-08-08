import { Outlet } from "@remix-run/react";
export default function AuthLayout() {
    return (
        <div>
            <h2>🔐 Auth Layout  - about</h2>
            <Outlet />
        </div>
    );
}