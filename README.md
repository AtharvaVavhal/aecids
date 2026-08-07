<div align="center">

<img src="./docs/images/vit_white_logo-scaled.jpg" width="360" alt="Vishwakarma Institute of Technology" />

<br /><br />

<img src="./docs/images/aecids-logo.jpg" width="240" alt="AECIDS" />

# AECIDS

### Adaptive Explainable Edge–Cloud Intrusion Detection System using Confidence-Calibrated Intelligent Routing for Resource-Constrained IoT Networks

Engineering Design & Innovation (EDI) • Smart Kopargaon Hackathon • Academic Year 2026–27

<br />

![Python](https://img.shields.io/badge/Python-3.11-080808?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-080808?style=flat-square&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-18-080808?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-080808?style=flat-square&logo=typescript&logoColor=3178C6)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-080808?style=flat-square&logo=tailwindcss&logoColor=38BDF8)
![Docker](https://img.shields.io/badge/Docker-080808?style=flat-square&logo=docker&logoColor=2496ED)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-080808?style=flat-square&logo=postgresql&logoColor=336791)
![SQLite](https://img.shields.io/badge/SQLite-080808?style=flat-square&logo=sqlite&logoColor=003B57)
![LightGBM](https://img.shields.io/badge/LightGBM-080808?style=flat-square)
![XGBoost](https://img.shields.io/badge/XGBoost-080808?style=flat-square)
![TreeSHAP](https://img.shields.io/badge/TreeSHAP-080808?style=flat-square)
![ONNX Runtime](https://img.shields.io/badge/ONNX_Runtime-080808?style=flat-square)
![Raspberry Pi](https://img.shields.io/badge/Raspberry_Pi-080808?style=flat-square&logo=raspberrypi&logoColor=A22846)
![EDI Project](https://img.shields.io/badge/EDI_Project-080808?style=flat-square)
![Active Development](https://img.shields.io/badge/Status-Active_Development-080808?style=flat-square)

<br />

[Overview](#about-the-project) •
[Architecture](#system-architecture) •
[Quick Start](#installation--quick-start) •
[API](#api-reference) •
[Roadmap](#roadmap--future-scope)

</div>

---

# Project Status

> [!IMPORTANT]
> **AECIDS is currently under active engineering development.**
>
> - ✅ Research completed
> - ✅ System architecture completed
> - ✅ Engineering methodology completed
> - ✅ Software Design Specification (SDS) completed
> - 🚧 Backend implementation in progress
> - 🚧 Edge inference agent in progress
> - 🚧 Security Operations Center (SOC) dashboard in progress
> - ⏳ Experimental evaluation pending hardware validation

```text
Research & Literature Review        ████████████████████ 100%
System Architecture                 ████████████████████ 100%
Methodology                         ████████████████████ 100%
Software Design Specification       ████████████████████ 100%
Backend Services                    ████████████░░░░░░░  In Progress
Edge Runtime                        █████████░░░░░░░░░░  In Progress
SOC Dashboard                       ██████████░░░░░░░░░  In Progress
Experimental Evaluation             ░░░░░░░░░░░░░░░░░░░  Pending
```

---

# Project Team

| Name | Role | Academic Affiliation |
|------|------|----------------------|
| **Atharva Vavhal** | Team Leader | Vishwakarma Institute of Technology, Pune |
| **Vedika Mehta** | Team Member | Vishwakarma Institute of Technology, Pune |
| **Swapnil Pawar** | Team Member | Vishwakarma Institute of Technology, Pune |
| **Janhavi Waychal** | Team Member | Vishwakarma Institute of Technology, Pune |

**Department:** Computer Engineering (Software Engineering)

**Course:** Engineering Design & Innovation (EDI)

**Academic Year:** 2026–27

---

# Table of Contents

- About the Project
- Problem Statement
- Solution Overview
- Research Objectives
- Novel Contributions
- Key Features
- System Architecture
- Technology Stack
- Engineering Design Approach
- Research Methodology
- Mathematical Formulation
- Datasets
- Evaluation Metrics
- Repository Structure
- Installation
- API Reference
- UI Screenshots
- Roadmap
- Contributing
- License
- Contact

---

# About the Project

AECIDS is an adaptive hybrid intrusion detection framework designed for resource-constrained IoT deployments where traditional edge-only and cloud-only security architectures exhibit complementary limitations.

The system combines lightweight edge inference with confidence-aware cloud escalation, enabling efficient processing of routine traffic while preserving analytical capacity for ambiguous, previously unseen, or potentially polymorphic attacks.

Rather than treating edge and cloud as independent components, AECIDS models them as cooperative inference layers connected through a confidence-calibrated routing mechanism and an explainability-driven feedback loop.

---

# Problem Statement

Modern IoT environments face two competing constraints.

| Edge-only IDS | Cloud-only IDS |
|---------------|----------------|
| Limited computational capacity | WAN dependency |
| Reduced capability against zero-day attacks | Increased inference latency |
| Restricted model complexity | High bandwidth utilization |
| Limited adaptability | Increased operational cost |

AECIDS addresses these limitations through a hierarchical Edge–Cloud architecture that dynamically selects the most appropriate inference layer based on calibrated prediction confidence.

---

# Solution Overview

The system consists of four tightly integrated layers.

| Layer | Purpose |
|--------|----------|
| Edge Intelligence | Real-time lightweight inference |
| Confidence Calibration | Reliable uncertainty estimation |
| Cloud Intelligence | High-capacity secondary analysis |
| Explainable Adaptation Engine | Continuous optimization of routing threshold |

---

# Research Objectives

- Design an adaptive Edge–Cloud intrusion detection architecture.
- Reduce unnecessary cloud inference through confidence-calibrated routing.
- Preserve low latency for routine traffic.
- Improve handling of uncertain and zero-day attack patterns.
- Generate explainable security decisions using TreeSHAP.
- Continuously optimize routing behaviour through feature importance drift analysis.

---

# Novel Contributions

| Contribution | Description |
|--------------|-------------|
| Confidence-Calibrated Routing | Dynamic routing based on calibrated prediction confidence |
| Explainable Adaptation Engine | TreeSHAP-driven adaptive threshold optimization |
| Hybrid Inference Pipeline | Lightweight edge inference with cloud escalation |
| Resource-Constrained Deployment | Designed for Raspberry Pi and industrial gateways |
| Closed-Loop Learning | Explainability continuously improves routing behaviour |

---

# Key Features

| Feature | Description |
|----------|-------------|
| Edge Inference | ONNX-quantized LightGBM model |
| Cloud Analysis | High-capacity XGBoost ensemble |
| Confidence Calibration | Temperature Scaling + Platt Calibration |
| Explainability | Exact TreeSHAP feature attribution |
| Edge Storage | SQLite offline queue and audit logs |
| Cloud Storage | PostgreSQL security data lake |
| Communication | MQTT and WebSockets |
| Backend | FastAPI asynchronous services |
| Dashboard | React + TypeScript + TailwindCSS SOC UI |
| Deployment | Docker containers |

---

# System Architecture

## End-to-End Architecture

```mermaid
graph TD

A[IoT Devices]

A --> B[Edge Gateway]

B --> C[ONNX Runtime]

C --> D[LightGBM Edge Model]

D --> E[Confidence Calibration]

E -->|P(y|x) ≥ τ| F[Local Decision]

E -->|P(y|x) < τ| G[Secure MQTT/WebSocket]

G --> H[FastAPI Backend]

H --> I[XGBoost Ensemble]

I --> J[TreeSHAP]

J --> K[Adaptive Threshold Controller]

K --> E

H --> L[PostgreSQL]

B --> M[SQLite]
```

---

## Intelligent Routing State Machine

```mermaid
stateDiagram-v2

[*] --> EdgeInference

EdgeInference --> ConfidenceCalibration

ConfidenceCalibration --> LocalDecision : P(y|x) ≥ τ

ConfidenceCalibration --> CloudRouting : P(y|x) < τ

CloudRouting --> CloudInference

CloudInference --> Explainability

Explainability --> ThresholdUpdate

ThresholdUpdate --> EdgeInference

LocalDecision --> [*]
```

---

## Edge–Cloud Sequence Workflow

```mermaid
sequenceDiagram

participant Device
participant Edge
participant Calibration
participant Cloud
participant Explainability

Device->>Edge: Network Flow

Edge->>Calibration: Prediction

alt Confidence ≥ τ
Calibration-->>Edge: Local Decision
Edge-->>Device: Classification
else Confidence < τ
Calibration->>Cloud: Secure Transfer
Cloud->>Cloud: XGBoost Inference
Cloud->>Explainability: TreeSHAP
Explainability-->>Cloud: Feature Attribution
Cloud-->>Edge: Updated Threshold
Cloud-->>Device: Classification
end
```

---

## Deployment Topology

```mermaid
graph LR

Devices --> Gateway

Gateway --> EdgeModel

Gateway --> SQLite

Gateway --> MQTT

MQTT --> FastAPI

FastAPI --> PostgreSQL

FastAPI --> SOC

SOC --> Analyst
```

---

# Technology Stack

## Machine Learning

| Component | Technology |
|------------|------------|
| Edge Model | LightGBM |
| Cloud Model | XGBoost |
| Explainability | TreeSHAP |
| Runtime | ONNX Runtime |

---

## Backend

| Component | Technology |
|------------|------------|
| API | FastAPI |
| Language | Python |
| Async Runtime | Uvicorn |
| Communication | MQTT / WebSockets |

---

## Frontend

| Component | Technology |
|------------|------------|
| Framework | React 18 |
| Language | TypeScript |
| Styling | TailwindCSS |

---

## Databases

| Purpose | Technology |
|----------|------------|
| Edge Queue | SQLite |
| Cloud Storage | PostgreSQL 16+ |

---

## Deployment

| Component | Technology |
|-----------|------------|
| Containers | Docker |
| Edge Hardware | Raspberry Pi (ARM64) |
| Gateway | Industrial Edge Gateway |

---

# Engineering Design Approach

> [!IMPORTANT]
> The architectural separation between edge inference and cloud inference is a fundamental design invariant.

### Level 0

- ONNX Runtime
- Quantized LightGBM
- Memory budget below 45 MB
- Target latency below 2.0 ms

### Level 1

- FastAPI
- XGBoost Ensemble
- Explainability Engine
- Adaptive threshold optimization

### Design Invariants

- Edge inference always executes first.
- Cloud inference executes only for low-confidence samples.
- Every cloud prediction produces TreeSHAP explanations.
- Threshold optimization is explainability driven.
- Edge and cloud communicate only through secure channels.

---

# Research Methodology

The routing mechanism is governed by calibrated confidence estimation.

## Temperature Scaling

\[
P_i=\frac{\exp(z_i/T)}
{\sum_j \exp(z_j/T)}
\]

where

- \(z_i\) denotes model logits
- \(T\) is the learned temperature parameter

---

## Adaptive Routing Threshold

\[
Route(x)=
\begin{cases}
Edge, & P(y|x)\ge \tau\\
Cloud, & P(y|x)<\tau
\end{cases}
\]

where

\[
\tau=f(\Delta SHAP)
\]

---

## TreeSHAP

For each prediction,

\[
f(x)=\phi_0+\sum_{i=1}^{M}\phi_i
\]

where

- \(\phi_i\) denotes the contribution of feature \(i\)
- \(\phi_0\) is the expected prediction

---

# Datasets & Evaluation Metrics

## Datasets

| Dataset | Status |
|----------|--------|
| Dataset Selection | In Progress |
| Training Dataset | [To be documented] |
| Validation Dataset | [To be documented] |
| Test Dataset | [To be documented] |

---

## Evaluation Metrics

| Metric | Result |
|---------|--------|
| Accuracy | [To be evaluated] |
| Precision | [To be evaluated] |
| Recall | [To be evaluated] |
| F1 Score | [To be evaluated] |
| ROC-AUC | [To be evaluated] |
| Edge Latency | [To be evaluated] |
| Cloud Latency | [To be evaluated] |
| Memory Usage | [To be evaluated] |
| Energy Consumption | [To be evaluated] |

> [!NOTE]
> Performance metrics will be published after hardware-in-the-loop evaluation and experimental validation.

---

# Repository Structure

```text
AECIDS
│
├── backend/
├── edge-agent/
├── frontend/
├── models/
├── datasets/
├── docs/
│   ├── images/
│   ├── architecture/
│   └── research/
├── scripts/
├── docker/
├── tests/
├── docker-compose.yml
├── requirements.txt
└── README.md
```

---

## Repository Layout

```mermaid
graph TD

Root

Root --> Backend

Root --> Edge

Root --> Frontend

Root --> Models

Root --> Datasets

Root --> Docs

Root --> Docker

Root --> Tests
```

---

# Installation & Quick Start

## Clone

```bash
git clone https://github.com/<username>/AECIDS.git

cd AECIDS
```

---

## Docker Compose

```bash
docker compose up --build
```

---

## Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Edge Agent

```bash
cd edge-agent

python main.py
```

---

# API Reference

## REST Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /health | Service health |
| POST | /predict | Edge prediction |
| POST | /cloud/predict | Cloud inference |
| GET | /metrics | Runtime metrics |
| GET | /threshold | Current routing threshold |

---

## WebSocket

| Endpoint | Purpose |
|-----------|---------|
| /ws/events | Live SOC events |
| /ws/alerts | Security alerts |
| /ws/status | Gateway status |

---

# UI Screenshots

| Security Operations Center | Edge Monitoring |
|----------------------------|-----------------|
| `docs/images/soc-dashboard.png` | `docs/images/edge-dashboard.png` |

| Explainability | Threat Timeline |
|----------------|-----------------|
| `docs/images/shap-analysis.png` | `docs/images/threat-timeline.png` |

---

# Roadmap & Future Scope

| Phase | Status |
|---------|--------|
| Research & Architecture | ✅ Complete |
| SDS Documentation | ✅ Complete |
| Backend Services | 🚧 In Progress |
| Edge Runtime | 🚧 In Progress |
| SOC Dashboard | 🚧 In Progress |
| Experimental Evaluation | ⏳ Planned |
| Hardware Validation | ⏳ Planned |
| Research Publication | ⏳ Planned |

---

# Contributing

Contributions are welcome.

Please open an issue before submitting significant architectural or implementation changes.

---

# License

This project is distributed under the **MIT License**.

See the `LICENSE` file for additional information.

---

# Contact

**Project**

AECIDS — Adaptive Explainable Edge–Cloud Intrusion Detection System

**Institution**

Vishwakarma Institute of Technology (VIT), Pune

Department of Computer Engineering (Software Engineering)

---

<div align="center">

---

**Vishwakarma Institute of Technology (VIT), Pune • Department of Computer Engineering • Made with ❤️ in Pune, India**

</div>
