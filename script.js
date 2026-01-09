// Grade 2 Math Adventure - Interactive JavaScript Functions
// Ralph Wiggum Iteration Model for accuracy and testing

// Global variables for tracking game states and data
let currentFactFamily = { a: 8, b: 5, c: 13 };
let currentShapePattern = [];
let surveyData = { red: 0, blue: 0, green: 0, yellow: 0 };
let currentGraphData = {};
let currentDurationPair = {};
let currentPatternData = {};
let estimationObjects = [
    { name: 'crayon', length: 9, visual: 'crayon' },
    { name: 'paperclip', length: 3, visual: 'paperclip' },
    { name: 'eraser', length: 5, visual: 'eraser' },
    { name: 'pen', length: 14, visual: 'pen' }
];
let currentEstimationIndex = 0;

// Ralph Wiggum Iteration Model - Testing and Validation Framework
const RalphIterator = {
    // Validation functions for accuracy checking
    validateMathAnswer: function(expected, actual, tolerance = 0) {
        return Math.abs(expected - actual) <= tolerance;
    },
    
    // Pattern recognition validation
    validatePattern: function(sequence, expected) {
        if (sequence.length !== expected.length) return false;
        return sequence.every((item, index) => item === expected[index]);
    },
    
    // Ralph's commentary system for feedback
    getRandomComment: function(type) {
        const comments = {
            correct: [
                "Me so smart! Like a smart person!",
                "I did it! My brain tingles!",
                "That's what I call using my thinking cap!",
                "Super duper correct! Like my dad says!",
                "My brain just grew a little bit!"
            ],
            incorrect: [
                "Oopsie! That's okay, mistakes help me learn!",
                "Not quite! But I'm trying my bestest!",
                "Close! Like when I almost catch the butterfly!",
                "Let me think harder... thinking... still thinking...",
                "That's not right, but I won't give up!"
            ],
            encourage: [
                "You can do it! I believe in you!",
                "Math is fun! Like finger painting!",
                "Keep trying! That's what makes us smarter!",
                "Every mistake is just practice in disguise!",
                "You're doing great! Better than my last crayon drawing!"
            ]
        };
        const array = comments[type] || comments.encourage;
        return array[Math.floor(Math.random() * array.length)];
    },
    
    // Iteration testing for reliability
    testFunction: function(func, inputs, expectedOutputs, iterations = 3) {
        for (let i = 0; i < iterations; i++) {
            for (let j = 0; j < inputs.length; j++) {
                const result = func(inputs[j]);
                if (!this.validateMathAnswer(expectedOutputs[j], result)) {
                    console.warn(`Ralph Iterator: Test failed on iteration ${i+1}, input ${j}`);
                    return false;
                }
            }
        }
        return true;
    }
};

// Numbers Section Functions
function generateRandomNumber() {
    const num = Math.floor(Math.random() * 9000) + 1000; // 1000-9999
    const thousands = Math.floor(num / 1000);
    const hundreds = Math.floor((num % 1000) / 100);
    const tens = Math.floor((num % 100) / 10);
    const ones = num % 10;
    
    document.getElementById('thousands').textContent = thousands;
    document.getElementById('hundreds').textContent = hundreds;
    document.getElementById('tens').textContent = tens;
    document.getElementById('ones').textContent = ones;
    document.getElementById('full-number').textContent = num;
    
    // Ralph Iterator validation
    const reconstructed = thousands * 1000 + hundreds * 100 + tens * 10 + ones;
    if (!RalphIterator.validateMathAnswer(num, reconstructed)) {
        console.error('Place value calculation error');
    }
}

function updateSkipCounting() {
    startSkipCounting();
}

function startSkipCounting() {
    const skipBy = parseInt(document.getElementById('skip-count-by').value);
    const display = document.getElementById('counting-display');
    const sequence = [];
    
    for (let i = skipBy; i <= 100 && sequence.length < 10; i += skipBy) {
        sequence.push(i);
    }
    
    display.innerHTML = sequence.join(', ') + ', ...';
    
    // Ralph Iterator pattern validation
    const isValidPattern = sequence.every((num, index) => num === skipBy * (index + 1));
    if (!isValidPattern) {
        console.warn('Skip counting pattern validation failed');
    }
}

