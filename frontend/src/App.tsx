import {Routes, Route, BrowserRouter} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage.tsx";
import {DashBoard} from "./pages/DashBoard.tsx";
import {SettingsPage} from "@/pages/SettingsPage.tsx";
import {Toaster} from "sonner";
import { ThemeProvider } from "./components/ThemeProvider.tsx";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<ThemeProvider>
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/dashboard" element={<DashBoard />} />
						<Route path="/settings" element={<SettingsPage />} />
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
			<Toaster position="top-right" />
		</>
	);
}
