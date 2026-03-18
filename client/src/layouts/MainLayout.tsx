import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const MainLayout = () => {
    return (
        <div className="min-h-screen overflow-x bg-background text-foreground">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
