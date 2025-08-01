/**
 * Enterprise DevOps Platform - Clean JavaScript
 * Professional, motion-free interface with theme switching
 */

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('themeToggle');
        this.init();
    }
    
    init() {
        this.setTheme(this.currentTheme);
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }
    
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
        this.updateThemeIcon();
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
    
    updateThemeIcon() {
        if (this.themeToggle) {
            const icon = this.themeToggle.querySelector('i');
            if (icon) {
                icon.className = this.currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
            }
        }
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section[id]');
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupScrollSpy();
    }
    
    setupEventListeners() {
        // Mobile menu toggle
        if (this.navToggle && this.navMenu) {
            this.navToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }
        
        // Smooth scroll for navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    this.scrollToSection(href.substring(1));
                    this.closeMobileMenu();
                }
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.navMenu && this.navMenu.classList.contains('active')) {
                if (!this.navMenu.contains(e.target) && !this.navToggle.contains(e.target)) {
                    this.closeMobileMenu();
                }
            }
        });
        
        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.navMenu && this.navMenu.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });
    }
    
    toggleMobileMenu() {
        if (this.navMenu) {
            this.navMenu.classList.toggle('active');
            this.updateToggleButton();
        }
    }
    
    closeMobileMenu() {
        if (this.navMenu) {
            this.navMenu.classList.remove('active');
            this.updateToggleButton();
        }
    }
    
    updateToggleButton() {
        if (this.navToggle) {
            const isActive = this.navMenu && this.navMenu.classList.contains('active');
            this.navToggle.setAttribute('aria-expanded', isActive);
        }
    }
    
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = this.navbar ? this.navbar.offsetHeight : 64;
            const offsetTop = section.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    setupScrollSpy() {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.updateActiveNavLink(entry.target.id);
                }
            });
        }, observerOptions);
        
        this.sections.forEach(section => {
            observer.observe(section);
        });
    }
    
    updateActiveNavLink(activeId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('active');
            }
        });
    }
}

// Responsive Enhancement Manager
class ResponsiveManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.handleViewportChanges();
        this.optimizeForDevice();
        this.setupAccessibility();
    }
    
    handleViewportChanges() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.optimizeForDevice();
            }, 250);
        });
        
        // Handle orientation change
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.optimizeForDevice();
            }, 100);
        });
    }
    
    optimizeForDevice() {
        const viewport = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        
        // Add device-specific classes
        document.body.classList.remove('mobile-device', 'tablet-device', 'desktop-device');
        
        if (viewport.width <= 768) {
            document.body.classList.add('mobile-device');
        } else if (viewport.width <= 1024) {
            document.body.classList.add('tablet-device');
        } else {
            document.body.classList.add('desktop-device');
        }
        
        // Optimize for touch devices
        if ('ontouchstart' in window) {
            document.body.classList.add('touch-device');
        }
    }
    
    setupAccessibility() {
        // Enhanced keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
        
        // Improve focus visibility
        const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.classList.add('has-focus');
            });
            
            element.addEventListener('blur', function() {
                this.classList.remove('has-focus');
            });
        });
    }
}

// Pipeline Simulation Manager
class PipelineManager {
    constructor() {
        this.stages = document.querySelectorAll('.pipeline-stage');
        this.isRunning = false;
        this.init();
    }
    
    init() {
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        // Add click handler to restart pipeline
        const pipelineContainer = document.querySelector('.pipeline-container');
        if (pipelineContainer) {
            pipelineContainer.addEventListener('click', () => {
                if (!this.isRunning) {
                    this.simulatePipeline();
                }
            });
        }
    }
    
    async simulatePipeline() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        
        // Reset all stages
        this.stages.forEach(stage => {
            stage.classList.remove('active', 'running', 'pending');
            stage.classList.add('pending');
        });
        
        // Simulate each stage
        for (let i = 0; i < this.stages.length; i++) {
            const stage = this.stages[i];
            
            // Mark as running
            stage.classList.remove('pending');
            stage.classList.add('running');
            
            // Simulate processing time
            await this.delay(1000 + Math.random() * 2000);
            
            // Mark as completed
            stage.classList.remove('running');
            stage.classList.add('active');
        }
        
        this.isRunning = false;
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Metrics Animation Manager
class MetricsManager {
    constructor() {
        this.metricBars = document.querySelectorAll('.metric-progress');
        this.hasAnimated = false;
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
    }
    
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasAnimated) {
                    this.animateMetrics();
                    this.hasAnimated = true;
                }
            });
        }, { threshold: 0.5 });
        
        const metricsSection = document.querySelector('.metrics-section');
        if (metricsSection) {
            observer.observe(metricsSection);
        }
    }
    
    animateMetrics() {
        this.metricBars.forEach((bar, index) => {
            const targetWidth = bar.style.width || '0%';
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.transition = 'width 1.5s ease-out';
                bar.style.width = targetWidth;
            }, index * 200);
        });
    }
}

// Card Interaction Manager
class CardManager {
    constructor() {
        this.cards = document.querySelectorAll('.feature-card, .overview-card');
        this.init();
    }
    
    init() {
        this.setupCardEffects();
    }
    
    setupCardEffects() {
        this.cards.forEach(card => {
            // Add subtle hover effect
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
            
            // Add click effect
            card.addEventListener('click', () => {
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
            });
        });
    }
}

// Performance Monitor
class PerformanceManager {
    constructor() {
        this.init();
    }
    
    init() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    this.logPerformanceMetrics();
                }, 1000);
            });
        }
    }
    
    logPerformanceMetrics() {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
            const metrics = {
                'Load Time': Math.round(perfData.loadEventEnd - perfData.fetchStart) + 'ms',
                'DOM Ready': Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart) + 'ms',
                'First Contentful Paint': this.getFirstContentfulPaint()
            };
            
            console.log('🚀 Platform Performance Metrics:', metrics);
        }
    }
    
    getFirstContentfulPaint() {
        const paintEntries = performance.getEntriesByType('paint');
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        return fcp ? Math.round(fcp.startTime) + 'ms' : 'N/A';
    }
}

// Initialize all managers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core managers
    new ThemeManager();
    new NavigationManager();
    new ResponsiveManager();
    new PipelineManager();
    new MetricsManager();
    new CardManager();
    new PerformanceManager();
    
    // Add smooth button interactions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create subtle click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add form input enhancements
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement?.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement?.classList.remove('focused');
        });
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Alt + T for theme toggle
        if (e.altKey && e.key === 't') {
            e.preventDefault();
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.click();
            }
        }
        
        // Alt + M for mobile menu
        if (e.altKey && e.key === 'm') {
            e.preventDefault();
            const navToggle = document.getElementById('navToggle');
            if (navToggle) {
                navToggle.click();
            }
        }
    });
    
    console.log('🚀 Enterprise DevOps Platform Initialized');
    console.log('⚡ Theme System: Active');
    console.log('📱 Responsive Design: Optimized');
    console.log('♿ Accessibility: Enhanced');
});

// Handle page visibility changes for performance optimization
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause any background processes when tab is hidden
        console.log('🔄 Platform paused (tab hidden)');
    } else {
        // Resume processes when tab becomes visible
        console.log('🔄 Platform resumed (tab visible)');
    }
});

// Export for potential module usage
window.DevOpsPlatform = {
    ThemeManager,
    NavigationManager,
    ResponsiveManager,
    PipelineManager,
    MetricsManager,
    CardManager,
    PerformanceManager
};
