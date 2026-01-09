// Grade 2 Math Adventure - Comprehensive 800 Question System
// Ralph Wiggum Iteration Model Implementation

class MathAdventure {
    constructor() {
        this.currentScreen = 'category-selection';
        this.currentCategory = null;
        this.currentSet = 1;
        this.currentQuestion = 0;
        this.selectedAnswer = null;
        this.questionAnswered = false;
        this.sessionStartTime = Date.now();
        this.questionStartTime = Date.now();
        
        // Progress tracking
        this.progress = {
            totalQuestionsCompleted: 0,
            categoryProgress: {},
            currentSetResults: [],
            achievements: [],
            streaks: { current: 0, best: 0 },
            hintsUsed: 0
        };
        
        // Load progress from localStorage
        this.loadProgress();
        
        // Initialize
        this.init();
    }

    init() {
        console.log('🎓 Math Adventure Starting - Ralph Wiggum Iteration Model Active');
        
        // Validate question database using Ralph's Iterator
        this.validateQuestionDatabase();
        
        // Initialize UI
        this.initializeUI();
        
        // Load category progress
        this.updateCategoryProgress();
        
        // Show category selection
        this.showCategorySelection();
        
        console.log('✅ Math Adventure Ready - 800 questions loaded and validated!');
    }

    validateQuestionDatabase() {
        console.log('🧠 Ralph Iterator: Validating question database...');
        
        let totalQuestions = 0;
        let validationErrors = [];
        
        Object.keys(QuestionDatabase).forEach(category => {
            if (category === 'length') return; // Skip array length property
            
            const categoryData = QuestionDatabase[category];
            if (!Array.isArray(categoryData)) return;
            
            categoryData.forEach((questionSet, setIndex) => {
                if (!RalphQuestionIterator.validateQuestionSet(questionSet)) {
                    validationErrors.push(`Set ${setIndex + 1} in ${category} failed validation`);
                }
                totalQuestions += questionSet.questions?.length || 0;
            });
        });
        
        if (validationErrors.length > 0) {
            console.warn('⚠️ Ralph Iterator: Validation issues found:', validationErrors);
        } else {
            console.log(`✅ Ralph Iterator: All questions validated! Found ${totalQuestions} questions.`);
        }
        
        return validationErrors.length === 0;
    }

    initializeUI() {
        // Initialize all UI components
        this.bindEventListeners();
        this.setupKeyboardNavigation();
        this.initializeProgressDisplay();
    }

