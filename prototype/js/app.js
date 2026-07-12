/*
 * SharePoint Management Platform - Dashboard JavaScript v1.0
 * Vanilla ES6+ JavaScript - No dependencies
 * Progressive Enhancement
 * Last Updated: January 24, 2025
 */

// ========================================
// 1. UTILITY FUNCTIONS
// ========================================

/**
 * Get preferred theme from localStorage or system preference
 */
const getPreferredTheme = () => {
  const stored = localStorage.getItem('theme');
  if (stored) {
    return stored;
  }

  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
};

/**
 * Set theme and update localStorage
 */
const setTheme = (theme) => {
  const root = document.documentElement;
  const isDark = theme === 'dark';

  if (isDark) {
    root.classList.add('dark-theme');
  } else {
    root.classList.remove('dark-theme');
  }

  localStorage.setItem('theme', theme);
  updateThemeToggleIcon();
};

/**
 * Update theme toggle button icon
 */
const updateThemeToggleIcon = () => {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  const isDark = document.documentElement.classList.contains('dark-theme');
  const icon = themeToggle.querySelector('i');

  if (isDark) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
};

/**
 * Check if element is in viewport
 */
const isInViewport = (element) => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Debounce function for performance
 */
const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// ========================================
// 2. SIDEBAR INITIALIZATION & EVENTS
// ========================================

/**
 * Initialize sidebar functionality
 */
const initSidebar = () => {
  const openBtn = document.getElementById('openSidebarBtn');
  const closeBtn = document.getElementById('closeSidebarBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const appWrapper = document.querySelector('.app-wrapper');

  if (!openBtn || !sidebar) return;

  // Open sidebar (mobile)
  openBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    appWrapper.classList.add('sidebar-open');
  });

  // Close sidebar (mobile)
  const closeSidebar = () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    appWrapper.classList.remove('sidebar-open');
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
  }

  // Close sidebar when clicking overlay
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // Close sidebar on navigation item click (mobile)
  const navLinks = sidebar.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeSidebar();
      }
    });
  });

  // Handle window resize
  window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768) {
      closeSidebar();
    }
  }, 250));
};

/**
 * Initialize active nav item highlighting
 */
const initNavigation = () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const navItem = link.closest('.nav-item');
    if (!navItem) return;

    // Remove active class from all items
    navItem.classList.remove('active');

    // Add active class to current or first item
    if (currentPath.includes(link.getAttribute('href')) || navLinks.indexOf(link) === 0) {
      navItem.classList.add('active');
    }
  });
};

// ========================================
// 3. THEME TOGGLE FUNCTIONALITY
// ========================================

/**
 * Initialize theme toggle
 */
const initThemeToggle = () => {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  // Set initial theme
  const preferredTheme = getPreferredTheme();
  setTheme(preferredTheme);

  // Toggle theme on click
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark-theme');
    const newTheme = isDark ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // Listen for system theme changes
  if (window.matchMedia) {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addEventListener('change', (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
    });
  }
};

// ========================================
// 4. LOGIN FORM HANDLING
// ========================================

/**
 * Initialize login form
 */
const initLoginForm = () => {
  const loginForm = document.getElementById('loginForm');
  const loginModal = document.getElementById('loginModal');
  const appContainer = document.getElementById('appContainer');

  if (!loginForm) return;

  // Handle form submission
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Demo validation
    if (email && password) {
      // Hide login modal
      loginModal.style.display = 'none';

      // Show app container
      appContainer.style.display = 'flex';

      // Store user info (demo only - would be real auth in production)
      localStorage.setItem('currentUser', email);

      // Initialize app after login
      initAppAfterLogin();
    }
  });
};

/**
 * Initialize app after successful login
 */
const initAppAfterLogin = () => {
  initSidebar();
  initNavigation();
  initThemeToggle();
  initPasswordToggle();
  initAlertDismiss();
  initSearchInput();
  initUserMenu();
};

// ========================================
// 5. PASSWORD VISIBILITY TOGGLE
// ========================================

/**
 * Initialize password visibility toggle
 */
const initPasswordToggle = () => {
  const toggleButtons = document.querySelectorAll('.toggle-password');

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const passwordInput = btn.closest('.password-field').querySelector('input');
      if (!passwordInput) return;

      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';

      const icon = btn.querySelector('i');
      if (isPassword) {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    });
  });
};

// ========================================
// 6. ALERT DISMISSAL
// ========================================

/**
 * Initialize alert close buttons
 */
const initAlertDismiss = () => {
  const alerts = document.querySelectorAll('.alert');

  alerts.forEach(alert => {
    const closeBtn = alert.querySelector('.alert-close');
    if (!closeBtn) return;

    closeBtn.addEventListener('click', () => {
      alert.style.animation = 'slideOut 150ms ease-in-out forwards';
      setTimeout(() => {
        alert.remove();
      }, 150);
    });
  });
};

// ========================================
// 7. SEARCH INPUT HANDLING
// ========================================

/**
 * Initialize search input
 */
const initSearchInput = () => {
  const searchInput = document.querySelector('.search-input');
  if (!searchInput) return;

  // Handle enter key
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        performSearch(query);
      }
    }
  });
};

