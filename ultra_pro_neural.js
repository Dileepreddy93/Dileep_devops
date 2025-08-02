/* ========================================= */
/* ULTRA PRO DEVOPS PLATFORM - NEURAL JAVASCRIPT ENGINE */
/* Revolutionary AI-Powered Interactive Framework */
/* ========================================= */

class UltraProNeuralEngine {
    constructor() {
        this.isInitialized = false;
        this.neuralNetwork = null;
        this.quantumParticles = [];
        this.aiMetrics = {
            accuracy: 98.7,
            responseTime: 2.3,
            uptime: 99.99,
            buildTime: 1.2,
            deployments: 50,
            securityScore: 100
        };
        this.theme = localStorage.getItem('ultra-theme') || 'ultra-dark';
        
        this.init();
    }

    async init() {
        console.log('🚀 Initializing Ultra Pro Neural Engine...');
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }

    async start() {
        try {
            await this.showLoadingScreen();
            await this.initializeNeuralNetwork();
            await this.setupQuantumParticles();
            await this.initializeComponents();
            await this.startAnimations();
            
            this.hideLoadingScreen();
            this.isInitialized = true;
            
            console.log('✅ Ultra Pro Neural Engine initialized successfully');
        } catch (error) {
            console.error('❌ Neural Engine initialization failed:', error);
        }
    }

    async showLoadingScreen() {
        const loader = document.getElementById('ai-loader');
        const stages = [
            'Initializing Neural Engine...',
            'Loading AI Models...',
            'Establishing Quantum Connections...',
            'Optimizing Performance...',
            'Ready for Launch!'
        ];
        
        let currentStage = 0;
        const stageElement = document.querySelector('.loading-stage');
        
        return new Promise((resolve) => {
            const interval = setInterval(() => {
                if (currentStage < stages.length) {
                    stageElement.textContent = stages[currentStage];
                    currentStage++;
                } else {
                    clearInterval(interval);
                    resolve();
                }
            }, 600);
        });
    }

    hideLoadingScreen() {
        const loader = document.getElementById('ai-loader');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }

