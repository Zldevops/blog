---
title: redis
author:
createTime: 2024/08/04 02:00:30
permalink: /article/tdst8c4v/
tags:
  - redis
---
# 如何在不同操作系统上安装 Redis

Redis 是一个开源的键值存储系统，广泛用于缓存、消息队列、实时分析等场景。本指南将介绍如何在不同的操作系统上安装 Redis。

## 前言

Redis 支持多种操作系统，包括 Linux、macOS 和 Windows。本文将详细介绍如何在 Ubuntu Linux、macOS 和 Windows 上安装 Redis。

## 环境准备

### 1. Ubuntu Linux

- **系统要求**：Ubuntu 20.04 或更高版本。
- **依赖包**：确保安装了 `build-essential`、`zlib1g-dev` 和 `tcl8.6-dev`。

### 2. macOS

- **系统要求**：macOS Catalina 或更高版本。
- **依赖包**：确保安装了 Homebrew。

### 3. Windows

- **系统要求**：Windows 10 或更高版本。
- **依赖包**：无需特殊依赖包。

## 安装 Redis

### Ubuntu Linux

#### 步骤 1: 更新软件包列表

```bash
sudo apt update
```