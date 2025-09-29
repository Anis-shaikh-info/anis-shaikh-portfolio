// Cyberpunk Portfolio JavaScript with System Status & Architecture
document.addEventListener('DOMContentLoaded', function() {
    // Application data from the provided JSON
    const appData = {
        personal_info: {
            name: "Anis Shaikh",
            title: "Cloud Engineer | DevOps Specialist",
            email: "shaikhanis1996@gmail.com",
            phone: "+918830337542",
            linkedin: "www.linkedin.com/in/anis-shaikh-5a775b268"
        },
        system_metrics: {
            uptime: "99.9%",
            response_time: "178ms",
            cpu_usage: 23,
            memory_usage: 67,
            network_usage: 45,
            cost_savings: "35%",
            active_deployments: 12,
            incidents_resolved: 147,
            automation_coverage: "92%"
        },
        aws_services: [
            {name: "EC2", status: "operational", uptime: "99.9%"},
            {name: "EKS", status: "operational", uptime: "99.8%"},
            {name: "RDS", status: "operational", uptime: "99.9%"},
            {name: "S3", status: "operational", uptime: "100%"},
            {name: "CloudFront", status: "operational", uptime: "99.9%"},
            {name: "Lambda", status: "operational", uptime: "99.9%"},
            {name: "VPC", status: "operational", uptime: "100%"},
            {name: "IAM", status: "operational", uptime: "100%"}
        ],
        skills: {
            "Cloud Platforms": {
                "AWS": 90,
                "Multi-cloud Architecture": 85
            },
            "Automation & IaC": {
                "Terraform": 90,
                "CloudFormation": 85,
                "Jenkins": 80,
                "GitHub Actions": 85,
                "Python": 85,
                "Bash": 90
            },
            "Containers & Orchestration": {
                "Docker": 90,
                "Kubernetes (EKS)": 85,
                "Helm": 75
            },
            "Monitoring & Observability": {
                "Grafana": 85,
                "Prometheus": 85,
                "New Relic": 80,
                "CloudWatch": 85
            },
            "Security & Networking": {
                "Linux Administration": 90,
                "SSL/TLS": 80,
                "Security Groups": 85,
                "IAM": 85,
                "VPC": 85
            }
        }
    };

    // Initialize all components
    initLoadingScreen();
    initNavigation();
    initTypingAnimation();
    initSystemStatus();
    initAWSServices();
    initSkillsMatrix();
    initScrollAnimations();
    initMobileNavigation();
    initPerformanceMetrics();
    initArchitectureInteractions();
});

// Loading Screen Animation
function initLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 3000);
}

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 90;
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                closeMobileMenu();
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        let currentSection = '';
        const scrollPosition = window.pageYOffset + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// Mobile Navigation
function initMobileNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

function closeMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Typing Animation
function initTypingAnimation() {
    const typingElement = document.getElementById('typing');
    if (!typingElement) return;

    const texts = [
        'Cloud Engineer | DevOps Specialist',
        'AWS Solutions Architect',
        'Kubernetes Expert',
        'Infrastructure Automation Specialist'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(typeWriter, typeSpeed);
    }

    setTimeout(typeWriter, 1000);
}

// System Status Dashboard
function initSystemStatus() {
    updateSystemMetrics();
    // Update metrics every 5 seconds for demonstration
    setInterval(updateSystemMetrics, 5000);
}

function updateSystemMetrics() {
    const appData = {
        system_metrics: {
            uptime: "99.9%",
            response_time: "178ms",
            cpu_usage: 23,
            memory_usage: 67,
            network_usage: 45,
            cost_savings: "35%",
            active_deployments: 12
        }
    };

    // Update uptime
    const uptimeEl = document.getElementById('uptime');
    if (uptimeEl) uptimeEl.textContent = appData.system_metrics.uptime;

    // Update response time with slight variation for realism
    const responseTimeEl = document.getElementById('response-time');
    if (responseTimeEl) {
        const baseTime = 178;
        const variation = Math.floor(Math.random() * 20) - 10;
        responseTimeEl.textContent = `${baseTime + variation}ms`;
    }

    // Update deployments with slight variation
    const deploymentsEl = document.getElementById('deployments');
    if (deploymentsEl) {
        const baseDeployments = 12;
        const variation = Math.floor(Math.random() * 3) - 1;
        deploymentsEl.textContent = Math.max(1, baseDeployments + variation);
    }

    // Update cost savings
    const costSavingsEl = document.getElementById('cost-savings');
    if (costSavingsEl) costSavingsEl.textContent = appData.system_metrics.cost_savings;
}

// Initialize Performance Metrics
function initPerformanceMetrics() {
    updatePerformanceMetrics();
    // Update every 3 seconds for live feel
    setInterval(updatePerformanceMetrics, 3000);
}

