# Node.js build stage
FROM node:20-slim AS frontend-build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY client /app
WORKDIR /app

# Install dependencies and build the frontend
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

# .NET build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS backend-build
WORKDIR /app

# Copy backend code
COPY server-dotnet ./
# Copy built frontend files to wwwroot
COPY --from=frontend-build /app/build ./wwwroot

# Restore and publish the .NET application
RUN dotnet restore
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=backend-build /app/out .
ENTRYPOINT ["dotnet", "ImpensaServerDotnet.dll"]
