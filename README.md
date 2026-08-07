<div align="center">

<img src="./docs/images/vit_white_logo-scaled.jpg" width="360" alt="Vishwakarma Institute of Technology"/>

<br><br>

<img src="./docs/images/aecids-logo.jpg" width="220" alt="AECIDS"/>

# AECIDS

### Adaptive Explainable Edge–Cloud Intrusion Detection System using Confidence-Calibrated Intelligent Routing for Resource-Constrained IoT Networks

Research Project • Engineering Design & Innovation (EDI) • Smart Kopargaon Hackathon • Academic Year 2026–27

<br>

![Python](https://img.shields.io/badge/Python-3.11-111111?style=flat-square&logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-111111?style=flat-square&logo=fastapi)
![React](https://img.shields.io/badge/React-18-111111?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-111111?style=flat-square&logo=typescript)
![Docker](https://img.shields.io/badge/Docker-111111?style=flat-square&logo=docker)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-111111?style=flat-square&logo=postgresql)
![SQLite](https://img.shields.io/badge/SQLite-111111?style=flat-square&logo=sqlite)
![ONNX Runtime](https://img.shields.io/badge/ONNX_Runtime-111111?style=flat-square)
![LightGBM](https://img.shields.io/badge/LightGBM-111111?style=flat-square)
![XGBoost](https://img.shields.io/badge/XGBoost-111111?style=flat-square)
![TreeSHAP](https://img.shields.io/badge/TreeSHAP-111111?style=flat-square)
![Raspberry Pi](https://img.shields.io/badge/Raspberry_Pi-111111?style=flat-square&logo=raspberrypi)
![Status](https://img.shields.io/badge/Status-Active_Development-111111?style=flat-square)

<br><br>

<a href="#overview">Overview</a> •
<a href="#architecture">Architecture</a> •
<a href="#engineering-principles">Engineering Principles</a> •
<a href="#installation">Installation</a> •
<a href="#api-reference">API</a> •
<a href="#roadmap">Roadmap</a>

</div>

---

# Overview

AECIDS is a research-driven hybrid intrusion detection framework designed for resource-constrained Internet of Things (IoT) environments.

The project combines lightweight edge inference, confidence-calibrated intelligent routing, cloud-assisted deep analysis, and explainable machine learning into a unified security architecture.

Rather than treating edge and cloud as isolated systems, AECIDS models them as cooperative inference layers capable of dynamically adapting to uncertainty while maintaining low latency and efficient resource utilization.

---

# Project Status

> [!IMPORTANT]
> This repository is under active engineering development.

| Phase | Status |
|---------|--------|
| Literature Survey | Complete |
| System Architecture | Complete |
| Research Methodology | Complete |
| Software Design Specification | Complete |
| Backend Development | In Progress |
| Edge Runtime | In Progress |
| SOC Dashboard | In Progress |
| Experimental Evaluation | Pending |

```
Research & Literature Review        ████████████████████ 100%

System Architecture                 ████████████████████ 100%

Research Methodology                ████████████████████ 100%

Software Design Specification       ████████████████████ 100%

Backend Services                    ████████████░░░░░░░░  In Progress

Edge Runtime                        █████████░░░░░░░░░░░  In Progress

SOC Dashboard                       ██████████░░░░░░░░░░  In Progress

Experimental Validation             ░░░░░░░░░░░░░░░░░░░░  Pending
```

---

# Project Team

| Member | Role |
|---------|------|
| **Atharva Vavhal** | Team Leader |
| **Vedika Mehta** | Team Member |
| **Swapnil Pawar** | Team Member |
| **Janhavi Waychal** | Team Member |

### Academic Information

| Item | Value |
|------|-------|
| Institution | Vishwakarma Institute of Technology (VIT), Pune |
| Department | Computer Engineering (Software Engineering) |
| Course | Engineering Design & Innovation (EDI) |
| Academic Year | 2026–27 |

---

# Table of Contents

- Overview
- Problem Statement
- Solution Overview
- Research Objectives
- Novel Contributions
- System Architecture
- Engineering Principles
- Research Methodology
- Mathematical Formulation
- Technology Stack
- Repository Structure
- Installation
- Deployment
- API Reference
- SOC Dashboard
- Experimental Evaluation
- Roadmap
- Contributing
- License

---

# Problem Statement

Modern intrusion detection systems generally follow one of two architectural paradigms.

## Edge-Only Systems

Edge-native IDS architectures provide extremely low inference latency but remain constrained by computational resources, memory budgets, and model complexity.

These limitations significantly reduce their ability to detect sophisticated, polymorphic, and previously unseen attacks.

---

## Cloud-Only Systems

Cloud-native security pipelines provide substantially greater computational capacity and support larger machine learning models.

However, every network flow must traverse the network before inference can occur, increasing latency, WAN utilization, infrastructure cost, and dependency on stable connectivity.

---

## Engineering Challenge

Design an intrusion detection framework capable of simultaneously providing

- low edge latency,
- efficient cloud utilization,
- adaptive decision making,
- explainable predictions,
- and deployment on resource-constrained IoT gateways.

---

# Solution Overview

AECIDS introduces a hierarchical Edge–Cloud inference pipeline governed by confidence-calibrated intelligent routing.

Instead of forwarding every packet to the cloud, each network flow is first analyzed locally using a lightweight machine learning model.

The calibrated confidence score determines whether the prediction is sufficiently reliable for immediate edge execution or whether the sample should be escalated for deeper cloud analysis.

Only uncertain traffic is transmitted to the cloud, reducing bandwidth utilization while preserving analytical capability for complex attack patterns.

---

## Four-Layer Architecture

| Layer | Responsibility |
|---------|----------------|
| Edge Intelligence | Real-time lightweight intrusion detection |
| Confidence Calibration | Reliability estimation of edge predictions |
| Cloud Intelligence | High-capacity secondary inference |
| Explainable Adaptation Engine | Dynamic optimization of routing threshold |

---

## High-Level Workflow

```mermaid
graph LR

Traffic --> Edge

Edge --> Calibration

Calibration -->|High Confidence| LocalDecision

Calibration -->|Low Confidence| Cloud

Cloud --> Explainability

Explainability --> ThresholdOptimization

ThresholdOptimization --> Edge
```

---

# Why Edge–Cloud?

Traditional IDS architectures force developers to choose between speed and intelligence.

AECIDS removes this trade-off by introducing an adaptive routing mechanism capable of selecting the appropriate computational layer for each individual network flow.

The result is a system that remains lightweight under normal operating conditions while preserving the analytical capability required for uncertain or anomalous traffic.

---

# Design Philosophy

AECIDS is designed around five architectural principles.

## Edge First

Every packet is evaluated locally before cloud escalation.

---

## Confidence Before Complexity

Cloud inference occurs only when prediction confidence falls below the adaptive routing threshold.

---

## Explain Every Decision

Every cloud prediction produces exact TreeSHAP feature attributions.

---

## Adaptive Intelligence

Explainability continuously improves routing behaviour through closed-loop threshold optimization.

---

## Offline Resilience

Edge gateways continue operating during intermittent or complete cloud connectivity loss through local inference and embedded SQLite storage.

---[API](#api-reference) •
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
# Research Objectives

AECIDS investigates how hybrid inference architectures can improve intrusion detection for resource-constrained IoT environments without sacrificing latency, explainability, or deployment feasibility.

The project is guided by the following engineering objectives.

| Objective | Description |
|------------|-------------|
| Edge Efficiency | Perform low-latency intrusion detection on ARM64 edge gateways using lightweight machine learning models. |
| Confidence-Aware Routing | Route only uncertain samples to cloud infrastructure through calibrated confidence estimation. |
| Explainable Security | Produce interpretable predictions using exact TreeSHAP feature attribution. |
| Adaptive Intelligence | Continuously optimize routing behavior through explanation-driven feedback. |
| Operational Resilience | Maintain reliable operation during intermittent cloud connectivity. |

---

# Novel Contributions

Unlike conventional intrusion detection pipelines that statically partition workloads between edge and cloud environments, AECIDS introduces a closed-loop architecture where explainability directly influences future routing decisions.

| Contribution | Description |
|--------------|-------------|
| Confidence-Calibrated Routing | Dynamic routing decisions based on calibrated posterior confidence. |
| Explainable Adaptation Engine | TreeSHAP explanations continuously influence routing threshold optimization. |
| Hybrid Inference Architecture | Lightweight edge inference combined with high-capacity cloud analysis. |
| Edge-Oriented Deployment | Designed specifically for Raspberry Pi and industrial ARM64 gateways. |
| Explainability Feedback Loop | Feature attribution drift becomes an optimization signal rather than a reporting artifact. |

---

<a id="architecture"></a>

# System Architecture

The architecture is organized into four cooperative layers.

Each layer performs a distinct computational responsibility while maintaining strict separation of concerns.

```text
               ┌─────────────────────────────────────┐
               │            IoT Devices              │
               └─────────────────────────────────────┘
                              │
                              ▼
               ┌─────────────────────────────────────┐
               │         Edge Intelligence           │
               └─────────────────────────────────────┘
                              │
                              ▼
               ┌─────────────────────────────────────┐
               │     Confidence Calibration Layer    │
               └─────────────────────────────────────┘
                     │                     │
          High Confidence           Low Confidence
                     │                     │
                     ▼                     ▼
             Local Decision       Cloud Intelligence
                                         │
                                         ▼
                              Explainable Adaptation
                                         │
                                         ▼
                             Dynamic Threshold Update
```

---

## End-to-End Architecture

```mermaid
graph TD

A[IoT Device]

A --> B[Edge Gateway]

B --> C[Packet Preprocessing]

C --> D[ONNX Runtime]

D --> E[Quantized LightGBM]

E --> F[Confidence Calibration]

F -->|P(y│x) ≥ τ| G[Local Decision]

F -->|P(y│x) < τ| H[Secure MQTT / WebSocket]

H --> I[FastAPI Backend]

I --> J[XGBoost Ensemble]

J --> K[TreeSHAP Explainability]

K --> L[Adaptive Threshold Engine]

L --> F

I --> M[(PostgreSQL)]

B --> N[(SQLite)]
```

---

## Layered Architecture

```mermaid
graph LR

subgraph Edge

A[Packet Capture]

B[Feature Engineering]

C[LightGBM]

D[Calibration]

E[SQLite]

end

subgraph Cloud

F[FastAPI]

G[XGBoost]

H[TreeSHAP]

I[Threshold Optimizer]

J[PostgreSQL]

end

A --> B

B --> C

C --> D

D --> F

F --> G

G --> H

H --> I

I --> D

F --> J
```

---

## Intelligent Routing State Machine

```mermaid
stateDiagram-v2

[*] --> PacketReceived

PacketReceived --> EdgeInference

EdgeInference --> ConfidenceCalibration

ConfidenceCalibration --> LocalExecution : Confidence ≥ τ

ConfidenceCalibration --> CloudEscalation : Confidence < τ

CloudEscalation --> CloudInference

CloudInference --> Explainability

Explainability --> ThresholdOptimization

ThresholdOptimization --> EdgeInference

LocalExecution --> [*]
```

---

## Sequence Workflow

```mermaid
sequenceDiagram

participant IoT

participant Edge

participant Calibration

participant Cloud

participant SHAP

IoT->>Edge: Network Flow

Edge->>Edge: Feature Extraction

Edge->>Edge: LightGBM Prediction

Edge->>Calibration: Confidence Score

alt Confidence ≥ τ

Calibration-->>Edge: Local Classification

Edge-->>IoT: Security Decision

else Confidence < τ

Calibration->>Cloud: Secure Transmission

Cloud->>Cloud: XGBoost Inference

Cloud->>SHAP: Feature Attribution

SHAP-->>Cloud: Explanation

Cloud-->>Edge: Updated Threshold

Cloud-->>IoT: Final Decision

end
```

---

## Deployment Topology

```mermaid
graph LR

subgraph Edge Infrastructure

IoT[IoT Devices]

Gateway[Edge Gateway]

SQLite[(SQLite)]

end

subgraph Cloud Infrastructure

API[FastAPI]

ML[XGBoost]

SHAP[TreeSHAP]

DB[(PostgreSQL)]

SOC[SOC Dashboard]

end

IoT --> Gateway

Gateway --> SQLite

Gateway --> API

API --> ML

ML --> SHAP

API --> DB

DB --> SOC
```

---

# Core Components

## Edge Intelligence

The edge runtime performs real-time inference using an ONNX-quantized LightGBM model specifically optimized for resource-constrained ARM64 gateways.

| Property | Value |
|----------|-------|
| Runtime | ONNX Runtime |
| Model | LightGBM |
| Hardware | Raspberry Pi / Industrial Gateway |
| Storage | SQLite |
| Latency Target | < 2 ms |
| Memory Budget | < 45 MB |

---

## Confidence Calibration

Prediction confidence is calibrated before any routing decision is made.

Instead of relying on raw model probabilities, AECIDS applies post-hoc calibration to produce reliable confidence estimates.

Supported calibration methods include:

- Temperature Scaling
- Platt Scaling

Only calibrated confidence values participate in routing decisions.

---

## Cloud Intelligence

Samples that fall below the adaptive confidence threshold are securely transmitted to the cloud for secondary inference.

Cloud infrastructure hosts significantly larger machine learning models that are impractical to execute on embedded hardware.

| Component | Technology |
|-----------|------------|
| Backend | FastAPI |
| Model | XGBoost Ensemble |
| Communication | MQTT / WebSocket |
| Storage | PostgreSQL |

---

## Explainable Adaptation Engine

Every cloud prediction generates exact TreeSHAP feature attributions.

Rather than serving only as post-hoc explanations, these feature importance values become optimization signals for the adaptive routing controller.

The controller continuously monitors feature importance drift and updates the routing threshold accordingly.

This establishes a closed-loop architecture where explainability directly improves future inference decisions.

---

<a id="engineering-principles"></a>

# Engineering Principles

AECIDS is designed around five non-negotiable architectural principles.

| Principle | Description |
|-----------|-------------|
| Edge First | Every packet is evaluated locally before cloud escalation. |
| Confidence Before Complexity | Escalation occurs only when calibrated confidence is insufficient. |
| Explain Every Decision | Cloud predictions always include exact TreeSHAP explanations. |
| Adaptive Intelligence | Routing thresholds evolve using explainability feedback. |
| Offline Resilience | Edge gateways continue operating during cloud outages using SQLite-backed local processing. |

> [!IMPORTANT]
> Explainability is treated as an active optimization signal rather than a passive visualization layer.

---

# Architectural Invariants

The following properties remain invariant throughout the system.

- Every network flow is evaluated at the edge before cloud escalation.
- Routing decisions depend exclusively on calibrated confidence.
- Cloud inference is asynchronous.
- TreeSHAP explanations accompany every cloud prediction.
- Threshold optimization never bypasses confidence calibration.
- SQLite guarantees offline persistence at the edge.
- PostgreSQL serves as the centralized analytical data store.
- Communication between edge and cloud is encrypted.

# Research Objectives

AECIDS investigates how hybrid inference architectures can improve intrusion detection for resource-constrained IoT environments without sacrificing latency, explainability, or deployment feasibility.

The project is guided by the following engineering objectives.

| Objective | Description |
|------------|-------------|
| Edge Efficiency | Perform low-latency intrusion detection on ARM64 edge gateways using lightweight machine learning models. |
| Confidence-Aware Routing | Route only uncertain samples to cloud infrastructure through calibrated confidence estimation. |
| Explainable Security | Produce interpretable predictions using exact TreeSHAP feature attribution. |
| Adaptive Intelligence | Continuously optimize routing behavior through explanation-driven feedback. |
| Operational Resilience | Maintain reliable operation during intermittent cloud connectivity. |

---

# Novel Contributions

Unlike conventional intrusion detection pipelines that statically partition workloads between edge and cloud environments, AECIDS introduces a closed-loop architecture where explainability directly influences future routing decisions.

| Contribution | Description |
|--------------|-------------|
| Confidence-Calibrated Routing | Dynamic routing decisions based on calibrated posterior confidence. |
| Explainable Adaptation Engine | TreeSHAP explanations continuously influence routing threshold optimization. |
| Hybrid Inference Architecture | Lightweight edge inference combined with high-capacity cloud analysis. |
| Edge-Oriented Deployment | Designed specifically for Raspberry Pi and industrial ARM64 gateways. |
| Explainability Feedback Loop | Feature attribution drift becomes an optimization signal rather than a reporting artifact. |

---

<a id="architecture"></a>

# System Architecture

The architecture is organized into four cooperative layers.

Each layer performs a distinct computational responsibility while maintaining strict separation of concerns.

```text
               ┌─────────────────────────────────────┐
               │            IoT Devices              │
               └─────────────────────────────────────┘
                              │
                              ▼
               ┌─────────────────────────────────────┐
               │         Edge Intelligence           │
               └─────────────────────────────────────┘
                              │
                              ▼
               ┌─────────────────────────────────────┐
               │     Confidence Calibration Layer    │
               └─────────────────────────────────────┘
                     │                     │
          High Confidence           Low Confidence
                     │                     │
                     ▼                     ▼
             Local Decision       Cloud Intelligence
                                         │
                                         ▼
                              Explainable Adaptation
                                         │
                                         ▼
                             Dynamic Threshold Update
```

---

## End-to-End Architecture

```mermaid
graph TD

A[IoT Device]

A --> B[Edge Gateway]

B --> C[Packet Preprocessing]

C --> D[ONNX Runtime]

D --> E[Quantized LightGBM]

E --> F[Confidence Calibration]

F -->|P(y│x) ≥ τ| G[Local Decision]

F -->|P(y│x) < τ| H[Secure MQTT / WebSocket]

H --> I[FastAPI Backend]

I --> J[XGBoost Ensemble]

J --> K[TreeSHAP Explainability]

K --> L[Adaptive Threshold Engine]

L --> F

I --> M[(PostgreSQL)]

B --> N[(SQLite)]
```

---

## Layered Architecture

```mermaid
graph LR

subgraph Edge

A[Packet Capture]

B[Feature Engineering]

C[LightGBM]

D[Calibration]

E[SQLite]

end

subgraph Cloud

F[FastAPI]

G[XGBoost]

H[TreeSHAP]

I[Threshold Optimizer]

J[PostgreSQL]

end

A --> B

B --> C

C --> D

D --> F

F --> G

G --> H

H --> I

I --> D

F --> J
```

---

## Intelligent Routing State Machine

```mermaid
stateDiagram-v2

[*] --> PacketReceived

PacketReceived --> EdgeInference

EdgeInference --> ConfidenceCalibration

ConfidenceCalibration --> LocalExecution : Confidence ≥ τ

ConfidenceCalibration --> CloudEscalation : Confidence < τ

CloudEscalation --> CloudInference

CloudInference --> Explainability

Explainability --> ThresholdOptimization

ThresholdOptimization --> EdgeInference

LocalExecution --> [*]
```

---

## Sequence Workflow

```mermaid
sequenceDiagram

participant IoT

participant Edge

participant Calibration

participant Cloud

participant SHAP

IoT->>Edge: Network Flow

Edge->>Edge: Feature Extraction

Edge->>Edge: LightGBM Prediction

Edge->>Calibration: Confidence Score

alt Confidence ≥ τ

Calibration-->>Edge: Local Classification

Edge-->>IoT: Security Decision

else Confidence < τ

Calibration->>Cloud: Secure Transmission

Cloud->>Cloud: XGBoost Inference

Cloud->>SHAP: Feature Attribution

SHAP-->>Cloud: Explanation

Cloud-->>Edge: Updated Threshold

Cloud-->>IoT: Final Decision

end
```

---

## Deployment Topology

```mermaid
graph LR

subgraph Edge Infrastructure

IoT[IoT Devices]

Gateway[Edge Gateway]

SQLite[(SQLite)]

end

subgraph Cloud Infrastructure

API[FastAPI]

ML[XGBoost]

SHAP[TreeSHAP]

DB[(PostgreSQL)]

SOC[SOC Dashboard]

end

IoT --> Gateway

Gateway --> SQLite

Gateway --> API

API --> ML

ML --> SHAP

API --> DB

DB --> SOC
```

---

# Core Components

## Edge Intelligence

The edge runtime performs real-time inference using an ONNX-quantized LightGBM model specifically optimized for resource-constrained ARM64 gateways.

| Property | Value |
|----------|-------|
| Runtime | ONNX Runtime |
| Model | LightGBM |
| Hardware | Raspberry Pi / Industrial Gateway |
| Storage | SQLite |
| Latency Target | < 2 ms |
| Memory Budget | < 45 MB |

---

## Confidence Calibration

Prediction confidence is calibrated before any routing decision is made.

Instead of relying on raw model probabilities, AECIDS applies post-hoc calibration to produce reliable confidence estimates.

Supported calibration methods include:

- Temperature Scaling
- Platt Scaling

Only calibrated confidence values participate in routing decisions.

---

## Cloud Intelligence

Samples that fall below the adaptive confidence threshold are securely transmitted to the cloud for secondary inference.

Cloud infrastructure hosts significantly larger machine learning models that are impractical to execute on embedded hardware.

| Component | Technology |
|-----------|------------|
| Backend | FastAPI |
| Model | XGBoost Ensemble |
| Communication | MQTT / WebSocket |
| Storage | PostgreSQL |

---

## Explainable Adaptation Engine

Every cloud prediction generates exact TreeSHAP feature attributions.

Rather than serving only as post-hoc explanations, these feature importance values become optimization signals for the adaptive routing controller.

The controller continuously monitors feature importance drift and updates the routing threshold accordingly.

This establishes a closed-loop architecture where explainability directly improves future inference decisions.

---

<a id="engineering-principles"></a>

# Engineering Principles

AECIDS is designed around five non-negotiable architectural principles.

| Principle | Description |
|-----------|-------------|
| Edge First | Every packet is evaluated locally before cloud escalation. |
| Confidence Before Complexity | Escalation occurs only when calibrated confidence is insufficient. |
| Explain Every Decision | Cloud predictions always include exact TreeSHAP explanations. |
| Adaptive Intelligence | Routing thresholds evolve using explainability feedback. |
| Offline Resilience | Edge gateways continue operating during cloud outages using SQLite-backed local processing. |

> [!IMPORTANT]
> Explainability is treated as an active optimization signal rather than a passive visualization layer.

---

# Architectural Invariants

The following properties remain invariant throughout the system.

- Every network flow is evaluated at the edge before cloud escalation.
- Routing decisions depend exclusively on calibrated confidence.
- Cloud inference is asynchronous.
- TreeSHAP explanations accompany every cloud prediction.
- Threshold optimization never bypasses confidence calibration.
- SQLite guarantees offline persistence at the edge.
- PostgreSQL serves as the centralized analytical data store.
- Communication between edge and cloud is encrypted.
---

# Research Methodology

AECIDS follows a hierarchical inference methodology where every network flow is evaluated through a sequence of progressively more computationally expensive decision layers.

Instead of executing heavyweight machine learning models for every packet, the system allocates computational resources adaptively according to prediction uncertainty.

The methodology consists of four sequential stages.

1. **Edge Inference**
2. **Confidence Calibration**
3. **Cloud Escalation**
4. **Explainable Feedback & Adaptive Optimization**

---

## Inference Pipeline

```text
Network Flow
      │
      ▼
Feature Engineering
      │
      ▼
LightGBM (Edge)
      │
      ▼
Confidence Calibration
      │
 ┌────┴────────────┐
 │                 │
 ▼                 ▼
Edge Decision    Cloud Routing
                     │
                     ▼
             XGBoost Ensemble
                     │
                     ▼
              TreeSHAP Analysis
                     │
                     ▼
          Adaptive Threshold Update
```

---

# Mathematical Formulation

The routing policy is governed by calibrated prediction confidence rather than raw model probabilities.

---

## Temperature Scaling

Given a model logit vector

\[
z=(z_1,z_2,\ldots,z_K)
\]

the calibrated posterior probability becomes

\[
P_i
=
\frac{\exp(z_i/T)}
{\sum_{j=1}^{K}\exp(z_j/T)}
\]

where

- \(T>0\) denotes the learned temperature parameter
- \(K\) is the number of prediction classes

---

## Adaptive Routing Function

Each network flow is routed according to

\[
Route(x)=
\begin{cases}
Edge, & P(y|x)\ge\tau \\
Cloud, & P(y|x)<\tau
\end{cases}
\]

where

- \(P(y|x)\) denotes calibrated confidence
- \(\tau\) is the adaptive routing threshold

---

## Threshold Optimization

Rather than remaining static,

\[
\tau=f(\Delta SHAP)
\]

where

\[
\Delta SHAP
\]

represents observed feature attribution drift over time.

---

## TreeSHAP

For every cloud prediction,

\[
f(x)
=
\phi_0
+
\sum_{i=1}^{M}\phi_i
\]

where

- \(\phi_0\) is the expected prediction
- \(\phi_i\) denotes the contribution of feature \(i\)

These feature attributions become optimization signals for future routing decisions.

---

# Technology Stack

AECIDS adopts a layered technology stack that separates inference, communication, storage, visualization, and deployment concerns.

---

## Machine Learning

| Layer | Technology | Purpose |
|--------|------------|---------|
| Edge Model | LightGBM | Lightweight edge inference |
| Cloud Model | XGBoost | High-capacity secondary inference |
| Explainability | TreeSHAP | Feature attribution |
| Runtime | ONNX Runtime | Embedded execution |

---

## Backend

| Component | Technology |
|-----------|------------|
| Framework | FastAPI |
| Language | Python 3.11 |
| ASGI Server | Uvicorn |
| Validation | Pydantic |
| API | REST + WebSocket |
| Communication | MQTT |

---

## Frontend

| Component | Technology |
|-----------|------------|
| Framework | React 18 |
| Language | TypeScript |
| Styling | TailwindCSS |
| Charts | Recharts |
| Icons | Lucide |

---

## Storage

| Layer | Technology |
|--------|------------|
| Edge Queue | SQLite |
| Security Database | PostgreSQL 16+ |

---

## Infrastructure

| Component | Technology |
|-----------|------------|
| Containers | Docker |
| Deployment | Docker Compose |
| Hardware | Raspberry Pi ARM64 |

---

# Repository Structure

The repository is organized by architectural responsibility rather than framework.

```text
AECIDS
│
├── backend/
│   ├── api/
│   ├── routers/
│   ├── services/
│   ├── calibration/
│   ├── explainability/
│   ├── models/
│   └── database/
│
├── edge-agent/
│   ├── runtime/
│   ├── inference/
│   ├── calibration/
│   ├── mqtt/
│   ├── storage/
│   └── monitoring/
│
├── frontend/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   └── styles/
│
├── models/
│
├── datasets/
│
├── docs/
│   ├── architecture/
│   ├── research/
│   ├── diagrams/
│   └── images/
│
├── docker/
│
├── tests/
│
├── scripts/
│
├── docker-compose.yml
│
├── requirements.txt
│
└── README.md
```

---

## Repository Overview

```mermaid
graph TD

Root[AECIDS]

Root --> Backend

Root --> Edge

Root --> Frontend

Root --> Models

Root --> Datasets

Root --> Docs

Root --> Docker

Root --> Tests

Backend --> API

Backend --> Services

Backend --> Database

Edge --> Runtime

Edge --> Calibration

Edge --> MQTT

Frontend --> Components

Frontend --> Dashboard
```

---

# Installation

## Requirements

| Software | Version |
|-----------|----------|
| Python | 3.11+ |
| Node.js | 20+ |
| Docker | Latest |
| Docker Compose | Latest |
| PostgreSQL | 16+ |

---

## Clone Repository

```bash
git clone https://github.com/<username>/AECIDS.git

cd AECIDS
```

---

## Docker Deployment

```bash
docker compose up --build
```

---

## Backend

```bash
cd backend

python -m venv .venv

source .venv/bin/activate

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

## Edge Runtime

```bash
cd edge-agent

python main.py
```

---

# Configuration

The application is configured through environment variables.

| Variable | Description |
|-----------|-------------|
| DATABASE_URL | PostgreSQL connection |
| SQLITE_PATH | Edge database |
| MQTT_HOST | MQTT broker |
| MQTT_PORT | Broker port |
| SECRET_KEY | Application secret |
| MODEL_PATH | ONNX model location |
| THRESHOLD | Initial routing threshold |

---

# Development Workflow

```text
Implement Feature

        │

        ▼

Run Unit Tests

        │

        ▼

Run Edge Runtime

        │

        ▼

Run Backend

        │

        ▼

Launch Dashboard

        │

        ▼

Evaluate System
```

---

# API Reference

## REST Endpoints

| Method | Endpoint | Description |
|----------|-----------|------------|
| GET | /health | Service health |
| POST | /predict | Edge prediction |
| POST | /cloud/predict | Cloud inference |
| GET | /metrics | Runtime metrics |
| GET | /threshold | Current routing threshold |
| POST | /threshold | Update routing threshold |

---

## WebSocket

| Endpoint | Description |
|-----------|-------------|
| /ws/events | Live security events |
| /ws/alerts | Alert streaming |
| /ws/status | Gateway health |
| /ws/logs | Runtime logs |

---

> [!NOTE]
> The REST API follows the OpenAPI specification and is fully documented through FastAPI's autogenerated interactive documentation.

