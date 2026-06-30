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

### How it works:
1. **Crawl & Extract:** Playwright deep-scans a target URL.
2. **Isolate Context:** The backend isolates GPT configurations, Prebid snippets, and CMP hooks.
3. **Analyze & Query:** Developers chat with an AI tuned strictly to the isolated code footprint.

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

## 🖥️ Screen Previews

### Main Audit Dashboard
![Dashboard](<img width="1559" height="1881" alt="image" src="https://github.com/user-attachments/assets/ce45354f-1b61-4c92-b8f9-d95000a82e2f" />)

### Interactive AI Debugging Canvas
![AI Assistant](https://github.com/user-attachments/assets/b4dc8b4c-ec34-420f-95ab-7c379ef7382c)

---

## 🏗️ System Architecture
