import { StrictMode } from "react";
import { type Container, createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root") as Container).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
