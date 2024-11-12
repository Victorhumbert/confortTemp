import {Routes, Route, BrowserRouter} from "react-router-dom";
import {LoginPage} from "@/pages/LoginPage.tsx";
import {DashBoard} from "@/pages/DashBoard.tsx";

export default function App() {

  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<LoginPage/>}/>
                  <Route path='/dashboard' element={<DashBoard/>}/>
              </Routes>
          </BrowserRouter>
      </>
  )
}
