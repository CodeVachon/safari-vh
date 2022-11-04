# iOS Safari 100vh CSS Var Test

## Add Base Variable to CSS File

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    :root {
        --safari100vh: 100vh;
    }
}
```

## Use JavaScript to set the variable

```ts
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
```

## Setup Tailwindcss to use the variable

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                safariScreen: "var(--safari100vh, 100vh)"
            },
            minHeight: {
                safariScreen: "var(--safari100vh, 100vh)"
            },
            maxHeight: {
                safariScreen: "var(--safari100vh, 100vh)"
            }
        }
    },
    plugins: []
};
```

## Use the new Classes

```tsx
export default function App({ Component, pageProps }: AppProps) {
    return (
        <div
            className={new ClassNames([
                "min-h-safariScreen flex items-center justify-center bg-slate-700 p-8"
            ]).list()}
        >
            <div className={new ClassNames(["w-4/5 rounded-lg bg-white shadow-lg", "p-6"]).list()}>
                <Component {...pageProps} />
            </div>
        </div>
    );
}
```
