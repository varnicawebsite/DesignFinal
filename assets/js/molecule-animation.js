// Molecule/Dot convergence animation above Sirens heading
(function() {
    function initMoleculeAnimation() {
        const titleLeft = document.querySelector('[data-title-part="left"]');
        
        if (!titleLeft) return;
        
        // Create canvas container above the Sirens title
        const container = document.createElement('div');
        container.style.cssText = 'position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 300px; height: 80px; pointer-events: none;';
        
        const canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 80;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        
        container.appendChild(canvas);
        titleLeft.parentElement.style.position = 'relative';
        titleLeft.parentElement.insertBefore(container, titleLeft);
        
        const ctx = canvas.getContext('2d');
        const particles = [];
        const particleCount = 40;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        // Create particles scattered across the canvas
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                radius: Math.random() * 1.5 + 0.5
            });
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw particles
            particles.forEach((particle, i) => {
                // Move towards center with attraction force
                const dx = centerX - particle.x;
                const dy = centerY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance > 8) {
                    // Strong attraction to center
                    particle.vx += dx * 0.0003;
                    particle.vy += dy * 0.0003;
                } else {
                    // Gentle push away when too close
                    particle.vx += (Math.random() - 0.5) * 0.02;
                    particle.vy += (Math.random() - 0.5) * 0.02;
                }
                
                // Apply velocity with damping
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.vx *= 0.97;
                particle.vy *= 0.97;
                
                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
                
                // Draw particle
                ctx.fillStyle = 'rgba(230, 230, 225, 0.9)';
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fill();
                
                // Draw connections to nearby particles
                particles.forEach((other, j) => {
                    if (i < j) {
                        const dist = Math.sqrt(
                            Math.pow(particle.x - other.x, 2) +
                            Math.pow(particle.y - other.y, 2)
                        );
                        
                        if (dist < 50) {
                            ctx.strokeStyle = `rgba(230, 230, 225, ${0.4 * (1 - dist / 50)})`;
                            ctx.lineWidth = 0.5;
                            ctx.beginPath();
                            ctx.moveTo(particle.x, particle.y);
                            ctx.lineTo(other.x, other.y);
                            ctx.stroke();
                        }
                    }
                });
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMoleculeAnimation);
    } else {
        initMoleculeAnimation();
    }
})();
