// Simple Working Grade 2 Math Adventure
console.log('🎓 Starting Math Adventure...');

// Global variables
let currentCategory = null;
let currentSet = 1;
let currentQuestion = 0;
let currentQuestionData = null;
let selectedAnswer = null;
let setResults = [];

// Navigation functions
function selectCategory(categoryName) {
    console.log(`📚 Selected category: ${categoryName}`);
    
    if (typeof QuestionDatabase === 'undefined') {
        console.error('❌ QuestionDatabase not loaded');
        alert('Loading error! Please refresh the page.');
        return;
    }
    
    const categoryData = QuestionDatabase[categoryName];
    if (!categoryData || categoryData.length === 0) {
        console.error(`❌ No data for category: ${categoryName}`);
        alert(`Sorry! ${categoryName} questions are still being prepared by Ralph!`);
        return;
    }
    
    currentCategory = categoryName;
    showSetSelection();
}

function showCategorySelection() {
    hideAllScreens();
    document.getElementById('category-selection').classList.remove('hidden');
    console.log('📚 Showing category selection');
}

function showSetSelection() {
    hideAllScreens();
    document.getElementById('set-selection').classList.remove('hidden');
    
    // Update title
    const categoryName = getCategoryDisplayName(currentCategory);
    document.getElementById('current-category-name').textContent = categoryName;
    document.getElementById('category-title').textContent = `${categoryName} - Question Sets`;
    
    // Generate sets
    generateSetsGrid();
    
    console.log(`📚 Showing sets for: ${currentCategory}`);
}

function generateSetsGrid() {
    const setsGrid = document.getElementById('sets-grid');
    if (!setsGrid) {
        console.error('❌ Sets grid not found');
        return;
    }
    
    setsGrid.innerHTML = '';
    
    const categoryData = QuestionDatabase[currentCategory] || [];
    console.log(`📊 Found ${categoryData.length} sets in ${currentCategory}`);
    
    // Show available sets
    for (let i = 1; i <= Math.max(categoryData.length, 1); i++) {
        const setData = categoryData[i - 1];
        const hasData = setData && setData.questions && setData.questions.length > 0;
        
        const setCard = document.createElement('div');
        setCard.className = hasData ? 'set-card' : 'set-card locked';
        
        setCard.innerHTML = `
            <div class="set-number" style="background: ${hasData ? '#3498db' : '#bdc3c7'}">${i}</div>
            <h3 class="set-title">${setData?.setTitle || `Set ${i}`}</h3>
            <p class="set-description">${setData?.setDescription || 'Questions coming soon!'}</p>
            <div class="set-progress">${hasData ? setData.questions.length : 0} questions available</div>
        `;
        
        if (hasData) {
            setCard.onclick = () => selectSet(i);
            setCard.style.cursor = 'pointer';
        }
        
        setsGrid.appendChild(setCard);
    }
}

function selectSet(setNumber) {
    currentSet = setNumber;
    const setData = QuestionDatabase[currentCategory][setNumber - 1];
    
    if (!setData || !setData.questions || setData.questions.length === 0) {
        alert('This set is not ready yet! Ralph is still working on it!');
        return;
    }
    
    console.log(`🎯 Starting Set ${setNumber} with ${setData.questions.length} questions`);
    
    // Reset for new set
    currentQuestion = 0;
    setResults = [];
    
    startQuestionInterface();
}

function startQuestionInterface() {
    hideAllScreens();
    document.getElementById('question-interface').classList.remove('hidden');
    
    loadCurrentQuestion();
    updateQuestionNavigation();
}

function loadCurrentQuestion() {
    const setData = QuestionDatabase[currentCategory][currentSet - 1];
    if (!setData || !setData.questions) {
        console.error('❌ Set data not found');
        return;
    }
    
    currentQuestionData = setData.questions[currentQuestion];
    if (!currentQuestionData) {
        console.error('❌ Question data not found');
        return;
    }
    
    console.log(`📝 Loading question ${currentQuestion + 1}: ${currentQuestionData.question}`);
    
    // Reset selection
    selectedAnswer = null;
    
    // Update display
    displayCurrentQuestion();
    updateProgressDisplay();
}