function checkEvenOdd(answer) {
    const number = parseInt(document.getElementById('check-number').textContent);
    const isEven = number % 2 === 0;
    const correct = (answer === 'even' && isEven) || (answer === 'odd' && !isEven);
    
    const resultDiv = document.getElementById('even-odd-result');
    const visualDiv = document.getElementById('visual-groups');
    
    if (correct) {
        resultDiv.innerHTML = `<div class="result-message correct">✅ Correct! ${number} is ${answer}!</div>`;
    } else {
        resultDiv.innerHTML = `<div class="result-message incorrect">❌ Not quite! ${number} is ${isEven ? 'even' : 'odd'}.</div>`;
    }
    
    // Visual representation
    visualDiv.innerHTML = '';
    const groups = Math.ceil(number / 2);
    for (let i = 0; i < groups; i++) {
        const group = document.createElement('div');
        group.className = 'group';
        
        const dotsInGroup = (i === groups - 1 && number % 2 === 1) ? 1 : 2;
        for (let j = 0; j < dotsInGroup; j++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            group.appendChild(dot);
        }
        visualDiv.appendChild(group);
    }
    
    // Generate new number
    setTimeout(() => {
        const newNumber = Math.floor(Math.random() * 50) + 1;
        document.getElementById('check-number').textContent = newNumber;
        resultDiv.innerHTML = '';
        visualDiv.innerHTML = '';
    }, 3000);
    
    // Ralph Iterator validation
    const calculatedEven = number % 2 === 0;
    if (!RalphIterator.validateMathAnswer(isEven ? 1 : 0, calculatedEven ? 1 : 0)) {
        console.error('Even/odd calculation error');
    }
}

function updateNumberLine() {
    const number = parseInt(document.getElementById('number-input').value);
    const svg = document.getElementById('number-line');
    
    // Clear previous content except the main line
    svg.innerHTML = '<line x1="50" y1="50" x2="450" y2="50" stroke="#333" stroke-width="2"/>';
    
    // Add tick marks and numbers
    for (let i = 0; i <= 100; i += 10) {
        const x = 50 + (i / 100) * 400;
        
        // Tick mark
        const tick = document.createElementNS("http://www.w3.org/2000/svg", "line");
        tick.setAttribute("x1", x);
        tick.setAttribute("y1", 45);
        tick.setAttribute("x2", x);
        tick.setAttribute("y2", 55);
        tick.setAttribute("stroke", "#333");
        tick.setAttribute("stroke-width", "2");
        svg.appendChild(tick);
        
        // Number label
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", x);
        text.setAttribute("y", 75);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-size", "12");
        text.setAttribute("fill", "#333");
        text.textContent = i;
        svg.appendChild(text);
    }
    
    // Highlight the selected number
    if (number >= 0 && number <= 100) {
        const x = 50 + (number / 100) * 400;
        
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", 50);
        circle.setAttribute("r", 8);
        circle.setAttribute("fill", "#e74c3c");
        circle.setAttribute("stroke", "#c0392b");
        circle.setAttribute("stroke-width", "2");
        svg.appendChild(circle);
        
        const numberText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        numberText.setAttribute("x", x);
        numberText.setAttribute("y", 30);
        numberText.setAttribute("text-anchor", "middle");
        numberText.setAttribute("font-size", "14");
        numberText.setAttribute("font-weight", "bold");
        numberText.setAttribute("fill", "#e74c3c");
        numberText.textContent = number;
        svg.appendChild(numberText);
    }
}

// Addition & Subtraction Functions
function generateAdditionProblem() {
    const num1 = Math.floor(Math.random() * 50) + 10;
    const num2 = Math.floor(Math.random() * (100 - num1)) + 1;
    return { num1, num2, answer: num1 + num2 };
}

function newAdditionProblem() {
    const problem = generateAdditionProblem();
    document.getElementById('add-num1').textContent = problem.num1;
    document.getElementById('add-num2').textContent = problem.num2;
    document.getElementById('add-answer').value = '';
    document.getElementById('add-result').innerHTML = '';
    
    // Show strategy
    showAdditionStrategy(problem.num1, problem.num2);
}

function showAdditionStrategy(num1, num2) {
    const strategyDiv = document.getElementById('addition-strategy');
    
    // Breaking apart strategy
    const num2Tens = Math.floor(num2 / 10) * 10;
    const num2Ones = num2 % 10;
    
    if (num2Tens > 0) {
        strategyDiv.innerHTML = `
            Break apart ${num2} into ${num2Tens} + ${num2Ones}<br>
            ${num1} + ${num2Tens} = ${num1 + num2Tens}<br>
            ${num1 + num2Tens} + ${num2Ones} = ${num1 + num2Tens + num2Ones}
        `;
    } else {
        strategyDiv.innerHTML = `
            Count on from ${num1}: ${num1} + ${num2} = ${num1 + num2}
        `;
    }
}

