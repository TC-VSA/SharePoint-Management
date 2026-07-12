/*
 * SharePoint Management Platform - Site Management JavaScript v1.0
 * Vanilla ES6+ JavaScript - No dependencies
 * Progressive Enhancement
 * Last Updated: January 24, 2025
 */

// ========================================
// 1. MOCK DATA
// ========================================

const mockSites = [
  {
    id: 1,
    name: 'Marketing Team Site',
    owner: 'Alice Johnson',
    created: '2024-10-15',
    members: 8,
    status: 'active',
    description: 'Central hub for marketing team collaboration'
  },
  {
    id: 2,
    name: 'Sales Operations',
    owner: 'Bob Smith',
    created: '2024-09-22',
    members: 12,
    status: 'active',
    description: 'Sales team documents and processes'
  },
  {
    id: 3,
    name: 'HR Department',
    owner: 'Carol Davis',
    created: '2024-08-30',
    members: 5,
    status: 'active',
    description: 'Human Resources information and policies'
  },
  {
    id: 4,
    name: 'Finance Archive 2023',
    owner: 'Alice Johnson',
    created: '2023-12-01',
    members: 0,
    status: 'archived',
    description: 'Previous year financial records'
  },
  {
    id: 5,
    name: 'IT Support',
    owner: 'Bob Smith',
    created: '2024-07-10',
    members: 6,
    status: 'active',
    description: 'IT support and helpdesk documentation'
  },
  {
    id: 6,
    name: 'Legal Documents',
    owner: 'Carol Davis',
    created: '2024-06-05',
    members: 3,
    status: 'inactive',
    description: 'Legal contracts and agreements'
  },
  {
    id: 7,
    name: 'Product Development',
    owner: 'Alice Johnson',
    created: '2024-05-18',
    members: 15,
    status: 'active',
    description: 'Product roadmap and development tracking'
  },
  {
    id: 8,
    name: 'Training Materials',
    owner: 'Bob Smith',
    created: '2024-04-22',
    members: 10,
    status: 'active',
    description: 'Employee training and onboarding materials'
  },
  {
    id: 9,
    name: 'Compliance 2022',
    owner: 'Carol Davis',
    created: '2022-12-30',
    members: 0,
    status: 'archived',
    description: 'Historical compliance records'
  },
  {
    id: 10,
    name: 'Customer Support',
    owner: 'Alice Johnson',
    created: '2024-03-12',
    members: 7,
    status: 'active',
    description: 'Customer support resources'
  },
  {
    id: 11,
    name: 'Operations',
    owner: 'Bob Smith',
    created: '2024-02-28',
    members: 4,
    status: 'inactive',
    description: 'Day-to-day operations documentation'
  },
  {
    id: 12,
    name: 'Executive Board',
    owner: 'Carol Davis',
    created: '2024-01-15',
    members: 5,
    status: 'active',
    description: 'Executive team information and decisions'
  }
];

// ========================================
// 2. STATE MANAGEMENT
// ========================================

let sites = [...mockSites];
let currentFilter = 'all';
let currentPage = 1;
const itemsPerPage = 10;
let editingSiteId = null;
let deletingSiteId = null;

// ========================================
// 3. TABLE RENDERING
// ========================================

/**
 * Filter sites based on search and status
 */
const getFilteredSites = () => {
  const searchInput = document.getElementById('siteSearchInput');
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

  return sites.filter(site => {
    const matchesSearch = 
      site.name.toLowerCase().includes(searchTerm) ||
      site.owner.toLowerCase().includes(searchTerm);

    const matchesStatus = currentFilter === 'all' || site.status === currentFilter;

    return matchesSearch && matchesStatus;
  });
};

/**
 * Render sites table
 */
