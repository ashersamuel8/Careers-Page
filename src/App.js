import {
  Route,
  Link,
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
  BrowserRouter,
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import RootLayout from "./layouts/RootLayout"
import HelpLayout from "./layouts/HelpLayout"
import Faq from "./pages/help/faq"
import Contact, { contactAction } from "./pages/help/contact"
import NotFound from "./pages/NotFound"
import Careers from "./pages/Careers/careers"
import CareersLayout from "./layouts/CareersLayout"
import { careersLoader } from "./pages/Careers/careers"
import {
  CareerDetails,
  careerDetailsLoader,
} from "./pages/Careers/careerDetails"
import CareersError from "./pages/Careers/careersError"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}></Route>
        <Route
          path="contact"
          element={<Contact />}
          action={contactAction}
        ></Route>
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader}></Route>
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        ></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
