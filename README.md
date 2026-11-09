# Abdul Rauf Kaka — Portfolio

Frontend-focused full-stack developer. This site is my personal portfolio: about me, stack, featured work, and how to get in touch.

**GitHub:** [AbdulRaufKaka](https://github.com/AbdulRaufKaka) · **LinkedIn:** [abdulraufkaka](https://www.linkedin.com/in/abdulraufkaka) · **Email:** arauf9229@gmail.com

## Tech stack (this site)

React, Vite, Tailwind CSS, React Router, GSAP, Lenis.

## Skills

| Area | Technologies |
| --- | --- |
| Frontend | TypeScript, JavaScript, Python, React.js, Redux, Next.js, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MySQL, PostgreSQL, MongoDB |
| Tools | Git, GitHub, Docker |

## Featured projects

### SatIntel (2025)

SatIntel is my final-year project with SUPARCO Resolve Lab: an end-to-end multimodal AI system for satellite image intelligence. RemoteCLIP is used as the vision encoder and connected to Phi-3.5-Mini (3.8B) through a custom MLP projector, then trained in a three-stage pipeline covering feature alignment and visual instruction tuning. LoRA keeps GPU training efficient. GroundingDINO and SAM2 handle zero-shot object detection and segmentation through autonomous tool routing. The model was evaluated on RSICD and RSVQA-LR, with results comparable to GeoChat and LLaVA-RE.

**Stack:** Multimodal AI, RemoteCLIP, Phi-3.5-Mini, LoRA, GroundingDINO, SAM2

### Thrift Store (2024)

Thrift Store is a full-stack e-commerce app with dynamic product listings, client-side routing, and React state management. Users sign in with JWT access and refresh tokens for session handling. Stripe powers checkout and real-time payments. Redis caches frequent API responses to cut latency, and Axios plus React Hooks handle API calls and async UI state.

**Stack:** React.js, MongoDB, Axios, Redis, Stripe, JWT

## Run locally

```bash
npm install
npm run dev
```
