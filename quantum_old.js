/* 🌌 QUANTUM DEVOPS PLATFORM - REVOLUTIONARY JAVASCRIPT 🌌 */
/* Ultra-Modern Interactive Features & Quantum Animation System */

class QuantumParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.time = 0;
        
        this.resizeCanvas();
        this.createParticles();
        this.setupEvents();
        this.animate();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        const particleCount = Math.min(200, window.innerWidth / 8);
        this.particles = [];
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 2,
                speedY: (Math.random() - 0.5) * 2,
                color: this.getQuantumColor(),
                opacity: Math.random() * 0.8 + 0.2,
                originalSize: 0,
                phase: Math.random() * Math.PI * 2
            });
            this.particles[i].originalSize = this.particles[i].size;
        }
    }
    
    getQuantumColor() {
        const colors = [
            'rgb(0, 255, 255)',    // Cyan
            'rgb(191, 0, 255)',    // Purple
            'rgb(57, 255, 20)',    // Green
            'rgb(255, 16, 240)',   // Pink
            'rgb(255, 255, 0)',    // Yellow
            'rgb(255, 255, 255)'   // White
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    setupEvents() {
        window.addEventListener('resize', () => this.resizeCanvas());
        
        window.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.time += 0.016;
        
        // Draw quantum connections
        this.drawConnections();
        
        // Update and draw particles
        this.particles.forEach((particle, index) => {
            this.updateParticle(particle, index);
            this.drawParticle(particle);
        });
        
        requestAnimationFrame(() => this.animate());
    }
    
    updateParticle(particle, index) {
        // Quantum floating motion
        particle.x += particle.speedX + Math.sin(this.time * 2 + particle.phase) * 0.5;
        particle.y += particle.speedY + Math.cos(this.time * 1.5 + particle.phase) * 0.3;
        
        // Mouse interaction
        const dx = this.mouseX - particle.x;
        const dy = this.mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
            const force = (150 - distance) / 150;
            particle.x -= dx * force * 0.03;
            particle.y -= dy * force * 0.03;
            particle.size = particle.originalSize * (1 + force * 2);
            particle.opacity = Math.min(1, particle.opacity + force * 0.5);
        } else {
            particle.size = particle.originalSize;
            particle.opacity = Math.max(0.2, particle.opacity - 0.01);
        }
        
        // Quantum phase effects
        particle.phase += 0.02;
        
        // Boundary wrapping
        if (particle.x < 0) particle.x = this.canvas.width;
        if (particle.x > this.canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = this.canvas.height;
        if (particle.y > this.canvas.height) particle.y = 0;
    }
    
    drawParticle(particle) {
        this.ctx.save();
        
        // Quantum glow effect
        this.ctx.shadowColor = particle.color;
        this.ctx.shadowBlur = 20;
        
        // Main particle
        this.ctx.globalAlpha = particle.opacity;
        this.ctx.fillStyle = particle.color;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Inner glow
        this.ctx.globalAlpha = particle.opacity * 0.5;
        this.ctx.fillStyle = 'white';
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        this.ctx.fill();
        
        this.ctx.restore();
    }
    
    drawConnections() {
        this.ctx.save();
        
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    const opacity = (120 - distance) / 120 * 0.3;
                    
                    this.ctx.globalAlpha = opacity;
                    this.ctx.strokeStyle = this.particles[i].color;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
        
        this.ctx.restore();
    }
}

class QuantumLoadingSystem {
    constructor() {
        this.loadingScreen = document.getElementById('loadingScreen');
        this.loadingBar = document.querySelector('.loading-bar');
        this.loadingText = document.querySelector('.loading-text');
        this.progress = 0;
        this.messages = [
            'Initializing Quantum Cores...',
            'Loading Holographic Interface...',
            'Calibrating Quantum Sensors...',
            'Establishing Quantum Links...',
            'Activating Neural Networks...',
            'Quantum Platform Ready!'
        ];
        this.currentMessage = 0;
        
        this.startLoading();
    }
    
    startLoading() {
        const interval = setInterval(() => {
            this.progress += Math.random() * 20 + 5;
            
            if (this.progress >= 100) {
                this.progress = 100;
                clearInterval(interval);
                setTimeout(() => this.hideLoading(), 500);
            }
            
            this.updateProgress();
            
            // Update messages
            const messageIndex = Math.floor((this.progress / 100) * this.messages.length);
            if (messageIndex !== this.currentMessage && messageIndex < this.messages.length) {
                this.currentMessage = messageIndex;
                this.updateMessage();
            }
        }, 200);
    }
    
    updateProgress() {
        if (this.loadingBar) {
            this.loadingBar.style.width = `${this.progress}%`;
        }
    }
    
    updateMessage() {
        if (this.loadingText) {
            this.loadingText.style.opacity = '0';
            setTimeout(() => {
                this.loadingText.textContent = this.messages[this.currentMessage];
                this.loadingText.style.opacity = '1';
            }, 150);
        }
    }
    
    hideLoading() {
        if (this.loadingScreen) {
            this.loadingScreen.style.opacity = '0';
            this.loadingScreen.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.loadingScreen.style.display = 'none';
            }, 600);
        }
    }
}

class QuantumNavigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section[id]');
        this.themeToggle = document.getElementById('themeToggle');
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        
        this.setupScrollEffects();
        this.setupNavigation();
        this.setupThemeToggle();
        this.setupMobileMenu();
    }
    
    setupScrollEffects() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Navbar scroll effects
            if (this.navbar) {
                if (currentScrollY > 100) {
                    this.navbar.classList.add('scrolled');
                } else {
                    this.navbar.classList.remove('scrolled');
                }
                
                // Hide/show navbar based on scroll direction
                if (currentScrollY > lastScrollY && currentScrollY > 200) {
                    this.navbar.style.transform = 'translateY(-100%)';
                } else {
                    this.navbar.style.transform = 'translateY(0)';
                }
            }
            
            lastScrollY = currentScrollY;
            this.updateActiveSection();
        });
    }
    
    setupNavigation() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    
                    // Update active states
                    this.navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    
                    // Smooth scroll
                    const targetId = link.getAttribute('href').substring(1);
                    const targetSection = document.getElementById(targetId);
                    
                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop - 100;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
    
    updateActiveSection() {
        let currentSection = '';
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    setupThemeToggle() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                const html = document.documentElement;
                const currentTheme = html.getAttribute('data-theme');
                const newTheme = currentTheme === 'quantum' ? 'dark' : 'quantum';
                
                html.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                
                // Update icon
                const icon = this.themeToggle.querySelector('i');
                if (icon) {
                    icon.className = newTheme === 'quantum' ? 'fas fa-atom' : 'fas fa-moon';
                }
                
                // Add quantum effect
                this.themeToggle.style.transform = 'scale(1.2) rotate(360deg)';
                setTimeout(() => {
                    this.themeToggle.style.transform = '';
                }, 300);
            });
        }
    }
    
    setupMobileMenu() {
        if (this.navToggle && this.navMenu) {
            this.navToggle.addEventListener('click', () => {
                this.navMenu.classList.toggle('active');
                const icon = this.navToggle.querySelector('i');
                if (icon) {
                    icon.className = this.navMenu.classList.contains('active') 
                        ? 'fas fa-times' 
                        : 'fas fa-bars';
                }
            });
        }
    }
}

class QuantumPipelineVisualization {
    constructor() {
        this.stages = document.querySelectorAll('.pipeline-stage');
        this.progressBars = document.querySelectorAll('.progress-bar');
        this.isAnimating = false;
        
        this.setupPipelineAnimation();
        this.setupIntersectionObserver();
    }
    
    setupPipelineAnimation() {
        this.stages.forEach((stage, index) => {
            stage.addEventListener('click', () => {
                if (!this.isAnimating) {
                    this.runPipelineAnimation(index);
                }
            });
        });
    }
    
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isAnimating) {
                    setTimeout(() => this.runPipelineAnimation(), 1000);
                }
            });
        }, { threshold: 0.5 });
        
        const pipelineContainer = document.querySelector('.pipeline-container');
        if (pipelineContainer) {
            observer.observe(pipelineContainer);
        }
    }
    
    async runPipelineAnimation(startIndex = 0) {
        this.isAnimating = true;
        
        // Reset all stages
        this.stages.forEach(stage => {
            stage.classList.remove('active');
            const progressBar = stage.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.width = '0%';
            }
        });
        
        // Animate stages sequentially
        for (let i = startIndex; i < this.stages.length; i++) {
            const stage = this.stages[i];
            const progressBar = stage.querySelector('.progress-bar');
            
            // Activate stage
            stage.classList.add('active');
            
            // Animate progress bar
            if (progressBar) {
                const duration = Math.random() * 2000 + 1000; // 1-3 seconds
                await this.animateProgressBar(progressBar, duration);
            }
            
            // Wait before next stage
            await this.delay(500);
        }
        
        this.isAnimating = false;
        
        // Show completion effect
        this.showCompletionEffect();
    }
    
    animateProgressBar(progressBar, duration) {
        return new Promise(resolve => {
            const startTime = Date.now();
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                progressBar.style.width = `${progress * 100}%`;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };
            animate();
        });
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    showCompletionEffect() {
        const pipelineContainer = document.querySelector('.pipeline-container');
        if (pipelineContainer) {
            pipelineContainer.style.boxShadow = '0 0 60px rgba(0, 255, 255, 0.8)';
            setTimeout(() => {
                pipelineContainer.style.boxShadow = '';
            }, 2000);
        }
    }
}

