const foodBase = 'images/food/';

const categoryFiles = [
  {
    category: 'Arabic Sandwiches',
    files: [
      'Rolex-Arabic.jpg',
      'Prawns-Jumbo-Arabic.jpg',
      'Seafood-Arabic.jpg',
      'Shish-Tawook-Arabic.jpg',
      'TIKKA-Arabic.jpg'
    ]
  },
  {
    category: 'Fresh Grilled Burgers',
    files: [
      'wagyu-slider-(beef---chicken).jpg',
      'sarab-tender-cheetos-burger.jpg',
      'uncle-sam-smoked-BURGER---Chicken---beef.jpg',
      'Uncle-sam-smoked-Double---chicken--BEEF.jpg',
      'Thai-Style-Burger.jpg',
      'Vegetable-Burger.jpg',
      'Volcano-Burger.jpg',
      'Single-Mushroom.jpg',
      'Sarab-Grand.jpg',
      'Spanish-Burger.jpg',
      'Zango-Burger.jpg'
    ]
  },
  {
    category: 'Dynamite Tasty',
    files: [
      'Tempura-Prawns.jpg',
      'Tempura-Nuggets.jpg',
      'Shawarma-dynamite.jpg',
      'Zing_Chicken_Cheezagar.jpg',
      'Zing_Chicken_Pops.jpg',
      'Zing_Chicken_Strips.jpg',
      'Prawns-indomie.jpg',
      'ZINkER-indomie.jpg',
      'Zinker-W.-Cheetos.jpg'
    ]
  },
  {
    category: 'Tasty Zango',
    files: [
      'Zango-Poratta-Roll.jpg',
      'Zango-Wrap.jpg',
      'Zango-Combo.jpg',
      'Zango-Kuku.jpg',
      'Zango-Finger.jpg',
      'Zango_Loaded_Chicken.jpg'
    ]
  },
  {
    category: 'Diet Special & Fateera',
    files: [
      'Weight-Loss.jpg',
      'Power-Booster.jpg',
      'Season-Special.jpg',
      'V-2-K.jpg',
      'Shakshooka-Slice.jpg'
    ]
  },
  {
    category: 'Burger Sandwiches',
    files: [
      'Zingo-Fillet.jpg',
      'Zinker-Mayo-Crispy.jpg',
      'Tasty-Chicken-Supreme.jpg',
      'Zinker-Twist.jpg',
      'Zinker-Club.jpg',
      'Zinker-Wrap.jpg',
      'Zinker-Super-Supreme.jpg',
      'Zinker-Supreme---Spicy.jpg',
      'Zinker-Cheetos-Supreme.jpg',
      'Zinker-Prawns-Combo.jpg'
    ]
  },
  {
    category: 'Special Combo Sandwiches',
    files: [
      'Spanish-Combo.jpg',
      'Thai-Style-Combo.jpg',
      'Spanish-Spicy-Zinker.jpg',
      'Spanish-Club.jpg',
      'Spanish-Wrap.jpg',
      'Thai-Style-Wrap.jpg',
      'Tikka-Supreme.jpg',
      'Tikka-Wrap.jpg',
      'Prawns-Jumbo-Supreme.jpg',
      'Prawns-Nashif-Combo.jpg',
      'Prawns-Nashif-Plate.jpg'
    ]
  },
  {
    category: 'Club Sandwiches',
    files: [
      'Vegetable-Club.jpg',
      'Seafood-Club-Sp..jpg',
      'University-Club.jpg'
    ]
  },
  {
    category: 'Twister & Wrap Sandwiches',
    files: [
      'Twister.jpg',
      'Sarab-Twist.jpg',
      'Seafood-Wrap.jpg'
    ]
  },
  {
    category: 'Poratta Sandwiches',
    files: [
      'Sarab-Sp.-Poratta.jpg',
      'Shamsi-Poratta.jpg',
      'Zinker-Poratta.jpg',
      'Tikka-Poratta.jpg',
      'Shawarma-Poratta.jpg',
      'Snapchat-Poratta.jpg',
      'Telegram-Poratta.jpg',
      'Pubg-Poratta.jpg'
    ]
  },
  {
    category: 'Fried Chicken & Meals',
    files: [
      'snack-MEAL.jpg',
      'TRENd-MEAL.jpg',
      'Strips-meal.jpg',
      'Shabah-Chicken.jpg'
    ]
  },
  {
    category: 'Shawarma Sandwiches',
    files: [
      'Shawarma-Saj.jpg',
      'Shawarma-Plate.jpg',
      'Semi-Hotdog.jpg'
    ]
  },
  {
    category: 'Fresh Juices',
    files: [
      'Tender-Coconut-Mix-Juice.jpg',
      'Tender-Coconut.jpg',
      'Salah.jpg',
      'Sarab-Special.jpg',
      'Rahmania-Sp..jpg',
      'Sharjah-Sp..jpg',
      'SHahba-SP..jpg',
      'Thabakkath.jpg',
      'Purple-Pine.jpg',
      'Rose-berry.jpg',
      'STRAWBERRY-BLISS.jpg',
      'WATERMELON-REFRESH.jpg',
      'Tintus-Special.jpg',
      'Titanic.jpg',
      'Thalayani.jpg',
      'Yummy-Sp..jpg',
      'Snowonder.jpg'
    ]
  },
  {
    category: 'Falooda Corner & Desserts',
    files: [
      'ROYAL-FALOODA.jpg',
      'Strawberry-Falooda.jpg',
      'Sithara-Falooda.jpg',
      'Tender-Coconut-Falooda.jpg',
      'Snickers-Crush.jpg',
      'Vanilla_Milkshake.jpg',
      'Strawberry_Milkshake.jpg'
    ]
  }
];

