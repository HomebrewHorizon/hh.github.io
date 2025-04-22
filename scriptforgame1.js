function update() {
    player.velocityY += player.gravity;
    player.y += player.velocityY;

    // Prevent player from falling below the canvas
    if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height;
        player.velocityY = 0;
        player.isJumping = false;
    }

    // Collision detection with platforms
    platforms.forEach(platform => {
        if (
            player.y + player.height >= platform.y &&
            player.y + player.height - player.velocityY < platform.y &&
            player.x + player.width > platform.x &&
            player.x < platform.x + platform.width
        ) {
            player.y = platform.y - player.height;
            player.velocityY = 0;
            player.isJumping = false;
        }
    });

    draw();
    requestAnimationFrame(update);
}