/**
 * Perform search (placeholder for future implementation)
 */
const performSearch = (query) => {
  console.log('Searching for:', query);
  // TODO: Implement real search functionality
};

// ========================================
// 8. USER MENU DROPDOWN
// ========================================

/**
 * Initialize user menu dropdown
 */
const initUserMenu = () => {
  const userProfileBtn = document.querySelector('.user-profile-btn');
  if (!userProfileBtn) return;

  // Handle dropdown toggle
  userProfileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const menu = userProfileBtn.closest('.user-menu').querySelector('.dropdown-menu');
    if (menu) {
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const userMenu = document.querySelector('.user-menu');
    if (userMenu && !userMenu.contains(e.target)) {
      const menu = userMenu.querySelector('.dropdown-menu');
      if (menu) {
        menu.style.display = 'none';
      }
    }
  });

  // Handle sign out
  const signOutBtn = document.querySelector('.dropdown-item[href*="sign-out"], .dropdown-item:last-child');
  if (signOutBtn && signOutBtn.textContent.includes('Sign Out')) {
    signOutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('currentUser');
      location.reload();
    });
  }
};

// ========================================
// 9. QUICK ACTION BUTTONS
// ========================================

/**
 * Initialize quick action buttons
 */
const initQuickActions = () => {
  const quickActionBtns = document.querySelectorAll('.quick-action-btn');

  quickActionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.textContent.trim();
      console.log('Quick action clicked:', action);
      // TODO: Implement actual quick action handlers
      showNotification(`${action} - Coming soon`, 'info');
    });
  });
};

// ========================================
// 10. NOTIFICATION SYSTEM (DEMO)
// ========================================

/**
 * Show notification (temporary)
 */
const showNotification = (message, type = 'info') => {
  // This would be replaced with a proper notification system
  console.log(`[${type.toUpperCase()}] ${message}`);
};

// ========================================
// 11. SMOOTH SCROLL & LAZY LOADING
// ========================================

/**
 * Initialize smooth scrolling
 */
const initSmoothScroll = () => {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a[href^="#"]');
    if (!target) return;

    const href = target.getAttribute('href');
    if (href === '#') {
      e.preventDefault();
      return;
    }

    const section = document.querySelector(href);
    if (section) {
      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
};

// ========================================
// 12. ACCESSIBILITY ENHANCEMENTS
// ========================================

/**
 * Initialize keyboard navigation
 */
const initKeyboardNavigation = () => {
  document.addEventListener('keydown', (e) => {
    // Escape key closes modals/dropdowns
    if (e.key === 'Escape') {
      // Close any open dropdowns
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
      });

      // Close sidebar on mobile
      if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
          sidebar.classList.remove('open');
          document.getElementById('sidebarOverlay').classList.remove('open');
        }
      }
    }

    // Tab key for focus management (browser handles this by default)
  });
};

// ========================================
// 13. PERFORMANCE MONITORING
// ========================================

/**
 * Log performance metrics
 */
const logPerformanceMetrics = () => {
  if (window.performance && window.performance.timing) {
    const timing = window.performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    console.log(`Page load time: ${loadTime}ms`);
  }
};

// ========================================
// 14. ERROR HANDLING
// ========================================

/**
 * Global error handler
 */
window.addEventListener('error', (event) => {
  console.error('Error:', event.message);
  // In production, this would send to error tracking service
});

// ========================================
// 15. APP INITIALIZATION
// ========================================

/**
 * Initialize app on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Check if user is already logged in (demo)
    const currentUser = localStorage.getItem('currentUser');
    const loginModal = document.getElementById('loginModal');
    const appContainer = document.getElementById('appContainer');

    if (currentUser) {
      // User already logged in - show app
      if (loginModal) loginModal.style.display = 'none';
      if (appContainer) appContainer.style.display = 'flex';
      initAppAfterLogin();
    } else {
      // Show login screen
      if (loginModal) loginModal.style.display = 'flex';
      if (appContainer) appContainer.style.display = 'none';
      initLoginForm();
    }

    // Initialize common features
    initSmoothScroll();
    initKeyboardNavigation();
    initQuickActions();

    // Log performance
    logPerformanceMetrics();

    console.log('SharePoint Management Platform - Dashboard initialized');
  } catch (error) {
    console.error('Failed to initialize app:', error);
  }
});

// ========================================
// 16. WINDOW LOAD EVENT
// ========================================

/**
 * After all resources loaded
 */
window.addEventListener('load', () => {
  // Ensure theme is applied after all resources loaded
  const preferredTheme = getPreferredTheme();
  setTheme(preferredTheme);

  // Remove loading indicator if present
  const loader = document.querySelector('.loading-indicator');
  if (loader) {
    loader.remove();
  }
});

// ========================================
// 17. EXPORT FOR TESTING (Optional)
// ========================================

// If using modules, export functions for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getPreferredTheme,
    setTheme,
    initSidebar,
    initNavigation,
    initThemeToggle,
    initLoginForm,
    initPasswordToggle,
    initAlertDismiss,
    initSearchInput,
    initUserMenu,
    initQuickActions,
    performSearch,
    showNotification,
  };
}

// ========================================
// END OF JAVASCRIPT
// ========================================
