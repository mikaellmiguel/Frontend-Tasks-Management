/* eslint-disable react/prop-types */
import {Route, Routes, useLocation } from "react-router-dom"
import { Homepage } from "../pages/Homepage"
import { TaskView } from "../pages/TaskView"
import { NewTask } from "../pages/NewTask"
import { NotFound } from "../pages/NotFound"
import { AnimatePresence, motion} from "framer-motion"

export function AppRoutes() {
    
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Homepage /></PageWrapper>} />
                <Route path="/edit/:id" element={<PageWrapper><TaskView /></PageWrapper>} />
                <Route path="/new" element={<PageWrapper><NewTask /></PageWrapper>} />
                <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    )
}

function PageWrapper({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0.2, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity:  0, x: -100 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}