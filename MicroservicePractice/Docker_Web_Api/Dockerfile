#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:3.1 AS build
WORKDIR /src
COPY ["Docker_Web_Api/Docker_Web_Api.csproj", "Docker_Web_Api/"]
RUN dotnet restore "Docker_Web_Api/Docker_Web_Api.csproj"
COPY . .
WORKDIR "/src/Docker_Web_Api"
RUN dotnet build "Docker_Web_Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Docker_Web_Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Docker_Web_Api.dll"]