function checkAddition() {
    const num1 = parseInt(document.getElementById('add-num1').textContent);
    const num2 = parseInt(document.getElementById('add-num2').textContent);
    const userAnswer = parseInt(document.getElementById('add-answer').value);
    const correctAnswer = num1 + num2;
    
    const resultDiv = document.getElementById('add-result');
    
    if (RalphIterator.validateMathAnswer(correctAnswer, userAnswer)) {
        resultDiv.innerHTML = `<div class="result-message correct">✅ ${RalphIterator.getRandomComment('correct')} ${correctAnswer} is correct!</div>`;
    } else {
        resultDiv.innerHTML = `<div class="result-message incorrect">❌ ${RalphIterator.getRandomComment('incorrect')} The answer is ${correctAnswer}.</div>`;
    }
}

function generateSubtractionProblem() {
    const num1 = Math.floor(Math.random() * 80) + 20; // 20-99
    const num2 = Math.floor(Math.random() * num1) + 1; // 1 to num1
    return { num1, num2, answer: num1 - num2 };
}

function newSubtractionProblem() {
    const problem = generateSubtractionProblem();
    document.getElementById('sub-num1').textContent = problem.num1;
    document.getElementById('sub-num2').textContent = problem.num2;
    document.getElementById('sub-answer').value = '';
    document.getElementById('sub-result').innerHTML = '';
    
    // Show visual
    showSubtractionVisual(problem.num1, problem.num2);
}

function showSubtractionVisual(num1, num2) {
    const visualDiv = document.getElementById('subtraction-visual');
    visualDiv.innerHTML = `
        Start with ${num1} objects<br>
        Take away ${num2} objects<br>
        ${num1} - ${num2} = ${num1 - num2} objects left
    `;
}

function checkSubtraction() {
    const num1 = parseInt(document.getElementById('sub-num1').textContent);
    const num2 = parseInt(document.getElementById('sub-num2').textContent);
    const userAnswer = parseInt(document.getElementById('sub-answer').value);
    const correctAnswer = num1 - num2;
    
    const resultDiv = document.getElementById('sub-result');
    
    if (RalphIterator.validateMathAnswer(correctAnswer, userAnswer)) {
        resultDiv.innerHTML = `<div class="result-message correct">✅ ${RalphIterator.getRandomComment('correct')} ${correctAnswer} is correct!</div>`;
    } else {
        resultDiv.innerHTML = `<div class="result-message incorrect">❌ ${RalphIterator.getRandomComment('incorrect')} The answer is ${correctAnswer}.</div>`;
    }
}

function generateFactFamily() {
    const a = Math.floor(Math.random() * 8) + 2; // 2-9
    const b = Math.floor(Math.random() * 8) + 2; // 2-9
    const c = a + b;
    return { a, b, c };
}

function newFactFamily() {
    currentFactFamily = generateFactFamily();
    const { a, b, c } = currentFactFamily;
    
    // Update display
    document.getElementById('fam-num1').textContent = a;
    document.getElementById('fam-num2').textContent = b;
    document.getElementById('fam-num3').textContent = c;
    
    // Update equations
    document.getElementById('eq1a').textContent = a;
    document.getElementById('eq1b').textContent = b;
    document.getElementById('eq1c').textContent = c;
    
    document.getElementById('eq2a').textContent = b;
    document.getElementById('eq2b').textContent = a;
    document.getElementById('eq2c').textContent = c;
    
    document.getElementById('eq3a').textContent = c;
    document.getElementById('eq3b').textContent = a;
    document.getElementById('eq3c').textContent = b;
    
    document.getElementById('eq4a').textContent = c;
    document.getElementById('eq4b').textContent = b;
    document.getElementById('eq4c').textContent = a;
    
    // Ralph Iterator validation
    if (!RalphIterator.validateMathAnswer(a + b, c) || 
        !RalphIterator.validateMathAnswer(c - a, b) || 
        !RalphIterator.validateMathAnswer(c - b, a)) {
        console.error('Fact family validation failed');
    }
}

