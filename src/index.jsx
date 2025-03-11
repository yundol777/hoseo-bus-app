import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { registerSW } from "virtual:pwa-register";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const updateSW = registerSW({
  onNeedRefresh() {
    console.log("새로운 컨텐츠가 있습니다.");
    updateSW();
  },
  onOfflineReady() {
    console.log("앱이 오프라인 모드에서 사용할 준비가 되었습니다.");
  },
});

function Root() {
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem("campus") || "asan" // 기본값: 아산 캠퍼스
  );

  return (
    <ThemeProvider theme={theme[selectedTheme]}>
      <RecoilRoot>
        <BrowserRouter basename="/hoseo-bus-app">
          <App setSelectedTheme={setSelectedTheme} />
        </BrowserRouter>
      </RecoilRoot>
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
