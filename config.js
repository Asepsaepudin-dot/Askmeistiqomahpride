// Configuration constants
const CONFIG = {
    API_ENDPOINT: 'https://api.openai.com/v1/chat/completions',
    MODELS: {
        'gpt-3.5-turbo': {
            name: 'GPT-3.5 Turbo',
            description: 'Cepat & Murah',
            maxTokens: 4096
        },
        'gpt-4': {
            name: 'GPT-4',
            description: 'Lebih Pintar',
            maxTokens: 8192
        },
        'gpt-4-turbo-preview': {
            name: 'GPT-4 Turbo',
            description: 'Terbaru & Terbaik',
            maxTokens: 128000
        }
    },
    DEFAULT_SETTINGS: {
        temperature: 0.7,
        maxTokens: 1000
    }
};
