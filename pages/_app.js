import EstiloBlobal from "../src/theme/EstiloGlobal";



export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <EstiloBlobal/>
            <Component {...pageProps} />

        </>


    )
}