class QuantumFeatureCards {
    constructor() {
        this.cards = document.querySelectorAll('.feature-card');
        this.setupCardEffects();
        this.setupIntersectionObserver();
    }
    
    setupCardEffects() {
        this.cards.forEach((card, index) => {
            // Hover effects
            card.addEventListener('mouseenter', () => {
                this.activateCard(card);
            });
            
            card.addEventListener('mouseleave', () => {
                this.deactivateCard(card);
            });
            
            // Click effects
            card.addEventListener('click', () => {
                this.pulseCard(card);
            });
        });
    }
    
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.2 });
        
        this.cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    }
    
    activateCard(card) {
        card.style.transform = 'translateY(-15px) scale(1.02) rotateY(5deg)';
        card.style.zIndex = '10';
        
        // Add quantum glow
        const icon = card.querySelector('.feature-icon');
        if (icon) {
            icon.style.animation = 'quantum-spin 2s ease-in-out infinite';
        }
    }
    
    deactivateCard(card) {
        card.style.transform = '';
        card.style.zIndex = '';
        
        // Remove quantum glow
        const icon = card.querySelector('.feature-icon');
        if (icon) {
            icon.style.animation = '';
        }
    }
    
    pulseCard(card) {
        card.style.animation = 'hologram-pulse 0.6s ease-in-out';
        setTimeout(() => {
            card.style.animation = '';
        }, 600);
    }
}

class QuantumStatsCounter {
    constructor() {
        this.statsItems = document.querySelectorAll('.stat-item');
        this.hasAnimated = false;
        this.setupIntersectionObserver();
    }
    
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.animateStats();
                    this.hasAnimated = true;
                }
            });
        }, { threshold: 0.5 });
        
        const statsContainer = document.querySelector('.hero-stats');
        if (statsContainer) {
            observer.observe(statsContainer);
        }
    }
    
    animateStats() {
        this.statsItems.forEach((item, index) => {
            const number = item.querySelector('.stat-number');
            const originalText = number.textContent;
            
            setTimeout(() => {
                this.animateNumber(number, originalText);
            }, index * 200);
        });
    }
    
    animateNumber(element, finalText) {
        const duration = 2000;
        const startTime = Date.now();
        
        if (finalText.includes('%') || finalText.includes('s')) {
            // Animate decimal numbers
            const finalNum = parseFloat(finalText);
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const currentNum = finalNum * progress;
                
                element.textContent = currentNum.toFixed(1) + finalText.replace(/[\d.]/g, '');
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            animate();
        } else {
            // Special animations for text values
            element.style.animation = 'holographic-shift 2s ease-in-out';
            setTimeout(() => {
                element.style.animation = '';
            }, 2000);
        }
    }
}

// Initialize all quantum systems when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'quantum';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Initialize quantum systems
    new QuantumLoadingSystem();
    
    // Initialize particle system after loading
    setTimeout(() => {
        const canvas = document.getElementById('particleCanvas');
        if (canvas) {
            new QuantumParticleSystem(canvas);
        }
    }, 1000);
    
    // Initialize other systems
    new QuantumNavigation();
    new QuantumPipelineVisualization();
    new QuantumFeatureCards();
    new QuantumStatsCounter();
    
    // Initialize responsive enhancements
    new ResponsiveEnhancements();
    
    // Add quantum effects to buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Create quantum ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(0, 255, 255, 0.6);
                transform: scale(0);
                animation: quantum-ripple 0.6s linear;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
            ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add quantum glow to form inputs
    document.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 25px rgba(0, 255, 255, 0.5)';
            this.style.borderColor = 'var(--neon-cyber-blue)';
        });
        
        input.addEventListener('blur', function() {
            this.style.boxShadow = '';
            this.style.borderColor = '';
        });
    });
    
    // Add performance monitoring
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            console.log('🌌 Quantum Platform Initialized Successfully');
            console.log('⚡ Performance Mode: Optimized');
            console.log('📱 Responsive Mode: Active');
        });
    }
});

// Responsive Enhancement System
class ResponsiveEnhancements {
    constructor() {
        this.init();
        this.setupViewportDetection();
        this.setupTouchOptimizations();
        this.setupPerformanceOptimizations();
        this.setupAccessibilityEnhancements();
    }
    
