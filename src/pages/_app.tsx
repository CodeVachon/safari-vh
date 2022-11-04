import { ClassNames } from "@codevachon/classnames";
import { AppProps } from "next/app";
import "./../styles/globals.css";

if (typeof window !== "undefined" && typeof document !== "undefined") {
    const setSafari100vhCSSVar = () => {
        const root = document.documentElement;
        root.style.setProperty(
            "--safari100vh",
            String(document.documentElement?.clientHeight || window.innerHeight) + "px"
        );
    };

    setSafari100vhCSSVar();
    window.addEventListener("resize", setSafari100vhCSSVar);
}

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div
            className={new ClassNames([
                "flex min-h-safariScreen items-center justify-center bg-slate-700 p-8"
            ]).list()}
        >
            <div className={new ClassNames(["w-4/5 rounded-lg bg-white shadow-lg", "p-6"]).list()}>
                <Component {...pageProps} />
            </div>
        </div>
    );
}