const nameOverrides = {
  'wagyu-slider-(beef---chicken).jpg': 'WAGYU SLIDER (BEEF / CHICKEN)',
  'sarab-tender-cheetos-burger.jpg': 'SARAB TENDER CHEETOS BURGER',
  'uncle-sam-smoked-BURGER---Chicken---beef.jpg': 'UNCLE SAM SMOKED BURGER (CHICKEN / BEEF)',
  'Uncle-sam-smoked-Double---chicken--BEEF.jpg': 'UNCLE SAM SMOKED DOUBLE (CHICKEN / BEEF)',
  'Zinker-W.-Cheetos.jpg': 'ZINKER W. CHEETOS',
  'Seafood-Club-Sp..jpg': 'SEAFOOD CLUB SP.',
  'Sarab-Sp.-Poratta.jpg': 'SARAB SP. PORATTA',
  'Rahmania-Sp..jpg': 'RAHMANIA SP.',
  'Sharjah-Sp..jpg': 'SHARJAH SP.',
  'SHahba-SP..jpg': 'SHAHBA SP.',
  'TRENd-MEAL.jpg': 'TREND MEAL',
  'Rolex-Arabic.jpg': 'ROLEX ARABIC',
  'Thabakkath.jpg': 'THABAKKATH'
};

function displayName(file) {
  if (nameOverrides[file]) return nameOverrides[file];

  return file
    .replace(/\.[^.]+$/, '')
    .replace(/_/g, ' ')
    .replace(/---/g, ' / ')
    .replace(/--/g, ' / ')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\bSp\b\.?/gi, 'SP.')
    .replace(/\bW\b\.?/gi, 'W.')
    .trim()
    .toUpperCase();
}

const menuData = {
  menu_categories: categoryFiles.map((category) => ({
    category: category.category,
    image: `${foodBase}${encodeURI(category.files[0])}`,
    items: category.files.map((file) => ({
      name: displayName(file),
      image: `${foodBase}${encodeURI(file)}`
    }))
  }))
};

function categoryId(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function itemId(category, name) {
  return `${categoryId(category)}-${categoryId(name)}`;
}

function escapeAttr(value) {
  return String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function escapeHtml(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function renderMenu() {
  const container = document.getElementById('menu-content');
  const navContainer = document.querySelector('.category-nav');
  if (!container || !navContainer) return;

  container.innerHTML = '';
  navContainer.innerHTML = '';

  menuData.menu_categories.forEach((cat, index) => {
    const catId = categoryId(cat.category);

    const navLink = document.createElement('a');
    navLink.href = `#${catId}`;
    navLink.textContent = cat.category;
    navContainer.appendChild(navLink);

    const section = document.createElement('section');
    section.className = 'menu-category';
    section.id = catId;

    section.innerHTML = `
      <h2 class="menu-category-title">${escapeHtml(cat.category)}</h2>
      <div class="items-list">
        ${cat.items.map((item) => `
          <div class="item-row" id="${escapeAttr(itemId(cat.category, item.name))}" data-search-name="${escapeAttr(item.name)}" data-search-category="${escapeAttr(cat.category)}">
            <img src="${escapeAttr(item.image)}" class="item-img" alt="${escapeAttr(item.name)}">
            <div class="item-info">
              <div class="item-name">${escapeHtml(item.name)}</div>
              <span class="item-add" aria-hidden="true">+</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    container.appendChild(section);
  });
}

function getMenuSearchItems() {
  if (!Array.isArray(menuData.menu_categories)) return [];
  return menuData.menu_categories.flatMap((cat) => cat.items.map((item) => ({
    id: itemId(cat.category, item.name),
    name: item.name,
    category: cat.category,
    image: item.image,
    haystack: `${item.name} ${cat.category}`.toLowerCase()
  })));
}

function initMenuSearch() {
  const input = document.getElementById('menu-search-input');
  const suggestions = document.getElementById('menu-suggestions');
  const clearButton = document.getElementById('menu-search-clear');
  const status = document.getElementById('menu-search-status');
  if (!input || !suggestions || !clearButton || !status) return;

  const searchItems = getMenuSearchItems();

  function closeSuggestions() {
    suggestions.classList.remove('active');
    suggestions.innerHTML = '';
  }

  function showStatus(message) {
    status.textContent = message;
    status.classList.toggle('active', Boolean(message));
  }

  function scrollToItem(item) {
    const target = document.getElementById(item.id);
    if (!target) return;

    closeSuggestions();
    input.value = item.name;
    clearButton.classList.add('active');
    showStatus(`${item.name} in ${item.category}`);
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    target.classList.add('search-hit');
    window.setTimeout(() => target.classList.remove('search-hit'), 1500);
  }

  function renderSuggestions(matches, query) {
    if (!query) {
      closeSuggestions();
      showStatus('');
      return;
    }

    if (matches.length === 0) {
      suggestions.innerHTML = '<div class="menu-suggestion-empty">No matching items found</div>';
      suggestions.classList.add('active');
      showStatus('No matching items found');
      return;
    }

    suggestions.innerHTML = matches.slice(0, 8).map((item, index) => `
      <button class="menu-suggestion" type="button" role="option" data-menu-search-index="${index}">
        <img src="${escapeAttr(item.image)}" alt="">
        <span>
          <span class="suggestion-name">${escapeHtml(item.name)}</span>
          <span class="suggestion-category">${escapeHtml(item.category)}</span>
        </span>
      </button>
    `).join('');
    suggestions.classList.add('active');
    showStatus(`${matches.length} suggestion${matches.length === 1 ? '' : 's'} found`);

    [...suggestions.querySelectorAll('[data-menu-search-index]')].forEach((button) => {
      button.addEventListener('click', () => scrollToItem(matches[Number(button.dataset.menuSearchIndex)]));
    });
  }

  function updateSearch() {
    const query = input.value.trim().toLowerCase();
    clearButton.classList.toggle('active', Boolean(query));
    const matches = query
      ? searchItems.filter((item) => item.haystack.includes(query))
      : [];
    renderSuggestions(matches, query);
  }

  input.addEventListener('input', updateSearch);
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      input.value = '';
      clearButton.classList.remove('active');
      closeSuggestions();
      showStatus('');
    }
    if (event.key === 'Enter') {
      const query = input.value.trim().toLowerCase();
      const firstMatch = searchItems.find((item) => item.haystack.includes(query));
      if (firstMatch) {
        event.preventDefault();
        scrollToItem(firstMatch);
      }
    }
  });
  clearButton.addEventListener('click', () => {
    input.value = '';
    input.focus();
    clearButton.classList.remove('active');
    closeSuggestions();
    showStatus('');
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.menu-search')) closeSuggestions();
  });
}

