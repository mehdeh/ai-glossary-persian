// Main JavaScript for Glossary Site

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeAlphabetNav();
    displayAllTerms();
    setupSearch();
    setupCategoryFilters();
});

// Initialize alphabet navigation
function initializeAlphabetNav() {
    const alphabetNav = document.getElementById('alphabetNav');
    const persianAlphabet = ['آ', 'ا', 'ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ه', 'ی'];
    
    persianAlphabet.forEach(letter => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = letter;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            filterByLetter(letter);
            updateActiveLetter(link);
        });
        alphabetNav.appendChild(link);
    });
}

// Display all terms
function displayAllTerms(terms = glossaryData) {
    const container = document.getElementById('termsContainer');
    container.innerHTML = '';
    
    if (terms.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>نتیجه‌ای یافت نشد</h3>
                <p>لطفاً کلمه دیگری را جستجو کنید یا از فهرست الفبایی استفاده کنید.</p>
            </div>
        `;
        return;
    }
    
    // Group terms by first letter
    const groupedTerms = groupTermsByLetter(terms);
    
    Object.keys(groupedTerms).sort().forEach(letter => {
        const letterSection = document.createElement('div');
        letterSection.className = 'letter-section';
        letterSection.id = `letter-${letter}`;
        
        const letterHeader = document.createElement('h2');
        letterHeader.className = 'letter-header';
        letterHeader.textContent = letter;
        letterHeader.style.cssText = 'font-size: 2rem; color: var(--primary-color); margin: 2rem 0 1rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid var(--border-color);';
        letterSection.appendChild(letterHeader);
        
        groupedTerms[letter].forEach(term => {
            const termCard = createTermCard(term);
            letterSection.appendChild(termCard);
        });
        
        container.appendChild(letterSection);
    });
}

// Group terms by first letter
function groupTermsByLetter(terms) {
    const grouped = {};
    terms.forEach(term => {
        const firstLetter = term.title.charAt(0);
        if (!grouped[firstLetter]) {
            grouped[firstLetter] = [];
        }
        grouped[firstLetter].push(term);
    });
    return grouped;
}

// Create a term card
function createTermCard(term) {
    const card = document.createElement('div');
    card.className = 'term-card';
    card.id = term.id;
    
    let html = `
        <div class="term-header">
            <h3 class="term-title">${term.title}</h3>
            <span class="term-english">${term.english}</span>
        </div>
        <span class="term-category">${getCategoryName(term.category)}</span>
        <div class="term-definition">${term.definition}</div>
    `;
    
    if (term.formula) {
        html += `
            <div class="term-formula">
                <strong>فرمول:</strong>
                <div class="formula-content">$$${term.formula}$$</div>
            </div>
        `;
    }
    
    if (term.example) {
        html += `
            <div class="term-example">
                <strong>مثال:</strong>
                <p>${term.example}</p>
            </div>
        `;
    }
    
    card.innerHTML = html;
    return card;
}

// Get category name in Persian
function getCategoryName(category) {
    const categoryNames = {
        'machine-learning': 'یادگیری ماشین',
        'deep-learning': 'یادگیری عمیق',
        'neural-networks': 'شبکه‌های عصبی',
        'nlp': 'پردازش زبان طبیعی',
        'computer-vision': 'بینایی کامپیوتر',
        'robotics': 'رباتیک',
        'ai-safety': 'ایمنی هوش مصنوعی'
    };
    return categoryNames[category] || category;
}

// Setup search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    const performSearch = () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query === '') {
            displayAllTerms();
            return;
        }
        
        const results = glossaryData.filter(term => 
            term.title.toLowerCase().includes(query) ||
            term.english.toLowerCase().includes(query) ||
            term.definition.toLowerCase().includes(query)
        );
        
        if (results.length > 0) {
            const container = document.getElementById('termsContainer');
            container.innerHTML = `
                <div class="search-results">
                    <strong>${results.length} نتیجه یافت شد برای "${searchInput.value}"</strong>
                </div>
            `;
        }
        
        displayAllTerms(results);
        
        // Scroll to results
        if (results.length > 0) {
            document.getElementById('termsContainer').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Real-time search (optional)
    searchInput.addEventListener('input', debounce(performSearch, 300));
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Filter by letter
function filterByLetter(letter) {
    const filtered = glossaryData.filter(term => term.title.charAt(0) === letter);
    displayAllTerms(filtered);
    
    // Scroll to results
    setTimeout(() => {
        const container = document.getElementById('termsContainer');
        if (container.children.length > 0) {
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}

// Update active letter in navigation
function updateActiveLetter(activeLink) {
    document.querySelectorAll('#alphabetNav a').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// Setup category filters
function setupCategoryFilters() {
    const categoryLinks = document.querySelectorAll('.category-list a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('href').substring(1);
            
            if (category === 'all') {
                displayAllTerms();
            } else {
                const filtered = glossaryData.filter(term => term.category === category);
                displayAllTerms(filtered);
            }
            
            // Update active category
            categoryLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Scroll to results
            setTimeout(() => {
                document.getElementById('termsContainer').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });
    });
}

// Handle hash navigation (for direct links to terms)
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        const term = glossaryData.find(t => t.id === hash);
        if (term) {
            displayAllTerms([term]);
            setTimeout(() => {
                document.getElementById(hash).scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    }
});

// Initialize MathJax for formula rendering (if needed)
if (typeof MathJax !== 'undefined') {
    MathJax.Hub.Config({
        tex2jax: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']]
        }
    });
}

