// Sound wave animation above Sirens heading
(function() {
    function initSoundWaveAnimation() {
        const titleLeft = document.querySelector('[data-title-part="left"]');
        
        if (!titleLeft) return;
        
        // Create canvas container above the Sirens title
        const container = document.createElement('div');
        container.style.cssText = 'position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 400px; height: 80px; pointer-events: none;';
        
        const canvas = document.createElement('canvas');
        canvas.width = 400;
        canvas.height = 80;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        
        container.appendChild(canvas);
        titleLeft.parentElement.style.position = 'relative';
        titleLeft.parentElement.insertBefore(container, titleLeft);
        
        const ctx = canvas.getContext('2d');
        const bars = 30;
        const barWidth = canvas.width / bars;
        const maxHeight = canvas.height * 0.8;
        
        // Initialize bar heights
        const barHeights = new Array(bars).fill(0).map(() => Math.random() * maxHeight);
        const targetHeights = new Array(bars).fill(0).map(() => Math.random() * maxHeight);
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw sound wave bars
            for (let i = 0; i < bars; i++) {
                // Smoothly interpolate towards target height
                barHeights[i] += (targetHeights[i] - barHeights[i]) * 0.1;
                
                // Randomly change target every so often
                if (Math.random() < 0.02) {
                    targetHeights[i] = Math.random() * maxHeight * (0.3 + Math.sin(i * 0.3) * 0.5 + 0.5);
                }
                
                const x = i * barWidth + barWidth / 2;
                const height = barHeights[i];
                const y = (canvas.height - height) / 2;
                
                // Create gradient for bars
                const gradient = ctx.createLinearGradient(0, y, 0, y + height);
                gradient.addColorStop(0, 'rgba(230, 230, 225, 0.3)');
                gradient.addColorStop(0.5, 'rgba(230, 230, 225, 0.9)');
                gradient.addColorStop(1, 'rgba(230, 230, 225, 0.3)');
                
                ctx.fillStyle = gradient;
                ctx.fillRect(x - barWidth / 3, y, barWidth / 1.5, height);
                
                // Add glow effect to middle bars
                if (height > maxHeight * 0.6) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = 'rgba(230, 230, 225, 0.5)';
                } else {
                    ctx.shadowBlur = 0;
                }
            }
            
            ctx.shadowBlur = 0;
            requestAnimationFrame(animate);
        }
        
        animate();
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSoundWaveAnimation);
    } else {
        initSoundWaveAnimation();
    }
})();
