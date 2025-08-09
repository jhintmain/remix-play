const LS_KEY= 'demo_user';

export type User = { email : string};

// Save user to localStorage
export function getUser() : User |null {
    try{
        const raw = localStorage.getItem(LS_KEY);
        if (!raw) return null;
        return JSON.parse(raw);
    }catch {
        return null;
    }
}

// Retrieve user from localStorage
export function setUser(user: User) {
    try {
        localStorage.setItem(LS_KEY, JSON.stringify(user));
    } catch (e) {
        console.error("Failed to set user in localStorage", e);
    }
}

export function clearUser() {
    try {
        localStorage.removeItem(LS_KEY);
    } catch (e) {
        console.error("Failed to clear user from localStorage", e);
    }
}

export function authUser(){
    const user = getUser();
    if (!user) {
        const e = new Response("Unauthorized", {status : 401});
        throw e;
    }
    return user;
}