    async initializeNeuralNetwork() {
        const canvas = document.getElementById('neural-network-bg');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        this.neuralNetwork = {
            canvas,
            ctx,
            nodes: [],
            connections: []
        };

        // Create neural nodes
        for (let i = 0; i < 50; i++) {
            this.neuralNetwork.nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.2,
                pulse: Math.random() * Math.PI * 2
            });
        }

        // Create connections between nearby nodes
        this.updateNeuralConnections();
    }

    updateNeuralConnections() {
        if (!this.neuralNetwork) return;

        const { nodes } = this.neuralNetwork;
        this.neuralNetwork.connections = [];

        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    this.neuralNetwork.connections.push({
                        from: i,
                        to: j,
                        opacity: (100 - distance) / 100 * 0.2
                    });
                }
            }
        }
    }

    renderNeuralNetwork() {
        if (!this.neuralNetwork) return;

        const { canvas, ctx, nodes, connections } = this.neuralNetwork;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw connections
        ctx.strokeStyle = 'rgba(102, 126, 234, 0.3)';
        ctx.lineWidth = 1;
        
        connections.forEach(connection => {
            const from = nodes[connection.from];
            const to = nodes[connection.to];
            
            ctx.globalAlpha = connection.opacity;
            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
            ctx.stroke();
        });
        
        // Update and draw nodes
        nodes.forEach(node => {
            // Update position
            node.x += node.vx;
            node.y += node.vy;
            
            // Bounce off edges
            if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
            if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;
            
            // Update pulse
            node.pulse += 0.02;
            const pulseOpacity = Math.sin(node.pulse) * 0.3 + 0.7;
            
            // Draw node
            ctx.globalAlpha = node.opacity * pulseOpacity;
            ctx.fillStyle = '#667eea';
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fill();
        });
        
        ctx.globalAlpha = 1;
        
        // Update connections periodically
        if (Math.random() < 0.01) {
            this.updateNeuralConnections();
        }
    }

    async setupQuantumParticles() {
        const container = document.getElementById('quantum-particles');
        if (!container) return;

        // Create quantum particles
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'quantum-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background: rgba(102, 126, 234, ${Math.random() * 0.5 + 0.2});
                border-radius: 50%;
                pointer-events: none;
                animation: floatParticle ${Math.random() * 20 + 15}s infinite linear;
                animation-delay: ${Math.random() * 5}s;
                left: ${Math.random() * 100}%;
                top: 100%;
            `;
            
            container.appendChild(particle);
            this.quantumParticles.push(particle);
        }
    }

    async initializeComponents() {
        this.setupNavigation();
        this.setupThemeToggle();
        this.setupHeroAnimations();
        this.setupPipelineInteractions();
        this.setupAnalytics();
        this.setupScrollEffects();
        this.setupAIAssistant();
    }

    setupNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Mobile menu toggle
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

        // Smooth scrolling for nav links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }

                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Close mobile menu
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
            });
        });

        // Update active link on scroll
        const sections = document.querySelectorAll('section[id]');
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY + 100;
            
            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');
                
                if (scrollPos >= top && scrollPos < top + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        if (themeToggle) {
            // Set initial theme
            body.setAttribute('data-theme', this.theme);
            
            themeToggle.addEventListener('click', () => {
                this.theme = this.theme === 'ultra-dark' ? 'ultra-light' : 'ultra-dark';
                body.setAttribute('data-theme', this.theme);
                localStorage.setItem('ultra-theme', this.theme);
                
                // Update icon
                const icon = themeToggle.querySelector('i');
                if (icon) {
                    icon.className = this.theme === 'ultra-dark' ? 'fas fa-sun' : 'fas fa-moon';
                }
            });
        }
    }

    setupHeroAnimations() {
        // Animate counter values
        const counters = document.querySelectorAll('[data-count]');
        
        counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-count'));
            const duration = 2000;
            const start = Date.now();
            const startValue = 0;
            
            const animate = () => {
                const elapsed = Date.now() - start;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const current = startValue + (target - startValue) * easeOutQuart;
                
                if (target < 10) {
                    counter.textContent = current.toFixed(1);
                } else {
                    counter.textContent = Math.floor(current);
                }
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            
            // Start animation when element is visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animate();
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });

        // Neural network visualization
        this.setupNeuralVisualization();
    }

    setupNeuralVisualization() {
        const neuralContainer = document.querySelector('.neural-visualization');
        if (!neuralContainer) return;

        const neurons = document.querySelectorAll('.neuron');
        const connections = document.querySelector('.neural-connections');
        
        if (connections) {
            // Generate SVG connections
            const svg = connections;
            const layers = document.querySelectorAll('.neural-layer');
            
            if (layers.length >= 2) {
                layers.forEach((layer, layerIndex) => {
                    if (layerIndex < layers.length - 1) {
                        const currentNeurons = layer.querySelectorAll('.neuron');
                        const nextLayer = layers[layerIndex + 1];
                        const nextNeurons = nextLayer.querySelectorAll('.neuron');
                        
                        currentNeurons.forEach((currentNeuron, i) => {
                            nextNeurons.forEach((nextNeuron, j) => {
                                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                                line.setAttribute('x1', `${(layerIndex + 1) * 33}%`);
                                line.setAttribute('y1', `${20 + i * 20}%`);
                                line.setAttribute('x2', `${(layerIndex + 2) * 33}%`);
                                line.setAttribute('y2', `${20 + j * 15}%`);
                                line.setAttribute('stroke', 'rgba(102, 126, 234, 0.3)');
                                line.setAttribute('stroke-width', '1');
                                line.style.opacity = '0';
                                line.style.animation = `fadeIn 0.5s ease-out ${(i + j) * 100}ms forwards`;
                                
                                svg.appendChild(line);
                            });
                        });
                    }
                });
            }
        }

        // Animate neurons
        neurons.forEach((neuron, index) => {
            setTimeout(() => {
                neuron.classList.add('active');
            }, index * 200);
        });
    }

    setupPipelineInteractions() {
        const pipelineStages = document.querySelectorAll('.pipeline-stage');
        const controlBtns = document.querySelectorAll('.control-btn');
        
        // Pipeline stage hover effects
        pipelineStages.forEach((stage, index) => {
            stage.addEventListener('mouseenter', () => {
                // Add visual feedback
                stage.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            stage.addEventListener('mouseleave', () => {
                if (!stage.classList.contains('active')) {
                    stage.style.transform = '';
                }
            });
        });

        // Control button interactions
        controlBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.getAttribute('data-action');
                
                // Remove active class from all buttons
                controlBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Simulate pipeline action
                this.simulatePipelineAction(action);
            });
        });

        // Auto-simulate pipeline on load
        setTimeout(() => {
            this.simulatePipelineFlow();
        }, 3000);
    }

    simulatePipelineAction(action) {
        console.log(`🔄 Executing pipeline action: ${action}`);
        
        switch (action) {
            case 'start':
                this.simulatePipelineFlow();
                break;
            case 'monitor':
                this.showAIMetrics();
                break;
            case 'optimize':
                this.optimizeWithAI();
                break;
        }
    }

    simulatePipelineFlow() {
        const stages = document.querySelectorAll('.pipeline-stage');
        
        stages.forEach(stage => stage.classList.remove('active'));
        
        stages.forEach((stage, index) => {
            setTimeout(() => {
                stage.classList.add('active');
                
                // Add completion effect
                setTimeout(() => {
                    const icon = stage.querySelector('.stage-icon');
                    if (icon) {
                        icon.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
                        
                        // Reset after animation
                        setTimeout(() => {
                            icon.style.background = '';
                        }, 2000);
                    }
                }, 1500);
            }, index * 1000);
        });
    }

    showAIMetrics() {
        console.log('📊 Displaying AI Metrics Dashboard');
        // Could implement a modal or update analytics section
    }

    optimizeWithAI() {
        console.log('🤖 AI Optimization in progress...');
        
        // Simulate AI optimization
        const optimizationSteps = [
            'Analyzing code patterns...',
            'Optimizing dependencies...',
            'Applying ML recommendations...',
            'Optimization complete!'
        ];
        
        optimizationSteps.forEach((step, index) => {
            setTimeout(() => {
                console.log(`   ${step}`);
            }, index * 800);
        });
    }

    setupAnalytics() {
        // Setup chart visualizations
        this.setupPerformanceChart();
        this.setupSecurityRadar();
        this.updateAIInsights();
    }

    setupPerformanceChart() {
        const canvas = document.getElementById('performance-chart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Generate sample data
        const data = Array.from({ length: 24 }, (_, i) => ({
            time: i,
            value: 80 + Math.random() * 20 + Math.sin(i * 0.5) * 10
        }));

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw grid
        ctx.strokeStyle = 'rgba(102, 126, 234, 0.1)';
        ctx.lineWidth = 1;
        
        for (let i = 0; i <= 10; i++) {
            const y = (height / 10) * i;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        // Draw chart line
        ctx.strokeStyle = '#667eea';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        data.forEach((point, index) => {
            const x = (width / (data.length - 1)) * index;
            const y = height - (point.value / 100) * height;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        
        ctx.stroke();

        // Add gradient fill
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, 'rgba(102, 126, 234, 0.3)');
        gradient.addColorStop(1, 'rgba(102, 126, 234, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();
    }

    setupSecurityRadar() {
        const canvas = document.getElementById('security-radar');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) - 20;

        // Security metrics
        const metrics = [
            { label: 'Vulnerability Scan', value: 0.95 },
            { label: 'Access Control', value: 0.98 },
            { label: 'Data Protection', value: 0.92 },
            { label: 'Network Security', value: 0.89 },
            { label: 'Compliance', value: 1.0 },
            { label: 'Monitoring', value: 0.94 }
        ];

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw radar background
        for (let i = 1; i <= 5; i++) {
            ctx.strokeStyle = 'rgba(102, 126, 234, 0.1)';
            ctx.beginPath();
            ctx.arc(centerX, centerY, (radius / 5) * i, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Draw axes
        metrics.forEach((_, index) => {
            const angle = (Math.PI * 2 / metrics.length) * index - Math.PI / 2;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;
            
            ctx.strokeStyle = 'rgba(102, 126, 234, 0.2)';
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();
        });

        // Draw data polygon
        ctx.strokeStyle = '#667eea';
        ctx.fillStyle = 'rgba(102, 126, 234, 0.2)';
        ctx.lineWidth = 2;
        ctx.beginPath();

        metrics.forEach((metric, index) => {
            const angle = (Math.PI * 2 / metrics.length) * index - Math.PI / 2;
            const x = centerX + Math.cos(angle) * radius * metric.value;
            const y = centerY + Math.sin(angle) * radius * metric.value;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });

        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Draw data points
        metrics.forEach((metric, index) => {
            const angle = (Math.PI * 2 / metrics.length) * index - Math.PI / 2;
            const x = centerX + Math.cos(angle) * radius * metric.value;
            const y = centerY + Math.sin(angle) * radius * metric.value;
            
            ctx.fillStyle = '#667eea';
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    updateAIInsights() {
        // Simulate real-time AI insights
        const insights = [
            {
                type: 'success',
                title: 'Optimal Performance Detected',
                text: 'Neural network analysis indicates 15% improvement in build efficiency over the last 7 days.'
            },
            {
                type: 'warning',
                title: 'Resource Optimization Opportunity',
                text: 'AI recommends consolidating 3 microservices to reduce memory usage by 23%.'
            },
            {
                type: 'info',
                title: 'Predictive Scaling Alert',
                text: 'ML models predict 40% traffic increase in next 2 hours. Auto-scaling recommended.'
            }
        ];

        const insightCards = document.querySelectorAll('.insight-card');
        
        insightCards.forEach((card, index) => {
            if (insights[index]) {
                const insight = insights[index];
                const title = card.querySelector('.insight-title');
                const text = card.querySelector('.insight-text');
                
                if (title) title.textContent = insight.title;
                if (text) text.textContent = insight.text;
            }
        });
    }

    setupScrollEffects() {
        // Parallax and reveal animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll(
            '.analytics-card, .insight-card, .pipeline-stage, .hero-stats .stat-item'
        );

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });

        // Header background on scroll
        const header = document.querySelector('.ultra-header');
        if (header) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const opacity = Math.min(scrolled / 100, 0.95);
                header.style.background = `rgba(10, 10, 15, ${opacity})`;
            });
        }
    }

    setupAIAssistant() {
        const aiAssistant = document.getElementById('ai-assistant');
        
        if (aiAssistant) {
            aiAssistant.addEventListener('click', () => {
                this.activateAIAssistant();
            });
        }
    }

    activateAIAssistant() {
        console.log('🤖 AI Assistant activated');
        
        // Simulate AI interaction
        const responses = [
            'Hello! I\'m your AI DevOps assistant. How can I help optimize your pipeline today?',
            'I notice your build times have improved by 23% this week. Great work!',
            'Would you like me to analyze your deployment patterns for optimization opportunities?',
            'I can help you set up predictive scaling based on your traffic patterns.'
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        // Could implement a chat interface here
        console.log(`AI Assistant: ${randomResponse}`);
    }

    async startAnimations() {
        // Start continuous animations
        this.animateNeuralNetwork();
        this.updateMetrics();
    }

    animateNeuralNetwork() {
        const animate = () => {
            this.renderNeuralNetwork();
            requestAnimationFrame(animate);
        };
        
        animate();
    }

    updateMetrics() {
        // Simulate real-time metric updates
        setInterval(() => {
            // Slightly vary metrics to simulate real-time data
            this.aiMetrics.accuracy += (Math.random() - 0.5) * 0.1;
            this.aiMetrics.responseTime += (Math.random() - 0.5) * 0.1;
            
            // Keep within realistic bounds
            this.aiMetrics.accuracy = Math.max(95, Math.min(99.9, this.aiMetrics.accuracy));
            this.aiMetrics.responseTime = Math.max(1, Math.min(5, this.aiMetrics.responseTime));
            
            // Update UI elements if they exist
            const accuracyElement = document.querySelector('[data-metric="accuracy"]');
            const responseElement = document.querySelector('[data-metric="response"]');
            
            if (accuracyElement) {
                accuracyElement.textContent = `${this.aiMetrics.accuracy.toFixed(1)}%`;
            }
            
            if (responseElement) {
                responseElement.textContent = `${this.aiMetrics.responseTime.toFixed(1)}ms`;
            }
        }, 5000);
    }

    // Utility methods
    logNeuralActivity(message) {
        console.log(`🧠 Neural Engine: ${message}`);
    }

    reportPerformanceMetrics() {
        return {
            isInitialized: this.isInitialized,
            theme: this.theme,
            metrics: this.aiMetrics,
            neuralNodesCount: this.neuralNetwork?.nodes?.length || 0,
            quantumParticlesCount: this.quantumParticles.length
        };
    }
}

/* ========================================= */
/* UTILITY FUNCTIONS */
/* ========================================= */

// Advanced easing functions
const Easing = {
    easeOutQuart: t => 1 - Math.pow(1 - t, 4),
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    easeOutBack: t => {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    }
};

// Performance monitoring
const PerformanceMonitor = {
    startTime: Date.now(),
    
    mark(label) {
        console.log(`⚡ Performance: ${label} - ${Date.now() - this.startTime}ms`);
    },
    
    measureFPS() {
        let lastTime = performance.now();
        let frames = 0;
        
        function countFrames(currentTime) {
            frames++;
            
            if (currentTime >= lastTime + 1000) {
                console.log(`📊 FPS: ${Math.round(frames * 1000 / (currentTime - lastTime))}`);
                frames = 0;
                lastTime = currentTime;
            }
            
            requestAnimationFrame(countFrames);
        }
        
        requestAnimationFrame(countFrames);
    }
};

// Enhanced console styling for development
const DevConsole = {
    styles: {
        success: 'color: #00f5a0; font-weight: bold;',
        error: 'color: #ff6b6b; font-weight: bold;',
        info: 'color: #4ecdc4; font-weight: bold;',
        neural: 'color: #667eea; font-weight: bold;',
        quantum: 'color: #f093fb; font-weight: bold;'
    },
    
    log(message, type = 'info') {
        console.log(`%c${message}`, this.styles[type] || this.styles.info);
    }
};

/* ========================================= */
/* INITIALIZATION */
/* ========================================= */

// Initialize the Ultra Pro Neural Engine
let ultraProEngine;

// Wait for critical resources to load
window.addEventListener('load', () => {
    PerformanceMonitor.mark('Page Load Complete');
    
    // Initialize with slight delay to ensure all resources are ready
    setTimeout(() => {
        ultraProEngine = new UltraProNeuralEngine();
        
        // Enable performance monitoring in development
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            PerformanceMonitor.measureFPS();
            
            // Expose engine to global scope for debugging
            window.ultraProEngine = ultraProEngine;
            
            DevConsole.log('🛠️ Development mode: Ultra Pro Engine exposed to window.ultraProEngine', 'neural');
        }
    }, 100);
});

// Handle window resize for neural network canvas
window.addEventListener('resize', () => {
    if (ultraProEngine && ultraProEngine.neuralNetwork) {
        const canvas = ultraProEngine.neuralNetwork.canvas;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ultraProEngine.updateNeuralConnections();
    }
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        DevConsole.log('⏸️ Page hidden - Neural Engine paused', 'info');
    } else {
        DevConsole.log('▶️ Page visible - Neural Engine resumed', 'success');
    }
});

// Add CSS for fadeIn animation
const fadeInKeyframes = `
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
`;

const style = document.createElement('style');
style.textContent = fadeInKeyframes;
document.head.appendChild(style);

DevConsole.log('🚀 Ultra Pro Neural JavaScript Engine loaded successfully', 'success');