function displayCurrentQuestion() {
    // Update question type
    document.getElementById('question-type').textContent = formatQuestionType(currentQuestionData.type);
    
    // Update question text
    document.getElementById('question-title').textContent = currentQuestionData.question;
    
    // Update answer options
    const answerOptions = document.getElementById('answer-options');
    answerOptions.innerHTML = '';
    
    currentQuestionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
        button.onclick = () => selectAnswer(index);
        answerOptions.appendChild(button);
    });
    
    // Update Ralph's hint
    document.getElementById('ralph-question-hint').textContent = currentQuestionData.ralphHint || "Think it through! You got this!";
    
    // Update learning objective
    document.getElementById('learning-objective-text').textContent = `Learn about ${currentQuestionData.type.replace('-', ' ')}`;
    
    // Reset submit button
    document.getElementById('submit-btn').disabled = true;
    
    // Hide result
    document.getElementById('question-result').classList.add('hidden');
    
    // Reset answer buttons
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
    });
}

function selectAnswer(answerIndex) {
    selectedAnswer = answerIndex;
    
    // Update button states
    document.querySelectorAll('.answer-btn').forEach((btn, index) => {
        btn.classList.remove('selected');
        if (index === answerIndex) {
            btn.classList.add('selected');
        }
    });
    
    // Enable submit button
    document.getElementById('submit-btn').disabled = false;
    
    console.log(`✏️ Selected answer: ${answerIndex + 1} (${currentQuestionData.options[answerIndex]})`);
}

function submitAnswer() {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === currentQuestionData.correct;
    
    console.log(`📊 Answer ${isCorrect ? 'correct' : 'incorrect'}: selected ${selectedAnswer}, correct ${currentQuestionData.correct}`);
    
    // Record result
    setResults.push({
        question: currentQuestion + 1,
        correct: isCorrect,
        selectedAnswer: selectedAnswer,
        correctAnswer: currentQuestionData.correct
    });
    
    // Show result
    showAnswerResult(isCorrect);
    
    // Update navigation
    updateNavigationAfterAnswer();
}

