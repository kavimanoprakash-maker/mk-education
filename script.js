// Determine current topic from the page
function getCurrentTopic() {
    const path = window.location.pathname.toLowerCase();
    const page = path.split('/').pop() || window.location.href.toLowerCase();
    
    // Check for Adverb specifically
    if (page.includes('adverb') || page.includes('adverb.html')) return 'adverb';
    if (page.includes('pronoun')) return 'pronoun';
    if (page.includes('noun')) return 'noun';
    if (page.includes('singular')) return 'singular';
    if (page.includes('adjective')) return 'adjective';
    if (page.includes('articles')) return 'articles';
    if (page.includes('degrees_of_comparison')) return 'degrees';
    if (page.includes('be_verb')) return 'beverb';
    if (page.includes('verb')) return 'verb';
    if (page.includes('tenses')) return 'tenses';
    if (page.includes('preposition')) return 'preposition';
    if (page.includes('conjunction')) return 'conjunction';
    if (page.includes('interjection')) return 'interjection';
    if (page.includes('direct_indirect_speech')) return 'directIndirectSpeech';
    if (page.includes('active_voice_passive_voice')) return 'voice';
    if (page.includes('types_of_sentences')) return 'sentences';
    
    return 'noun'; // default
}

// Get questions for current topic
function getQuestionsForTopic(topic) {
    switch(topic) {
        case 'noun': return nounQuestions || [];
        case 'singular': return singularPluralQuestions || [];
        case 'adjective': return adjectiveQuestions || [];
        case 'articles': return articlesQuestions || [];
        case 'degrees': return degreesQuestions || [];
        case 'pronoun': return pronounQuestions || [];
        case 'beverb': return beverbQuestions || [];
        case 'verb': return verbQuestions || [];
        case 'adverb': return adverbQuestions || [];
        case 'tenses': return tensesQuestions || [];
        case 'preposition': return prepositionQuestions || [];
        case 'conjunction': return conjunctionQuestions || [];
        case 'interjection': return interjectionQuestions || [];
        case 'directIndirectSpeech': return directIndirectSpeechQuestions || [];
        case 'voice': return voiceQuestions || [];
        case 'sentences': return sentencesQuestions || [];
        default: return [];
    }
}

// Global variables
let topic = getCurrentTopic();
let questions = getQuestionsForTopic(topic);
let userAnswers = {};
let currentPage = 1;
const questionsPerPage = 50;

// DOM Elements
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const answeredEl = document.getElementById('answered');
const correctEl = document.getElementById('correct');
const percentageEl = document.getElementById('percentage');
const totalQuestionsEl = document.getElementById('total-questions');
const questionNav = document.getElementById('question-nav');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionEl = document.getElementById('total-question');
const footerAnswered = document.getElementById('footer-answered');
const footerPercentage = document.getElementById('footer-percentage');

// Initialize
function init() {
    // Update topic in case it wasn't set correctly
    topic = getCurrentTopic();
    questions = getQuestionsForTopic(topic);
    
    if (!questions || questions.length === 0) {
        console.error('No questions found for topic:', topic);
        showErrorMessage();
        return;
    }
    
    loadProgress();
    createQuestionNavigation();
    displayPage(1);
    updateProgress();
    updateFooter();
    setupMobileEvents();
}

// Show error message
function showErrorMessage() {
    const container = document.querySelector('.qa-container');
    if (container) {
        container.innerHTML = `
            <div class="error-message" style="
                text-align: center;
                padding: 40px 20px;
                color: var(--accent);
                background: var(--card-bg);
                border-radius: 10px;
                border: 1px solid #333;
            ">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 20px;"></i>
                <h3 style="margin-bottom: 10px;">கேள்விகள் ஏற்றப்படவில்லை</h3>
                <p style="color: var(--text-secondary); margin-bottom: 20px;">
                    தயவு செய்து பக்கம் மீண்டும் ஏற்றவும்
                </p>
                <button onclick="location.reload()" style="
                    background: var(--accent);
                    color: #121212;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 6px;
                    font-weight: bold;
                    cursor: pointer;
                ">
                    பக்கம் ஏற்றவும்
                </button>
            </div>
        `;
    }
}

// Load progress from localStorage
function loadProgress() {
    try {
        const saved = localStorage.getItem(`progress-${topic}`);
        if (saved) {
            const progress = JSON.parse(saved);
            // Validate structure
            if (typeof progress === 'object' && progress.answers) {
                userAnswers = progress.answers;
            }
        }
    } catch (e) {
        console.error('Error loading progress:', e);
    }
}

