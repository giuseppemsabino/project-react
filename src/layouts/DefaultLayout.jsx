import { Outlet } from "react-router-dom";

export default function DefaultLayout(){
    return(
        <div>
            <h1>deafult test</h1>
            <header>

            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}