function updatePerformanceMetrics() {
    // CPU Usage
    updateMetric('cpu', 23, 10);
    
    // Memory Usage  
    updateMetric('memory', 67, 15);
    
    // Network Usage
    updateMetric('network', 45, 20);
}

function updateMetric(type, baseValue, variation) {
    const progressEl = document.getElementById(`${type}-progress`);
    const valueEl = document.getElementById(`${type}-value`);
    
    if (progressEl && valueEl) {
        const newValue = Math.max(0, Math.min(100, baseValue + Math.floor(Math.random() * variation * 2) - variation));
        progressEl.style.width = `${newValue}%`;
        valueEl.textContent = `${newValue}%`;
        
        // Color coding based on usage levels
        let color = 'linear-gradient(90deg, var(--cyber-primary), var(--cyber-accent))';
        if (newValue > 80) {
            color = 'linear-gradient(90deg, var(--cyber-danger), #ff6b6b)';
        } else if (newValue > 60) {
            color = 'linear-gradient(90deg, var(--cyber-warning), #ffd700)';
        }
        progressEl.style.background = color;
    }
}

// AWS Services Status
function initAWSServices() {
    const servicesGrid = document.getElementById('aws-services-grid');
    if (!servicesGrid) return;

    const awsServices = [
        {name: "EC2", status: "operational", uptime: "99.9%"},
        {name: "EKS", status: "operational", uptime: "99.8%"},
        {name: "RDS", status: "operational", uptime: "99.9%"},
        {name: "S3", status: "operational", uptime: "100%"},
        {name: "CloudFront", status: "operational", uptime: "99.9%"},
        {name: "Lambda", status: "operational", uptime: "99.9%"},
        {name: "VPC", status: "operational", uptime: "100%"},
        {name: "IAM", status: "operational", uptime: "100%"}
    ];

    servicesGrid.innerHTML = '';
    
    awsServices.forEach((service, index) => {
        const serviceEl = document.createElement('div');
        serviceEl.className = 'service-item';
        serviceEl.style.animationDelay = `${index * 0.1}s`;
        
        serviceEl.innerHTML = `
            <div class="service-name">${service.name}</div>
            <div class="service-status ${service.status}">${service.status}</div>
            <div class="service-uptime">${service.uptime}</div>
        `;
        
        servicesGrid.appendChild(serviceEl);
    });
}

// Skills Matrix - Fixed Implementation
function initSkillsMatrix() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) {
        console.error('Skills grid element not found');
        return;
    }

    const skills = {
        "Cloud Platforms": {
            "AWS": 90,
            "Multi-cloud Architecture": 85
        },
        "Automation & IaC": {
            "Terraform": 90,
            "CloudFormation": 85,
            "Jenkins": 80,
            "GitHub Actions": 85,
            "Python": 85,
            "Bash": 90
        },
        "Containers & Orchestration": {
            "Docker": 90,
            "Kubernetes (EKS)": 85,
            "Helm": 75
        },
        "Monitoring & Observability": {
            "Grafana": 85,
            "Prometheus": 85,
            "New Relic": 80,
            "CloudWatch": 85
        },
        "Security & Networking": {
            "Linux Administration": 90,
            "SSL/TLS": 80,
            "Security Groups": 85,
            "IAM": 85,
            "VPC": 85
        }
    };

    // Clear existing content
    skillsGrid.innerHTML = '';

    Object.entries(skills).forEach(([category, skillSet], categoryIndex) => {
        const categoryEl = document.createElement('div');
        categoryEl.className = 'skill-category';
        categoryEl.style.animationDelay = `${categoryIndex * 0.1}s`;
        
        let skillsHTML = '';
        Object.entries(skillSet).forEach(([skill, level]) => {
            skillsHTML += `
                <div class="skill-progress">
                    <div class="skill-name">
                        <span>${skill}</span>
                        <span>${level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-fill" data-width="${level}%"></div>
                    </div>
                </div>
            `;
        });

        categoryEl.innerHTML = `
            <h4>${category}</h4>
            ${skillsHTML}
        `;
        
        skillsGrid.appendChild(categoryEl);
    });

    console.log('Skills matrix initialized with', Object.keys(skills).length, 'categories');
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars when they come into view
                if (entry.target.classList.contains('skill-category')) {
                    const skillFills = entry.target.querySelectorAll('.skill-fill');
                    skillFills.forEach((fill, index) => {
                        setTimeout(() => {
                            fill.style.width = fill.dataset.width;
                        }, 300 + (index * 100));
                    });
                }
            }
        });
    }, observerOptions);

    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(item);
    });

    // Re-observe skill categories after they're created
    setTimeout(() => {
        const skillCategories = document.querySelectorAll('.skill-category');
        skillCategories.forEach((category, index) => {
            category.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(category);
        });
    }, 100);
}

