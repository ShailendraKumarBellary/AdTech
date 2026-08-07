# 🚀 AdTech AI Assistant

[![Angular](https://img.shields.io/badge/Angular-18-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![.NET Core](https://img.shields.io/badge/.NET_Core-8.0-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![Playwright](https://img.shields.io/badge/Playwright-Platform-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4.1_Mini-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)

An AI-powered AdTech troubleshooting platform built with **Angular**, **ASP.NET Core**, **Playwright**, and **OpenAI**. It automatically analyzes publisher websites and provides intelligent, context-aware explanations for Google Ad Manager (GAM) and Header Bidding implementations.

---

## 📖 Overview

**AdTech AI Assistant** helps publishers and Ad Operations engineers instantly audit website ad setups without digging through minified source code. 

By targeting only relevant script contexts, the application filters out background noise before querying OpenAI—resulting in **faster, highly accurate, and cost-effective AI responses**.

### 🔄 Core Workflow
1. **Crawl & Extract:** Playwright executes a deep-scan of the target URL to capture dynamic scripts.
2. **Isolate Context:** The .NET backend parses the payload, stripping noise to isolate GPT configurations, Prebid snippets, and CMP hooks.
3. **Analyze & Query:** Developers interact with a GPT-4.1 Mini instance specifically tuned to the isolated code footprint.

> 🌐 **Live Demo:** Explore the application at [purple-pebble-079996210.7.azurestaticapps.net/home](https://purple-pebble-079996210.7.azurestaticapps.net/home)

---

## ✨ Features Breakdown

| Module | Capabilities |
| :--- | :--- |
| **🌐 Website Analyzer** | Multi-threaded crawling via Playwright, JS resource mapping, network payload inspection, and security header validation. |
| **🎯 Google Ad Manager** | Automated detection of Google Publisher Tags (GPT), `SecurePubAds` paths, active network ad requests, and Network IDs. |
| **⚡ Header Bidding** | Direct identification of `Prebid.js` footprints, Amazon TAM wrappers, Open Bidding queries, and bidder configurations. |
| **🛡️ CMP Identification** | Auto-detects major consent compliance frameworks (OneTrust, Quantcast, TrustArc, Didomi, CookieBot, SourcePoint, Google Funding Choices). |
| **📄 Compliance Guard** | Instant parsing and status validation of `ads.txt` and `robots.txt` paths. |
| **🤖 Context-Aware AI** | Custom-engineered token filtering utilizing **GPT-4.1 Mini** to debug live script setups. |

---

## 🏗️ System Architecture

The application relies on a decoupled, asynchronous architecture designed to handle heavy headless browser operations while maintaining a snappy user experience.

```
[ Angular 18 Frontend ] 
         │  ▲
  HTTPS  │  │ SSE / WebSockets (Real-time logs)
         ▼  │
[ ASP.NET Core 8.0 Web API ]
         │
         ├──► [ Playwright Crawler Instance ] ──► ( Fetches Target Website )
         │                                               │
         ◄────────────────── Returns DOM & Network Logs ─┘
         │
         ├──► [ Context Isolation Engine ] ──► ( Strips Boilerplate & Identifies Ad Scripts )
         │
         ▼
[ OpenAI API (GPT-4.1 Mini) ]
```

### Architectural Highlights

* **Frontend (Angular 18):** Features a reactive state management system and an interactive code-highlighting canvas for reviewing isolated ad scripts.
* **Backend (ASP.NET Core 8):** Utilizes a scalable Controller-Service pattern. Headless browser operations are managed via a pool of optimized Playwright workers to control memory overhead.
* **Context Isolation Layer:** A custom text-parsing engine that extracts only relevant ad tech blocks (e.g., `googletag.cmd`, `pbjs.que`). This reduces the raw HTML size by up to **90%**, heavily reducing OpenAI token consumption and lowering latency.
* **AI Orchestration:** Implements prompt caching and fine-tuned system instructions to ensure responses strictly target troubleshooting issues like misconfigured ad units, missing key-values, or consent string failures.

---

## 🖥️ Screen Previews

### Main Audit Dashboard
<img width="1174" height="1340" alt="image" src="https://github.com/user-attachments/assets/b0d207f9-278b-4d28-b49a-5cdd2ec5b32b" />