    init() {
        this.viewport = this.getViewportInfo();
        this.isTouch = 'ontouchstart' in window;
        this.isMobile = this.viewport.width <= 768;
        this.isTablet = this.viewport.width > 768 && this.viewport.width <= 1024;
        this.isDesktop = this.viewport.width > 1024;
        
        // Add device classes
        document.body.classList.add(
            this.isTouch ? 'touch-device' : 'no-touch',
            this.isMobile ? 'mobile-device' : 
            this.isTablet ? 'tablet-device' : 'desktop-device'
        );
    }
    
    getViewportInfo() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
            ratio: window.devicePixelRatio || 1
        };
    }
    
    setupViewportDetection() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleViewportChange();
            }, 250);
        });
        
        // Handle orientation change
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.handleViewportChange();
            }, 100);
        });
    }
    
    handleViewportChange() {
        const oldViewport = this.viewport;
        this.init();
        
        // Trigger custom event for other components
        window.dispatchEvent(new CustomEvent('viewportChange', {
            detail: { old: oldViewport, new: this.viewport }
        }));
        
        // Optimize particle count based on screen size
        this.optimizeParticleSystem();
    }
    
    optimizeParticleSystem() {
        const canvas = document.getElementById('particleCanvas');
        if (canvas && window.quantumParticleSystem) {
            const particleCount = this.isMobile ? 30 : 
                                this.isTablet ? 50 : 80;
            window.quantumParticleSystem.adjustParticleCount(particleCount);
        }
    }
    
    setupTouchOptimizations() {
        if (!this.isTouch) return;
        
        // Add touch-friendly interactions
        document.querySelectorAll('.feature-card, .btn, .nav-link').forEach(element => {
            element.style.minHeight = '44px'; // Apple's recommended touch target
            element.style.cursor = 'pointer';
        });
        
        // Prevent 300ms click delay
        document.addEventListener('touchstart', () => {}, { passive: true });
        
        // Handle touch gestures
        this.setupSwipeGesture();
        
        // Optimize scrolling
        document.addEventListener('touchmove', (e) => {
            if (e.target.closest('.no-scroll')) {
                e.preventDefault();
            }
        }, { passive: false });
    }
    
    setupSwipeGesture() {
        let startX, startY, startTime;
        
        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            startTime = Date.now();
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            if (!startX || !startY) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const endTime = Date.now();
            
            const deltaX = endX - startX;
            const deltaY = endY - startY;
            const deltaTime = endTime - startTime;
            
            // Check for swipe gesture
            if (Math.abs(deltaX) > 50 && deltaTime < 300) {
                const direction = deltaX > 0 ? 'right' : 'left';
                this.handleSwipe(direction);
            }
            
            startX = startY = null;
        }, { passive: true });
    }
    
    handleSwipe(direction) {
        // Handle swipe for mobile navigation
        const navMenu = document.getElementById('navMenu');
        if (navMenu && this.isMobile) {
            if (direction === 'left' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
        
        // Trigger custom swipe event
        window.dispatchEvent(new CustomEvent('swipe', {
            detail: { direction }
        }));
    }
    
    setupPerformanceOptimizations() {
        // Reduce animations on low-performance devices
        if (this.shouldReduceAnimations()) {
            document.body.classList.add('reduced-motion');
        }
        
        // Lazy load images
        this.setupLazyLoading();
        
        // Optimize expensive operations
        this.setupIntersectionOptimizations();
        
        // Memory management
        this.setupMemoryOptimizations();
    }
    
    shouldReduceAnimations() {
        // Check for slow device indicators
        const slowConnection = navigator.connection && 
                             (navigator.connection.effectiveType === 'slow-2g' || 
                              navigator.connection.effectiveType === '2g');
        
        const lowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
        const reducedMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        return slowConnection || lowMemory || reducedMotionPreference;
    }
    
    setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        }
    }
    
    setupIntersectionOptimizations() {
        // Pause animations when elements are not visible
        const expensiveElements = document.querySelectorAll('.animate-quantum, .animate-hologram');
        
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    } else {
                        entry.target.style.animationPlayState = 'paused';
                    }
                });
            }, { threshold: 0.1 });
            
            expensiveElements.forEach(el => animationObserver.observe(el));
        }
    }
    
    setupMemoryOptimizations() {
        // Clean up unused resources
        window.addEventListener('beforeunload', () => {
            // Cancel any running animations
            document.querySelectorAll('*').forEach(el => {
                el.style.animation = 'none';
            });
            
            // Clear intervals and timeouts
            for (let i = 1; i < 99999; i++) {
                clearTimeout(i);
                clearInterval(i);
            }
        });
        
        // Periodic memory cleanup
        if (this.isMobile) {
            setInterval(() => {
                if (document.hidden) {
                    // Pause particle system when tab is hidden
                    const canvas = document.getElementById('particleCanvas');
                    if (canvas && window.quantumParticleSystem) {
                        window.quantumParticleSystem.pause();
                    }
                }
            }, 30000);
        }
    }
    
    setupAccessibilityEnhancements() {
        // Enhance keyboard navigation
        this.setupKeyboardNavigation();
        
        // Add ARIA labels dynamically
        this.enhanceARIALabels();
        
        // Improve focus management
        this.setupFocusManagement();
        
        // Add screen reader optimizations
        this.setupScreenReaderOptimizations();
    }
    
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Escape key closes mobile menu
            if (e.key === 'Escape') {
                const navMenu = document.getElementById('navMenu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
            
            // Enter/Space activates buttons
            if ((e.key === 'Enter' || e.key === ' ') && 
                e.target.classList.contains('btn')) {
                e.preventDefault();
                e.target.click();
            }
        });
    }
    
    enhanceARIALabels() {
        // Add missing ARIA labels
        document.querySelectorAll('.nav-toggle').forEach(toggle => {
            if (!toggle.getAttribute('aria-label')) {
                toggle.setAttribute('aria-label', 'Toggle navigation menu');
            }
        });
        
        // Add live regions for dynamic content
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'live-region';
        document.body.appendChild(liveRegion);
    }
    
    setupFocusManagement() {
        // Improve focus visibility
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
        
        // Trap focus in modal dialogs
        this.setupFocusTrap();
    }
    
    setupFocusTrap() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const activeModal = document.querySelector('.modal.active');
                if (activeModal) {
                    const focusableElements = activeModal.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];
                    
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            }
        });
    }
    
    setupScreenReaderOptimizations() {
        // Announce page changes
        const announcePageChange = (message) => {
            const liveRegion = document.getElementById('live-region');
            if (liveRegion) {
                liveRegion.textContent = message;
                setTimeout(() => {
                    liveRegion.textContent = '';
                }, 1000);
            }
        };
        
        // Monitor navigation changes
        window.addEventListener('popstate', () => {
            announcePageChange('Page content updated');
        });
        
        // Announce dynamic content changes
        window.addEventListener('contentChange', (e) => {
            announcePageChange(e.detail.message || 'Content updated');
        });
    
    // Add quantum glow to form inputs
    document.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 25px rgba(0, 255, 255, 0.5)';
            this.style.borderColor = 'var(--neon-cyber-blue)';
        });
        
        input.addEventListener('blur', function() {
            this.style.boxShadow = '';
            this.style.borderColor = '';
        });
    });
    
    // Add performance monitoring
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            console.log('🌌 Quantum Platform Initialized Successfully');
            console.log('⚡ Performance Mode: Optimized');
            console.log('📱 Responsive Mode: Active');
        });
    }
});

