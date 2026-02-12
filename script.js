document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('.section');
    const searchInput = document.getElementById('searchInput');

    function showSection(targetId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        const activeLink = document.querySelector(`a[href="#${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
            
            const parentSubmenu = activeLink.closest('.submenu');
            if (parentSubmenu) {
                parentSubmenu.classList.add('active');
            }
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
            
            window.location.hash = targetId;
        });
    });

    if (window.location.hash) {
        const initialSection = window.location.hash.substring(1);
        showSection(initialSection);
    } else {
        showSection('introduccion');
    }

    window.addEventListener('hashchange', function() {
        if (window.location.hash) {
            const targetId = window.location.hash.substring(1);
            showSection(targetId);
        }
    });

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        const allEndpoints = document.querySelectorAll('.endpoint');
        const allSections = document.querySelectorAll('.section');
        
        if (searchTerm === '') {
            allEndpoints.forEach(endpoint => {
                endpoint.style.display = '';
            });
            return;
        }

        let foundInSection = {};
        
        allEndpoints.forEach(endpoint => {
            const method = endpoint.querySelector('.method')?.textContent.toLowerCase() || '';
            const path = endpoint.querySelector('.path')?.textContent.toLowerCase() || '';
            const body = endpoint.querySelector('.endpoint-body')?.textContent.toLowerCase() || '';
            
            const matches = method.includes(searchTerm) || 
                          path.includes(searchTerm) || 
                          body.includes(searchTerm);
            
            if (matches) {
                endpoint.style.display = '';
                const section = endpoint.closest('.section');
                if (section) {
                    foundInSection[section.id] = true;
                }
            } else {
                endpoint.style.display = 'none';
            }
        });

        allSections.forEach(section => {
            const hasVisibleEndpoints = foundInSection[section.id];
            const sectionTitle = section.querySelector('h1')?.textContent.toLowerCase() || '';
            
            if (hasVisibleEndpoints || sectionTitle.includes(searchTerm)) {
                section.style.display = 'block';
            } else if (searchTerm !== '') {
                section.style.display = 'none';
            }
        });
    });

    const submenuToggles = document.querySelectorAll('.nav-menu > li > a');
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            const parentLi = this.parentElement;
            const submenu = parentLi.querySelector('.submenu');
            
            if (submenu) {
                const isCurrentlyActive = submenu.classList.contains('active');
                
                document.querySelectorAll('.submenu').forEach(sm => {
                    sm.classList.remove('active');
                });
                
                if (!isCurrentlyActive) {
                    submenu.classList.add('active');
                }
            }
        });
    });

    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        block.addEventListener('click', function() {
            const code = this.querySelector('code, pre').textContent;
            
            navigator.clipboard.writeText(code).then(() => {
                const originalBg = this.style.backgroundColor;
                this.style.backgroundColor = 'rgba(0, 168, 107, 0.2)';
                
                setTimeout(() => {
                    this.style.backgroundColor = originalBg;
                }, 300);
            }).catch(err => {
                console.error('Error al copiar:', err);
            });
        });
        
        block.style.cursor = 'pointer';
        block.title = 'Clic para copiar';
    });

    document.querySelectorAll('.endpoint').forEach(endpoint => {
        endpoint.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--primary-color)';
        });
        
        endpoint.addEventListener('mouseleave', function() {
            this.style.borderColor = 'var(--border-color)';
        });
    });
});
