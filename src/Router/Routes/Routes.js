import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import CareerCamp from "../../Pages/CareerCamp/CareerCamp";
import Contact from "../../Pages/Contact/Contact";
import Home from "../../Pages/Home/Home";
import NonTechnicalCourses from "../../Pages/NonTechnicalCourses/NonTechnicalCourses";
import NotFound from "../../Pages/NotFound/NotFound";
import TechnicalCourses from "../../Pages/TechnicalCourses/TechnicalCourses";
import TrainingJourney from "../../Pages/TrainingJourney/TrainingJourney";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/careercamp',
                element: <CareerCamp></CareerCamp>
            },
            {
                path: '/technical',
                element: <TechnicalCourses></TechnicalCourses>
            },
            {
                path: '/nontechnical',
                element: <NonTechnicalCourses></NonTechnicalCourses>
            },
            {
                path: '/training',
                element: <TrainingJourney></TrainingJourney>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>,
    }
])