function renderHomeMenu() {
  const grid = document.getElementById('home-menu-grid');
  if (!grid) return;

  grid.className = 'home-menu-showcase';
  grid.innerHTML = `
    <div class="home-menu-tabs" role="tablist" aria-label="Menu categories">
      ${menuData.menu_categories.map((cat, index) => `
        <button class="home-menu-tab${index === 0 ? ' active' : ''}" type="button" data-menu-tab="${index}" role="tab" aria-selected="${index === 0}">
          <img src="${escapeAttr(cat.image)}" alt="">
          <span>${escapeHtml(cat.category)}</span>
        </button>
      `).join('')}
    </div>
    <div class="home-menu-panel">
      <div class="home-menu-panel-head">
        <h3 id="home-menu-active-title"></h3>
        <a id="home-menu-active-link" href="menu.html">Full Section</a>
      </div>
      <div class="home-menu-items" id="home-menu-items"></div>
    </div>
  `;

  const tabs = [...grid.querySelectorAll('.home-menu-tab')];
  const title = grid.querySelector('#home-menu-active-title');
  const link = grid.querySelector('#home-menu-active-link');
  const items = grid.querySelector('#home-menu-items');

  function showCategory(index) {
    const cat = menuData.menu_categories[index];
    tabs.forEach((tab, tabIndex) => {
      const isActive = tabIndex === index;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    });

    title.textContent = cat.category;
    link.href = `menu.html#${categoryId(cat.category)}`;
    items.innerHTML = cat.items.slice(0, 4).map((item) => `
      <a class="home-menu-item" href="menu.html#${categoryId(cat.category)}">
        <img src="${escapeAttr(item.image)}" alt="${escapeAttr(item.name)}">
        <div class="home-menu-item-footer">
          <span>${escapeHtml(item.name)}</span>
          <b aria-hidden="true">+</b>
        </div>
      </a>
    `).join('');
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => showCategory(Number(tab.dataset.menuTab)));
  });
  showCategory(0);
}

function initCategorySlider() {
  const nav = document.querySelector('.category-nav');
  const buttons = [...document.querySelectorAll('[data-slide-menu]')];
  if (!nav || buttons.length === 0) return;

  function updateButtons() {
    const maxScroll = nav.scrollWidth - nav.clientWidth;
    buttons.forEach((button) => {
      const direction = Number(button.dataset.slideMenu);
      button.disabled = direction < 0 ? nav.scrollLeft <= 2 : nav.scrollLeft >= maxScroll - 2;
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      nav.scrollBy({ left: Number(button.dataset.slideMenu) * Math.max(260, nav.clientWidth * 0.72), behavior: 'smooth' });
      window.setTimeout(updateButtons, 260);
    });
  });

  nav.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons);
  updateButtons();
}

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  initMenuSearch();
  renderHomeMenu();
  initCategorySlider();
});