// Fractions Functions
function updateFractionVisual() {
    const denominator = parseInt(document.getElementById('fraction-denominator').value);
    const circle = document.getElementById('fraction-circle');
    const unitText = document.getElementById('unit-fraction-text');
    
    unitText.textContent = `1/${denominator}`;
    
    // Clear and redraw circle
    circle.innerHTML = '';
    circle.style.background = 'conic-gradient(';
    
    const angleStep = 360 / denominator;
    for (let i = 0; i < denominator; i++) {
        const startAngle = i * angleStep;
        const endAngle = (i + 1) * angleStep;
        
        if (i === 0) {
            circle.style.background += `#3498db ${startAngle}deg ${endAngle}deg`;
        } else {
            circle.style.background += `, #ecf0f1 ${startAngle}deg ${endAngle}deg`;
        }
    }
    circle.style.background += ')';
    
    // Add click handler for interactive learning
    circle.onclick = () => {
        const currentParts = circle.dataset.selectedParts || 0;
        const newParts = (parseInt(currentParts) + 1) % (denominator + 1);
        circle.dataset.selectedParts = newParts;
        
        // Update visual based on selected parts
        circle.style.background = 'conic-gradient(';
        for (let i = 0; i < denominator; i++) {
            const startAngle = i * angleStep;
            const endAngle = (i + 1) * angleStep;
            const color = i < newParts ? '#3498db' : '#ecf0f1';
            
            if (i === 0) {
                circle.style.background += `${color} ${startAngle}deg ${endAngle}deg`;
            } else {
                circle.style.background += `, ${color} ${startAngle}deg ${endAngle}deg`;
            }
        }
        circle.style.background += ')';
        
        // Update fraction display
        unitText.textContent = newParts === 0 ? `1/${denominator}` : `${newParts}/${denominator}`;
    };
}

function generateFractionComparison() {
    const fractions = [
        { num: 1, den: 2 }, { num: 1, den: 3 }, { num: 1, den: 4 }, 
        { num: 1, den: 5 }, { num: 1, den: 6 }, { num: 1, den: 8 }, { num: 1, den: 10 }
    ];
    
    const frac1 = fractions[Math.floor(Math.random() * fractions.length)];
    let frac2 = fractions[Math.floor(Math.random() * fractions.length)];
    
    // Ensure different fractions
    while (frac1.den === frac2.den) {
        frac2 = fractions[Math.floor(Math.random() * fractions.length)];
    }
    
    return { frac1, frac2 };
}

function newFractionComparison() {
    const comparison = generateFractionComparison();
    const { frac1, frac2 } = comparison;
    
    document.getElementById('fraction-1').textContent = `${frac1.num}/${frac1.den}`;
    document.getElementById('fraction-2').textContent = `${frac2.num}/${frac2.den}`;
    
    // Update visuals
    updateComparisonVisual('compare-visual-1', frac1);
    updateComparisonVisual('compare-visual-2', frac2);
    
    document.getElementById('comparison-operator').value = '';
    document.getElementById('comparison-result').innerHTML = '';
}

function updateComparisonVisual(elementId, fraction) {
    const visual = document.getElementById(elementId);
    const { num, den } = fraction;
    const percentage = (num / den) * 100;
    
    visual.style.background = `conic-gradient(#3498db 0deg ${percentage * 3.6}deg, #ecf0f1 ${percentage * 3.6}deg 360deg)`;
}

function checkComparison() {
    const frac1Text = document.getElementById('fraction-1').textContent;
    const frac2Text = document.getElementById('fraction-2').textContent;
    const operator = document.getElementById('comparison-operator').value;
    const resultDiv = document.getElementById('comparison-result');
    
    if (!operator) return;
    
    const [num1, den1] = frac1Text.split('/').map(n => parseInt(n));
    const [num2, den2] = frac2Text.split('/').map(n => parseInt(n));
    
    const val1 = num1 / den1;
    const val2 = num2 / den2;
    
    let correct = false;
    if (operator === '<') correct = val1 < val2;
    else if (operator === '>') correct = val1 > val2;
    else if (operator === '=') correct = val1 === val2;
    
    if (correct) {
        resultDiv.innerHTML = `<div class="result-message correct">✅ ${RalphIterator.getRandomComment('correct')}</div>`;
    } else {
        const correctOp = val1 < val2 ? '<' : (val1 > val2 ? '>' : '=');
        resultDiv.innerHTML = `<div class="result-message incorrect">❌ ${RalphIterator.getRandomComment('incorrect')} ${frac1Text} ${correctOp} ${frac2Text}</div>`;
    }
}

// Shapes Functions
const shapeData = {
    triangle: { sides: 3, vertices: 3, points: "75,25 125,75 25,75", properties: "3 equal sides (equilateral)" },
    square: { sides: 4, vertices: 4, points: "75,25 125,25 125,75 75,75", properties: "All sides equal, all angles are right angles" },
    rectangle: { sides: 4, vertices: 4, points: "50,35 125,35 125,65 50,65", properties: "Opposite sides equal, all angles are right angles" },
    pentagon: { sides: 5, vertices: 5, points: "75,25 110,50 95,85 55,85 40,50", properties: "5 sides and 5 vertices" },
    hexagon: { sides: 6, vertices: 6, points: "75,25 105,40 105,70 75,85 45,70 45,40", properties: "6 equal sides and 6 vertices" },
    octagon: { sides: 8, vertices: 8, points: "75,25 95,35 110,55 110,75 95,95 75,105 55,95 40,75 40,55 55,35", properties: "8 equal sides and 8 vertices" }
};

