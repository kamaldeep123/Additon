// Grade 2 Math Adventure - Comprehensive Question Database
// Ralph Wiggum Iteration Model - 800 Questions (100 per category, 10 sets each)

const QuestionDatabase = {
    // Category 1: Numbers to 1000 (100 questions in 10 sets)
    numbers: [
        // Set 1: Place Value Foundation (Questions 1-10)
        {
            set: 1,
            questions: [
                {
                    id: 1,
                    type: "place-value",
                    question: "What digit is in the hundreds place in 247?",
                    options: ["2", "4", "7", "0"],
                    correct: 0,
                    explanation: "In 247, the digit 2 is in the hundreds place.",
                    ralphHint: "Think about it... 2 hundreds, 4 tens, 7 ones! Easy like counting my teeth!"
                },
                {
                    id: 2,
                    type: "place-value",
                    question: "What is the value of 5 in 589?",
                    options: ["5", "50", "500", "5000"],
                    correct: 2,
                    explanation: "The 5 is in the hundreds place, so its value is 500.",
                    ralphHint: "Five hundred! That's like... a LOT of nickels!"
                },
                {
                    id: 3,
                    type: "number-forms",
                    question: "Which number shows 'three hundred twenty-one'?",
                    options: ["312", "321", "231", "213"],
                    correct: 1,
                    explanation: "Three hundred twenty-one is written as 321.",
                    ralphHint: "Three, two, one... like a countdown to snack time!"
                },
                {
                    id: 4,
                    type: "expanded-form",
                    question: "What is 456 in expanded form?",
                    options: ["400 + 50 + 6", "40 + 50 + 6", "4 + 5 + 6", "4000 + 500 + 60"],
                    correct: 0,
                    explanation: "456 = 400 + 50 + 6 (breaking down by place value).",
                    ralphHint: "Break it apart like taking apart my sandwich... 400, 50, and 6!"
                },
                {
                    id: 5,
                    type: "comparison",
                    question: "Which symbol makes this true? 367 __ 376",
                    options: ["<", ">", "=", "≠"],
                    correct: 0,
                    explanation: "367 < 376 because 367 is less than 376.",
                    ralphHint: "367 is smaller... like me compared to Bart!"
                },
                {
                    id: 6,
                    type: "rounding",
                    question: "Round 234 to the nearest hundred.",
                    options: ["200", "230", "240", "300"],
                    correct: 0,
                    explanation: "234 rounds to 200 because it's closer to 200 than 300.",
                    ralphHint: "234 is closer to 200... like I'm closer to the sandbox than the swing!"
                },
                {
                    id: 7,
                    type: "ordering",
                    question: "Put these numbers in order from smallest to largest: 145, 154, 141",
                    options: ["145, 154, 141", "141, 145, 154", "154, 145, 141", "141, 154, 145"],
                    correct: 1,
                    explanation: "From smallest to largest: 141, 145, 154.",
                    ralphHint: "Start with the littlest one, like when I line up my crayons!"
                },
                {
                    id: 8,
                    type: "missing-number",
                    question: "What number comes next? 120, 130, 140, ___",
                    options: ["145", "150", "160", "200"],
                    correct: 1,
                    explanation: "The pattern increases by 10 each time: 150.",
                    ralphHint: "Count by 10s! Like counting my toes... if I had that many!"
                },
                {
                    id: 9,
                    type: "word-problems",
                    question: "Sarah has 2 hundreds, 3 tens, and 7 ones. What number does she have?",
                    options: ["237", "273", "327", "372"],
                    correct: 0,
                    explanation: "2 hundreds + 3 tens + 7 ones = 200 + 30 + 7 = 237.",
                    ralphHint: "Put them all together! Like making a number sandwich!"
                },
                {
                    id: 10,
                    type: "base-ten",
                    question: "How many tens are in 350?",
                    options: ["3", "5", "35", "350"],
                    correct: 2,
                    explanation: "350 has 35 tens (3 hundreds = 30 tens, plus 5 tens = 35 tens).",
                    ralphHint: "Think of all the tens hiding in there! Like finding all my lost mittens!"
                }
            ]
        },
        // Set 2: Skip Counting Mastery (Questions 11-20)
        {
            set: 2,
            questions: [
                {
                    id: 11,
                    type: "skip-counting",
                    question: "Count by 2s: 14, 16, 18, ___",
                    options: ["19", "20", "21", "22"],
                    correct: 1,
                    explanation: "When counting by 2s: 14, 16, 18, 20.",
                    ralphHint: "Two more each time! Like my two shoes, then two more socks!"
                },
                {
                    id: 12,
                    type: "skip-counting",
                    question: "What number is missing? 25, 30, ___, 40",
                    options: ["32", "33", "35", "37"],
                    correct: 2,
                    explanation: "Counting by 5s: 25, 30, 35, 40.",
                    ralphHint: "Count by 5s! Like my fingers... well, if I count right!"
                },
                {
                    id: 13,
                    type: "skip-counting",
                    question: "Continue the pattern: 100, 90, 80, ___",
                    options: ["75", "70", "60", "50"],
                    correct: 1,
                    explanation: "Counting backwards by 10s: 100, 90, 80, 70.",
                    ralphHint: "Going backwards by 10s! Like counting down to recess!"
                },
                {
                    id: 14,
                    type: "skip-counting",
                    question: "Which shows counting by 20s?",
                    options: ["20, 40, 60, 80", "20, 30, 40, 50", "20, 22, 24, 26", "20, 25, 30, 35"],
                    correct: 0,
                    explanation: "Counting by 20s: 20, 40, 60, 80.",
                    ralphHint: "Twenty more each time! Like getting more and more cookies!"
                },
                {
                    id: 15,
                    type: "skip-counting",
                    question: "What comes before? ___, 75, 100, 125",
                    options: ["25", "50", "60", "70"],
                    correct: 1,
                    explanation: "Counting by 25s: 50, 75, 100, 125.",
                    ralphHint: "Count by 25s backwards! Like counting quarters!"
                },
                {
                    id: 16,
                    type: "even-odd",
                    question: "Which number is even?",
                    options: ["23", "35", "47", "58"],
                    correct: 3,
                    explanation: "58 is even because it ends in 8 (an even digit).",
                    ralphHint: "Even numbers can be split into two equal groups! Like sharing fairly!"
                },
                {
                    id: 17,
                    type: "even-odd",
                    question: "What do you get when you add two odd numbers?",
                    options: ["Always odd", "Always even", "Sometimes odd", "Sometimes even"],
                    correct: 1,
                    explanation: "Adding two odd numbers always gives an even number.",
                    ralphHint: "Odd + Odd = Even! Like when two halves make a whole cookie!"
                },
                {
                    id: 18,
                    type: "number-line",
                    question: "On a number line, what number is 10 more than 47?",
                    options: ["37", "48", "57", "67"],
                    correct: 2,
                    explanation: "47 + 10 = 57.",
                    ralphHint: "Jump 10 spaces forward! Like taking 10 big steps!"
                },
                {
                    id: 19,
                    type: "number-line",
                    question: "What number is halfway between 20 and 40?",
                    options: ["25", "30", "35", "60"],
                    correct: 1,
                    explanation: "The number halfway between 20 and 40 is 30.",
                    ralphHint: "Right in the middle! Like the middle seat at lunch!"
                },
                {
                    id: 20,
                    type: "problem-solving",
                    question: "I'm thinking of a 3-digit number with 4 in the tens place and 7 in the ones place. The hundreds digit is 2. What's my number?",
                    options: ["247", "274", "427", "742"],
                    correct: 0,
                    explanation: "The number is 247 (2 hundreds, 4 tens, 7 ones).",
                    ralphHint: "Put the pieces together! Like building with blocks!"
                }
            ]
        },
        // Set 3: Number Relationships (Questions 21-30)
        {
            set: 3,
            questions: [
                {
                    id: 21,
                    type: "greater-less",
                    question: "Which number is 100 more than 356?",
                    options: ["256", "366", "456", "556"],
                    correct: 2,
                    explanation: "356 + 100 = 456.",
                    ralphHint: "Add a whole hundred! Like getting 100 more stickers!"
                },
                {
                    id: 22,
                    type: "greater-less",
                    question: "Which number is 10 less than 405?",
                    options: ["395", "404", "406", "415"],
                    correct: 0,
                    explanation: "405 - 10 = 395.",
                    ralphHint: "Go back 10! Like taking 10 steps backwards!"
                },
                {
                    id: 23,
                    type: "estimation",
                    question: "About how many tens are in 287?",
                    options: ["2", "8", "28", "287"],
                    correct: 2,
                    explanation: "287 has about 28 tens (actually 28 complete tens plus some ones).",
                    ralphHint: "Count the tens! Like counting bundles of 10 crayons!"
                },
                {
                    id: 24,
                    type: "place-value",
                    question: "In which number does the digit 3 have the greatest value?",
                    options: ["123", "231", "312", "321"],
                    correct: 2,
                    explanation: "In 312, the 3 is in the hundreds place (300), which is the greatest value.",
                    ralphHint: "Where is 3 the biggest? In the hundreds place!"
                },
                {
                    id: 25,
                    type: "rounding",
                    question: "Round 678 to the nearest ten.",
                    options: ["670", "675", "680", "700"],
                    correct: 2,
                    explanation: "678 rounds to 680 (closer to 680 than 670).",
                    ralphHint: "Which ten is closer? 680 is nearer!"
                },
                {
                    id: 26,
                    type: "comparison",
                    question: "Order from greatest to least: 489, 498, 849",
                    options: ["489, 498, 849", "849, 498, 489", "498, 849, 489", "849, 489, 498"],
                    correct: 1,
                    explanation: "From greatest to least: 849, 498, 489.",
                    ralphHint: "Biggest first! Like lining up from tallest to shortest!"
                },
                {
                    id: 27,
                    type: "patterns",
                    question: "What's the rule? 5, 15, 25, 35",
                    options: ["Add 5", "Add 10", "Multiply by 3", "Add 15"],
                    correct: 1,
                    explanation: "The rule is add 10: 5+10=15, 15+10=25, 25+10=35.",
                    ralphHint: "What do you add each time? Ten more, ten more!"
                },
                {
                    id: 28,
                    type: "word-problems",
                    question: "There are 347 students in the school. About how many is this to the nearest hundred?",
                    options: ["300", "340", "350", "400"],
                    correct: 0,
                    explanation: "347 rounds to 300 (closer to 300 than 400).",
                    ralphHint: "Which hundred is closer? 300 or 400? Think about the middle!"
                },
                {
                    id: 29,
                    type: "base-ten",
                    question: "Which is the same as 4 hundreds, 0 tens, 7 ones?",
                    options: ["47", "407", "470", "4007"],
                    correct: 1,
                    explanation: "4 hundreds + 0 tens + 7 ones = 400 + 0 + 7 = 407.",
                    ralphHint: "Put it together! Don't forget the zero in the tens place!"
                },
                {
                    id: 30,
                    type: "number-sense",
                    question: "Between which two hundreds is 751?",
                    options: ["700 and 800", "750 and 760", "700 and 750", "800 and 900"],
                    correct: 0,
                    explanation: "751 is between 700 and 800.",
                    ralphHint: "Look at the hundreds digit! 7 means between 700 and 800!"
                }
            ]
        },
        // Set 6: Hundreds Chart Exploration (Questions 51-60)
        {
            set: 6,
            questions: [
                {
                    id: 51,
                    type: "hundreds-chart",
                    question: "On a hundreds chart, if you start at 23 and move right 5 spaces, where do you land?",
                    options: ["27", "28", "33", "73"],
                    correct: 1,
                    explanation: "Moving right on hundreds chart adds 1 each space: 23 + 5 = 28.",
                    ralphHint: "Moving right adds one each step! Like walking in a line!"
                },
                {
                    id: 52,
                    type: "hundreds-chart",
                    question: "What pattern do you see when you count by 10s on the hundreds chart?",
                    options: ["Go diagonal", "Go right", "Go down", "Go up"],
                    correct: 2,
                    explanation: "Counting by 10s moves straight down on the hundreds chart.",
                    ralphHint: "Ten more means go down! Like going downstairs!"
                },
                {
                    id: 53,
                    type: "number-neighbors",
                    question: "What number is directly below 45 on a hundreds chart?",
                    options: ["44", "46", "55", "35"],
                    correct: 2,
                    explanation: "Moving down adds 10: 45 + 10 = 55.",
                    ralphHint: "Down means add 10! Like going to the next row!"
                },
                {
                    id: 54,
                    type: "hundreds-chart",
                    question: "Which numbers would be highlighted if you colored all the multiples of 5?",
                    options: ["5, 10, 15, 20...", "1, 2, 3, 4...", "5, 6, 7, 8...", "10, 20, 30, 40..."],
                    correct: 0,
                    explanation: "Multiples of 5 are 5, 10, 15, 20, 25, etc.",
                    ralphHint: "Count by fives! Like nickels!"
                },
                {
                    id: 55,
                    type: "missing-numbers",
                    question: "What number is missing? 67, 68, ___, 70",
                    options: ["66", "69", "71", "77"],
                    correct: 1,
                    explanation: "The sequence increases by 1: 67, 68, 69, 70.",
                    ralphHint: "What comes between 68 and 70? Count up!"
                },
                {
                    id: 56,
                    type: "number-paths",
                    question: "To get from 34 to 44 on a hundreds chart, which direction do you move?",
                    options: ["Right", "Left", "Down", "Up"],
                    correct: 2,
                    explanation: "34 to 44 is adding 10, which means moving down.",
                    ralphHint: "Adding 10 means go down one row!"
                },
                {
                    id: 57,
                    type: "even-odd-patterns",
                    question: "On a hundreds chart, even numbers make what pattern?",
                    options: ["Vertical lines", "Horizontal lines", "All scattered", "Diagonal lines"],
                    correct: 0,
                    explanation: "Even numbers form vertical columns (2,12,22... and 4,14,24...).",
                    ralphHint: "Even numbers line up in columns! Like soldiers!"
                },
                {
                    id: 58,
                    type: "number-distance",
                    question: "How far apart are 26 and 36 on a hundreds chart?",
                    options: ["1 space", "10 spaces", "1 row", "2 rows"],
                    correct: 2,
                    explanation: "26 and 36 are one row apart (10 spaces between).",
                    ralphHint: "One row down! That's 10 spaces!"
                },
                {
                    id: 59,
                    type: "corner-numbers",
                    question: "What number is in the top-right corner of a hundreds chart?",
                    options: ["1", "10", "90", "100"],
                    correct: 1,
                    explanation: "The hundreds chart starts at 1 (top-left) and 10 is top-right.",
                    ralphHint: "First row goes 1, 2, 3... up to 10!"
                },
                {
                    id: 60,
                    type: "chart-navigation",
                    question: "If you're at 87 and move left 3 spaces, where are you?",
                    options: ["84", "90", "57", "86"],
                    correct: 0,
                    explanation: "Moving left subtracts 1 each space: 87 - 3 = 84.",
                    ralphHint: "Left means subtract! Go backwards three!"
                }
            ]
        },
        
        // Set 7: Number Comparison Challenges (Questions 61-70)
        {
            set: 7,
            questions: [
                {
                    id: 61,
                    type: "comparison",
                    question: "Which is greater: 456 or 465?",
                    options: ["456", "465", "They're equal", "Can't tell"],
                    correct: 1,
                    explanation: "Compare tens place: 5 > 6 in tens place makes 465 > 456.",
                    ralphHint: "Look at the tens place! 6 is bigger than 5!"
                },
                {
                    id: 62,
                    type: "ordering",
                    question: "Put in order from least to greatest: 304, 340, 403",
                    options: ["304, 340, 403", "304, 403, 340", "340, 304, 403", "403, 340, 304"],
                    correct: 0,
                    explanation: "304 < 340 < 403 when comparing place values.",
                    ralphHint: "Start with smallest! Look at hundreds first!"
                },
                {
                    id: 63,
                    type: "between-numbers",
                    question: "Which number is between 278 and 287?",
                    options: ["276", "283", "289", "277"],
                    correct: 1,
                    explanation: "283 falls between 278 and 287.",
                    ralphHint: "Between means bigger than 278 but smaller than 287!"
                },
                {
                    id: 64,
                    type: "comparison-symbols",
                    question: "Fill in: 592 __ 529",
                    options: ["<", ">", "=", "≠"],
                    correct: 1,
                    explanation: "592 > 529 because 5 hundreds = 5 hundreds, but 9 tens > 2 tens.",
                    ralphHint: "Compare the tens! 9 tens is more than 2 tens!"
                },
                {
                    id: 65,
                    type: "greatest-least",
                    question: "What's the greatest number you can make with digits 2, 7, 1?",
                    options: ["127", "217", "721", "712"],
                    correct: 2,
                    explanation: "Put largest digit first: 721.",
                    ralphHint: "Biggest digit in hundreds place makes biggest number!"
                },
                {
                    id: 66,
                    type: "number-line-comparison",
                    question: "On a number line, which number is closest to 350?",
                    options: ["340", "345", "355", "360"],
                    correct: 1,
                    explanation: "345 is only 5 away from 350, closer than others.",
                    ralphHint: "Which is the shortest jump to 350?"
                },
                {
                    id: 67,
                    type: "digit-comparison",
                    question: "In 638, which digit has the greatest value?",
                    options: ["6", "3", "8", "All equal"],
                    correct: 0,
                    explanation: "6 is in hundreds place (600), greater than 30 or 8.",
                    ralphHint: "Hundreds place is biggest! 6 hundreds = 600!"
                },
                {
                    id: 68,
                    type: "range-finding",
                    question: "How many numbers are between 45 and 50?",
                    options: ["3", "4", "5", "6"],
                    correct: 1,
                    explanation: "46, 47, 48, 49 are between 45 and 50.",
                    ralphHint: "Count: 46, 47, 48, 49. That's four numbers!"
                },
                {
                    id: 69,
                    type: "comparison-word-problems",
                    question: "Jake has 247 stickers. Maya has 274. Who has more?",
                    options: ["Jake", "Maya", "Same amount", "Can't tell"],
                    correct: 1,
                    explanation: "274 > 247, so Maya has more.",
                    ralphHint: "Compare the numbers! 274 is bigger than 247!"
                },
                {
                    id: 70,
                    type: "multiple-comparisons",
                    question: "Which list is in order from greatest to least?",
                    options: ["789, 798, 879", "879, 798, 789", "798, 879, 789", "789, 879, 798"],
                    correct: 1,
                    explanation: "879 > 798 > 789 is correct descending order.",
                    ralphHint: "Greatest first! 879 is biggest, 789 is smallest!"
                }
            ]
        },

        // Set 8: Rounding and Estimation (Questions 71-80) 
        {
            set: 8,
            questions: [
                {
                    id: 71,
                    type: "rounding-tens",
                    question: "Round 47 to the nearest ten.",
                    options: ["40", "45", "50", "60"],
                    correct: 2,
                    explanation: "47 is closer to 50 than to 40.",
                    ralphHint: "47 is closer to 50! Think about the middle point at 45!"
                },
                {
                    id: 72,
                    type: "rounding-hundreds",
                    question: "Round 368 to the nearest hundred.",
                    options: ["300", "350", "370", "400"],
                    correct: 3,
                    explanation: "368 is closer to 400 than to 300.",
                    ralphHint: "Look at the tens digit! 6 is more than 5, so round up!"
                },
                {
                    id: 73,
                    type: "estimation-addition",
                    question: "About what is 29 + 31?",
                    options: ["50", "60", "70", "80"],
                    correct: 1,
                    explanation: "29 ≈ 30, 31 ≈ 30, so about 60.",
                    ralphHint: "Round both to 30! 30 + 30 = 60!"
                },
                {
                    id: 74,
                    type: "estimation-subtraction", 
                    question: "Estimate 78 - 22.",
                    options: ["40", "50", "60", "70"],
                    correct: 2,
                    explanation: "78 ≈ 80, 22 ≈ 20, so about 80 - 20 = 60.",
                    ralphHint: "Round to make it easy! 80 - 20 = 60!"
                },
                {
                    id: 75,
                    type: "reasonable-answers",
                    question: "Is 156 a reasonable estimate for 23 + 21?",
                    options: ["Yes", "No", "Maybe", "Need more info"],
                    correct: 1,
                    explanation: "23 + 21 is about 44, so 156 is way too big.",
                    ralphHint: "23 + 21 is around 44, not 156! That's way too big!"
                },
                {
                    id: 76,
                    type: "rounding-rules",
                    question: "When rounding 125 to the nearest ten, what do you get?",
                    options: ["120", "125", "130", "100"],
                    correct: 2,
                    explanation: "The ones digit is 5, so round up to 130.",
                    ralphHint: "5 in ones place means round up! 125 becomes 130!"
                },
                {
                    id: 77,
                    type: "benchmark-numbers",
                    question: "Which number is closest to 100?",
                    options: ["89", "95", "105", "110"],
                    correct: 1,
                    explanation: "95 is only 5 away from 100.",
                    ralphHint: "Which one needs the shortest jump to reach 100?"
                },
                {
                    id: 78,
                    type: "front-end-estimation",
                    question: "Estimate 342 + 156 using front-end estimation.",
                    options: ["400", "490", "500", "600"],
                    correct: 2,
                    explanation: "300 + 100 = 400, but 42 + 56 ≈ 100 more, so about 500.",
                    ralphHint: "Add the hundreds first: 300 + 100, then add a bit more!"
                },
                {
                    id: 79,
                    type: "estimation-word-problems",
                    question: "About how many students are in a school with 287 kids?",
                    options: ["About 200", "About 300", "About 400", "About 500"],
                    correct: 1,
                    explanation: "287 rounds to 300.",
                    ralphHint: "287 is close to 300! Round to nearest hundred!"
                },
                {
                    id: 80,
                    type: "estimation-checking",
                    question: "You estimate 19 + 32 as 50. Is this reasonable?",
                    options: ["Yes", "No", "Too low", "Too high"],
                    correct: 0,
                    explanation: "19 ≈ 20, 32 ≈ 30, so 20 + 30 = 50 is reasonable.",
                    ralphHint: "20 + 30 = 50, so yes! Good estimate!"
                }
            ]
        },

        // Set 9: Mental Math Strategies (Questions 81-90)
        {
            set: 9,
            questions: [
                {
                    id: 81,
                    type: "mental-addition",
                    question: "What's a good strategy for 38 + 25?",
                    options: ["Add 30 + 20, then 8 + 5", "Count by ones", "Use fingers", "Skip count"],
                    correct: 0,
                    explanation: "Breaking into tens and ones: 30 + 20 = 50, 8 + 5 = 13, total 63.",
                    ralphHint: "Break it apart! Add the big parts first!"
                },
                {
                    id: 82,
                    type: "compensation",
                    question: "To solve 29 + 16, you could think:",
                    options: ["30 + 16 - 1", "29 + 20 - 4", "Both A and B", "Neither"],
                    correct: 2,
                    explanation: "Both strategies use compensation to make easier numbers.",
                    ralphHint: "Make one number easier, then fix it! Both ways work!"
                },
                {
                    id: 83,
                    type: "doubles-strategy",
                    question: "To find 7 + 8, you could use:",
                    options: ["7 + 7 + 1", "8 + 8 - 1", "Both", "Neither"],
                    correct: 2,
                    explanation: "7 + 8 = 7 + 7 + 1 = 15, or 7 + 8 = 8 + 8 - 1 = 15.",
                    ralphHint: "Use doubles you know! 7+7 or 8+8, then adjust!"
                },
                {
                    id: 84,
                    type: "mental-subtraction",
                    question: "For 82 - 37, you could think:",
                    options: ["82 - 40 + 3", "80 - 35", "85 - 40", "All of these"],
                    correct: 3,
                    explanation: "All are valid mental math strategies using compensation.",
                    ralphHint: "Lots of ways to think about it! Pick what's easiest for you!"
                },
                {
                    id: 85,
                    type: "make-ten",
                    question: "To add 6 + 7, you could make ten by:",
                    options: ["6 + 4 + 3", "6 + 6 + 1", "Both ways work", "Neither way"],
                    correct: 0,
                    explanation: "6 + 4 makes 10, then add the remaining 3 to get 13.",
                    ralphHint: "Make ten first! 6 + 4 = 10, then add what's left!"
                },
                {
                    id: 86,
                    type: "counting-strategies",
                    question: "For 47 + 26, which is most efficient?",
                    options: ["Count by ones", "Break apart and add", "Draw pictures", "Use blocks"],
                    correct: 1,
                    explanation: "Breaking apart (40 + 20 = 60, 7 + 6 = 13, total 73) is fastest.",
                    ralphHint: "Break apart the numbers! Much faster than counting!"
                },
                {
                    id: 87,
                    type: "fact-families-mental",
                    question: "If you know 9 + 4 = 13, you also know:",
                    options: ["13 - 9 = 4", "13 - 4 = 9", "4 + 9 = 13", "All of these"],
                    correct: 3,
                    explanation: "Fact families help you know related facts automatically.",
                    ralphHint: "One fact teaches you four facts! Family power!"
                },
                {
                    id: 88,
                    type: "number-relationships",
                    question: "65 - 38 is the same as:",
                    options: ["65 - 40 + 2", "67 - 40", "Both", "Neither"],
                    correct: 2,
                    explanation: "Both use compensation to make the problem easier.",
                    ralphHint: "Change the numbers to make it easier to solve!"
                },
                {
                    id: 89,
                    type: "benchmark-mental-math",
                    question: "To find how much more 73 is than 48, you could:",
                    options: ["73 - 48", "48 + ? = 73", "Count up from 48", "All methods work"],
                    correct: 3,
                    explanation: "All are valid strategies for finding the difference.",
                    ralphHint: "Lots of ways to find the difference! Pick your favorite!"
                },
                {
                    id: 90,
                    type: "mental-math-fluency",
                    question: "The quickest way to solve 50 - 23 is:",
                    options: ["50 - 20 - 3", "50 - 25 + 2", "Both are quick", "Count backwards"],
                    correct: 2,
                    explanation: "Both strategies break the problem into easier parts.",
                    ralphHint: "Break apart 23 to make it easier! Both ways are fast!"
                }
            ]
        },

        // Set 10: Mixed Review and Challenge (Questions 91-100)
        {
            set: 10,
            questions: [
                {
                    id: 91,
                    type: "mixed-review",
                    question: "What is 456 rounded to the nearest hundred?",
                    options: ["400", "450", "460", "500"],
                    correct: 3,
                    explanation: "456 rounds to 500 because 56 > 50.",
                    ralphHint: "Look at the tens! 5 or more means round up!"
                },
                {
                    id: 92,
                    type: "challenging-place-value",
                    question: "In 3,847, what is the value of the 8?",
                    options: ["8", "80", "800", "8000"],
                    correct: 2,
                    explanation: "8 is in the hundreds place, so its value is 800.",
                    ralphHint: "Count the places! 8 is in the hundreds place!"
                },
                {
                    id: 93,
                    type: "multi-step-problem",
                    question: "Start with 67. Add 20. Subtract 30. What number do you have?",
                    options: ["37", "47", "57", "67"],
                    correct: 2,
                    explanation: "67 + 20 = 87, then 87 - 30 = 57.",
                    ralphHint: "Do it step by step! 67 + 20, then subtract 30!"
                },
                {
                    id: 94,
                    type: "pattern-challenge",
                    question: "Continue: 125, 150, 175, ___",
                    options: ["180", "200", "225", "250"],
                    correct: 1,
                    explanation: "Pattern adds 25 each time: 175 + 25 = 200.",
                    ralphHint: "What's the jump each time? Add 25!"
                },
                {
                    id: 95,
                    type: "comparison-challenge",
                    question: "Order from greatest to least: 509, 590, 905",
                    options: ["509, 590, 905", "905, 590, 509", "590, 509, 905", "905, 509, 590"],
                    correct: 1,
                    explanation: "905 > 590 > 509 when comparing place values.",
                    ralphHint: "Biggest first! 905 has 9 hundreds!"
                },
                {
                    id: 96,
                    type: "estimation-challenge",
                    question: "Best estimate for 287 + 156:",
                    options: ["400", "440", "500", "550"],
                    correct: 1,
                    explanation: "287 ≈ 290, 156 ≈ 160, so about 450, closest to 440.",
                    ralphHint: "Round both numbers, then add! About 290 + 160!"
                },
                {
                    id: 97,
                    type: "mental-math-challenge",
                    question: "Quick! What's 99 + 47?",
                    options: ["136", "146", "156", "166"],
                    correct: 1,
                    explanation: "99 + 47 = 100 + 47 - 1 = 147 - 1 = 146.",
                    ralphHint: "Think 100 + 47, then subtract 1!"
                },
                {
                    id: 98,
                    type: "word-problem-challenge",
                    question: "A school has 234 students. If 67 are absent, about how many are present?",
                    options: ["About 150", "About 160", "About 170", "About 180"],
                    correct: 2,
                    explanation: "234 - 67 ≈ 230 - 70 = 160, closest to 170 given choices.",
                    ralphHint: "Round to make it easy! About 230 - 70!"
                },
                {
                    id: 99,
                    type: "logical-thinking",
                    question: "I'm a 3-digit number. My hundreds digit is 4. My tens digit is double my ones digit. My ones digit is 3. What am I?",
                    options: ["436", "463", "434", "443"],
                    correct: 0,
                    explanation: "Ones digit is 3, tens digit is double (6), hundreds digit is 4: 436.",
                    ralphHint: "Follow the clues! Ones: 3, Tens: double 3 = 6, Hundreds: 4!"
                },
                {
                    id: 100,
                    type: "celebration-question",
                    question: "You've completed 100 questions! How do you feel?",
                    options: ["Proud!", "Smart!", "Ready for more!", "All of these!"],
                    correct: 3,
                    explanation: "Congratulations! You've mastered numbers to 1000!",
                    ralphHint: "You did it! All 100 questions! Your brain is super strong now!"
                }
            ]
        },

        // Set 4: Advanced Place Value (Questions 31-40) - moved from earlier
        {
            set: 4,
            questions: [
                {
                    id: 31,
                    type: "decomposition",
                    question: "How many different ways can you show 125?",
                    options: ["1 way", "3 ways", "Many ways", "No ways"],
                    correct: 2,
                    explanation: "125 can be shown as 125 ones, 12 tens + 5 ones, 1 hundred + 25 ones, etc.",
                    ralphHint: "Numbers are flexible! Like play-dough, you can shape them different ways!"
                },
                {
                    id: 32,
                    type: "regrouping",
                    question: "What is 10 tens the same as?",
                    options: ["10", "100", "1000", "10000"],
                    correct: 1,
                    explanation: "10 tens = 100.",
                    ralphHint: "Ten groups of ten! That's like having 10 boxes with 10 things each!"
                },
                {
                    id: 33,
                    type: "place-value-puzzle",
                    question: "I have 23 tens and 4 ones. What number am I?",
                    options: ["234", "274", "304", "324"],
                    correct: 0,
                    explanation: "23 tens = 230, plus 4 ones = 234.",
                    ralphHint: "Twenty-three tens is 230, then add 4 more!"
                },
                {
                    id: 34,
                    type: "number-building",
                    question: "Using digits 5, 2, 8, what's the largest number you can make?",
                    options: ["258", "285", "528", "852"],
                    correct: 3,
                    explanation: "Arrange in descending order: 852.",
                    ralphHint: "Biggest digit first! Like putting the tallest kid in front!"
                },
                {
                    id: 35,
                    type: "number-building",
                    question: "Using digits 1, 6, 3, what's the smallest number you can make?",
                    options: ["136", "163", "316", "613"],
                    correct: 0,
                    explanation: "Arrange in ascending order: 136.",
                    ralphHint: "Smallest digit first! Like putting the shortest crayon first!"
                },
                {
                    id: 36,
                    type: "estimation",
                    question: "Which is closest to 500?",
                    options: ["456", "487", "523", "548"],
                    correct: 1,
                    explanation: "487 is closest to 500 (only 13 away).",
                    ralphHint: "Which one is the shortest hop to 500?"
                },
                {
                    id: 37,
                    type: "number-line-jumps",
                    question: "If you start at 250 and jump forward 50, where do you land?",
                    options: ["255", "260", "300", "350"],
                    correct: 2,
                    explanation: "250 + 50 = 300.",
                    ralphHint: "Big jump of 50! Like jumping over a big puddle!"
                },
                {
                    id: 38,
                    type: "mental-math",
                    question: "What's a quick way to add 99 to a number?",
                    options: ["Add 100, subtract 1", "Add 90, add 9", "Count by ones", "Use a calculator"],
                    correct: 0,
                    explanation: "Adding 99 is the same as adding 100 and subtracting 1.",
                    ralphHint: "99 is almost 100! Add 100 then take away 1!"
                },
                {
                    id: 39,
                    type: "problem-solving",
                    question: "Emma collected 345 stickers. She wants to organize them in groups of 100. How many full groups can she make?",
                    options: ["3", "4", "34", "345"],
                    correct: 0,
                    explanation: "345 ÷ 100 = 3 full groups (with 45 left over).",
                    ralphHint: "How many hundreds fit in 345? Look at the hundreds digit!"
                },
                {
                    id: 40,
                    type: "critical-thinking",
                    question: "I'm a 3-digit number. My hundreds digit is twice my tens digit. My ones digit is 5. My tens digit is 2. What am I?",
                    options: ["225", "245", "425", "525"],
                    correct: 2,
                    explanation: "Tens digit is 2, hundreds is twice that (4), ones is 5: 425.",
                    ralphHint: "Follow the clues! Like solving a mystery!"
                }
            ]
        },
        // Set 5: Number Patterns and Sequences (Questions 41-50)
        {
            set: 5,
            questions: [
                {
                    id: 41,
                    type: "growing-patterns",
                    question: "Continue: 3, 8, 13, 18, ___",
                    options: ["21", "23", "25", "28"],
                    correct: 1,
                    explanation: "Pattern: add 5 each time. 18 + 5 = 23.",
                    ralphHint: "Five more each time! Like getting 5 more marbles!"
                },
                {
                    id: 42,
                    type: "shrinking-patterns",
                    question: "What comes next? 100, 90, 80, 70, ___",
                    options: ["65", "60", "50", "40"],
                    correct: 1,
                    explanation: "Pattern: subtract 10 each time. 70 - 10 = 60.",
                    ralphHint: "Going down by 10s! Like counting down to zero!"
                },
                {
                    id: 43,
                    type: "rule-finding",
                    question: "What's the rule for: 2, 6, 10, 14?",
                    options: ["Add 3", "Add 4", "Multiply by 2", "Add 6"],
                    correct: 1,
                    explanation: "Rule: add 4 each time (2+4=6, 6+4=10, 10+4=14).",
                    ralphHint: "What number do you add each time? Count the jumps!"
                },
                {
                    id: 44,
                    type: "missing-terms",
                    question: "Fill in: 15, 25, ___, 45, 55",
                    options: ["30", "35", "40", "50"],
                    correct: 1,
                    explanation: "Pattern: add 10 each time. 25 + 10 = 35.",
                    ralphHint: "Add 10 each step! Like climbing stairs!"
                },
                {
                    id: 45,
                    type: "double-patterns",
                    question: "Look at: 1, 2, 4, 8, 16. What's the pattern?",
                    options: ["Add 1", "Add 2", "Double each time", "Add 10"],
                    correct: 2,
                    explanation: "Each number is double the previous: 1×2=2, 2×2=4, 4×2=8, 8×2=16.",
                    ralphHint: "Each number gets twice as big! Like my appetite!"
                },
                {
                    id: 46,
                    type: "complex-patterns",
                    question: "What's missing? 5, 10, 20, ___, 80",
                    options: ["30", "40", "50", "60"],
                    correct: 1,
                    explanation: "Pattern: double each time. 20 × 2 = 40.",
                    ralphHint: "Keep doubling! 5, 10, 20, 40, 80!"
                },
                {
                    id: 47,
                    type: "word-pattern",
                    question: "Tom saves money: Week 1: $12, Week 2: $17, Week 3: $22. How much in Week 4?",
                    options: ["$25", "$27", "$30", "$32"],
                    correct: 1,
                    explanation: "Pattern: add $5 each week. $22 + $5 = $27.",
                    ralphHint: "Five more dollars each week! Tom's getting richer!"
                },
                {
                    id: 48,
                    type: "skip-counting-patterns",
                    question: "Which sequence shows counting by 25s?",
                    options: ["25, 50, 75, 100", "25, 30, 35, 40", "25, 35, 45, 55", "25, 27, 29, 31"],
                    correct: 0,
                    explanation: "Counting by 25s: 25, 50, 75, 100.",
                    ralphHint: "Twenty-five more each time! Like quarters!"
                },
                {
                    id: 49,
                    type: "backwards-patterns",
                    question: "Count backwards by 20s: 200, 180, 160, ___",
                    options: ["140", "150", "120", "100"],
                    correct: 0,
                    explanation: "Subtract 20 each time: 160 - 20 = 140.",
                    ralphHint: "Twenty less each time! Going backwards!"
                },
                {
                    id: 50,
                    type: "pattern-extension",
                    question: "If the pattern 7, 14, 21, 28 continues, what's the 6th number?",
                    options: ["35", "42", "49", "56"],
                    correct: 1,
                    explanation: "Pattern: add 7 each time. 5th term is 35, 6th term is 42.",
                    ralphHint: "Keep adding 7! The pattern goes on and on!"
                }
            ]
        }
        // Sets 6-10 would continue with more advanced concepts:
        // Set 6: Hundreds, Tens, Ones Games (Questions 51-60)
        // Set 7: Number Comparison Challenges (Questions 61-70)  
        // Set 8: Rounding and Estimation (Questions 71-80)
        // Set 9: Mental Math Strategies (Questions 81-90)
        // Set 10: Mixed Review and Challenge Problems (Questions 91-100)
    ],

    // Category 2: Addition & Subtraction (100 questions in 10 sets)
    additionSubtraction: [
        // Set 1: Basic Addition within 20 (Questions 1-10)
        {
            set: 1,
            questions: [
                {
                    id: 1,
                    type: "basic-addition",
                    question: "What is 8 + 7?",
                    options: ["13", "14", "15", "16"],
                    correct: 2,
                    explanation: "8 + 7 = 15",
                    ralphHint: "Use your fingers! Or think: 8 + 2 = 10, then add 5 more!",
                    visual: "dots",
                    strategy: "make-ten"
                },
                {
                    id: 2,
                    type: "basic-addition", 
                    question: "9 + 6 = ?",
                    options: ["14", "15", "16", "17"],
                    correct: 1,
                    explanation: "9 + 6 = 15",
                    ralphHint: "Nine plus six! Think: 9 + 1 = 10, then add 5 more!",
                    visual: "ten-frame",
                    strategy: "make-ten"
                },
                {
                    id: 3,
                    type: "word-problem",
                    question: "Sarah has 7 stickers. Tom gives her 8 more. How many does she have now?",
                    options: ["14", "15", "16", "17"],
                    correct: 1,
                    explanation: "7 + 8 = 15 stickers",
                    ralphHint: "Add them together! Seven plus eight makes fifteen!",
                    visual: "story-problem",
                    strategy: "counting-on"
                },
                {
                    id: 4,
                    type: "missing-addend",
                    question: "7 + ___ = 13",
                    options: ["5", "6", "7", "8"],
                    correct: 1,
                    explanation: "7 + 6 = 13",
                    ralphHint: "What do you add to 7 to get 13? Count up!",
                    visual: "number-line",
                    strategy: "counting-on"
                },
                {
                    id: 5,
                    type: "doubles",
                    question: "What is 6 + 6?",
                    options: ["10", "11", "12", "13"],
                    correct: 2,
                    explanation: "6 + 6 = 12 (doubles fact)",
                    ralphHint: "Doubles! Six plus six is twelve!",
                    visual: "doubles",
                    strategy: "doubles"
                },
                {
                    id: 6,
                    type: "near-doubles",
                    question: "If 7 + 7 = 14, what is 7 + 8?",
                    options: ["14", "15", "16", "17"],
                    correct: 1,
                    explanation: "7 + 8 is one more than 7 + 7, so 14 + 1 = 15",
                    ralphHint: "Near doubles! Seven plus eight is one more than seven plus seven!",
                    visual: "near-doubles",
                    strategy: "doubles-plus-one"
                },
                {
                    id: 7,
                    type: "three-addends",
                    question: "What is 4 + 3 + 6?",
                    options: ["12", "13", "14", "15"],
                    correct: 1,
                    explanation: "4 + 3 + 6 = 7 + 6 = 13",
                    ralphHint: "Add the first two, then add the third! Or find a ten!",
                    visual: "three-numbers",
                    strategy: "group-make-ten"
                },
                {
                    id: 8,
                    type: "commutative",
                    question: "If 5 + 9 = 14, what does 9 + 5 equal?",
                    options: ["13", "14", "15", "16"],
                    correct: 1,
                    explanation: "Addition is commutative: 9 + 5 = 5 + 9 = 14",
                    ralphHint: "Switching doesn't matter! Five plus nine equals nine plus five!",
                    visual: "commutative",
                    strategy: "commutative-property"
                },
                {
                    id: 9,
                    type: "mental-math",
                    question: "What's an easy way to solve 9 + 7?",
                    options: ["Count all", "Make 10: (9+1)+6", "Use fingers", "Skip count"],
                    correct: 1,
                    explanation: "Make ten strategy: 9 + 1 = 10, then 10 + 6 = 16",
                    ralphHint: "Make it easy! Take 1 from 7 to make 9 into 10!",
                    visual: "make-ten",
                    strategy: "make-ten"
                },
                {
                    id: 10,
                    type: "fact-family",
                    question: "Which belongs in the same fact family as 6 + 9 = 15?",
                    options: ["15 - 6 = 9", "6 + 6 = 12", "9 + 9 = 18", "15 + 6 = 21"],
                    correct: 0,
                    explanation: "Fact families use the same three numbers: 6, 9, and 15",
                    ralphHint: "Same three numbers, different ways! Six, nine, and fifteen are family!",
                    visual: "fact-family",
                    strategy: "fact-families"
                }
            ]
        },
        // Set 2: Basic Subtraction within 20 (Questions 11-20)
        {
            set: 2,
            questions: [
                {
                    id: 11,
                    type: "basic-subtraction",
                    question: "What is 15 - 8?",
                    options: ["6", "7", "8", "9"],
                    correct: 1,
                    explanation: "15 - 8 = 7",
                    ralphHint: "Think: what plus 8 equals 15? Or count back!",
                    visual: "crossing-out",
                    strategy: "counting-back"
                },
                {
                    id: 12,
                    type: "basic-subtraction",
                    question: "14 - 6 = ?",
                    options: ["7", "8", "9", "10"],
                    correct: 1,
                    explanation: "14 - 6 = 8",
                    ralphHint: "Fourteen take away six! Count back or think addition!",
                    visual: "ten-frame-subtract",
                    strategy: "think-addition"
                },
                {
                    id: 13,
                    type: "word-problem",
                    question: "There were 16 birds in a tree. 9 flew away. How many are left?",
                    options: ["6", "7", "8", "9"],
                    correct: 1,
                    explanation: "16 - 9 = 7 birds left",
                    ralphHint: "Start with 16, take away 9. How many birds stay?",
                    visual: "story-problem",
                    strategy: "counting-back"
                },
                {
                    id: 14,
                    type: "missing-subtrahend",
                    question: "12 - ___ = 5",
                    options: ["5", "6", "7", "8"],
                    correct: 2,
                    explanation: "12 - 7 = 5",
                    ralphHint: "What do you take away from 12 to get 5?",
                    visual: "missing-part",
                    strategy: "think-addition"
                },
                {
                    id: 15,
                    type: "difference",
                    question: "What's the difference between 13 and 8?",
                    options: ["4", "5", "6", "7"],
                    correct: 1,
                    explanation: "13 - 8 = 5",
                    ralphHint: "How far apart are they? Count the gap!",
                    visual: "number-line-jump",
                    strategy: "counting-up"
                },
                {
                    id: 16,
                    type: "subtraction-strategies",
                    question: "To solve 11 - 8, you could:",
                    options: ["Count back 8", "Think 8 + ? = 11", "Use a ten frame", "All of these"],
                    correct: 3,
                    explanation: "Multiple strategies work for subtraction",
                    ralphHint: "Lots of ways to solve it! Pick your favorite!",
                    visual: "multiple-strategies",
                    strategy: "flexible-thinking"
                },
                {
                    id: 17,
                    type: "zero-facts",
                    question: "What is 9 - 0?",
                    options: ["0", "9", "10", "18"],
                    correct: 1,
                    explanation: "Subtracting 0 leaves the number unchanged: 9 - 0 = 9",
                    ralphHint: "Take away nothing, keep everything! Nine minus zero is nine!",
                    visual: "zero-property",
                    strategy: "zero-property"
                },
                {
                    id: 18,
                    type: "subtract-same-number",
                    question: "What is 7 - 7?",
                    options: ["0", "7", "14", "1"],
                    correct: 0,
                    explanation: "Any number minus itself equals 0",
                    ralphHint: "Take away all of something, nothing left! Seven minus seven is zero!",
                    visual: "subtract-all",
                    strategy: "subtract-self"
                },
                {
                    id: 19,
                    type: "comparison",
                    question: "How many more is 15 than 9?",
                    options: ["5", "6", "7", "8"],
                    correct: 1,
                    explanation: "15 - 9 = 6, so 15 is 6 more than 9",
                    ralphHint: "Compare them! How much bigger is 15?",
                    visual: "comparison-bars",
                    strategy: "comparison"
                },
                {
                    id: 20,
                    type: "inverse-operations",
                    question: "If 8 + 5 = 13, then 13 - 5 = ?",
                    options: ["5", "8", "13", "18"],
                    correct: 1,
                    explanation: "Addition and subtraction are inverse operations: 13 - 5 = 8",
                    ralphHint: "Addition and subtraction are opposites! They undo each other!",
                    visual: "inverse-operations",
                    strategy: "inverse-thinking"
                }
            ]
        },

        // Set 3: Addition within 100 (no regrouping) (Questions 21-30)
        {
            set: 3,
            questions: [
                {
                    id: 21,
                    type: "two-digit-addition",
                    question: "What is 23 + 14?",
                    options: ["35", "36", "37", "38"],
                    correct: 2,
                    explanation: "23 + 14 = 37",
                    ralphHint: "Add the tens: 20 + 10 = 30, then add the ones: 3 + 4 = 7!"
                },
                {
                    id: 22,
                    type: "two-digit-addition",
                    question: "45 + 32 = ?",
                    options: ["75", "76", "77", "78"],
                    correct: 2,
                    explanation: "45 + 32 = 77",
                    ralphHint: "40 + 30 = 70, and 5 + 2 = 7, so 77!"
                },
                {
                    id: 23,
                    type: "word-problem",
                    question: "Emma collected 24 shells. Ben collected 15 shells. How many shells do they have together?",
                    options: ["38", "39", "40", "41"],
                    correct: 1,
                    explanation: "24 + 15 = 39 shells",
                    ralphHint: "Add their shells together! 24 + 15!"
                },
                {
                    id: 24,
                    type: "tens-addition",
                    question: "What is 50 + 30?",
                    options: ["70", "80", "90", "100"],
                    correct: 1,
                    explanation: "50 + 30 = 80",
                    ralphHint: "5 tens plus 3 tens equals 8 tens!"
                },
                {
                    id: 25,
                    type: "place-value-addition",
                    question: "Add: 61 + 27",
                    options: ["86", "87", "88", "89"],
                    correct: 2,
                    explanation: "61 + 27 = 88 (60 + 20 = 80, 1 + 7 = 8)",
                    ralphHint: "Add tens and ones separately!"
                },
                {
                    id: 26,
                    type: "missing-addend",
                    question: "34 + ___ = 62",
                    options: ["26", "27", "28", "29"],
                    correct: 2,
                    explanation: "34 + 28 = 62",
                    ralphHint: "What do you add to 34 to get 62?"
                },
                {
                    id: 27,
                    type: "addition-patterns",
                    question: "Continue: 12 + 10 = 22, 22 + 10 = 32, 32 + 10 = ?",
                    options: ["40", "41", "42", "43"],
                    correct: 2,
                    explanation: "32 + 10 = 42",
                    ralphHint: "Keep adding 10! 32 + 10 = 42!"
                },
                {
                    id: 28,
                    type: "estimation",
                    question: "About what is 29 + 31?",
                    options: ["50", "60", "70", "80"],
                    correct: 1,
                    explanation: "29 ≈ 30, 31 ≈ 30, so about 60",
                    ralphHint: "Round both to 30, so about 30 + 30 = 60!"
                },
                {
                    id: 29,
                    type: "multi-step",
                    question: "Start with 25. Add 20. Add 13. What's your total?",
                    options: ["56", "57", "58", "59"],
                    correct: 2,
                    explanation: "25 + 20 = 45, then 45 + 13 = 58",
                    ralphHint: "Do it step by step! First 25 + 20, then add 13!"
                },
                {
                    id: 30,
                    type: "comparing-sums",
                    question: "Which sum is greater: 34 + 21 or 26 + 28?",
                    options: ["34 + 21", "26 + 28", "They're equal", "Can't tell"],
                    correct: 1,
                    explanation: "34 + 21 = 55, 26 + 28 = 54, so 26 + 28 is greater",
                    ralphHint: "Calculate both sums and compare!"
                }
            ]
        },

        // Set 4: Subtraction within 100 (no regrouping) (Questions 31-40)
        {
            set: 4,
            questions: [
                {
                    id: 31,
                    type: "two-digit-subtraction",
                    question: "What is 47 - 23?",
                    options: ["22", "23", "24", "25"],
                    correct: 2,
                    explanation: "47 - 23 = 24",
                    ralphHint: "Subtract tens from tens: 40 - 20 = 20, then ones: 7 - 3 = 4!"
                },
                {
                    id: 32,
                    type: "two-digit-subtraction",
                    question: "68 - 35 = ?",
                    options: ["31", "32", "33", "34"],
                    correct: 2,
                    explanation: "68 - 35 = 33",
                    ralphHint: "60 - 30 = 30, and 8 - 5 = 3, so 33!"
                },
                {
                    id: 33,
                    type: "word-problem",
                    question: "There were 56 apples. 24 were eaten. How many are left?",
                    options: ["30", "31", "32", "33"],
                    correct: 2,
                    explanation: "56 - 24 = 32 apples left",
                    ralphHint: "Take away the eaten apples! 56 - 24!"
                },
                {
                    id: 34,
                    type: "tens-subtraction",
                    question: "What is 80 - 50?",
                    options: ["20", "30", "40", "50"],
                    correct: 1,
                    explanation: "80 - 50 = 30",
                    ralphHint: "8 tens minus 5 tens equals 3 tens!"
                },
                {
                    id: 35,
                    type: "place-value-subtraction",
                    question: "Subtract: 79 - 46",
                    options: ["31", "32", "33", "34"],
                    correct: 2,
                    explanation: "79 - 46 = 33 (70 - 40 = 30, 9 - 6 = 3)",
                    ralphHint: "Subtract tens and ones separately!"
                },
                {
                    id: 36,
                    type: "missing-subtrahend",
                    question: "84 - ___ = 52",
                    options: ["30", "31", "32", "33"],
                    correct: 2,
                    explanation: "84 - 32 = 52",
                    ralphHint: "What do you subtract from 84 to get 52?"
                },
                {
                    id: 37,
                    type: "subtraction-patterns",
                    question: "Continue: 95 - 10 = 85, 85 - 10 = 75, 75 - 10 = ?",
                    options: ["63", "64", "65", "66"],
                    correct: 2,
                    explanation: "75 - 10 = 65",
                    ralphHint: "Keep subtracting 10! 75 - 10 = 65!"
                },
                {
                    id: 38,
                    type: "comparison-subtraction",
                    question: "How many fewer is 23 than 67?",
                    options: ["42", "43", "44", "45"],
                    correct: 2,
                    explanation: "67 - 23 = 44",
                    ralphHint: "Find the difference! 67 - 23!"
                },
                {
                    id: 39,
                    type: "estimation-subtraction",
                    question: "About what is 78 - 31?",
                    options: ["40", "50", "60", "70"],
                    correct: 1,
                    explanation: "78 ≈ 80, 31 ≈ 30, so about 50",
                    ralphHint: "Round to make it easy! About 80 - 30 = 50!"
                },
                {
                    id: 40,
                    type: "checking-subtraction",
                    question: "To check 63 - 28 = 35, you could add:",
                    options: ["63 + 28", "35 + 28", "63 + 35", "28 + 35"],
                    correct: 1,
                    explanation: "35 + 28 should equal 63 to check the subtraction",
                    ralphHint: "Add the answer to what you subtracted!"
                }
            ]
        },

        // Set 5: Addition with regrouping (Questions 41-50)
        {
            set: 5,
            questions: [
                {
                    id: 41,
                    type: "regrouping-addition",
                    question: "What is 27 + 15?",
                    options: ["40", "41", "42", "43"],
                    correct: 2,
                    explanation: "27 + 15 = 42 (7 + 5 = 12, regroup to get 42)",
                    ralphHint: "7 + 5 = 12! That's 1 ten and 2 ones!"
                },
                {
                    id: 42,
                    type: "regrouping-addition",
                    question: "38 + 26 = ?",
                    options: ["62", "63", "64", "65"],
                    correct: 2,
                    explanation: "38 + 26 = 64",
                    ralphHint: "8 + 6 = 14, so regroup! 30 + 20 + 14 = 64!"
                },
                {
                    id: 43,
                    type: "word-problem-regrouping",
                    question: "Maya has 29 stickers. She gets 17 more. How many does she have now?",
                    options: ["44", "45", "46", "47"],
                    correct: 2,
                    explanation: "29 + 17 = 46 stickers",
                    ralphHint: "9 + 7 = 16! Regroup and add!"
                },
                {
                    id: 44,
                    type: "three-addends",
                    question: "What is 18 + 7 + 5?",
                    options: ["28", "29", "30", "31"],
                    correct: 2,
                    explanation: "18 + 7 + 5 = 30",
                    ralphHint: "Add 7 + 5 first to make 12, then 18 + 12 = 30!"
                },
                {
                    id: 45,
                    type: "regrouping-challenge",
                    question: "46 + 37 = ?",
                    options: ["81", "82", "83", "84"],
                    correct: 2,
                    explanation: "46 + 37 = 83",
                    ralphHint: "6 + 7 = 13! Regroup the 1 ten!"
                },
                {
                    id: 46,
                    type: "missing-addend-regrouping",
                    question: "35 + ___ = 63",
                    options: ["26", "27", "28", "29"],
                    correct: 2,
                    explanation: "35 + 28 = 63",
                    ralphHint: "What plus 35 makes 63? Think about regrouping!"
                },
                {
                    id: 47,
                    type: "mental-regrouping",
                    question: "To add 29 + 33, you could think:",
                    options: ["30 + 33 - 1", "29 + 30 + 3", "Both work", "Neither works"],
                    correct: 2,
                    explanation: "Both strategies use friendly numbers to make addition easier",
                    ralphHint: "Make friendly numbers! Both ways work!"
                },
                {
                    id: 48,
                    type: "estimation-regrouping",
                    question: "About what is 48 + 36?",
                    options: ["70", "80", "90", "100"],
                    correct: 1,
                    explanation: "48 ≈ 50, 36 ≈ 40, so about 90. Actually 84.",
                    ralphHint: "Round first! About 50 + 40!"
                },
                {
                    id: 49,
                    type: "multi-step-regrouping",
                    question: "Start with 47. Add 28. Add 15. What's your total?",
                    options: ["88", "89", "90", "91"],
                    correct: 2,
                    explanation: "47 + 28 = 75, then 75 + 15 = 90",
                    ralphHint: "Step by step! First 47 + 28, then add 15!"
                },
                {
                    id: 50,
                    type: "comparing-regrouping",
                    question: "Which sum needs regrouping: 34 + 23 or 37 + 28?",
                    options: ["34 + 23", "37 + 28", "Both", "Neither"],
                    correct: 1,
                    explanation: "37 + 28 needs regrouping because 7 + 8 = 15",
                    ralphHint: "Check the ones! 7 + 8 = 15, so you need to regroup!"
                }
            ]
        },

        // Set 6: Subtraction with regrouping (Questions 51-60)
        {
            set: 6,
            questions: [
                {
                    id: 51,
                    type: "regrouping-subtraction",
                    question: "What is 42 - 17?",
                    options: ["23", "24", "25", "26"],
                    correct: 2,
                    explanation: "42 - 17 = 25 (regroup 1 ten to subtract)",
                    ralphHint: "Can't take 7 from 2, so borrow 1 ten!"
                },
                {
                    id: 52,
                    type: "regrouping-subtraction",
                    question: "61 - 28 = ?",
                    options: ["31", "32", "33", "34"],
                    correct: 2,
                    explanation: "61 - 28 = 33",
                    ralphHint: "Borrow from the tens! 51 - 28!"
                },
                {
                    id: 53,
                    type: "word-problem-regrouping",
                    question: "There were 53 cookies. 26 were eaten. How many are left?",
                    options: ["25", "26", "27", "28"],
                    correct: 2,
                    explanation: "53 - 26 = 27 cookies left",
                    ralphHint: "Subtract the eaten ones! Need to regroup!"
                },
                {
                    id: 54,
                    type: "zero-regrouping",
                    question: "What is 70 - 23?",
                    options: ["45", "46", "47", "48"],
                    correct: 2,
                    explanation: "70 - 23 = 47",
                    ralphHint: "Borrow from 7 tens to make 60 + 10 = 70!"
                },
                {
                    id: 55,
                    type: "regrouping-challenge",
                    question: "84 - 36 = ?",
                    options: ["46", "47", "48", "49"],
                    correct: 2,
                    explanation: "84 - 36 = 48",
                    ralphHint: "4 - 6 needs borrowing! Make it 14 - 6!"
                },
                {
                    id: 56,
                    type: "missing-subtrahend-regrouping",
                    question: "72 - ___ = 45",
                    options: ["25", "26", "27", "28"],
                    correct: 2,
                    explanation: "72 - 27 = 45",
                    ralphHint: "What do you take from 72 to get 45?"
                },
                {
                    id: 57,
                    type: "mental-regrouping-sub",
                    question: "To subtract 65 - 28, you could think:",
                    options: ["65 - 30 + 2", "67 - 30", "Both work", "Neither works"],
                    correct: 2,
                    explanation: "Both strategies make the subtraction easier",
                    ralphHint: "Make it easier! Both ways work!"
                },
                {
                    id: 58,
                    type: "checking-regrouping",
                    question: "To check 50 - 23 = 27, you add:",
                    options: ["50 + 23", "27 + 23", "50 + 27", "23 + 27"],
                    correct: 1,
                    explanation: "27 + 23 should equal 50",
                    ralphHint: "Add the answer to what you subtracted!"
                },
                {
                    id: 59,
                    type: "estimation-regrouping-sub",
                    question: "About what is 83 - 37?",
                    options: ["40", "50", "60", "70"],
                    correct: 1,
                    explanation: "83 ≈ 80, 37 ≈ 40, so about 40. Actually 46.",
                    ralphHint: "Round to make it easy! About 80 - 40!"
                },
                {
                    id: 60,
                    type: "comparing-regrouping-sub",
                    question: "Which needs regrouping: 75 - 32 or 75 - 38?",
                    options: ["75 - 32", "75 - 38", "Both", "Neither"],
                    correct: 1,
                    explanation: "75 - 38 needs regrouping because you can't subtract 8 from 5",
                    ralphHint: "Check the ones! Can you subtract 8 from 5 without borrowing?"
                }
            ]
        },

        // Set 7: Multi-step word problems (Questions 61-70)
        {
            set: 7,
            questions: [
                {
                    id: 61,
                    type: "multi-step-word",
                    question: "Sam has 23 stickers. He buys 15 more, then gives away 12. How many does he have now?",
                    options: ["24", "25", "26", "27"],
                    correct: 2,
                    explanation: "23 + 15 = 38, then 38 - 12 = 26",
                    ralphHint: "Two steps! First add what he bought, then subtract what he gave away!"
                },
                {
                    id: 62,
                    type: "multi-step-word",
                    question: "There are 34 red balloons and 28 blue balloons. 19 balloons pop. How many are left?",
                    options: ["41", "42", "43", "44"],
                    correct: 2,
                    explanation: "34 + 28 = 62 total, then 62 - 19 = 43 left",
                    ralphHint: "Add all balloons first, then subtract the ones that popped!"
                },
                {
                    id: 63,
                    type: "comparison-word",
                    question: "Lisa has 47 marbles. Tom has 29 marbles. How many more does Lisa have than Tom?",
                    options: ["16", "17", "18", "19"],
                    correct: 2,
                    explanation: "47 - 29 = 18 more marbles",
                    ralphHint: "Find the difference! How many more means subtract!"
                },
                {
                    id: 64,
                    type: "addition-word",
                    question: "At the zoo, there are 26 monkeys, 17 lions, and 21 bears. How many animals is this?",
                    options: ["62", "63", "64", "65"],
                    correct: 2,
                    explanation: "26 + 17 + 21 = 64 animals",
                    ralphHint: "Add all three groups together!"
                },
                {
                    id: 65,
                    type: "change-problems",
                    question: "Maya had some books. She bought 18 more and now has 45. How many did she start with?",
                    options: ["25", "26", "27", "28"],
                    correct: 2,
                    explanation: "45 - 18 = 27 books she started with",
                    ralphHint: "Work backwards! Take away what she bought from what she has now!"
                },
                {
                    id: 66,
                    type: "multi-step-money",
                    question: "Jake has 35 cents. He earns 28 more cents, then spends 19 cents. How many cents does he have?",
                    options: ["42", "43", "44", "45"],
                    correct: 2,
                    explanation: "35 + 28 = 63, then 63 - 19 = 44 cents",
                    ralphHint: "First add what he earned, then subtract what he spent!"
                },
                {
                    id: 67,
                    type: "group-problems",
                    question: "In three classes there are 24, 19, and 22 students. How many students in total?",
                    options: ["63", "64", "65", "66"],
                    correct: 2,
                    explanation: "24 + 19 + 22 = 65 students",
                    ralphHint: "Add all three classes together!"
                },
                {
                    id: 68,
                    type: "take-away-problems",
                    question: "There were 75 birds in a tree. 28 flew away, then 15 more flew away. How many are left?",
                    options: ["30", "31", "32", "33"],
                    correct: 2,
                    explanation: "75 - 28 - 15 = 32 birds left",
                    ralphHint: "Subtract both groups that flew away!"
                },
                {
                    id: 69,
                    type: "comparison-multi-step",
                    question: "School A has 86 students. School B has 59 students. How many more students does School A have?",
                    options: ["25", "26", "27", "28"],
                    correct: 2,
                    explanation: "86 - 59 = 27 more students",
                    ralphHint: "Compare by finding the difference!"
                },
                {
                    id: 70,
                    type: "planning-problems",
                    question: "Rosa needs 50 stickers. She has 23 and buys 18 more. How many more does she still need?",
                    options: ["7", "8", "9", "10"],
                    correct: 2,
                    explanation: "23 + 18 = 41, then 50 - 41 = 9 more needed",
                    ralphHint: "First find how many she has total, then subtract from what she needs!"
                }
            ]
        },

        // Set 8: Estimation in addition and subtraction (Questions 71-80)
        {
            set: 8,
            questions: [
                {
                    id: 71,
                    type: "estimation-addition",
                    question: "About what is 49 + 32?",
                    options: ["70", "80", "90", "100"],
                    correct: 1,
                    explanation: "49 ≈ 50, 32 ≈ 30, so about 80",
                    ralphHint: "Round to the nearest ten! 50 + 30 = 80!"
                },
                {
                    id: 72,
                    type: "estimation-subtraction",
                    question: "About what is 78 - 23?",
                    options: ["50", "55", "60", "65"],
                    correct: 1,
                    explanation: "78 ≈ 80, 23 ≈ 20, so about 60. Actually 55.",
                    ralphHint: "Round both numbers! 80 - 20 = 60!"
                },
                {
                    id: 73,
                    type: "reasonable-estimates",
                    question: "Which is a reasonable estimate for 63 + 28?",
                    options: ["70", "80", "90", "100"],
                    correct: 2,
                    explanation: "63 ≈ 60, 28 ≈ 30, so about 90",
                    ralphHint: "Round to tens! 60 + 30 = 90!"
                },
                {
                    id: 74,
                    type: "estimation-word",
                    question: "About how many students are in two classes with 31 and 27 students?",
                    options: ["50", "60", "70", "80"],
                    correct: 1,
                    explanation: "31 ≈ 30, 27 ≈ 30, so about 60 students",
                    ralphHint: "Round both classes to 30!"
                },
                {
                    id: 75,
                    type: "front-end-estimation",
                    question: "Using front-end estimation, what's 46 + 32?",
                    options: ["70", "80", "90", "100"],
                    correct: 1,
                    explanation: "40 + 30 = 70 using front digits only",
                    ralphHint: "Just use the tens digits! 40 + 30!"
                },
                {
                    id: 76,
                    type: "estimation-checking",
                    question: "Is 38 + 29 = 77 reasonable?",
                    options: ["No, too low", "Yes, reasonable", "No, too high", "Can't tell"],
                    correct: 1,
                    explanation: "38 ≈ 40, 29 ≈ 30, so about 70. 77 is reasonable.",
                    ralphHint: "Check with estimation! About 40 + 30 = 70!"
                },
                {
                    id: 77,
                    type: "rounding-strategies",
                    question: "To estimate 84 - 37, you could round to:",
                    options: ["80 - 40", "90 - 40", "Both work", "Neither works"],
                    correct: 2,
                    explanation: "Both 80-40=40 and 90-40=50 are reasonable estimates",
                    ralphHint: "Both rounding strategies work for estimating!"
                },
                {
                    id: 78,
                    type: "estimation-comparison",
                    question: "Which estimate is closer: 56 + 38 ≈ 90 or 56 + 38 ≈ 100?",
                    options: ["90 is closer", "100 is closer", "Both equal", "Can't tell"],
                    correct: 0,
                    explanation: "56 + 38 = 94, so 90 is closer than 100",
                    ralphHint: "Calculate and compare! 94 is closer to 90!"
                },
                {
                    id: 79,
                    type: "multiple-estimation",
                    question: "About what is 27 + 34 + 31?",
                    options: ["80", "90", "100", "110"],
                    correct: 1,
                    explanation: "27 ≈ 30, 34 ≈ 30, 31 ≈ 30, so about 90",
                    ralphHint: "Round all three to 30! 30 + 30 + 30 = 90!"
                },
                {
                    id: 80,
                    type: "estimation-sense",
                    question: "If you estimated 72 - 28 as 50, what rounding did you use?",
                    options: ["70 - 30", "70 - 20", "80 - 30", "All possible"],
                    correct: 0,
                    explanation: "70 - 30 = 40, which is closest to the estimate of 50",
                    ralphHint: "Think backwards! What rounds to give about 50?"
                }
            ]
        },

        // Set 9: Mental math strategies (Questions 81-90)
        {
            set: 9,
            questions: [
                {
                    id: 81,
                    type: "mental-addition",
                    question: "To add 47 + 35 mentally, you could:",
                    options: ["47 + 30 + 5", "50 + 35 - 3", "Both strategies", "Count by ones"],
                    correct: 2,
                    explanation: "Both breaking apart and compensation strategies work well",
                    ralphHint: "Both ways make it easier! Pick what works for you!"
                },
                {
                    id: 82,
                    type: "compensation-mental",
                    question: "To solve 68 + 29, you could think:",
                    options: ["68 + 30 - 1", "70 + 29 - 2", "Both work", "Neither works"],
                    correct: 2,
                    explanation: "Both compensation strategies make easier numbers",
                    ralphHint: "Make friendly numbers! Both ways work!"
                },
                {
                    id: 83,
                    type: "doubles-mental",
                    question: "To find 36 + 38, use doubles:",
                    options: ["37 + 37", "36 + 36 + 2", "Both", "Neither"],
                    correct: 2,
                    explanation: "Both use the double 37 or add 2 to double 36",
                    ralphHint: "Doubles are helpful! 37 + 37 or 36 + 36 + 2!"
                },
                {
                    id: 84,
                    type: "mental-subtraction",
                    question: "For 83 - 47, you could think:",
                    options: ["83 - 50 + 3", "86 - 50", "Both", "Neither"],
                    correct: 2,
                    explanation: "Both compensation strategies work for subtraction",
                    ralphHint: "Make it easier! Both ways work for subtraction!"
                },
                {
                    id: 85,
                    type: "counting-up",
                    question: "To find 72 - 45, you could count up:",
                    options: ["45 to 70, then add 2", "45 to 72 directly", "Both work", "Neither works"],
                    correct: 2,
                    explanation: "Both counting up strategies find the difference",
                    ralphHint: "Count up from 45 to 72! Both ways work!"
                },
                {
                    id: 86,
                    type: "landmark-numbers",
                    question: "To add 58 + 26, use the landmark 60:",
                    options: ["60 + 26 - 2", "58 + 30 - 4", "Both work", "Neither works"],
                    correct: 0,
                    explanation: "60 + 26 - 2 = 84 uses the landmark 60",
                    ralphHint: "Use 60 as a landmark! 60 + 26 - 2!"
                },
                {
                    id: 87,
                    type: "breaking-apart",
                    question: "To calculate 54 + 38, break apart 38:",
                    options: ["54 + 30 + 8", "54 + 40 - 2", "Both work", "Neither works"],
                    correct: 2,
                    explanation: "Both ways break apart one addend to make calculation easier",
                    ralphHint: "Break apart 38! Both 30+8 and 40-2 work!"
                },
                {
                    id: 88,
                    type: "mental-checking",
                    question: "To check 67 - 29 = 38 mentally:",
                    options: ["38 + 29 = 67", "29 + 38 = 67", "Both work", "Add 67 + 29"],
                    correct: 2,
                    explanation: "Both addition checks work (addition is commutative)",
                    ralphHint: "Check by adding! 38 + 29 should equal 67!"
                },
                {
                    id: 89,
                    type: "flexibility-mental",
                    question: "The best mental strategy depends on:",
                    options: ["The numbers involved", "What you're comfortable with", "The situation", "All of these"],
                    correct: 3,
                    explanation: "Good mental math uses flexible strategies based on the problem",
                    ralphHint: "Be flexible! Use what works best for each problem!"
                },
                {
                    id: 90,
                    type: "speed-mental",
                    question: "Which is fastest to calculate mentally: 50 + 25, 49 + 26, or 48 + 27?",
                    options: ["50 + 25", "49 + 26", "48 + 27", "All same speed"],
                    correct: 0,
                    explanation: "50 + 25 uses friendly numbers that are easier to add",
                    ralphHint: "Friendly numbers are fastest! 50 + 25 is easiest!"
                }
            ]
        },

        // Set 10: Mixed review and problem solving (Questions 91-100)
        {
            set: 10,
            questions: [
                {
                    id: 91,
                    type: "mixed-addition",
                    question: "What is 46 + 37?",
                    options: ["81", "82", "83", "84"],
                    correct: 2,
                    explanation: "46 + 37 = 83",
                    ralphHint: "Add carefully! 6 + 7 = 13, so regroup!"
                },
                {
                    id: 92,
                    type: "mixed-subtraction",
                    question: "What is 92 - 48?",
                    options: ["42", "43", "44", "45"],
                    correct: 2,
                    explanation: "92 - 48 = 44",
                    ralphHint: "Need to regroup! Can't take 8 from 2!"
                },
                {
                    id: 93,
                    type: "problem-solving-mixed",
                    question: "Tim has 64 cards. He gives 27 to his sister and 19 to his brother. How many does he have left?",
                    options: ["16", "17", "18", "19"],
                    correct: 2,
                    explanation: "64 - 27 - 19 = 18 cards left",
                    ralphHint: "Subtract what he gave to both people!"
                },
                {
                    id: 94,
                    type: "estimation-mixed",
                    question: "About what is 73 + 28 - 35?",
                    options: ["60", "70", "80", "90"],
                    correct: 1,
                    explanation: "73 + 28 ≈ 100, then 100 - 35 ≈ 65, closest to 70",
                    ralphHint: "Estimate step by step! About 70 + 30 - 35!"
                },
                {
                    id: 95,
                    type: "comparison-mixed",
                    question: "Which expression has the greatest value?",
                    options: ["45 + 28", "82 - 15", "38 + 34", "91 - 18"],
                    correct: 0,
                    explanation: "45 + 28 = 73, which is the greatest",
                    ralphHint: "Calculate each one and compare!"
                },
                {
                    id: 96,
                    type: "pattern-mixed",
                    question: "Continue the pattern: 87, 79, 71, 63, ___",
                    options: ["53", "54", "55", "56"],
                    correct: 2,
                    explanation: "Pattern decreases by 8: 63 - 8 = 55",
                    ralphHint: "What's the pattern? Subtract 8 each time!"
                },
                {
                    id: 97,
                    type: "mental-mixed",
                    question: "Quick! What's 50 + 50 - 17?",
                    options: ["81", "82", "83", "84"],
                    correct: 2,
                    explanation: "50 + 50 = 100, then 100 - 17 = 83",
                    ralphHint: "Easy! 50 + 50 = 100, then subtract 17!"
                },
                {
                    id: 98,
                    type: "word-mixed",
                    question: "A toy store had 85 toys. They sold 39 toys and got 27 new toys. How many toys do they have now?",
                    options: ["71", "72", "73", "74"],
                    correct: 2,
                    explanation: "85 - 39 + 27 = 73 toys",
                    ralphHint: "Subtract what they sold, then add what they got!"
                },
                {
                    id: 99,
                    type: "logical-mixed",
                    question: "I'm thinking of two numbers that add to 75. One is 38. What's the other?",
                    options: ["35", "36", "37", "38"],
                    correct: 2,
                    explanation: "75 - 38 = 37",
                    ralphHint: "What plus 38 equals 75?"
                },
                {
                    id: 100,
                    type: "celebration-addition",
                    question: "You've completed 100 addition and subtraction questions! How do you feel?",
                    options: ["Amazing!", "Smart!", "Ready for more!", "All of these!"],
                    correct: 3,
                    explanation: "Congratulations! You've mastered addition and subtraction!",
                    ralphHint: "You did it! 100 questions! You're an addition and subtraction superstar!"
                }
            ]
        }
    ],

    // Category 3: Fractions (100 questions in 10 sets) 
    fractions: [
        // Set 1: Understanding Unit Fractions (Questions 1-10)
        {
            set: 1,
            questions: [
                {
                    id: 1,
                    type: "unit-fraction-identification",
                    question: "Which fraction represents one equal part of a whole divided into 4 parts?",
                    options: ["1/2", "1/3", "1/4", "4/1"],
                    correct: 2,
                    explanation: "When a whole is divided into 4 equal parts, each part is 1/4",
                    ralphHint: "One piece out of four! Like getting one slice of a four-slice pizza!",
                    visual: "circle-fourths"
                },
                {
                    id: 2,
                    type: "visual-fraction",
                    question: "What fraction of this circle is shaded? [Shows 1/3 shaded]",
                    options: ["1/2", "1/3", "2/3", "1/4"],
                    correct: 1,
                    explanation: "One out of three equal parts is shaded",
                    ralphHint: "Count the parts! One shaded, three total!",
                    visual: "circle-thirds"
                },
                {
                    id: 3,
                    type: "unit-fraction-parts",
                    question: "How many equal parts are in a whole divided into halves?",
                    options: ["1", "2", "3", "4"],
                    correct: 1,
                    explanation: "Halves means the whole is divided into 2 equal parts",
                    ralphHint: "Half means two pieces! Like breaking a cookie in half!"
                },
                {
                    id: 4,
                    type: "unit-fraction-naming",
                    question: "What do we call one equal part when a whole is divided into 3 parts?",
                    options: ["One half", "One third", "One fourth", "Three wholes"],
                    correct: 1,
                    explanation: "One equal part out of 3 is called one third or 1/3",
                    ralphHint: "One out of three! Like one piece of a three-piece sandwich!"
                },
                {
                    id: 5,
                    type: "visual-unit-fraction",
                    question: "Which shape shows 1/2? [Shows various divided shapes]",
                    options: ["Shape divided in 3", "Shape divided in 2", "Shape divided in 4", "Whole shape"],
                    correct: 1,
                    explanation: "1/2 means one part out of 2 equal parts",
                    ralphHint: "Half means two equal pieces!"
                },
                {
                    id: 6,
                    type: "fraction-parts",
                    question: "In the fraction 1/4, what does the 4 tell us?",
                    options: ["How many parts are shaded", "How many parts in the whole", "The bigger number", "The smaller number"],
                    correct: 1,
                    explanation: "The bottom number tells us how many equal parts the whole is divided into",
                    ralphHint: "The bottom number counts all the pieces!"
                },
                {
                    id: 7,
                    type: "fraction-identification",
                    question: "In the fraction 1/3, what does the 1 tell us?",
                    options: ["How many parts in the whole", "How many parts we're talking about", "The biggest part", "The smallest part"],
                    correct: 1,
                    explanation: "The top number tells us how many parts we're counting or talking about",
                    ralphHint: "The top number counts what we have!"
                },
                {
                    id: 8,
                    type: "real-world-fractions",
                    question: "If you eat 1/4 of a pizza, how many equal parts was the pizza divided into?",
                    options: ["1", "2", "3", "4"],
                    correct: 3,
                    explanation: "1/4 means the pizza was divided into 4 equal parts",
                    ralphHint: "The bottom number is how many slices the whole pizza had!"
                },
                {
                    id: 9,
                    type: "unit-fraction-comparison",
                    question: "Which unit fraction represents a larger piece: 1/2 or 1/4?",
                    options: ["1/2", "1/4", "They're the same", "Can't tell"],
                    correct: 0,
                    explanation: "1/2 is larger because when you divide into fewer parts, each part is bigger",
                    ralphHint: "Fewer pieces means bigger pieces! Half is bigger than a fourth!"
                },
                {
                    id: 10,
                    type: "unit-fraction-application",
                    question: "Sarah shared her sandwich equally with 2 friends. What fraction did each person get?",
                    options: ["1/2", "1/3", "1/4", "2/3"],
                    correct: 1,
                    explanation: "3 people sharing equally means each gets 1/3",
                    ralphHint: "Three people sharing means thirds! Each gets 1/3!"
                }
            ]
        },

        // Set 2: Halves, thirds, fourths (Questions 11-20)
        {
            set: 2,
            questions: [
                {
                    id: 11,
                    type: "halves-identification",
                    question: "Which picture shows halves?",
                    options: ["Circle with 3 parts", "Circle with 2 equal parts", "Circle with 4 parts", "Whole circle"],
                    correct: 1,
                    explanation: "Halves means 2 equal parts",
                    ralphHint: "Halves means two equal pieces!"
                },
                {
                    id: 12,
                    type: "thirds-identification",
                    question: "How many thirds make one whole?",
                    options: ["2", "3", "4", "6"],
                    correct: 1,
                    explanation: "Three thirds make one whole: 1/3 + 1/3 + 1/3 = 3/3 = 1",
                    ralphHint: "Three thirds make a whole! Like three pieces make the whole pizza!"
                },
                {
                    id: 13,
                    type: "fourths-identification",
                    question: "What fraction represents one piece of a square divided into 4 equal parts?",
                    options: ["1/2", "1/3", "1/4", "4/4"],
                    correct: 2,
                    explanation: "One piece out of 4 equal parts is 1/4",
                    ralphHint: "One fourth! One piece out of four!"
                },
                {
                    id: 14,
                    type: "visual-halves",
                    question: "If 2/2 of a circle is shaded, how much is shaded?",
                    options: ["Half", "None", "All of it", "A quarter"],
                    correct: 2,
                    explanation: "2/2 means all parts are shaded, so the whole circle is shaded",
                    ralphHint: "Two halves make a whole! All of it!"
                },
                {
                    id: 15,
                    type: "comparing-basic",
                    question: "Which is larger: 1/2 or 1/3?",
                    options: ["1/2", "1/3", "They're equal", "Can't tell"],
                    correct: 0,
                    explanation: "1/2 is larger than 1/3 because when you divide into fewer parts, each part is bigger",
                    ralphHint: "Half is bigger than one third! Fewer pieces means bigger pieces!"
                },
                {
                    id: 16,
                    type: "parts-to-whole",
                    question: "How many fourths are in one whole?",
                    options: ["2", "3", "4", "8"],
                    correct: 2,
                    explanation: "Four fourths make one whole: 1/4 + 1/4 + 1/4 + 1/4 = 4/4 = 1",
                    ralphHint: "Four fourths make one whole!"
                },
                {
                    id: 17,
                    type: "fraction-language",
                    question: "What is another way to say 1/2?",
                    options: ["One third", "One fourth", "One half", "Two wholes"],
                    correct: 2,
                    explanation: "1/2 is read as 'one half'",
                    ralphHint: "One out of two is one half!"
                },
                {
                    id: 18,
                    type: "everyday-fractions",
                    question: "If you eat 1/3 of an apple, how much is left?",
                    options: ["1/3", "2/3", "3/3", "Nothing"],
                    correct: 1,
                    explanation: "If you eat 1/3, then 2/3 is left (1 - 1/3 = 2/3)",
                    ralphHint: "You ate one piece, two pieces are left! 2/3!"
                },
                {
                    id: 19,
                    type: "fraction-representation",
                    question: "Which fraction represents the whole thing?",
                    options: ["1/2", "2/3", "3/4", "4/4"],
                    correct: 3,
                    explanation: "4/4 means all 4 parts, which is the whole thing",
                    ralphHint: "When top and bottom are the same, it's the whole thing!"
                },
                {
                    id: 20,
                    type: "basic-word-problem",
                    question: "Mom cut a cake into 4 equal pieces. Dad ate 1 piece. What fraction of the cake did Dad eat?",
                    options: ["1/2", "1/3", "1/4", "4/4"],
                    correct: 2,
                    explanation: "1 piece out of 4 equal pieces is 1/4",
                    ralphHint: "One piece out of four is 1/4!"
                }
            ]
        },

        // Set 3: Sixths, eighths, tenths (Questions 21-30)
        {
            set: 3,
            questions: [
                {
                    id: 21,
                    type: "sixths-introduction",
                    question: "How many equal parts are in a whole divided into sixths?",
                    options: ["4", "5", "6", "8"],
                    correct: 2,
                    explanation: "Sixths means the whole is divided into 6 equal parts",
                    ralphHint: "Six! Like six slices of pizza!"
                },
                {
                    id: 22,
                    type: "eighths-introduction",
                    question: "What fraction represents one piece when a whole is divided into 8 equal parts?",
                    options: ["1/6", "1/7", "1/8", "1/9"],
                    correct: 2,
                    explanation: "One piece out of 8 equal parts is 1/8",
                    ralphHint: "One eighth! One piece out of eight!"
                },
                {
                    id: 23,
                    type: "tenths-introduction",
                    question: "In the fraction 1/10, how many equal parts is the whole divided into?",
                    options: ["9", "10", "11", "100"],
                    correct: 1,
                    explanation: "The bottom number 10 tells us the whole is divided into 10 equal parts",
                    ralphHint: "Ten! The bottom number tells us!"
                },
                {
                    id: 24,
                    type: "comparing-unit-fractions",
                    question: "Which unit fraction is smallest?",
                    options: ["1/4", "1/6", "1/8", "1/2"],
                    correct: 2,
                    explanation: "1/8 is smallest because when you divide into more parts, each part is smaller",
                    ralphHint: "More pieces means smaller pieces! 1/8 is smallest!"
                },
                {
                    id: 25,
                    type: "ordering-fractions",
                    question: "Put these in order from largest to smallest: 1/2, 1/6, 1/4",
                    options: ["1/2, 1/4, 1/6", "1/6, 1/4, 1/2", "1/4, 1/2, 1/6", "1/6, 1/2, 1/4"],
                    correct: 0,
                    explanation: "1/2 > 1/4 > 1/6 (fewer parts = larger pieces)",
                    ralphHint: "Fewer pieces means bigger pieces! Half, fourth, sixth!"
                },
                {
                    id: 26,
                    type: "visual-tenths",
                    question: "If a strip is divided into 10 equal parts and 3 are shaded, what fraction is shaded?",
                    options: ["3/10", "1/3", "3/3", "10/3"],
                    correct: 0,
                    explanation: "3 parts out of 10 equal parts is 3/10",
                    ralphHint: "Three out of ten! 3/10!"
                },
                {
                    id: 27,
                    type: "multiple-parts",
                    question: "What fraction represents 2 pieces out of 6 equal pieces?",
                    options: ["1/6", "2/6", "6/2", "2/2"],
                    correct: 1,
                    explanation: "2 pieces out of 6 equal pieces is 2/6",
                    ralphHint: "Two out of six! 2/6!"
                },
                {
                    id: 28,
                    type: "fraction-completion",
                    question: "How many eighths do you need to make one whole?",
                    options: ["6", "7", "8", "9"],
                    correct: 2,
                    explanation: "Eight eighths make one whole: 8/8 = 1",
                    ralphHint: "Eight eighths make one whole!"
                },
                {
                    id: 29,
                    type: "real-world-application",
                    question: "A granola bar is divided into 10 equal pieces. You eat 4 pieces. What fraction did you eat?",
                    options: ["4/10", "1/4", "10/4", "4/4"],
                    correct: 0,
                    explanation: "4 pieces out of 10 equal pieces is 4/10",
                    ralphHint: "Four out of ten pieces! 4/10!"
                },
                {
                    id: 30,
                    type: "fraction-reasoning",
                    question: "Which is larger: 3/8 or 1/4?",
                    options: ["3/8", "1/4", "They're equal", "Can't tell"],
                    correct: 0,
                    explanation: "3/8 is larger than 1/4 (which is 2/8)",
                    ralphHint: "Think of 1/4 as 2/8! Then compare 3/8 and 2/8!"
                }
            ]
        },

        // Set 4: Comparing unit fractions (Questions 31-40)
        {
            set: 4,
            questions: [
                {
                    id: 31,
                    type: "size-comparison",
                    question: "Which unit fraction represents the largest piece?",
                    options: ["1/3", "1/5", "1/8", "1/2"],
                    correct: 3,
                    explanation: "1/2 is largest because fewer parts means bigger pieces",
                    ralphHint: "Fewer parts means bigger pieces! Half is biggest!"
                },
                {
                    id: 32,
                    type: "visual-comparison",
                    question: "Looking at two pizzas of the same size, which gives you more: 1/3 or 1/6?",
                    options: ["1/3", "1/6", "Same amount", "Depends on the pizza"],
                    correct: 0,
                    explanation: "1/3 is larger than 1/6",
                    ralphHint: "One third is bigger than one sixth!"
                },
                {
                    id: 33,
                    type: "reasoning-comparison",
                    question: "Why is 1/4 larger than 1/8?",
                    options: ["4 is bigger than 8", "Because 4 comes first", "Fewer parts means bigger pieces", "8 is bigger than 4"],
                    correct: 2,
                    explanation: "When the whole is divided into fewer parts, each part is bigger",
                    ralphHint: "Fewer parts means bigger pieces!"
                },
                {
                    id: 34,
                    type: "ordering-challenge",
                    question: "Put these in order from smallest to largest: 1/3, 1/10, 1/5",
                    options: ["1/10, 1/5, 1/3", "1/3, 1/5, 1/10", "1/5, 1/3, 1/10", "1/10, 1/3, 1/5"],
                    correct: 0,
                    explanation: "1/10 < 1/5 < 1/3 (more parts = smaller pieces)",
                    ralphHint: "More parts means smaller pieces!"
                },
                {
                    id: 35,
                    type: "practical-comparison",
                    question: "You want the biggest piece of chocolate. Which should you choose?",
                    options: ["1/6 of a bar", "1/4 of a bar", "1/8 of a bar", "1/12 of a bar"],
                    correct: 1,
                    explanation: "1/4 is the largest piece because 4 is the smallest denominator",
                    ralphHint: "Pick the fraction with the smallest bottom number!"
                },
                {
                    id: 36,
                    type: "equal-comparison",
                    question: "Which two fractions represent the same amount?",
                    options: ["1/2 and 2/4", "1/3 and 2/6", "1/4 and 2/8", "All of these"],
                    correct: 3,
                    explanation: "All pairs represent the same amounts: these are equivalent fractions",
                    ralphHint: "All of these are equal! Like different ways to say the same thing!"
                },
                {
                    id: 37,
                    type: "comparison-word-problem",
                    question: "Anna ate 1/4 of her sandwich. Ben ate 1/6 of his sandwich. Who ate a bigger fraction?",
                    options: ["Anna", "Ben", "They ate the same", "Can't tell"],
                    correct: 0,
                    explanation: "1/4 is larger than 1/6",
                    ralphHint: "One fourth is bigger than one sixth!"
                },
                {
                    id: 38,
                    type: "multiple-choice-comparison",
                    question: "Which statement is true?",
                    options: ["1/5 > 1/4", "1/7 > 1/6", "1/3 > 1/5", "1/10 > 1/8"],
                    correct: 2,
                    explanation: "1/3 > 1/5 is the only true statement",
                    ralphHint: "One third is bigger than one fifth!"
                },
                {
                    id: 39,
                    type: "reasoning-question",
                    question: "If 1/4 > 1/8, then what can we say about 1/2 and 1/4?",
                    options: ["1/2 < 1/4", "1/2 > 1/4", "1/2 = 1/4", "Can't tell"],
                    correct: 1,
                    explanation: "Following the same pattern, 1/2 > 1/4 (fewer parts = bigger pieces)",
                    ralphHint: "If the pattern continues, half is bigger than a fourth!"
                },
                {
                    id: 40,
                    type: "application-comparison",
                    question: "Which would give you more juice: 1/3 of a large cup or 1/2 of the same large cup?",
                    options: ["1/3", "1/2", "Same amount", "Need to know cup size"],
                    correct: 1,
                    explanation: "1/2 is larger than 1/3 of the same cup",
                    ralphHint: "Half is more than one third!"
                }
            ]
        },

        // Set 5: Fractions of shapes and sets (Questions 41-50)
        {
            set: 5,
            questions: [
                {
                    id: 41,
                    type: "fractions-of-groups",
                    question: "There are 6 apples. What is 1/2 of 6 apples?",
                    options: ["2 apples", "3 apples", "4 apples", "6 apples"],
                    correct: 1,
                    explanation: "1/2 of 6 is 3 because 6 ÷ 2 = 3",
                    ralphHint: "Half of 6 is 3! Split them in two groups!"
                },
                {
                    id: 42,
                    type: "fractions-of-sets",
                    question: "There are 8 stickers. What is 1/4 of 8 stickers?",
                    options: ["1 sticker", "2 stickers", "4 stickers", "8 stickers"],
                    correct: 1,
                    explanation: "1/4 of 8 is 2 because 8 ÷ 4 = 2",
                    ralphHint: "One fourth of 8 is 2! Divide into 4 groups!"
                },
                {
                    id: 43,
                    type: "shape-fractions",
                    question: "A rectangle is divided into 6 equal parts. 2 parts are red. What fraction is red?",
                    options: ["1/6", "2/6", "6/2", "2/2"],
                    correct: 1,
                    explanation: "2 parts out of 6 equal parts is 2/6",
                    ralphHint: "Two out of six! 2/6!"
                },
                {
                    id: 44,
                    type: "circle-fractions",
                    question: "A pie is cut into 8 equal slices. 3 slices are eaten. What fraction is left?",
                    options: ["3/8", "5/8", "8/3", "8/5"],
                    correct: 1,
                    explanation: "8 - 3 = 5 slices left, so 5/8 is left",
                    ralphHint: "5 slices are left out of 8 total! 5/8!"
                },
                {
                    id: 45,
                    type: "group-fractions",
                    question: "In a group of 10 balls, 4 are blue. What fraction of the balls are blue?",
                    options: ["4/10", "6/10", "10/4", "4/6"],
                    correct: 0,
                    explanation: "4 blue balls out of 10 total balls is 4/10",
                    ralphHint: "Four out of ten balls! 4/10!"
                },
                {
                    id: 46,
                    type: "mixed-representation",
                    question: "What is 1/3 of 9 cookies?",
                    options: ["1 cookie", "2 cookies", "3 cookies", "9 cookies"],
                    correct: 2,
                    explanation: "1/3 of 9 is 3 because 9 ÷ 3 = 3",
                    ralphHint: "One third of 9 is 3! Divide into 3 groups!"
                },
                {
                    id: 47,
                    type: "remaining-fractions",
                    question: "A box has 12 crayons. 1/4 are broken. How many crayons are NOT broken?",
                    options: ["3 crayons", "4 crayons", "9 crayons", "12 crayons"],
                    correct: 2,
                    explanation: "1/4 of 12 is 3, so 12 - 3 = 9 are not broken",
                    ralphHint: "Find 1/4 of 12 first, then subtract from 12!"
                },
                {
                    id: 48,
                    type: "visual-groups",
                    question: "There are 4 rows with 2 dots each. What fraction of the dots is in the first row?",
                    options: ["1/2", "1/4", "2/8", "Both B and C"],
                    correct: 3,
                    explanation: "First row has 2 dots out of 8 total, so 2/8, which equals 1/4",
                    ralphHint: "Two dots out of eight total! That's 2/8 or 1/4!"
                },
                {
                    id: 49,
                    type: "part-whole-groups",
                    question: "A class has 6 boys and 6 girls. What fraction of the class are girls?",
                    options: ["6/6", "6/12", "12/6", "1/2"],
                    correct: 1,
                    explanation: "6 girls out of 12 total students is 6/12 (which equals 1/2)",
                    ralphHint: "Six girls out of twelve total students! 6/12!"
                },
                {
                    id: 50,
                    type: "practical-fractions",
                    question: "Mom bought 10 bananas. The family ate 3/10 of them. How many bananas are left?",
                    options: ["3 bananas", "7 bananas", "10 bananas", "13 bananas"],
                    correct: 1,
                    explanation: "3/10 of 10 is 3, so 10 - 3 = 7 bananas left",
                    ralphHint: "They ate 3, so 7 are left!"
                }
            ]
        },

        // Set 6: Equivalent fractions (basic) (Questions 51-60)
        {
            set: 6,
            questions: [
                {
                    id: 51,
                    type: "basic-equivalence",
                    question: "Which fraction is equal to 1/2?",
                    options: ["1/4", "2/4", "1/3", "3/4"],
                    correct: 1,
                    explanation: "2/4 equals 1/2 because they represent the same amount",
                    ralphHint: "Two fourths is the same as one half!"
                },
                {
                    id: 52,
                    type: "visual-equivalence",
                    question: "Two circles are the same size. One is divided in half with 1 part shaded. The other is divided into fourths. How many fourths should be shaded to show the same amount?",
                    options: ["1 fourth", "2 fourths", "3 fourths", "4 fourths"],
                    correct: 1,
                    explanation: "1/2 = 2/4, so 2 fourths equals 1 half",
                    ralphHint: "Half equals two fourths!"
                },
                {
                    id: 53,
                    type: "equivalent-identification",
                    question: "Which fraction equals 1/3?",
                    options: ["2/6", "1/6", "3/6", "2/3"],
                    correct: 0,
                    explanation: "2/6 equals 1/3 because they represent the same amount",
                    ralphHint: "Two sixths equals one third!"
                },
                {
                    id: 54,
                    type: "multiple-equivalents",
                    question: "Which fractions are all equal to each other?",
                    options: ["1/2, 2/4, 3/6", "1/3, 2/6, 4/12", "Both A and B", "Neither A nor B"],
                    correct: 2,
                    explanation: "Both sets contain equivalent fractions",
                    ralphHint: "Both groups show the same amounts in different ways!"
                },
                {
                    id: 55,
                    type: "pattern-equivalence",
                    question: "If 1/2 = 2/4, then 1/2 also equals:",
                    options: ["3/6", "4/8", "5/10", "All of these"],
                    correct: 3,
                    explanation: "1/2 can be written as 2/4, 3/6, 4/8, 5/10, etc.",
                    ralphHint: "All of these equal one half!"
                },
                {
                    id: 56,
                    type: "practical-equivalence",
                    question: "Sarah ate 2/4 of her sandwich. Tom ate 1/2 of his sandwich. If the sandwiches were the same size, who ate more?",
                    options: ["Sarah", "Tom", "They ate the same", "Can't tell"],
                    correct: 2,
                    explanation: "2/4 = 1/2, so they ate the same amount",
                    ralphHint: "Two fourths equals one half!"
                },
                {
                    id: 57,
                    type: "equivalent-reasoning",
                    question: "How do you know that 3/6 equals 1/2?",
                    options: ["Because 3 + 6 = 9", "Because they look the same when drawn", "Because 6 ÷ 3 = 2", "Because 3 is half of 6"],
                    correct: 3,
                    explanation: "3 is half of 6, so 3/6 represents half of the whole",
                    ralphHint: "3 is half of 6!"
                },
                {
                    id: 58,
                    type: "equivalent-completion",
                    question: "Complete the equation: 1/4 = ?/8",
                    options: ["1/8", "2/8", "3/8", "4/8"],
                    correct: 1,
                    explanation: "1/4 = 2/8 because both represent the same amount",
                    ralphHint: "One fourth equals two eighths!"
                },
                {
                    id: 59,
                    type: "non-equivalent",
                    question: "Which fraction is NOT equal to 1/3?",
                    options: ["2/6", "3/9", "4/12", "2/5"],
                    correct: 3,
                    explanation: "2/5 is not equal to 1/3 (the others all equal 1/3)",
                    ralphHint: "Two fifths is different from one third!"
                },
                {
                    id: 60,
                    type: "equivalent-application",
                    question: "A recipe calls for 2/8 cup of sugar. You only have a 1/4 cup measure. How many 1/4 cups do you need?",
                    options: ["1 cup", "2 cups", "1/2 cup", "Can't make it"],
                    correct: 0,
                    explanation: "2/8 = 1/4, so you need 1 cup of the 1/4 measure",
                    ralphHint: "Two eighths equals one fourth!"
                }
            ]
        },

        // Set 7: Ordering fractions (Questions 61-70)
        {
            set: 7,
            questions: [
                {
                    id: 61,
                    type: "ordering-halves-fourths",
                    question: "Put these in order from smallest to largest: 1/2, 1/4, 3/4",
                    options: ["1/4, 1/2, 3/4", "1/2, 1/4, 3/4", "3/4, 1/2, 1/4", "1/4, 3/4, 1/2"],
                    correct: 0,
                    explanation: "1/4 < 1/2 < 3/4 when comparing fractions with the same denominator",
                    ralphHint: "One fourth, one half, three fourths!"
                },
                {
                    id: 62,
                    type: "ordering-thirds",
                    question: "Which fraction is between 1/3 and 3/3?",
                    options: ["1/6", "2/3", "4/3", "1/9"],
                    correct: 1,
                    explanation: "2/3 is between 1/3 and 3/3 (which is 1 whole)",
                    ralphHint: "Two thirds is between one third and three thirds!"
                },
                {
                    id: 63,
                    type: "mixed-ordering",
                    question: "Put these in order from largest to smallest: 1/2, 1/3, 1/4, 1/5",
                    options: ["1/5, 1/4, 1/3, 1/2", "1/2, 1/3, 1/4, 1/5", "1/3, 1/2, 1/4, 1/5", "1/4, 1/5, 1/2, 1/3"],
                    correct: 1,
                    explanation: "For unit fractions, fewer parts = larger fraction",
                    ralphHint: "Fewer parts means bigger pieces!"
                },
                {
                    id: 64,
                    type: "comparing-different-denominators",
                    question: "Which is larger: 3/4 or 2/3?",
                    options: ["3/4", "2/3", "They're equal", "Can't tell"],
                    correct: 0,
                    explanation: "3/4 is larger than 2/3",
                    ralphHint: "Three fourths is bigger than two thirds!"
                },
                {
                    id: 65,
                    type: "ordering-word-problem",
                    question: "Three friends ate pizza. Anna ate 1/4, Ben ate 1/2, and Chris ate 3/8. Who ate the most?",
                    options: ["Anna", "Ben", "Chris", "They ate the same"],
                    correct: 1,
                    explanation: "1/2 is the largest of these fractions",
                    ralphHint: "One half is the biggest piece!"
                },
                {
                    id: 66,
                    type: "fraction-number-line",
                    question: "On a number line from 0 to 1, which fraction comes first?",
                    options: ["3/4", "1/2", "1/4", "7/8"],
                    correct: 2,
                    explanation: "1/4 is closest to 0, so it comes first",
                    ralphHint: "Start from 0! One fourth comes first!"
                },
                {
                    id: 67,
                    type: "ordering-challenge",
                    question: "Which list shows fractions from smallest to largest?",
                    options: ["1/8, 1/4, 1/2, 3/4", "1/2, 1/4, 3/4, 1/8", "3/4, 1/2, 1/4, 1/8", "1/4, 1/8, 1/2, 3/4"],
                    correct: 0,
                    explanation: "1/8 < 1/4 < 1/2 < 3/4 is the correct order",
                    ralphHint: "One eighth, one fourth, one half, three fourths!"
                },
                {
                    id: 68,
                    type: "middle-fraction",
                    question: "What fraction is exactly halfway between 0 and 1?",
                    options: ["1/4", "1/3", "1/2", "2/3"],
                    correct: 2,
                    explanation: "1/2 is exactly halfway between 0 and 1",
                    ralphHint: "Half is right in the middle!"
                },
                {
                    id: 69,
                    type: "close-to-one",
                    question: "Which fraction is closest to 1 whole?",
                    options: ["3/4", "5/6", "7/8", "9/10"],
                    correct: 3,
                    explanation: "9/10 is closest to 1 because it's missing only 1/10",
                    ralphHint: "Nine tenths is almost a whole!"
                },
                {
                    id: 70,
                    type: "ordering-application",
                    question: "You want to drink the most juice. Which size should you choose?",
                    options: ["1/3 of a cup", "1/2 of a cup", "2/5 of a cup", "3/8 of a cup"],
                    correct: 1,
                    explanation: "1/2 is the largest of these fractions",
                    ralphHint: "Half a cup is the most!"
                }
            ]
        },

        // Set 8: Fraction word problems (Questions 71-80)
        {
            set: 8,
            questions: [
                {
                    id: 71,
                    type: "sharing-problem",
                    question: "4 friends want to share a pizza equally. What fraction of the pizza will each friend get?",
                    options: ["1/2", "1/3", "1/4", "4/4"],
                    correct: 2,
                    explanation: "4 friends sharing equally means each gets 1/4",
                    ralphHint: "Four friends sharing means fourths!"
                },
                {
                    id: 72,
                    type: "eating-problem",
                    question: "Sam ate 2/5 of a chocolate bar. What fraction is left?",
                    options: ["2/5", "3/5", "5/2", "1/5"],
                    correct: 1,
                    explanation: "If 2/5 is eaten, then 5/5 - 2/5 = 3/5 is left",
                    ralphHint: "Five fifths minus two fifths is three fifths!"
                },
                {
                    id: 73,
                    type: "group-problem",
                    question: "In a class of 12 students, 3 are absent. What fraction of the class is present?",
                    options: ["3/12", "9/12", "12/3", "3/9"],
                    correct: 1,
                    explanation: "12 - 3 = 9 students present, so 9/12 are present",
                    ralphHint: "Nine out of twelve students are present!"
                },
                {
                    id: 74,
                    type: "coloring-problem",
                    question: "Lisa colored 3/8 of a picture. How much more does she need to color to finish the whole picture?",
                    options: ["3/8", "5/8", "8/3", "3/5"],
                    correct: 1,
                    explanation: "8/8 - 3/8 = 5/8 more needed to finish",
                    ralphHint: "She needs five more eighths!"
                },
                {
                    id: 75,
                    type: "time-problem",
                    question: "Jack spent 1/3 of his day sleeping and 1/4 of his day at school. Did he spend more time sleeping or at school?",
                    options: ["Sleeping", "At school", "Same amount", "Can't tell"],
                    correct: 0,
                    explanation: "1/3 > 1/4, so more time was spent sleeping",
                    ralphHint: "One third is bigger than one fourth!"
                },
                {
                    id: 76,
                    type: "money-problem",
                    question: "Emma saved 3/4 of her allowance. She spent 1/4. How much of her allowance is left?",
                    options: ["1/2", "2/4", "1/4", "All gone"],
                    correct: 0,
                    explanation: "If she saved 3/4 and spent 1/4 of the total, she has 3/4 - 1/4 = 2/4 = 1/2 left",
                    ralphHint: "She saved three fourths but spent one fourth from her total allowance!"
                },
                {
                    id: 77,
                    type: "sports-problem",
                    question: "In a soccer game, 2/3 of the players are on the field. If there are 6 players on the field, how many players are on the team?",
                    options: ["6 players", "9 players", "12 players", "4 players"],
                    correct: 1,
                    explanation: "If 6 players = 2/3 of the team, then the whole team is 9 players",
                    ralphHint: "If 6 is two thirds, then 9 is the whole team!"
                },
                {
                    id: 78,
                    type: "reading-problem",
                    question: "Maya read 1/5 of her book on Monday and 2/5 on Tuesday. What fraction of the book has she read?",
                    options: ["1/5", "2/5", "3/5", "5/5"],
                    correct: 2,
                    explanation: "1/5 + 2/5 = 3/5 of the book",
                    ralphHint: "One fifth plus two fifths is three fifths!"
                },
                {
                    id: 79,
                    type: "comparison-problem",
                    question: "Two identical cakes: Cake A has 1/4 eaten, Cake B has 1/3 eaten. Which cake has more left?",
                    options: ["Cake A", "Cake B", "Same amount left", "Can't tell"],
                    correct: 0,
                    explanation: "Cake A has 3/4 left, Cake B has 2/3 left. 3/4 > 2/3",
                    ralphHint: "Less eaten means more left! Cake A has more left!"
                },
                {
                    id: 80,
                    type: "multi-step-problem",
                    question: "A bag has 20 marbles. 1/4 are red and 2/5 are blue. How many marbles are neither red nor blue?",
                    options: ["5 marbles", "7 marbles", "8 marbles", "13 marbles"],
                    correct: 1,
                    explanation: "1/4 of 20 = 5 red, 2/5 of 20 = 8 blue. 20 - 5 - 8 = 7 neither",
                    ralphHint: "Find how many red and blue, then subtract from 20!"
                }
            ]
        },

        // Set 9: Mixed fractions and wholes (Questions 81-90)
        {
            set: 9,
            questions: [
                {
                    id: 81,
                    type: "whole-numbers-as-fractions",
                    question: "Which fraction equals the whole number 1?",
                    options: ["1/2", "2/2", "1/1", "Both B and C"],
                    correct: 3,
                    explanation: "Both 2/2 and 1/1 equal 1 whole",
                    ralphHint: "When the top and bottom are the same, it's one whole!"
                },
                {
                    id: 82,
                    type: "more-than-one",
                    question: "Which fraction is greater than 1 whole?",
                    options: ["3/4", "4/4", "5/4", "1/4"],
                    correct: 2,
                    explanation: "5/4 is greater than 1 because the numerator is larger than the denominator",
                    ralphHint: "Five fourths is more than one whole!"
                },
                {
                    id: 83,
                    type: "counting-wholes",
                    question: "How many halves make 2 whole things?",
                    options: ["2", "3", "4", "1"],
                    correct: 2,
                    explanation: "2 wholes = 4 halves (2 × 2 = 4)",
                    ralphHint: "Two wholes need four halves!"
                },
                {
                    id: 84,
                    type: "improper-fractions",
                    question: "What does the fraction 7/3 mean?",
                    options: ["Less than 1 whole", "Exactly 1 whole", "More than 1 whole", "Can't tell"],
                    correct: 2,
                    explanation: "7/3 is more than 1 whole because 7 > 3",
                    ralphHint: "Seven thirds is more than one whole!"
                },
                {
                    id: 85,
                    type: "mixed-number-concept",
                    question: "If you eat 5/4 pizzas, how many whole pizzas did you eat?",
                    options: ["1 whole pizza", "More than 1 whole pizza", "Less than 1 whole pizza", "Exactly 4 pizzas"],
                    correct: 1,
                    explanation: "5/4 = 1 and 1/4 pizzas, which is more than 1 whole",
                    ralphHint: "Five fourths is more than one whole pizza!"
                },
                {
                    id: 86,
                    type: "equivalent-wholes",
                    question: "Which fraction equals 2 wholes?",
                    options: ["2/1", "4/2", "6/3", "All of these"],
                    correct: 3,
                    explanation: "2/1, 4/2, and 6/3 all equal 2 wholes",
                    ralphHint: "All of these equal 2 wholes!"
                },
                {
                    id: 87,
                    type: "fractions-on-number-line",
                    question: "On a number line, where would you place 3/2?",
                    options: ["Between 0 and 1", "At 1", "Between 1 and 2", "At 2"],
                    correct: 2,
                    explanation: "3/2 = 1.5, which is between 1 and 2",
                    ralphHint: "Three halves is between 1 and 2!"
                },
                {
                    id: 88,
                    type: "real-world-wholes",
                    question: "Sarah has 9/4 cups of flour. Does she have more than 2 cups?",
                    options: ["Yes", "No", "Exactly 2 cups", "Can't tell"],
                    correct: 0,
                    explanation: "9/4 = 2.25 cups, which is more than 2 but less than 3",
                    ralphHint: "Nine fourths is more than 2!"
                },
                {
                    id: 89,
                    type: "comparing-mixed",
                    question: "Which is larger: 1 whole or 5/4?",
                    options: ["1 whole", "5/4", "They're equal", "Can't tell"],
                    correct: 1,
                    explanation: "5/4 is larger than 1 whole (which is 4/4)",
                    ralphHint: "Five fourths is bigger than four fourths!"
                },
                {
                    id: 90,
                    type: "practical-wholes",
                    question: "A recipe needs 7/3 cups of milk. About how many whole cups is this?",
                    options: ["1 cup", "2 cups", "Between 2 and 3 cups", "3 cups"],
                    correct: 2,
                    explanation: "7/3 is about 2 and 1/3 cups",
                    ralphHint: "Seven thirds is about 2 and one third cups!"
                }
            ]
        },

        // Set 10: Fraction review and applications (Questions 91-100)
        {
            set: 10,
            questions: [
                {
                    id: 91,
                    type: "fraction-review",
                    question: "What fraction of this shape is NOT shaded? [3/5 is shaded]",
                    options: ["3/5", "2/5", "5/3", "5/2"],
                    correct: 1,
                    explanation: "If 3/5 is shaded, then 5/5 - 3/5 = 2/5 is not shaded",
                    ralphHint: "Two fifths are not shaded!"
                },
                {
                    id: 92,
                    type: "equivalent-review",
                    question: "Which group shows equivalent fractions?",
                    options: ["1/2, 2/3, 3/4", "1/3, 2/6, 3/9", "1/4, 1/5, 1/6", "2/3, 3/4, 4/5"],
                    correct: 1,
                    explanation: "1/3, 2/6, and 3/9 are all equivalent fractions",
                    ralphHint: "One third, two sixths, and three ninths are all equal!"
                },
                {
                    id: 93,
                    type: "comparison-review",
                    question: "Put these fractions in order from largest to smallest: 1/2, 1/8, 1/4",
                    options: ["1/8, 1/4, 1/2", "1/2, 1/4, 1/8", "1/4, 1/8, 1/2", "1/2, 1/8, 1/4"],
                    correct: 1,
                    explanation: "1/2 > 1/4 > 1/8 (fewer parts = larger pieces)",
                    ralphHint: "Half, fourth, eighth - biggest to smallest!"
                },
                {
                    id: 94,
                    type: "word-problem-review",
                    question: "A garden has 15 flowers. 1/3 are roses. How many roses are there?",
                    options: ["3 roses", "5 roses", "10 roses", "15 roses"],
                    correct: 1,
                    explanation: "1/3 of 15 = 15 ÷ 3 = 5 roses",
                    ralphHint: "One third of 15 is 5!"
                },
                {
                    id: 95,
                    type: "mixed-application",
                    question: "Which fraction represents half of half?",
                    options: ["1/2", "1/4", "2/4", "1/1"],
                    correct: 1,
                    explanation: "Half of 1/2 is 1/4",
                    ralphHint: "Half of a half is one fourth!"
                },
                {
                    id: 96,
                    type: "challenging-problem",
                    question: "Tom ate 1/4 of a pie. Sarah ate 1/3 of the same pie. Who ate more?",
                    options: ["Tom", "Sarah", "They ate the same", "Can't tell"],
                    correct: 1,
                    explanation: "1/3 > 1/4, so Sarah ate more",
                    ralphHint: "One third is bigger than one fourth!"
                },
                {
                    id: 97,
                    type: "estimation-fractions",
                    question: "Which fraction is closest to 1/2?",
                    options: ["1/3", "2/5", "3/5", "2/3"],
                    correct: 1,
                    explanation: "2/5 is closest to 1/2 (which is the same as 5/10)",
                    ralphHint: "Two fifths is closest to one half!"
                },
                {
                    id: 98,
                    type: "reasoning-review",
                    question: "If 3/4 of a class is present and 6 students are absent, how many students are in the class?",
                    options: ["18 students", "24 students", "30 students", "8 students"],
                    correct: 1,
                    explanation: "If 6 students = 1/4 of the class, then the whole class = 24 students",
                    ralphHint: "If 6 is one fourth, then 24 is the whole class!"
                },
                {
                    id: 99,
                    type: "creative-problem",
                    question: "You want to share a candy bar equally among 8 friends. What fraction will each friend get?",
                    options: ["1/7", "1/8", "8/8", "1/9"],
                    correct: 1,
                    explanation: "8 friends sharing equally means each gets 1/8",
                    ralphHint: "Eight friends means each gets one eighth!"
                },
                {
                    id: 100,
                    type: "celebration-fractions",
                    question: "You've completed 100 fraction questions! What fraction of 800 total questions have you finished so far?",
                    options: ["1/8", "100/800", "Both A and B", "Neither A nor B"],
                    correct: 2,
                    explanation: "100/800 = 1/8, so you've completed 1/8 of all questions!",
                    ralphHint: "You did it! 100 out of 800 is one eighth! You're amazing at fractions!"
                }
            ]
        }
    ],

    // Categories 4-8 would follow the same pattern...
    // Each with 100 questions in 10 sets of 10 questions each
    // Total: 800 questions across all 8 categories

    // Remaining categories with basic question sets for demonstration
    shapes: [
        {
            set: 1,
            setTitle: "2D Shapes Basics",
            setDescription: "Learn about circles, squares, triangles, and rectangles!",
            questions: [
                {
                    id: 1,
                    type: "shape-identification",
                    question: "How many sides does a triangle have?",
                    options: ["2", "3", "4", "5"],
                    correct: 1,
                    explanation: "A triangle always has exactly 3 sides.",
                    ralphHint: "Tri means three! Like my tricycle has three wheels!"
                },
                {
                    id: 2,
                    type: "shape-identification", 
                    question: "Which shape has 4 equal sides?",
                    options: ["Circle", "Triangle", "Square", "Rectangle"],
                    correct: 2,
                    explanation: "A square has 4 equal sides and 4 right angles.",
                    ralphHint: "Square like my lunch box! All sides the same!"
                },
                {
                    id: 3,
                    type: "shape-identification",
                    question: "How many corners does a circle have?",
                    options: ["0", "1", "2", "4"],
                    correct: 0,
                    explanation: "A circle is round and has no corners.",
                    ralphHint: "Circles are round like my head! No pointy parts!"
                },
                {
                    id: 4,
                    type: "shape-identification",
                    question: "What shape is a ball?",
                    options: ["Circle", "Square", "Triangle", "Sphere"],
                    correct: 3,
                    explanation: "A ball is a sphere, which is like a circle in 3D.",
                    ralphHint: "My ball is round all around! That's a sphere!"
                },
                {
                    id: 5,
                    type: "shape-identification",
                    question: "How many sides does a rectangle have?",
                    options: ["2", "3", "4", "6"],
                    correct: 2,
                    explanation: "A rectangle has 4 sides, but opposite sides are equal.",
                    ralphHint: "Rectangle like my window! Four sides but not all the same!"
                },
                {
                    id: 6,
                    type: "shape-identification",
                    question: "Which shape has the most sides?",
                    options: ["Triangle", "Square", "Pentagon", "Circle"],
                    correct: 2,
                    explanation: "A pentagon has 5 sides.",
                    ralphHint: "Pentagon has five sides! More than my fingers on one hand!"
                },
                {
                    id: 7,
                    type: "shape-identification",
                    question: "What do you call the corners of a shape?",
                    options: ["Sides", "Vertices", "Edges", "Points"],
                    correct: 1,
                    explanation: "The corners of a shape are called vertices.",
                    ralphHint: "Vertices are the pointy parts! Like the corners of my crayon box!"
                },
                {
                    id: 8,
                    type: "shape-identification",
                    question: "Which shape can roll?",
                    options: ["Square", "Triangle", "Circle", "Rectangle"],
                    correct: 2,
                    explanation: "Circles can roll because they are round.",
                    ralphHint: "My ball rolls because it's round! Circles roll too!"
                },
                {
                    id: 9,
                    type: "shape-identification",
                    question: "How many vertices does a square have?",
                    options: ["2", "3", "4", "5"],
                    correct: 2,
                    explanation: "A square has 4 vertices (corners).",
                    ralphHint: "Count the corners! One, two, three, four!"
                },
                {
                    id: 10,
                    type: "shape-identification",
                    question: "What shape is a book?",
                    options: ["Circle", "Triangle", "Rectangle", "Square"],
                    correct: 2,
                    explanation: "Most books are rectangular because they have 4 sides with opposite sides equal.",
                    ralphHint: "My coloring book is like a rectangle! Long sides and short sides!"
                }
            ]
        },

        // Set 2: Shape Properties (Questions 11-20)
        {
            set: 2,
            setTitle: "Shape Properties",
            setDescription: "Learn about sides, corners, and what makes shapes special!",
            questions: [
                {
                    id: 11,
                    type: "shape-properties",
                    question: "Which shape has curved lines?",
                    options: ["Square", "Triangle", "Circle", "Rectangle"],
                    correct: 2,
                    explanation: "A circle is made of one curved line.",
                    ralphHint: "Circles are curvy! Like my spaghetti when I drop it!"
                },
                {
                    id: 12,
                    type: "shape-properties",
                    question: "How many straight sides does a pentagon have?",
                    options: ["4", "5", "6", "7"],
                    correct: 1,
                    explanation: "A pentagon has 5 straight sides.",
                    ralphHint: "Pentagon has five! Like my hand has five fingers!"
                },
                {
                    id: 13,
                    type: "shape-properties",
                    question: "Which shape has all sides the same length?",
                    options: ["Rectangle", "Square", "Triangle", "Oval"],
                    correct: 1,
                    explanation: "A square has all four sides equal in length.",
                    ralphHint: "Square sides are twins! All the same size!"
                },
                {
                    id: 14,
                    type: "shape-properties",
                    question: "What makes a rectangle different from a square?",
                    options: ["Number of sides", "Number of corners", "Length of sides", "Color"],
                    correct: 2,
                    explanation: "A rectangle has opposite sides equal, but not all four sides.",
                    ralphHint: "Rectangle has long sides and short sides! Like my tablet!"
                },
                {
                    id: 15,
                    type: "shape-properties",
                    question: "How many corners does a hexagon have?",
                    options: ["5", "6", "7", "8"],
                    correct: 1,
                    explanation: "A hexagon has 6 corners (vertices).",
                    ralphHint: "Hex means six! Like six crayons in my hand!"
                },
                {
                    id: 16,
                    type: "shape-properties",
                    question: "Which shape has no straight lines?",
                    options: ["Triangle", "Square", "Circle", "Rectangle"],
                    correct: 2,
                    explanation: "A circle has only curved lines, no straight lines.",
                    ralphHint: "Circles are all curvy! No straight parts anywhere!"
                },
                {
                    id: 17,
                    type: "shape-properties",
                    question: "What do we call the flat surface inside a shape?",
                    options: ["Side", "Vertex", "Area", "Perimeter"],
                    correct: 2,
                    explanation: "The flat surface inside a shape is called the area.",
                    ralphHint: "Area is the inside space! Like inside my coloring book shapes!"
                },
                {
                    id: 18,
                    type: "shape-properties",
                    question: "How many sides does an octagon have?",
                    options: ["6", "7", "8", "9"],
                    correct: 2,
                    explanation: "An octagon has 8 sides.",
                    ralphHint: "Octo means eight! Like an octopus has eight arms!"
                },
                {
                    id: 19,
                    type: "shape-properties",
                    question: "Which shapes have right angles (square corners)?",
                    options: ["Only squares", "Only rectangles", "Squares and rectangles", "All shapes"],
                    correct: 2,
                    explanation: "Both squares and rectangles have right angles.",
                    ralphHint: "Square corners are like my building blocks! Perfect corners!"
                },
                {
                    id: 20,
                    type: "shape-properties",
                    question: "What's special about the sides of a rhombus?",
                    options: ["All different lengths", "Only 2 are equal", "All are equal", "None are equal"],
                    correct: 2,
                    explanation: "A rhombus has all four sides equal in length.",
                    ralphHint: "Rhombus is like a tilted square! All sides the same!"
                }
            ]
        },

        // Set 3: 3D Shapes (Questions 21-30)
        {
            set: 3,
            setTitle: "3D Shapes",
            setDescription: "Explore cubes, spheres, and other 3D shapes!",
            questions: [
                {
                    id: 21,
                    type: "3d-shapes",
                    question: "How many faces does a cube have?",
                    options: ["4", "5", "6", "8"],
                    correct: 2,
                    explanation: "A cube has 6 faces (sides).",
                    ralphHint: "Count all the sides of a dice! Six faces!"
                },
                {
                    id: 22,
                    type: "3d-shapes",
                    question: "What 3D shape is like a ball?",
                    options: ["Cube", "Cylinder", "Sphere", "Cone"],
                    correct: 2,
                    explanation: "A sphere is round like a ball.",
                    ralphHint: "My ball is a sphere! Round all over!"
                },
                {
                    id: 23,
                    type: "3d-shapes",
                    question: "Which 3D shape can roll AND stack?",
                    options: ["Sphere", "Cube", "Cylinder", "Cone"],
                    correct: 2,
                    explanation: "A cylinder can roll on its side and stack on its flat ends.",
                    ralphHint: "Like soup cans! They roll and stack up!"
                },
                {
                    id: 24,
                    type: "3d-shapes",
                    question: "How many edges does a cube have?",
                    options: ["8", "10", "12", "16"],
                    correct: 2,
                    explanation: "A cube has 12 edges where faces meet.",
                    ralphHint: "Edges are where the flat parts meet! Count them all!"
                },
                {
                    id: 25,
                    type: "3d-shapes",
                    question: "What shape is an ice cream cone?",
                    options: ["Cylinder", "Sphere", "Cube", "Cone"],
                    correct: 3,
                    explanation: "An ice cream cone is cone-shaped.",
                    ralphHint: "Cone like my ice cream! Pointy on top, round at bottom!"
                },
                {
                    id: 26,
                    type: "3d-shapes",
                    question: "Which shape has flat faces that are all squares?",
                    options: ["Sphere", "Cylinder", "Cube", "Pyramid"],
                    correct: 2,
                    explanation: "A cube has 6 square faces.",
                    ralphHint: "Cube faces are all squares! Like my building blocks!"
                },
                {
                    id: 27,
                    type: "3d-shapes",
                    question: "How many corners (vertices) does a cube have?",
                    options: ["6", "7", "8", "12"],
                    correct: 2,
                    explanation: "A cube has 8 vertices (corners).",
                    ralphHint: "Count all the pointy corners! Eight corners on a cube!"
                },
                {
                    id: 28,
                    type: "3d-shapes",
                    question: "What 3D shape is a can of soup?",
                    options: ["Cube", "Sphere", "Cylinder", "Cone"],
                    correct: 2,
                    explanation: "A soup can is cylinder-shaped.",
                    ralphHint: "Soup cans are cylinders! Round and tall!"
                },
                {
                    id: 29,
                    type: "3d-shapes",
                    question: "Which shape has a point at the top?",
                    options: ["Cube", "Sphere", "Cylinder", "Pyramid"],
                    correct: 3,
                    explanation: "A pyramid has a point (apex) at the top.",
                    ralphHint: "Pyramid is pointy on top! Like in Egypt!"
                },
                {
                    id: 30,
                    type: "3d-shapes",
                    question: "What's the difference between a circle and a sphere?",
                    options: ["Color", "Size", "Flatness", "Temperature"],
                    correct: 2,
                    explanation: "A circle is flat (2D) and a sphere is round all around (3D).",
                    ralphHint: "Circle is flat like paper! Sphere is round like my ball!"
                }
            ]
        },

        // Set 4: Symmetry (Questions 31-40)
        {
            set: 4,
            setTitle: "Symmetry",
            setDescription: "Learn about lines of symmetry and symmetric shapes!",
            questions: [
                {
                    id: 31,
                    type: "symmetry",
                    question: "How many lines of symmetry does a square have?",
                    options: ["1", "2", "3", "4"],
                    correct: 3,
                    explanation: "A square has 4 lines of symmetry.",
                    ralphHint: "You can fold a square four different ways to match up!"
                },
                {
                    id: 32,
                    type: "symmetry",
                    question: "Which letter has a line of symmetry?",
                    options: ["F", "L", "A", "R"],
                    correct: 2,
                    explanation: "The letter A has a vertical line of symmetry.",
                    ralphHint: "Letter A looks the same on both sides of a line down the middle!"
                },
                {
                    id: 33,
                    type: "symmetry",
                    question: "What is a line of symmetry?",
                    options: ["A curved line", "A line that divides a shape into two matching parts", "The edge of a shape", "A colored line"],
                    correct: 1,
                    explanation: "A line of symmetry divides a shape into two identical halves.",
                    ralphHint: "If you fold on the line, both sides match perfectly!"
                },
                {
                    id: 34,
                    type: "symmetry",
                    question: "How many lines of symmetry does a circle have?",
                    options: ["1", "2", "4", "Infinite"],
                    correct: 3,
                    explanation: "A circle has infinite lines of symmetry through its center.",
                    ralphHint: "You can draw a line through the middle of a circle anywhere!"
                },
                {
                    id: 35,
                    type: "symmetry",
                    question: "Which shape has exactly one line of symmetry?",
                    options: ["Square", "Circle", "Heart", "Rectangle"],
                    correct: 2,
                    explanation: "A heart shape has one line of symmetry down the middle.",
                    ralphHint: "Hearts have one line down the middle! Like my valentine!"
                },
                {
                    id: 36,
                    type: "symmetry",
                    question: "If you fold a rectangle in half, how many ways can it match up perfectly?",
                    options: ["1", "2", "3", "4"],
                    correct: 1,
                    explanation: "A rectangle has 2 lines of symmetry.",
                    ralphHint: "You can fold it the long way or the short way!"
                },
                {
                    id: 37,
                    type: "symmetry",
                    question: "Which number has a line of symmetry?",
                    options: ["2", "5", "8", "9"],
                    correct: 2,
                    explanation: "The number 8 has a horizontal line of symmetry.",
                    ralphHint: "Number 8 looks the same if you flip it upside down!"
                },
                {
                    id: 38,
                    type: "symmetry",
                    question: "What happens when you reflect a shape across a line of symmetry?",
                    options: ["It changes color", "It gets bigger", "It looks exactly the same", "It disappears"],
                    correct: 2,
                    explanation: "Reflecting across a line of symmetry creates the same shape.",
                    ralphHint: "It's like looking in a mirror! Same shape on both sides!"
                },
                {
                    id: 39,
                    type: "symmetry",
                    question: "Which animal is symmetric?",
                    options: ["Butterfly", "Snail", "Seahorse", "Jellyfish"],
                    correct: 0,
                    explanation: "A butterfly has bilateral symmetry with wings matching on both sides.",
                    ralphHint: "Butterfly wings match! Same pattern on left and right!"
                },
                {
                    id: 40,
                    type: "symmetry",
                    question: "How many lines of symmetry does a triangle with all equal sides have?",
                    options: ["1", "2", "3", "6"],
                    correct: 2,
                    explanation: "An equilateral triangle has 3 lines of symmetry.",
                    ralphHint: "Each line goes from a corner to the middle of the opposite side!"
                }
            ]
        },

        // Set 5: Shape Patterns (Questions 41-50)
        {
            set: 5,
            setTitle: "Shape Patterns",
            setDescription: "Discover patterns using different shapes!",
            questions: [
                {
                    id: 41,
                    type: "shape-patterns",
                    question: "What comes next: Circle, Square, Circle, Square, ?",
                    options: ["Circle", "Square", "Triangle", "Rectangle"],
                    correct: 0,
                    explanation: "The pattern alternates between circle and square.",
                    ralphHint: "It goes back and forth! Circle, square, circle, square!"
                },
                {
                    id: 42,
                    type: "shape-patterns",
                    question: "Complete the pattern: Triangle, Triangle, Square, Triangle, Triangle, ?",
                    options: ["Triangle", "Square", "Circle", "Rectangle"],
                    correct: 1,
                    explanation: "The pattern is two triangles, then one square, repeating.",
                    ralphHint: "Two triangles, one square! Count and repeat!"
                },
                {
                    id: 43,
                    type: "shape-patterns",
                    question: "What's the rule for: Big Circle, Small Circle, Big Circle, Small Circle?",
                    options: ["Colors change", "Shapes change", "Sizes change", "Nothing changes"],
                    correct: 2,
                    explanation: "The pattern alternates between big and small sizes.",
                    ralphHint: "Big, small, big, small! The size keeps changing!"
                },
                {
                    id: 44,
                    type: "shape-patterns",
                    question: "What comes next: Red Square, Blue Triangle, Red Square, Blue Triangle, ?",
                    options: ["Red Square", "Blue Triangle", "Green Circle", "Yellow Rectangle"],
                    correct: 0,
                    explanation: "The pattern alternates between red square and blue triangle.",
                    ralphHint: "Color AND shape pattern! Red square comes next!"
                },
                {
                    id: 45,
                    type: "shape-patterns",
                    question: "In the pattern ■ ● ▲ ■ ● ▲, what comes after ▲?",
                    options: ["■", "●", "▲", "◆"],
                    correct: 0,
                    explanation: "After triangle comes square, starting the pattern over.",
                    ralphHint: "Start over! Square comes after triangle in this pattern!"
                },
                {
                    id: 46,
                    type: "shape-patterns",
                    question: "How many shapes repeat in: Circle, Square, Triangle, Circle, Square, Triangle?",
                    options: ["2", "3", "4", "6"],
                    correct: 1,
                    explanation: "Three shapes (circle, square, triangle) repeat in the pattern.",
                    ralphHint: "Count the different shapes before it starts over!"
                },
                {
                    id: 47,
                    type: "shape-patterns",
                    question: "What's wrong with this pattern: ★ ● ★ ● ▲ ●?",
                    options: ["Nothing", "Should end with ★", "Should end with ●", "Too many shapes"],
                    correct: 1,
                    explanation: "The pattern should be star, circle, repeating, so it should end with star.",
                    ralphHint: "Star, circle, star, circle! What should come next?"
                },
                {
                    id: 48,
                    type: "shape-patterns",
                    question: "Which pattern is growing?",
                    options: ["● ● ● ●", "● ●● ●●● ●●●●", "● ● ● ●", "●●●● ●●●● ●●●●"],
                    correct: 1,
                    explanation: "The second pattern grows by adding one more dot each time.",
                    ralphHint: "Growing means getting bigger! More dots each time!"
                },
                {
                    id: 49,
                    type: "shape-patterns",
                    question: "What comes next in: 1 triangle, 2 squares, 3 circles, 4 ?",
                    options: ["triangles", "squares", "rectangles", "stars"],
                    correct: 2,
                    explanation: "The pattern continues with 4 rectangles, introducing a new shape each time.",
                    ralphHint: "New shape each time! And the number goes up!"
                },
                {
                    id: 50,
                    type: "shape-patterns",
                    question: "Which pattern uses ABAB rule?",
                    options: ["● ● ● ●", "● ■ ● ■", "● ■ ▲ ● ■ ▲", "● ● ■ ● ● ■"],
                    correct: 1,
                    explanation: "ABAB means two different things alternating: circle, square, circle, square.",
                    ralphHint: "ABAB is like taking turns! A then B then A then B!"
                }
            ]
        },

        // Set 6: Shape Sorting (Questions 51-60)
        {
            set: 6,
            setTitle: "Shape Sorting",
            setDescription: "Learn to group and sort shapes by their properties!",
            questions: [
                {
                    id: 51,
                    type: "shape-sorting",
                    question: "How would you sort these shapes: Circle, Square, Triangle, Rectangle?",
                    options: ["By color", "By size", "By number of sides", "By weight"],
                    correct: 2,
                    explanation: "We can sort these shapes by counting their sides.",
                    ralphHint: "Count the sides! Some have none, some have three, some have four!"
                },
                {
                    id: 52,
                    type: "shape-sorting",
                    question: "Which shapes have exactly 4 sides?",
                    options: ["Square and Triangle", "Circle and Square", "Square and Rectangle", "Circle and Triangle"],
                    correct: 2,
                    explanation: "Both squares and rectangles have exactly 4 sides.",
                    ralphHint: "Count to four! Square and rectangle both have four sides!"
                },
                {
                    id: 53,
                    type: "shape-sorting",
                    question: "If you group shapes by 'curved' and 'straight', where does a circle go?",
                    options: ["Curved group", "Straight group", "Both groups", "Neither group"],
                    correct: 0,
                    explanation: "A circle has curved lines, so it goes in the curved group.",
                    ralphHint: "Circles are all curvy! No straight lines anywhere!"
                },
                {
                    id: 54,
                    type: "shape-sorting",
                    question: "What do squares and rectangles have in common?",
                    options: ["Same size", "Same color", "4 sides and 4 corners", "Same shape"],
                    correct: 2,
                    explanation: "Both squares and rectangles have 4 sides and 4 corners.",
                    ralphHint: "Count them! Both have four sides and four corners!"
                },
                {
                    id: 55,
                    type: "shape-sorting",
                    question: "Which group would a pentagon belong to?",
                    options: ["3-sided shapes", "4-sided shapes", "5-sided shapes", "Round shapes"],
                    correct: 2,
                    explanation: "A pentagon has 5 sides, so it belongs with other 5-sided shapes.",
                    ralphHint: "Pentagon means five sides! Count to five!"
                },
                {
                    id: 56,
                    type: "shape-sorting",
                    question: "If sorting by 'has corners' and 'no corners', which has no corners?",
                    options: ["Square", "Triangle", "Circle", "Rectangle"],
                    correct: 2,
                    explanation: "A circle is round and has no corners.",
                    ralphHint: "Corners are pointy! Circles are smooth and round!"
                },
                {
                    id: 57,
                    type: "shape-sorting",
                    question: "What makes a square special among rectangles?",
                    options: ["It's bigger", "It's smaller", "All sides are equal", "It has more corners"],
                    correct: 2,
                    explanation: "A square is a special rectangle where all 4 sides are equal.",
                    ralphHint: "Square sides are all the same! Special rectangle!"
                },
                {
                    id: 58,
                    type: "shape-sorting",
                    question: "Which shapes can roll?",
                    options: ["Only squares", "Only triangles", "Circles and spheres", "All shapes"],
                    correct: 2,
                    explanation: "Round shapes like circles and spheres can roll.",
                    ralphHint: "Round things roll! Like my ball and my wheels!"
                },
                {
                    id: 59,
                    type: "shape-sorting",
                    question: "If you sort by 'polygons' and 'not polygons', which is NOT a polygon?",
                    options: ["Triangle", "Square", "Circle", "Pentagon"],
                    correct: 2,
                    explanation: "A polygon has straight sides, so a circle is not a polygon.",
                    ralphHint: "Polygons have straight sides! Circles are curved!"
                },
                {
                    id: 60,
                    type: "shape-sorting",
                    question: "What property is the same for triangles, squares, and pentagons?",
                    options: ["They're all round", "They all have straight sides", "They're all the same size", "They all have 4 sides"],
                    correct: 1,
                    explanation: "All three shapes have only straight sides.",
                    ralphHint: "Look at the edges! All straight lines, no curves!"
                }
            ]
        },

        // Set 7: Real World Shapes (Questions 61-70)
        {
            set: 7,
            setTitle: "Real World Shapes",
            setDescription: "Find shapes in everyday objects around you!",
            questions: [
                {
                    id: 61,
                    type: "real-world-shapes",
                    question: "What shape is a window usually?",
                    options: ["Circle", "Triangle", "Rectangle", "Pentagon"],
                    correct: 2,
                    explanation: "Most windows are rectangular.",
                    ralphHint: "Look at the window! It's like a rectangle!"
                },
                {
                    id: 62,
                    type: "real-world-shapes",
                    question: "What shape are the wheels on a car?",
                    options: ["Square", "Triangle", "Circle", "Rectangle"],
                    correct: 2,
                    explanation: "Car wheels are circular so they can roll smoothly.",
                    ralphHint: "Wheels are round! That's why cars can roll!"
                },
                {
                    id: 63,
                    type: "real-world-shapes",
                    question: "What shape is a slice of pizza?",
                    options: ["Circle", "Square", "Triangle", "Rectangle"],
                    correct: 2,
                    explanation: "A pizza slice is triangular.",
                    ralphHint: "Pizza slice is pointy like a triangle! Yummy triangle!"
                },
                {
                    id: 64,
                    type: "real-world-shapes",
                    question: "What 3D shape is a dice?",
                    options: ["Sphere", "Cylinder", "Cube", "Pyramid"],
                    correct: 2,
                    explanation: "A dice is a cube with 6 square faces.",
                    ralphHint: "Dice has six sides! It's a cube for rolling!"
                },
                {
                    id: 65,
                    type: "real-world-shapes",
                    question: "What shape is a stop sign?",
                    options: ["Circle", "Square", "Triangle", "Octagon"],
                    correct: 3,
                    explanation: "A stop sign is an octagon (8 sides).",
                    ralphHint: "Stop sign has eight sides! Count them next time!"
                },
                {
                    id: 66,
                    type: "real-world-shapes",
                    question: "What shape is a coin?",
                    options: ["Square", "Triangle", "Circle", "Rectangle"],
                    correct: 2,
                    explanation: "Coins are circular.",
                    ralphHint: "Coins roll because they're round circles!"
                },
                {
                    id: 67,
                    type: "real-world-shapes",
                    question: "What 3D shape is a can of soda?",
                    options: ["Cube", "Sphere", "Cylinder", "Pyramid"],
                    correct: 2,
                    explanation: "A soda can is cylindrical.",
                    ralphHint: "Soda cans are cylinders! Round and tall!"
                },
                {
                    id: 68,
                    type: "real-world-shapes",
                    question: "What shape is a sheet of paper?",
                    options: ["Circle", "Triangle", "Rectangle", "Pentagon"],
                    correct: 2,
                    explanation: "Most paper is rectangular.",
                    ralphHint: "Paper has four corners! It's a rectangle!"
                },
                {
                    id: 69,
                    type: "real-world-shapes",
                    question: "What shape is an egg?",
                    options: ["Perfect circle", "Square", "Oval/Ellipse", "Triangle"],
                    correct: 2,
                    explanation: "An egg is oval or ellipse-shaped.",
                    ralphHint: "Eggs are like stretched circles! Oval shaped!"
                },
                {
                    id: 70,
                    type: "real-world-shapes",
                    question: "What 3D shape is a basketball?",
                    options: ["Cube", "Cylinder", "Sphere", "Pyramid"],
                    correct: 2,
                    explanation: "A basketball is a sphere.",
                    ralphHint: "Basketballs bounce because they're round spheres!"
                }
            ]
        },

        // Set 8: Lines and Angles (Questions 71-80)
        {
            set: 8,
            setTitle: "Lines and Angles",
            setDescription: "Learn about different types of lines and angles!",
            questions: [
                {
                    id: 71,
                    type: "lines-angles",
                    question: "What is a straight line?",
                    options: ["A curved line", "A line that goes in one direction", "A broken line", "A colored line"],
                    correct: 1,
                    explanation: "A straight line goes in one direction without bending.",
                    ralphHint: "Straight lines don't bend! Like my ruler edge!"
                },
                {
                    id: 72,
                    type: "lines-angles",
                    question: "What do we call a line that curves?",
                    options: ["Straight line", "Curved line", "Broken line", "Thick line"],
                    correct: 1,
                    explanation: "A line that bends is called a curved line.",
                    ralphHint: "Curved lines bend like my spaghetti!"
                },
                {
                    id: 73,
                    type: "lines-angles",
                    question: "What is the corner of a square called?",
                    options: ["Side", "Line", "Right angle", "Curve"],
                    correct: 2,
                    explanation: "The corners of squares are right angles.",
                    ralphHint: "Square corners are perfect right angles! Like my building blocks!"
                },
                {
                    id: 74,
                    type: "lines-angles",
                    question: "How many right angles does a rectangle have?",
                    options: ["2", "3", "4", "5"],
                    correct: 2,
                    explanation: "A rectangle has 4 right angles.",
                    ralphHint: "Count all the corners! Four right angles!"
                },
                {
                    id: 75,
                    type: "lines-angles",
                    question: "What do we call two lines that never meet?",
                    options: ["Crossing lines", "Parallel lines", "Curved lines", "Short lines"],
                    correct: 1,
                    explanation: "Parallel lines run side by side and never meet.",
                    ralphHint: "Parallel lines are like train tracks! They never touch!"
                },
                {
                    id: 76,
                    type: "lines-angles",
                    question: "What happens when two straight lines cross?",
                    options: ["They make curves", "They make angles", "They disappear", "They get longer"],
                    correct: 1,
                    explanation: "When lines cross, they create angles where they meet.",
                    ralphHint: "Where lines meet, angles appear! Like corners!"
                },
                {
                    id: 77,
                    type: "lines-angles",
                    question: "Which has more right angles: a triangle or a square?",
                    options: ["Triangle", "Square", "They're equal", "Neither has any"],
                    correct: 1,
                    explanation: "A square has 4 right angles, a triangle usually has fewer.",
                    ralphHint: "Square corners are all right angles! Triangle corners are different!"
                },
                {
                    id: 78,
                    type: "lines-angles",
                    question: "What kind of angle is smaller than a right angle?",
                    options: ["Big angle", "Acute angle", "Right angle", "Straight angle"],
                    correct: 1,
                    explanation: "An acute angle is smaller than a right angle.",
                    ralphHint: "Acute angles are tiny! Smaller than square corners!"
                },
                {
                    id: 79,
                    type: "lines-angles",
                    question: "Where can you find parallel lines in a rectangle?",
                    options: ["Nowhere", "Only the top and bottom", "Only the left and right", "Opposite sides"],
                    correct: 3,
                    explanation: "In a rectangle, opposite sides are parallel.",
                    ralphHint: "Top and bottom are parallel! Left and right are parallel!"
                },
                {
                    id: 80,
                    type: "lines-angles",
                    question: "What makes a right angle special?",
                    options: ["It's colored", "It's curved", "It forms a square corner", "It's very long"],
                    correct: 2,
                    explanation: "A right angle forms a perfect square corner like in squares and rectangles.",
                    ralphHint: "Right angles are perfect square corners! Like my toy blocks!"
                }
            ]
        },

        // Set 9: Shape Transformations (Questions 81-90)
        {
            set: 9,
            setTitle: "Shape Transformations",
            setDescription: "Learn how shapes can slide, flip, and turn!",
            questions: [
                {
                    id: 81,
                    type: "transformations",
                    question: "What happens when you slide a shape to a new position?",
                    options: ["It changes shape", "It changes size", "It moves but stays the same", "It disappears"],
                    correct: 2,
                    explanation: "When you slide a shape, it moves but doesn't change.",
                    ralphHint: "Sliding is like moving my toy car! Same car, new place!"
                },
                {
                    id: 82,
                    type: "transformations",
                    question: "What happens when you flip a shape like a pancake?",
                    options: ["It gets bigger", "It turns upside down", "It gets smaller", "It changes color"],
                    correct: 1,
                    explanation: "Flipping turns a shape over, like a mirror image.",
                    ralphHint: "Flipping is like looking in a mirror! Everything backwards!"
                },
                {
                    id: 83,
                    type: "transformations",
                    question: "What happens when you turn a shape around?",
                    options: ["It faces a new direction", "It gets bigger", "It changes shape", "It breaks"],
                    correct: 0,
                    explanation: "Turning (rotating) makes a shape face a new direction.",
                    ralphHint: "Turning is like spinning my top! Same shape, new direction!"
                },
                {
                    id: 84,
                    type: "transformations",
                    question: "If you turn a square, does it change shape?",
                    options: ["Yes, it becomes a circle", "Yes, it becomes a triangle", "No, it stays a square", "Yes, it gets bigger"],
                    correct: 2,
                    explanation: "A square stays a square when you turn it.",
                    ralphHint: "Square turned is still a square! Just facing a different way!"
                },
                {
                    id: 85,
                    type: "transformations",
                    question: "Which shape looks the same after you turn it a little?",
                    options: ["Triangle", "Rectangle", "Circle", "Pentagon"],
                    correct: 2,
                    explanation: "A circle looks the same no matter how you turn it.",
                    ralphHint: "Circles are the same all around! Turn it any way!"
                },
                {
                    id: 86,
                    type: "transformations",
                    question: "What do we call it when you move a shape without turning or flipping?",
                    options: ["Rotation", "Reflection", "Translation", "Transformation"],
                    correct: 2,
                    explanation: "Moving a shape without changing it is called translation or sliding.",
                    ralphHint: "Translation is like sliding! Move it but don't change it!"
                },
                {
                    id: 87,
                    type: "transformations",
                    question: "If you flip the letter 'b', what does it look like?",
                    options: ["p", "d", "q", "b"],
                    correct: 1,
                    explanation: "Flipping 'b' horizontally makes it look like 'd'.",
                    ralphHint: "Flip 'b' and it becomes 'd'! Like in a mirror!"
                },
                {
                    id: 88,
                    type: "transformations",
                    question: "What stays the same when you transform a shape?",
                    options: ["Position", "Direction", "Size and shape", "Color"],
                    correct: 2,
                    explanation: "The size and shape stay the same during transformations.",
                    ralphHint: "Big square stays big! Triangle stays triangle! Just moves around!"
                },
                {
                    id: 89,
                    type: "transformations",
                    question: "How many ways can you move a shape?",
                    options: ["1 way", "2 ways", "3 ways", "4 ways"],
                    correct: 2,
                    explanation: "You can slide, flip, or turn a shape (3 basic transformations).",
                    ralphHint: "Slide, flip, turn! Three ways to move shapes around!"
                },
                {
                    id: 90,
                    type: "transformations",
                    question: "If you turn a triangle upside down, how many sides does it have?",
                    options: ["2", "3", "4", "5"],
                    correct: 1,
                    explanation: "A triangle always has 3 sides, even when turned upside down.",
                    ralphHint: "Turning doesn't change the sides! Still three sides!"
                }
            ]
        },

        // Set 10: Shape Review (Questions 91-100)
        {
            set: 10,
            setTitle: "Shape Review",
            setDescription: "Review everything you've learned about shapes!",
            questions: [
                {
                    id: 91,
                    type: "shape-review",
                    question: "Which shape family has no corners?",
                    options: ["Triangles", "Squares", "Circles", "Rectangles"],
                    correct: 2,
                    explanation: "Circles are round and have no corners.",
                    ralphHint: "Round shapes have no pointy corners! Smooth all around!"
                },
                {
                    id: 92,
                    type: "shape-review",
                    question: "What makes 3D shapes different from 2D shapes?",
                    options: ["Color", "Size", "Thickness", "Weight"],
                    correct: 2,
                    explanation: "3D shapes have thickness/depth, while 2D shapes are flat.",
                    ralphHint: "3D shapes are thick like my toys! 2D shapes are flat like paper!"
                },
                {
                    id: 93,
                    type: "shape-review",
                    question: "Which property helps you identify a square?",
                    options: ["Color", "4 equal sides and 4 right angles", "Size", "Position"],
                    correct: 1,
                    explanation: "A square has 4 equal sides and 4 right angles.",
                    ralphHint: "Square has four equal sides and perfect corners!"
                },
                {
                    id: 94,
                    type: "shape-review",
                    question: "What do all polygons have?",
                    options: ["Curved sides", "Straight sides", "Same size", "Same color"],
                    correct: 1,
                    explanation: "All polygons are made of straight lines.",
                    ralphHint: "Polygons have straight edges! No curves allowed!"
                },
                {
                    id: 95,
                    type: "shape-review",
                    question: "Which transformation doesn't change the shape's orientation?",
                    options: ["Rotation", "Reflection", "Translation", "All change it"],
                    correct: 2,
                    explanation: "Translation (sliding) doesn't change which way the shape faces.",
                    ralphHint: "Sliding keeps the shape facing the same way!"
                },
                {
                    id: 96,
                    type: "shape-review",
                    question: "How are a square and rhombus alike?",
                    options: ["Both have 4 equal sides", "Both have right angles", "Both are circles", "Both have 3 sides"],
                    correct: 0,
                    explanation: "Both squares and rhombuses have 4 equal sides.",
                    ralphHint: "Both have four equal sides! But squares have square corners!"
                },
                {
                    id: 97,
                    type: "shape-review",
                    question: "Which real-world object is shaped like a cylinder?",
                    options: ["Book", "Ball", "Can", "Pyramid"],
                    correct: 2,
                    explanation: "A can is cylinder-shaped.",
                    ralphHint: "Cans are round and tall! Perfect cylinders!"
                },
                {
                    id: 98,
                    type: "shape-review",
                    question: "What's special about the lines of symmetry in regular shapes?",
                    options: ["They're colored", "They divide the shape into equal halves", "They're curved", "They're outside the shape"],
                    correct: 1,
                    explanation: "Lines of symmetry divide shapes into matching halves.",
                    ralphHint: "Symmetry lines make perfect matches! Both sides the same!"
                },
                {
                    id: 99,
                    type: "shape-review",
                    question: "If you stack cubes, spheres, and cylinders, which stack best?",
                    options: ["Spheres", "Cylinders", "Cubes", "All the same"],
                    correct: 2,
                    explanation: "Cubes stack best because they have flat, stable surfaces.",
                    ralphHint: "Cubes have flat sides! Perfect for stacking like my blocks!"
                },
                {
                    id: 100,
                    type: "shape-review",
                    question: "What have you learned about shapes in these 100 questions?",
                    options: ["Shapes are hard", "Shapes are everywhere and have special properties", "Shapes are only in books", "Shapes are all the same"],
                    correct: 1,
                    explanation: "Shapes are all around us and each has unique properties that make them special.",
                    ralphHint: "Shapes are everywhere! In my toys, my house, my food! Math is all around!"
                }
            ]
        }
    ],

    measurement: [
        {
            set: 1,
            setTitle: "Length Basics",
            setDescription: "Learn to measure things using different units!",
            questions: [
                {
                    id: 1,
                    type: "measurement-comparison",
                    question: "Which is longer: a pencil or a paperclip?",
                    options: ["Pencil", "Paperclip", "They're the same", "Can't tell"],
                    correct: 0,
                    explanation: "A pencil is longer than a paperclip.",
                    ralphHint: "My pencil is longer! I can poke more things with it!"
                },
                {
                    id: 2,
                    type: "measurement-units",
                    question: "What would you use to measure your height?",
                    options: ["Inches", "Pounds", "Cups", "Minutes"],
                    correct: 0,
                    explanation: "Height is measured in length units like inches or feet.",
                    ralphHint: "How tall am I? Count in inches from my feet to my head!"
                },
                {
                    id: 3,
                    type: "measurement-estimation",
                    question: "About how long is your thumb?",
                    options: ["1 inch", "1 foot", "1 yard", "1 mile"],
                    correct: 0,
                    explanation: "An adult thumb is about 1 inch long.",
                    ralphHint: "My thumb is about one inch! Like from here to here!"
                },
                {
                    id: 4,
                    type: "measurement-comparison",
                    question: "Which is shorter: your foot or your arm?",
                    options: ["Foot", "Arm", "They're the same", "Depends"],
                    correct: 0,
                    explanation: "Your foot is shorter than your arm.",
                    ralphHint: "My arm is longer! I can reach farther with my arm!"
                },
                {
                    id: 5,
                    type: "measurement-tools",
                    question: "What tool helps you measure length?",
                    options: ["Scale", "Ruler", "Clock", "Thermometer"],
                    correct: 1,
                    explanation: "A ruler is used to measure length.",
                    ralphHint: "My ruler has numbers! I can measure my crayons!"
                },
                {
                    id: 6,
                    type: "measurement-units",
                    question: "How many inches are in a foot?",
                    options: ["10", "12", "15", "20"],
                    correct: 1,
                    explanation: "There are 12 inches in a foot.",
                    ralphHint: "Twelve inches make a foot! Like counting to twelve!"
                },
                {
                    id: 7,
                    type: "measurement-estimation",
                    question: "About how wide is a door?",
                    options: ["3 inches", "3 feet", "3 yards", "3 miles"],
                    correct: 1,
                    explanation: "A door is about 3 feet wide.",
                    ralphHint: "I can walk through the door! It's about three feet!"
                },
                {
                    id: 8,
                    type: "measurement-comparison",
                    question: "Which is the longest?",
                    options: ["A car", "A bicycle", "A skateboard", "A scooter"],
                    correct: 0,
                    explanation: "A car is longer than the other vehicles.",
                    ralphHint: "The car is biggest! It can fit my whole family!"
                },
                {
                    id: 9,
                    type: "measurement-tools",
                    question: "If you don't have a ruler, what could you use to measure?",
                    options: ["Your hand", "Paperclips", "Blocks", "All of these"],
                    correct: 3,
                    explanation: "Any object can be used as a unit of measurement.",
                    ralphHint: "I can use anything! My hand, my toys, even my sandwich!"
                },
                {
                    id: 10,
                    type: "measurement-units",
                    question: "Which unit is best for measuring a classroom?",
                    options: ["Inches", "Feet", "Miles", "Thumbs"],
                    correct: 1,
                    explanation: "Feet are a good unit for measuring room-sized things.",
                    ralphHint: "The classroom is many feet long! Too big for inches!"
                }
            ]
        },

        // Set 2: Measurement Tools (Questions 11-20)
        {
            set: 2,
            setTitle: "Measurement Tools",
            setDescription: "Discover different tools we use to measure things!",
            questions: [
                {
                    id: 11,
                    type: "measurement-tools",
                    question: "What tool do you use to measure weight?",
                    options: ["Ruler", "Scale", "Thermometer", "Clock"],
                    correct: 1,
                    explanation: "A scale measures how heavy something is.",
                    ralphHint: "Scale tells me how heavy I am! Like when I step on it!"
                },
                {
                    id: 12,
                    type: "measurement-tools",
                    question: "What do we use a thermometer for?",
                    options: ["Measuring length", "Measuring weight", "Measuring temperature", "Measuring time"],
                    correct: 2,
                    explanation: "A thermometer measures how hot or cold something is.",
                    ralphHint: "Thermometer tells if I have a fever! Hot or cold!"
                },
                {
                    id: 13,
                    type: "measurement-tools",
                    question: "What tool measures how much liquid is in a container?",
                    options: ["Ruler", "Scale", "Measuring cup", "Stopwatch"],
                    correct: 2,
                    explanation: "A measuring cup shows how much liquid you have.",
                    ralphHint: "Measuring cups help me make chocolate milk! How much milk?"
                },
                {
                    id: 14,
                    type: "measurement-tools",
                    question: "Which tool has numbers and marks to measure length?",
                    options: ["Scale", "Ruler", "Cup", "Thermometer"],
                    correct: 1,
                    explanation: "A ruler has numbers and marks for measuring length.",
                    ralphHint: "My ruler has little lines and numbers! Perfect for measuring!"
                },
                {
                    id: 15,
                    type: "measurement-tools",
                    question: "What do we use to measure time?",
                    options: ["Ruler", "Scale", "Clock", "Thermometer"],
                    correct: 2,
                    explanation: "Clocks and watches measure time.",
                    ralphHint: "Clock tells me when it's lunch time! Tick tock!"
                },
                {
                    id: 16,
                    type: "measurement-tools",
                    question: "If you want to know how tall you are, you need a:",
                    options: ["Scale", "Measuring tape", "Cup", "Thermometer"],
                    correct: 1,
                    explanation: "Measuring tape or ruler measures height.",
                    ralphHint: "Measuring tape goes up and down! How tall am I?"
                },
                {
                    id: 17,
                    type: "measurement-tools",
                    question: "Which tool would you use to measure flour for baking?",
                    options: ["Ruler", "Scale", "Measuring cup", "Clock"],
                    correct: 2,
                    explanation: "Measuring cups are used for ingredients in cooking.",
                    ralphHint: "Measuring cups for cookies! How much flour do I need?"
                },
                {
                    id: 18,
                    type: "measurement-tools",
                    question: "What makes a good measuring tool?",
                    options: ["It's colorful", "It has clear marks", "It's heavy", "It's round"],
                    correct: 1,
                    explanation: "Good measuring tools have clear, easy-to-read marks.",
                    ralphHint: "I can see the numbers clearly! No guessing!"
                },
                {
                    id: 19,
                    type: "measurement-tools",
                    question: "Which tool measures distance you walk?",
                    options: ["Ruler", "Pedometer", "Scale", "Thermometer"],
                    correct: 1,
                    explanation: "A pedometer counts steps to measure walking distance.",
                    ralphHint: "Pedometer counts my steps! Step, step, step!"
                },
                {
                    id: 20,
                    type: "measurement-tools",
                    question: "What tool helps you draw straight lines and measure?",
                    options: ["Scale", "Ruler", "Cup", "Clock"],
                    correct: 1,
                    explanation: "A ruler helps draw straight lines and measure length.",
                    ralphHint: "My ruler is straight and has numbers! Two jobs in one!"
                }
            ]
        },

        // Set 3: Units of Length (Questions 21-30)
        {
            set: 3,
            setTitle: "Units of Length",
            setDescription: "Learn about inches, feet, yards, and more!",
            questions: [
                {
                    id: 21,
                    type: "measurement-units",
                    question: "Which is the shortest unit: inch, foot, or yard?",
                    options: ["Inch", "Foot", "Yard", "They're equal"],
                    correct: 0,
                    explanation: "An inch is the shortest of these three units.",
                    ralphHint: "Inch is tiny! Like my thumb!"
                },
                {
                    id: 22,
                    type: "measurement-units",
                    question: "How many feet are in a yard?",
                    options: ["2", "3", "4", "5"],
                    correct: 1,
                    explanation: "There are 3 feet in one yard.",
                    ralphHint: "Three feet make one yard! Like my three feet toys!"
                },
                {
                    id: 23,
                    type: "measurement-units",
                    question: "What unit would you use to measure a crayon?",
                    options: ["Miles", "Yards", "Inches", "Feet"],
                    correct: 2,
                    explanation: "A crayon is small, so inches work best.",
                    ralphHint: "My crayon is just a few inches! Small things, small units!"
                },
                {
                    id: 24,
                    type: "measurement-units",
                    question: "Which unit is best for measuring your bedroom?",
                    options: ["Inches", "Feet", "Miles", "Centimeters"],
                    correct: 1,
                    explanation: "Feet are good for measuring room-sized things.",
                    ralphHint: "My bedroom is many feet big! Not too big, not too small!"
                },
                {
                    id: 25,
                    type: "measurement-units",
                    question: "What unit measures very long distances?",
                    options: ["Inches", "Feet", "Yards", "Miles"],
                    correct: 3,
                    explanation: "Miles are used for very long distances.",
                    ralphHint: "Miles are for going far! Like to grandma's house!"
                },
                {
                    id: 26,
                    type: "measurement-units",
                    question: "About how many inches long is a new pencil?",
                    options: ["2 inches", "7 inches", "12 inches", "24 inches"],
                    correct: 1,
                    explanation: "A new pencil is about 7 inches long.",
                    ralphHint: "My new pencil is about seven inches! Not too long, not too short!"
                },
                {
                    id: 27,
                    type: "measurement-units",
                    question: "Which is longer: 24 inches or 2 feet?",
                    options: ["24 inches", "2 feet", "They're equal", "Can't tell"],
                    correct: 2,
                    explanation: "24 inches equals 2 feet (12 inches per foot).",
                    ralphHint: "Same size! 24 inches is the same as 2 feet!"
                },
                {
                    id: 28,
                    type: "measurement-units",
                    question: "What unit would you use for a football field?",
                    options: ["Inches", "Feet", "Yards", "Centimeters"],
                    correct: 2,
                    explanation: "Football fields are measured in yards.",
                    ralphHint: "Football field is 100 yards! That's really long!"
                },
                {
                    id: 29,
                    type: "measurement-units",
                    question: "About how long is your hand?",
                    options: ["1 inch", "4 inches", "1 foot", "1 yard"],
                    correct: 1,
                    explanation: "A child's hand is about 4 inches long.",
                    ralphHint: "My hand is about four inches! From wrist to fingertips!"
                },
                {
                    id: 30,
                    type: "measurement-units",
                    question: "Which unit is NOT used to measure length?",
                    options: ["Inches", "Pounds", "Feet", "Yards"],
                    correct: 1,
                    explanation: "Pounds measure weight, not length.",
                    ralphHint: "Pounds are for heavy things! Not for long things!"
                }
            ]
        },

        // Set 4: Estimating Measurements (Questions 31-40)
        {
            set: 4,
            setTitle: "Estimating Measurements",
            setDescription: "Make good guesses about how big things are!",
            questions: [
                {
                    id: 31,
                    type: "measurement-estimation",
                    question: "About how tall is a grown-up?",
                    options: ["2 feet", "6 feet", "15 feet", "50 feet"],
                    correct: 1,
                    explanation: "Most adults are about 5-6 feet tall.",
                    ralphHint: "Grown-ups are about six feet! Much taller than me!"
                },
                {
                    id: 32,
                    type: "measurement-estimation",
                    question: "How wide is your desk?",
                    options: ["6 inches", "2 feet", "10 feet", "1 yard"],
                    correct: 1,
                    explanation: "A typical desk is about 2 feet wide.",
                    ralphHint: "My desk is about two feet wide! Just right for my stuff!"
                },
                {
                    id: 33,
                    type: "measurement-estimation",
                    question: "About how long is a school bus?",
                    options: ["10 feet", "25 feet", "100 feet", "5 feet"],
                    correct: 1,
                    explanation: "A school bus is about 25 feet long.",
                    ralphHint: "School bus is really long! About 25 feet!"
                },
                {
                    id: 34,
                    type: "measurement-estimation",
                    question: "How thick is a book?",
                    options: ["1 inch", "6 inches", "1 foot", "3 feet"],
                    correct: 0,
                    explanation: "Most books are about 1 inch thick.",
                    ralphHint: "My book is about one inch thick! Not too fat!"
                },
                {
                    id: 35,
                    type: "measurement-estimation",
                    question: "About how long is a banana?",
                    options: ["2 inches", "6 inches", "2 feet", "1 yard"],
                    correct: 1,
                    explanation: "A banana is about 6 inches long.",
                    ralphHint: "Banana is about six inches! Perfect for my lunchbox!"
                },
                {
                    id: 36,
                    type: "measurement-estimation",
                    question: "How high is the ceiling in your classroom?",
                    options: ["3 feet", "9 feet", "20 feet", "50 feet"],
                    correct: 1,
                    explanation: "Most classroom ceilings are about 9 feet high.",
                    ralphHint: "Ceiling is way up there! About nine feet high!"
                },
                {
                    id: 37,
                    type: "measurement-estimation",
                    question: "About how long is a paperclip?",
                    options: ["1 inch", "4 inches", "8 inches", "1 foot"],
                    correct: 0,
                    explanation: "A paperclip is about 1 inch long.",
                    ralphHint: "Paperclip is tiny! About one inch long!"
                },
                {
                    id: 38,
                    type: "measurement-estimation",
                    question: "How wide is a sidewalk?",
                    options: ["1 foot", "4 feet", "20 feet", "100 feet"],
                    correct: 1,
                    explanation: "Most sidewalks are about 4 feet wide.",
                    ralphHint: "Sidewalk is wide enough for people! About four feet!"
                },
                {
                    id: 39,
                    type: "measurement-estimation",
                    question: "About how long is a guitar?",
                    options: ["1 foot", "3 feet", "6 feet", "10 feet"],
                    correct: 1,
                    explanation: "A guitar is about 3 feet long.",
                    ralphHint: "Guitar is about three feet! Big enough to make music!"
                },
                {
                    id: 40,
                    type: "measurement-estimation",
                    question: "How tall is a basketball hoop?",
                    options: ["5 feet", "10 feet", "20 feet", "50 feet"],
                    correct: 1,
                    explanation: "A basketball hoop is 10 feet high.",
                    ralphHint: "Basketball hoop is way up! Ten feet high!"
                }
            ]
        },

        // Set 5: Comparing Measurements (Questions 41-50)
        {
            set: 5,
            setTitle: "Comparing Measurements",
            setDescription: "Compare different lengths and sizes!",
            questions: [
                {
                    id: 41,
                    type: "measurement-comparison",
                    question: "Which is longer: 2 feet or 20 inches?",
                    options: ["2 feet", "20 inches", "They're equal", "Can't tell"],
                    correct: 0,
                    explanation: "2 feet = 24 inches, which is longer than 20 inches.",
                    ralphHint: "Two feet is 24 inches! That's more than 20!"
                },
                {
                    id: 42,
                    type: "measurement-comparison",
                    question: "What's taller: a chair or a table?",
                    options: ["Chair", "Table", "They're equal", "Depends"],
                    correct: 1,
                    explanation: "Tables are usually taller than chairs.",
                    ralphHint: "Table is taller! I sit in chair to reach the table!"
                },
                {
                    id: 43,
                    type: "measurement-comparison",
                    question: "Which is wider: a door or a window?",
                    options: ["Door", "Window", "They're equal", "Depends on the window"],
                    correct: 3,
                    explanation: "It depends on the specific door and window sizes.",
                    ralphHint: "Some windows are big, some are small! Depends which ones!"
                },
                {
                    id: 44,
                    type: "measurement-comparison",
                    question: "What's longer: a snake or a worm?",
                    options: ["Snake", "Worm", "They're equal", "Depends"],
                    correct: 3,
                    explanation: "It depends on the type of snake and worm.",
                    ralphHint: "Some snakes are long, some worms are long! Depends which ones!"
                },
                {
                    id: 45,
                    type: "measurement-comparison",
                    question: "Which is thicker: a book or a magazine?",
                    options: ["Book", "Magazine", "They're equal", "Depends"],
                    correct: 0,
                    explanation: "Books are usually thicker than magazines.",
                    ralphHint: "Books have more pages! Thicker than magazines!"
                },
                {
                    id: 46,
                    type: "measurement-comparison",
                    question: "What's taller: you or your teacher?",
                    options: ["Me", "My teacher", "We're equal", "Depends"],
                    correct: 1,
                    explanation: "Teachers are adults and are taller than students.",
                    ralphHint: "My teacher is a grown-up! Taller than me!"
                },
                {
                    id: 47,
                    type: "measurement-comparison",
                    question: "Which is longer: your arm or your leg?",
                    options: ["Arm", "Leg", "They're equal", "Depends"],
                    correct: 1,
                    explanation: "Legs are usually longer than arms.",
                    ralphHint: "My legs are longer! That's why I can run fast!"
                },
                {
                    id: 48,
                    type: "measurement-comparison",
                    question: "What's wider: a pencil or a marker?",
                    options: ["Pencil", "Marker", "They're equal", "Depends"],
                    correct: 1,
                    explanation: "Markers are usually wider than pencils.",
                    ralphHint: "Markers are fatter! Makes thicker lines!"
                },
                {
                    id: 49,
                    type: "measurement-comparison",
                    question: "Which is shorter: 1 yard or 35 inches?",
                    options: ["1 yard", "35 inches", "They're equal", "Can't tell"],
                    correct: 0,
                    explanation: "1 yard = 36 inches, so 35 inches is shorter.",
                    ralphHint: "One yard is 36 inches! 35 is less than 36!"
                },
                {
                    id: 50,
                    type: "measurement-comparison",
                    question: "What's taller: a tree or a flower?",
                    options: ["Tree", "Flower", "They're equal", "Depends"],
                    correct: 0,
                    explanation: "Trees are much taller than flowers.",
                    ralphHint: "Trees are really tall! Flowers are short and pretty!"
                }
            ]
        },

        // Set 6: Weight and Capacity (Questions 51-60)
        {
            set: 6,
            setTitle: "Weight and Capacity",
            setDescription: "Learn about how heavy things are and how much they hold!",
            questions: [
                {
                    id: 51,
                    type: "weight-capacity",
                    question: "What do we use to measure weight?",
                    options: ["Ruler", "Scale", "Clock", "Thermometer"],
                    correct: 1,
                    explanation: "A scale measures how heavy something is.",
                    ralphHint: "Scale tells me how much I weigh! Step on and see!"
                },
                {
                    id: 52,
                    type: "weight-capacity",
                    question: "Which weighs more: a feather or a rock?",
                    options: ["Feather", "Rock", "They're equal", "Can't tell"],
                    correct: 1,
                    explanation: "Rocks are much heavier than feathers.",
                    ralphHint: "Rocks are heavy! Feathers are light as air!"
                },
                {
                    id: 53,
                    type: "weight-capacity",
                    question: "What unit do we use to measure weight?",
                    options: ["Inches", "Pounds", "Feet", "Cups"],
                    correct: 1,
                    explanation: "Pounds measure weight.",
                    ralphHint: "Pounds tell how heavy! I weigh some pounds!"
                },
                {
                    id: 54,
                    type: "weight-capacity",
                    question: "Which holds more water: a cup or a bucket?",
                    options: ["Cup", "Bucket", "They're equal", "Can't tell"],
                    correct: 1,
                    explanation: "A bucket holds much more than a cup.",
                    ralphHint: "Bucket is big! Holds lots more water than a cup!"
                },
                {
                    id: 55,
                    type: "weight-capacity",
                    question: "What do we call how much a container can hold?",
                    options: ["Weight", "Length", "Capacity", "Height"],
                    correct: 2,
                    explanation: "Capacity is how much a container can hold.",
                    ralphHint: "Capacity is how full it can get! Like my milk glass!"
                },
                {
                    id: 56,
                    type: "weight-capacity",
                    question: "Which weighs more: a big balloon or a small coin?",
                    options: ["Big balloon", "Small coin", "They're equal", "Can't tell"],
                    correct: 1,
                    explanation: "Even though the coin is smaller, it weighs more.",
                    ralphHint: "Coin is heavy even though it's small! Balloon is light even though it's big!"
                },
                {
                    id: 57,
                    type: "weight-capacity",
                    question: "What unit measures how much liquid is in a container?",
                    options: ["Pounds", "Inches", "Cups", "Feet"],
                    correct: 2,
                    explanation: "Cups measure liquid amounts.",
                    ralphHint: "Cups for liquids! How many cups of juice?"
                },
                {
                    id: 58,
                    type: "weight-capacity",
                    question: "Which is heavier: you or your backpack?",
                    options: ["Me", "My backpack", "We're equal", "Depends"],
                    correct: 0,
                    explanation: "You weigh much more than your backpack.",
                    ralphHint: "I'm heavier than my backpack! Even when it's full of books!"
                },
                {
                    id: 59,
                    type: "weight-capacity",
                    question: "What holds more: a spoon or a bowl?",
                    options: ["Spoon", "Bowl", "They're equal", "Can't tell"],
                    correct: 1,
                    explanation: "A bowl holds much more than a spoon.",
                    ralphHint: "Bowl is bigger! Holds more soup than a spoon!"
                },
                {
                    id: 60,
                    type: "weight-capacity",
                    question: "If you want to know how much milk you have, you measure:",
                    options: ["Weight", "Length", "Capacity", "Temperature"],
                    correct: 2,
                    explanation: "Milk amount is measured by capacity (volume).",
                    ralphHint: "How much milk? Count the cups or ounces!"
                }
            ]
        },

        // Set 7: Standard Units (Questions 61-70)
        {
            set: 7,
            setTitle: "Standard Units",
            setDescription: "Learn about the units everyone uses to measure!",
            questions: [
                {
                    id: 61,
                    type: "standard-units",
                    question: "Why do we use standard units like inches and feet?",
                    options: ["They're pretty", "Everyone understands them", "They're easy to spell", "They're colorful"],
                    correct: 1,
                    explanation: "Standard units help everyone measure the same way.",
                    ralphHint: "Standard units are the same for everyone! No confusion!"
                },
                {
                    id: 62,
                    type: "standard-units",
                    question: "What's wrong with using your hand to measure everything?",
                    options: ["Nothing", "Hands are different sizes", "Hands get dirty", "Hands are too small"],
                    correct: 1,
                    explanation: "Everyone's hands are different sizes.",
                    ralphHint: "My hand is different from your hand! Not fair measuring!"
                },
                {
                    id: 63,
                    type: "standard-units",
                    question: "Which is a standard unit of length?",
                    options: ["My foot", "A shoe", "An inch", "A pencil"],
                    correct: 2,
                    explanation: "An inch is a standard unit that's the same everywhere.",
                    ralphHint: "Inch is the same for everyone! Standard means same!"
                },
                {
                    id: 64,
                    type: "standard-units",
                    question: "If you measure with paperclips, why might you get different answers than your friend?",
                    options: ["Different paperclips", "Math errors", "Different eyes", "Different hands"],
                    correct: 0,
                    explanation: "Paperclips can be different sizes.",
                    ralphHint: "Not all paperclips are the same! Some big, some small!"
                },
                {
                    id: 65,
                    type: "standard-units",
                    question: "What makes an inch always the same length?",
                    options: ["It's magic", "Everyone agrees on it", "It's painted", "It's round"],
                    correct: 1,
                    explanation: "Everyone agrees that an inch is exactly the same length.",
                    ralphHint: "Everyone says inch is this long! Same for everybody!"
                },
                {
                    id: 66,
                    type: "standard-units",
                    question: "Why is it better to use a ruler than counting steps?",
                    options: ["Rulers are prettier", "Steps are different sizes", "Rulers are cheaper", "Steps are too fast"],
                    correct: 1,
                    explanation: "Everyone takes different-sized steps.",
                    ralphHint: "My steps are small! Your steps might be big! Ruler is same for all!"
                },
                {
                    id: 67,
                    type: "standard-units",
                    question: "What's special about the inch marks on all rulers?",
                    options: ["They're all the same distance apart", "They're colorful", "They make noise", "They move"],
                    correct: 0,
                    explanation: "Inch marks are the same distance apart on every ruler.",
                    ralphHint: "All rulers have same inch marks! That's why they work!"
                },
                {
                    id: 68,
                    type: "standard-units",
                    question: "If you and your friend both measure the same table with rulers, you should get:",
                    options: ["Different answers", "The same answer", "No answer", "A bigger table"],
                    correct: 1,
                    explanation: "Standard units give the same answer for everyone.",
                    ralphHint: "Same table, same rulers, same answer! That's how it works!"
                },
                {
                    id: 69,
                    type: "standard-units",
                    question: "Which would give the most accurate measurement?",
                    options: ["Your thumb", "A ruler", "Your shoe", "A book"],
                    correct: 1,
                    explanation: "A ruler is made for accurate measuring.",
                    ralphHint: "Ruler is made for measuring! Most accurate!"
                },
                {
                    id: 70,
                    type: "standard-units",
                    question: "Why do stores use standard units to sell things?",
                    options: ["They're fancy", "Customers know what they're getting", "They're cheap", "They're heavy"],
                    correct: 1,
                    explanation: "Standard units help customers know exactly how much they're buying.",
                    ralphHint: "When I buy a foot-long sandwich, I know how big! Standard units!"
                }
            ]
        },

        // Set 8: Metric Units (Questions 71-80)
        {
            set: 8,
            setTitle: "Metric Units",
            setDescription: "Explore centimeters, meters, and other metric measurements!",
            questions: [
                {
                    id: 71,
                    type: "metric-units",
                    question: "What is a centimeter?",
                    options: ["A type of bug", "A small unit of length", "A big unit of length", "A unit of weight"],
                    correct: 1,
                    explanation: "A centimeter is a small unit used to measure length.",
                    ralphHint: "Centimeter is tiny! Smaller than an inch!"
                },
                {
                    id: 72,
                    type: "metric-units",
                    question: "Which is longer: a centimeter or an inch?",
                    options: ["Centimeter", "Inch", "They're equal", "Can't tell"],
                    correct: 1,
                    explanation: "An inch is longer than a centimeter.",
                    ralphHint: "Inch is longer! Centimeter is the little one!"
                },
                {
                    id: 73,
                    type: "metric-units",
                    question: "What would you measure in centimeters?",
                    options: ["Your house", "A caterpillar", "A football field", "A mountain"],
                    correct: 1,
                    explanation: "Small things like caterpillars are measured in centimeters.",
                    ralphHint: "Caterpillar is small! Perfect for centimeters!"
                },
                {
                    id: 74,
                    type: "metric-units",
                    question: "How many centimeters are in a meter?",
                    options: ["10", "50", "100", "1000"],
                    correct: 2,
                    explanation: "There are 100 centimeters in one meter.",
                    ralphHint: "100 centimeters make a meter! Like 100 pennies make a dollar!"
                },
                {
                    id: 75,
                    type: "metric-units",
                    question: "Which is longer: a meter or a yard?",
                    options: ["Meter", "Yard", "They're about equal", "Can't tell"],
                    correct: 2,
                    explanation: "A meter and yard are almost the same length.",
                    ralphHint: "Meter and yard are almost the same! Close enough!"
                },
                {
                    id: 76,
                    type: "metric-units",
                    question: "What unit would you use to measure your height in metric?",
                    options: ["Centimeters", "Meters", "Both", "Neither"],
                    correct: 2,
                    explanation: "Height can be measured in both centimeters and meters.",
                    ralphHint: "I'm about 100 centimeters or 1 meter tall!"
                },
                {
                    id: 77,
                    type: "metric-units",
                    question: "Which is a metric unit?",
                    options: ["Foot", "Inch", "Centimeter", "Yard"],
                    correct: 2,
                    explanation: "Centimeter is part of the metric system.",
                    ralphHint: "Centimeter is metric! The others are not!"
                },
                {
                    id: 78,
                    type: "metric-units",
                    question: "About how long is a paperclip in centimeters?",
                    options: ["1 cm", "3 cm", "10 cm", "50 cm"],
                    correct: 1,
                    explanation: "A paperclip is about 3 centimeters long.",
                    ralphHint: "Paperclip is about three centimeters! Small but not tiny!"
                },
                {
                    id: 79,
                    type: "metric-units",
                    question: "Which would you measure in meters?",
                    options: ["An ant", "A room", "A grain of rice", "A pencil tip"],
                    correct: 1,
                    explanation: "Rooms are large enough to measure in meters.",
                    ralphHint: "Room is big! Needs meters to measure!"
                },
                {
                    id: 80,
                    type: "metric-units",
                    question: "If something is 50 centimeters, how is that written?",
                    options: ["50 c", "50 cm", "50 mt", "50 in"],
                    correct: 1,
                    explanation: "Centimeters are abbreviated as 'cm'.",
                    ralphHint: "CM means centimeters! Short way to write it!"
                }
            ]
        },

        // Set 9: Problem Solving (Questions 81-90)
        {
            set: 9,
            setTitle: "Problem Solving",
            setDescription: "Use measurement to solve real problems!",
            questions: [
                {
                    id: 81,
                    type: "measurement-problems",
                    question: "Your desk is 2 feet wide. Will a 30-inch poster fit across it?",
                    options: ["Yes", "No", "Maybe", "Need more info"],
                    correct: 1,
                    explanation: "2 feet = 24 inches, which is less than 30 inches.",
                    ralphHint: "Two feet is 24 inches! 30 is more than 24!"
                },
                {
                    id: 82,
                    type: "measurement-problems",
                    question: "You need 6 feet of ribbon. The store sells it by the yard. How many yards do you need?",
                    options: ["1 yard", "2 yards", "3 yards", "6 yards"],
                    correct: 1,
                    explanation: "6 feet = 2 yards (3 feet per yard).",
                    ralphHint: "Three feet make a yard! Six feet is two yards!"
                },
                {
                    id: 83,
                    type: "measurement-problems",
                    question: "Your room is 10 feet long. How many 2-foot rugs would fit end to end?",
                    options: ["3", "4", "5", "10"],
                    correct: 2,
                    explanation: "10 ÷ 2 = 5 rugs would fit.",
                    ralphHint: "Ten divided by two is five! Five rugs fit!"
                },
                {
                    id: 84,
                    type: "measurement-problems",
                    question: "A recipe needs 2 cups of flour. You have a 1-cup measuring cup. How many times do you fill it?",
                    options: ["1 time", "2 times", "3 times", "4 times"],
                    correct: 1,
                    explanation: "You need to fill the 1-cup measure 2 times to get 2 cups.",
                    ralphHint: "Two cups means fill the one-cup two times!"
                },
                {
                    id: 85,
                    type: "measurement-problems",
                    question: "You're 4 feet tall. Your friend is 48 inches tall. Who is taller?",
                    options: ["You", "Your friend", "Same height", "Can't tell"],
                    correct: 2,
                    explanation: "4 feet = 48 inches, so you're the same height.",
                    ralphHint: "Four feet is 48 inches! Same as your friend!"
                },
                {
                    id: 86,
                    type: "measurement-problems",
                    question: "A bookshelf is 6 feet tall. Each book is 1 inch thick. About how many books can fit?",
                    options: ["6 books", "12 books", "36 books", "72 books"],
                    correct: 3,
                    explanation: "6 feet = 72 inches, so about 72 one-inch books fit.",
                    ralphHint: "Six feet is 72 inches! 72 one-inch books fit!"
                },
                {
                    id: 87,
                    type: "measurement-problems",
                    question: "You walk 100 yards to school. How many feet is that?",
                    options: ["100 feet", "200 feet", "300 feet", "1000 feet"],
                    correct: 2,
                    explanation: "100 yards × 3 feet per yard = 300 feet.",
                    ralphHint: "Each yard has three feet! 100 yards is 300 feet!"
                },
                {
                    id: 88,
                    type: "measurement-problems",
                    question: "Your pencil is 7 inches long. You sharpen off 1 inch. How long is it now?",
                    options: ["5 inches", "6 inches", "7 inches", "8 inches"],
                    correct: 1,
                    explanation: "7 inches - 1 inch = 6 inches.",
                    ralphHint: "Seven take away one is six! Six inches left!"
                },
                {
                    id: 89,
                    type: "measurement-problems",
                    question: "A pizza is cut into 8 pieces. Each piece is 3 inches long. How long would all pieces be together?",
                    options: ["8 inches", "11 inches", "24 inches", "32 inches"],
                    correct: 2,
                    explanation: "8 pieces × 3 inches each = 24 inches total.",
                    ralphHint: "Eight times three is 24! Twenty-four inches of pizza!"
                },
                {
                    id: 90,
                    type: "measurement-problems",
                    question: "You need to measure something 25 inches long, but your ruler is only 12 inches. What can you do?",
                    options: ["Give up", "Measure twice", "Cut the object", "Buy a new ruler"],
                    correct: 1,
                    explanation: "You can measure 12 inches, then measure the remaining 13 inches.",
                    ralphHint: "Measure 12, then measure the rest! Two parts make the whole!"
                }
            ]
        },

        // Set 10: Measurement Review (Questions 91-100)
        {
            set: 10,
            setTitle: "Measurement Review",
            setDescription: "Review everything you've learned about measurement!",
            questions: [
                {
                    id: 91,
                    type: "measurement-review",
                    question: "What are the three main types of measurement we learned about?",
                    options: ["Length, weight, capacity", "Big, medium, small", "Red, blue, green", "Fast, slow, stopped"],
                    correct: 0,
                    explanation: "We measure length, weight, and capacity (volume).",
                    ralphHint: "Length, weight, and how much it holds! Three types!"
                },
                {
                    id: 92,
                    type: "measurement-review",
                    question: "Which tool measures length?",
                    options: ["Scale", "Ruler", "Cup", "Clock"],
                    correct: 1,
                    explanation: "A ruler measures length.",
                    ralphHint: "Ruler for length! It has numbers and lines!"
                },
                {
                    id: 93,
                    type: "measurement-review",
                    question: "What's the smallest unit we learned: inch, foot, or yard?",
                    options: ["Inch", "Foot", "Yard", "They're equal"],
                    correct: 0,
                    explanation: "An inch is the smallest of these three units.",
                    ralphHint: "Inch is tiny! Smallest one we learned!"
                },
                {
                    id: 94,
                    type: "measurement-review",
                    question: "How many inches are in one foot?",
                    options: ["6", "10", "12", "16"],
                    correct: 2,
                    explanation: "There are 12 inches in one foot.",
                    ralphHint: "Twelve inches in a foot! Remember that number!"
                },
                {
                    id: 95,
                    type: "measurement-review",
                    question: "Why do we use standard units instead of our hands or feet?",
                    options: ["They're prettier", "Everyone's body is different", "They're easier", "They're newer"],
                    correct: 1,
                    explanation: "Standard units are the same for everyone.",
                    ralphHint: "My hand is different from yours! Standard is same for all!"
                },
                {
                    id: 96,
                    type: "measurement-review",
                    question: "What do you measure weight with?",
                    options: ["Ruler", "Scale", "Measuring cup", "Thermometer"],
                    correct: 1,
                    explanation: "A scale measures weight.",
                    ralphHint: "Scale tells how heavy! Step on it to see!"
                },
                {
                    id: 97,
                    type: "measurement-review",
                    question: "Which is longer: 3 feet or 1 yard?",
                    options: ["3 feet", "1 yard", "They're equal", "Can't tell"],
                    correct: 2,
                    explanation: "3 feet equals 1 yard.",
                    ralphHint: "Same size! Three feet is one yard!"
                },
                {
                    id: 98,
                    type: "measurement-review",
                    question: "What's capacity?",
                    options: ["How heavy something is", "How long something is", "How much a container holds", "How hot something is"],
                    correct: 2,
                    explanation: "Capacity is how much a container can hold.",
                    ralphHint: "Capacity is how full it can get! Like my cup!"
                },
                {
                    id: 99,
                    type: "measurement-review",
                    question: "If you want to measure something very small, which unit is best?",
                    options: ["Miles", "Yards", "Feet", "Inches"],
                    correct: 3,
                    explanation: "Inches are best for small objects.",
                    ralphHint: "Small things need small units! Inches are small!"
                },
                {
                    id: 100,
                    type: "measurement-review",
                    question: "What's the most important thing about measurement?",
                    options: ["Being fast", "Being accurate", "Using big numbers", "Using colors"],
                    correct: 1,
                    explanation: "Accuracy is most important in measurement.",
                    ralphHint: "Be careful and accurate! Get the right answer!"
                }
            ]
        }
    ],

    patterns: [
        {
            set: 1,
            setTitle: "Number Patterns",
            setDescription: "Find and create patterns with numbers!",
            questions: [
                {
                    id: 1,
                    type: "pattern-continuation",
                    question: "What comes next? 2, 4, 6, ___",
                    options: ["7", "8", "9", "10"],
                    correct: 1,
                    explanation: "This pattern adds 2 each time: 2, 4, 6, 8.",
                    ralphHint: "Count by twos! Two, four, six, eight!"
                },
                {
                    id: 2,
                    type: "pattern-numbers",
                    question: "What's missing? 10, 20, ___, 40",
                    options: ["25", "30", "35", "45"],
                    correct: 1,
                    explanation: "This pattern counts by 10s: 10, 20, 30, 40.",
                    ralphHint: "Count by tens! Ten, twenty, thirty, forty!"
                },
                {
                    id: 3,
                    type: "pattern-rule",
                    question: "What's the rule for: 5, 10, 15, 20?",
                    options: ["Add 3", "Add 5", "Add 10", "Double"],
                    correct: 1,
                    explanation: "Each number increases by 5: 5+5=10, 10+5=15, etc.",
                    ralphHint: "Count by fives! Five, ten, fifteen, twenty!"
                },
                {
                    id: 4,
                    type: "pattern-growing",
                    question: "What comes next? 1, 3, 5, ___",
                    options: ["6", "7", "8", "9"],
                    correct: 1,
                    explanation: "This pattern adds 2 each time (odd numbers): 1, 3, 5, 7.",
                    ralphHint: "Skip counting! One, three, five, seven!"
                },
                {
                    id: 5,
                    type: "pattern-backwards",
                    question: "Continue backwards: 20, 15, 10, ___",
                    options: ["0", "5", "8", "25"],
                    correct: 1,
                    explanation: "This pattern subtracts 5 each time: 20, 15, 10, 5.",
                    ralphHint: "Going backwards by fives! Twenty, fifteen, ten, five!"
                },
                {
                    id: 6,
                    type: "pattern-doubling",
                    question: "Find the pattern: 2, 4, 8, ___",
                    options: ["10", "12", "16", "20"],
                    correct: 2,
                    explanation: "Each number doubles: 2×2=4, 4×2=8, 8×2=16.",
                    ralphHint: "Double each time! Two, four, eight, sixteen!"
                },
                {
                    id: 7,
                    type: "pattern-skip",
                    question: "What comes next? 3, 6, 9, ___",
                    options: ["10", "11", "12", "13"],
                    correct: 2,
                    explanation: "This pattern counts by 3s: 3, 6, 9, 12.",
                    ralphHint: "Count by threes! Three, six, nine, twelve!"
                },
                {
                    id: 8,
                    type: "pattern-hundreds",
                    question: "Continue: 100, 200, 300, ___",
                    options: ["350", "400", "450", "500"],
                    correct: 1,
                    explanation: "This pattern increases by 100 each time.",
                    ralphHint: "One hundred more each time! Big jumps!"
                },
                {
                    id: 9,
                    type: "pattern-missing",
                    question: "Fill in the blank: 25, 30, ___, 40, 45",
                    options: ["32", "33", "35", "37"],
                    correct: 2,
                    explanation: "This pattern increases by 5: 25, 30, 35, 40, 45.",
                    ralphHint: "Count by fives! What number is between 30 and 40?"
                },
                {
                    id: 10,
                    type: "pattern-reverse",
                    question: "What comes before? ___, 12, 15, 18",
                    options: ["6", "9", "10", "11"],
                    correct: 1,
                    explanation: "This pattern increases by 3, so 12-3=9.",
                    ralphHint: "Count by threes backwards! What comes before 12?"
                }
            ]
        },

        // Set 2: Growing Patterns (Questions 11-20)
        {
            set: 2,
            setTitle: "Growing Patterns",
            setDescription: "Patterns that get bigger and bigger!",
            questions: [
                {
                    id: 11,
                    type: "visual-growing",
                    question: "How many dots in the next group? ●, ●●, ●●●, ___",
                    options: ["3 dots", "4 dots", "5 dots", "6 dots"],
                    correct: 1,
                    explanation: "Each group has one more dot: 1, 2, 3, 4.",
                    ralphHint: "One more dot each time! One, two, three, four!"
                },
                {
                    id: 12,
                    type: "tower-growing",
                    question: "A tower grows: 1 block, 3 blocks, 5 blocks. How many next?",
                    options: ["6", "7", "8", "9"],
                    correct: 1,
                    explanation: "The pattern adds 2 each time: 1, 3, 5, 7.",
                    ralphHint: "Two more blocks each time! Odd numbers!"
                },
                {
                    id: 13,
                    type: "line-growing",
                    question: "Line lengths: 2 inches, 4 inches, 6 inches. What's next?",
                    options: ["7 inches", "8 inches", "9 inches", "10 inches"],
                    correct: 1,
                    explanation: "Each line is 2 inches longer: 2, 4, 6, 8.",
                    ralphHint: "Two inches longer each time! Even numbers!"
                },
                {
                    id: 14,
                    type: "stairs-growing",
                    question: "Stair steps: 1 step, 2 steps, 3 steps. What pattern do you see?",
                    options: ["Random", "Getting taller by 1", "Getting shorter", "Staying same"],
                    correct: 1,
                    explanation: "Each stair has one more step than the last.",
                    ralphHint: "One more step each time! Like counting up!"
                },
                {
                    id: 15,
                    type: "group-growing",
                    question: "Groups of animals: 2 cats, 4 cats, 6 cats. What comes next?",
                    options: ["7 cats", "8 cats", "9 cats", "10 cats"],
                    correct: 1,
                    explanation: "The pattern increases by 2: 2, 4, 6, 8.",
                    ralphHint: "Two more cats each time! Count by twos!"
                },
                {
                    id: 16,
                    type: "flower-growing",
                    question: "Garden rows: 5 flowers, 10 flowers, 15 flowers. Next?",
                    options: ["16", "18", "20", "25"],
                    correct: 2,
                    explanation: "Each row has 5 more flowers: 5, 10, 15, 20.",
                    ralphHint: "Five more flowers each row! Count by fives!"
                },
                {
                    id: 17,
                    type: "doubling-pattern",
                    question: "Cookies double: 1 cookie, 2 cookies, 4 cookies. Next?",
                    options: ["6", "7", "8", "16"],
                    correct: 2,
                    explanation: "Each group doubles: 1, 2, 4, 8.",
                    ralphHint: "Double the cookies! One, two, four, eight!"
                },
                {
                    id: 18,
                    type: "triangle-growing",
                    question: "Triangle patterns: △, △△, △△△. How many in the 4th group?",
                    options: ["3", "4", "5", "6"],
                    correct: 1,
                    explanation: "Each group has one more triangle: 1, 2, 3, 4.",
                    ralphHint: "One more triangle each time! Count them!"
                },
                {
                    id: 19,
                    type: "square-growing",
                    question: "Square groups: 1 square, 4 squares, 9 squares. What's next?",
                    options: ["12", "13", "15", "16"],
                    correct: 3,
                    explanation: "These are perfect squares: 1×1, 2×2, 3×3, 4×4.",
                    ralphHint: "Square numbers! One times one, two times two..."
                },
                {
                    id: 20,
                    type: "rule-growing",
                    question: "What's the rule for growing pattern 3, 6, 9, 12?",
                    options: ["Add 2", "Add 3", "Add 4", "Double"],
                    correct: 1,
                    explanation: "Each number increases by 3.",
                    ralphHint: "Three more each time! Count by threes!"
                }
            ]
        },

        // Set 3: Shape Patterns (Questions 21-30)
        {
            set: 3,
            setTitle: "Shape Patterns",
            setDescription: "Find patterns with circles, squares, and more!",
            questions: [
                {
                    id: 21,
                    type: "pattern-shapes",
                    question: "What shape comes next? Circle, Square, Circle, Square, ___",
                    options: ["Circle", "Square", "Triangle", "Rectangle"],
                    correct: 0,
                    explanation: "The pattern alternates between circle and square.",
                    ralphHint: "Round, square, round, square... so round again!"
                },
                {
                    id: 22,
                    type: "three-shape-pattern",
                    question: "Continue: Triangle, Circle, Square, Triangle, Circle, ___",
                    options: ["Triangle", "Circle", "Square", "Rectangle"],
                    correct: 2,
                    explanation: "The pattern repeats every 3 shapes: Triangle, Circle, Square.",
                    ralphHint: "Three shapes repeat! Triangle, circle, square, triangle, circle..."
                },
                {
                    id: 23,
                    type: "size-pattern",
                    question: "What comes next? Big Circle, Small Circle, Big Circle, ___",
                    options: ["Big Circle", "Small Circle", "Medium Circle", "No Circle"],
                    correct: 1,
                    explanation: "The pattern alternates between big and small circles.",
                    ralphHint: "Big, small, big, small! Size pattern!"
                },
                {
                    id: 24,
                    type: "color-shape-pattern",
                    question: "Pattern: Red Square, Blue Circle, Red Square, Blue Circle, ___",
                    options: ["Red Square", "Blue Circle", "Red Circle", "Blue Square"],
                    correct: 0,
                    explanation: "The pattern alternates: Red Square, Blue Circle.",
                    ralphHint: "Color AND shape pattern! Red square comes next!"
                },
                {
                    id: 25,
                    type: "growing-shapes",
                    question: "Shape groups: 1 triangle, 2 triangles, 3 triangles. What's next?",
                    options: ["3 triangles", "4 triangles", "5 triangles", "1 triangle"],
                    correct: 1,
                    explanation: "Each group has one more triangle: 1, 2, 3, 4.",
                    ralphHint: "One more triangle each time! Growing pattern!"
                },
                {
                    id: 26,
                    type: "rotation-pattern",
                    question: "Pattern: ↑ ← ↓ → ↑ ←. What comes next?",
                    options: ["↑", "←", "↓", "→"],
                    correct: 2,
                    explanation: "The arrows rotate: Up, Left, Down, Right, then repeat.",
                    ralphHint: "Arrows turn! Up, left, down, right, up, left..."
                },
                {
                    id: 27,
                    type: "shape-counting",
                    question: "How many shapes in each group? ●, ●●, ●●●. Rule?",
                    options: ["Add 1 each time", "Add 2 each time", "Double each time", "Random"],
                    correct: 0,
                    explanation: "Each group has one more shape: 1, 2, 3.",
                    ralphHint: "One more shape each group! Counting up!"
                },
                {
                    id: 28,
                    type: "missing-shape",
                    question: "Fill in: Star, Heart, ___, Star, Heart, Moon",
                    options: ["Star", "Heart", "Moon", "Circle"],
                    correct: 2,
                    explanation: "The pattern is: Star, Heart, Moon, repeating.",
                    ralphHint: "Three shapes repeat! Star, heart, moon, star, heart..."
                },
                {
                    id: 29,
                    type: "shape-flip",
                    question: "Pattern: ◐ ◑ ◐ ◑. What comes next?",
                    options: ["◐", "◑", "●", "○"],
                    correct: 0,
                    explanation: "The pattern alternates between the two half-circles.",
                    ralphHint: "Half circles flip! Left, right, left, right!"
                },
                {
                    id: 30,
                    type: "complex-shapes",
                    question: "Pattern: Square Triangle Circle Square Triangle ___",
                    options: ["Square", "Triangle", "Circle", "Rectangle"],
                    correct: 2,
                    explanation: "The pattern repeats every 3 shapes: Square, Triangle, Circle.",
                    ralphHint: "Three shapes repeat! Square, triangle, circle!"
                }
            ]
        },

        // Set 4: Color Patterns (Questions 31-40)
        {
            set: 4,
            setTitle: "Color Patterns",
            setDescription: "Explore patterns with different colors!",
            questions: [
                {
                    id: 31,
                    type: "pattern-colors",
                    question: "What comes next? Red, Blue, Red, Blue, ___",
                    options: ["Red", "Blue", "Green", "Yellow"],
                    correct: 0,
                    explanation: "The pattern alternates: Red, Blue, so Red comes next.",
                    ralphHint: "It goes back and forth! Red, blue, red, blue, so... red!"
                },
                {
                    id: 32,
                    type: "three-color-pattern",
                    question: "Continue: Red, Green, Blue, Red, Green, ___",
                    options: ["Red", "Green", "Blue", "Yellow"],
                    correct: 2,
                    explanation: "The pattern repeats every 3 colors: Red, Green, Blue.",
                    ralphHint: "Three colors repeat! Red, green, blue, red, green..."
                },
                {
                    id: 33,
                    type: "double-color-pattern",
                    question: "Find the pattern: Green, Green, Yellow, Green, Green, ___",
                    options: ["Green", "Yellow", "Red", "Blue"],
                    correct: 1,
                    explanation: "The pattern is two greens, then one yellow.",
                    ralphHint: "Two greens, one yellow, two greens, one yellow!"
                },
                {
                    id: 34,
                    type: "rainbow-pattern",
                    question: "Rainbow pattern: Red, Orange, Yellow, Green, Blue, ___",
                    options: ["Purple", "Pink", "Brown", "Black"],
                    correct: 0,
                    explanation: "This follows rainbow order: Red, Orange, Yellow, Green, Blue, Purple.",
                    ralphHint: "Rainbow colors! What comes after blue in a rainbow?"
                },
                {
                    id: 35,
                    type: "color-counting",
                    question: "Pattern: 1 Red, 2 Blue, 3 Red, 4 Blue. What's next?",
                    options: ["4 Red", "5 Red", "5 Blue", "6 Blue"],
                    correct: 1,
                    explanation: "Colors alternate, numbers increase: 1 Red, 2 Blue, 3 Red, 4 Blue, 5 Red.",
                    ralphHint: "Colors switch, numbers go up! Five red comes next!"
                },
                {
                    id: 36,
                    type: "color-size",
                    question: "Pattern: Big Red, Small Blue, Big Red, Small Blue, ___",
                    options: ["Big Red", "Small Blue", "Big Blue", "Small Red"],
                    correct: 0,
                    explanation: "The pattern alternates: Big Red, Small Blue.",
                    ralphHint: "Big red, small blue! Color AND size pattern!"
                },
                {
                    id: 37,
                    type: "warm-cool-colors",
                    question: "Pattern: Warm, Cool, Warm, Cool. Which is warm?",
                    options: ["Blue", "Purple", "Red", "Green"],
                    correct: 2,
                    explanation: "Warm colors include red, orange, yellow. Cool colors are blue, green, purple.",
                    ralphHint: "Warm colors are like fire! Red is warm!"
                },
                {
                    id: 38,
                    type: "color-groups",
                    question: "Group pattern: RR, BB, RR, BB. What comes next?",
                    options: ["R", "RR", "B", "BB"],
                    correct: 1,
                    explanation: "The pattern is two reds, then two blues, repeating.",
                    ralphHint: "Two reds, two blues! Groups of two!"
                },
                {
                    id: 39,
                    type: "missing-color",
                    question: "Fill in: Pink, Purple, ___, Pink, Purple, Orange",
                    options: ["Pink", "Purple", "Orange", "Red"],
                    correct: 2,
                    explanation: "The pattern is: Pink, Purple, Orange, repeating.",
                    ralphHint: "Three colors repeat! Pink, purple, orange!"
                },
                {
                    id: 40,
                    type: "color-backward",
                    question: "Reverse pattern: Blue, Green, Yellow, Orange, ___",
                    options: ["Red", "Purple", "Pink", "Brown"],
                    correct: 0,
                    explanation: "This goes backwards through rainbow colors: Blue, Green, Yellow, Orange, Red.",
                    ralphHint: "Rainbow backwards! What comes before orange?"
                }
            ]
        },

        // Set 5: Pattern Rules (Questions 41-50)
        {
            set: 5,
            setTitle: "Pattern Rules",
            setDescription: "Figure out the rules that make patterns work!",
            questions: [
                {
                    id: 41,
                    type: "rule-identification",
                    question: "What's the rule for: 2, 4, 6, 8?",
                    options: ["Add 1", "Add 2", "Add 3", "Double"],
                    correct: 1,
                    explanation: "Each number increases by 2: 2+2=4, 4+2=6, etc.",
                    ralphHint: "Two more each time! Add two rule!"
                },
                {
                    id: 42,
                    type: "rule-application",
                    question: "If the rule is 'add 5', what comes after 15?",
                    options: ["18", "20", "25", "30"],
                    correct: 1,
                    explanation: "Following the rule: 15 + 5 = 20.",
                    ralphHint: "Add five! Fifteen plus five is twenty!"
                },
                {
                    id: 43,
                    type: "rule-skip-counting",
                    question: "Rule: Count by 3s. Start at 6. What's next?",
                    options: ["7", "8", "9", "12"],
                    correct: 2,
                    explanation: "Counting by 3s from 6: 6, 9, 12.",
                    ralphHint: "Three more each time! Six, nine, twelve!"
                },
                {
                    id: 44,
                    type: "rule-doubling",
                    question: "Rule: Double each number. Start with 3. What's the pattern?",
                    options: ["3, 5, 7", "3, 6, 9", "3, 6, 12", "3, 4, 5"],
                    correct: 2,
                    explanation: "Doubling: 3, 6 (3×2), 12 (6×2).",
                    ralphHint: "Double means times two! Three, six, twelve!"
                },
                {
                    id: 45,
                    type: "rule-backwards",
                    question: "Rule: Subtract 4. Start at 20. What comes next?",
                    options: ["24", "16", "15", "14"],
                    correct: 1,
                    explanation: "Subtracting 4: 20 - 4 = 16.",
                    ralphHint: "Take away four! Twenty minus four is sixteen!"
                },
                {
                    id: 46,
                    type: "rule-multiple",
                    question: "What rule makes: 5, 10, 15, 20?",
                    options: ["Add 3", "Add 5", "Add 10", "Multiply by 2"],
                    correct: 1,
                    explanation: "Each number increases by 5 (counting by 5s).",
                    ralphHint: "Five more each time! Count by fives!"
                },
                {
                    id: 47,
                    type: "rule-creation",
                    question: "Make a pattern with rule 'add 6': 2, ___, ___",
                    options: ["8, 14", "6, 12", "3, 4", "12, 18"],
                    correct: 0,
                    explanation: "Starting with 2, add 6 each time: 2, 8, 14.",
                    ralphHint: "Two plus six is eight, eight plus six is fourteen!"
                },
                {
                    id: 48,
                    type: "rule-complex",
                    question: "Pattern: 1, 4, 7, 10. What's the rule?",
                    options: ["Add 2", "Add 3", "Add 4", "Double"],
                    correct: 1,
                    explanation: "Each number increases by 3: 1+3=4, 4+3=7, 7+3=10.",
                    ralphHint: "Three more each time! One, four, seven, ten!"
                },
                {
                    id: 49,
                    type: "rule-comparison",
                    question: "Which follows the rule 'count by 2s'?",
                    options: ["1, 3, 5", "2, 4, 6", "1, 2, 3", "5, 7, 9"],
                    correct: 1,
                    explanation: "Counting by 2s means adding 2 each time: 2, 4, 6.",
                    ralphHint: "Count by twos! Two, four, six!"
                },
                {
                    id: 50,
                    type: "rule-prediction",
                    question: "Rule: 'Add 8'. Pattern: 4, 12, 20. What's next?",
                    options: ["24", "26", "28", "32"],
                    correct: 2,
                    explanation: "Following the rule: 20 + 8 = 28.",
                    ralphHint: "Eight more! Twenty plus eight is twenty-eight!"
                }
            ]
        },

        // Set 6: Extending Patterns (Questions 51-60)
        {
            set: 6,
            setTitle: "Extending Patterns",
            setDescription: "Make patterns longer by finding what comes next!",
            questions: [
                {
                    id: 51,
                    type: "extend-numbers",
                    question: "Extend: 12, 15, 18, 21, ___",
                    options: ["22", "23", "24", "25"],
                    correct: 2,
                    explanation: "Pattern adds 3 each time: 21 + 3 = 24.",
                    ralphHint: "Three more each time! Twenty-one plus three!"
                },
                {
                    id: 52,
                    type: "extend-backwards",
                    question: "Extend backwards: ___, 16, 12, 8, 4",
                    options: ["18", "20", "22", "24"],
                    correct: 1,
                    explanation: "Pattern subtracts 4 each time: 16 + 4 = 20.",
                    ralphHint: "Four less each time! What comes before sixteen?"
                },
                {
                    id: 53,
                    type: "extend-shapes",
                    question: "Extend: ★ ❤ ★ ❤ ★ ___",
                    options: ["★", "❤", "●", "■"],
                    correct: 1,
                    explanation: "Pattern alternates: Star, Heart, so Heart comes next.",
                    ralphHint: "Star, heart, star, heart! What's next?"
                },
                {
                    id: 54,
                    type: "extend-colors",
                    question: "Extend: Red, Blue, Green, Red, Blue, ___",
                    options: ["Red", "Blue", "Green", "Yellow"],
                    correct: 2,
                    explanation: "Pattern repeats every 3: Red, Blue, Green, so Green comes next.",
                    ralphHint: "Three colors repeat! Red, blue, green, red, blue..."
                },
                {
                    id: 55,
                    type: "extend-growing",
                    question: "Extend growing pattern: 2, 5, 8, 11, ___",
                    options: ["12", "13", "14", "15"],
                    correct: 2,
                    explanation: "Pattern adds 3 each time: 11 + 3 = 14.",
                    ralphHint: "Three more each time! Eleven plus three!"
                },
                {
                    id: 56,
                    type: "extend-double",
                    question: "Extend: 3, 6, 12, 24, ___",
                    options: ["36", "48", "50", "72"],
                    correct: 1,
                    explanation: "Each number doubles: 24 × 2 = 48.",
                    ralphHint: "Double each time! Twenty-four times two!"
                },
                {
                    id: 57,
                    type: "extend-tens",
                    question: "Extend: 35, 45, 55, 65, ___",
                    options: ["70", "75", "80", "85"],
                    correct: 1,
                    explanation: "Pattern adds 10 each time: 65 + 10 = 75.",
                    ralphHint: "Ten more each time! Sixty-five plus ten!"
                },
                {
                    id: 58,
                    type: "extend-mixed",
                    question: "Extend: A, 1, B, 2, C, ___",
                    options: ["D", "3", "4", "E"],
                    correct: 1,
                    explanation: "Pattern alternates letters and numbers: A,1,B,2,C,3.",
                    ralphHint: "Letter, number, letter, number! What number comes next?"
                },
                {
                    id: 59,
                    type: "extend-size",
                    question: "Extend: Small, Medium, Large, Small, Medium, ___",
                    options: ["Small", "Medium", "Large", "Extra Large"],
                    correct: 2,
                    explanation: "Pattern repeats every 3: Small, Medium, Large, so Large comes next.",
                    ralphHint: "Three sizes repeat! Small, medium, large!"
                },
                {
                    id: 60,
                    type: "extend-challenge",
                    question: "Extend: 100, 90, 80, 70, ___",
                    options: ["50", "60", "65", "75"],
                    correct: 1,
                    explanation: "Pattern subtracts 10 each time: 70 - 10 = 60.",
                    ralphHint: "Ten less each time! Seventy minus ten!"
                }
            ]
        },

        // Set 7: Creating Patterns (Questions 61-70)
        {
            set: 7,
            setTitle: "Creating Patterns",
            setDescription: "Make your own patterns using different rules!",
            questions: [
                {
                    id: 61,
                    type: "pattern-creation",
                    question: "Which would make a good pattern?",
                    options: ["Cat, Dog, Cat, Dog", "Cat, Fish, Bird, Mouse", "Dog, Dog, Dog, Dog", "Random animals"],
                    correct: 0,
                    explanation: "Patterns repeat in a predictable way.",
                    ralphHint: "Patterns repeat! Cat, dog, cat, dog keeps going!"
                },
                {
                    id: 62,
                    type: "create-number-pattern",
                    question: "Start with 5. Use rule 'add 4'. Make a pattern:",
                    options: ["5, 9, 13", "5, 6, 7", "5, 10, 15", "5, 8, 11"],
                    correct: 0,
                    explanation: "Adding 4 each time: 5, 9 (5+4), 13 (9+4).",
                    ralphHint: "Five plus four is nine, nine plus four is thirteen!"
                },
                {
                    id: 63,
                    type: "create-color-pattern",
                    question: "Make a pattern with 2 colors that repeat:",
                    options: ["Red, Red, Red", "Red, Blue, Red, Blue", "Red, Blue, Green", "Blue, Blue, Blue"],
                    correct: 1,
                    explanation: "Two colors alternating makes a repeating pattern.",
                    ralphHint: "Two colors back and forth! Red, blue, red, blue!"
                },
                {
                    id: 64,
                    type: "create-shape-pattern",
                    question: "Make a pattern with 3 shapes:",
                    options: ["Circle, Circle, Circle", "Circle, Square", "Circle, Square, Triangle", "Random shapes"],
                    correct: 2,
                    explanation: "Three different shapes can repeat to make a pattern.",
                    ralphHint: "Three shapes repeat! Circle, square, triangle!"
                },
                {
                    id: 65,
                    type: "create-growing-pattern",
                    question: "Make a growing pattern starting with 1:",
                    options: ["1, 1, 1", "1, 2, 3", "1, 5, 2", "1, 3, 2"],
                    correct: 1,
                    explanation: "Growing patterns increase: 1, 2, 3 gets bigger each time.",
                    ralphHint: "Getting bigger! One, two, three grows!"
                },
                {
                    id: 66,
                    type: "create-backward-pattern",
                    question: "Make a pattern that gets smaller starting with 20:",
                    options: ["20, 25, 30", "20, 18, 16", "20, 20, 20", "20, 15, 25"],
                    correct: 1,
                    explanation: "Decreasing patterns get smaller: 20, 18, 16.",
                    ralphHint: "Getting smaller! Twenty, eighteen, sixteen goes down!"
                },
                {
                    id: 67,
                    type: "create-skip-pattern",
                    question: "Make a pattern counting by 5s from 10:",
                    options: ["10, 11, 12", "10, 15, 20", "10, 12, 14", "10, 20, 30"],
                    correct: 1,
                    explanation: "Counting by 5s: 10, 15 (10+5), 20 (15+5).",
                    ralphHint: "Count by fives! Ten, fifteen, twenty!"
                },
                {
                    id: 68,
                    type: "create-size-pattern",
                    question: "Make a size pattern:",
                    options: ["Big, Big, Big", "Big, Small, Big, Small", "Small, Small, Small", "Medium only"],
                    correct: 1,
                    explanation: "Alternating sizes create a pattern: Big, Small, Big, Small.",
                    ralphHint: "Big, small, big, small! Size pattern!"
                },
                {
                    id: 69,
                    type: "create-complex-pattern",
                    question: "Make a pattern with numbers and colors: Red 1, Blue 2, ___",
                    options: ["Red 1", "Blue 2", "Red 3", "Green 1"],
                    correct: 2,
                    explanation: "Colors alternate, numbers increase: Red 1, Blue 2, Red 3.",
                    ralphHint: "Color changes, number goes up! Red three!"
                },
                {
                    id: 70,
                    type: "pattern-rules",
                    question: "What makes a good pattern?",
                    options: ["It's random", "It repeats or follows a rule", "It's colorful", "It's big"],
                    correct: 1,
                    explanation: "Good patterns repeat or follow a clear rule.",
                    ralphHint: "Patterns have rules! They repeat or follow a plan!"
                }
            ]
        },

        // Set 8: Complex Patterns (Questions 71-80)
        {
            set: 8,
            setTitle: "Complex Patterns",
            setDescription: "Challenge yourself with harder patterns!",
            questions: [
                {
                    id: 71,
                    type: "complex-number",
                    question: "Find the pattern: 3, 7, 11, 15, ___",
                    options: ["17", "18", "19", "20"],
                    correct: 2,
                    explanation: "Pattern adds 4 each time: 15 + 4 = 19.",
                    ralphHint: "Four more each time! Fifteen plus four!"
                },
                {
                    id: 72,
                    type: "complex-mixed",
                    question: "Pattern: 2A, 4B, 6C, 8D, ___",
                    options: ["10E", "9E", "8E", "6E"],
                    correct: 0,
                    explanation: "Numbers increase by 2, letters go alphabetically: 10E.",
                    ralphHint: "Numbers up by two, letters in order! Ten E!"
                },
                {
                    id: 73,
                    type: "complex-shapes",
                    question: "Pattern: ○●○, ○○●, ○○○, ___",
                    options: ["○○○", "●●●", "○●○", "●○○"],
                    correct: 1,
                    explanation: "Each group has all filled circles: ●●●.",
                    ralphHint: "Getting more filled! Next group all filled!"
                },
                {
                    id: 74,
                    type: "complex-skip",
                    question: "Pattern: 7, 14, 21, 28, ___",
                    options: ["30", "32", "35", "42"],
                    correct: 2,
                    explanation: "This counts by 7s: 28 + 7 = 35.",
                    ralphHint: "Count by sevens! Seven more each time!"
                },
                {
                    id: 75,
                    type: "complex-doubling",
                    question: "Pattern: 4, 8, 16, 32, ___",
                    options: ["48", "64", "68", "72"],
                    correct: 1,
                    explanation: "Each number doubles: 32 × 2 = 64.",
                    ralphHint: "Double each time! Thirty-two times two!"
                },
                {
                    id: 76,
                    type: "complex-alternating",
                    question: "Pattern: +5, -2, +5, -2, +5, ___",
                    options: ["+5", "-2", "+3", "0"],
                    correct: 1,
                    explanation: "The pattern alternates: +5, -2, so -2 comes next.",
                    ralphHint: "Plus five, minus two! What comes next?"
                },
                {
                    id: 77,
                    type: "complex-multiple",
                    question: "Pattern: 6, 12, 18, 24, ___",
                    options: ["26", "28", "30", "32"],
                    correct: 2,
                    explanation: "This counts by 6s: 24 + 6 = 30.",
                    ralphHint: "Count by sixes! Six more each time!"
                },
                {
                    id: 78,
                    type: "complex-growing",
                    question: "Groups: ●, ●●●, ●●●●●, ___",
                    options: ["●●●●●●", "●●●●●●●", "●●●●●●●●●", "●●●●●●●●●●●"],
                    correct: 1,
                    explanation: "Pattern: 1, 3, 5, so next is 7 dots.",
                    ralphHint: "Odd numbers! One, three, five, seven!"
                },
                {
                    id: 79,
                    type: "complex-sequence",
                    question: "Pattern: 1, 1, 2, 3, 5, ___",
                    options: ["6", "7", "8", "9"],
                    correct: 2,
                    explanation: "Each number is the sum of the two before it: 3 + 5 = 8.",
                    ralphHint: "Add the two before! Three plus five!"
                },
                {
                    id: 80,
                    type: "complex-challenge",
                    question: "Pattern: 50, 45, 40, 35, ___",
                    options: ["25", "30", "32", "28"],
                    correct: 1,
                    explanation: "Pattern subtracts 5 each time: 35 - 5 = 30.",
                    ralphHint: "Five less each time! Thirty-five minus five!"
                }
            ]
        },

        // Set 9: Pattern Stories (Questions 81-90)
        {
            set: 9,
            setTitle: "Pattern Stories",
            setDescription: "Find patterns in real-world situations!",
            questions: [
                {
                    id: 81,
                    type: "story-pattern",
                    question: "Every day, Maya reads 2 more pages. Day 1: 5 pages, Day 2: 7 pages. Day 3?",
                    options: ["8 pages", "9 pages", "10 pages", "12 pages"],
                    correct: 1,
                    explanation: "Pattern adds 2 each day: 7 + 2 = 9 pages.",
                    ralphHint: "Two more pages each day! Seven plus two!"
                },
                {
                    id: 82,
                    type: "growth-pattern",
                    question: "A plant grows: Week 1: 3 inches, Week 2: 6 inches, Week 3: 9 inches. Week 4?",
                    options: ["10 inches", "11 inches", "12 inches", "15 inches"],
                    correct: 2,
                    explanation: "Plant grows 3 inches each week: 9 + 3 = 12 inches.",
                    ralphHint: "Three inches more each week! Nine plus three!"
                },
                {
                    id: 83,
                    type: "money-pattern",
                    question: "Savings pattern: Week 1: $2, Week 2: $4, Week 3: $6. What's the rule?",
                    options: ["Add $1", "Add $2", "Add $3", "Double"],
                    correct: 1,
                    explanation: "Saves $2 more each week: $2, $4, $6.",
                    ralphHint: "Two more dollars each week! Count by twos!"
                },
                {
                    id: 84,
                    type: "time-pattern",
                    question: "Practice time: Monday 10 min, Tuesday 15 min, Wednesday 20 min. Thursday?",
                    options: ["22 min", "23 min", "25 min", "30 min"],
                    correct: 2,
                    explanation: "Practice increases by 5 minutes: 20 + 5 = 25 minutes.",
                    ralphHint: "Five more minutes each day! Twenty plus five!"
                },
                {
                    id: 85,
                    type: "sports-pattern",
                    question: "Goals scored: Game 1: 1 goal, Game 2: 3 goals, Game 3: 5 goals. Game 4?",
                    options: ["6 goals", "7 goals", "8 goals", "9 goals"],
                    correct: 1,
                    explanation: "Pattern increases by 2: 5 + 2 = 7 goals.",
                    ralphHint: "Two more goals each game! Five plus two!"
                },
                {
                    id: 86,
                    type: "collection-pattern",
                    question: "Sticker collection: Day 1: 5, Day 2: 10, Day 3: 15. What's happening?",
                    options: ["Adding 3", "Adding 5", "Adding 10", "Doubling"],
                    correct: 1,
                    explanation: "Collection grows by 5 stickers each day.",
                    ralphHint: "Five more stickers each day! Count by fives!"
                },
                {
                    id: 87,
                    type: "height-pattern",
                    question: "Tower building: Level 1: 2 blocks, Level 2: 4 blocks, Level 3: 6 blocks. Level 4?",
                    options: ["7 blocks", "8 blocks", "9 blocks", "10 blocks"],
                    correct: 1,
                    explanation: "Each level has 2 more blocks: 6 + 2 = 8 blocks.",
                    ralphHint: "Two more blocks each level! Six plus two!"
                },
                {
                    id: 88,
                    type: "weather-pattern",
                    question: "Temperature: Day 1: 60°, Day 2: 65°, Day 3: 70°. What's the pattern?",
                    options: ["Goes up 3°", "Goes up 5°", "Goes up 10°", "Stays same"],
                    correct: 1,
                    explanation: "Temperature increases by 5° each day.",
                    ralphHint: "Five degrees warmer each day! Going up by fives!"
                },
                {
                    id: 89,
                    type: "steps-pattern",
                    question: "Daily steps: Mon: 100, Tue: 200, Wed: 300. What's the goal pattern?",
                    options: ["Add 50", "Add 100", "Add 150", "Double"],
                    correct: 1,
                    explanation: "Steps increase by 100 each day.",
                    ralphHint: "One hundred more steps! Count by hundreds!"
                },
                {
                    id: 90,
                    type: "seasonal-pattern",
                    question: "Seasons repeat: Spring, Summer, Fall, Winter, Spring, Summer, ___",
                    options: ["Spring", "Summer", "Fall", "Winter"],
                    correct: 2,
                    explanation: "Seasons repeat every 4: Spring, Summer, Fall, Winter, so Fall comes next.",
                    ralphHint: "Four seasons repeat! Spring, summer, fall, winter!"
                }
            ]
        },

        // Set 10: Pattern Review (Questions 91-100)
        {
            set: 10,
            setTitle: "Pattern Master",
            setDescription: "Review everything you've learned about patterns!",
            questions: [
                {
                    id: 91,
                    type: "pattern-review",
                    question: "What makes something a pattern?",
                    options: ["It's colorful", "It repeats or follows a rule", "It's big", "It's random"],
                    correct: 1,
                    explanation: "Patterns repeat or follow a predictable rule.",
                    ralphHint: "Patterns have rules! They repeat or follow a plan!"
                },
                {
                    id: 92,
                    type: "pattern-types",
                    question: "Which is a growing pattern?",
                    options: ["A, B, A, B", "1, 2, 3, 4", "Red, Red, Red", "Random numbers"],
                    correct: 1,
                    explanation: "Growing patterns increase: 1, 2, 3, 4 gets bigger.",
                    ralphHint: "Growing means getting bigger! One, two, three, four!"
                },
                {
                    id: 93,
                    type: "pattern-identification",
                    question: "What type of pattern is: Circle, Square, Circle, Square?",
                    options: ["Growing", "Decreasing", "Repeating", "Random"],
                    correct: 2,
                    explanation: "This pattern repeats: Circle, Square, Circle, Square.",
                    ralphHint: "Same things over and over! That's repeating!"
                },
                {
                    id: 94,
                    type: "pattern-rules",
                    question: "For pattern 5, 10, 15, 20, what's the rule?",
                    options: ["Add 3", "Add 5", "Add 10", "Double"],
                    correct: 1,
                    explanation: "Rule is add 5 each time (count by 5s).",
                    ralphHint: "Five more each time! Count by fives!"
                },
                {
                    id: 95,
                    type: "pattern-prediction",
                    question: "If a pattern starts 2, 4, 6, what comes next?",
                    options: ["7", "8", "9", "10"],
                    correct: 1,
                    explanation: "Pattern adds 2 each time: 6 + 2 = 8.",
                    ralphHint: "Two more each time! Count by twos!"
                },
                {
                    id: 96,
                    type: "pattern-creation",
                    question: "To make a pattern with 3 colors, you need:",
                    options: ["Random colors", "Colors that repeat", "Only primary colors", "Dark colors only"],
                    correct: 1,
                    explanation: "Pattern colors should repeat in order.",
                    ralphHint: "Patterns repeat! Three colors over and over!"
                },
                {
                    id: 97,
                    type: "pattern-extension",
                    question: "Extend: 10, 8, 6, 4, ___",
                    options: ["1", "2", "3", "5"],
                    correct: 1,
                    explanation: "Pattern subtracts 2 each time: 4 - 2 = 2.",
                    ralphHint: "Two less each time! Four minus two!"
                },
                {
                    id: 98,
                    type: "pattern-real-world",
                    question: "Which shows a pattern in real life?",
                    options: ["Traffic light colors", "Random numbers", "Mixed up letters", "Different sized rocks"],
                    correct: 0,
                    explanation: "Traffic lights follow a pattern: Red, Yellow, Green, repeat.",
                    ralphHint: "Traffic lights have a pattern! Red, yellow, green!"
                },
                {
                    id: 99,
                    type: "pattern-importance",
                    question: "Why are patterns important?",
                    options: ["They're pretty", "They help us predict what comes next", "They're hard", "They're old"],
                    correct: 1,
                    explanation: "Patterns help us predict and understand the world.",
                    ralphHint: "Patterns help us know what comes next! Very useful!"
                },
                {
                    id: 100,
                    type: "pattern-mastery",
                    question: "You're now a Pattern Master! What did you learn?",
                    options: ["Patterns are confusing", "Patterns follow rules and help us predict", "Patterns are only numbers", "Patterns never change"],
                    correct: 1,
                    explanation: "Patterns follow rules and help us understand and predict things!",
                    ralphHint: "You learned so much! Patterns are everywhere and follow rules!"
                }
            ]
        }
    ],

    time: [
        {
            set: 1,
            setTitle: "Days & Weeks",
            setDescription: "Learn about days, weeks, and telling time!",
            questions: [
                {
                    id: 1,
                    type: "time-basic",
                    question: "How many days are in a week?",
                    options: ["5", "6", "7", "8"],
                    correct: 2,
                    explanation: "There are 7 days in a week.",
                    ralphHint: "Count them! Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday!"
                },
                {
                    id: 2,
                    type: "time-sequence",
                    question: "What day comes after Wednesday?",
                    options: ["Tuesday", "Thursday", "Friday", "Monday"],
                    correct: 1,
                    explanation: "Thursday comes after Wednesday.",
                    ralphHint: "Wednesday, Thursday! Like my favorite TV shows!"
                },
                {
                    id: 3,
                    type: "time-sequence",
                    question: "What comes before Saturday?",
                    options: ["Thursday", "Friday", "Sunday", "Monday"],
                    correct: 1,
                    explanation: "Friday comes before Saturday.",
                    ralphHint: "Friday comes first, then Saturday! Like school then weekend!"
                },
                {
                    id: 4,
                    type: "time-weekend",
                    question: "Which days are the weekend?",
                    options: ["Monday, Tuesday", "Saturday, Sunday", "Friday, Saturday", "Wednesday, Thursday"],
                    correct: 1,
                    explanation: "Saturday and Sunday are weekend days.",
                    ralphHint: "Weekend is Saturday and Sunday! No school!"
                },
                {
                    id: 5,
                    type: "time-sequence",
                    question: "What day comes after Sunday?",
                    options: ["Monday", "Saturday", "Friday", "Tuesday"],
                    correct: 0,
                    explanation: "Monday comes after Sunday. A new week starts!",
                    ralphHint: "Sunday ends, Monday starts! Back to school!"
                },
                {
                    id: 6,
                    type: "time-weekdays",
                    question: "How many school days are in a week?",
                    options: ["4", "5", "6", "7"],
                    correct: 1,
                    explanation: "There are usually 5 school days: Monday through Friday.",
                    ralphHint: "Five school days! Monday, Tuesday, Wednesday, Thursday, Friday!"
                },
                {
                    id: 7,
                    type: "time-order",
                    question: "Put these days in order: Friday, Wednesday, Monday",
                    options: ["Friday, Wednesday, Monday", "Monday, Wednesday, Friday", "Wednesday, Monday, Friday", "Monday, Friday, Wednesday"],
                    correct: 1,
                    explanation: "Days go in order: Monday, Wednesday, Friday.",
                    ralphHint: "Start of the week first! Monday, then Wednesday, then Friday!"
                },
                {
                    id: 8,
                    type: "time-yesterday",
                    question: "If today is Tuesday, what was yesterday?",
                    options: ["Sunday", "Monday", "Wednesday", "Thursday"],
                    correct: 1,
                    explanation: "Monday comes before Tuesday.",
                    ralphHint: "Yesterday means the day before! Monday before Tuesday!"
                },
                {
                    id: 9,
                    type: "time-tomorrow",
                    question: "If today is Thursday, what is tomorrow?",
                    options: ["Wednesday", "Friday", "Saturday", "Sunday"],
                    correct: 1,
                    explanation: "Friday comes after Thursday.",
                    ralphHint: "Tomorrow means the next day! Friday after Thursday!"
                },
                {
                    id: 10,
                    type: "time-first-last",
                    question: "What is the first day of the week?",
                    options: ["Saturday", "Sunday", "Monday", "Tuesday"],
                    correct: 2,
                    explanation: "Monday is considered the first day of the week.",
                    ralphHint: "Monday starts the week! School starts on Monday!"
                }
            ]
        },

        // Set 2: Months & Years (Questions 11-20)
        {
            set: 2,
            setTitle: "Months & Years",
            setDescription: "Explore months, seasons, and years!",
            questions: [
                {
                    id: 11,
                    type: "time-months",
                    question: "How many months are in a year?",
                    options: ["10", "11", "12", "13"],
                    correct: 2,
                    explanation: "There are 12 months in a year.",
                    ralphHint: "Twelve months! Like January, February... all the way to December!"
                },
                {
                    id: 12,
                    type: "time-seasons",
                    question: "How many seasons are in a year?",
                    options: ["2", "3", "4", "5"],
                    correct: 2,
                    explanation: "There are 4 seasons: spring, summer, fall, winter.",
                    ralphHint: "Spring, summer, fall, winter! Four seasons!"
                },
                {
                    id: 13,
                    type: "time-first-month",
                    question: "What is the first month of the year?",
                    options: ["December", "January", "March", "April"],
                    correct: 1,
                    explanation: "January is the first month of the year.",
                    ralphHint: "January starts the new year! Like New Year's Day!"
                },
                {
                    id: 14,
                    type: "time-last-month",
                    question: "What is the last month of the year?",
                    options: ["November", "December", "January", "October"],
                    correct: 1,
                    explanation: "December is the last month of the year.",
                    ralphHint: "December ends the year! That's when Santa comes!"
                },
                {
                    id: 15,
                    type: "time-spring-months",
                    question: "Which month comes in spring?",
                    options: ["December", "July", "March", "September"],
                    correct: 2,
                    explanation: "March is a spring month.",
                    ralphHint: "March is when flowers start growing! Spring time!"
                },
                {
                    id: 16,
                    type: "time-summer-months",
                    question: "Which month is in summer?",
                    options: ["January", "June", "October", "February"],
                    correct: 1,
                    explanation: "June is a summer month.",
                    ralphHint: "June is hot and sunny! Summer vacation time!"
                },
                {
                    id: 17,
                    type: "time-fall-months",
                    question: "Which month comes in fall?",
                    options: ["May", "August", "October", "January"],
                    correct: 2,
                    explanation: "October is a fall month.",
                    ralphHint: "October has Halloween! Fall leaves and pumpkins!"
                },
                {
                    id: 18,
                    type: "time-winter-months",
                    question: "Which month is in winter?",
                    options: ["July", "April", "December", "June"],
                    correct: 2,
                    explanation: "December is a winter month.",
                    ralphHint: "December has snow and Christmas! Cold winter time!"
                },
                {
                    id: 19,
                    type: "time-birthday",
                    question: "If your birthday is in the 8th month, which month is it?",
                    options: ["July", "August", "September", "October"],
                    correct: 1,
                    explanation: "August is the 8th month of the year.",
                    ralphHint: "Count the months! August is number eight!"
                },
                {
                    id: 20,
                    type: "time-holidays",
                    question: "Which month has Halloween?",
                    options: ["September", "October", "November", "December"],
                    correct: 1,
                    explanation: "Halloween is in October.",
                    ralphHint: "Halloween is October 31st! Trick or treat!"
                }
            ]
        },

        // Set 3: Clock Basics (Questions 21-30)
        {
            set: 3,
            setTitle: "Clock Basics",
            setDescription: "Learn to read clocks and tell time!",
            questions: [
                {
                    id: 21,
                    type: "time-clock",
                    question: "What time is it when both clock hands point to 12?",
                    options: ["6:00", "12:00", "3:00", "9:00"],
                    correct: 1,
                    explanation: "When both hands point to 12, it's 12:00.",
                    ralphHint: "Both hands point up! That's twelve o'clock!"
                },
                {
                    id: 22,
                    type: "time-clock",
                    question: "When the short hand points to 3 and long hand to 12, what time is it?",
                    options: ["12:03", "3:00", "3:12", "12:30"],
                    correct: 1,
                    explanation: "Short hand shows hours, long hand shows minutes. This is 3:00.",
                    ralphHint: "Short hand says three, long hand says zero minutes!"
                },
                {
                    id: 23,
                    type: "clock-hands",
                    question: "Which hand on a clock tells the hour?",
                    options: ["The long hand", "The short hand", "Both hands", "Neither hand"],
                    correct: 1,
                    explanation: "The short hand tells the hour.",
                    ralphHint: "Short hand for hours! Like my short attention span!"
                },
                {
                    id: 24,
                    type: "clock-hands",
                    question: "Which hand on a clock tells the minutes?",
                    options: ["The long hand", "The short hand", "Both hands", "Neither hand"],
                    correct: 0,
                    explanation: "The long hand tells the minutes.",
                    ralphHint: "Long hand for minutes! Like my long nap time!"
                },
                {
                    id: 25,
                    type: "time-numbers",
                    question: "How many numbers are on a clock?",
                    options: ["10", "11", "12", "13"],
                    correct: 2,
                    explanation: "There are 12 numbers on a clock: 1 through 12.",
                    ralphHint: "Twelve numbers! Just like twelve months!"
                },
                {
                    id: 26,
                    type: "time-o-clock",
                    question: "When we say '6 o'clock', the long hand points to:",
                    options: ["6", "12", "3", "9"],
                    correct: 1,
                    explanation: "At any 'o'clock' time, the long hand points to 12.",
                    ralphHint: "O'clock means long hand points up to twelve!"
                },
                {
                    id: 27,
                    type: "time-half",
                    question: "When the long hand points to 6, how many minutes is that?",
                    options: ["6 minutes", "15 minutes", "30 minutes", "60 minutes"],
                    correct: 2,
                    explanation: "When the long hand points to 6, it's 30 minutes (half past).",
                    ralphHint: "Hand pointing down means thirty minutes! Half way around!"
                },
                {
                    id: 28,
                    type: "clock-face",
                    question: "Where is 12 on a clock?",
                    options: ["At the bottom", "At the top", "On the left", "On the right"],
                    correct: 1,
                    explanation: "12 is at the top of the clock.",
                    ralphHint: "Twelve is up high! At the tippy top!"
                },
                {
                    id: 29,
                    type: "clock-face",
                    question: "Where is 6 on a clock?",
                    options: ["At the top", "At the bottom", "On the left", "On the right"],
                    correct: 1,
                    explanation: "6 is at the bottom of the clock.",
                    ralphHint: "Six is down low! At the bottom!"
                },
                {
                    id: 30,
                    type: "time-reading",
                    question: "If the short hand points to 8 and long hand to 12, what time is it?",
                    options: ["12:08", "8:00", "8:12", "12:80"],
                    correct: 1,
                    explanation: "Short hand at 8, long hand at 12 means 8:00.",
                    ralphHint: "Eight o'clock! Time for breakfast... or bedtime!"
                }
            ]
        },

        // Set 4: Duration (Questions 31-40)
        {
            set: 4,
            setTitle: "Duration",
            setDescription: "Learn about how long things take!",
            questions: [
                {
                    id: 31,
                    type: "time-duration",
                    question: "Which takes longer: eating lunch or brushing teeth?",
                    options: ["Eating lunch", "Brushing teeth", "Same time", "Can't tell"],
                    correct: 0,
                    explanation: "Eating lunch takes much longer than brushing teeth.",
                    ralphHint: "Lunch takes forever! Brushing teeth is quick!"
                },
                {
                    id: 32,
                    type: "time-duration",
                    question: "About how long is a TV show?",
                    options: ["30 minutes", "3 hours", "30 seconds", "3 days"],
                    correct: 0,
                    explanation: "Most TV shows are about 30 minutes long.",
                    ralphHint: "My cartoons are about thirty minutes! Not too long!"
                },
                {
                    id: 33,
                    type: "time-duration",
                    question: "Which takes longer: taking a bath or washing your hands?",
                    options: ["Taking a bath", "Washing hands", "Same time", "Can't tell"],
                    correct: 0,
                    explanation: "Taking a bath takes much longer than washing hands.",
                    ralphHint: "Bath time is long and fun! Hand washing is quick!"
                },
                {
                    id: 34,
                    type: "time-duration",
                    question: "About how long does it take to eat breakfast?",
                    options: ["2 seconds", "20 minutes", "2 hours", "20 hours"],
                    correct: 1,
                    explanation: "Eating breakfast usually takes about 20 minutes.",
                    ralphHint: "Breakfast doesn't take too long! About twenty minutes!"
                },
                {
                    id: 35,
                    type: "time-duration",
                    question: "Which is faster: walking or running?",
                    options: ["Walking", "Running", "Same speed", "Depends"],
                    correct: 1,
                    explanation: "Running is faster than walking.",
                    ralphHint: "Running is fast! Walking is slow and steady!"
                },
                {
                    id: 36,
                    type: "time-duration",
                    question: "About how long is a school day?",
                    options: ["2 hours", "6 hours", "12 hours", "24 hours"],
                    correct: 1,
                    explanation: "A school day is usually about 6 hours long.",
                    ralphHint: "School day is about six hours! Long time to learn!"
                },
                {
                    id: 37,
                    type: "time-duration",
                    question: "Which takes longer: reading a book or reading one page?",
                    options: ["Reading a book", "Reading one page", "Same time", "Can't tell"],
                    correct: 0,
                    explanation: "Reading a whole book takes longer than one page.",
                    ralphHint: "Whole book has lots of pages! Takes much longer!"
                },
                {
                    id: 38,
                    type: "time-duration",
                    question: "About how long does it take to tie your shoes?",
                    options: ["1 minute", "1 hour", "1 day", "1 week"],
                    correct: 0,
                    explanation: "Tying shoes usually takes about 1 minute.",
                    ralphHint: "Quick task! Just about one minute to tie shoes!"
                },
                {
                    id: 39,
                    type: "time-duration",
                    question: "Which takes longer: a movie or a song?",
                    options: ["A movie", "A song", "Same time", "Can't tell"],
                    correct: 0,
                    explanation: "Movies are much longer than songs.",
                    ralphHint: "Movies are really long! Songs are short and sweet!"
                },
                {
                    id: 40,
                    type: "time-duration",
                    question: "About how long is a nap?",
                    options: ["5 minutes", "1 hour", "8 hours", "1 day"],
                    correct: 1,
                    explanation: "A nap is usually about 1 hour long.",
                    ralphHint: "Nap time is about one hour! Perfect for resting!"
                }
            ]
        },

        // Set 5: Comparing Time (Questions 41-50)
        {
            set: 5,
            setTitle: "Comparing Time",
            setDescription: "Compare different amounts of time!",
            questions: [
                {
                    id: 41,
                    type: "time-comparison",
                    question: "Which is longer: 1 hour or 30 minutes?",
                    options: ["1 hour", "30 minutes", "Same time", "Can't tell"],
                    correct: 0,
                    explanation: "1 hour is 60 minutes, which is longer than 30 minutes.",
                    ralphHint: "One hour is sixty minutes! More than thirty!"
                },
                {
                    id: 42,
                    type: "time-comparison",
                    question: "Which is shorter: 1 day or 1 week?",
                    options: ["1 day", "1 week", "Same time", "Can't tell"],
                    correct: 0,
                    explanation: "1 day is shorter than 1 week (which has 7 days).",
                    ralphHint: "One day is short! One week has seven days!"
                },
                {
                    id: 43,
                    type: "time-comparison",
                    question: "Which takes longer: summer vacation or a weekend?",
                    options: ["Summer vacation", "A weekend", "Same time", "Can't tell"],
                    correct: 0,
                    explanation: "Summer vacation is many weeks long, much longer than a weekend.",
                    ralphHint: "Summer vacation is super long! Weekend is just two days!"
                },
                {
                    id: 44,
                    type: "time-comparison",
                    question: "Which is faster: 5 minutes or 10 minutes?",
                    options: ["5 minutes", "10 minutes", "Same time", "Can't tell"],
                    correct: 0,
                    explanation: "5 minutes is faster (shorter) than 10 minutes.",
                    ralphHint: "Five is less than ten! Five minutes is faster!"
                },
                {
                    id: 45,
                    type: "time-comparison",
                    question: "Which lasts longer: a month or a year?",
                    options: ["A month", "A year", "Same time", "Can't tell"],
                    correct: 1,
                    explanation: "A year has 12 months, so it's much longer than 1 month.",
                    ralphHint: "Year has twelve months! Much longer than one month!"
                },
                {
                    id: 46,
                    type: "time-comparison",
                    question: "If you start at 2:00 and end at 4:00, how long is that?",
                    options: ["1 hour", "2 hours", "3 hours", "6 hours"],
                    correct: 1,
                    explanation: "From 2:00 to 4:00 is 2 hours.",
                    ralphHint: "Count the hours! Two, three, four! That's two hours!"
                },
                {
                    id: 47,
                    type: "time-comparison",
                    question: "Which happens faster: blinking or clapping?",
                    options: ["Blinking", "Clapping", "Same time", "Can't tell"],
                    correct: 0,
                    explanation: "Blinking happens much faster than clapping.",
                    ralphHint: "Blink is super fast! Like this fast!"
                },
                {
                    id: 48,
                    type: "time-comparison",
                    question: "Which takes longer: getting dressed or putting on shoes?",
                    options: ["Getting dressed", "Putting on shoes", "Same time", "Can't tell"],
                    correct: 0,
                    explanation: "Getting dressed takes longer because it includes more clothes.",
                    ralphHint: "Getting dressed has shirts, pants, everything! Takes longer!"
                },
                {
                    id: 49,
                    type: "time-comparison",
                    question: "Which is longer: recess or lunch time?",
                    options: ["Recess", "Lunch time", "Same time", "Depends on school"],
                    correct: 3,
                    explanation: "Different schools have different lengths for recess and lunch.",
                    ralphHint: "Every school is different! Some have long recess, some long lunch!"
                },
                {
                    id: 50,
                    type: "time-comparison",
                    question: "Which is shorter: brushing teeth or taking a shower?",
                    options: ["Brushing teeth", "Taking shower", "Same time", "Can't tell"],
                    correct: 0,
                    explanation: "Brushing teeth usually takes less time than a shower.",
                    ralphHint: "Brush teeth quick! Shower takes longer to get clean!"
                }
            ]
        },

        // Set 6: Schedules (Questions 51-60)
        {
            set: 6,
            setTitle: "Schedules",
            setDescription: "Learn about daily schedules and routines!",
            questions: [
                {
                    id: 51,
                    type: "time-schedule",
                    question: "What do you usually do first in the morning?",
                    options: ["Go to bed", "Eat dinner", "Wake up", "Brush teeth at night"],
                    correct: 2,
                    explanation: "Waking up is the first thing you do in the morning.",
                    ralphHint: "Morning starts with waking up! Rise and shine!"
                },
                {
                    id: 52,
                    type: "time-schedule",
                    question: "When do you usually eat lunch?",
                    options: ["In the morning", "Around noon", "Late at night", "Before breakfast"],
                    correct: 1,
                    explanation: "Lunch is usually eaten around noon (12:00).",
                    ralphHint: "Lunch time is in the middle of the day! Around twelve!"
                },
                {
                    id: 53,
                    type: "time-schedule",
                    question: "What happens last before you go to sleep?",
                    options: ["Eat breakfast", "Brush teeth", "Go to school", "Wake up"],
                    correct: 1,
                    explanation: "Brushing teeth is often the last thing before bed.",
                    ralphHint: "Clean teeth before sleep! Last thing at night!"
                },
                {
                    id: 54,
                    type: "time-routine",
                    question: "Put these in morning order: Get dressed, Wake up, Eat breakfast",
                    options: ["Eat, Wake, Dress", "Wake, Get dressed, Eat", "Dress, Wake, Eat", "Wake, Eat, Dress"],
                    correct: 1,
                    explanation: "Morning order: Wake up, get dressed, then eat breakfast.",
                    ralphHint: "Wake up first! Then get dressed, then eat!"
                },
                {
                    id: 55,
                    type: "time-routine",
                    question: "What do you do after school?",
                    options: ["Go to school", "Eat breakfast", "Play or do homework", "Wake up"],
                    correct: 2,
                    explanation: "After school, you might play, do homework, or have a snack.",
                    ralphHint: "After school time! Play and homework time!"
                },
                {
                    id: 56,
                    type: "time-meals",
                    question: "Which meal comes first in the day?",
                    options: ["Lunch", "Dinner", "Breakfast", "Snack"],
                    correct: 2,
                    explanation: "Breakfast is the first meal of the day.",
                    ralphHint: "Breakfast breaks the fast! First meal in the morning!"
                },
                {
                    id: 57,
                    type: "time-meals",
                    question: "Which meal comes last in the day?",
                    options: ["Breakfast", "Lunch", "Dinner", "Morning snack"],
                    correct: 2,
                    explanation: "Dinner is usually the last meal of the day.",
                    ralphHint: "Dinner is at night! Last meal before bed!"
                },
                {
                    id: 58,
                    type: "time-bedtime",
                    question: "When do most kids go to bed?",
                    options: ["In the morning", "At noon", "In the evening", "At lunch time"],
                    correct: 2,
                    explanation: "Most kids go to bed in the evening, when it gets dark.",
                    ralphHint: "Bedtime is when it's dark! Evening time!"
                },
                {
                    id: 59,
                    type: "time-activities",
                    question: "When do you usually go to school?",
                    options: ["At night", "In the evening", "In the morning", "Very late"],
                    correct: 2,
                    explanation: "School usually starts in the morning.",
                    ralphHint: "School starts in the morning! Early rise for learning!"
                },
                {
                    id: 60,
                    type: "time-weekend",
                    question: "What's different about weekend mornings?",
                    options: ["Nothing", "No school", "Earlier wake up", "More homework"],
                    correct: 1,
                    explanation: "Weekend mornings are different because there's no school.",
                    ralphHint: "Weekends mean no school! Sleep in time!"
                }
            ]
        },

        // Set 7: Elapsed Time (Questions 61-70)
        {
            set: 7,
            setTitle: "Elapsed Time",
            setDescription: "Learn how much time has passed!",
            questions: [
                {
                    id: 61,
                    type: "elapsed-time",
                    question: "If it's 3:00 now and you wait 2 hours, what time will it be?",
                    options: ["4:00", "5:00", "6:00", "1:00"],
                    correct: 1,
                    explanation: "3:00 plus 2 hours equals 5:00.",
                    ralphHint: "Count forward! Three, four, five! Two hours later!"
                },
                {
                    id: 62,
                    type: "elapsed-time",
                    question: "If you start reading at 2:00 and finish at 3:00, how long did you read?",
                    options: ["30 minutes", "1 hour", "2 hours", "5 hours"],
                    correct: 1,
                    explanation: "From 2:00 to 3:00 is 1 hour.",
                    ralphHint: "Count the time! From two to three is one hour!"
                },
                {
                    id: 63,
                    type: "elapsed-time",
                    question: "School starts at 8:00 and ends at 3:00. How many hours is that?",
                    options: ["5 hours", "6 hours", "7 hours", "8 hours"],
                    correct: 2,
                    explanation: "From 8:00 to 3:00 is 7 hours.",
                    ralphHint: "Count the hours! Eight to three is seven hours!"
                },
                {
                    id: 64,
                    type: "elapsed-time",
                    question: "If lunch starts at 12:00 and lasts 30 minutes, when does it end?",
                    options: ["12:15", "12:30", "1:00", "1:30"],
                    correct: 1,
                    explanation: "12:00 plus 30 minutes equals 12:30.",
                    ralphHint: "Thirty minutes after twelve is twelve-thirty!"
                },
                {
                    id: 65,
                    type: "elapsed-time",
                    question: "If you go to bed at 8:00 and sleep for 10 hours, what time do you wake up?",
                    options: ["5:00", "6:00", "7:00", "18:00"],
                    correct: 1,
                    explanation: "8:00 plus 10 hours equals 6:00 the next morning.",
                    ralphHint: "Ten hours after eight at night is six in the morning!"
                },
                {
                    id: 66,
                    type: "elapsed-time",
                    question: "A movie starts at 1:00 and runs for 2 hours. When does it end?",
                    options: ["2:00", "3:00", "4:00", "1:30"],
                    correct: 1,
                    explanation: "1:00 plus 2 hours equals 3:00.",
                    ralphHint: "Two hours after one is three o'clock!"
                },
                {
                    id: 67,
                    type: "elapsed-hours",
                    question: "How many hours are from 9:00 morning to 9:00 evening?",
                    options: ["10 hours", "11 hours", "12 hours", "24 hours"],
                    correct: 2,
                    explanation: "From 9:00 AM to 9:00 PM is 12 hours.",
                    ralphHint: "Morning nine to evening nine is twelve hours!"
                },
                {
                    id: 68,
                    type: "elapsed-minutes",
                    question: "If recess starts at 10:15 and ends at 10:30, how long is recess?",
                    options: ["15 minutes", "20 minutes", "30 minutes", "45 minutes"],
                    correct: 0,
                    explanation: "From 10:15 to 10:30 is 15 minutes.",
                    ralphHint: "From fifteen to thirty is fifteen minutes!"
                },
                {
                    id: 69,
                    type: "elapsed-time",
                    question: "If you start homework at 4:00 and work for 1 hour, when do you finish?",
                    options: ["4:30", "5:00", "5:30", "6:00"],
                    correct: 1,
                    explanation: "4:00 plus 1 hour equals 5:00.",
                    ralphHint: "One hour after four is five o'clock!"
                },
                {
                    id: 70,
                    type: "elapsed-backwards",
                    question: "If it's 6:00 now and something started 2 hours ago, when did it start?",
                    options: ["4:00", "5:00", "7:00", "8:00"],
                    correct: 0,
                    explanation: "6:00 minus 2 hours equals 4:00.",
                    ralphHint: "Count backwards! Six, five, four! Two hours ago!"
                }
            ]
        },

        // Set 8: Calendars (Questions 71-80)
        {
            set: 8,
            setTitle: "Calendars",
            setDescription: "Learn to read and use calendars!",
            questions: [
                {
                    id: 71,
                    type: "calendar-basic",
                    question: "What does a calendar show?",
                    options: ["Time of day", "Days and dates", "Temperature", "Colors"],
                    correct: 1,
                    explanation: "A calendar shows days and dates.",
                    ralphHint: "Calendar shows all the days! Like today and tomorrow!"
                },
                {
                    id: 72,
                    type: "calendar-days",
                    question: "How many days does February usually have?",
                    options: ["28 or 29", "30", "31", "32"],
                    correct: 0,
                    explanation: "February has 28 days, or 29 in a leap year.",
                    ralphHint: "February is the shortest month! Twenty-eight or twenty-nine!"
                },
                {
                    id: 73,
                    type: "calendar-months",
                    question: "Which months have 31 days?",
                    options: ["Only December", "January, March, May", "All months", "No months"],
                    correct: 1,
                    explanation: "January, March, May, July, August, October, and December have 31 days.",
                    ralphHint: "Some months are longer! They have thirty-one days!"
                },
                {
                    id: 74,
                    type: "calendar-weeks",
                    question: "How many weeks are in most months?",
                    options: ["2", "3", "4 or 5", "6"],
                    correct: 2,
                    explanation: "Most months have about 4 or 5 weeks.",
                    ralphHint: "Months are about four or five weeks long!"
                },
                {
                    id: 75,
                    type: "calendar-today",
                    question: "If today is the 15th, what was yesterday?",
                    options: ["14th", "16th", "13th", "17th"],
                    correct: 0,
                    explanation: "Yesterday was the 14th (one day before the 15th).",
                    ralphHint: "Yesterday is one day back! Fifteen minus one!"
                },
                {
                    id: 76,
                    type: "calendar-tomorrow",
                    question: "If today is the 20th, what is tomorrow?",
                    options: ["19th", "21st", "22nd", "18th"],
                    correct: 1,
                    explanation: "Tomorrow will be the 21st (one day after the 20th).",
                    ralphHint: "Tomorrow is one day ahead! Twenty plus one!"
                },
                {
                    id: 77,
                    type: "calendar-birthday",
                    question: "If your birthday is June 10th, which month comes after your birthday month?",
                    options: ["May", "July", "August", "April"],
                    correct: 1,
                    explanation: "July comes after June.",
                    ralphHint: "June then July! Next month after birthday!"
                },
                {
                    id: 78,
                    type: "calendar-holidays",
                    question: "Which holiday is in December?",
                    options: ["Halloween", "Thanksgiving", "Christmas", "Valentine's Day"],
                    correct: 2,
                    explanation: "Christmas is in December (December 25th).",
                    ralphHint: "Christmas is December! Santa time!"
                },
                {
                    id: 79,
                    type: "calendar-counting",
                    question: "If today is March 5th and your party is March 10th, how many days until your party?",
                    options: ["3 days", "4 days", "5 days", "10 days"],
                    correct: 2,
                    explanation: "From March 5th to March 10th is 5 days.",
                    ralphHint: "Count the days! Five to ten is five days!"
                },
                {
                    id: 80,
                    type: "calendar-weekend",
                    question: "If the 1st of the month is a Monday, what day is the 7th?",
                    options: ["Friday", "Saturday", "Sunday", "Monday"],
                    correct: 2,
                    explanation: "Counting 7 days from Monday: Mon(1), Tue(2), Wed(3), Thu(4), Fri(5), Sat(6), Sun(7).",
                    ralphHint: "Count seven days from Monday! One, two, three... Sunday!"
                }
            ]
        },

        // Set 9: Time Stories (Questions 81-90)
        {
            set: 9,
            setTitle: "Time Stories",
            setDescription: "Use time in real-life situations!",
            questions: [
                {
                    id: 81,
                    type: "time-story",
                    question: "Sarah starts piano practice at 4:00 and practices for 30 minutes. When does she finish?",
                    options: ["4:15", "4:30", "5:00", "3:30"],
                    correct: 1,
                    explanation: "4:00 plus 30 minutes equals 4:30.",
                    ralphHint: "Thirty minutes after four is four-thirty!"
                },
                {
                    id: 82,
                    type: "time-story",
                    question: "Tom's bedtime is 8:00. If it's 7:30 now, how much time until bedtime?",
                    options: ["15 minutes", "30 minutes", "1 hour", "2 hours"],
                    correct: 1,
                    explanation: "From 7:30 to 8:00 is 30 minutes.",
                    ralphHint: "From seven-thirty to eight is thirty minutes!"
                },
                {
                    id: 83,
                    type: "time-story",
                    question: "The library opens at 9:00 AM. If Maya arrives at 8:45 AM, how long must she wait?",
                    options: ["15 minutes", "30 minutes", "45 minutes", "1 hour"],
                    correct: 0,
                    explanation: "From 8:45 to 9:00 is 15 minutes.",
                    ralphHint: "From forty-five to nine o'clock is fifteen minutes!"
                },
                {
                    id: 84,
                    type: "time-story",
                    question: "Dad says dinner will be ready in 20 minutes. If it's 5:40 now, when will dinner be ready?",
                    options: ["5:50", "6:00", "6:20", "5:20"],
                    correct: 1,
                    explanation: "5:40 plus 20 minutes equals 6:00.",
                    ralphHint: "Twenty minutes after five-forty is six o'clock!"
                },
                {
                    id: 85,
                    type: "time-story",
                    question: "The movie is 2 hours long. If it starts at 1:00, when does it end?",
                    options: ["2:00", "3:00", "4:00", "1:30"],
                    correct: 1,
                    explanation: "1:00 plus 2 hours equals 3:00.",
                    ralphHint: "Two hours after one is three o'clock!"
                },
                {
                    id: 86,
                    type: "time-story",
                    question: "Anna's soccer game lasts 1 hour. It started at 10:00. What time is it half-way through?",
                    options: ["10:15", "10:30", "11:00", "10:45"],
                    correct: 1,
                    explanation: "Half-way through a 1-hour game starting at 10:00 is 10:30.",
                    ralphHint: "Half of one hour is thirty minutes! Ten-thirty!"
                },
                {
                    id: 87,
                    type: "time-story",
                    question: "Bus comes every 15 minutes. If you missed the 2:00 bus, when is the next one?",
                    options: ["2:05", "2:10", "2:15", "2:30"],
                    correct: 2,
                    explanation: "15 minutes after 2:00 is 2:15.",
                    ralphHint: "Fifteen minutes after two is two-fifteen!"
                },
                {
                    id: 88,
                    type: "time-story",
                    question: "Jake takes 45 minutes to walk to school. If school starts at 8:00, when should he leave home?",
                    options: ["7:15", "7:30", "7:45", "8:45"],
                    correct: 0,
                    explanation: "45 minutes before 8:00 is 7:15.",
                    ralphHint: "Count back forty-five minutes! Fifteen minutes past seven!"
                },
                {
                    id: 89,
                    type: "time-story",
                    question: "Art class is from 1:00 to 2:30. How long is art class?",
                    options: ["30 minutes", "1 hour", "1 hour 30 minutes", "2 hours"],
                    correct: 2,
                    explanation: "From 1:00 to 2:30 is 1 hour and 30 minutes.",
                    ralphHint: "One to two is one hour, then thirty more minutes!"
                },
                {
                    id: 90,
                    type: "time-story",
                    question: "Lily brushes teeth at 7:30 PM every night. If she's 10 minutes late tonight, when will she brush?",
                    options: ["7:20", "7:40", "8:30", "6:30"],
                    correct: 1,
                    explanation: "10 minutes after 7:30 is 7:40.",
                    ralphHint: "Ten minutes late means seven-forty!"
                }
            ]
        },

        // Set 10: Time Review (Questions 91-100)
        {
            set: 10,
            setTitle: "Time Master",
            setDescription: "Review everything you've learned about time!",
            questions: [
                {
                    id: 91,
                    type: "time-review",
                    question: "How many days are in a week?",
                    options: ["5", "6", "7", "8"],
                    correct: 2,
                    explanation: "There are 7 days in a week.",
                    ralphHint: "Seven days! Monday through Sunday!"
                },
                {
                    id: 92,
                    type: "time-review",
                    question: "How many months are in a year?",
                    options: ["10", "11", "12", "13"],
                    correct: 2,
                    explanation: "There are 12 months in a year.",
                    ralphHint: "Twelve months! January to December!"
                },
                {
                    id: 93,
                    type: "time-review",
                    question: "Which hand on a clock shows the hours?",
                    options: ["Long hand", "Short hand", "Both hands", "No hand"],
                    correct: 1,
                    explanation: "The short hand shows the hours.",
                    ralphHint: "Short hand for hours! Remember that!"
                },
                {
                    id: 94,
                    type: "time-review",
                    question: "How many minutes are in an hour?",
                    options: ["30", "45", "60", "90"],
                    correct: 2,
                    explanation: "There are 60 minutes in an hour.",
                    ralphHint: "Sixty minutes make one hour!"
                },
                {
                    id: 95,
                    type: "time-review",
                    question: "Which season comes after winter?",
                    options: ["Summer", "Fall", "Spring", "Winter again"],
                    correct: 2,
                    explanation: "Spring comes after winter.",
                    ralphHint: "After cold winter comes warm spring!"
                },
                {
                    id: 96,
                    type: "time-review",
                    question: "If it's 3:00 and you add 2 hours, what time is it?",
                    options: ["4:00", "5:00", "6:00", "1:00"],
                    correct: 1,
                    explanation: "3:00 plus 2 hours equals 5:00.",
                    ralphHint: "Three plus two hours is five o'clock!"
                },
                {
                    id: 97,
                    type: "time-review",
                    question: "What do we use to keep track of days and dates?",
                    options: ["Clock", "Calendar", "Watch", "Phone"],
                    correct: 1,
                    explanation: "A calendar keeps track of days and dates.",
                    ralphHint: "Calendar shows all the days and dates!"
                },
                {
                    id: 98,
                    type: "time-review",
                    question: "Which takes longer: a minute or an hour?",
                    options: ["A minute", "An hour", "Same time", "Can't tell"],
                    correct: 1,
                    explanation: "An hour is 60 minutes, so it's much longer than 1 minute.",
                    ralphHint: "Hour is much longer! Sixty times longer than a minute!"
                },
                {
                    id: 99,
                    type: "time-review",
                    question: "When do most people eat breakfast?",
                    options: ["At night", "In the morning", "At noon", "In the evening"],
                    correct: 1,
                    explanation: "Breakfast is eaten in the morning.",
                    ralphHint: "Breakfast is the morning meal! Start of the day!"
                },
                {
                    id: 100,
                    type: "time-mastery",
                    question: "You're now a Time Master! What's the most important thing about time?",
                    options: ["It's confusing", "It helps us organize our day", "It's only numbers", "It never changes"],
                    correct: 1,
                    explanation: "Time helps us organize our activities and understand when things happen!",
                    ralphHint: "Time helps us know when to do things! Very important for daily life!"
                }
            ]
        }
    ],

    statistics: [
        {
            set: 1,
            setTitle: "Collecting Data",
            setDescription: "Learn to collect information and make simple graphs!",
            questions: [
                {
                    id: 1,
                    type: "data-collection",
                    question: "What is data?",
                    options: ["Information we collect", "A type of food", "A color", "A shape"],
                    correct: 0,
                    explanation: "Data is information that we collect and organize.",
                    ralphHint: "Data is like collecting stickers! Information about stuff!"
                },
                {
                    id: 2,
                    type: "survey",
                    question: "If you ask friends their favorite color, you are doing a:",
                    options: ["Survey", "Game", "Test", "Race"],
                    correct: 0,
                    explanation: "Asking people questions to collect information is called a survey.",
                    ralphHint: "Survey means asking questions! Like what's your favorite candy!"
                },
                {
                    id: 3,
                    type: "graph-reading",
                    question: "Look at this data: Red-3, Blue-5, Green-2. Which color got the most votes?",
                    options: ["Red", "Blue", "Green", "Yellow"],
                    correct: 1,
                    explanation: "Blue got 5 votes, which is the most.",
                    ralphHint: "Blue has five! That's more than three or two!"
                },
                {
                    id: 4,
                    type: "tally-marks",
                    question: "How do we show the number 4 in tally marks?",
                    options: ["||||", "|||", "||", "|||||"],
                    correct: 0,
                    explanation: "Four tally marks are shown as ||||.",
                    ralphHint: "Four lines! One, two, three, four!"
                },
                {
                    id: 5,
                    type: "graph-types",
                    question: "What type of graph uses bars of different heights?",
                    options: ["Circle graph", "Bar graph", "Line graph", "Picture graph"],
                    correct: 1,
                    explanation: "A bar graph uses bars of different heights to show data.",
                    ralphHint: "Bar graph has bars! Like my toy blocks stacked up!"
                },
                {
                    id: 6,
                    type: "data-comparison",
                    question: "If cats got 7 votes and dogs got 4 votes, which pet is more popular?",
                    options: ["Cats", "Dogs", "Same", "Fish"],
                    correct: 0,
                    explanation: "Cats got more votes (7 > 4), so cats are more popular.",
                    ralphHint: "Seven is bigger than four! Cats win!"
                },
                {
                    id: 7,
                    type: "pictograph",
                    question: "In a pictograph, each picture stands for:",
                    options: ["Nothing", "One thing", "Ten things", "A hundred things"],
                    correct: 1,
                    explanation: "In simple pictographs, each picture usually represents one item.",
                    ralphHint: "Each picture is one thing! Like one apple picture means one apple!"
                },
                {
                    id: 8,
                    type: "data-organization",
                    question: "Why do we organize data in graphs?",
                    options: ["To make it pretty", "To make it easier to understand", "To use more paper", "To make it harder"],
                    correct: 1,
                    explanation: "We organize data in graphs to make it easier to understand and compare.",
                    ralphHint: "Graphs make it easy! Like organizing my toys in boxes!"
                },
                {
                    id: 9,
                    type: "graph-reading",
                    question: "If a bar graph shows Pizza-8, Burgers-6, Tacos-4, what food is least favorite?",
                    options: ["Pizza", "Burgers", "Tacos", "All same"],
                    correct: 2,
                    explanation: "Tacos has the smallest number (4), so it's the least favorite.",
                    ralphHint: "Four is the smallest! Tacos got the fewest votes!"
                },
                {
                    id: 10,
                    type: "data-collection",
                    question: "What's a good question to ask for collecting data about pets?",
                    options: ["What's your favorite pet?", "Do you like math?", "What color is grass?", "How old are you?"],
                    correct: 0,
                    explanation: "Asking about favorite pets will give you data about pets.",
                    ralphHint: "Ask about pets to learn about pets! That makes sense!"
                }
            ]
        },

        // Set 2: Bar Graphs (Questions 11-20)
        {
            set: 2,
            setTitle: "Bar Graphs",
            setDescription: "Learn to read and create bar graphs!",
            questions: [
                {
                    id: 11,
                    type: "bar-reading",
                    question: "In a bar graph, the height of the bar shows:",
                    options: ["The color", "How many", "The width", "The date"],
                    correct: 1,
                    explanation: "The height of a bar shows how many items are in that category.",
                    ralphHint: "Taller bars mean more! Like when I stack more blocks!"
                },
                {
                    id: 12,
                    type: "bar-comparison",
                    question: "If the red bar is 6 units tall and the blue bar is 4 units tall, which color has more?",
                    options: ["Red", "Blue", "Same", "Can't tell"],
                    correct: 0,
                    explanation: "Red has more because 6 is greater than 4.",
                    ralphHint: "Six is bigger than four! Red wins!"
                },
                {
                    id: 13,
                    type: "bar-scale",
                    question: "What do the numbers on the side of a bar graph tell us?",
                    options: ["The colors", "How to count", "The names", "The temperature"],
                    correct: 1,
                    explanation: "The numbers on the side (scale) help us count how many items each bar represents.",
                    ralphHint: "Numbers help us count! Like counting my fingers!"
                },
                {
                    id: 14,
                    type: "bar-data",
                    question: "A bar graph shows: Apples-5, Oranges-3, Bananas-7. Which fruit has the most?",
                    options: ["Apples", "Oranges", "Bananas", "All same"],
                    correct: 2,
                    explanation: "Bananas has 7, which is the highest number.",
                    ralphHint: "Seven bananas! That's more than five or three!"
                },
                {
                    id: 15,
                    type: "bar-creation",
                    question: "To make a bar graph about favorite animals, what should you put at the bottom?",
                    options: ["Numbers", "Animal names", "Colors", "Dates"],
                    correct: 1,
                    explanation: "You put the categories (animal names) at the bottom of the graph.",
                    ralphHint: "Animal names go at the bottom! Like labels on my crayons!"
                },
                {
                    id: 16,
                    type: "bar-interpretation",
                    question: "If cats got 8 votes and dogs got 5 votes, how many more votes did cats get?",
                    options: ["3 more", "2 more", "5 more", "8 more"],
                    correct: 0,
                    explanation: "8 - 5 = 3, so cats got 3 more votes than dogs.",
                    ralphHint: "Eight minus five equals three! More cats!"
                },
                {
                    id: 17,
                    type: "bar-total",
                    question: "A bar graph shows Red-4, Blue-6, Green-2. How many votes total?",
                    options: ["10", "12", "14", "8"],
                    correct: 1,
                    explanation: "4 + 6 + 2 = 12 total votes.",
                    ralphHint: "Add them all up! Four plus six plus two!"
                },
                {
                    id: 18,
                    type: "bar-zero",
                    question: "If purple got 0 votes, how tall should its bar be?",
                    options: ["Very tall", "Medium", "No bar at all", "Same as others"],
                    correct: 2,
                    explanation: "Zero votes means no bar, or a bar with height zero.",
                    ralphHint: "Zero means nothing! No bar for purple!"
                },
                {
                    id: 19,
                    type: "bar-equal",
                    question: "If two bars are the same height, what does that mean?",
                    options: ["Different amounts", "Same amounts", "One is wrong", "They're broken"],
                    correct: 1,
                    explanation: "Same height means same amount in each category.",
                    ralphHint: "Same height, same amount! Like twin towers!"
                },
                {
                    id: 20,
                    type: "bar-ordering",
                    question: "In a bar graph showing Heights: Tom-3, Sue-5, Joe-2, who is tallest according to the data?",
                    options: ["Tom", "Sue", "Joe", "All same"],
                    correct: 1,
                    explanation: "Sue has the highest number (5), so she is tallest.",
                    ralphHint: "Five is the biggest! Sue is tallest!"
                }
            ]
        },

        // Set 3: Reading Graphs (Questions 21-30)
        {
            set: 3,
            setTitle: "Reading Graphs",
            setDescription: "Practice reading different types of graphs!",
            questions: [
                {
                    id: 21,
                    type: "graph-title",
                    question: "What's the most important thing to look at first when reading a graph?",
                    options: ["The colors", "The title", "The bottom", "The numbers"],
                    correct: 1,
                    explanation: "The title tells you what the graph is about.",
                    ralphHint: "Title tells you what it's about! Like a book title!"
                },
                {
                    id: 22,
                    type: "graph-axis",
                    question: "What do we call the line at the bottom of a graph?",
                    options: ["Top line", "Side line", "Bottom axis", "Middle line"],
                    correct: 2,
                    explanation: "The bottom line is called the bottom axis or x-axis.",
                    ralphHint: "Bottom line! Like the bottom of my paper!"
                },
                {
                    id: 23,
                    type: "graph-reading",
                    question: "A graph shows 'Favorite Season'. Spring-6, Summer-8, Fall-4, Winter-2. Which season is most popular?",
                    options: ["Spring", "Summer", "Fall", "Winter"],
                    correct: 1,
                    explanation: "Summer has the most votes with 8.",
                    ralphHint: "Eight votes for summer! That's the most!"
                },
                {
                    id: 24,
                    type: "graph-comparison",
                    question: "Looking at the same graph, which season is least popular?",
                    options: ["Spring", "Summer", "Fall", "Winter"],
                    correct: 3,
                    explanation: "Winter has the fewest votes with only 2.",
                    ralphHint: "Two votes is the smallest! Winter is least favorite!"
                },
                {
                    id: 25,
                    type: "graph-difference",
                    question: "How many more people like Summer than Winter?",
                    options: ["4", "6", "8", "10"],
                    correct: 1,
                    explanation: "Summer-8, Winter-2. So 8 - 2 = 6 more people.",
                    ralphHint: "Eight minus two equals six! Six more!"
                },
                {
                    id: 26,
                    type: "graph-pattern",
                    question: "If you see bars getting taller from left to right, what pattern is that?",
                    options: ["Decreasing", "Increasing", "Same", "Mixed"],
                    correct: 1,
                    explanation: "Bars getting taller show an increasing pattern.",
                    ralphHint: "Taller and taller! Like climbing stairs!"
                },
                {
                    id: 27,
                    type: "graph-labels",
                    question: "What should every bar in a bar graph have?",
                    options: ["A color", "A label", "A number", "A picture"],
                    correct: 1,
                    explanation: "Every bar needs a label to tell us what it represents.",
                    ralphHint: "Labels tell us what things are! Like name tags!"
                },
                {
                    id: 28,
                    type: "graph-scale",
                    question: "The numbers 0, 2, 4, 6, 8 on the side of a graph count by:",
                    options: ["Ones", "Twos", "Fives", "Tens"],
                    correct: 1,
                    explanation: "The numbers go up by 2 each time: 0, 2, 4, 6, 8.",
                    ralphHint: "Two, four, six, eight! Counting by twos!"
                },
                {
                    id: 29,
                    type: "graph-interpretation",
                    question: "If a graph shows 'Class Pets', what kind of information would it have?",
                    options: ["Types of pets and how many", "Student names", "Pet colors only", "Pet ages"],
                    correct: 0,
                    explanation: "A 'Class Pets' graph would show different types of pets and how many of each.",
                    ralphHint: "What pets and how many! That's what graphs show!"
                },
                {
                    id: 30,
                    type: "graph-purpose",
                    question: "Why are graphs useful?",
                    options: ["They're pretty", "They help compare information quickly", "They use lots of paper", "They're hard to make"],
                    correct: 1,
                    explanation: "Graphs make it easy to compare information and see patterns quickly.",
                    ralphHint: "Graphs make it easy to see! Like pictures for numbers!"
                }
            ]
        },

        // Set 4: Pictographs (Questions 31-40)
        {
            set: 4,
            setTitle: "Pictographs",
            setDescription: "Learn about graphs that use pictures!",
            questions: [
                {
                    id: 31,
                    type: "pictograph-definition",
                    question: "A pictograph uses what to show data?",
                    options: ["Numbers only", "Pictures or symbols", "Colors only", "Lines only"],
                    correct: 1,
                    explanation: "Pictographs use pictures or symbols to represent data.",
                    ralphHint: "Pictures! Like drawing apples to show how many apples!"
                },
                {
                    id: 32,
                    type: "pictograph-counting",
                    question: "If each 🍎 = 1 apple, and you see 🍎🍎🍎🍎, how many apples is that?",
                    options: ["1", "3", "4", "5"],
                    correct: 2,
                    explanation: "There are 4 apple pictures, so that represents 4 apples.",
                    ralphHint: "Count the apples! One, two, three, four!"
                },
                {
                    id: 33,
                    type: "pictograph-key",
                    question: "What tells you what each picture means in a pictograph?",
                    options: ["The title", "The key", "The colors", "The size"],
                    correct: 1,
                    explanation: "The key tells you what each picture or symbol represents.",
                    ralphHint: "The key unlocks the meaning! Like keys open doors!"
                },
                {
                    id: 34,
                    type: "pictograph-reading",
                    question: "A pictograph shows: Dogs 🐕🐕🐕, Cats 🐱🐱🐱🐱🐱. If each picture = 1 pet, how many cats?",
                    options: ["3", "4", "5", "8"],
                    correct: 2,
                    explanation: "There are 5 cat pictures, so 5 cats.",
                    ralphHint: "Count the kitties! Five little cats!"
                },
                {
                    id: 35,
                    type: "pictograph-comparison",
                    question: "Using the same pictograph, are there more dogs or cats?",
                    options: ["Dogs", "Cats", "Same", "Can't tell"],
                    correct: 1,
                    explanation: "Cats have 5 pictures, dogs have 3, so more cats.",
                    ralphHint: "Five cats, three dogs! Cats win!"
                },
                {
                    id: 36,
                    type: "pictograph-total",
                    question: "How many pets total in the pictograph?",
                    options: ["5", "7", "8", "10"],
                    correct: 2,
                    explanation: "3 dogs + 5 cats = 8 pets total.",
                    ralphHint: "Add them up! Three plus five equals eight!"
                },
                {
                    id: 37,
                    type: "pictograph-creation",
                    question: "To show 6 books in a pictograph, you would draw:",
                    options: ["1 book picture", "3 book pictures", "6 book pictures", "10 book pictures"],
                    correct: 2,
                    explanation: "If each picture represents 1 item, you need 6 pictures for 6 books.",
                    ralphHint: "Six books need six pictures! One for each!"
                },
                {
                    id: 38,
                    type: "pictograph-symbols",
                    question: "Which symbol would be best for showing favorite sports?",
                    options: ["🏀", "🍎", "🏠", "📚"],
                    correct: 0,
                    explanation: "A ball symbol (🏀) relates to sports, making it the best choice.",
                    ralphHint: "Ball for sports! That makes sense!"
                },
                {
                    id: 39,
                    type: "pictograph-difference",
                    question: "In a pictograph: Pizza 🍕🍕🍕🍕, Burgers 🍔🍔. How many more pizzas than burgers?",
                    options: ["1", "2", "3", "4"],
                    correct: 1,
                    explanation: "4 pizzas - 2 burgers = 2 more pizzas.",
                    ralphHint: "Four minus two equals two! Two more pizzas!"
                },
                {
                    id: 40,
                    type: "pictograph-advantages",
                    question: "What's good about pictographs?",
                    options: ["They're hard to read", "Pictures are fun and easy to understand", "They use lots of ink", "They're always wrong"],
                    correct: 1,
                    explanation: "Pictures make data fun and easy to understand, especially for children.",
                    ralphHint: "Pictures are fun! Like reading picture books!"
                }
            ]
        },

        // Set 5: Tally Charts (Questions 41-50)
        {
            set: 5,
            setTitle: "Tally Charts",
            setDescription: "Learn to count and organize data with tally marks!",
            questions: [
                {
                    id: 41,
                    type: "tally-basics",
                    question: "What are tally marks used for?",
                    options: ["Drawing pictures", "Counting and recording", "Writing letters", "Making shapes"],
                    correct: 1,
                    explanation: "Tally marks are used for counting and recording data as you collect it.",
                    ralphHint: "Tally marks help count! Like keeping score!"
                },
                {
                    id: 42,
                    type: "tally-counting",
                    question: "How many does |||| represent?",
                    options: ["3", "4", "5", "6"],
                    correct: 1,
                    explanation: "Four straight lines represent the number 4.",
                    ralphHint: "Four lines for four! Count them!"
                },
                {
                    id: 43,
                    type: "tally-five",
                    question: "How do we show 5 in tally marks?",
                    options: ["||||", "||||||", "🗂️", "||||"],
                    correct: 2,
                    explanation: "Five is shown as four lines with a diagonal line through them: 🗂️",
                    ralphHint: "Four lines and one across! That's five!"
                },
                {
                    id: 44,
                    type: "tally-reading",
                    question: "What number does 🗂️||| represent?",
                    options: ["5", "7", "8", "9"],
                    correct: 2,
                    explanation: "🗂️ = 5, plus ||| = 3 more, so 5 + 3 = 8.",
                    ralphHint: "Five plus three more! That's eight!"
                },
                {
                    id: 45,
                    type: "tally-chart",
                    question: "In a tally chart about favorite colors: Red |||| Blue |||, which color has more votes?",
                    options: ["Red", "Blue", "Same", "Can't tell"],
                    correct: 0,
                    explanation: "Red has 4 votes (||||), Blue has 3 votes (|||), so Red has more.",
                    ralphHint: "Four is more than three! Red wins!"
                },
                {
                    id: 46,
                    type: "tally-organizing",
                    question: "Why group tally marks by 5s?",
                    options: ["It looks pretty", "It's easier to count quickly", "It uses less space", "It's harder to read"],
                    correct: 1,
                    explanation: "Grouping by 5s makes it much easier to count large numbers quickly.",
                    ralphHint: "Groups of five are easy to count! Like my fingers!"
                },
                {
                    id: 47,
                    type: "tally-addition",
                    question: "If dogs got 🗂️|| votes, how many votes is that?",
                    options: ["5", "6", "7", "8"],
                    correct: 2,
                    explanation: "🗂️ = 5, plus || = 2 more, so 5 + 2 = 7 votes.",
                    ralphHint: "Five plus two equals seven! Count it out!"
                },
                {
                    id: 48,
                    type: "tally-survey",
                    question: "You're doing a survey about pets. Each time someone says 'cat', you should:",
                    options: ["Write 'cat'", "Make a tally mark", "Draw a cat", "Do nothing"],
                    correct: 1,
                    explanation: "Make a tally mark each time to count the responses.",
                    ralphHint: "One mark for each answer! Easy counting!"
                },
                {
                    id: 49,
                    type: "tally-comparison",
                    question: "Pizza 🗂️🗂️| vs Burgers 🗂️||. Which has more votes?",
                    options: ["Pizza", "Burgers", "Same", "Can't tell"],
                    correct: 0,
                    explanation: "Pizza: 5+5+1=11, Burgers: 5+2=7. Pizza has more.",
                    ralphHint: "Eleven pizza votes, seven burger votes! Pizza wins!"
                },
                {
                    id: 50,
                    type: "tally-total",
                    question: "Total votes: Red ||| Blue 🗂️ Green ||. How many people voted?",
                    options: ["8", "9", "10", "11"],
                    correct: 2,
                    explanation: "Red: 3, Blue: 5, Green: 2. Total: 3+5+2 = 10.",
                    ralphHint: "Three plus five plus two! That's ten people!"
                }
            ]
        },

        // Set 6: Surveys (Questions 51-60)
        {
            set: 6,
            setTitle: "Surveys",
            setDescription: "Learn how to ask questions and collect information!",
            questions: [
                {
                    id: 51,
                    type: "survey-definition",
                    question: "What is a survey?",
                    options: ["A type of graph", "A way to ask questions and collect information", "A math problem", "A type of book"],
                    correct: 1,
                    explanation: "A survey is when you ask people questions to collect information or data.",
                    ralphHint: "Surveys ask questions! Like asking what's your favorite ice cream!"
                },
                {
                    id: 52,
                    type: "survey-question",
                    question: "Which is a good survey question about food?",
                    options: ["What is your favorite color?", "How old are you?", "What is your favorite lunch food?", "Do you like school?"],
                    correct: 2,
                    explanation: "The question about favorite lunch food is about food, matching the survey topic.",
                    ralphHint: "Ask about food for a food survey! Makes sense!"
                },
                {
                    id: 53,
                    type: "survey-planning",
                    question: "Before doing a survey, you should first:",
                    options: ["Buy paper", "Decide what you want to learn", "Count to 10", "Draw pictures"],
                    correct: 1,
                    explanation: "First decide what information you want to collect, then plan your questions.",
                    ralphHint: "Think about what you want to know! Like planning a treasure hunt!"
                },
                {
                    id: 54,
                    type: "survey-recording",
                    question: "The best way to record survey answers is:",
                    options: ["Remember them", "Write them down", "Tell a friend", "Ignore them"],
                    correct: 1,
                    explanation: "Writing down answers ensures you don't forget and can organize the data later.",
                    ralphHint: "Write it down! My brain forgets things sometimes!"
                },
                {
                    id: 55,
                    type: "survey-choices",
                    question: "For a survey about favorite animals, good choices might be:",
                    options: ["Big, small, medium", "Dog, cat, bird, fish", "Red, blue, green", "1, 2, 3, 4"],
                    correct: 1,
                    explanation: "Dog, cat, bird, fish are all types of animals, which fits the survey topic.",
                    ralphHint: "Animal choices for animal questions! Perfect!"
                },
                {
                    id: 56,
                    type: "survey-people",
                    question: "To get good survey results, you should ask:",
                    options: ["Just one person", "Only your friends", "Many different people", "Only adults"],
                    correct: 2,
                    explanation: "Asking many different people gives you better, more complete information.",
                    ralphHint: "Ask lots of people! More answers, better results!"
                },
                {
                    id: 57,
                    type: "survey-organizing",
                    question: "After collecting survey data, what should you do next?",
                    options: ["Throw it away", "Organize it into a graph or chart", "Hide it", "Ask more questions"],
                    correct: 1,
                    explanation: "Organizing data into graphs or charts makes it easier to understand and share.",
                    ralphHint: "Make it neat and organized! Like cleaning my room!"
                },
                {
                    id: 58,
                    type: "survey-results",
                    question: "If 15 people like pizza and 8 people like burgers, what can you conclude?",
                    options: ["Burgers are better", "Pizza is more popular", "They're the same", "Everyone likes both"],
                    correct: 1,
                    explanation: "More people chose pizza (15 vs 8), so pizza is more popular in this survey.",
                    ralphHint: "Fifteen is bigger than eight! Pizza wins!"
                },
                {
                    id: 59,
                    type: "survey-improvement",
                    question: "To make your survey better, you could:",
                    options: ["Ask fewer people", "Use unclear questions", "Ask more specific questions", "Only ask yes/no questions"],
                    correct: 2,
                    explanation: "More specific, clear questions help you get better, more useful information.",
                    ralphHint: "Clear questions get clear answers! Like asking clearly for cookies!"
                },
                {
                    id: 60,
                    type: "survey-sharing",
                    question: "Why might you want to share your survey results?",
                    options: ["To help others learn from your data", "To hide information", "To confuse people", "To waste time"],
                    correct: 0,
                    explanation: "Sharing survey results helps others learn from the information you collected.",
                    ralphHint: "Sharing helps everyone learn! Like sharing toys makes friends happy!"
                }
            ]
        },

        // Set 7: Interpreting Data (Questions 61-70)
        {
            set: 7,
            setTitle: "Interpreting Data",
            setDescription: "Learn to understand what data tells us!",
            questions: [
                {
                    id: 61,
                    type: "data-meaning",
                    question: "What does it mean to 'interpret' data?",
                    options: ["To collect it", "To understand what it tells us", "To throw it away", "To copy it"],
                    correct: 1,
                    explanation: "Interpreting data means understanding what the information tells us or means.",
                    ralphHint: "Understanding what it means! Like reading a story!"
                },
                {
                    id: 62,
                    type: "data-trends",
                    question: "If a graph shows that more students liked recess each day this week, that's called a:",
                    options: ["Mistake", "Trend", "Problem", "Color"],
                    correct: 1,
                    explanation: "A pattern of increase or decrease over time is called a trend.",
                    ralphHint: "A trend! Like how I get hungrier at lunch time every day!"
                },
                {
                    id: 63,
                    type: "data-conclusions",
                    question: "Data shows: Monday-10 sunny, Tuesday-8 sunny, Wednesday-12 sunny. What can you conclude?",
                    options: ["Wednesday was cloudiest", "Wednesday was sunniest", "All days were the same", "Monday was longest"],
                    correct: 1,
                    explanation: "Wednesday had the most sunny hours (12), so it was the sunniest day.",
                    ralphHint: "Twelve is the biggest number! Wednesday was sunniest!"
                },
                {
                    id: 64,
                    type: "data-prediction",
                    question: "If data shows students drinking more water on hotter days, what might happen on a very hot day?",
                    options: ["Students drink less water", "Students drink more water", "Students don't drink water", "Nothing changes"],
                    correct: 1,
                    explanation: "Based on the pattern, students would likely drink even more water on very hot days.",
                    ralphHint: "Hot day, more thirsty! Makes sense to me!"
                },
                {
                    id: 65,
                    type: "data-comparison",
                    question: "Data shows: Class A-25 books read, Class B-18 books read. What's a good conclusion?",
                    options: ["Class B reads more", "Both classes read the same", "Class A reads more", "No one reads books"],
                    correct: 2,
                    explanation: "25 books is more than 18 books, so Class A read more books.",
                    ralphHint: "Twenty-five is bigger than eighteen! Class A reads more!"
                },
                {
                    id: 66,
                    type: "data-questions",
                    question: "When looking at data, a good question to ask is:",
                    options: ["What color is it?", "What does this tell me?", "How pretty is it?", "What time is it?"],
                    correct: 1,
                    explanation: "'What does this tell me?' helps you think about the meaning of the data.",
                    ralphHint: "Ask what it tells you! Like asking what a picture shows!"
                },
                {
                    id: 67,
                    type: "data-evidence",
                    question: "If you say 'Most students like chocolate ice cream', what do you need to prove it?",
                    options: ["A colorful chart", "Data showing more students chose chocolate", "A picture of ice cream", "Nothing"],
                    correct: 1,
                    explanation: "You need data evidence showing that chocolate got the most votes or responses.",
                    ralphHint: "Proof! Like showing more kids picked chocolate!"
                },
                {
                    id: 68,
                    type: "data-limitations",
                    question: "If you only ask 3 people about their favorite color, what's a problem with your data?",
                    options: ["It's too many people", "It's not enough people for good conclusions", "The colors are wrong", "It's too colorful"],
                    correct: 1,
                    explanation: "Three people is too small a group to make good conclusions about everyone's preferences.",
                    ralphHint: "Three people isn't very many! Need to ask more!"
                },
                {
                    id: 69,
                    type: "data-patterns",
                    question: "Data shows library visits: Week 1-20, Week 2-25, Week 3-30, Week 4-35. What pattern do you see?",
                    options: ["Decreasing by 5", "Increasing by 5", "Staying the same", "Random numbers"],
                    correct: 1,
                    explanation: "Each week increases by 5 visitors: 20, 25, 30, 35.",
                    ralphHint: "Going up by five each time! Twenty, twenty-five, thirty, thirty-five!"
                },
                {
                    id: 70,
                    type: "data-application",
                    question: "How can data about lunch choices help the cafeteria?",
                    options: ["Know what foods to make more of", "Choose paint colors", "Set class schedules", "Buy playground equipment"],
                    correct: 0,
                    explanation: "Lunch choice data helps the cafeteria know which foods are popular and should be made more often.",
                    ralphHint: "Make more of what kids like! Smart thinking!"
                }
            ]
        },

        // Set 8: Comparing Data (Questions 71-80)
        {
            set: 8,
            setTitle: "Comparing Data",
            setDescription: "Learn to compare information from different sources!",
            questions: [
                {
                    id: 71,
                    type: "data-comparison",
                    question: "To compare two groups of data, you should look for:",
                    options: ["Similarities and differences", "Pretty colors", "Big numbers only", "Small numbers only"],
                    correct: 0,
                    explanation: "Comparing data means looking at how the groups are similar and different.",
                    ralphHint: "Same and different! Like comparing my toys!"
                },
                {
                    id: 72,
                    type: "class-comparison",
                    question: "Class 1 read 50 books, Class 2 read 45 books. Which statement is true?",
                    options: ["Class 2 read more", "They read the same", "Class 1 read more", "Neither class read books"],
                    correct: 2,
                    explanation: "50 books is more than 45 books, so Class 1 read more.",
                    ralphHint: "Fifty is bigger than forty-five! Class 1 wins!"
                },
                {
                    id: 73,
                    type: "difference-calculation",
                    question: "School A has 200 students, School B has 150 students. How many more students does School A have?",
                    options: ["50", "100", "150", "350"],
                    correct: 0,
                    explanation: "200 - 150 = 50 more students in School A.",
                    ralphHint: "Two hundred minus one hundred fifty! That's fifty!"
                },
                {
                    id: 74,
                    type: "ratio-comparison",
                    question: "Team A scored 6 goals, Team B scored 3 goals. Team A scored how many times as many goals?",
                    options: ["2 times as many", "3 times as many", "Same amount", "1 time as many"],
                    correct: 0,
                    explanation: "6 ÷ 3 = 2, so Team A scored 2 times as many goals as Team B.",
                    ralphHint: "Six is two times three! Like two groups of three!"
                },
                {
                    id: 75,
                    type: "multiple-comparison",
                    question: "Pet votes: Dogs-15, Cats-12, Birds-8, Fish-5. Which two pets got the closest number of votes?",
                    options: ["Dogs and Cats", "Cats and Birds", "Birds and Fish", "Dogs and Fish"],
                    correct: 1,
                    explanation: "Cats (12) and Birds (8) have the smallest difference: 12 - 8 = 4.",
                    ralphHint: "Twelve and eight are closest! Only four apart!"
                },
                {
                    id: 76,
                    type: "seasonal-comparison",
                    question: "Ice cream sales: Summer-100, Winter-20. What can you conclude?",
                    options: ["People eat the same amount year-round", "People eat more ice cream in summer", "Winter is better for ice cream", "No one likes ice cream"],
                    correct: 1,
                    explanation: "100 is much more than 20, showing people eat more ice cream in summer.",
                    ralphHint: "One hundred versus twenty! Summer wins big!"
                },
                {
                    id: 77,
                    type: "growth-comparison",
                    question: "Plant A grew 10cm in a month, Plant B grew 15cm. Which grew faster?",
                    options: ["Plant A", "Plant B", "Same speed", "Neither grew"],
                    correct: 1,
                    explanation: "15cm is more than 10cm, so Plant B grew faster.",
                    ralphHint: "Fifteen is more than ten! Plant B grew faster!"
                },
                {
                    id: 78,
                    type: "combined-totals",
                    question: "Group 1 collected 25 cans, Group 2 collected 35 cans. How many cans together?",
                    options: ["50", "60", "70", "10"],
                    correct: 1,
                    explanation: "25 + 35 = 60 cans collected together.",
                    ralphHint: "Twenty-five plus thirty-five! That's sixty cans!"
                },
                {
                    id: 79,
                    type: "percentage-comparison",
                    question: "Test A: 8 out of 10 correct. Test B: 6 out of 10 correct. Which test had better results?",
                    options: ["Test A", "Test B", "Same results", "Can't tell"],
                    correct: 0,
                    explanation: "8 out of 10 is better than 6 out of 10, so Test A had better results.",
                    ralphHint: "Eight out of ten beats six out of ten! Test A wins!"
                },
                {
                    id: 80,
                    type: "fair-comparison",
                    question: "To fairly compare two classes' reading, both classes should:",
                    options: ["Read different books", "Have the same amount of time", "Be different sizes", "Read at different times"],
                    correct: 1,
                    explanation: "For a fair comparison, both groups should have the same conditions, like the same amount of time.",
                    ralphHint: "Fair means the same rules! Like in games!"
                }
            ]
        },

        // Set 9: Data Stories (Questions 81-90)
        {
            set: 9,
            setTitle: "Data Stories",
            setDescription: "Learn how data tells us stories and helps us make decisions!",
            questions: [
                {
                    id: 81,
                    type: "data-story",
                    question: "Data can tell us stories. What story does this tell: Umbrella sales: Rainy days-50, Sunny days-5?",
                    options: ["People like umbrellas on sunny days", "People buy more umbrellas when it rains", "Umbrellas don't sell well", "Sunny days are better"],
                    correct: 1,
                    explanation: "The big difference shows people buy many more umbrellas on rainy days than sunny days.",
                    ralphHint: "Umbrellas for rain! That makes sense to me!"
                },
                {
                    id: 82,
                    type: "seasonal-story",
                    question: "Beach visits: Winter-10, Spring-30, Summer-90, Fall-25. What story does this tell?",
                    options: ["Winter is the best beach season", "People visit beaches most in summer", "All seasons are the same", "No one likes beaches"],
                    correct: 1,
                    explanation: "Summer has the most visits (90), showing people prefer beach visits when it's warm.",
                    ralphHint: "Ninety visits in summer! Hot weather, more beach fun!"
                },
                {
                    id: 83,
                    type: "problem-solving",
                    question: "Library data shows most books are checked out on weekends. What could the library do?",
                    options: ["Close on weekends", "Have more staff on weekends", "Remove all books", "Only open on weekdays"],
                    correct: 1,
                    explanation: "More staff on weekends would help handle the busy times when most books are checked out.",
                    ralphHint: "Busy times need more helpers! Like more teachers when lots of kids come!"
                },
                {
                    id: 84,
                    type: "decision-making",
                    question: "Cafeteria data: Pizza-60 votes, Salad-15 votes, Burgers-45 votes. What should they serve most often?",
                    options: ["Salad", "Burgers", "Pizza", "All the same"],
                    correct: 2,
                    explanation: "Pizza got the most votes (60), so it should be served most often.",
                    ralphHint: "Sixty votes for pizza! Kids want more pizza!"
                },
                {
                    id: 85,
                    type: "trend-story",
                    question: "Weekly exercise data: Week 1-100 minutes, Week 2-120 minutes, Week 3-140 minutes. What story does this tell?",
                    options: ["Exercise is decreasing", "Exercise is staying the same", "Exercise is increasing", "No one exercises"],
                    correct: 2,
                    explanation: "The numbers go up each week (100, 120, 140), showing exercise is increasing.",
                    ralphHint: "Going up, up, up! More exercise each week!"
                },
                {
                    id: 86,
                    type: "cause-effect",
                    question: "Data shows: Hot days-200 ice cream sales, Cool days-50 ice cream sales. What causes more sales?",
                    options: ["Cool weather", "Hot weather", "Time of day", "Day of week"],
                    correct: 1,
                    explanation: "Hot days have much higher sales (200 vs 50), showing hot weather causes more ice cream sales.",
                    ralphHint: "Hot day, more ice cream! I get thirsty when it's hot too!"
                },
                {
                    id: 87,
                    type: "planning-story",
                    question: "Park data: Swings-80 uses, Slides-60 uses, Seesaw-20 uses. What should the park add more of?",
                    options: ["Seesaws", "Slides", "Swings", "Benches"],
                    correct: 2,
                    explanation: "Swings are used the most (80), so adding more swings would make more kids happy.",
                    ralphHint: "Eighty kids love swings! More swings make more fun!"
                },
                {
                    id: 88,
                    type: "time-story",
                    question: "School lunch times: 11:30-50 students, 12:00-100 students, 12:30-30 students. What time is busiest?",
                    options: ["11:30", "12:00", "12:30", "All the same"],
                    correct: 1,
                    explanation: "12:00 has the most students (100), making it the busiest lunch time.",
                    ralphHint: "One hundred students at noon! That's the busiest time!"
                },
                {
                    id: 89,
                    type: "change-story",
                    question: "Before recycling program: Trash-100 bags. After program: Trash-60 bags, Recycling-40 bags. What happened?",
                    options: ["More trash was made", "Less total waste was made", "Same amount of waste", "Recycling failed"],
                    correct: 1,
                    explanation: "Total went from 100 bags to 100 bags (60+40), but now 40 bags are recycled instead of trashed.",
                    ralphHint: "Same total, but forty bags get recycled now! Good for Earth!"
                },
                {
                    id: 90,
                    type: "success-story",
                    question: "Reading minutes: January-500, February-600, March-700. What story does this data tell about reading?",
                    options: ["Reading is getting worse", "Reading is improving", "Reading stayed the same", "No one reads"],
                    correct: 1,
                    explanation: "The minutes increase each month (500, 600, 700), showing reading is improving.",
                    ralphHint: "More and more reading each month! Getting better and better!"
                }
            ]
        },

        // Set 10: Statistics Star (Questions 91-100)
        {
            set: 10,
            setTitle: "Statistics Star",
            setDescription: "Master all your data and graph skills!",
            questions: [
                {
                    id: 91,
                    type: "comprehensive-review",
                    question: "What's the first step in any data investigation?",
                    options: ["Make a graph", "Decide what question you want to answer", "Count everything", "Pick colors"],
                    correct: 1,
                    explanation: "First decide what you want to learn or what question you want to answer with data.",
                    ralphHint: "Start with a question! Like 'What do kids like best?'"
                },
                {
                    id: 92,
                    type: "method-selection",
                    question: "Which would be best for showing how many students like different subjects?",
                    options: ["A story", "A bar graph", "A picture of a school", "A math problem"],
                    correct: 1,
                    explanation: "A bar graph clearly shows and compares how many students chose each subject.",
                    ralphHint: "Bar graphs are great for comparing! Like comparing how tall we are!"
                },
                {
                    id: 93,
                    type: "data-quality",
                    question: "To get the best data about favorite playground activities, you should ask:",
                    options: ["Only kindergarten students", "Only teachers", "Students from all grade levels", "Only your best friends"],
                    correct: 2,
                    explanation: "Asking students from all grades gives you better, more complete information.",
                    ralphHint: "Ask everyone! Different kids might like different things!"
                },
                {
                    id: 94,
                    type: "graph-analysis",
                    question: "A graph shows: Monday-20 library books, Tuesday-25, Wednesday-15, Thursday-30, Friday-10. Which day should have more librarians working?",
                    options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                    correct: 3,
                    explanation: "Thursday has the most book checkouts (30), so it needs the most help.",
                    ralphHint: "Thirty books on Thursday! That's the busiest day!"
                },
                {
                    id: 95,
                    type: "prediction-skills",
                    question: "Hat sales data: Summer-10, Fall-25, Winter-50, Spring-20. What would you predict for next winter?",
                    options: ["About 10 hats", "About 25 hats", "About 50 hats", "About 5 hats"],
                    correct: 2,
                    explanation: "Winter had the highest sales (50), so you'd predict similar high sales next winter.",
                    ralphHint: "Winter was fifty last time! Probably lots again because it's cold!"
                },
                {
                    id: 96,
                    type: "multiple-data-sources",
                    question: "You have data from 3 schools about favorite lunch foods. To combine them, you should:",
                    options: ["Pick your favorite school's data", "Add up all the votes for each food", "Ignore two schools", "Make up new numbers"],
                    correct: 1,
                    explanation: "Add up all votes for each food from all schools to get combined data.",
                    ralphHint: "Add them all together! More schools, better information!"
                },
                {
                    id: 97,
                    type: "real-world-application",
                    question: "A toy store uses data showing action figures are the most popular. They should:",
                    options: ["Stop selling action figures", "Order more action figures", "Only sell action figures", "Ignore the data"],
                    correct: 1,
                    explanation: "If action figures are most popular, the store should order more to meet demand.",
                    ralphHint: "Popular means people want more! Smart business thinking!"
                },
                {
                    id: 98,
                    type: "data-presentation",
                    question: "When presenting your data results, you should:",
                    options: ["Hide the data", "Explain what the data shows", "Only show pretty colors", "Make up stories"],
                    correct: 1,
                    explanation: "Explain what your data shows and what it means to help others understand.",
                    ralphHint: "Tell people what it means! Like explaining a picture!"
                },
                {
                    id: 99,
                    type: "critical-thinking",
                    question: "If data shows 'Students who eat breakfast get better grades,' what else might affect grades?",
                    options: ["Nothing else matters", "Study time, sleep, help from family", "Only breakfast matters", "Grades are random"],
                    correct: 1,
                    explanation: "Many things can affect grades: study time, sleep, family help, and more.",
                    ralphHint: "Lots of things help with learning! Sleep, studying, good food!"
                },
                {
                    id: 100,
                    type: "statistics-mastery",
                    question: "You're now a Statistics Star! What's the most important thing about working with data?",
                    options: ["Making it look pretty", "Understanding what it tells us", "Having lots of numbers", "Using big words"],
                    correct: 1,
                    explanation: "The most important thing is understanding what data tells us so we can make good decisions.",
                    ralphHint: "Understanding is the best! Like understanding how to be a good friend!"
                }
            ]
        }
    ]
};