// Architecture Interactions
function initArchitectureInteractions() {
    const archComponents = document.querySelectorAll('.arch-component');
    
    archComponents.forEach(component => {
        component.addEventListener('click', function() {
            // Show component details (simplified tooltip)
            showComponentTooltip(this);
        });
    });

    // Tech items hover effects
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 0 15px var(--cyber-glow)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

function showComponentTooltip(element) {
    // Remove existing tooltips
    const existingTooltips = document.querySelectorAll('.component-tooltip');
    existingTooltips.forEach(tooltip => tooltip.remove());

    const tooltip = document.createElement('div');
    tooltip.className = 'component-tooltip';
    tooltip.style.cssText = `
        position: absolute;
        background: var(--cyber-surface);
        border: 1px solid var(--cyber-primary);
        border-radius: 6px;
        padding: 10px 15px;
        color: var(--cyber-text);
        font-family: var(--font-family-mono);
        font-size: 12px;
        z-index: 1000;
        box-shadow: 0 0 20px var(--cyber-glow);
        pointer-events: none;
        transform: translateY(-100%);
        margin-top: -10px;
    `;

    const componentName = element.textContent;
    const descriptions = {
        'EC2': 'Elastic Compute Cloud - Scalable virtual servers',
        'EKS': 'Elastic Kubernetes Service - Managed Kubernetes',
        'RDS': 'Relational Database Service - Managed databases',
        'S3': 'Simple Storage Service - Object storage',
        'CloudFront': 'Content Delivery Network - Global edge locations',
        'Lambda': 'Serverless compute service',
        'VPC': 'Virtual Private Cloud - Network isolation',
        'IAM': 'Identity and Access Management',
        'Terraform': 'Infrastructure as Code tool',
        'Grafana': 'Monitoring and observability platform',
        'Prometheus': 'Metrics collection and alerting',
        'Docker': 'Container runtime platform',
        'Kubernetes': 'Container orchestration system'
    };

    tooltip.textContent = descriptions[componentName] || `${componentName} - Cloud service component`;
    
    element.style.position = 'relative';
    element.appendChild(tooltip);

    // Remove tooltip after 3 seconds
    setTimeout(() => {
        tooltip.remove();
    }, 3000);
}

// Additional Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Add glitch effect to hero name periodically
    setInterval(() => {
        const glitchElement = document.querySelector('.glitch');
        if (glitchElement && Math.random() > 0.7) {
            glitchElement.style.animation = 'none';
            setTimeout(() => {
                glitchElement.style.animation = '';
            }, 100);
        }
    }, 5000);

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.3;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(0, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple animation
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize contact link interactions
    const contactLinks = document.querySelectorAll('.contact-value');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href.startsWith('mailto:') || this.href.startsWith('tel:')) {
                // Add visual feedback for email/phone clicks
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });

    // Service item click effects
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            // Toggle expanded state
            this.classList.toggle('expanded');
            
            if (this.classList.contains('expanded')) {
                this.style.transform = 'scale(1.05)';
                this.style.zIndex = '10';
            } else {
                this.style.transform = 'scale(1)';
                this.style.zIndex = '1';
            }
        });
    });

    // Add scroll-to-top button
    let scrollTopBtn = null;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 500) {
            if (!scrollTopBtn) {
                scrollTopBtn = document.createElement('button');
                scrollTopBtn.innerHTML = '↑';
                scrollTopBtn.style.cssText = `
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: var(--cyber-primary);
                    color: var(--cyber-dark);
                    border: 2px solid var(--cyber-primary);
                    cursor: pointer;
                    font-size: 18px;
                    font-weight: bold;
                    z-index: 1000;
                    transition: all 0.3s ease;
                    box-shadow: 0 0 20px var(--cyber-glow);
                    font-family: var(--font-family-mono);
                `;
                
                scrollTopBtn.addEventListener('click', () => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
                
                scrollTopBtn.addEventListener('mouseenter', () => {
                    scrollTopBtn.style.transform = 'scale(1.1)';
                    scrollTopBtn.style.boxShadow = '0 0 30px var(--cyber-glow)';
                });
                
                scrollTopBtn.addEventListener('mouseleave', () => {
                    scrollTopBtn.style.transform = 'scale(1)';
                    scrollTopBtn.style.boxShadow = '0 0 20px var(--cyber-glow)';
                });
                
                document.body.appendChild(scrollTopBtn);
            }
        } else if (scrollTopBtn) {
            scrollTopBtn.remove();
            scrollTopBtn = null;
        }
    });

    console.log('🚀 Cyberpunk Portfolio Initialized Successfully');
    console.log('📊 System Status: ONLINE');
    console.log('🔧 All modules loaded and operational');
});