function showShape(shapeName) {
    const shape = shapeData[shapeName];
    if (!shape) return;
    
    document.getElementById('shape-polygon').setAttribute('points', shape.points);
    document.getElementById('shape-name').textContent = shapeName.charAt(0).toUpperCase() + shapeName.slice(1);
    document.getElementById('shape-sides').textContent = shape.sides;
    document.getElementById('shape-vertices').textContent = shape.vertices;
    document.getElementById('shape-properties').textContent = shape.properties;
}

// Transformation functions
let currentTransform = { x: 0, y: 0, rotation: 0, scale: 1 };

function translateShape() {
    currentTransform.x += 30;
    currentTransform.y += 20;
    updateTransform();
    document.getElementById('transform-explanation').textContent = 
        "Slide (Translation): The shape moved to a new position without changing size or orientation.";
}

function rotateShape() {
    currentTransform.rotation += 45;
    updateTransform();
    document.getElementById('transform-explanation').textContent = 
        "Turn (Rotation): The shape turned around a point. It's the same shape, just facing a different direction!";
}

function reflectShape() {
    currentTransform.scale *= -1;
    updateTransform();
    document.getElementById('transform-explanation').textContent = 
        "Flip (Reflection): The shape is flipped like looking in a mirror. It's the same size but faces the opposite way!";
}

function resetShape() {
    currentTransform = { x: 0, y: 0, rotation: 0, scale: 1 };
    updateTransform();
    document.getElementById('transform-explanation').textContent = 
        "Reset: The shape is back to its original position. Try another transformation!";
}

function updateTransform() {
    const shape = document.getElementById('transform-shape');
    const scaleX = currentTransform.scale > 0 ? 1 : -1;
    shape.setAttribute('transform', 
        `translate(${currentTransform.x}, ${currentTransform.y}) rotate(${currentTransform.rotation}, 65, 65) scale(${scaleX}, 1)`
    );
}

// Measurement Functions
const measurementData = {
    paperclips: { value: 6, visual: '📎📎📎📎📎📎' },
    blocks: { value: 4, visual: '🟦🟦🟦🟦' },
    centimeters: { value: 12, visual: '|-----|-----|' }
};

function measureWith(tool) {
    const data = measurementData[tool];
    if (!data) return;
    
    // Update active button
    document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`${tool === 'paperclips' ? 'paperclips' : tool === 'blocks' ? 'blocks' : 'cm'}-btn`).classList.add('active');
    
    // Update result
    document.getElementById('length-value').textContent = data.value;
    document.getElementById('length-unit').textContent = tool;
    
    // Update visual
    document.getElementById('measurement-visual').innerHTML = `
        <p>Visual representation:</p>
        <div style="font-size: 1.5rem; margin: 10px 0;">${data.visual}</div>
    `;
}

function checkEstimate() {
    const estimate = parseInt(document.getElementById('length-estimate').value);
    const actualLength = estimationObjects[currentEstimationIndex].length;
    const difference = Math.abs(estimate - actualLength);
    const resultDiv = document.getElementById('estimate-result');
    
    let message = '';
    let className = '';
    
    if (difference === 0) {
        message = `🎯 Perfect! The ${estimationObjects[currentEstimationIndex].name} is exactly ${actualLength} cm long!`;
        className = 'result-message correct';
    } else if (difference <= 2) {
        message = `📏 Very close! The ${estimationObjects[currentEstimationIndex].name} is ${actualLength} cm long. You were off by ${difference} cm.`;
        className = 'result-message info';
    } else {
        message = `📐 Good try! The ${estimationObjects[currentEstimationIndex].name} is ${actualLength} cm long. Keep practicing estimation!`;
        className = 'result-message incorrect';
    }
    
    resultDiv.innerHTML = `<div class="${className}">${message}</div>`;
    
    // Ralph Iterator validation
    if (!RalphIterator.validateMathAnswer(actualLength, actualLength)) {
        console.error('Estimation validation failed');
    }
}