// Add quantum ripple animation keyframes
if (!document.getElementById('quantum-styles')) {
    const style = document.createElement('style');
    style.id = 'quantum-styles';
    style.textContent = `
        @keyframes quantum-ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .reduced-motion * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
        
        .keyboard-navigation *:focus {
            outline: 2px solid var(--neon-cyber-blue) !important;
            outline-offset: 2px !important;
        }
        
        .sr-only {
            position: absolute !important;
            width: 1px !important;
            height: 1px !important;
            padding: 0 !important;
            margin: -1px !important;
            overflow: hidden !important;
            clip: rect(0, 0, 0, 0) !important;
            white-space: nowrap !important;
            border: 0 !important;
        }
        
        .touch-device .btn {
            min-height: 44px;
        }
        
        .mobile-device .hero-title {
            font-size: clamp(1.8rem, 6vw, 2.5rem) !important;
        }
        
        @media (max-width: 480px) {
            .quantum-nav {
                padding: 0.5rem 1rem;
            }
            
            .hero-section {
                padding: calc(var(--nav-height, 60px) + 1rem) 0.5rem 2rem;
            }
            
            .features-grid {
                grid-template-columns: 1fr !important;
                gap: 1rem;
                padding: 0 0.5rem;
            }
            
            .pipeline-container {
                margin: 0 0.5rem;
                padding: 1rem;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
            }
        }
    `;
    document.head.appendChild(style);
}

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                console.log('⚡ Quantum Platform Performance:', {
                    'Load Time': Math.round(perfData.loadEventEnd - perfData.fetchStart) + 'ms',
                    'DOM Ready': Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart) + 'ms'
                });
            }
        }, 1000);
    });
}
