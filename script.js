// Simple AI Response Database
const aiResponses = {
    'halo': 'Halo! Apa kabar? Ada yang bisa saya bantu?',
    'apa itu ai': 'AI (Artificial Intelligence) adalah simulasi kecerdasan manusia yang dilakukan oleh mesin. AI dapat belajar dari data dan membuat keputusan.',
    'python': 'Python adalah bahasa pemrograman tingkat tinggi yang mudah dipelajari. Populer untuk data science, web development, dan machine learning.',
    'coding tips': '💡 Tips Belajar Coding:\n1. Mulai dari dasar\n2. Praktik setiap hari\n3. Buat project nyata\n4. Join komunitas\n5. Jangan takut error',
    'haiku': '🌸 Sakura mekar\nUdara sejuk pagi ini\nHidup penuh harapan',
    'terima kasih': 'Sama-sama! Senang membantu 😊',
    'siapa kamu': 'Saya adalah AI Assistant yang siap membantu menjawab pertanyaan Anda.',
    'github': 'GitHub adalah platform untuk version control dan kolaborasi kode. Tempat yang bagus untuk developer!',
    'javascript': 'JavaScript adalah bahasa pemrograman yang digunakan untuk membuat website interaktif. Berjalan di browser maupun server.',
    'web': 'Web development meliputi: Frontend (HTML, CSS, JS), Backend (Python, Node.js), dan Database. Keren!',
    'default': 'Pertanyaan menarik! Saya masih belajar tentang topik itu. Coba tanya hal lain ya! 😊'
};

// DOM Elements
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Event Listeners
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Send Message Function
function sendMessage() {
    const message = userInput.value.trim();
    
    if (message === '') return;

    // Display user message
    displayMessage(message, 'user');
    
    // Clear input
    userInput.value = '';
    userInput.focus();

    // Show loading
    showLoading();

    // Simulate AI response delay
    setTimeout(() => {
        removeLoading();
        const response = getAIResponse(message);
        displayMessage(response, 'bot');
    }, 800);
}

// Get AI Response
function getAIResponse(message) {
    const lowerMessage = message.toLowerCase();

    // Check exact matches
    for (let key in aiResponses) {
        if (lowerMessage.includes(key)) {
            return aiResponses[key];
        }
    }

    // Check partial matches
    for (let key in aiResponses) {
        if (lowerMessage.split(' ').some(word => word === key)) {
            return aiResponses[key];
        }
    }

    // Random responses untuk pertanyaan baru
    const randomResponses = [
        '🤔 Pertanyaan yang bagus! Saya perlu berpikir tentang itu...',
        '✨ Itu hal yang menarik untuk didiskusikan!',
        '💭 Hmm, saya belum terlalu mengerti tentang itu. Coba jelaskan lebih detail?',
        '🌟 Pertanyaan yang kreatif! Saya masih belajar...',
        '🎯 Interesting! Tapi saya belum punya informasi lengkap tentang itu.'
    ];

    return randomResponses[Math.floor(Math.random() * randomResponses.length)];
}

// Display Message
function displayMessage(text, sender) {
    const messageEl = document.createElement('div');
    messageEl.className = `chat-message ${sender}-message`;
    
    const contentEl = document.createElement('div');
    contentEl.className = 'message-content';
    contentEl.textContent = text;
    
    messageEl.appendChild(contentEl);
    chatBox.appendChild(messageEl);

    // Auto scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Show Loading
function showLoading() {
    const messageEl = document.createElement('div');
    messageEl.className = 'chat-message bot-message';
    messageEl.id = 'loading-message';
    
    const contentEl = document.createElement('div');
    contentEl.className = 'message-content loading';
    contentEl.innerHTML = '<span></span><span></span><span></span>';
    
    messageEl.appendChild(contentEl);
    chatBox.appendChild(messageEl);
    
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Remove Loading
function removeLoading() {
    const loadingEl = document.getElementById('loading-message');
    if (loadingEl) {
        loadingEl.remove();
    }
}

// Quick Ask Function
function quickAsk(question) {
    userInput.value = question;
    sendMessage();
}

// Clear Chat
function clearChat() {
    if (confirm('Apakah Anda yakin ingin menghapus semua chat?')) {
        chatBox.innerHTML = `
            <div class="chat-message bot-message">
                <div class="message-content">
                    👋 Chat telah dihapus. Mari mulai percakapan baru!
                </div>
            </div>
        `;
    }
}

// Initial greeting
window.addEventListener('load', () => {
    displayMessage('👋 Halo! Saya adalah AI Assistant. Tanya apa saja kepada saya!', 'bot');
});