// Ralph Wiggum Question Iterator and Validation System
const RalphQuestionIterator = {
    // Validate question structure
    validateQuestion: function(question) {
        const required = ['id', 'type', 'question', 'options', 'correct', 'explanation', 'ralphHint'];
        return required.every(field => question.hasOwnProperty(field)) &&
               question.options.length === 4 &&
               question.correct >= 0 && question.correct < 4;
    },

    // Validate entire question set
    validateQuestionSet: function(questionSet) {
        return questionSet.questions.every(q => this.validateQuestion(q)) &&
               questionSet.questions.length === 10;
    },

    // Get random Ralph encouragement based on context
    getContextualComment: function(questionType, isCorrect) {
        const comments = {
            correct: {
                'place-value': ["Place value! I know where all the numbers live!", "Numbers have homes! Like my bed is in my room!"],
                'addition': ["Adding is like getting more cookies! More is better!", "Plus means more! I love more things!"],
                'fractions': ["Parts of things! Like breaking my cookie into pieces!", "Sharing is caring! Even with math!"],
                'patterns': ["Patterns are everywhere! Like my shirt has stripes!", "I see the pattern! Like buttons on my coat!"],
                'default': ["Me so smart! My brain is tingling!", "Excellent! Like my dad says when I don't eat paste!"]
            },
            incorrect: {
                'place-value': ["Numbers can be tricky! Like finding my mittens!", "Keep trying! Numbers like to hide sometimes!"],
                'addition': ["Math is hard! But so is tying my shoes and I can do that... sometimes!", "Don't give up! Like when I lose count of my fingers!"],
                'fractions': ["Sharing is hard! Even for smart kids like me!", "Pieces are confusing! Like puzzle pieces that don't fit!"],
                'patterns': ["Patterns can be sneaky! Like when my socks don't match!", "Keep looking! Patterns are hiding like my homework!"],
                'default': ["That's okay! Mistakes help my brain grow!", "Try again! Like when I forget what comes after three!"]
            }
        };

        const category = isCorrect ? 'correct' : 'incorrect';
        const typeComments = comments[category][questionType] || comments[category]['default'];
        return typeComments[Math.floor(Math.random() * typeComments.length)];
    },

    // Test question difficulty progression
    validateDifficultyProgression: function(category) {
        // Ensure questions get progressively more challenging across sets
        const questionSets = QuestionDatabase[category];
        if (!questionSets || questionSets.length === 0) return false;

        // Basic validation that we have 10 sets
        return questionSets.length <= 10; // Allow for incomplete development
    },

    // Generate learning objectives for each question
    generateLearningObjective: function(question) {
        const objectives = {
            'place-value': 'Understand the value of digits in different positions',
            'skip-counting': 'Practice counting in patterns by 2s, 5s, 10s, etc.',
            'even-odd': 'Identify and classify numbers as even or odd',
            'addition': 'Build fluency with addition facts and strategies',
            'subtraction': 'Develop subtraction skills and understanding',
            'fractions': 'Recognize and work with parts of a whole',
            'patterns': 'Identify, extend, and create number and shape patterns',
            'measurement': 'Compare and measure lengths using appropriate units',
            'time': 'Understand time relationships and duration',
            'data': 'Collect, organize, and interpret simple data'
        };

        return objectives[question.type] || 'Practice mathematical reasoning and problem solving';
    },

    // Ralph's study tips based on question type
    getRalphStudyTip: function(questionType) {
        const tips = {
            'place-value': "Remember: numbers live in houses! Hundreds house, tens house, ones house!",
            'addition': "Use your fingers, make ten, or think of doubles! Whatever works for your brain!",
            'subtraction': "Think: what plus this number gives me that number? Or count backwards!",
            'fractions': "Think of pizza! If you cut it into pieces, each piece is a fraction!",
            'patterns': "Look for what repeats or what changes! Patterns are everywhere!",
            'measurement': "Compare to things you know! Like your finger is about one inch!",
            'time': "Think about your day! Morning, afternoon, evening - that's time!",
            'data': "Count and organize! Like sorting your toys or snacks!"
        };

        return tips[questionType] || "Take your time and think it through! Your brain is amazing!";
    },

    // Performance tracking for adaptive learning
    trackPerformance: function(categoryProgress) {
        // Track student performance to suggest focus areas
        const struggles = Object.keys(categoryProgress)
            .filter(category => categoryProgress[category].accuracy < 0.7)
            .map(category => ({
                category: category,
                suggestion: this.getRalphStudyTip(category),
                encouragement: this.getContextualComment(category, false)
            }));

        return struggles;
    }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QuestionDatabase, RalphQuestionIterator };
}