const renderSitesTable = () => {
  const filteredSites = getFilteredSites();
  const tbody = document.getElementById('sitesTableBody');

  if (!tbody) return;

  if (filteredSites.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 40px 16px; color: var(--color-text-secondary);">
          <i class="fas fa-inbox" style="font-size: 32px; margin-bottom: 12px; display: block; opacity: 0.5;"></i>
          No sites found matching your criteria.
        </td>
      </tr>
    `;
    updatePaginationInfo(0);
    return;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedSites = filteredSites.slice(startIndex, endIndex);

  tbody.innerHTML = paginatedSites.map(site => `
    <tr>
      <td><span class="site-name">${escapeHtml(site.name)}</span></td>
      <td><span class="site-owner">${escapeHtml(site.owner)}</span></td>
      <td><span class="site-created">${formatDate(site.created)}</span></td>
      <td>
        <div class="site-members">
          <span class="member-count">${site.members}</span>
        </div>
      </td>
      <td>
        <span class="status-badge status-${site.status}">
          <i class="fas fa-${getStatusIcon(site.status)}"></i>
          ${capitalizeText(site.status)}
        </span>
      </td>
      <td>
        <div class="actions-cell">
          <button class="action-btn" onclick="openEditModal(${site.id})" title="Edit" aria-label="Edit site">
            <i class="fas fa-edit"></i>
          </button>
          <button class="action-btn delete" onclick="openDeleteModal(${site.id})" title="Delete" aria-label="Delete site">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');

  updatePaginationInfo(filteredSites.length);
  updatePaginationButtons(filteredSites.length);
};

/**
 * Update pagination info text
 */
const updatePaginationInfo = (total) => {
  const info = document.getElementById('paginationInfo');
  if (!info) return;

  if (total === 0) {
    info.textContent = 'Showing 0 sites';
  } else {
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(currentPage * itemsPerPage, total);
    info.textContent = `Showing ${startIndex}-${endIndex} of ${total} sites`;
  }
};

/**
 * Update pagination buttons state
 */
const updatePaginationButtons = (total) => {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const maxPages = Math.ceil(total / itemsPerPage);

  if (prevBtn) {
    prevBtn.disabled = currentPage <= 1;
  }
  if (nextBtn) {
    nextBtn.disabled = currentPage >= maxPages;
  }
};

// ========================================
// 4. MODAL MANAGEMENT
// ========================================

/**
 * Open add site modal
 */
const openAddModal = () => {
  editingSiteId = null;
  const modal = document.getElementById('siteModal');
  const title = document.getElementById('modalTitle');
  const form = document.getElementById('siteForm');

  if (modal && title && form) {
    title.textContent = 'New Site';
    form.reset();
    modal.classList.add('open');
  }
};

/**
 * Open edit site modal
 */
const openEditModal = (siteId) => {
  const site = sites.find(s => s.id === siteId);
  if (!site) return;

  editingSiteId = siteId;
  const modal = document.getElementById('siteModal');
  const title = document.getElementById('modalTitle');
  const form = document.getElementById('siteForm');

  if (modal && title && form) {
    title.textContent = 'Edit Site';
    document.getElementById('siteName').value = site.name;
    document.getElementById('siteOwner').value = site.owner;
    document.getElementById('siteStatus').value = site.status;
    document.getElementById('siteDescription').value = site.description;
    modal.classList.add('open');
  }
};

/**
 * Close site modal
 */
const closeSiteModal = () => {
  const modal = document.getElementById('siteModal');
  if (modal) {
    modal.classList.remove('open');
  }
};

/**
 * Open delete confirmation modal
 */
const openDeleteModal = (siteId) => {
  const site = sites.find(s => s.id === siteId);
  if (!site) return;

  deletingSiteId = siteId;
  const modal = document.getElementById('deleteModal');
  if (modal) {
    modal.classList.add('open');
  }
};

/**
 * Close delete modal
 */
const closeDeleteModal = () => {
  const modal = document.getElementById('deleteModal');
  if (modal) {
    modal.classList.remove('open');
  }
  deletingSiteId = null;
};

// ========================================
// 5. FORM HANDLING
// ========================================

/**
 * Handle site form submission
 */
const handleSiteFormSubmit = (e) => {
  e.preventDefault();

  const name = document.getElementById('siteName').value.trim();
  const owner = document.getElementById('siteOwner').value;
  const status = document.getElementById('siteStatus').value;
  const description = document.getElementById('siteDescription').value.trim();

  if (!name || !owner || !status) {
    showAlert('Please fill in all required fields.');
    return;
  }

  if (editingSiteId) {
    // Update existing site
    const siteIndex = sites.findIndex(s => s.id === editingSiteId);
    if (siteIndex !== -1) {
      sites[siteIndex] = {
        ...sites[siteIndex],
        name,
        owner,
        status,
        description
      };
      showAlert('Site updated successfully!');
    }
  } else {
    // Create new site
    const newSite = {
      id: Math.max(...sites.map(s => s.id), 0) + 1,
      name,
      owner,
      status,
      description,
      created: new Date().toISOString().split('T')[0],
      members: 0
    };
    sites.push(newSite);
    showAlert('Site created successfully!');
  }

  closeSiteModal();
  currentPage = 1;
  renderSitesTable();
};

/**
 * Handle site deletion
 */
const confirmDeleteSite = () => {
  if (deletingSiteId) {
    sites = sites.filter(s => s.id !== deletingSiteId);
    showAlert('Site deleted successfully!');
    renderSitesTable();
    closeDeleteModal();
  }
};

// ========================================
// 6. SEARCH AND FILTER
// ========================================

/**
 * Initialize search input
 */
const initSearchInput = () => {
  const searchInput = document.getElementById('siteSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    currentPage = 1;
    renderSitesTable();
  });

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  });
};

