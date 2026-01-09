// Simple test to verify functionality
console.log('🎓 Ralph Wiggum Test Starting...');

// Test category selection
function testSelectCategory(categoryName) {
    console.log(`📚 Testing category: ${categoryName}`);
    
    if (typeof QuestionDatabase === 'undefined') {
        console.error('❌ QuestionDatabase not found');
        return;
    }
    
    const categoryData = QuestionDatabase[categoryName];
    if (!categoryData) {
        console.error(`❌ Category ${categoryName} not found`);
        return;
    }
    
    console.log(`✅ Found ${categoryData.length} sets in ${categoryName}`);
    
    if (categoryData.length > 0 && categoryData[0].questions) {
        console.log(`✅ First set has ${categoryData[0].questions.length} questions`);
        console.log(`📝 Sample: "${categoryData[0].questions[0].question}"`);
    }
    
    return true;
}

// Test when document loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM loaded, testing categories...');
    
    // Test all categories
    const categories = ['numbers', 'additionSubtraction', 'fractions', 'shapes', 'measurement', 'patterns', 'time', 'statistics'];
    
    categories.forEach(category => {
        testSelectCategory(category);
    });
    
    console.log('🎉 All category tests completed!');
});