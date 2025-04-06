import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// @ts-ignore
import "virtual:svg-icons-register";
import "./config/firebase.ts";
import "./styles";

createRoot(document.getElementById("root")!).render(<App />);