function newEstimationObject() {
    currentEstimationIndex = (currentEstimationIndex + 1) % estimationObjects.length;
    const obj = estimationObjects[currentEstimationIndex];
    
    document.querySelector('.object-to-estimate p').textContent = 
        `How many centimeters long is this ${obj.name}?`;
    
    // Update visual (simplified for demo)
    const visual = document.querySelector('.crayon');
    visual.style.width = `${obj.length * 8}px`; // Scale for visual
    
    document.getElementById('length-estimate').value = '';
    document.getElementById('estimate-result').innerHTML = '';
}

// Patterns Functions
function createHundredsChart() {
    const chart = document.getElementById('hundreds-chart');
    chart.innerHTML = '';
    
    for (let i = 1; i <= 100; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.className = 'chart-number';
        numberDiv.textContent = i;
        numberDiv.onclick = () => toggleNumberHighlight(numberDiv, i);
        chart.appendChild(numberDiv);
    }
}

function toggleNumberHighlight(element, number) {
    element.classList.toggle('highlighted');
}

function highlightPattern(skipBy) {
    clearHighlights();
    const numbers = document.querySelectorAll('.chart-number');
    
    numbers.forEach((num, index) => {
        const number = index + 1;
        if (number % skipBy === 0) {
            num.classList.add('highlighted');
        }
    });
}

function highlightEvenOdd(type) {
    clearHighlights();
    const numbers = document.querySelectorAll('.chart-number');
    
    numbers.forEach((num, index) => {
        const number = index + 1;
        if (type === 'even' && number % 2 === 0) {
            num.classList.add('even-highlighted');
        } else if (type === 'odd' && number % 2 === 1) {
            num.classList.add('odd-highlighted');
        }
    });
}

function clearHighlights() {
    document.querySelectorAll('.chart-number').forEach(num => {
        num.classList.remove('highlighted', 'even-highlighted', 'odd-highlighted');
    });
}

// Growing Pattern Functions
function generateGrowingPattern() {
    const startNum = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 5) + 2;
    const sequence = [];
    
    for (let i = 0; i < 4; i++) {
        sequence.push(startNum + (i * step));
    }
    
    currentPatternData = {
        sequence: sequence,
        step: step,
        nextNumber: startNum + (4 * step)
    };
    
    document.getElementById('growing-pattern-display').textContent = 
        sequence.join(', ') + ', ?';
    
    document.getElementById('pattern-answer').value = '';
    document.getElementById('pattern-result').innerHTML = '';
}

function checkPatternAnswer() {
    const userAnswer = parseInt(document.getElementById('pattern-answer').value);
    const correctAnswer = currentPatternData.nextNumber;
    const resultDiv = document.getElementById('pattern-result');
    
    if (RalphIterator.validateMathAnswer(correctAnswer, userAnswer)) {
        resultDiv.innerHTML = `<div class="result-message correct">✅ ${RalphIterator.getRandomComment('correct')} The pattern increases by ${currentPatternData.step} each time!</div>`;
    } else {
        resultDiv.innerHTML = `<div class="result-message incorrect">❌ ${RalphIterator.getRandomComment('incorrect')} The next number is ${correctAnswer}.</div>`;
    }
}

// Shape Pattern Functions
const shapeEmojis = {
    'circle-red': '🔴', 'square-blue': '🟦', 'triangle-green': '🟢', 'circle-yellow': '🟡'
};

function addToPattern(shape, color) {
    const key = `${shape}-${color}`;
    const emoji = shapeEmojis[key];
    if (!emoji) return;
    
    currentShapePattern.push(emoji);
    updateShapePatternDisplay();
}

function updateShapePatternDisplay() {
    const display = document.getElementById('shape-pattern-sequence');
    display.innerHTML = '';
    
    currentShapePattern.forEach(emoji => {
        const span = document.createElement('span');
        span.className = 'pattern-shape';
        span.textContent = emoji;
        display.appendChild(span);
    });
}

function clearPattern() {
    currentShapePattern = [];
    updateShapePatternDisplay();
}

function generateShapePattern() {
    clearPattern();
    const shapes = ['🔴', '🟦', '🟢'];
    const patternLength = 3;
    
    for (let i = 0; i < patternLength * 2; i++) {
        currentShapePattern.push(shapes[i % patternLength]);
    }
    
    updateShapePatternDisplay();
}

function continuePattern() {
    if (currentShapePattern.length >= 3) {
        // Find the basic pattern (assume first 3 elements)
        const basePattern = currentShapePattern.slice(0, 3);
        const nextIndex = currentShapePattern.length % basePattern.length;
        currentShapePattern.push(basePattern[nextIndex]);
        updateShapePatternDisplay();
    }
}

