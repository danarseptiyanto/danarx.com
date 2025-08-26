import React from "react";
import { Link } from "@inertiajs/react";
import ThemeSwitcher from "../components/ThemeSwitcher";

const Home = () => {
    return (
        <div>
            <ul className="bg-amber-200 dark:bg-black">
                <li className="text-6xl text-red-600 dark:text-white">
                    Hello World
                </li>
                <ThemeSwitcher />
            </ul>
        </div>
    );
};

export default Home;
