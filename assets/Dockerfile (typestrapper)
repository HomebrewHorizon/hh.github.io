# Use devkitARM base image (if available) or a compatible Debian-based image
FROM debian:latest

# Set environment variables
ENV DEVKITPRO=/opt/devkitPro
ENV DEVKITARM=$DEVKITPRO/devkitARM
ENV PATH="$DEVKITARM/bin:$PATH"

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    curl \
    libnds-dev \
    devkitpro-pacman

# Install devkitARM
RUN curl -L https://github.com/devkitPro/pacman/releases/latest/download/devkitPro-pacman.deb -o devkitPro-pacman.deb && \
    dpkg -i devkitPro-pacman.deb && \
    apt-get install -y devkitARM

# Set working directory
WORKDIR /app

# Copy source code into container
COPY . .

# Compile project
RUN arm-none-eabi-gcc -I"$DEVKITPRO/libnds/include" -DARM9 -DNDS -mthumb -marm -c source/main.c -o build/main.o

# Link to create .nds file
RUN arm-none-eabi-gcc build/main.o -o actionstrap.nds -L"$DEVKITPRO/libnds/lib" -lfat

# Command to keep container running (optional)
CMD ["bash"]