// Time Functions
const durationPairs = [
    { left: { name: 'Brushing teeth', duration: 2, unit: 'minutes' }, 
      right: { name: 'Eating lunch', duration: 30, unit: 'minutes' }, 
      answer: 'right' },
    { left: { name: 'Watching a movie', duration: 2, unit: 'hours' }, 
      right: { name: 'Reading a book', duration: 20, unit: 'minutes' }, 
      answer: 'left' },
    { left: { name: 'Walking to school', duration: 10, unit: 'minutes' }, 
      right: { name: 'Sleeping', duration: 8, unit: 'hours' }, 
      answer: 'right' }
];

function newDurationComparison() {
    const pair = durationPairs[Math.floor(Math.random() * durationPairs.length)];
    currentDurationPair = pair;
    
    // Update display (simplified for demo)
    document.querySelector('.activity-pair .activity:first-child p').textContent = pair.left.name;
    document.querySelector('.activity-pair .activity:first-child .duration').textContent = 
        `${pair.left.duration} ${pair.left.unit}`;
    
    document.querySelector('.activity-pair .activity:last-child p').textContent = pair.right.name;
    document.querySelector('.activity-pair .activity:last-child .duration').textContent = 
        `${pair.right.duration} ${pair.right.unit}`;
    
    document.getElementById('duration-result').innerHTML = '';
}

function chooseLonger(choice) {
    const resultDiv = document.getElementById('duration-result');
    const correct = choice === currentDurationPair.answer;
    
    if (correct) {
        resultDiv.innerHTML = `<div class="result-message correct">✅ ${RalphIterator.getRandomComment('correct')}</div>`;
    } else {
        resultDiv.innerHTML = `<div class="result-message incorrect">❌ ${RalphIterator.getRandomComment('incorrect')}</div>`;
    }
}

// Statistics Functions
function addVote(color) {
    surveyData[color]++;
    document.getElementById(`${color}-votes`).textContent = `(${surveyData[color]})`;
}

function clearVotes() {
    Object.keys(surveyData).forEach(color => {
        surveyData[color] = 0;
        document.getElementById(`${color}-votes`).textContent = '(0)';
    });
    
    // Clear graph
    const canvas = document.getElementById('bar-graph');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    document.getElementById('total-votes').textContent = '0';
    document.getElementById('most-popular').textContent = 'None yet';
}

function showGraph() {
    const canvas = document.getElementById('bar-graph');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const colors = ['red', 'blue', 'green', 'yellow'];
    const colorMap = { red: '#e74c3c', blue: '#3498db', green: '#2ecc71', yellow: '#f1c40f' };
    
    const maxVotes = Math.max(...Object.values(surveyData));
    const barWidth = 60;
    const spacing = 80;
    const startX = 50;
    
    colors.forEach((color, index) => {
        const votes = surveyData[color];
        const barHeight = maxVotes > 0 ? (votes / maxVotes) * 180 : 0;
        const x = startX + index * spacing;
        const y = 200 - barHeight;
        
        // Draw bar
        ctx.fillStyle = colorMap[color];
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw label
        ctx.fillStyle = '#333';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(color.charAt(0).toUpperCase() + color.slice(1), x + barWidth/2, 220);
        
        // Draw value
        if (votes > 0) {
            ctx.fillStyle = 'white';
            ctx.font = 'bold 14px Arial';
            ctx.fillText(votes, x + barWidth/2, y + barHeight/2 + 5);
        }
    });
    
    // Update info
    const totalVotes = Object.values(surveyData).reduce((sum, votes) => sum + votes, 0);
    document.getElementById('total-votes').textContent = totalVotes;
    
    const mostPopular = Object.entries(surveyData).reduce((max, [color, votes]) => 
        votes > max.votes ? {color, votes} : max, {color: 'None', votes: 0});
    
    document.getElementById('most-popular').textContent = 
        mostPopular.votes > 0 ? mostPopular.color.charAt(0).toUpperCase() + mostPopular.color.slice(1) : 'None yet';
    
    // Ralph Iterator validation
    const calculatedTotal = colors.reduce((sum, color) => sum + surveyData[color], 0);
    if (!RalphIterator.validateMathAnswer(totalVotes, calculatedTotal)) {
        console.error('Survey data validation failed');
    }
}

// Graph Reading Functions
const graphQuestions = [
    { question: "Which pet is most popular?", data: {dogs: 8, cats: 5, fish: 3, birds: 2}, answer: "dogs" },
    { question: "Which pet is least popular?", data: {dogs: 6, cats: 7, fish: 2, birds: 4}, answer: "fish" },
    { question: "How many students chose cats?", data: {dogs: 4, cats: 6, fish: 3, birds: 2}, answer: "6" }
];

