<div align="center">

<img src="https://www.vishwakarma-group.com/images/logos/VIT-logo.png" width="320" alt="Vishwakarma Institute of Technology, Pune — NAAC A++"/>

<br/>

<img src="https://i.ibb.co/0RR94pCK/Whats-App-Image-2026-08-08-at-00-13-15.jpg" width="100" alt="AECIDS"/>

# AECIDS

### Adaptive Explainable Edge–Cloud Intrusion Detection System

**Confidence-calibrated intelligent routing for resource-constrained IoT networks**

<br/>

<sub>Engineering Design &amp; Innovation (EDI) Project&nbsp; · &nbsp;Department of Computer Engineering (Software Engineering)&nbsp; · &nbsp;2026–27</sub>

<br/><br/>

<!-- Tech badges — color-coded by layer -->
![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009485?style=for-the-badge&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-149ECA?style=for-the-badge&logo=react&logoColor=white)
![ONNX](https://img.shields.io/badge/ONNX_Runtime-6E4AFF?style=for-the-badge&logo=onnx&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-1D63ED?style=for-the-badge&logo=docker&logoColor=white)

<!-- Status badges -->
![License](https://img.shields.io/badge/License-MIT-6B7280?style=flat-square)
![Status](https://img.shields.io/badge/Status-Design_%26_Specification_Stage-F59E0B?style=flat-square)
![PRs](https://img.shields.io/badge/PRs-Welcome-22C55E?style=flat-square)

<br/>

<p>
<a href="#overview"><b>Overview</b></a> &nbsp;&nbsp;•&nbsp;&nbsp;
<a href="#architecture"><b>Architecture</b></a> &nbsp;&nbsp;•&nbsp;&nbsp;
<a href="#system-workflow"><b>Workflow</b></a> &nbsp;&nbsp;•&nbsp;&nbsp;
<a href="#engineering-principles"><b>Principles</b></a> &nbsp;&nbsp;•&nbsp;&nbsp;
<a href="#research-methodology"><b>Methodology</b></a> &nbsp;&nbsp;•&nbsp;&nbsp;
<a href="#installation"><b>Installation</b></a> &nbsp;&nbsp;•&nbsp;&nbsp;
<a href="#api-reference"><b>API</b></a> &nbsp;&nbsp;•&nbsp;&nbsp;
<a href="#security"><b>Security</b></a> &nbsp;&nbsp;•&nbsp;&nbsp;
<a href="#monitoring"><b>Monitoring</b></a> &nbsp;&nbsp;•&nbsp;&nbsp;
<a href="#roadmap"><b>Roadmap</b></a>
</p>

</div>

<br/>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.gif" width="100%" height="4px"/>

<br/>

## Overview

AECIDS is a research-driven hybrid intrusion detection framework built for resource-constrained IoT environments.

It combines lightweight edge inference, confidence-calibrated routing, cloud-assisted deep analysis, and explainable machine learning into a single cooperative architecture — rather than treating edge and cloud as isolated systems, AECIDS lets them adapt to uncertainty together, in real time.

<br/>

### Project Status &amp; Progress

> [!IMPORTANT]
> This project is at the **design and specification stage**. Architecture, research methodology, and the technical stack are frozen. No implementation code exists in the repository yet — statuses below reflect only what has actually been built, not what is planned.

<table>
<tr><td width="34%"><b>Module</b></td><td width="16%"><b>Status</b></td><td><b>Notes</b></td></tr>
<tr><td>Literature Review</td><td>⬜ Not Started</td><td>No document in repo yet</td></tr>
<tr><td>System Architecture</td><td>✅ Complete</td><td>Three-tier Edge/Cloud/Dashboard architecture frozen and diagrammed</td></tr>
<tr><td>Research Methodology</td><td>✅ Complete</td><td>11-step workflow, calibration math, routing rule, TreeSHAP formulation frozen</td></tr>
<tr><td>Software Design Spec (SDS)</td><td>⚠ Partially Implemented</td><td>Inputs exist (architecture, workflow, stack); no standalone SDS document yet</td></tr>
<tr><td>Backend API</td><td>⬜ Not Started</td><td>No <code>backend/</code> code</td></tr>
<tr><td>Authentication</td><td>⬜ Not Started</td><td>No auth code</td></tr>
<tr><td>Database</td><td>⬜ Not Started</td><td>Schema named in docs; no migrations or DB code</td></tr>
<tr><td>Edge Runtime</td><td>⬜ Not Started</td><td>No <code>edge-agent/</code> code</td></tr>
<tr><td>Feature Extraction</td><td>⬜ Not Started</td><td>No code</td></tr>
<tr><td>Edge AI Model</td><td>⬜ Not Started</td><td>Model choice specified (LightGBM + ONNX); untrained, unimplemented</td></tr>
<tr><td>Confidence Calibration</td><td>⬜ Not Started</td><td>Method specified (Temperature Scaling + ECE); no code</td></tr>
<tr><td>Intelligent Routing</td><td>⬜ Not Started</td><td>Rule specified; no code</td></tr>
<tr><td>Cloud AI Model</td><td>⬜ Not Started</td><td>Model choice specified (XGBoost); untrained, unimplemented</td></tr>
<tr><td>TreeSHAP Explainability</td><td>⬜ Not Started</td><td>No code</td></tr>
<tr><td>Adaptation Engine</td><td>⬜ Not Started</td><td>Logic specified conceptually; no code</td></tr>
<tr><td>REST API</td><td>⬜ Not Started</td><td>Endpoints listed in docs; no routes implemented</td></tr>
<tr><td>Dashboard UI</td><td>⬜ Not Started</td><td>No <code>frontend/</code> code</td></tr>
<tr><td>Deployment</td><td>⬜ Not Started</td><td>Topology specified; no Dockerfiles or compose file</td></tr>
<tr><td>Docker</td><td>⬜ Not Started</td><td>No <code>docker/</code> directory or <code>docker-compose.yml</code></td></tr>
<tr><td>Testing</td><td>⬜ Not Started</td><td>No <code>tests/</code> directory or test code</td></tr>
<tr><td>Documentation</td><td>🟡 In Progress</td><td>README covers architecture, workflow, stack, and security; SDS/SRS/API docs still separate work</td></tr>
<tr><td>Experimental Evaluation</td><td>⬜ Not Started</td><td>Blocked until edge and cloud models exist</td></tr>
</table>

<br/>

### Team

<div align="center">

| | | | |
|:---:|:---:|:---:|:---:|
| 👤 | 👤 | 👤 | 👤 |
| **Atharva Vavhal** | **Vedika Mehta** | **Swapnil Pawar** | **Janhavi Waychal** |
| `Team Leader` | `Team Member` | `Team Member` | `Team Member` |

</div>

<div align="center">
<sub>

**Institution** Vishwakarma Institute of Technology, Pune &nbsp;·&nbsp; **Department** Computer Engineering (Software Engineering) &nbsp;·&nbsp; **Course** Engineering Design &amp; Innovation &nbsp;·&nbsp; **Year** 2026–27

</sub>
</div>

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## Problem Statement

Intrusion detection systems today are forced into one of two compromises.

<table>
<tr>
<td width="50%" valign="top">

#### 🔹 Edge-only

Extremely low latency, but constrained by memory, compute, and model complexity — weak against sophisticated, polymorphic, or previously unseen attacks.

</td>
<td width="50%" valign="top">

#### 🔹 Cloud-only

Far greater analytical capacity, but every flow must cross the network first — adding latency, WAN load, infrastructure cost, and a dependency on connectivity.

</td>
</tr>
</table>

> **The engineering challenge** is a system that delivers low edge latency, efficient cloud utilization, adaptive decision-making, explainable predictions, and deployability on constrained IoT gateways — simultaneously, not as a trade-off.

<br/>

---

<br/>

## Solution Overview

AECIDS introduces a hierarchical Edge–Cloud inference pipeline governed by confidence-calibrated routing. Every flow is first analyzed locally by a lightweight model. Its calibrated confidence score decides whether the prediction is trustworthy enough to act on immediately, or uncertain enough to escalate for deeper cloud analysis.

> Only uncertain traffic ever leaves the device — bandwidth and cloud cost scale with genuine ambiguity, not with total traffic volume.

<br/>

<table>
<tr><td width="26%">🧠&nbsp; <b>Edge Intelligence</b></td><td>Real-time lightweight intrusion detection</td></tr>
<tr><td>🎯&nbsp; <b>Confidence Calibration</b></td><td>Reliability estimation of every edge prediction</td></tr>
<tr><td>☁️&nbsp; <b>Cloud Intelligence</b></td><td>High-capacity secondary inference for uncertain flows</td></tr>
<tr><td>🔍&nbsp; <b>Explainable Adaptation</b></td><td>Dynamic optimization of the routing threshold</td></tr>
</table>

```mermaid
graph LR
    A[Traffic] --> B[Packet Capture]
    B --> C[Feature Extraction]
    C --> D[Edge LightGBM]
    D --> E[Temperature Scaling]
    E --> F{Confidence Router}
    F -->|"≥ τ"| G[Local Decision]
    F -->|"< τ"| H[Cloud XGBoost]
    H --> I[TreeSHAP]
    I --> J[Adaptation Engine]
    J --> K[Update τ]
    K -.-> F
    G --> L[Dashboard]
    J --> L
```

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## Research Objectives

<table>
<tr><td width="28%">🟢&nbsp; <b>Edge efficiency</b></td><td>Low-latency detection on ARM64 gateways using lightweight models</td></tr>
<tr><td>🟢&nbsp; <b>Confidence-aware routing</b></td><td>Escalate to cloud only when calibrated confidence is insufficient</td></tr>
<tr><td>🟢&nbsp; <b>Explainable security</b></td><td>Interpretable predictions via exact TreeSHAP attribution</td></tr>
<tr><td>🟢&nbsp; <b>Adaptive intelligence</b></td><td>Routing behavior improves continuously through explanation-driven feedback</td></tr>
<tr><td>🟢&nbsp; <b>Operational resilience</b></td><td>Reliable operation through intermittent cloud connectivity</td></tr>
</table>

<br/>

### Novel Contributions

Unlike conventional IDS pipelines that statically partition work between edge and cloud, AECIDS closes the loop — explainability output directly shapes future routing decisions.

| Contribution | What it does |
|---|---|
| 🧩 **Confidence-Calibrated Routing** | Routes each flow based on calibrated posterior confidence, not raw probability |
| 🧠 **Explainable Adaptation Engine** | TreeSHAP attributions continuously retune the routing threshold |
| ⚙️ **Hybrid Inference Architecture** | Lightweight edge model paired with a high-capacity cloud ensemble |
| 📟 **Edge-Oriented Deployment** | Purpose-built for Raspberry Pi and industrial ARM64 gateways |
| 🔁 **Explainability Feedback Loop** | Feature-attribution drift becomes an optimization signal, not just a report |

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## Architecture

AECIDS follows a **three-tier Edge–Cloud architecture** — Edge Layer, Cloud Layer, and Dashboard/UI Layer — with the Edge and Cloud communicating securely over REST APIs (HTTPS).

```mermaid
graph TD
    A[Network Traffic] --> B["Packet Capture<br/>PyShark / Scapy"]
    B --> C["Feature Extraction<br/>NumPy · Pandas"]
    C --> D["Edge AI Inference<br/>LightGBM via ONNX Runtime"]
    D --> E["Confidence Calibration<br/>Temperature Scaling · ECE"]
    E -->|"confidence ≥ τ"| F["Local Decision"]
    E -->|"confidence < τ"| G["HTTPS REST API"]
    F --> H[(SQLite)]
    F --> M[Dashboard]
    G --> I["Cloud AI<br/>XGBoost"]
    I --> J["Explainable AI<br/>TreeSHAP"]
    J --> K["Adaptation Engine<br/>threshold τ recalculation"]
    K -->|"Threshold Sync"| E
    I --> L[(PostgreSQL)]
    J --> L
    K --> L
    L -->|"REST + WebSocket"| M
```

<br/>

<details open>
<summary><b>Routing state machine</b></summary>
<br/>

```mermaid
stateDiagram-v2
    [*] --> PacketCapture
    PacketCapture --> FeatureExtraction
    FeatureExtraction --> EdgeInference: LightGBM (ONNX)
    EdgeInference --> ConfidenceCalibration: Temperature Scaling + ECE
    ConfidenceCalibration --> LocalDecision: confidence ≥ τ
    ConfidenceCalibration --> CloudEscalation: confidence < τ
    LocalDecision --> Dashboard
    CloudEscalation --> CloudInference: XGBoost
    CloudInference --> Explainability: TreeSHAP
    Explainability --> AdaptationEngine
    AdaptationEngine --> ThresholdSync: new τ
    ThresholdSync --> ConfidenceCalibration
    AdaptationEngine --> Dashboard
    Dashboard --> [*]
```

</details>

<details>
<summary><b>Request sequence</b></summary>
<br/>

```mermaid
sequenceDiagram
    participant Net as Traffic
    participant Cap as Packet Capture
    participant Feat as Feature Extraction
    participant Edge as Edge AI (LightGBM)
    participant Cal as Calibration
    participant Cloud as Cloud AI (XGBoost)
    participant SHAP as TreeSHAP
    participant Adapt as Adaptation Engine
    participant Dash as Dashboard

    Net->>Cap: Live packets / PCAP
    Cap->>Feat: Raw packets
    Feat->>Edge: Feature vector
    Edge->>Cal: Prediction + probability
    Cal->>Cal: Temperature scaling → calibrated confidence
    alt confidence ≥ τ
        Cal-->>Dash: Local decision (alert, low latency)
    else confidence < τ
        Cal->>Cloud: Feature vector (HTTPS REST API)
        Cloud->>Cloud: XGBoost inference
        Cloud->>SHAP: Prediction
        SHAP-->>Cloud: SHAP values
        Cloud->>Adapt: Prediction history + SHAP drift
        Adapt->>Adapt: Recalculate threshold τ
        Adapt-->>Cal: Updated τ (threshold sync)
        Cloud-->>Dash: Prediction + explanation (REST/WebSocket)
    end
```

</details>

<details>
<summary><b>Deployment topology</b></summary>
<br/>

```mermaid
graph TD
    subgraph Edge["Edge Deployment"]
        E1[Docker Container] --> E2["Raspberry Pi 5"]
        E2 --> E3[Fast Local Inference]
        E3 --> DB1[(SQLite)]
    end
    subgraph Cloud["Cloud Deployment"]
        C1["Ubuntu Server"] --> C2["Docker Compose"]
        C2 --> C3[FastAPI]
        C3 --> C4[(PostgreSQL)]
        C3 --> C5[TreeSHAP]
        C3 --> C6[XGBoost]
    end
    subgraph Dashboard["Dashboard Deployment"]
        D1[React] --> D2[Nginx]
        D2 --> D3[Browser]
    end
    E3 -->|"HTTPS REST API"| C3
    C3 -->|"REST API + WebSocket"| D1
    D1 -->|"REST API"| C3
```

</details>

<br/>

### Core components

<table>
<tr><td width="22%">🧠&nbsp; <b>Edge Intelligence</b></td><td>

ONNX-quantized LightGBM on the Raspberry Pi 5 (ARM64) target hardware. Target latency **&lt; 2 ms**, memory budget **&lt; 45 MB**, persisted locally through SQLite.

</td></tr>
<tr><td>🎯&nbsp; <b>Confidence Calibration</b></td><td>

Post-hoc calibration — Temperature Scaling and Platt Scaling — converts raw model output into a reliable posterior before any routing decision is made.

</td></tr>
<tr><td>☁️&nbsp; <b>Cloud Intelligence</b></td><td>

FastAPI-fronted XGBoost ensemble handles the flows the edge model is uncertain about, communicating over secure REST APIs and persisting to PostgreSQL.

</td></tr>
<tr><td>🔍&nbsp; <b>Explainable Adaptation</b></td><td>

Every cloud prediction produces exact TreeSHAP attributions. These aren't just displayed — feature-importance drift feeds directly back into the routing threshold controller, closing the loop.

</td></tr>
</table>

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## System Workflow

The complete flow from raw traffic to a dashboard alert, in eleven steps. Steps 1–5 always run on the edge device; steps 6B–10 run only for escalated flows.

<table>
<tr><td width="6%" align="center"><b>1</b></td><td width="26%">🛰️&nbsp; <b>Network Traffic Collection</b></td><td>

`PyShark` / `Scapy` capture live packets on the Raspberry Pi 5 (or accept PCAP files during testing) and forward raw packets to Feature Extraction.

</td></tr>
<tr><td align="center"><b>2</b></td><td>🧮&nbsp; <b>Feature Extraction</b></td><td>

Parses packets, extracts IDS features, cleans data and handles missing values, and converts the result into an ML feature vector (`NumPy` / `Pandas`).

</td></tr>
<tr><td align="center"><b>3</b></td><td>🧠&nbsp; <b>Edge AI Inference</b></td><td>

`LightGBM` running under `ONNX Runtime` performs local intrusion detection, predicting an attack class and a raw prediction probability.

</td></tr>
<tr><td align="center"><b>4</b></td><td>🎯&nbsp; <b>Confidence Calibration</b></td><td>

Temperature Scaling (validated with ECE) converts the raw probability into a calibrated, trustworthy confidence score.

</td></tr>
<tr><td align="center"><b>5</b></td><td>🔀&nbsp; <b>Intelligent Routing</b></td><td>

The Confidence-Calibrated Intelligent Router compares calibrated confidence against threshold `τ`: **≥ τ** → accept the edge prediction; **&lt; τ** → forward to the cloud.

</td></tr>
<tr><td align="center"><b>6A</b></td><td>⚡&nbsp; <b>Local Decision</b></td><td>

Runs entirely on the edge: generates the alert, saves the prediction locally, updates the dashboard — no cloud communication. Very low latency, low bandwidth, low cost.

</td></tr>
<tr><td align="center"><b>6B</b></td><td>☁️&nbsp; <b>Cloud Escalation</b></td><td>

The feature vector is sent to the Cloud AI Engine over HTTPS REST API for high-accuracy inference.

</td></tr>
<tr><td align="center"><b>7</b></td><td>🌲&nbsp; <b>Cloud AI</b></td><td>

`XGBoost` predicts the attack class, produces a confidence score, and stores the prediction in PostgreSQL.

</td></tr>
<tr><td align="center"><b>8</b></td><td>🔍&nbsp; <b>Explainable AI</b></td><td>

The `TreeSHAP` engine explains the cloud prediction: calculates feature importance, generates SHAP values, and stores the explanation.

</td></tr>
<tr><td align="center"><b>9</b></td><td>🔁&nbsp; <b>Adaptation Engine</b></td><td>

Monitors prediction history, TreeSHAP drift, disagreement rate, and historical performance to detect model drift and calculate an updated routing threshold `τ`.

</td></tr>
<tr><td align="center"><b>10</b></td><td>📡&nbsp; <b>Threshold Synchronization</b></td><td>

The updated `τ` is sent securely from cloud to edge; the edge device replaces its previous routing threshold.

</td></tr>
<tr><td align="center"><b>11</b></td><td>📊&nbsp; <b>Dashboard</b></td><td>

The web dashboard (`React` · `Tailwind CSS` · `Recharts`) displays live alerts, attack types, edge predictions, cloud predictions, SHAP graphs, threshold history, model confidence, system health, and device status.

</td></tr>
</table>

<br/>

### Overall pipeline

```mermaid
graph LR
    A[Traffic] --> B[Packet Capture]
    B --> C[Feature Extraction]
    C --> D[Edge LightGBM]
    D --> E[Temperature Scaling]
    E --> F{Confidence Router}
    F -->|"YES: ≥ τ"| G[Local Detection]
    F -->|"NO: < τ"| H[Cloud XGBoost]
    H --> I[TreeSHAP]
    I --> J[Adaptation Engine]
    J --> K[Update τ]
    G --> L[Dashboard]
    K --> L
```

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## Engineering Principles

AECIDS is built on five non-negotiable architectural principles.

<table>
<tr><td width="26%">1️⃣&nbsp; <b>Edge First</b></td><td>Every packet is evaluated locally before any cloud escalation is considered.</td></tr>
<tr><td>2️⃣&nbsp; <b>Confidence Before Complexity</b></td><td>Cloud inference triggers only when calibrated confidence falls below the adaptive threshold.</td></tr>
<tr><td>3️⃣&nbsp; <b>Explain Every Decision</b></td><td>Every cloud prediction carries an exact TreeSHAP feature attribution.</td></tr>
<tr><td>4️⃣&nbsp; <b>Adaptive Intelligence</b></td><td>Explainability output continuously improves routing behavior through closed-loop optimization.</td></tr>
<tr><td>5️⃣&nbsp; <b>Offline Resilience</b></td><td>Edge gateways keep operating through intermittent or total cloud outages via local inference and SQLite persistence.</td></tr>
</table>

> [!NOTE]
> Explainability is treated as an active optimization signal — not a passive visualization layer.

<br/>

<details>
<summary><b>📐 Architectural invariants</b></summary>
<br/>

- Every network flow is evaluated at the edge before cloud escalation
- Routing decisions depend exclusively on calibrated confidence
- Cloud inference is asynchronous
- TreeSHAP explanations accompany every cloud prediction
- Threshold optimization never bypasses confidence calibration
- SQLite guarantees offline persistence at the edge
- PostgreSQL serves as the centralized analytical data store
- Edge–cloud communication is encrypted end-to-end

</details>

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## Research Methodology

Every flow moves through four sequential stages — computational cost scales with uncertainty, not with traffic volume.

<table>
<tr><td width="6%" align="center"><b>1</b></td><td width="34%"><b>Edge Inference</b></td><td>lightweight local prediction</td></tr>
<tr><td align="center"><b>2</b></td><td><b>Confidence Calibration</b></td><td>reliability estimate of that prediction</td></tr>
<tr><td align="center"><b>3</b></td><td><b>Cloud Escalation</b></td><td>deep inference for low-confidence flows only</td></tr>
<tr><td align="center"><b>4</b></td><td><b>Explainable Feedback</b></td><td>TreeSHAP output retunes the routing threshold</td></tr>
</table>

<br/>

### Mathematical formulation

**Temperature scaling** — calibrates raw logits `z = (z₁, …, z_K)` into a reliable posterior:

$$P_i = \frac{\exp(z_i / T)}{\sum_{j=1}^{K} \exp(z_j / T)}$$

where `T > 0` is the learned temperature and `K` is the number of classes.

**Expected Calibration Error (ECE)** — measures how well confidence tracks accuracy, binning predictions into `M` bins:

$$ECE = \sum_{m=1}^{M} \frac{|B_m|}{n} \left| \text{acc}(B_m) - \text{conf}(B_m) \right|$$

where `B_m` is the set of predictions falling in bin `m`, `n` is the total number of predictions, and `acc`/`conf` are the bin's empirical accuracy and mean confidence. Lower ECE means the calibrated confidence score can be trusted as a routing signal.

**Adaptive routing function** — decides where each flow is handled:

$$Route(x) = \begin{cases} \text{Edge}, & P(y \mid x) \ge \tau \\ \text{Cloud}, & P(y \mid x) < \tau \end{cases}$$

**Threshold optimization** — the threshold itself is not static:

$$\tau = f(\Delta SHAP)$$

where `ΔSHAP` is the observed feature-attribution drift over time.

**TreeSHAP** — for every cloud prediction:

$$f(x) = \phi_0 + \sum_{i=1}^{M} \phi_i$$

where `φ₀` is the expected prediction and `φᵢ` is feature `i`'s contribution.

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## Technology Stack

> [!NOTE]
> This stack is **frozen** for the duration of the project. All architecture diagrams, SDS/SRS documents, implementation plans, and deployment guides are written against it; it is not changed without an explicit decision to revise it.

AECIDS separates infrastructure into independent layers to simplify deployment, scaling, and maintenance.

<table>
<tr><td width="20%" valign="top">💻&nbsp; <b>Languages</b></td><td valign="top">

`Python 3.11+` · `TypeScript` · `SQL` · `Bash` · `YAML` · `Markdown`

</td></tr>
<tr><td valign="top">🤖&nbsp; <b>AI / Machine Learning</b></td><td valign="top">

`LightGBM` (edge model) · `XGBoost` (cloud model) · `TreeSHAP` (explainability) · `Scikit-learn` (feature scaling) · `Joblib` (serialization) · `ONNX Runtime` (edge deployment)

</td></tr>
<tr><td valign="top">📡&nbsp; <b>Edge Layer</b></td><td valign="top">

`Python` · `LightGBM` · `ONNX Runtime` · `NumPy` · `Pandas` · `Scikit-learn` · `Joblib` · `SQLite` · `Pydantic` · `Requests` · `PyShark` · `Scapy`

</td></tr>
<tr><td valign="top">☁️&nbsp; <b>Cloud Layer</b></td><td valign="top">

`FastAPI` · `Uvicorn` · `Gunicorn` · `XGBoost` · `SHAP (TreeSHAP)` · `Scikit-learn` · `NumPy` · `Pandas` · `Joblib` · `Pydantic`

</td></tr>
<tr><td valign="top">🖥️&nbsp; <b>Frontend</b></td><td valign="top">

`React` · `TypeScript` · `Vite` · `Tailwind CSS` · `React Router` · `Axios` · `Recharts` · `Lucide Icons`

</td></tr>
<tr><td valign="top">🗄️&nbsp; <b>Database</b></td><td valign="top">

`SQLite` (edge) · `PostgreSQL` (cloud)

</td></tr>
<tr><td valign="top">🔌&nbsp; <b>API Communication</b></td><td valign="top">

`REST API` · `JSON` · `HTTPS` · `WebSocket` (real-time dashboard updates) · `Multipart Upload` (where required)

</td></tr>
<tr><td valign="top">🔐&nbsp; <b>Security</b></td><td valign="top">

`JWT Authentication` · `Password Hashing` · `HTTPS` · `API Key Protection` · `Input Validation` · `RBAC` · `CORS Configuration`

</td></tr>
<tr><td valign="top">📶&nbsp; <b>Networking</b></td><td valign="top">

`IPv4` · `TCP` · `UDP` · `HTTP` · `HTTPS` · `Ethernet` · `Wi-Fi`

</td></tr>
<tr><td valign="top">🐳&nbsp; <b>Containerization &amp; Deployment</b></td><td valign="top">

`Docker` · `Docker Compose` · `Nginx` · `Ubuntu Server` (cloud) · `Linux Service` (edge)

</td></tr>
<tr><td valign="top">📟&nbsp; <b>Edge Hardware</b></td><td valign="top">

`Raspberry Pi 5` (target) · Linux laptop / mini PC / industrial gateway (alternative) — quad-core CPU, 4 GB RAM, 32 GB storage, Wi-Fi + Ethernet minimum

</td></tr>
<tr><td valign="top">🛠️&nbsp; <b>Development &amp; Testing</b></td><td valign="top">

`VS Code` · `Git` · `GitHub` (Issues, Projects, Actions) · `Docker Desktop` · `Postman` · `Swagger UI` · `Pytest`

</td></tr>
<tr><td valign="top">📄&nbsp; <b>Documentation</b></td><td valign="top">

`Markdown` · `Swagger / OpenAPI` · `Mermaid` · `PlantUML` (optional) · IEEE documentation format

</td></tr>
</table>

<br/>

### Engineering decisions

| Decision | Rationale |
|---|---|
| Edge-first inference | Minimize latency and bandwidth consumption |
| Confidence-calibrated routing | Avoid unnecessary cloud inference |
| ONNX Runtime | Portable inference across embedded hardware |
| SQLite at the edge | Offline persistence without operational overhead |
| PostgreSQL in the cloud | Scalable analytical storage |
| FastAPI | High-performance asynchronous API layer |
| TreeSHAP | Exact explainability for tree-based ensembles |
| REST over HTTPS for Edge↔Cloud | Simple, secure, firewall-friendly transport for escalated flows |
| WebSocket for the dashboard only | Real-time SOC updates without adding a broker to the Edge↔Cloud path |
| Raspberry Pi 5 as target hardware | Realistic, affordable stand-in for an industrial IoT gateway |

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## Repository Structure

> [!NOTE]
> This is the **planned** layout matching the frozen architecture — not all directories exist in the repository yet (see [Project Status & Progress](#project-status--progress)).

```text
AECIDS
├── backend/            FastAPI services — routers, calibration, explainability, database
├── edge-agent/          Edge runtime — inference, calibration, REST client, local storage
├── frontend/            React + TypeScript + Vite SOC dashboard
├── models/              Trained LightGBM / XGBoost artifacts
├── datasets/            Training, validation, and test data
├── docs/                Architecture notes, diagrams, research material
├── docker/              Container definitions
├── tests/                Test suites
├── scripts/             Utility and automation scripts
├── docker-compose.yml
├── requirements.txt
└── README.md
```

<table>
<tr><td width="18%"><code>backend/</code></td><td>Asynchronous FastAPI services: API routers, confidence calibration, TreeSHAP explainability, and the PostgreSQL data layer.</td></tr>
<tr><td><code>edge-agent/</code></td><td>The Raspberry Pi 5 runtime — packet capture, ONNX inference, calibration, REST client, SQLite-backed offline queue, and local monitoring.</td></tr>
<tr><td><code>frontend/</code></td><td>The SOC dashboard — components, pages, hooks, and services for the React/TypeScript/Vite UI.</td></tr>
<tr><td><code>models/</code></td><td>Serialized edge and cloud model artifacts.</td></tr>
<tr><td><code>datasets/</code></td><td>Data used for training and evaluation.</td></tr>
<tr><td><code>docs/</code></td><td>Architecture references, research notes, and image assets.</td></tr>
</table>

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## Database &amp; Storage

<table>
<tr><td width="20%" valign="top">🗄️&nbsp; <b>Edge — SQLite</b></td><td valign="top">

Local Logs · Local Predictions · Cached Alerts · Offline Queue

</td></tr>
<tr><td valign="top">🐘&nbsp; <b>Cloud — PostgreSQL</b></td><td valign="top">

Users · Alerts · Predictions · SHAP Values · Threshold History · Audit Logs · System Metrics · Model Metadata

</td></tr>
</table>

<br/>

### API flow

| Path | Transport | Auth |
|---|---|---|
| Edge → Cloud | HTTPS REST API | JWT |
| Cloud → Dashboard | REST API + WebSocket | JWT |
| Dashboard → Cloud | REST API | JWT |

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## Installation

<br/>

### Requirements

| Software | Version |
|---|---|
| Python | 3.11+ |
| Node.js | 20+ |
| Docker &amp; Docker Compose | Latest |
| PostgreSQL | 16+ |

<br/>

### Quick start

```bash
git clone https://github.com/<username>/AECIDS.git
cd AECIDS
docker compose up --build
```

<br/>

<details open>
<summary><b>Run components individually</b></summary>
<br/>

**Backend**

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend**

```bash
cd frontend
npm install
npm run dev
```

**Edge runtime**

```bash
cd edge-agent
python main.py
```

</details>

<br/>

### Configuration

The application is configured entirely through environment variables.

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `SQLITE_PATH` | Edge database path |
| `CLOUD_API_URL` | Cloud REST API base URL (edge → cloud escalation) |
| `SECRET_KEY` | Application secret (JWT signing) |
| `JWT_ALGORITHM` | JWT signing algorithm |
| `CORS_ORIGINS` | Allowed dashboard origins |
| `MODEL_PATH` | ONNX model location |
| `THRESHOLD` | Initial routing threshold |

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## API Reference

> [!NOTE]
> The REST API follows the OpenAPI specification and is fully documented through FastAPI's autogenerated interactive docs.

<br/>

### REST

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/health` | Service health |
| `POST` | `/auth/login` | JWT authentication |
| `POST` | `/predict` | Edge prediction |
| `POST` | `/cloud/predict` | Cloud inference (REST, HTTPS) |
| `GET` | `/metrics` | Runtime metrics |
| `GET` | `/threshold` | Current routing threshold |
| `POST` | `/threshold` | Update routing threshold |

<br/>

### WebSocket

| Endpoint | Description |
|---|---|
| `/ws/events` | Live security events |
| `/ws/alerts` | Alert streaming |
| `/ws/status` | Gateway health |
| `/ws/logs` | Runtime logs |

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## Security

Access to the API and dashboard is governed by the following controls:

<table>
<tr><td width="26%">🔑&nbsp; <b>JWT Authentication</b></td><td>Stateless token-based auth for all protected endpoints</td></tr>
<tr><td>🔒&nbsp; <b>Password Hashing</b></td><td>Credentials are never stored in plaintext</td></tr>
<tr><td>🌐&nbsp; <b>HTTPS</b></td><td>All Edge↔Cloud and Dashboard↔Cloud traffic is encrypted in transit</td></tr>
<tr><td>🗝️&nbsp; <b>API Key Protection</b></td><td>Service-to-service calls require a valid API key</td></tr>
<tr><td>✅&nbsp; <b>Input Validation</b></td><td>Pydantic models validate every request payload</td></tr>
<tr><td>👥&nbsp; <b>Role-Based Access Control</b></td><td>Dashboard permissions scale with the analyst's role</td></tr>
<tr><td>🚧&nbsp; <b>CORS Configuration</b></td><td>Explicit allow-list restricts which origins can call the API</td></tr>
</table>

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## Monitoring

Both edge and cloud layers expose their own health and performance signals, which feed the SOC dashboard's Overview and Threshold Monitor views.

<table>
<tr><td width="26%">📝&nbsp; <b>Logging</b></td><td>Structured logs at edge and cloud, correlated by request ID</td></tr>
<tr><td>❤️&nbsp; <b>Health Checks</b></td><td>Liveness/readiness signal from every gateway and the cloud API</td></tr>
<tr><td>📈&nbsp; <b>System Metrics</b></td><td>CPU usage, memory usage, and inference time, sampled continuously</td></tr>
<tr><td>🎯&nbsp; <b>Model Performance Metrics</b></td><td>Ongoing accuracy/latency tracking for both the edge and cloud models</td></tr>
<tr><td>🎚️&nbsp; <b>Threshold History</b></td><td>Full record of how the adaptive routing threshold has moved over time</td></tr>
</table>

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## Security Operations Center

The SOC dashboard centralizes monitoring of edge gateways, cloud inference, routing behavior, and explainability results — designed for operational clarity over visual complexity.

<table>
<tr><td width="22%">🚨&nbsp; <b>Live Alerts</b></td><td>Real-time intrusion events as they're generated</td></tr>
<tr><td>🏷️&nbsp; <b>Attack Types</b></td><td>Breakdown of detected attack classes</td></tr>
<tr><td>📡&nbsp; <b>Edge Predictions</b></td><td>Local decisions made on-device</td></tr>
<tr><td>☁️&nbsp; <b>Cloud Predictions</b></td><td>Escalated flows resolved by the cloud ensemble</td></tr>
<tr><td>🔍&nbsp; <b>SHAP Graphs</b></td><td>TreeSHAP feature attribution per prediction</td></tr>
<tr><td>🎚️&nbsp; <b>Threshold History</b></td><td>How the adaptive routing threshold τ has evolved</td></tr>
<tr><td>🎯&nbsp; <b>Model Confidence</b></td><td>Calibrated confidence distribution over time</td></tr>
<tr><td>❤️&nbsp; <b>System Health</b></td><td>CPU, memory, and inference-time telemetry</td></tr>
<tr><td>📟&nbsp; <b>Device Status</b></td><td>Connected gateway monitoring</td></tr>
</table>

<br/>

<div align="center">

<sub>Dashboard previews — populated as the SOC UI is completed</sub>

<br/><br/>

<table>
<tr>
<td align="center" width="33%"><sub><code>docs/images/soc-dashboard.png</code></sub><br/><sub>SOC Overview</sub></td>
<td align="center" width="33%"><sub><code>docs/images/threat-feed.png</code></sub><br/><sub>Live Threat Feed</sub></td>
<td align="center" width="33%"><sub><code>docs/images/shap-dashboard.png</code></sub><br/><sub>Explainability View</sub></td>
</tr>
</table>

</div>

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## Datasets &amp; Evaluation

> [!NOTE]
> Quantitative benchmark results will be published only after experimental validation. No empirical values are reported until they are reproducible.

<br/>

### Evaluation objectives

| Objective | Description |
|---|---|
| Edge performance | Latency and memory utilization of the embedded inference engine |
| Cloud performance | Inference throughput and request scalability |
| Routing efficiency | Share of flows resolved locally vs. escalated to the cloud |
| Calibration quality | Reliability of confidence estimates after post-hoc calibration |
| Explainability | Consistency and usefulness of TreeSHAP attributions |
| Adaptation | Threshold evolution under changing traffic distributions |

<br/>

```mermaid
graph LR
    A[Dataset] --> B[Feature Extraction]
    B --> C[Edge Inference]
    C --> D[Calibration]
    D --> E[Routing]
    E --> F[Local Evaluation]
    E --> G[Cloud Evaluation]
    G --> H[TreeSHAP]
    H --> I[Threshold Optimization]
    I --> J[Final Metrics]
```

<br/>

### Benchmark categories

| Category | Metrics |
|---|---|
| Classification | Accuracy, Precision, Recall, F1, ROC-AUC |
| Edge runtime | Latency, memory usage, CPU utilization |
| Cloud runtime | Throughput, response time |
| Communication | Escalation rate, network overhead |
| Explainability | SHAP stability, feature drift |
| Adaptation | Threshold stability, routing efficiency |

<sub>All experiments — edge and cloud benchmarking, hardware validation, routing and explainability analysis, comparative study — are currently **planned**, pending hardware-in-the-loop evaluation.</sub>

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## Design Constraints

The project is deliberately shaped by practical deployment limits.

| Constraint | Response |
|---|---|
| Limited RAM | Quantized edge model |
| Limited CPU | Lightweight inference pipeline |
| Network instability | Offline SQLite queue |
| Cloud cost | Confidence-aware routing |
| Explainability requirement | TreeSHAP integration |
| Scalability | Asynchronous FastAPI backend |

<br/>

---

<br/>

## Roadmap

| Milestone | Status |
|---|---|
| Research completion | ✅ Complete |
| Architecture finalization | ✅ Complete |
| Software design specification | ⚠ Partially Implemented |
| Backend services | ⬜ Not Started |
| Edge runtime | ⬜ Not Started |
| SOC dashboard | ⬜ Not Started |
| Experimental validation | ⏳ Planned |
| Research publication | ⏳ Planned |

<br/>

### Future scope

<table>
<tr><td width="50%" valign="top">

- Federated learning across distributed edge gateways
- Online continual learning for evolving threat landscapes
- Multi-edge collaborative inference
- Container orchestration with Kubernetes

</td><td width="50%" valign="top">

- Additional explainability techniques
- Hardware acceleration — NVIDIA Jetson, Coral TPU
- Integration with enterprise SIEM platforms
- Large-scale industrial IoT deployments

</td></tr>
</table>

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## Testing

| Layer | Approach |
|---|---|
| Unit &amp; integration | `Pytest` across backend and edge-agent |
| API contract | `Postman` collections + `Swagger`/OpenAPI schema checks |
| End-to-end | Manual integration testing across the edge → cloud → dashboard path |

<div align="right"><sub><a href="#aecids">⬆ back to top</a></sub></div>

<br/>

---

<br/>

## Contributing

Contributions are welcome. The project follows a **feature-branch workflow** on GitHub — branch per feature, pull request into `main`, tracked against GitHub Issues and Milestones.

Before opening a pull request:

- Confirm the change aligns with the architectural principles above
- Confirm the change respects the [frozen technology stack](#technology-stack) — no new dependency without prior sign-off
- Update documentation alongside implementation
- Include appropriate tests for new functionality (`Pytest`)
- Preserve backward compatibility where possible

> [!TIP]
> For significant architectural proposals, open an issue first.

<br/>

---

<br/>

## License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for details.

<br/>

## Citation

A formal BibTeX citation will be added once the accompanying research paper is publicly available.

<br/>

---

<br/>

<div align="center">

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.gif" width="100%" height="4px"/>

<br/><br/>

**AECIDS** — Adaptive Explainable Edge–Cloud Intrusion Detection System

Engineering Design &amp; Innovation · Department of Computer Engineering (Software Engineering)
Vishwakarma Institute of Technology, Pune · 2026–27

<sub>© 2026 AECIDS Project Team</sub>

</div>