/**
 * Initialize filter buttons
 */
const initFilterButtons = () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update filter
      currentFilter = btn.dataset.filter || 'all';
      currentPage = 1;
      renderSitesTable();
    });
  });
};

// ========================================
// 7. PAGINATION
// ========================================

/**
 * Initialize pagination buttons
 */
const initPagination = () => {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderSitesTable();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const filteredSites = getFilteredSites();
      const maxPages = Math.ceil(filteredSites.length / itemsPerPage);
      if (currentPage < maxPages) {
        currentPage++;
        renderSitesTable();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
};

// ========================================
// 8. ALERTS
// ========================================

/**
 * Show success alert
 */
const showAlert = (message) => {
  const alert = document.getElementById('successAlert');
  const alertMessage = document.getElementById('alertMessage');

  if (alert && alertMessage) {
    alertMessage.textContent = message;
    alert.style.display = 'flex';

    // Auto-hide after 3 seconds
    setTimeout(() => {
      alert.style.display = 'none';
    }, 3000);
  }
};

/**
 * Initialize alert close button
 */
const initAlertClose = () => {
  const alert = document.getElementById('successAlert');
  if (!alert) return;

  const closeBtn = alert.querySelector('.alert-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      alert.style.display = 'none';
    });
  }
};

// ========================================
// 9. UTILITY FUNCTIONS
// ========================================

/**
 * Format date string
 */
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

/**
 * Get status icon
 */
const getStatusIcon = (status) => {
  switch (status) {
    case 'active':
      return 'check-circle';
    case 'inactive':
      return 'pause-circle';
    case 'archived':
      return 'archive';
    default:
      return 'question-circle';
  }
};

/**
 * Capitalize text
 */
const capitalizeText = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Escape HTML to prevent XSS
 */
const escapeHtml = (text) => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

// ========================================
// 10. EVENT LISTENERS
// ========================================

/**
 * Initialize all event listeners
 */
const initSiteManagementPage = () => {
  // New site button
  const newSiteBtn = document.getElementById('newSiteBtn');
  if (newSiteBtn) {
    newSiteBtn.addEventListener('click', openAddModal);
  }

  // Site form
  const siteForm = document.getElementById('siteForm');
  if (siteForm) {
    siteForm.addEventListener('submit', handleSiteFormSubmit);
  }

  // Modal close buttons
  const closeModalBtn = document.getElementById('closeModalBtn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeSiteModal);
  }

  const cancelBtn = document.getElementById('cancelBtn');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', closeSiteModal);
  }

  // Modal overlay close
  const siteModal = document.getElementById('siteModal');
  if (siteModal) {
    const overlay = siteModal.querySelector('.modal-overlay');
    if (overlay) {
      overlay.addEventListener('click', closeSiteModal);
    }
  }

  // Delete modal
  const closeDeleteBtn = document.getElementById('closeDeleteBtn');
  if (closeDeleteBtn) {
    closeDeleteBtn.addEventListener('click', closeDeleteModal);
  }

  const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
  if (cancelDeleteBtn) {
    cancelDeleteBtn.addEventListener('click', closeDeleteModal);
  }

  const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
  if (confirmDeleteBtn) {
    confirmDeleteBtn.addEventListener('click', confirmDeleteSite);
  }

  // Delete modal overlay close
  const deleteModal = document.getElementById('deleteModal');
  if (deleteModal) {
    const overlay = deleteModal.querySelector('.modal-overlay');
    if (overlay) {
      overlay.addEventListener('click', closeDeleteModal);
    }
  }

  // Search and filters
  initSearchInput();
  initFilterButtons();
  initPagination();
  initAlertClose();

  // Initial render
  renderSitesTable();
};

// ========================================
// 11. PAGE INITIALIZATION
// ========================================

/**
 * Initialize page on DOM ready
 */
document.addEventListener('DOMContentLoaded', () => {
  try {
    initSiteManagementPage();
    console.log('Site Management page initialized');
  } catch (error) {
    console.error('Failed to initialize Site Management page:', error);
  }
});
