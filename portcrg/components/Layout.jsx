
import Head from "next/head";

export default function Layout({children}){
    return(
        <div>
            <nav>
                navbar
            </nav>
                 <main>
                 {children}
                 </main>
            <footer>
                    footer
            </footer>
        </div>

    );
}