function showAnswerResult(isCorrect) {
    const resultDiv = document.getElementById('question-result');
    resultDiv.classList.remove('hidden');
    
    const ralphMessages = {
        correct: ["Great job! My brain is tingling!", "You're so smart! Like a smart person!", "Correct! That makes me happy!"],
        incorrect: ["That's okay! Learning is hard!", "Try again next time! Don't give up!", "Mistakes help us learn!"]
    };
    
    const messages = ralphMessages[isCorrect ? 'correct' : 'incorrect'];
    const ralphMessage = messages[Math.floor(Math.random() * messages.length)];
    
    if (isCorrect) {
        resultDiv.innerHTML = `
            <div class="result-correct">
                <h4>🎉 Correct!</h4>
                <p><strong>Ralph says:</strong> "${ralphMessage}"</p>
                <p><strong>Explanation:</strong> ${currentQuestionData.explanation}</p>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div class="result-incorrect">
                <h4>❌ Not quite right</h4>
                <p><strong>Ralph says:</strong> "${ralphMessage}"</p>
                <p><strong>Correct Answer:</strong> ${currentQuestionData.options[currentQuestionData.correct]}</p>
                <p><strong>Explanation:</strong> ${currentQuestionData.explanation}</p>
            </div>
        `;
    }
    
    // Update answer button colors
    document.querySelectorAll('.answer-btn').forEach((btn, index) => {
        if (index === currentQuestionData.correct) {
            btn.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
}

function nextQuestion() {
    if (currentQuestion < 9) {
        currentQuestion++;
        loadCurrentQuestion();
        updateQuestionNavigation();
    } else {
        finishSet();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadCurrentQuestion();
        updateQuestionNavigation();
    }
}

function finishSet() {
    const correctAnswers = setResults.filter(r => r.correct).length;
    const accuracy = Math.round((correctAnswers / setResults.length) * 100);
    
    hideAllScreens();
    document.getElementById('set-summary').classList.remove('hidden');
    
    // Update summary display
    document.getElementById('set-score').textContent = correctAnswers;
    document.getElementById('set-percentage').textContent = accuracy + '%';
    document.getElementById('correct-count').textContent = correctAnswers;
    document.getElementById('time-spent').textContent = '5:30'; // Mock time
    document.getElementById('hints-used').textContent = '2'; // Mock hints
    
    // Ralph's celebration
    let celebrationMessage;
    if (accuracy >= 90) {
        celebrationMessage = "WOW! You're super smart! Like a genius!";
    } else if (accuracy >= 70) {
        celebrationMessage = "Great job! You did really good!";
    } else {
        celebrationMessage = "Nice try! Keep learning and you'll get better!";
    }
    
    document.getElementById('ralph-celebration-message').textContent = `"${celebrationMessage}"`;
    
    // Generate review
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    setResults.forEach((result, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${result.correct ? 'correct' : 'incorrect'}`;
        reviewItem.innerHTML = `
            <span class="review-icon">${result.correct ? '✅' : '❌'}</span>
            <span>Question ${result.question}: ${result.correct ? 'Correct' : 'Incorrect'}</span>
        `;
        reviewList.appendChild(reviewItem);
    });
    
    console.log(`🎉 Set completed! Score: ${correctAnswers}/10 (${accuracy}%)`);
}

function continueToNextSet() {
    const nextSetNumber = currentSet + 1;
    const categoryData = QuestionDatabase[currentCategory];
    
    if (nextSetNumber <= categoryData.length) {
        selectSet(nextSetNumber);
    } else {
        alert('Congratulations! You completed all available sets in this category!');
        showSetSelection();
    }
}

function retryCurrentSet() {
    selectSet(currentSet);
}

function showHint() {
    alert(`💡 Ralph's Hint: ${currentQuestionData.ralphHint}`);
}

// Utility functions
function hideAllScreens() {
    ['category-selection', 'set-selection', 'question-interface', 'set-summary'].forEach(screenId => {
        const screen = document.getElementById(screenId);
        if (screen) {
            screen.classList.add('hidden');
        }
    });
}

function getCategoryDisplayName(categoryName) {
    const displayNames = {
        'numbers': 'Numbers to 1000',
        'additionSubtraction': 'Addition & Subtraction',
        'fractions': 'Fractions',
        'shapes': 'Shapes & Geometry',
        'measurement': 'Measurement',
        'patterns': 'Patterns',
        'time': 'Time & Duration',
        'statistics': 'Data & Graphs'
    };
    return displayNames[categoryName] || categoryName;
}

function formatQuestionType(type) {
    return type.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function updateProgressDisplay() {
    document.getElementById('question-counter').textContent = `Question ${currentQuestion + 1} of 10`;
    document.getElementById('set-progress').textContent = `Set ${currentSet}`;
    
    const progressFill = document.getElementById('question-progress-fill');
    if (progressFill) {
        const percentage = ((currentQuestion + 1) / 10) * 100;
        progressFill.style.width = percentage + '%';
    }
}

function updateQuestionNavigation() {
    document.getElementById('category-breadcrumb').textContent = getCategoryDisplayName(currentCategory);
    document.getElementById('set-breadcrumb').textContent = `Set ${currentSet}`;
}

function updateNavigationAfterAnswer() {
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.disabled = false;
        if (currentQuestion < 9) {
            nextBtn.textContent = 'Next ➡️';
        } else {
            nextBtn.textContent = 'Finish Set 🏁';
        }
    }
    
    const prevBtn = document.getElementById('prev-btn');
    if (prevBtn) {
        prevBtn.disabled = currentQuestion === 0;
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎓 Math Adventure Ready!');
    console.log('📚 Available categories:');
    
    if (typeof QuestionDatabase !== 'undefined') {
        Object.keys(QuestionDatabase).forEach(category => {
            if (category === 'length') return;
            const data = QuestionDatabase[category];
            console.log(`  - ${category}: ${data.length} sets`);
        });
        console.log('✅ All systems ready! Click a category to start!');
    } else {
        console.error('❌ QuestionDatabase not loaded');
    }
});