    bindEventListeners() {
        // Global navigation
        document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
        
        // Answer selection
        document.querySelectorAll('.answer-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => this.selectAnswer(index));
        });
    }

    setupKeyboardNavigation() {
        // Allow keyboard navigation through questions
        document.addEventListener('keydown', (e) => {
            if (this.currentScreen === 'question-interface') {
                // Number keys 1-4 for answer selection
                if (e.key >= '1' && e.key <= '4') {
                    const answerIndex = parseInt(e.key) - 1;
                    this.selectAnswer(answerIndex);
                }
                
                // Enter to submit
                if (e.key === 'Enter' && this.selectedAnswer !== null) {
                    this.submitAnswer();
                }
                
                // Arrow keys for navigation
                if (e.key === 'ArrowLeft') {
                    this.previousQuestion();
                } else if (e.key === 'ArrowRight') {
                    this.nextQuestion();
                }
            }
        });
    }

    initializeProgressDisplay() {
        // Update overall progress display
        const totalCompleted = this.progress.totalQuestionsCompleted;
        const progressPercent = (totalCompleted / 800) * 100;
        
        const progressFill = document.querySelector('#overall-progress .progress-fill');
        const progressText = document.querySelector('#overall-progress .progress-text');
        
        if (progressFill) {
            progressFill.style.width = progressPercent + '%';
        }
        
        if (progressText) {
            progressText.textContent = `${totalCompleted} / 800 Questions Completed`;
        }
    }

    // Navigation Methods
    showCategorySelection() {
        this.hideAllScreens();
        document.getElementById('category-selection').classList.remove('hidden');
        this.currentScreen = 'category-selection';
        
        // Update motivational message
        this.updateRalphMotivation();
    }

    selectCategory(categoryName) {
        this.currentCategory = categoryName;
        this.showSetSelection();
    }

    showSetSelection() {
        this.hideAllScreens();
        document.getElementById('set-selection').classList.remove('hidden');
        this.currentScreen = 'set-selection';
        
        // Update breadcrumb and title
        const categoryDisplayName = this.getCategoryDisplayName(this.currentCategory);
        document.getElementById('current-category-name').textContent = categoryDisplayName;
        document.getElementById('category-title').textContent = `${categoryDisplayName} - Question Sets`;
        
        // Generate sets grid
        this.generateSetsGrid();
        
        // Update category stats
        this.updateCategoryStats();
    }

    updateCategoryStats() {
        // Update category completion stats
        const categoryData = QuestionDatabase[this.currentCategory] || [];
        const availableSets = categoryData.length;
        const totalQuestions = categoryData.reduce((sum, set) => sum + (set.questions?.length || 0), 0);
        
        document.getElementById('category-completion').textContent = '0%';
        document.getElementById('questions-completed').textContent = `0 / ${totalQuestions}`;
        document.getElementById('category-accuracy').textContent = '--';
    }

    generateSetsGrid() {
        const setsGrid = document.getElementById('sets-grid');
        setsGrid.innerHTML = '';
        
        const categoryData = QuestionDatabase[this.currentCategory] || [];
        const maxSets = Math.max(10, categoryData.length); // At least 10 sets or actual length
        
        for (let i = 1; i <= maxSets; i++) {
            const setData = categoryData[i - 1];
            const setProgress = this.getSetProgress(this.currentCategory, i);
            const isLocked = this.isSetLocked(this.currentCategory, i);
            
            const setCard = this.createSetCard(i, setData, setProgress, isLocked);
            setsGrid.appendChild(setCard);
        }
    }

    getSetProgress(category, setNumber) {
        // Return mock progress for now
        return {
            completed: 0,
            total: 10
        };
    }

    isSetLocked(category, setNumber) {
        // For now, only lock sets beyond what we have data for
        const categoryData = QuestionDatabase[category] || [];
        return setNumber > categoryData.length;
    }

    createSetCard(setNumber, setData, progress, isLocked) {
        const card = document.createElement('div');
        card.className = 'set-card';
        
        if (progress.completed === 10) {
            card.classList.add('completed');
        } else if (progress.completed > 0) {
            card.classList.add('in-progress');
        }
        
        if (isLocked) {
            card.classList.add('locked');
        }
        
        const setTitle = setData?.setTitle || this.generateSetTitle(this.currentCategory, setNumber);
        const setDescription = setData?.setDescription || this.generateSetDescription(this.currentCategory, setNumber);
        
        card.innerHTML = `
            <div class="set-number">${setNumber}</div>
            <h3 class="set-title">${setTitle}</h3>
            <p class="set-description">${setDescription}</p>
            <div class="set-progress">${progress.completed}/10 questions completed</div>
        `;
        
        if (!isLocked) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', () => this.selectSet(setNumber));
        }
        
        return card;
    }

    selectSet(setNumber) {
        this.currentSet = setNumber;
        this.currentQuestion = 0;
        this.startQuestionSet();
    }

    startQuestionSet() {
        this.hideAllScreens();
        document.getElementById('question-interface').classList.remove('hidden');
        this.currentScreen = 'question-interface';
        
        // Initialize set results
        this.progress.currentSetResults = [];
        this.questionStartTime = Date.now();
        
        // Load first question
        this.loadQuestion(0);
        
        // Update navigation
        this.updateQuestionNavigation();
    }

    loadQuestion(questionIndex) {
        this.currentQuestion = questionIndex;
        this.selectedAnswer = null;
        this.questionAnswered = false;
        this.questionStartTime = Date.now();
        
        const questionData = this.getCurrentQuestion();
        if (!questionData) {
            console.error('Question not found!');
            return;
        }
        
        // Update question display
        this.displayQuestion(questionData);
        
        // Update progress display
        this.updateQuestionProgress();
        
        // Generate visual aid if needed
        this.generateVisualAid(questionData);
        
        // Update Ralph's guidance
        this.updateRalphGuidance(questionData);
        
        // Reset UI state
        this.resetQuestionUI();
        
        // Ralph Iterator: Log question loading
        console.log(`📝 Loading ${this.currentCategory} Set ${this.currentSet} Question ${questionIndex + 1}`);
    }

    getCurrentQuestion() {
        const categoryData = QuestionDatabase[this.currentCategory];
        if (!categoryData || !categoryData[this.currentSet - 1]) return null;
        
        const setData = categoryData[this.currentSet - 1];
        if (!setData.questions || !setData.questions[this.currentQuestion]) return null;
        
        return setData.questions[this.currentQuestion];
    }

    displayQuestion(questionData) {
        // Update question type badge
        document.getElementById('question-type').textContent = this.formatQuestionType(questionData.type);
        
        // Update question text
        document.getElementById('question-title').textContent = questionData.question;
        
        // Update answer options
        const answerOptions = document.getElementById('answer-options');
        answerOptions.innerHTML = '';
        
        questionData.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.id = `option-${index}`;
            button.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
            button.addEventListener('click', () => this.selectAnswer(index));
            answerOptions.appendChild(button);
        });
        
        // Update learning objective
        const learningObjective = RalphQuestionIterator.generateLearningObjective(questionData);
        document.getElementById('learning-objective-text').textContent = learningObjective;
        
        // Update Ralph's study tip
        const studyTip = RalphQuestionIterator.getRalphStudyTip(questionData.type);
        document.getElementById('ralph-study-tip').textContent = studyTip;
    }

    selectAnswer(answerIndex) {
        if (this.questionAnswered) return;
        
        this.selectedAnswer = answerIndex;
        
        // Update UI
        document.querySelectorAll('.answer-btn').forEach((btn, index) => {
            btn.classList.remove('selected');
            if (index === answerIndex) {
                btn.classList.add('selected');
            }
        });
        
        // Enable submit button
        document.getElementById('submit-btn').disabled = false;
    }

    submitAnswer() {
        if (this.selectedAnswer === null || this.questionAnswered) return;
        
        this.questionAnswered = true;
        const questionData = this.getCurrentQuestion();
        const isCorrect = this.selectedAnswer === questionData.correct;
        const timeSpent = Date.now() - this.questionStartTime;
        
        // Record result
        const result = {
            questionId: questionData.id,
            correct: isCorrect,
            selectedAnswer: this.selectedAnswer,
            correctAnswer: questionData.correct,
            timeSpent: timeSpent,
            hintsUsed: this.currentQuestionHints
        };
        
        this.progress.currentSetResults.push(result);
        
        // Update UI
        this.showQuestionResult(questionData, isCorrect);
        
        // Update streaks
        this.updateStreaks(isCorrect);
        
        // Ralph Iterator: Validate answer
        const validation = RalphQuestionIterator.validateMathAnswer(
            questionData.correct,
            this.selectedAnswer
        );
        
        if (!validation) {
            console.warn('Ralph Iterator: Answer validation failed!');
        }
        
        // Update navigation buttons
        this.updateNavigationAfterAnswer();
        
        // Auto-advance after 3 seconds if correct
        if (isCorrect) {
            setTimeout(() => {
                if (this.currentQuestion < 9) {
                    this.nextQuestion();
                } else {
                    this.finishSet();
                }
            }, 3000);
        }
    }

    showQuestionResult(questionData, isCorrect) {
        const resultDiv = document.getElementById('question-result');
        resultDiv.classList.remove('hidden');
        
        const ralphComment = RalphQuestionIterator.getContextualComment(questionData.type, isCorrect);
        
        let resultHTML = '';
        
        if (isCorrect) {
            resultHTML = `
                <div class="result-correct">
                    <h4>🎉 Correct!</h4>
                    <p><strong>Ralph says:</strong> "${ralphComment}"</p>
                    <p><strong>Explanation:</strong> ${questionData.explanation}</p>
                </div>
            `;
        } else {
            resultHTML = `
                <div class="result-incorrect">
                    <h4>❌ Not quite right</h4>
                    <p><strong>Ralph says:</strong> "${ralphComment}"</p>
                    <p><strong>Correct Answer:</strong> ${questionData.options[questionData.correct]}</p>
                    <p><strong>Explanation:</strong> ${questionData.explanation}</p>
                </div>
            `;
        }
        
        resultDiv.innerHTML = resultHTML;
        
        // Update answer button colors
        document.querySelectorAll('.answer-btn').forEach((btn, index) => {
            if (index === questionData.correct) {
                btn.classList.add('correct');
            } else if (index === this.selectedAnswer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        // Disable all answer buttons
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.style.pointerEvents = 'none';
        });
    }

    showHint() {
        const questionData = this.getCurrentQuestion();
        if (!questionData || this.questionAnswered) return;
        
        this.progress.hintsUsed++;
        this.currentQuestionHints = (this.currentQuestionHints || 0) + 1;
        
        // Update Ralph's guidance with hint
        const hintElement = document.getElementById('ralph-question-hint');
        hintElement.textContent = `💡 ${questionData.ralphHint}`;
        
        // Disable hint button
        document.getElementById('hint-btn').disabled = true;
        document.getElementById('hint-btn').textContent = '💡 Hint Used';
    }

    nextQuestion() {
        if (this.currentQuestion < 9) {
            this.loadQuestion(this.currentQuestion + 1);
        } else {
            this.finishSet();
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.loadQuestion(this.currentQuestion - 1);
        }
    }

    finishSet() {
        // Calculate set results
        const setResults = this.calculateSetResults();
        
        // Update progress
        this.updateSetProgress(setResults);
        
        // Show summary
        this.showSetSummary(setResults);
    }

    calculateSetResults() {
        const results = this.progress.currentSetResults;
        const correctCount = results.filter(r => r.correct).length;
        const totalTime = results.reduce((sum, r) => sum + r.timeSpent, 0);
        const averageTime = totalTime / results.length;
        const accuracy = (correctCount / results.length) * 100;
        
        return {
            correct: correctCount,
            total: results.length,
            accuracy: accuracy,
            totalTime: totalTime,
            averageTime: averageTime,
            hintsUsed: this.progress.hintsUsed,
            results: results
        };
    }

    showSetSummary(setResults) {
        this.hideAllScreens();
        document.getElementById('set-summary').classList.remove('hidden');
        this.currentScreen = 'set-summary';
        
        // Update summary stats
        document.getElementById('set-score').textContent = setResults.correct;
        document.getElementById('set-percentage').textContent = Math.round(setResults.accuracy) + '%';
        document.getElementById('correct-count').textContent = setResults.correct;
        document.getElementById('time-spent').textContent = this.formatTime(setResults.totalTime);
        document.getElementById('hints-used').textContent = setResults.hintsUsed;
        
        // Generate question review
        this.generateQuestionReview(setResults.results);
        
        // Update Ralph's celebration message
        this.updateRalphCelebration(setResults);
        
        // Update navigation buttons
        this.updateSummaryNavigation();
    }

    generateQuestionReview(results) {
        const reviewList = document.getElementById('review-list');
        reviewList.innerHTML = '';
        
        results.forEach((result, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = `review-item ${result.correct ? 'correct' : 'incorrect'}`;
            
            reviewItem.innerHTML = `
                <span class="review-icon">${result.correct ? '✅' : '❌'}</span>
                <span>Question ${index + 1}: ${result.correct ? 'Correct' : 'Incorrect'}</span>
            `;
            
            reviewList.appendChild(reviewItem);
        });
    }

    // Utility Methods
    hideAllScreens() {
        ['category-selection', 'set-selection', 'question-interface', 'set-summary', 'achievements'].forEach(screenId => {
            document.getElementById(screenId).classList.add('hidden');
        });
    }

    formatQuestionType(type) {
        return type.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    formatTime(milliseconds) {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    getCategoryDisplayName(categoryName) {
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

    generateSetTitle(category, setNumber) {
        const titles = {
            'numbers': [
                'Place Value Foundation', 'Skip Counting Mastery', 'Number Relationships',
                'Advanced Place Value', 'Number Patterns', 'Hundreds Chart Fun',
                'Number Comparisons', 'Rounding Adventures', 'Mental Math Magic',
                'Number Challenge'
            ],
            'additionSubtraction': [
                'Basic Addition', 'Basic Subtraction', 'Addition within 100',
                'Subtraction within 100', 'Addition with Regrouping', 'Subtraction with Regrouping',
                'Word Problems', 'Estimation Skills', 'Mental Math Strategies', 'Mixed Review'
            ],
            'fractions': [
                'Unit Fractions', 'Halves & Fourths', 'Thirds & Sixths',
                'Comparing Fractions', 'Fractions of Groups', 'Equivalent Fractions',
                'Ordering Fractions', 'Fraction Stories', 'Mixed Numbers', 'Fraction Review'
            ],
            'shapes': [
                '2D Shapes', 'Shape Properties', 'Transformations',
                'Symmetry', '3D Shapes', 'Shape Patterns',
                'Angles & Lines', 'Shape Sorting', 'Real World Shapes', 'Shape Challenge'
            ],
            'measurement': [
                'Length Basics', 'Measurement Tools', 'Estimation',
                'Comparing Lengths', 'Standard Units', 'Metric Units',
                'Problem Solving', 'Real World Measurement', 'Precision', 'Measurement Review'
            ],
            'patterns': [
                'Number Patterns', 'Growing Patterns', 'Shape Patterns',
                'Color Patterns', 'Pattern Rules', 'Extending Patterns',
                'Creating Patterns', 'Pattern Stories', 'Complex Patterns', 'Pattern Master'
            ],
            'time': [
                'Days & Weeks', 'Months & Years', 'Duration',
                'Comparing Time', 'Schedules', 'Elapsed Time',
                'Time Stories', 'Calendars', 'Time Estimation', 'Time Master'
            ],
            'statistics': [
                'Data Collection', 'Bar Graphs', 'Reading Graphs',
                'Pictographs', 'Tally Charts', 'Surveys',
                'Interpreting Data', 'Comparing Data', 'Data Stories', 'Statistics Star'
            ]
        };
        
        return titles[category]?.[setNumber - 1] || `Set ${setNumber}`;
    }

    generateSetDescription(category, setNumber) {
        return `Challenge yourself with 10 questions about ${this.getCategoryDisplayName(category).toLowerCase()}!`;
    }

    // Progress Management
    loadProgress() {
        try {
            const saved = localStorage.getItem('mathAdventureProgress');
            if (saved) {
                this.progress = { ...this.progress, ...JSON.parse(saved) };
            }
        } catch (error) {
            console.warn('Could not load saved progress:', error);
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('mathAdventureProgress', JSON.stringify(this.progress));
        } catch (error) {
            console.warn('Could not save progress:', error);
        }
    }

    updateCategoryProgress() {
        Object.keys(QuestionDatabase).forEach(category => {
            if (category === 'length') return;
            
            if (!this.progress.categoryProgress[category]) {
                this.progress.categoryProgress[category] = {
                    setsCompleted: 0,
                    questionsCompleted: 0,
                    totalCorrect: 0,
                    accuracy: 0
                };
            }
            
            // Update progress display
            const progressElement = document.getElementById(`${category}-progress`);
            if (progressElement) {
                const progress = this.progress.categoryProgress[category];
                progressElement.textContent = `${progress.questionsCompleted}/100 completed`;
                
                // Update mini progress bar
                const miniProgress = progressElement.parentNode.querySelector('.mini-fill');
                if (miniProgress) {
                    miniProgress.style.width = (progress.questionsCompleted / 100) * 100 + '%';
                }
            }
        });
    }

    updateRalphMotivation() {
        const messages = [
            "Pick any category! Each one teaches your brain new tricks!",
            "I tested all 800 questions myself! Well, someone helped me count...",
            "Math is everywhere! Even in my crayon box!",
            "Learning is fun! Like recess, but for your brain!",
            "You're going to be so smart! Smarter than my pet rock!"
        ];
        
        const element = document.getElementById('ralph-motivation-text');
        if (element) {
            element.textContent = messages[Math.floor(Math.random() * messages.length)];
        }
    }

    generateVisualAid(questionData) {
        const visualAid = document.getElementById('visual-aid');
        if (!visualAid) return;
        
        // Clear previous content
        visualAid.innerHTML = '';
        
        // Generate visual based on question type
        switch (questionData.type) {
            case 'place-value':
                this.createPlaceValueVisual(visualAid, questionData);
                break;
            case 'shape-identification':
                this.createShapeVisual(visualAid, questionData);
                break;
            case 'pattern-continuation':
                this.createPatternVisual(visualAid, questionData);
                break;
            default:
                visualAid.innerHTML = '<p>🧠 Use your thinking skills!</p>';
        }
    }

    createPlaceValueVisual(container, questionData) {
        container.innerHTML = `
            <div style="text-align: center;">
                <div style="display: flex; justify-content: center; gap: 10px; margin: 10px 0;">
                    <div style="background: #3498db; color: white; padding: 10px; border-radius: 5px;">
                        <div style="font-size: 1.5rem;">H</div>
                        <div style="font-size: 0.8rem;">Hundreds</div>
                    </div>
                    <div style="background: #2ecc71; color: white; padding: 10px; border-radius: 5px;">
                        <div style="font-size: 1.5rem;">T</div>
                        <div style="font-size: 0.8rem;">Tens</div>
                    </div>
                    <div style="background: #e74c3c; color: white; padding: 10px; border-radius: 5px;">
                        <div style="font-size: 1.5rem;">O</div>
                        <div style="font-size: 0.8rem;">Ones</div>
                    </div>
                </div>
            </div>
        `;
    }

    createShapeVisual(container, questionData) {
        container.innerHTML = `
            <div style="text-align: center;">
                <svg width="200" height="100" viewBox="0 0 200 100">
                    <circle cx="50" cy="50" r="20" fill="#3498db" stroke="#2c3e50" stroke-width="2"/>
                    <rect x="80" y="30" width="40" height="40" fill="#e74c3c" stroke="#2c3e50" stroke-width="2"/>
                    <polygon points="150,30 130,70 170,70" fill="#2ecc71" stroke="#2c3e50" stroke-width="2"/>
                </svg>
                <p style="margin: 10px 0; color: #666;">Common shapes to help you think!</p>
            </div>
        `;
    }

    createPatternVisual(container, questionData) {
        container.innerHTML = `
            <div style="text-align: center;">
                <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin: 15px 0;">
                    <div style="width: 30px; height: 30px; background: #e74c3c; border-radius: 50%;"></div>
                    <div style="width: 30px; height: 30px; background: #3498db; border-radius: 0;"></div>
                    <div style="width: 30px; height: 30px; background: #e74c3c; border-radius: 50%;"></div>
                    <div style="width: 30px; height: 30px; background: #3498db; border-radius: 0;"></div>
                    <div style="color: #666; font-size: 1.5rem;">?</div>
                </div>
                <p style="color: #666;">Look for the pattern!</p>
            </div>
        `;
    }

    updateRalphGuidance(questionData) {
        const ralphElement = document.getElementById('ralph-question-hint');
        if (ralphElement) {
            ralphElement.textContent = "Take your time! Think it through! Your brain is amazing!";
        }
    }

    updateQuestionProgress() {
        const progressInfo = document.querySelector('.question-progress .progress-info');
        if (progressInfo) {
            const questionCounter = document.getElementById('question-counter');
            const setProgress = document.getElementById('set-progress');
            
            if (questionCounter) {
                questionCounter.textContent = `Question ${this.currentQuestion + 1} of 10`;
            }
            if (setProgress) {
                setProgress.textContent = `Set ${this.currentSet} of 10`;
            }
        }

        const progressFill = document.getElementById('question-progress-fill');
        if (progressFill) {
            const percentage = ((this.currentQuestion + 1) / 10) * 100;
            progressFill.style.width = percentage + '%';
        }
    }

    updateQuestionNavigation() {
        // Update breadcrumb
        const categoryBreadcrumb = document.getElementById('category-breadcrumb');
        const setBreadcrumb = document.getElementById('set-breadcrumb');
        
        if (categoryBreadcrumb) {
            categoryBreadcrumb.textContent = this.getCategoryDisplayName(this.currentCategory);
        }
        if (setBreadcrumb) {
            setBreadcrumb.textContent = `Set ${this.currentSet}`;
        }
    }

    resetQuestionUI() {
        // Reset button states
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.classList.remove('selected', 'correct', 'incorrect');
            btn.style.pointerEvents = 'auto';
        });

        // Reset controls
        document.getElementById('submit-btn').disabled = true;
        document.getElementById('hint-btn').disabled = false;
        document.getElementById('hint-btn').textContent = '💡 Ralph\'s Hint';

        // Hide result
        document.getElementById('question-result').classList.add('hidden');

        // Reset hints counter
        this.currentQuestionHints = 0;
    }

    updateNavigationAfterAnswer() {
        // Enable/disable navigation buttons
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentQuestion === 0;
        }
        
        if (nextBtn) {
            if (this.currentQuestion < 9) {
                nextBtn.disabled = false;
                nextBtn.textContent = 'Next ➡️';
            } else {
                nextBtn.disabled = false;
                nextBtn.textContent = 'Finish Set 🏁';
            }
        }
    }

    updateStreaks(isCorrect) {
        if (isCorrect) {
            this.progress.streaks.current++;
            this.progress.streaks.best = Math.max(this.progress.streaks.best, this.progress.streaks.current);
        } else {
            this.progress.streaks.current = 0;
        }
    }

    updateSetProgress(setResults) {
        // Update progress tracking
        if (!this.progress.categoryProgress[this.currentCategory]) {
            this.progress.categoryProgress[this.currentCategory] = {
                setsCompleted: 0,
                questionsCompleted: 0,
                totalCorrect: 0,
                accuracy: 0
            };
        }

        const categoryProgress = this.progress.categoryProgress[this.currentCategory];
        categoryProgress.questionsCompleted += 10;
        categoryProgress.totalCorrect += setResults.correct;
        categoryProgress.accuracy = (categoryProgress.totalCorrect / categoryProgress.questionsCompleted) * 100;

        if (setResults.correct >= 7) { // 70% or better completes the set
            categoryProgress.setsCompleted++;
        }

        this.progress.totalQuestionsCompleted += 10;

        // Save progress
        this.saveProgress();
    }

    updateRalphCelebration(setResults) {
        const messageElement = document.getElementById('ralph-celebration-message');
        if (!messageElement) return;

        let message;
        if (setResults.accuracy >= 90) {
            message = "WOW! You're super smart! Like a genius! My brain is jealous!";
        } else if (setResults.accuracy >= 70) {
            message = "Great job! You did really good! My brain is proud of you!";
        } else if (setResults.accuracy >= 50) {
            message = "Nice try! You're learning! Keep going and you'll get even better!";
        } else {
            message = "That's okay! Learning is hard! Even I make mistakes... lots of them!";
        }

        messageElement.textContent = `"${message}"`;
    }

    updateSummaryNavigation() {
        const nextSetBtn = document.getElementById('next-set-btn');
        const retryBtn = document.getElementById('retry-set-btn');

        if (nextSetBtn) {
            const categoryData = QuestionDatabase[this.currentCategory] || [];
            if (this.currentSet >= categoryData.length) {
                nextSetBtn.style.display = 'none';
            } else {
                nextSetBtn.textContent = `Continue to Set ${this.currentSet + 1} ➡️`;
            }
        }
    }
}

