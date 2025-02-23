import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homepage } from "../pages/Homepage"
import { TaskView } from "../pages/TaskView"

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/edit" element={<TaskView />} />
            </Routes>
        </BrowserRouter>
    )
}