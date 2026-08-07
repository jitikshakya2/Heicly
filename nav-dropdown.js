/**
 * Heicly Navigation Mega Dropdown
 * Data-driven, accessible, and scalable navigation component
 */

// Configuration for Tools dropdown
const toolsMenuItems = [
  {
    title: "HEIC to JPG",
    url: "#converter",
    description: "Convert HEIC photos to JPG format",
    icon: "jpg"
  },
  {
    title: "HEIC to PNG",
    url: "#converter",
    description: "Convert HEIC photos to PNG format",
    icon: "png"
  },
  {
    title: "HEIC to WEBP",
    url: "#converter",
    description: "Convert HEIC photos to WEBP format",
    icon: "webp"
  },
  {
    title: "AVIF to JPG",
    url: "avif-to-jpg/",
    description: "Convert AVIF images to JPG format",
    icon: "jpg"
  },
  {
    title: "AVIF to PNG",
    url: "avif-to-png/",
    description: "Convert AVIF images to PNG with transparency",
    icon: "png"
  }
];

// Configuration for More Tools dropdown (future utilities)
const moreToolsMenuItems = [
  // Currently empty - ready for future tools like:
  // {
  //   title: "Image Compressor",
  //   url: "#",
  //   description: "Compress images without losing quality",
  //   icon: "compress",
  //   category: "Compression"
  // }
];

/**
 * Render a dropdown menu from configuration
 * @param {Array} items - Array of menu item objects
 * @param {string} dropdownId - ID for the dropdown panel
 * @returns {string} HTML string for the dropdown
 */
function renderDropdown(items, dropdownId) {
  if (!items || items.length === 0) {
    return `
      <div id="${dropdownId}" class="mega-dropdown" role="menu" aria-hidden="true">
        <div class="mega-dropdown-panel">
          <p class="dropdown-empty">No tools available yet. Check back soon!</p>
        </div>
      </div>
    `;
  }

  const itemsHtml = items.map((item, index) => `
    <a href="${item.url}" class="mega-dropdown-item" role="menuitem" tabindex="-1" data-index="${index}">
      <div class="mega-dropdown-icon" aria-hidden="true">
        ${getIconSvg(item.icon || 'default')}
      </div>
      <div class="mega-dropdown-content">
        <span class="mega-dropdown-title">${item.title}</span>
        ${item.description ? `<span class="mega-dropdown-desc">${item.description}</span>` : ''}
      </div>
      <svg class="mega-dropdown-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </a>
  `).join('');

  return `
    <div id="${dropdownId}" class="mega-dropdown" role="menu" aria-hidden="true">
      <div class="mega-dropdown-panel">
        <div class="mega-dropdown-grid">
          ${itemsHtml}
        </div>
      </div>
    </div>
  `;
}

/**
 * Get SVG icon based on type
 * @param {string} type - Icon type
 * @returns {string} SVG string
 */
function getIconSvg(type) {
  const icons = {
    jpg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/><circle cx="15" cy="9" r="1" fill="currentColor"/></svg>`,
    png: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/><path d="M21 15l-5-5L5 21"/></svg>`,
    webp: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="8" rx="7" ry="4"/><path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2"/></svg>`,
    heic: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>`,
    avif: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    compress: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`,
    resize: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>`,
    pdf: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    ai: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1v-1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/><circle cx="7.5" cy="14.5" r="1.5"/><circle cx="16.5" cy="14.5" r="1.5"/></svg>`,
    utility: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    default: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6v6H9z"/></svg>`
  };
  
  return icons[type] || icons.default;
}

/**
 * Initialize dropdown interactions
 * @param {string} triggerSelector - Selector for the dropdown trigger
 * @param {string} dropdownId - ID of the dropdown panel
 * @param {Array} items - Menu items to render
 */