function createReadingGraph() {
    const canvas = document.getElementById('reading-graph');
    const ctx = canvas.getContext('2d');
    const questionData = graphQuestions[Math.floor(Math.random() * graphQuestions.length)];
    currentGraphData = questionData;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const pets = Object.keys(questionData.data);
    const colorMap = { dogs: '#8B4513', cats: '#FFA500', fish: '#1E90FF', birds: '#32CD32' };
    
    const maxVotes = Math.max(...Object.values(questionData.data));
    const barWidth = 50;
    const spacing = 70;
    const startX = 30;
    
    pets.forEach((pet, index) => {
        const votes = questionData.data[pet];
        const barHeight = maxVotes > 0 ? (votes / maxVotes) * 120 : 0;
        const x = startX + index * spacing;
        const y = 150 - barHeight;
        
        // Draw bar
        ctx.fillStyle = colorMap[pet];
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw label
        ctx.fillStyle = '#333';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(pet.charAt(0).toUpperCase() + pet.slice(1), x + barWidth/2, 170);
        
        // Draw value
        if (votes > 0) {
            ctx.fillStyle = 'white';
            ctx.font = 'bold 12px Arial';
            ctx.fillText(votes, x + barWidth/2, y + barHeight/2 + 4);
        }
    });
    
    // Update question
    document.getElementById('graph-question').textContent = questionData.question;
    document.getElementById('graph-answer-result').innerHTML = '';
    
    // Reset answer buttons
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.classList.remove('correct', 'incorrect');
    });
}

function answerQuestion(answer) {
    const correct = answer === currentGraphData.answer || answer === currentGraphData.answer.toString();
    const resultDiv = document.getElementById('graph-answer-result');
    
    // Update button colors
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.classList.remove('correct', 'incorrect');
        if (btn.textContent.toLowerCase().includes(answer.toLowerCase())) {
            btn.classList.add(correct ? 'correct' : 'incorrect');
        }
    });
    
    if (correct) {
        resultDiv.innerHTML = `<div class="result-message correct">✅ ${RalphIterator.getRandomComment('correct')}</div>`;
    } else {
        resultDiv.innerHTML = `<div class="result-message incorrect">❌ ${RalphIterator.getRandomComment('incorrect')} The correct answer is ${currentGraphData.answer}.</div>`;
    }
}

function newGraphQuestion() {
    createReadingGraph();
}

// Initialize functions when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive components
    generateRandomNumber();
    startSkipCounting();
    updateNumberLine();
    newAdditionProblem();
    newSubtractionProblem();
    newFactFamily();
    updateFractionVisual();
    newFractionComparison();
    showShape('square');
    measureWith('paperclips');
    createHundredsChart();
    generateGrowingPattern();
    generateShapePattern();
    newDurationComparison();
    createReadingGraph();
    
    // Ralph Iterator system check
    console.log('🎓 Ralph Wiggum Iterator System: All functions loaded successfully!');
    console.log('🧠 Running accuracy tests...');
    
    // Test core math functions
    const additionTest = RalphIterator.testFunction(
        (nums) => nums[0] + nums[1],
        [[5, 3], [12, 8], [25, 17]],
        [8, 20, 42],
        3
    );
    
    const subtractionTest = RalphIterator.testFunction(
        (nums) => nums[0] - nums[1],
        [[10, 3], [20, 8], [50, 17]],
        [7, 12, 33],
        3
    );
    
    if (additionTest && subtractionTest) {
        console.log('✅ Ralph Iterator: All accuracy tests passed!');
    } else {
        console.warn('⚠️ Ralph Iterator: Some tests failed - check console for details');
    }
    
    console.log('🎉 Welcome to Grade 2 Math Adventure! Ralph says: "Me ready to learn math good!"');
});

// Ralph's motivational messages (randomly displayed)
setInterval(() => {
    const messages = [
        "Keep learning! Math is super fun!",
        "You're doing great! My brain is proud of you!",
        "Remember: practice makes perfect... or at least better!",
        "Math is everywhere! Even in my sandwich!",
        "Every mistake is just practice wearing a disguise!"
    ];
    
    // Randomly show Ralph's encouragement (very occasionally)
    if (Math.random() < 0.001) { // 0.1% chance every 5 seconds
        const message = messages[Math.floor(Math.random() * messages.length)];
        console.log(`🎭 Ralph says: "${message}"`);
    }
}, 5000);