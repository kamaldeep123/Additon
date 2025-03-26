// Global variables
let currentTable = null;
let audioPlayer = null;
let isPlaying = false;
let isRepeat = false;
let progressData = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    audioPlayer = document.getElementById('table-audio');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const repeatBtn = document.getElementById('repeat-btn');
    const tableButtons = document.querySelectorAll('.table-btn');
    
    // Load progress data from localStorage if available
    loadProgress();
    
    // Add event listeners to table buttons
    tableButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tableNumber = parseInt(this.getAttribute('data-table'));
            selectTable(tableNumber);
            
            // Update active button styling
            tableButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Add event listeners to audio controls
    playBtn.addEventListener('click', playTableSong);
    pauseBtn.addEventListener('click', pauseTableSong);
    repeatBtn.addEventListener('click', toggleRepeat);
    
    // Add event listener for audio completion
    audioPlayer.addEventListener('ended', function() {
        if (isRepeat) {
            // If repeat is on, play again
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } else {
            // If repeat is off, update progress and reset
            updateProgress(currentTable, 'Completed');
            isPlaying = false;
            playBtn.disabled = false;
            pauseBtn.disabled = true;
        }
    });
    
    // Add event listener for audio time update to update progress bar
    audioPlayer.addEventListener('timeupdate', updateProgressBar);
});

// Function to select a multiplication table
function selectTable(tableNumber) {
    currentTable = tableNumber;
    
    // Update the table title
    document.getElementById('current-table-title').textContent = `${tableNumber} Times Table`;
    
    // Generate and display the table
    generateTable(tableNumber);
    
    // Update audio source - changed from audio/table_${tableNumber}.mp3 to flat structure
    audioPlayer.src = `table_${tableNumber}.mp3`;
    
    // Enable play button
    document.getElementById('play-btn').disabled = false;
    document.getElementById('repeat-btn').disabled = false;
    
    // Update progress status to "In Progress" if not already completed
    if (progressData[tableNumber] !== 'Completed') {
        updateProgress(tableNumber, 'In Progress');
    }
}

// Function to generate multiplication table
function generateTable(tableNumber) {
    const tableContent = document.getElementById('table-content');
    tableContent.innerHTML = '';
    
    for (let i = 1; i <= 10; i++) {
        const result = tableNumber * i;
        const tableItem = document.createElement('div');
        tableItem.className = 'table-item';
        tableItem.setAttribute('data-index', i);
        tableItem.textContent = `${tableNumber} × ${i} = ${result}`;
        tableContent.appendChild(tableItem);
    }
}

// Function to play the table song
function playTableSong() {
    if (currentTable) {
        audioPlayer.play();
        isPlaying = true;
        document.getElementById('play-btn').disabled = true;
        document.getElementById('pause-btn').disabled = false;
        
        // Start highlighting table items in sequence
        highlightTableItems();
    }
}

// Function to pause the table song
function pauseTableSong() {
    audioPlayer.pause();
    isPlaying = false;
    document.getElementById('play-btn').disabled = false;
    document.getElementById('pause-btn').disabled = true;
}

// Function to toggle repeat
function toggleRepeat() {
    isRepeat = !isRepeat;
    const repeatBtn = document.getElementById('repeat-btn');
    repeatBtn.textContent = isRepeat ? 'Repeat: ON' : 'Repeat: OFF';
}

// Function to highlight table items in sequence during playback
function highlightTableItems() {
    // Remove all highlights first
    const tableItems = document.querySelectorAll('.table-item');
    tableItems.forEach(item => item.classList.remove('highlight'));
    
    // Calculate which item to highlight based on audio progress
    if (isPlaying && audioPlayer.duration) {
        const progressPercentage = audioPlayer.currentTime / audioPlayer.duration;
        const itemIndex = Math.floor(progressPercentage * 10);
        
        if (itemIndex < 10) {
            tableItems[itemIndex].classList.add('highlight');
        }
        
        // Schedule next highlight
        setTimeout(highlightTableItems, 100);
    }
}

// Function to update progress bar
function updateProgressBar() {
    if (audioPlayer.duration) {
        const progressPercentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        document.getElementById('progress').style.width = `${progressPercentage}%`;
    }
}

// Function to update progress status
function updateProgress(tableNumber, status) {
    progressData[tableNumber] = status;
    saveProgress();
    
    // Update UI
    const progressItem = document.querySelector(`.progress-item[data-table="${tableNumber}"]`);
    if (progressItem) {
        // Remove existing status classes
        progressItem.classList.remove('in-progress', 'completed');
        
        // Add appropriate class
        if (status === 'In Progress') {
            progressItem.classList.add('in-progress');
        } else if (status === 'Completed') {
            progressItem.classList.add('completed');
        }
        
        // Update status text
        const statusElement = progressItem.querySelector('.status');
        if (statusElement) {
            statusElement.textContent = status;
        }
    }
}

// Function to save progress to localStorage
function saveProgress() {
    localStorage.setItem('multiplicationTablesProgress', JSON.stringify(progressData));
}

// Function to load progress from localStorage
function loadProgress() {
    const savedProgress = localStorage.getItem('multiplicationTablesProgress');
    if (savedProgress) {
        progressData = JSON.parse(savedProgress);
        
        // Update UI based on loaded progress
        for (const tableNumber in progressData) {
            updateProgress(parseInt(tableNumber), progressData[tableNumber]);
        }
    }
}