function initDropdown(triggerSelector, dropdownId, items) {
  const trigger = document.querySelector(triggerSelector);
  if (!trigger) return;

  // Insert dropdown HTML after trigger
  const dropdownHtml = renderDropdown(items, dropdownId);
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = dropdownHtml;
  const dropdown = tempDiv.firstElementChild;
  
  trigger.parentNode.insertBefore(dropdown, trigger.nextSibling);

  const dropdownPanel = dropdown.querySelector('.mega-dropdown-panel');
  let closeTimeout;

  // Desktop hover behavior
  trigger.addEventListener('mouseenter', () => {
    clearTimeout(closeTimeout);
    openDropdown(trigger, dropdown);
  });

  trigger.addEventListener('mouseleave', () => {
    closeTimeout = setTimeout(() => {
      if (!dropdown.matches(':hover')) {
        closeDropdown(trigger, dropdown);
      }
    }, 150);
  });

  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(closeTimeout);
  });

  dropdown.addEventListener('mouseleave', () => {
    closeTimeout = setTimeout(() => {
      closeDropdown(trigger, dropdown);
    }, 150);
  });

  // Click behavior for mobile/touch
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    
    // Close all other dropdowns first
    document.querySelectorAll('.mega-dropdown-trigger[aria-expanded="true"]').forEach(otherTrigger => {
      if (otherTrigger !== trigger) {
        closeDropdown(otherTrigger, otherTrigger.nextElementSibling);
      }
    });
    
    if (isOpen) {
      closeDropdown(trigger, dropdown);
    } else {
      openDropdown(trigger, dropdown);
    }
  });

  // Keyboard navigation
  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      trigger.click();
    }
    
    if (e.key === 'Escape') {
      closeDropdown(trigger, dropdown);
      trigger.focus();
    }
    
    if (e.key === 'ArrowDown' && trigger.getAttribute('aria-expanded') === 'true') {
      e.preventDefault();
      const firstItem = dropdown.querySelector('.mega-dropdown-item');
      if (firstItem) firstItem.focus();
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!trigger.contains(e.target) && !dropdown.contains(e.target)) {
      closeDropdown(trigger, dropdown);
    }
  });

  // Handle focus within dropdown
  dropdown.addEventListener('keydown', (e) => {
    const items = Array.from(dropdown.querySelectorAll('.mega-dropdown-item'));
    const currentIndex = items.indexOf(document.activeElement);

    if (e.key === 'Escape') {
      closeDropdown(trigger, dropdown);
      trigger.focus();
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % items.length;
      items[nextIndex].focus();
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + items.length) % items.length;
      items[prevIndex].focus();
    }

    if (e.key === 'Tab') {
      if (e.shiftKey && currentIndex === 0) {
        e.preventDefault();
        trigger.focus();
      } else if (!e.shiftKey && currentIndex === items.length - 1) {
        closeDropdown(trigger, dropdown);
      }
    }
  });
}

/**
 * Open dropdown
 */
function openDropdown(trigger, dropdown) {
  trigger.setAttribute('aria-expanded', 'true');
  dropdown.setAttribute('aria-hidden', 'false');
  dropdown.classList.add('mega-dropdown-open');
  
  // Set tab indexes for accessibility
  const items = dropdown.querySelectorAll('.mega-dropdown-item');
  items.forEach((item, index) => {
    item.setAttribute('tabindex', index === 0 ? '0' : '-1');
  });
}

/**
 * Close dropdown
 */
function closeDropdown(trigger, dropdown) {
  trigger.setAttribute('aria-expanded', 'false');
  dropdown.setAttribute('aria-hidden', 'true');
  dropdown.classList.remove('mega-dropdown-open');
  
  // Reset tab indexes
  dropdown.querySelectorAll('.mega-dropdown-item').forEach(item => {
    item.setAttribute('tabindex', '-1');
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Tools dropdown
  initDropdown('.nav-tools-trigger', 'tools-dropdown', toolsMenuItems);
  
  // Initialize More Tools dropdown
  initDropdown('.nav-more-tools-trigger', 'more-tools-dropdown', moreToolsMenuItems);
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { toolsMenuItems, moreToolsMenuItems, renderDropdown, initDropdown };
}