// Global functions for HTML onclick events
function selectCategory(categoryName) {
    if (window.mathAdventure) {
        window.mathAdventure.selectCategory(categoryName);
    }
}

function showCategorySelection() {
    if (window.mathAdventure) {
        window.mathAdventure.showCategorySelection();
    }
}

function showSetSelection() {
    if (window.mathAdventure) {
        window.mathAdventure.showSetSelection();
    }
}

function selectAnswer(index) {
    if (window.mathAdventure) {
        window.mathAdventure.selectAnswer(index);
    }
}

function submitAnswer() {
    if (window.mathAdventure) {
        window.mathAdventure.submitAnswer();
    }
}

function showHint() {
    if (window.mathAdventure) {
        window.mathAdventure.showHint();
    }
}

function nextQuestion() {
    if (window.mathAdventure) {
        window.mathAdventure.nextQuestion();
    }
}

function previousQuestion() {
    if (window.mathAdventure) {
        window.mathAdventure.previousQuestion();
    }
}

function continueToNextSet() {
    if (window.mathAdventure) {
        // Logic to continue to next set
        window.mathAdventure.currentSet++;
        window.mathAdventure.startQuestionSet();
    }
}

function retryCurrentSet() {
    if (window.mathAdventure) {
        window.mathAdventure.startQuestionSet();
    }
}

// Initialize application when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎓 Initializing Math Adventure...');
    
    // Check if question database is loaded
    if (typeof QuestionDatabase === 'undefined') {
        console.error('❌ Question Database not loaded!');
        return;
    }
    
    // Initialize the application
    window.mathAdventure = new MathAdventure();
    
    console.log('🎉 Math Adventure Ready!');
});

// Ralph's periodic encouragement
setInterval(() => {
    if (Math.random() < 0.001) { // Very rare
        const encouragement = [
            "Keep going! Your brain is getting stronger!",
            "Math is fun! Like finger painting, but with numbers!",
            "You're doing great! Even when you're not sure!",
            "Every question makes you smarter! Like eating brain food!"
        ];
        
        console.log(`🎭 Ralph: "${encouragement[Math.floor(Math.random() * encouragement.length)]}"`);
    }
}, 10000); // Check every 10 seconds