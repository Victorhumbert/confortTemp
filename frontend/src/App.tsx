import {Routes, Route, BrowserRouter} from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { DashBoard } from "@/pages/DashBoard";
import { SettingsPage } from "@/pages/SettingsPage";
import {Toaster} from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";

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