// Save progress to localStorage
function saveProgress() {
    const progress = {
        answers: userAnswers,
        answered: Object.keys(userAnswers).length,
        correct: calculateCorrectAnswers(),
        timestamp: new Date().toISOString()
    };
    
    try {
        localStorage.setItem(`progress-${topic}`, JSON.stringify(progress));
    } catch (e) {
        console.error('Error saving progress:', e);
        showNotification('தரவு சேமிக்கும் போது பிழை!', 'error');
    }
    
    updateProgress();
    updateFooter();
    
    // Update homepage if exists
    updateHomepageProgress();
}

// Update homepage progress display
function updateHomepageProgress() {
    // Try different methods to update parent/opener
    try {
        if (window.opener && typeof window.opener.updateProgress === 'function') {
            window.opener.updateProgress();
        }
        
        if (window.parent !== window && typeof window.parent.updateProgress === 'function') {
            window.parent.updateProgress();
        }
        
        // PostMessage method for cross-window communication
        if (window.parent) {
            window.parent.postMessage({
                type: 'progressUpdate',
                topic: topic,
                progress: {
                    answered: Object.keys(userAnswers).length,
                    total: questions.length
                }
            }, '*');
        }
    } catch (e) {
        // Silent fail - not critical
    }
}

// Calculate correct answers
function calculateCorrectAnswers() {
    let correct = 0;
    Object.keys(userAnswers).forEach(key => {
        const questionId = parseInt(key.split('-')[1]);
        const question = questions.find(q => q.id === questionId);
        if (question && userAnswers[key] === question.correct) {
            correct++;
        }
    });
    return correct;
}

// Update progress display
function updateProgress() {
    const total = questions.length;
    const answered = Object.keys(userAnswers).length;
    const correct = calculateCorrectAnswers();
    const percentage = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    
    // Update progress bar
    const progressPercent = (answered / total) * 100;
    if (progressFill) {
        progressFill.style.width = `${progressPercent}%`;
    }
    if (progressText) {
        progressText.textContent = `${answered}/${total}`;
    }
    
    // Update stats
    if (answeredEl) answeredEl.textContent = answered;
    if (correctEl) correctEl.textContent = correct;
    if (percentageEl) percentageEl.textContent = `${percentage}%`;
    if (totalQuestionsEl) totalQuestionsEl.textContent = total;
    
    // Update question counter
    if (currentQuestionEl) currentQuestionEl.textContent = currentPage;
    if (totalQuestionEl) totalQuestionEl.textContent = Math.ceil(total / questionsPerPage);
    
    // Update navigation buttons
    updateNavigationButtons();
}

// Update footer
function updateFooter() {
    if (!footerAnswered || !footerPercentage) return;
    
    const answered = Object.keys(userAnswers).length;
    const correct = calculateCorrectAnswers();
    const percentage = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    
    footerAnswered.textContent = answered;
    footerPercentage.textContent = `${percentage}%`;
}

// Create question navigation
function createQuestionNavigation() {
    if (!questionNav) return;
    
    const totalPages = Math.ceil(questions.length / questionsPerPage);
    questionNav.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'page-btn';
        pageBtn.textContent = i;
        pageBtn.dataset.page = i;
        
        // Check if page has any answered questions
        const startIndex = (i - 1) * questionsPerPage;
        const endIndex = Math.min(startIndex + questionsPerPage, questions.length);
        let hasAnswered = false;
        let allCorrect = true;
        
        for (let j = startIndex; j < endIndex; j++) {
            const question = questions[j];
            const answerKey = `${topic}-${question.id}`;
            if (userAnswers[answerKey] !== undefined) {
                hasAnswered = true;
                if (userAnswers[answerKey] !== question.correct) {
                    allCorrect = false;
                }
            } else {
                allCorrect = false;
            }
        }
        
        if (hasAnswered) {
            pageBtn.classList.add('answered');
            if (allCorrect) {
                pageBtn.classList.add('correct');
            } else {
                pageBtn.classList.add('incorrect');
            }
        }
        
        if (i === currentPage) {
            pageBtn.classList.add('active');
        }
        
        // Mobile touch events
        pageBtn.addEventListener('touchstart', function(e) {
            this.style.transform = 'scale(0.95)';
        });
        
        pageBtn.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
        
        pageBtn.addEventListener('click', () => {
            displayPage(i);
            currentPage = i;
            updateProgress();
            // Scroll to top of questions
            document.querySelector('.topic-section')?.scrollIntoView({ behavior: 'smooth' });
        });
        
        questionNav.appendChild(pageBtn);
    }
}

