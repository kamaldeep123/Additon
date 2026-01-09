// Ralph Wiggum Comprehensive System Test
console.log('🧠 Ralph Iterator: Starting comprehensive system validation...');

function ralphIterationTest() {
    let totalTests = 0;
    let passedTests = 0;
    let failures = [];

    console.log('📊 Testing Question Database...');
    
    // Test 1: Database Loading
    totalTests++;
    if (typeof QuestionDatabase !== 'undefined') {
        console.log('✅ Question Database loaded successfully');
        passedTests++;
    } else {
        console.error('❌ Question Database failed to load');
        failures.push('Database loading failed');
    }

    // Test 2: Category Validation
    const expectedCategories = ['numbers', 'additionSubtraction', 'fractions', 'shapes', 'measurement', 'patterns', 'time', 'statistics'];
    
    expectedCategories.forEach(category => {
        totalTests++;
        if (QuestionDatabase[category] && Array.isArray(QuestionDatabase[category])) {
            const sets = QuestionDatabase[category];
            if (sets.length === 10) {
                console.log(`✅ Category '${category}': ${sets.length} sets found`);
                passedTests++;
                
                // Test each set has 10 questions
                sets.forEach((set, setIndex) => {
                    totalTests++;
                    if (set.questions && set.questions.length === 10) {
                        console.log(`✅ ${category} Set ${setIndex + 1}: ${set.questions.length} questions`);
                        passedTests++;
                    } else {
                        console.error(`❌ ${category} Set ${setIndex + 1}: Expected 10 questions, got ${set.questions?.length || 0}`);
                        failures.push(`${category} Set ${setIndex + 1} has incorrect question count`);
                    }
                });
            } else {
                console.error(`❌ Category '${category}': Expected 10 sets, got ${sets.length}`);
                failures.push(`${category} has incorrect set count: ${sets.length}`);
            }
        } else {
            console.error(`❌ Category '${category}' missing or invalid`);
            failures.push(`${category} category validation failed`);
        }
    });

    // Test 3: Question Structure Validation
    let questionCount = 0;
    Object.keys(QuestionDatabase).forEach(category => {
        if (category === 'length') return;
        
        QuestionDatabase[category].forEach((set, setIndex) => {
            set.questions.forEach((question, qIndex) => {
                totalTests++;
                questionCount++;
                
                const required = ['id', 'type', 'question', 'options', 'correct', 'explanation', 'ralphHint'];
                const hasAllFields = required.every(field => question.hasOwnProperty(field));
                const hasCorrectOptions = question.options && question.options.length === 4;
                const hasValidCorrect = question.correct >= 0 && question.correct < 4;
                
                if (hasAllFields && hasCorrectOptions && hasValidCorrect) {
                    passedTests++;
                } else {
                    console.error(`❌ ${category} Set ${setIndex + 1} Q${qIndex + 1}: Invalid question structure`);
                    failures.push(`${category} Set ${setIndex + 1} Question ${qIndex + 1} structure invalid`);
                }
            });
        });
    });

    // Test 4: Ralph Iterator Functions
    totalTests++;
    if (typeof RalphQuestionIterator !== 'undefined') {
        console.log('✅ Ralph Iterator functions loaded');
        passedTests++;
        
        // Test Ralph's contextual comments
        totalTests++;
        try {
            const comment = RalphQuestionIterator.getContextualComment('place-value', true);
            if (comment && typeof comment === 'string') {
                console.log(`✅ Ralph says: "${comment}"`);
                passedTests++;
            } else {
                failures.push('Ralph comment generation failed');
            }
        } catch (error) {
            console.error('❌ Ralph comment function failed:', error);
            failures.push('Ralph comment function error');
        }
    } else {
        console.error('❌ Ralph Iterator functions missing');
        failures.push('Ralph Iterator not loaded');
    }

    // Test 5: Navigation Functions
    const navFunctions = ['selectCategory', 'showCategorySelection', 'selectAnswer', 'submitAnswer', 'nextQuestion', 'previousQuestion'];
    navFunctions.forEach(func => {
        totalTests++;
        if (typeof window[func] === 'function') {
            console.log(`✅ Navigation function '${func}' available`);
            passedTests++;
        } else {
            console.error(`❌ Navigation function '${func}' missing`);
            failures.push(`${func} function not found`);
        }
    });

    // Final Report
    console.log('\n🎓 RALPH ITERATION TEST RESULTS:');
    console.log(`📊 Total Tests: ${totalTests}`);
    console.log(`✅ Passed: ${passedTests}`);
    console.log(`❌ Failed: ${totalTests - passedTests}`);
    console.log(`📚 Total Questions Found: ${questionCount}`);
    
    if (failures.length === 0) {
        console.log('🎉 ALL TESTS PASSED! Ralph approves!');
        console.log('✨ System is ready for kids to learn math!');
        return true;
    } else {
        console.error('💥 FAILURES DETECTED:');
        failures.forEach(failure => console.error(`   - ${failure}`));
        return false;
    }
}

// Run the test when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ralphIterationTest);
} else {
    ralphIterationTest();
}