import {Routes, Route, BrowserRouter} from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { DashBoard } from "@/pages/DashBoard";
import { SettingsPage } from "@/pages/SettingsPage";
import {Toaster} from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DispositivosPage } from "./pages/DispositivoPage";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<ThemeProvider>
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/dashboard" element={<DashBoard />} />
						<Route path="/settings" element={<SettingsPage />} />
						<Route path="/dispositivo/:id" element={<DispositivosPage />} />
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
			<Toaster position="top-right" />
		</>
	);
}
