---
title: "The Most Fun Project I’ve Built"
date: "2025-06-09"
description: "A blend of programming and games using OCR, Python, and OBS"
---

## Introduction

Awhile back, I built a tool to automatically track wins and losses in [Overwatch 2](https://overwatch.blizzard.com/en-us/) using Optical Character Recognition (OCR). It combines [OpenCV](https://opencv.org/), [Tesseract](https://github.com/tesseract-ocr/tesseract), and [OBS](https://obsproject.com/) to visually display match results in real time on a livestream or recording.

It might sound complex, but the core process is surprisingly straightforward:

1. Capture a 1920x1080 screenshot using PyAutoGUI
2. Pre-process the image using OpenCV
3. Use Tesseract to detect text. If it finds “victory” or “defeat” — or close variants (checked via Levenshtein Distance) — the tool updates your win/loss record
4. Repeat this process continuously

## Demo

![OCR Victory](https://raw.githubusercontent.com/gcmaidana/Visionwatch/master/images/ocr_win.gif)  
![OCR Defeat](https://raw.githubusercontent.com/gcmaidana/Visionwatch/master/images/ocr_defeat.gif)

<p align="center">
  <img src="https://raw.githubusercontent.com/gcmaidana/Visionwatch/master/images/ocr_win_log.png"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/gcmaidana/Visionwatch/master/images/ocr_defeat_log.png"/>
</p>

## Limitations

While the tool works well, there are some caveats to keep in mind:

- Text recognition isn’t perfect — animation, lighting, and UI effects can interfere
- Designed specifically for **1920x1080 resolution**
- Dual-monitor setups may affect which screen gets captured
- Assumes game language is English
- Only tracks wins/losses — not draws
- After detecting a result, the script pauses for 5 minutes to avoid double-counting

## Why I Switched to Python

I originally started this project in **C++** — mostly because a Blizzard recruiter mentioned that the Overwatch team primarily uses it. (I'll keep the conversation private for obvious reasons.)

But working with Tesseract in C++ turned out to be a hassle. You need to:

- Download the full OCR engine with something like `vcpkg`
- Manually link it with Visual Studio
- Troubleshoot limited documentation and examples

In contrast, using [PyTesseract](https://github.com/madmaze/pytesseract) in **Python** is far easier and more productive. It wraps the Tesseract API cleanly and lets me focus on logic instead of build errors.

Plus, it’s better for users. Downloading and setting up Tesseract in C++ can take forever — whereas Python lets people get started quickly with a simple install.

## Inspiration

I was inspired by a few really cool projects in the gaming/AI space.

One of them is [EldenRingAI](https://github.com/jameszampa/EldenRingAI), where someone trained an AI to fight enemies in _Elden Ring_. Every time the AI lost, a death counter on-screen would update in real time.

<p align="center">
  <img src="https://raw.githubusercontent.com/gcmaidana/Visionwatch/master/images/eldenringai.jpg"/>
</p>

Another was this [Dark Souls death counter using OCR](https://github.com/Jan-9C/deathcounter_ocr). It detects the “YOU DIED” screen and increments a counter accordingly.

<p align="center">
  <img src="https://raw.githubusercontent.com/gcmaidana/Visionwatch/master/images/readmeDeathcounter.png"/>
</p>

Both projects showed me that OCR could be used in creative and useful ways to enhance a gaming experience. I just extended that to a win/loss tracker for Overwatch 2.

## GitHub

👉 [**View the full project on GitHub**](https://github.com/gcmaidana/Visionwatch)
