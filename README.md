<div align="center">

# 🛡️ AECIDS

### Adaptive Explainable Edge–Cloud Intrusion Detection System

**Confidence-Calibrated Intelligent Routing for Resource-Constrained IoT Networks**

*Detect intrusions at the edge. Explain decisions in the cloud. Adapt in real time.*

<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.10%2B-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-Dashboard-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![Build Status](https://img.shields.io/github/actions/workflow/status/your-org/aecids/ci.yml?branch=main&label=build)](https://github.com/your-org/aecids/actions)
[![Stars](https://img.shields.io/github/stars/your-org/aecids?style=social)](https://github.com/your-org/aecids/stargazers)
[![Issues](https://img.shields.io/github/issues/your-org/aecids)](https://github.com/your-org/aecids/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

<br/>

<img src="docs/assets/banner-placeholder.png" alt="AECIDS Banner" width="100%"/>

<sub>📌 Replace with your project banner — recommended size <code>1600×400</code></sub>

</div>

<br/>

> [!NOTE]
> AECIDS is an active research project exploring **confidence-calibrated edge–cloud routing** for intrusion detection in IoT environments. Interfaces, model formats, and APIs are evolving — see the [Roadmap](#-roadmap) for current status.

<br/>

---

## 📖 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Key Features](#-key-features)
- [🧠 System Architecture](#-system-architecture)
- [🛠️ Technology Stack](#️-technology-stack)
- [📂 Repository Structure](#-repository-structure)
- [🔬 Research Contributions](#-research-contributions)
- [🗺️ Roadmap](#️-roadmap)
- [⚡ Installation](#-installation)
- [🚀 Usage](#-usage)
- [📡 API Reference](#-api-reference)
- [🖼️ Screenshots & Demo](#️-screenshots--demo)
- [📊 Performance](#-performance)
- [📄 Research Paper](#-research-paper)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [📬 Contact](#-contact)

---

## 🎯 Overview

**AECIDS** rethinks how intrusion detection should work on resource-constrained IoT networks. Instead of blindly forwarding every packet to the cloud — burning bandwidth, battery, and latency budget — AECIDS makes a **local decision first** and only escalates when it's genuinely unsure.

```
📦 Traffic → 🔍 Edge Model → 🎚️ Confidence Check → ⚡ Local Decision  OR  ☁️ Cloud Escalation
```

**How it works, in a nutshell:**

1. 🔹 A **lightweight ML model** on the edge device (e.g. Raspberry Pi) scores incoming traffic in real time.
2. 🔹 A **confidence calibration layer** quantifies how trustworthy that prediction actually is.
3. 🔹 An **Intelligent Router** compares confidence against an adaptive threshold `τ` (tau):
   - **High confidence** → decision is finalized **on the edge**. ⚡ Fast, cheap, private.
   - **Low confidence** → sample is escalated to the **cloud** for deeper analysis. ☁️ Accurate, explainable.
4. 🔹 The cloud model's decisions are explained via **TreeSHAP**, producing feature-level attributions.
5. 🔹 An **Adaptation Engine** consumes those explanations and telemetry to **dynamically re-tune τ**, continuously balancing accuracy, latency, and cloud load.

> [!TIP]
> Think of `τ` as a living dial — AECIDS doesn't just route on a fixed rule, it *learns where to draw the line* between "the edge can handle this" and "send it upstairs."

---

## ✨ Key Features

| | Feature | Description |
|---|---|---|
| ⚙️ | **Edge AI** | Lightweight, quantized models built for microcontrollers and SBCs |
| ☁️ | **Cloud AI** | High-capacity models for deep, high-confidence inference |
| 🎯 | **Confidence Calibration** | Statistically calibrated confidence scores, not raw softmax guesses |
| 🔀 | **Intelligent Routing** | Confidence-driven edge/cloud decision routing |
| 🔄 | **Adaptive Threshold (τ)** | Self-tuning routing threshold based on live feedback |
| 🔍 | **Explainable AI (TreeSHAP)** | Transparent, feature-level explanations for every cloud decision |
| 🚀 | **FastAPI Backend** | High-performance async API layer |
| 📊 | **React Dashboard** | Real-time visualization of alerts, routing, and SHAP explanations |
| 🐳 | **Docker Deployment** | One-command reproducible deployment |
| 🍓 | **Raspberry Pi Support** | Validated on real constrained edge hardware |
| 🗄️ | **PostgreSQL** | Durable, queryable storage for events and telemetry |
| 📶 | **MQTT** | Lightweight publish/subscribe transport for IoT telemetry |
| 🔌 | **WebSocket** | Live streaming updates to the dashboard |
| 🧪 | **Research-Grade Evaluation** | Rigorous benchmarking pipeline for reproducible results |

---

## 🧠 System Architecture

### 🔗 Logical Pipeline

```mermaid
flowchart TD
    A[📦 Network Traffic] --> B[🔍 Edge Inference Engine]
    B --> C[🎯 Confidence Calibration]
    C --> D{🔀 Intelligent Router<br/>confidence vs τ}
    D -->|High Confidence| E[⚡ Local Decision<br/>Edge Device]
    D -->|Low Confidence| F[☁️ Cloud Inference Engine]
    F --> G[🔍 TreeSHAP Explainer]
    G --> H[🔄 Adaptation Engine<br/>updates τ]
    H --> D
    E --> I[📊 Dashboard]
    F --> I
    G --> I
    H --> I

    style A fill:#1f2937,stroke:#6366f1,color:#fff
    style B fill:#0f766e,stroke:#14b8a6,color:#fff
    style C fill:#0f766e,stroke:#14b8a6,color:#fff
    style D fill:#7c2d12,stroke:#f97316,color:#fff
    style E fill:#065f46,stroke:#10b981,color:#fff
    style F fill:#1e3a8a,stroke:#3b82f6,color:#fff
    style G fill:#1e3a8a,stroke:#3b82f6,color:#fff
    style H fill:#581c87,stroke:#a855f7,color:#fff
    style I fill:#374151,stroke:#9ca3af,color:#fff
```

### 🏗️ Deployment Architecture

```mermaid
graph LR
    subgraph EDGE["🍓 Edge Layer"]
        direction TB
        E1[IoT Sensors]
        E2[Edge Agent<br/>ONNX Runtime]
        E3[Local SQLite Cache]
        E1 --> E2 --> E3
    end

    subgraph TRANSPORT["📶 Transport"]
        M1[(MQTT Broker)]
    end

    subgraph CLOUD["☁️ Cloud Layer"]
        direction TB
        C1[FastAPI Gateway]
        C2[Cloud Inference<br/>LightGBM / XGBoost]
        C3[TreeSHAP Service]
        C4[Adaptation Engine]
        C5[(PostgreSQL)]
        C1 --> C2 --> C3 --> C4
        C2 --> C5
        C4 --> C5
    end

    subgraph CLIENT["🖥️ Presentation Layer"]
        D1[React Dashboard]
        D2[WebSocket Stream]
    end

    E2 -- "high-confidence samples" --> E3
    E2 -- "low-confidence samples" --> M1
    M1 --> C1
    C4 -- "updated τ" --> M1
    M1 -- "τ sync" --> E2
    C5 --> D2 --> D1

    style EDGE fill:#0f172a,stroke:#14b8a6,color:#fff
    style TRANSPORT fill:#1e1b4b,stroke:#818cf8,color:#fff
    style CLOUD fill:#1e3a8a,stroke:#3b82f6,color:#fff
    style CLIENT fill:#3f2d1c,stroke:#f59e0b,color:#fff
```

<details>
<summary>📐 <strong>View high-resolution architecture diagram (placeholder)</strong></summary>

<br/>

<img src="docs/assets/architecture-diagram-placeholder.png" alt="AECIDS Detailed Architecture" width="100%"/>

<sub>📌 Replace with detailed system diagram — export from Figma/Excalidraw at 2x resolution</sub>

</details>

---

## 🛠️ Technology Stack

<div align="center">

### Machine Learning & Explainability

| Technology | Purpose |
|---|---|
| ![Python](https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white) | Core language for ML pipeline & backend |
| ![LightGBM](https://img.shields.io/badge/-LightGBM-02569B?logo=leaflet&logoColor=white) | Gradient-boosted edge/cloud classifiers |
| ![XGBoost](https://img.shields.io/badge/-XGBoost-EC1C24?logo=xgboost&logoColor=white) | High-capacity cloud-side classifier |
| ![ONNX](https://img.shields.io/badge/-ONNX%20Runtime-005CED?logo=onnx&logoColor=white) | Optimized edge inference runtime |
| ![Scikit-learn](https://img.shields.io/badge/-Scikit--learn-F7931E?logo=scikitlearn&logoColor=white) | Calibration, preprocessing & metrics |
| ![TreeSHAP](https://img.shields.io/badge/-TreeSHAP-6366F1?logo=airplayvideo&logoColor=white) | Feature-level explainability engine |

### Backend & Data

| Technology | Purpose |
|---|---|
| ![FastAPI](https://img.shields.io/badge/-FastAPI-009688?logo=fastapi&logoColor=white) | Async REST/WebSocket API layer |
| ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white) | Cloud-side persistent storage |
| ![SQLite](https://img.shields.io/badge/-SQLite-003B57?logo=sqlite&logoColor=white) | Edge-side local caching |
| ![MQTT](https://img.shields.io/badge/-MQTT-660066?logo=mqtt&logoColor=white) | Lightweight IoT messaging transport |

### Frontend

| Technology | Purpose |
|---|---|
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black) | Real-time monitoring dashboard |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) | Type-safe frontend development |
| ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white) | Utility-first UI styling |

### DevOps

| Technology | Purpose |
|---|---|
| ![Docker](https://img.shields.io/badge/-Docker-2496ED?logo=docker&logoColor=white) | Containerized edge & cloud services |
| ![Docker Compose](https://img.shields.io/badge/-Docker%20Compose-2496ED?logo=docker&logoColor=white) | Multi-service orchestration |
| ![GitHub Actions](https://img.shields.io/badge/-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white) | CI/CD automation |

</div>

---

## 📂 Repository Structure

```
AECIDS/
├── 📁 edge/                        # Edge-side agent & inference
│   ├── 📁 models/                  # Quantized ONNX edge models
│   ├── 📁 calibration/             # Confidence calibration logic
│   ├── 📁 router/                  # Intelligent routing client
│   └── 📄 agent.py                 # Main edge agent entrypoint
│
├── 📁 cloud/                       # Cloud-side services
│   ├── 📁 api/                     # FastAPI application
│   │   ├── 📁 routes/              # REST & WebSocket endpoints
│   │   ├── 📁 services/            # Business logic
│   │   └── 📄 main.py              # API entrypoint
│   ├── 📁 models/                  # LightGBM / XGBoost cloud models
│   ├── 📁 explainability/          # TreeSHAP integration
│   └── 📁 adaptation/              # Adaptive threshold (τ) engine
│
├── 📁 dashboard/                   # React + TypeScript frontend
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   ├── 📁 pages/
│   │   └── 📁 hooks/
│   └── 📄 package.json
│
├── 📁 datasets/                    # Dataset loaders & preprocessing
├── 📁 evaluation/                  # Benchmarking & research metrics
├── 📁 docs/                        # Documentation & assets
│   └── 📁 assets/                  # Images, diagrams, banners
├── 📁 tests/                       # Unit & integration tests
├── 📁 docker/                      # Dockerfiles & compose configs
├── 📄 docker-compose.yml
├── 📄 requirements.txt
├── 📄 CONTRIBUTING.md
├── 📄 LICENSE
└── 📄 README.md
```

---

## 🔬 Research Contributions

<details open>
<summary><strong>1️⃣ Confidence-Calibrated Routing</strong></summary>
<br/>

Traditional edge–cloud IDS designs route traffic using static rules or raw model confidence — both are unreliable, since uncalibrated confidence scores are often overconfident. AECIDS applies **post-hoc calibration** (e.g., temperature scaling / isotonic regression) so that a "90% confident" prediction is *actually* right ~90% of the time, making routing decisions statistically meaningful rather than heuristic guesses.

</details>

<details>
<summary><strong>2️⃣ Adaptive Threshold Optimization</strong></summary>
<br/>

The routing threshold `τ` is not fixed. AECIDS' **Adaptation Engine** continuously observes cloud outcomes, SHAP-derived error patterns, and system load, then re-optimizes `τ` to balance three competing objectives:

- 🎯 **Detection accuracy**
- ⚡ **Edge latency**
- ☁️ **Cloud resource consumption**

</details>

<details>
<summary><strong>3️⃣ Explainable AI for Security Operators</strong></summary>
<br/>

Every cloud-side decision is paired with a **TreeSHAP explanation**, giving security analysts feature-level insight into *why* traffic was flagged — critical for trust, auditability, and regulatory compliance in production IDS deployments.

</details>

<details>
<summary><strong>4️⃣ Edge–Cloud Computing for IoT</strong></summary>
<br/>

AECIDS demonstrates a practical **split-inference paradigm** for constrained IoT fleets, minimizing bandwidth and latency while preserving the detection power of large cloud models — validated on real edge hardware (Raspberry Pi class devices).

</details>

<details>
<summary><strong>5️⃣ IoT Security at Scale</strong></summary>
<br/>

By combining lightweight local inference with selective cloud escalation, AECIDS offers a **deployable, scalable blueprint** for securing large, heterogeneous IoT networks without overwhelming central infrastructure.

</details>

---

## 🗺️ Roadmap

- [x] 🔬 Research & literature review
- [x] 🏗️ System architecture design
- [x] 📐 Methodology definition
- [ ] ⚙️ Edge implementation
- [ ] ☁️ Cloud implementation
- [ ] 📊 Dashboard development
- [ ] 🧪 Evaluation & benchmarking
- [ ] 📄 Publication

> [!NOTE]
> Track detailed progress on the [Project Board](https://github.com/your-org/aecids/projects) and [open issues](https://github.com/your-org/aecids/issues).

---

## ⚡ Installation

> [!WARNING]
> AECIDS is under active research development. APIs and model formats may change without notice — pin a specific release tag for reproducible experiments.

### Prerequisites

- Python 3.10+
- Node.js 18+
- Docker & Docker Compose
- (Optional) Raspberry Pi 4/5 for edge deployment

### 1. Clone the repository

```bash
git clone https://github.com/your-org/aecids.git
cd aecids
```

### 2. Set up the backend

```bash
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 3. Set up the dashboard

```bash
cd dashboard
npm install
```

### 4. Configure environment variables

```bash
cp .env.example .env
# Edit .env with your PostgreSQL, MQTT broker, and API settings
```

### 5. Launch with Docker Compose

```bash
docker compose up --build
```

---

## 🚀 Usage

### Start the cloud API

```bash
uvicorn cloud.api.main:app --host 0.0.0.0 --port 8000 --reload
```

### Start the edge agent

```bash
python edge/agent.py --config edge/config.yaml
```

### Launch the dashboard

```bash
cd dashboard
npm run dev
```

### Run the full evaluation suite

```bash
python evaluation/run_benchmarks.py --config evaluation/config.yaml
```

---

## 📡 API Reference

> [!NOTE]
> Full interactive API docs are auto-generated by FastAPI and served at `/docs` (Swagger UI) and `/redoc`.

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/v1/inference/edge` | Submit edge-side sample metadata |
| `POST` | `/api/v1/inference/cloud` | Trigger cloud inference for a routed sample |
| `GET` | `/api/v1/explain/{sample_id}` | Retrieve TreeSHAP explanation for a decision |
| `GET` | `/api/v1/threshold` | Get current adaptive routing threshold (τ) |
| `POST` | `/api/v1/threshold/update` | Trigger manual threshold recalculation |
| `GET` | `/api/v1/alerts` | List recent intrusion alerts |
| `GET` | `/api/v1/metrics` | Retrieve system performance metrics |
| `WS` | `/ws/live` | Real-time event stream for the dashboard |

---

## 🖼️ Screenshots & Demo

<div align="center">

### 🎬 Live Demo

<img src="docs/assets/demo-placeholder.gif" alt="AECIDS Demo" width="90%"/>

<sub>📌 Replace with a recorded GIF/MP4 of the dashboard in action</sub>

<br/><br/>

| Dashboard Overview | Alert Feed |
|---|---|
| <img src="docs/assets/screenshot-dashboard.png" width="100%"/> | <img src="docs/assets/screenshot-alerts.png" width="100%"/> |

| SHAP Explanation Graph | Threshold History |
|---|---|
| <img src="docs/assets/screenshot-shap.png" width="100%"/> | <img src="docs/assets/screenshot-threshold.png" width="100%"/> |

| System Health Monitor | Architecture View |
|---|---|
| <img src="docs/assets/screenshot-health.png" width="100%"/> | <img src="docs/assets/screenshot-architecture.png" width="100%"/> |

</div>

---

## 📊 Performance

> [!NOTE]
> Benchmark figures below are placeholders — populate with results from `evaluation/run_benchmarks.py`.

### Detection Performance

| Model | Accuracy | Precision | Recall | F1-Score | AUC-ROC |
|---|---|---|---|---|---|
| Edge Model (LightGBM) | 0.0% | 0.0% | 0.0% | 0.0% | 0.00 |
| Cloud Model (XGBoost) | 0.0% | 0.0% | 0.0% | 0.0% | 0.00 |
| AECIDS (End-to-End) | 0.0% | 0.0% | 0.0% | 0.0% | 0.00 |

### Efficiency Metrics

| Metric | Edge-Only | Cloud-Only | AECIDS (Adaptive) |
|---|---|---|---|
| Avg. Latency (ms) | — | — | — |
| Cloud Offload Rate (%) | — | — | — |
| Bandwidth Usage (MB/hr) | — | — | — |
| Energy Consumption (J) | — | — | — |

> [!TIP]
> Run `python evaluation/run_benchmarks.py --export markdown` to auto-generate an up-to-date version of these tables.

---

## 📄 Research Paper

<details>
<summary><strong>📌 Problem Statement</strong></summary>
<br/>
IoT networks generate massive traffic volumes that overwhelm cloud-only intrusion detection systems, while edge-only systems lack the model capacity for high-accuracy detection. A gap exists for a system that intelligently balances the two.
</details>

<details>
<summary><strong>🎯 Objectives</strong></summary>
<br/>

- Design a confidence-calibrated routing mechanism between edge and cloud inference
- Develop an adaptive threshold optimization strategy driven by explainability signals
- Validate the system on real constrained IoT hardware
- Provide interpretable, auditable detection decisions via TreeSHAP

</details>

<details>
<summary><strong>💡 Novelty</strong></summary>
<br/>
Unlike prior edge–cloud IDS work that uses static or heuristic routing, AECIDS closes the loop between explainability and routing policy — SHAP-derived insight directly informs how the adaptive threshold evolves over time.
</details>

<details>
<summary><strong>🧪 Methodology</strong></summary>
<br/>
A two-tier inference pipeline is implemented: a lightweight quantized model on the edge and a high-capacity ensemble model in the cloud, connected via a confidence-calibrated router. Threshold adaptation is modeled as a continuous feedback-driven optimization process.
</details>

<details>
<summary><strong>📚 Datasets</strong></summary>
<br/>

- Placeholder — e.g., CICIoT2023, TON_IoT, N-BaIoT, or custom-collected traffic

</details>

<details>
<summary><strong>📏 Evaluation Metrics</strong></summary>
<br/>

- Accuracy, Precision, Recall, F1-Score, AUC-ROC
- Cloud offload rate & bandwidth savings
- Edge inference latency
- Calibration error (ECE)
- SHAP-based explanation fidelity

</details>

---

## 🤝 Contributing

Contributions are what make the open-source community an incredible place to learn, build, and collaborate. Any contributions you make are **greatly appreciated**.

1. 🍴 Fork the project
2. 🌿 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. ✅ Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔁 Open a Pull Request

> [!TIP]
> Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) for our code of conduct, coding standards, and the process for submitting pull requests.

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for full text.

---

## 📬 Contact

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-your--org-181717?logo=github&logoColor=white)](https://github.com/your-org/aecids)
[![Email](https://img.shields.io/badge/Email-contact%40aecids.dev-D14836?logo=gmail&logoColor=white)](mailto:contact@aecids.dev)

</div>

---

<div align="center">

**Built with ❤️ for AI-powered IoT Security**

⭐️ If you find AECIDS useful, consider giving it a star!

</div>
