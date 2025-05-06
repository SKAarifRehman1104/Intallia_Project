# Docker Setup Instructions

## Development Setup

To run the app in development mode using Docker Compose:

1. Make sure you have Docker and Docker Compose installed.
2. Create a `.env` file in the project root if you need to define environment variables.
3. Run the following command to build and start the development container:

```bash
docker-compose up
```

4. The app will be available at `http://localhost:8080`.
5. The source code is mounted as a volume for live reload.

## Production Setup

To build and run the app in production mode:

1. Build the production image:

```bash
docker build -f Dockerfile.prod -t my-app-prod .
```

2. Run the production container:

```bash
docker run -p 80:80 my-app-prod
```

3. The app will be available at `http://localhost`.

Alternatively, you can use Docker Compose to run the production service:

```bash
docker-compose up app-prod
```

## Notes

- The development service uses the `Dockerfile` and runs `npm run dev` on port 8080.
- The production service uses `Dockerfile.prod` and serves static files with nginx on port 80.
- Environment variables can be defined in a `.env` file and will be loaded by the development service.
- Adjust the Dockerfiles and docker-compose.yml as needed for your specific requirements.
