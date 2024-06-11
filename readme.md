# IMDB Project

This is an IMDB project with separate backend and frontend directories.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project is divided into two main parts:
1. **Backend**: This folder contains all the server-side code.
2. **Frontend**: This folder contains all the client-side code.

## Prerequisites
- Docker: Ensure you have Docker installed on your system. You can download Docker from [here](https://www.docker.com/products/docker-desktop).


## Installation

To get started with this project, follow these steps:

### 1. Clone the repository
```sh
git clone https://github.com/yourusername/your-repository.git
```

### 2. Build and Start the Containers
Use Docker Compose to build and start both the frontend and backend services:
```sh
docker-compose up --build
```
This command will:

Build the Docker images for the frontend and backend using the specified Dockerfiles.
Start the containers and map the appropriate ports.

## Usage
The frontend application will be accessible at:

```sh
http://localhost:5173
```
The backend server will be accessible at:
```sh
http://localhost:3000
```

### 3. Stopping the Services
To stop the running containers, use:
```sh
docker-compose down
```