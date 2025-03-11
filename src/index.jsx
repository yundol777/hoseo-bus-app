import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { registerSW } from "virtual:pwa-register";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function addGoogleAnalytics() {
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = "https://www.googletagmanager.com/gtag/js?id=G-ZLHZFB5TRF";

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ZLHZFB5TRF');
  `;

  document.head.appendChild(script1);
  document.head.appendChild(script2);
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && typeof gtag === "function") {
    gtag("event", "page_view", {
      page_path: window.location.pathname,
      page_title: document.title,
    });
  }
});

// 서비스 워커 등록 (PWA 업데이트 알림)
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

  // Google Analytics 추가
  useEffect(() => {
    addGoogleAnalytics();
  }, []);

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
