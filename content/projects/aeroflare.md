---
schema_version: 1.0.0
id: projects/aeroflare
type: project
title: AeroFlare
summary: Real-time wildfire prediction & 3D visualization engine.
last_updated: 2026-05-23
priority: high
tags: [WebGL, Next.js, GIS, ML]
status: completed
tech_stack: [WebGL, React, MapLibre GL]
highlights:
  - Engineered geospatial web visualizer for wildfire tracks.
  - Reduced rendering latencies to under 16ms.
---

# AeroFlare Wildfire Prediction

AeroFlare is a real-time predictive visualization application leveraging NASA FIRMS data and advanced spread modeling.

## Core Capabilities

- **NASA FIRMS Integration**: Periodically updates active fire spots via satellite readings.
- **Geospatial Spread Cones**: Computes winds, moisture, and slope gradients to model threat vectors.

## Technical Implementation

Built with React and custom shaders on MapLibre GL.
