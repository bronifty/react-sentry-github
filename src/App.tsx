import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
// import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

let release = `react-sentry-github@1.0.0`;

Sentry.init({
  dsn: "https://cfa3d1a0e8894086841a91fffb63357f@o4504252009218048.ingest.sentry.io/4504252021211141",
  integrations: [new BrowserTracing()],
  release,
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default Sentry.withProfiler(App);