// Update navigation buttons
function updateNavigationButtons() {
    const pageBtns = document.querySelectorAll('.page-btn');
    pageBtns.forEach(btn => {
        btn.classList.remove('active');
        if (parseInt(btn.dataset.page) === currentPage) {
            btn.classList.add('active');
        }
    });
}

// Display questions for a specific page
function displayPage(page) {
    // Get the correct container
    const containerId = `${topic}-qa`;
    let container = document.getElementById(containerId);
    
    // If not found, try alternative ID
    if (!container) {
        container = document.querySelector('.qa-container');
    }
    
    if (!container) {
        console.error('Container not found');
        return;
    }
    
    container.innerHTML = '';
    
    const startIndex = (page - 1) * questionsPerPage;
    const endIndex = Math.min(startIndex + questionsPerPage, questions.length);
    const pageQuestions = questions.slice(startIndex, endIndex);
    
    pageQuestions.forEach(question => {
        const qaItem = createQuestionElement(question);
        container.appendChild(qaItem);
    });
    
    currentPage = page;
    updateProgress();
    
    // Scroll to top on mobile
    if (window.innerWidth < 768) {
        container.scrollIntoView({ behavior: 'smooth' });
    }
}

// Create question element
function createQuestionElement(question) {
    const qaItem = document.createElement('div');
    qaItem.className = 'qa-item';
    qaItem.id = `${topic}-q${question.id}`;
    
    // Question number
    const qaNumber = document.createElement('div');
    qaNumber.className = 'qa-number';
    qaNumber.textContent = question.id;
    
    // Question text
    const questionText = document.createElement('div');
    questionText.className = 'question';
    questionText.textContent = question.question;
    
    // Options container
    const options = document.createElement('div');
    options.className = 'options';
    
    // Create options
    question.options.forEach((option, optIndex) => {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        optionEl.dataset.optionIndex = optIndex;
        optionEl.dataset.questionId = question.id;
        
        const optionLabel = document.createElement('div');
        optionLabel.className = 'option-label';
        optionLabel.textContent = String.fromCharCode(65 + optIndex);
        
        const optionText = document.createElement('div');
        optionText.className = 'option-text';
        optionText.textContent = option;
        
        optionEl.appendChild(optionLabel);
        optionEl.appendChild(optionText);
        options.appendChild(optionEl);
    });
    
    // Explanation
    const explanation = document.createElement('div');
    explanation.className = 'explanation';
    
    const explanationTitle = document.createElement('div');
    explanationTitle.className = 'explanation-title';
    explanationTitle.innerHTML = '<i class="fas fa-lightbulb"></i> விளக்கம்:';
    
    const explanationText = document.createElement('div');
    explanationText.className = 'explanation-text';
    explanationText.textContent = question.explanation;
    
    explanation.appendChild(explanationTitle);
    explanation.appendChild(explanationText);
    
    // Assemble the question
    qaItem.appendChild(qaNumber);
    qaItem.appendChild(questionText);
    qaItem.appendChild(options);
    qaItem.appendChild(explanation);
    
    // Set up event listeners
    setupQuestionEvents(qaItem, question);
    
    return qaItem;
}

// Set up event listeners for a question
function setupQuestionEvents(qaItem, question) {
    const options = qaItem.querySelectorAll('.option');
    const explanation = qaItem.querySelector('.explanation');
    const answerKey = `${topic}-${question.id}`;
    
    // Check if already answered
    if (userAnswers[answerKey] !== undefined) {
        const userAnswer = userAnswers[answerKey];
        
        // Mark correct answer
        options[question.correct].classList.add('correct');
        
        // Mark user's answer if wrong
        if (userAnswer !== question.correct) {
            options[userAnswer].classList.add('wrong');
        }
        
        // Show explanation
        explanation.classList.add('show');
        
        // Disable further clicking
        options.forEach(opt => {
            opt.style.cursor = 'default';
            opt.onclick = null;
            opt.ontouchstart = null;
        });
    } else {
        // Add click handlers
        options.forEach((opt, optIndex) => {
            // Click event for desktop and touch devices
            opt.onclick = () => handleAnswer(question.id, optIndex, question.correct, qaItem);
            
            // Touch events for mobile
            opt.ontouchstart = function(e) {
                e.preventDefault();
                this.style.transform = 'scale(0.98)';
            };
            
            opt.ontouchend = function(e) {
                e.preventDefault();
                this.style.transform = 'scale(1)';
                handleAnswer(question.id, optIndex, question.correct, qaItem);
            };
        });
        
        // Hide explanation
        explanation.classList.remove('show');
    }
}

