import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
    const [dark, setDark] = useState(
        () => localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="rounded-full p-2 transition hover:bg-zinc-200 dark:hover:bg-zinc-700"
        >
            {dark ? <div>☀️</div> : <div>🌙</div>}
        </button>
    );
}
