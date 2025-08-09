import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
} from "@react-router/dev/routes";

export default [
    index("./home.tsx"),
    route("about", "./about.tsx"),

    // 회원 가입 예제
    layout("./routes/auth/layout.tsx", [
        route("login", "./routes/auth/login.tsx"),
        route("register", "./routes/auth/register.tsx"),
    ]),

    route("dashboard", "./routes/dashboard.tsx"),

    ...prefix("concerts", [
        index("./concerts/home.tsx"),
        route(":city", "./concerts/city.tsx"),
        route("trending", "./concerts/trending.tsx"),
    ]),
] satisfies RouteConfig;
