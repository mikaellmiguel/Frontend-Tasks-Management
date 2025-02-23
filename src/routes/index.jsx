import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Homepage } from "../pages/Homepage"
import { TaskView } from "../pages/TaskView"
import { NewTask } from "../pages/NewTask"
import { NotFound } from "../pages/NotFound"

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/edit/:id" element={<TaskView />} />
                <Route path="/new" element={<NewTask />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}