// Handle answer selection
function handleAnswer(questionId, selectedIndex, correctIndex, qaItem) {
    const answerKey = `${topic}-${questionId}`;
    
    // If already answered, do nothing
    if (userAnswers[answerKey] !== undefined) return;
    
    // Save answer
    userAnswers[answerKey] = selectedIndex;
    
    // Update UI
    const options = qaItem.querySelectorAll('.option');
    const explanation = qaItem.querySelector('.explanation');
    
    // Mark correct answer
    options[correctIndex].classList.add('correct');
    
    // Mark user's answer if wrong
    if (selectedIndex !== correctIndex) {
        options[selectedIndex].classList.add('wrong');
    }
    
    // Show explanation
    explanation.classList.add('show');
    
    // Disable further clicking
    options.forEach(opt => {
        opt.style.cursor = 'default';
        opt.onclick = null;
        opt.ontouchstart = null;
        opt.ontouchend = null;
    });
    
    // Save progress
    saveProgress();
    
    // Update navigation
    createQuestionNavigation();
    
    // Show success message
    if (selectedIndex === correctIndex) {
        showNotification('சரியான பதில்! நல்லது!', 'success');
        // Add haptic feedback if available
        if (navigator.vibrate) {
            navigator.vibrate([50, 50, 50]);
        }
    } else {
        showNotification('தவறான பதில். மீண்டும் முயற்சிக்கவும்!', 'error');
        if (navigator.vibrate) {
            navigator.vibrate([200]);
        }
    }
}

// Reset progress
function resetProgress() {
    if (confirm('நிச்சயமாக உங்கள் முன்னேற்றத்தை மீட்டமைக்க விரும்புகிறீர்களா? இந்த செயலை தவிர்க்க முடியாது.')) {
        userAnswers = {};
        try {
            localStorage.removeItem(`progress-${topic}`);
        } catch (e) {
            console.error('Error clearing progress:', e);
        }
        init();
        
        // Show confirmation message
        showNotification('முன்னேற்றம் வெற்றிகரமாக மீட்டமைக்கப்பட்டது!', 'success');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div style="display: flex; align-items: center;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span style="flex: 1; margin: 0 10px;">${message}</span>
        </div>
        <button onclick="this.parentElement.remove()" style="background: none; border: none; color: inherit; cursor: pointer;">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// Setup mobile-specific events
function setupMobileEvents() {
    // Back to Top functionality
    const backToTopBtn = document.getElementById('backToTop') || document.querySelector('.back-to-top-quiz');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        // Touch feedback
        backToTopBtn.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        backToTopBtn.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Prevent zoom on double-tap for mobile
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        // Debounce resize
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(function() {
            window.dispatchEvent(new Event('resize'));
        }, 100);
    });
    
    // Handle keyboard on mobile
    window.addEventListener('resize', function() {
        // Force viewport update on resize
        document.body.style.height = window.innerHeight + 'px';
    });
    
    // Initial body height
    document.body.style.height = window.innerHeight + 'px';
    
    // Add CSS for mobile optimizations
    const mobileStyles = document.createElement('style');
    mobileStyles.textContent = `
        @media (max-width: 768px) {
            /* Prevent text selection on interactive elements */
            .option, .btn, .page-btn {
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            
            /* Improve touch targets */
            .option {
                min-height: 44px; /* Apple's minimum touch target */
            }
            
            .btn {
                min-height: 44px;
            }
            
            /* Smooth scrolling for mobile */
            .qa-container {
                scroll-margin-top: 20px;
            }
        }
        
        /* Hide scrollbar but keep functionality */
        .question-nav::-webkit-scrollbar {
            height: 4px;
        }
        
        .question-nav::-webkit-scrollbar-track {
            background: #333;
        }
        
        .question-nav::-webkit-scrollbar-thumb {
            background: var(--accent);
            border-radius: 2px;
        }
    `;
    document.head.appendChild(mobileStyles);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);

// Handle page visibility for mobile
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        // Page became visible again, refresh progress
        loadProgress();
        updateProgress();
        updateNavigationButtons();
    }
});

// Handle page load from cache
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        // Page loaded from cache
        loadProgress();
        updateProgress();
        updateNavigationButtons();
    }
});