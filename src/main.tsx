import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import "./index.css";

// Safeguard against third-party extensions trying to overwrite window.fetch
// when window.fetch has only a getter in sandboxed / iframe environments.
if (typeof window !== "undefined") {
  try {
    let currentFetch = typeof window.fetch === "function" ? window.fetch.bind(window) : window.fetch;
    const fetchDescriptor = {
      configurable: true,
      enumerable: true,
      get: () => currentFetch,
      set: (fn: typeof window.fetch) => {
        currentFetch = fn;
      },
    };
    try {
      Object.defineProperty(window, "fetch", fetchDescriptor);
    } catch {
      try {
        if (typeof Window !== "undefined" && Window.prototype) {
          Object.defineProperty(Window.prototype, "fetch", fetchDescriptor);
        }
      } catch {}
    }
  } catch {}

  // Prevent browser extension runtime errors from surfacing into the application
  window.addEventListener("error", (event) => {
    if (
      (event.filename && event.filename.includes("chrome-extension://")) ||
      (event.message && event.message.includes("Cannot set property fetch"))
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);
}

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
} else {
  console.error("Failed to find #root element in document. Creating fallback root container.");
  const fallbackRoot = document.createElement("div");
  fallbackRoot.id = "root";
  document.body.appendChild(fallbackRoot);
  createRoot(fallbackRoot).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
}
