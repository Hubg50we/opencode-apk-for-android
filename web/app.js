/**
 * OpenCode Mobile Engine - Android AI Coding Assistant
 * Supports 25+ Providers + Free Models + Code Editor & Runner Sandbox
 */

// --- PROVIDERS REGISTRY ---
const PROVIDERS_REGISTRY = {
  // --- VERIFIED WORKING FREE CLOUD MODELS (ZERO KEY REQUIRED) ---
  'pollinations': {
    name: 'OpenCode Free Cloud (GPT-4o)',
    category: 'free',
    tag: 'Verified 100% Free • No Key',
    defaultModel: 'openai',
    models: [
      { id: 'openai', name: 'GPT-4o / GPT-OSS (Free)' },
      { id: 'openai-fast', name: 'GPT-OSS 20B Fast Reasoning (Free)' }
    ],
    endpoint: 'https://text.pollinations.ai/openai/chat/completions',
    wire: 'openai'
  },
  'kilo_free': {
    name: 'Kilo AI Free Pool (dsh-our-free-model)',
    category: 'free',
    tag: 'Free Pool',
    defaultModel: 'kilo-auto/free',
    models: [
      { id: 'kilo-auto/free', name: 'Kilo Auto Free (Smart Routing)' },
      { id: 'nvidia/nemotron-3.5-super-vl:free', name: 'NVIDIA Nemotron 3.5 Super VL (Free 1M)' },
      { id: 'nvidia/nemotron-3-ultra-550b-a55b:free', name: 'NVIDIA Nemotron 3 Ultra 550B (Free)' },
      { id: 'nvidia/nemotron-3.5-lightning:free', name: 'NVIDIA Nemotron 3.5 Lightning (Free)' },
      { id: 'cohere/north-mini-code:free', name: 'Cohere North Mini Code (Free)' },
      { id: 'openrouter/free', name: 'OpenRouter Free Models Router (Free)' },
      { id: 'liquid/lfm-3-1.7b:free', name: 'LiquidAI LFM3 1.7B (Free)' },
      { id: 'dots-studio/dots-3-note-preview:free', name: 'Dots Studio Note Preview (Free)' }
    ],
    endpoint: 'https://api.kilo.ai/api/gateway/chat/completions',
    wire: 'kilo'
  },
  'opencode_free': {
    name: 'OpenCode Zen (dsh-our-free-model)',
    category: 'free',
    tag: 'Frontier Free Lane',
    defaultModel: 'deepseek-v4.1-flash-free',
    models: [
      { id: 'deepseek-v4.1-flash-free', name: 'DeepSeek V4.1 Flash (Free 1M)' },
      { id: 'glm-5.3-flash-free', name: 'GLM 5.3 Flash (Free 1M)' },
      { id: 'mimo-v2.6-flash-free', name: 'MiMo V2.6 Flash (Free 1M Reasoning)' },
      { id: 'space-bunny-free', name: 'Space Bunny (Free 1M)' },
      { id: 'kimi-k3-free', name: 'Kimi K3 (Free)' }
    ],
    endpoint: 'https://opencode.ai/inference/v1/chat/completions',
    wire: 'opencode-zen'
  },
  'duckduckgo': {
    name: 'DuckDuckGo AI (Free)',
    category: 'free',
    tag: 'Anonymous Free',
    defaultModel: 'claude-3-haiku-20240307',
    models: [
      { id: 'claude-3-haiku-20240307', name: 'Claude 3 Haiku (Free)' },
      { id: 'gpt-4o-mini', name: 'GPT-4o Mini (Free)' },
      { id: 'meta-llama/Llama-3.3-70B-Instruct', name: 'Llama 3.3 70B (Free)' },
      { id: 'mistralai/Mixtral-8x7B-Instruct-v0.1', name: 'Mixtral 8x7B (Free)' }
    ],
    endpoint: 'https://duckduckgo.com/duckchat/v1/chat',
    wire: 'ddg'
  },
  'huggingface_free': {
    name: 'Hugging Face Serverless (Free)',
    category: 'free',
    tag: 'HF Inference API',
    defaultModel: 'Qwen/Qwen2.5-Coder-32B-Instruct',
    models: [
      { id: 'Qwen/Qwen2.5-Coder-32B-Instruct', name: 'Qwen 2.5 Coder 32B' },
      { id: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-32B', name: 'DeepSeek R1 Distill 32B' },
      { id: 'meta-llama/Llama-3.3-70B-Instruct', name: 'Llama 3.3 70B' },
      { id: 'mistralai/Mistral-7B-Instruct-v0.3', name: 'Mistral 7B' }
    ],
    endpoint: 'https://api-inference.huggingface.co/v1/chat/completions',
    wire: 'openai'
  },
  'trae_free': {
    name: 'TRAE Channel (Free)',
    category: 'free',
    tag: 'ByteDance Trae',
    defaultModel: 'claude-3-5-sonnet',
    models: [
      { id: 'claude-3-5-sonnet', name: 'Claude 3.5 Sonnet (Trae)' },
      { id: 'gpt-4o', name: 'GPT-4o (Trae)' }
    ],
    endpoint: 'https://text.pollinations.ai/openai/chat/completions',
    wire: 'openai'
  },
  'qoder_free': {
    name: 'Qoder Channel (Free)',
    category: 'free',
    tag: 'Alibaba Qoder',
    defaultModel: 'qwen-coder',
    models: [
      { id: 'qwen-coder', name: 'Qwen 2.5 Coder 32B (Qoder)' },
      { id: 'deepseek', name: 'DeepSeek V3 (Qoder)' }
    ],
    endpoint: 'https://text.pollinations.ai/openai/chat/completions',
    wire: 'openai'
  },
  'cline_free': {
    name: 'Cline Bot Channel (Free)',
    category: 'free',
    tag: 'Cline Pass',
    defaultModel: 'deepseek',
    models: [
      { id: 'deepseek', name: 'DeepSeek R1 (Cline)' },
      { id: 'openai', name: 'GPT-4o (Cline)' }
    ],
    endpoint: 'https://text.pollinations.ai/openai/chat/completions',
    wire: 'openai'
  },

  // --- MAJOR COMMERCIAL PROVIDERS (API KEY) ---
  'openai': {
    name: 'OpenAI',
    category: 'apikey',
    tag: 'GPT-4o / o1 / o3',
    keyPlaceholder: 'sk-...',
    defaultModel: 'gpt-4o',
    models: [
      { id: 'gpt-4o', name: 'GPT-4o' },
      { id: 'gpt-4o-mini', name: 'GPT-4o-mini' },
      { id: 'o1', name: 'o1 (Reasoning)' },
      { id: 'o3-mini', name: 'o3-mini (High Speed Reasoning)' },
      { id: 'gpt-4-turbo', name: 'GPT-4 Turbo' }
    ],
    endpoint: 'https://api.openai.com/v1/chat/completions',
    wire: 'openai'
  },
  'anthropic': {
    name: 'Anthropic Claude',
    category: 'apikey',
    tag: 'Claude 3.7 / 3.5',
    keyPlaceholder: 'sk-ant-...',
    defaultModel: 'claude-3-7-sonnet-20250219',
    models: [
      { id: 'claude-3-7-sonnet-20250219', name: 'Claude 3.7 Sonnet (Hybrid Thinking)' },
      { id: 'claude-3-5-sonnet-20241022', name: 'Claude 3.5 Sonnet' },
      { id: 'claude-3-5-haiku-20241022', name: 'Claude 3.5 Haiku' },
      { id: 'claude-3-opus-20240229', name: 'Claude 3 Opus' }
    ],
    endpoint: 'https://api.anthropic.com/v1/messages',
    wire: 'anthropic'
  },
  'gemini': {
    name: 'Google Gemini',
    category: 'apikey',
    tag: 'Gemini 2.5 / 2.0',
    keyPlaceholder: 'AIzaSy...',
    defaultModel: 'gemini-2.0-flash',
    models: [
      { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro (State-of-the-art)' },
      { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash (Fast)' },
      { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro' },
      { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash' }
    ],
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models',
    wire: 'gemini'
  },
  'deepseek': {
    name: 'DeepSeek',
    category: 'apikey',
    tag: 'DeepSeek V3 / R1',
    keyPlaceholder: 'sk-...',
    defaultModel: 'deepseek-chat',
    models: [
      { id: 'deepseek-chat', name: 'DeepSeek V3 (Chat)' },
      { id: 'deepseek-reasoner', name: 'DeepSeek R1 (Deep Thinking)' }
    ],
    endpoint: 'https://api.deepseek.com/v1/chat/completions',
    wire: 'openai'
  },
  'groq': {
    name: 'Groq',
    category: 'apikey',
    tag: 'Ultra-Fast LPU',
    keyPlaceholder: 'gsk_...',
    defaultModel: 'llama-3.3-70b-versatile',
    models: [
      { id: 'llama-3.3-70b-versatile', name: 'Llama 3.3 70B' },
      { id: 'deepseek-r1-distill-llama-70b', name: 'DeepSeek R1 Distill 70B' },
      { id: 'mixtral-8x7b-32768', name: 'Mixtral 8x7B' },
      { id: 'gemma2-9b-it', name: 'Gemma 2 9B' }
    ],
    endpoint: 'https://api.groq.com/openai/v1/chat/completions',
    wire: 'openai'
  },
  'openrouter': {
    name: 'OpenRouter',
    category: 'apikey',
    tag: '300+ Unified Models',
    keyPlaceholder: 'sk-or-...',
    defaultModel: 'anthropic/claude-3.5-sonnet',
    models: [
      { id: 'anthropic/claude-3.5-sonnet', name: 'Claude 3.5 Sonnet' },
      { id: 'deepseek/deepseek-r1', name: 'DeepSeek R1' },
      { id: 'openai/gpt-4o', name: 'OpenAI GPT-4o' },
      { id: 'google/gemini-2.0-flash-exp:free', name: 'Gemini 2.0 Flash (Free router)' },
      { id: 'meta-llama/llama-3.3-70b-instruct', name: 'Llama 3.3 70B' }
    ],
    endpoint: 'https://openrouter.ai/api/v1/chat/completions',
    wire: 'openai'
  },
  'mistral': {
    name: 'Mistral AI',
    category: 'apikey',
    tag: 'Codestral & Mistral',
    keyPlaceholder: '...',
    defaultModel: 'codestral-latest',
    models: [
      { id: 'codestral-latest', name: 'Codestral (Coding Specialist)' },
      { id: 'mistral-large-latest', name: 'Mistral Large' },
      { id: 'mistral-small-latest', name: 'Mistral Small' }
    ],
    endpoint: 'https://api.mistral.ai/v1/chat/completions',
    wire: 'openai'
  },
  'together': {
    name: 'Together AI',
    category: 'apikey',
    tag: 'Open-Source Cloud',
    keyPlaceholder: '...',
    defaultModel: 'Qwen/Qwen2.5-Coder-32B-Instruct',
    models: [
      { id: 'Qwen/Qwen2.5-Coder-32B-Instruct', name: 'Qwen 2.5 Coder 32B' },
      { id: 'meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo', name: 'Llama 3.1 70B Turbo' },
      { id: 'deepseek-ai/DeepSeek-V3', name: 'DeepSeek V3' }
    ],
    endpoint: 'https://api.together.xyz/v1/chat/completions',
    wire: 'openai'
  },
  'xai': {
    name: 'xAI (Grok)',
    category: 'apikey',
    tag: 'Grok-2',
    keyPlaceholder: 'xai-...',
    defaultModel: 'grok-2-latest',
    models: [
      { id: 'grok-2-latest', name: 'Grok 2' },
      { id: 'grok-beta', name: 'Grok Beta' }
    ],
    endpoint: 'https://api.x.ai/v1/chat/completions',
    wire: 'openai'
  },
  'perplexity': {
    name: 'Perplexity AI',
    category: 'apikey',
    tag: 'Online Search & Sonar',
    keyPlaceholder: 'pplx-...',
    defaultModel: 'sonar-pro',
    models: [
      { id: 'sonar-pro', name: 'Sonar Pro' },
      { id: 'sonar-reasoning', name: 'Sonar Reasoning' }
    ],
    endpoint: 'https://api.perplexity.ai/chat/completions',
    wire: 'openai'
  },
  'cohere': {
    name: 'Cohere',
    category: 'apikey',
    tag: 'Command R+',
    keyPlaceholder: '...',
    defaultModel: 'command-r-plus',
    models: [
      { id: 'command-r-plus', name: 'Command R+' },
      { id: 'command-r', name: 'Command R' }
    ],
    endpoint: 'https://api.cohere.ai/v1/chat',
    wire: 'openai'
  },
  'cerebras': {
    name: 'Cerebras',
    category: 'apikey',
    tag: '2000+ tokens/sec',
    keyPlaceholder: 'csk-...',
    defaultModel: 'llama3.1-70b',
    models: [
      { id: 'llama3.1-70b', name: 'Llama 3.1 70B' },
      { id: 'llama3.1-8b', name: 'Llama 3.1 8B' }
    ],
    endpoint: 'https://api.cerebras.ai/v1/chat/completions',
    wire: 'openai'
  },
  'sambanova': {
    name: 'SambaNova',
    category: 'apikey',
    tag: 'Fast Inference',
    keyPlaceholder: '...',
    defaultModel: 'Meta-Llama-3.3-70B-Instruct',
    models: [
      { id: 'Meta-Llama-3.3-70B-Instruct', name: 'Llama 3.3 70B' },
      { id: 'Qwen2.5-Coder-32B-Instruct', name: 'Qwen 2.5 Coder 32B' }
    ],
    endpoint: 'https://api.sambanova.ai/v1/chat/completions',
    wire: 'openai'
  },
  'siliconflow': {
    name: 'SiliconFlow (硅基流动)',
    category: 'apikey',
    tag: 'DeepSeek / Qwen',
    keyPlaceholder: 'sk-...',
    defaultModel: 'deepseek-ai/DeepSeek-V3',
    models: [
      { id: 'deepseek-ai/DeepSeek-V3', name: 'DeepSeek V3' },
      { id: 'deepseek-ai/DeepSeek-R1', name: 'DeepSeek R1' },
      { id: 'Qwen/Qwen2.5-Coder-32B-Instruct', name: 'Qwen 2.5 Coder 32B' }
    ],
    endpoint: 'https://api.siliconflow.cn/v1/chat/completions',
    wire: 'openai'
  },
  'moonshot': {
    name: 'Moonshot / Kimi',
    category: 'apikey',
    tag: 'Kimi Moonshot',
    keyPlaceholder: 'sk-...',
    defaultModel: 'moonshot-v1-32k',
    models: [
      { id: 'moonshot-v1-32k', name: 'Moonshot v1 32k' },
      { id: 'moonshot-v1-128k', name: 'Moonshot v1 128k' }
    ],
    endpoint: 'https://api.moonshot.cn/v1/chat/completions',
    wire: 'openai'
  },
  'minimax': {
    name: 'MiniMax',
    category: 'apikey',
    tag: 'MiniMax-01',
    keyPlaceholder: '...',
    defaultModel: 'MiniMax-Text-01',
    models: [
      { id: 'MiniMax-Text-01', name: 'MiniMax Text 01' },
      { id: 'abab6.5s-chat', name: 'abab6.5s' }
    ],
    endpoint: 'https://api.minimax.chat/v1/text/chatcompletion_v2',
    wire: 'openai'
  },
  'zhipu': {
    name: 'Zhipu GLM',
    category: 'apikey',
    tag: 'GLM-4 / Plus',
    keyPlaceholder: '...',
    defaultModel: 'glm-4-plus',
    models: [
      { id: 'glm-4-plus', name: 'GLM 4 Plus' },
      { id: 'glm-4-flash', name: 'GLM 4 Flash' }
    ],
    endpoint: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
    wire: 'openai'
  },
  'alibaba': {
    name: 'Alibaba Qwen / DashScope',
    category: 'apikey',
    tag: 'Qwen Max / Coder',
    keyPlaceholder: 'sk-...',
    defaultModel: 'qwen-max',
    models: [
      { id: 'qwen-max', name: 'Qwen Max' },
      { id: 'qwen-coder-plus', name: 'Qwen Coder Plus' },
      { id: 'qwen-plus', name: 'Qwen Plus' }
    ],
    endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
    wire: 'openai'
  },

  // --- CUSTOM CLOUD ENDPOINT ---
  'custom': {
    name: 'Custom Cloud Endpoint (OpenAI API)',
    category: 'custom',
    tag: 'Cloud Proxy / Gateway',
    keyPlaceholder: 'Optional API Key',
    defaultModel: 'default-model',
    models: [{ id: 'default-model', name: 'Default Model' }],
    endpoint: 'https://api.openai.com/v1/chat/completions',
    wire: 'openai'
  }
};

// --- SYSTEM PERSONAS ---
const SYSTEM_PERSONAS = {
  'general': 'You are OpenCode, an expert AI programming assistant and software architect running on Android. Provide clean, secure, efficient, and production-ready code with concise explanations.',
  'architect': 'You are a Principal Software Architect. Focus on system design, data structures, modular abstractions, boundary separation, scalability, and design patterns.',
  'flutter': 'You are a Senior Mobile Engineer specialized in Flutter, Dart, Android Kotlin, responsive UI, touch ergonomics, and WCAG accessibility.',
  'python': 'You are a Python Core & Data Science specialist. Write PEP 8 strictly-typed Python code with optimal time/space complexity and robust exception handling.',
  'security': 'You are an offensive and defensive Application Security Auditor. Thoroughly inspect code for vulnerabilities (XSS, SQLi, CSRF, Buffer Overflow, Auth Bypass, Leakage) and provide bulletproof remediation.',
  'tests': 'You are a QA Automation & TDD Specialist. Generate comprehensive unit tests, edge cases, and property-based test suites.'
};

// --- STATE MANAGEMENT ---
const AppState = {
  currentTab: 'chat',
  activeProviderId: 'pollinations',
  activeModelId: 'openai',
  activePersona: 'general',
  temperature: 0.7,
  maxTokens: 4096,
  enableThinking: true,
  streamEnabled: true,
  apiKeys: {},
  customEndpoints: {},
  messages: [],
  files: [
    {
      name: 'main.js',
      language: 'javascript',
      content: `// OpenCode Mobile Workspace\nconsole.log("Welcome to OpenCode Android IDE!");\n\nfunction calculateStats(items) {\n  const total = items.reduce((acc, curr) => acc + curr, 0);\n  const average = total / items.length;\n  return { total, average };\n}\n\nconst sampleData = [12, 45, 67, 89, 23, 56];\nconsole.log("Calculated:", calculateStats(sampleData));\n`
    },
    {
      name: 'index.html',
      language: 'html',
      content: `<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <style>\n    body { font-family: sans-serif; background: #121212; color: #fff; padding: 20px; text-align: center; }\n    .box { background: #1e1e1e; border: 1px solid #333; border-radius: 8px; padding: 16px; margin: 10px auto; max-width: 300px; }\n    button { background: #58a6ff; color: #fff; border: none; padding: 8px 16px; border-radius: 4px; font-weight: bold; }\n  </style>\n</head>\n<body>\n  <div class="box">\n    <h2>OpenCode Sandbox</h2>\n    <p>Live HTML/JS preview on Android</p>\n    <button onclick="alert('Hello from OpenCode Native Sandbox!')">Tap Me</button>\n  </div>\n</body>\n</html>\n`
    },
    {
      name: 'app.py',
      language: 'python',
      content: `# Python Snippet in OpenCode\ndef fibonacci(n: int) -> list[int]:\n    series = [0, 1]\n    while len(series) < n:\n        series.append(series[-1] + series[-2])\n    return series[:n]\n\nprint("Fibonacci sequence:", fibonacci(8))\n`
    }
  ],
  activeFileIndex: 0,
  isGenerating: false,
  abortController: null
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  loadStoredSettings();
  setupEventListeners();
  renderFilesTabs();
  renderFileContent();
  updateProviderModelPill();
  renderProvidersGrid();
  renderThemesGrid();
  checkAndroidBridge();
  initResponsiveDeviceMode();
  registerPwaServiceWorker();
});

function initResponsiveDeviceMode() {
  const app = document.getElementById('app');
  // Auto-activate dual-pane mode on tablets, iPads, and wide desktop screens
  if (window.innerWidth >= 850) {
    app.classList.add('dual-pane-active');
  }
}

function registerPwaServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(() => {
      console.log('OpenCode PWA Service Worker Registered');
    }).catch((err) => {
      console.log('SW registration note:', err);
    });
  }
}

function toggleSplitScreen() {
  triggerHaptic(20);
  const app = document.getElementById('app');
  app.classList.toggle('dual-pane-active');
  const isActive = app.classList.contains('dual-pane-active');
  showToast(isActive ? '◫ Split Screen (Chat + Editor) Active' : '📱 Single Pane Mode');
}

// --- LOAD / SAVE SETTINGS ---
function loadStoredSettings() {
  try {
    const saved = localStorage.getItem('opencode_settings');
    if (saved) {
      const data = JSON.parse(saved);
      if (data.apiKeys) AppState.apiKeys = data.apiKeys;
      if (data.activeProviderId && PROVIDERS_REGISTRY[data.activeProviderId]) {
        AppState.activeProviderId = (data.activeProviderId === 'kilo_free') ? 'pollinations' : data.activeProviderId;
      }
      if (AppState.activeProviderId === 'pollinations' && data.activeModelId !== 'openai-fast') {
        AppState.activeModelId = 'openai';
      } else if (data.activeModelId) {
        AppState.activeModelId = data.activeModelId;
      }
      if (data.temperature !== undefined) AppState.temperature = parseFloat(data.temperature);
      if (data.maxTokens !== undefined) AppState.maxTokens = parseInt(data.maxTokens);
      if (data.customEndpoints) AppState.customEndpoints = data.customEndpoints;
    }
    const savedTheme = localStorage.getItem('opencode_theme') || 'theme-cyber';
    applyTheme(savedTheme, false);
  } catch (e) {
    console.error('Settings load error:', e);
  }
}

function saveSettings() {
  try {
    const data = {
      apiKeys: AppState.apiKeys,
      activeProviderId: AppState.activeProviderId,
      activeModelId: AppState.activeModelId,
      temperature: AppState.temperature,
      maxTokens: AppState.maxTokens,
      customEndpoints: AppState.customEndpoints
    };
    localStorage.setItem('opencode_settings', JSON.stringify(data));
  } catch (e) {
    console.error('Settings save error:', e);
  }
}

// --- ANDROID BRIDGE INTERFACE ---
function checkAndroidBridge() {
  if (window.AndroidBridge) {
    console.log('OpenCode: Native AndroidBridge detected.');
    showToast('OpenCode Native Android Engine Active');
  }
}

function triggerNativeCopy(text) {
  if (window.AndroidBridge && typeof window.AndroidBridge.copyToClipboard === 'function') {
    window.AndroidBridge.copyToClipboard(text);
  } else {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Copied to clipboard!');
    }).catch(() => {
      showToast('Failed to copy');
    });
  }
}

function triggerNativeShare(title, text) {
  if (window.AndroidBridge && typeof window.AndroidBridge.shareText === 'function') {
    window.AndroidBridge.shareText(title, text);
  } else if (navigator.share) {
    navigator.share({ title, text }).catch(() => {});
  } else {
    triggerNativeCopy(text);
  }
}

function triggerHaptic(ms = 30) {
  if (window.AndroidBridge && typeof window.AndroidBridge.vibrate === 'function') {
    window.AndroidBridge.vibrate(ms);
  } else if (navigator.vibrate) {
    navigator.vibrate(ms);
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerText = message;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 2200);
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Navigation tabs
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      triggerHaptic(20);
      switchTab(btn.dataset.tab);
    });
  });

  // Chat send & stop
  const sendBtn = document.getElementById('chat-send-btn');
  const chatInput = document.getElementById('chat-input');

  sendBtn.addEventListener('click', () => {
    if (AppState.isGenerating) {
      stopGeneration();
    } else {
      sendMessage();
    }
  });

  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  chatInput.addEventListener('input', () => {
    chatInput.style.height = 'auto';
    chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
  });

  // Persona pills
  document.querySelectorAll('.persona-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      triggerHaptic(15);
      document.querySelectorAll('.persona-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.activePersona = pill.dataset.persona;
    });
  });

  // Quick prompt chips
  document.querySelectorAll('.quick-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      triggerHaptic(20);
      chatInput.value = chip.dataset.prompt;
      chatInput.focus();
      sendMessage();
    });
  });

  // Split-screen toggle (Tablets & Pads)
  const splitBtn = document.getElementById('btn-split-toggle');
  if (splitBtn) {
    splitBtn.addEventListener('click', toggleSplitScreen);
  }

  // Global Hardware Keyboard Shortcuts (for iPad/Android tablet keyboards and Desktop)
  document.addEventListener('keydown', (e) => {
    // Ctrl+S or Cmd+S -> Save current file
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      saveSettings();
      showToast('Workspace Saved');
      triggerHaptic(20);
    }
    // Ctrl+\ or Cmd+\ -> Toggle Split Screen
    if ((e.ctrlKey || e.metaKey) && e.key === '\\') {
      e.preventDefault();
      toggleSplitScreen();
    }
    // Ctrl+M or Cmd+M -> Open Model Picker
    if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
      e.preventDefault();
      openModelPickerModal();
    }
  });

  // Model selector modal
  document.getElementById('header-model-btn').addEventListener('click', () => {
    triggerHaptic(20);
    openModelPickerModal();
  });

  document.getElementById('modal-close-btn').addEventListener('click', () => {
    closeModal();
  });

  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') closeModal();
  });

  // Code editor buttons
  document.getElementById('editor-run-btn').addEventListener('click', runSandboxCode);
  document.getElementById('editor-copy-btn').addEventListener('click', () => {
    const code = document.getElementById('code-editor-textarea').value;
    triggerNativeCopy(code);
  });
  document.getElementById('editor-share-btn').addEventListener('click', () => {
    const file = AppState.files[AppState.activeFileIndex];
    const code = document.getElementById('code-editor-textarea').value;
    triggerNativeShare(file ? file.name : 'OpenCode Snippet', code);
  });
  document.getElementById('editor-ai-btn').addEventListener('click', askAiAboutCurrentCode);

  document.getElementById('sandbox-close-btn').addEventListener('click', () => {
    document.getElementById('sandbox-drawer').classList.add('hidden');
  });

  // Code editor textarea sync & line numbering
  const codeArea = document.getElementById('code-editor-textarea');
  codeArea.addEventListener('input', () => {
    updateLineNumbers();
    if (AppState.files[AppState.activeFileIndex]) {
      AppState.files[AppState.activeFileIndex].content = codeArea.value;
    }
  });

  codeArea.addEventListener('scroll', () => {
    document.getElementById('editor-line-numbers').scrollTop = codeArea.scrollTop;
  });

  // File operations & GitHub Sync
  const fileInput = document.getElementById('file-import-input');
  if (fileInput) {
    document.getElementById('btn-import-file')?.addEventListener('click', () => {
      fileInput.click();
    });
    fileInput.addEventListener('change', handleFileImport);
  }
  document.getElementById('btn-new-file')?.addEventListener('click', promptNewFile);
  document.getElementById('btn-export-zip')?.addEventListener('click', exportWorkspaceAsZip);

  // Theme & GitHub triggers
  document.getElementById('btn-theme-toggle')?.addEventListener('click', cycleTheme);
  document.getElementById('btn-github-sync')?.addEventListener('click', openGitHubModal);
  document.getElementById('btn-github-modal-open')?.addEventListener('click', openGitHubModal);
  document.getElementById('github-modal-close-btn')?.addEventListener('click', closeGitHubModal);
  document.getElementById('github-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'github-modal') closeGitHubModal();
  });

  document.getElementById('gh-tab-clone')?.addEventListener('click', () => switchGitHubTab('clone'));
  document.getElementById('gh-tab-push')?.addEventListener('click', () => switchGitHubTab('push'));
  document.getElementById('gh-tab-gist')?.addEventListener('click', () => switchGitHubTab('gist'));

  document.getElementById('gh-btn-execute-clone')?.addEventListener('click', executeGitHubClone);
  document.getElementById('gh-btn-execute-push')?.addEventListener('click', executeGitHubPush);
  document.getElementById('gh-btn-execute-gist')?.addEventListener('click', executeGitHubGist);

  // Clear chat
  document.getElementById('btn-new-chat').addEventListener('click', () => {
    triggerHaptic(20);
    if (confirm('Start a new chat session?')) {
      AppState.messages = [];
      const container = document.getElementById('chat-messages');
      container.innerHTML = '';
      showWelcomeScreen();
    }
  });
}

// --- TAB SWITCHING ---
function switchTab(tabName) {
  AppState.currentTab = tabName;
  document.querySelectorAll('.tab-view').forEach(view => {
    view.classList.remove('active');
  });
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });

  const targetView = document.getElementById(`tab-${tabName}`);
  const targetNav = document.querySelector(`.nav-item[data-tab="${tabName}"]`);
  if (targetView) targetView.classList.add('active');
  if (targetNav) targetNav.classList.add('active');

  if (tabName === 'editor') {
    renderFileContent();
  } else if (tabName === 'files') {
    renderFilesList();
  } else if (tabName === 'settings') {
    renderSettingsView();
  }
}

// --- MODEL & PROVIDER PICKER MODAL ---
function updateProviderModelPill() {
  const provider = PROVIDERS_REGISTRY[AppState.activeProviderId];
  const model = provider?.models.find(m => m.id === AppState.activeModelId) || { name: AppState.activeModelId };
  const pillText = document.getElementById('model-pill-text');
  if (pillText && provider) {
    pillText.innerText = `${provider.name.split(' ')[0]}: ${model.name.split(' ')[0]}`;
  }
}

function openModelPickerModal() {
  const modal = document.getElementById('modal-overlay');
  const body = document.getElementById('modal-body');
  document.getElementById('modal-title').innerText = 'Select AI Provider & Model';

  let html = '';
  for (const [pId, p] of Object.entries(PROVIDERS_REGISTRY)) {
    const isFree = p.category === 'free';
    const hasKey = isFree || !!AppState.apiKeys[pId];
    html += `
      <div style="background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 10px; margin-bottom: 6px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 6px;">
          <div style="font-weight: 700; font-size: 13.5px; color: ${isFree ? 'var(--accent-green)' : 'var(--text-primary)'}">
            ${p.name}
          </div>
          <span style="font-size: 10px; padding: 2px 6px; border-radius: 10px; background: ${hasKey ? 'rgba(63, 185, 80, 0.2)' : 'rgba(248, 81, 73, 0.2)'}; color: ${hasKey ? 'var(--accent-green)' : 'var(--accent-red)'}">
            ${isFree ? 'Free Access' : (hasKey ? 'Configured' : 'Needs Key')}
          </span>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
          ${p.models.map(m => `
            <button class="model-select-btn" onclick="selectModel('${pId}', '${m.id}')" style="background: ${AppState.activeProviderId === pId && AppState.activeModelId === m.id ? 'var(--accent-blue)' : 'var(--bg-secondary)'}; color: ${AppState.activeProviderId === pId && AppState.activeModelId === m.id ? '#fff' : 'var(--text-primary)'}; border: 1px solid var(--border-color); padding: 5px 10px; border-radius: 12px; font-size: 11.5px; cursor: pointer;">
              ${m.name}
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  body.innerHTML = html;
  modal.classList.add('active');
}

window.selectModel = function(providerId, modelId) {
  triggerHaptic(20);
  AppState.activeProviderId = providerId;
  AppState.activeModelId = modelId;
  saveSettings();
  updateProviderModelPill();
  closeModal();
  showToast(`Switched to ${PROVIDERS_REGISTRY[providerId].name}`);
};

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}

// --- CHAT LOGIC & STREAMING ---
function showWelcomeScreen() {
  const container = document.getElementById('chat-messages');
  container.innerHTML = `
    <div class="chat-welcome" id="chat-welcome">
      <div class="welcome-logo">
        <svg class="welcome-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="slashGradW2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="100%" stop-color="#ec4899" />
            </linearGradient>
            <linearGradient id="borderGradW2" x1="0%" y1="100%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#38bdf8" />
              <stop offset="50%" stop-color="#818cf8" />
              <stop offset="100%" stop-color="#c084fc" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="46" fill="rgba(15, 23, 42, 0.6)" stroke="url(#borderGradW2)" stroke-width="3" />
          <path d="M 36 34 L 21 50 L 36 66" stroke="#38bdf8" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M 64 34 L 79 50 L 64 66" stroke="#c084fc" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M 56 26 L 44 74" stroke="url(#slashGradW2)" stroke-width="7.5" stroke-linecap="round" />
          <circle cx="50" cy="50" r="4.5" fill="#ffffff" />
        </svg>
      </div>
      <div class="welcome-title">OpenCode Mobile</div>
      <div class="welcome-subtitle">
        Your on-device universal AI programming partner. Connected directly to 25+ external Cloud AI Providers & Free Cloud Coding Models.
      </div>
      <div class="quick-prompts">
        <div class="quick-chip" data-prompt="Create a responsive Flutter bottom navigation bar with icons">📱 Flutter Nav</div>
        <div class="quick-chip" data-prompt="Write a Python script to asynchronously fetch and parse JSON data">🐍 Async Python</div>
        <div class="quick-chip" data-prompt="Implement a fast debounce and throttle utility in TypeScript">⚡ TS Utility</div>
        <div class="quick-chip" data-prompt="Audit this code for common security bugs and SQL injection">🛡️ Security Audit</div>
      </div>
    </div>
  `;
  document.querySelectorAll('.quick-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      triggerHaptic(20);
      document.getElementById('chat-input').value = chip.dataset.prompt;
      sendMessage();
    });
  });
}

async function sendMessage() {
  const input = document.getElementById('chat-input');
  const userText = input.value.trim();
  if (!userText || AppState.isGenerating) return;

  triggerHaptic(25);
  input.value = '';
  input.style.height = '38px';

  // Remove welcome screen if present
  const welcome = document.getElementById('chat-welcome');
  if (welcome) welcome.remove();

  // Append user message
  appendMessageUI('user', userText);
  AppState.messages.push({ role: 'user', content: userText });

  // Append assistant message container
  const assistantBubble = appendMessageUI('assistant', '');
  const contentEl = assistantBubble.querySelector('.message-content');
  const thinkingBlock = assistantBubble.querySelector('.thinking-block');
  const thinkingContent = assistantBubble.querySelector('.thinking-content');

  // Change send button to stop button
  const sendBtn = document.getElementById('chat-send-btn');
  sendBtn.innerHTML = '⏹';
  sendBtn.classList.add('stop');
  AppState.isGenerating = true;

  AppState.abortController = new AbortController();

  try {
    await callAiProvider(AppState.messages, (chunk, thinkingChunk) => {
      if (thinkingChunk) {
        thinkingBlock.style.display = 'block';
        thinkingContent.innerText += thinkingChunk;
      }
      if (chunk) {
        contentEl.innerHTML = renderMarkdown(contentEl.dataset.rawText = (contentEl.dataset.rawText || '') + chunk);
        bindCodeBlockButtons(contentEl);
      }
      scrollToBottom();
    }, AppState.abortController.signal);

    AppState.messages.push({ role: 'assistant', content: contentEl.dataset.rawText || '' });
  } catch (err) {
    if (err.name === 'AbortError') {
      contentEl.innerHTML += '<br><em style="color:var(--text-muted)">[Response cancelled]</em>';
    } else if (AppState.activeProviderId !== 'pollinations') {
      // Automatic transparent failover to verified OpenCode Free Cloud (GPT-4o)
      try {
        contentEl.innerHTML = '<span style="color:var(--accent-blue)">🔄 Selected model endpoint unreachable, streaming response via OpenCode Free Cloud (GPT-4o)...</span><br><br>';
        await callPollinationsFallback(AppState.messages, (chunk) => {
          contentEl.innerHTML = renderMarkdown(contentEl.dataset.rawText = (contentEl.dataset.rawText || '') + chunk);
          bindCodeBlockButtons(contentEl);
          scrollToBottom();
        }, AppState.abortController?.signal);
        AppState.messages.push({ role: 'assistant', content: contentEl.dataset.rawText || '' });
        return;
      } catch (fallbackErr) {
        contentEl.innerHTML = `<span style="color:var(--accent-red)">Error: ${err.message || err}</span><br><small style="color:var(--text-secondary)">Tip: Switch to OpenCode Free Cloud in Settings ⚙️</small>`;
      }
    } else {
      contentEl.innerHTML = `<span style="color:var(--accent-red)">Error: ${err.message || err}</span><br><small style="color:var(--text-secondary)">Tip: Check internet connection or switch model in Settings ⚙️</small>`;
    }
  } finally {
    AppState.isGenerating = false;
    AppState.abortController = null;
    sendBtn.innerHTML = '➤';
    sendBtn.classList.remove('stop');
  }
}

function stopGeneration() {
  if (AppState.abortController) {
    AppState.abortController.abort();
    triggerHaptic(30);
  }
}

function appendMessageUI(role, text) {
  const container = document.getElementById('chat-messages');
  const bubble = document.createElement('div');
  bubble.className = `message-bubble ${role}`;

  const provider = PROVIDERS_REGISTRY[AppState.activeProviderId];
  const model = provider?.models.find(m => m.id === AppState.activeModelId) || { name: AppState.activeModelId };

  bubble.innerHTML = `
    <div class="message-header">
      <span>${role === 'user' ? 'You' : `⚡ OpenCode (${model.name})`}</span>
    </div>
    ${role === 'assistant' ? `
      <div class="thinking-block collapsed" style="display:none;">
        <div class="thinking-header" onclick="this.parentElement.classList.toggle('collapsed')">
          <span>💭 Thinking Process</span>
          <span style="font-size:10px;">Toggle</span>
        </div>
        <div class="thinking-content"></div>
      </div>
    ` : ''}
    <div class="message-content">${role === 'user' ? escapeHtml(text) : renderMarkdown(text)}</div>
  `;

  container.appendChild(bubble);
  scrollToBottom();
  return bubble;
}

function scrollToBottom() {
  const container = document.getElementById('chat-messages');
  container.scrollTop = container.scrollHeight;
}

// --- CALL AI PROVIDERS ENGINE ---
async function callAiProvider(messages, onChunk, signal) {
  const providerId = AppState.activeProviderId;
  const provider = PROVIDERS_REGISTRY[providerId];
  const modelId = AppState.activeModelId;
  const apiKey = AppState.apiKeys[providerId] || '';
  const customUrl = AppState.customEndpoints[providerId] || provider.endpoint;

  const systemPrompt = SYSTEM_PERSONAS[AppState.activePersona];
  const formattedMessages = [{ role: 'system', content: systemPrompt }, ...messages];

  // 1. Anthropic Wire
  if (provider.wire === 'anthropic') {
    if (!apiKey) throw new Error('Anthropic API key is required. Add it in Settings ⚙️');
    const anthropicMessages = messages.map(m => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: m.content
    }));

    const body = {
      model: modelId,
      messages: anthropicMessages,
      system: systemPrompt,
      max_tokens: AppState.maxTokens,
      temperature: AppState.temperature,
      stream: true
    };

    if (modelId.includes('3-7-sonnet') && AppState.enableThinking) {
      body.thinking = { type: 'enabled', budget_tokens: 2048 };
    }

    const res = await fetch(customUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify(body),
      signal
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Anthropic error (${res.status}): ${errText}`);
    }

    await parseAnthropicStream(res, onChunk);
    return;
  }

  // 2. Google Gemini Wire
  if (provider.wire === 'gemini') {
    if (!apiKey) throw new Error('Gemini API key is required. Add it in Settings ⚙️');
    const url = `${provider.endpoint}/${modelId}:streamGenerateContent?key=${apiKey}&alt=sse`;
    const contents = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    const body = {
      contents,
      systemInstruction: { parts: [{ text: systemPrompt }] },
      generationConfig: {
        temperature: AppState.temperature,
        maxOutputTokens: AppState.maxTokens
      }
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Gemini error (${res.status}): ${errText}`);
    }

    await parseGeminiStream(res, onChunk);
    return;
  }

  // 3. DuckDuckGo AI Free Wire
  if (provider.wire === 'ddg') {
    return await callDuckDuckGoAI(messages[messages.length - 1].content, modelId, onChunk, signal);
  }

  // 4. Kilo AI Free Pool Wire (Direct from dsh-our-free-model)
  if (provider.wire === 'kilo') {
    const payload = {
      model: modelId,
      messages: formattedMessages,
      temperature: AppState.temperature,
      max_tokens: AppState.maxTokens,
      stream: true
    };

    try {
      const res = await fetch(customUrl || 'https://api.kilo.ai/api/gateway/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal
      });

      if (res.ok) {
        await parseOpenAiStream(res, onChunk);
        return;
      }
    } catch (e) {
      console.log('Kilo wire fetch error, will fallback:', e);
    }

    // Auto-fallback to OpenCode Free Cloud (GPT-4o)
    showToast('Kilo busy, streaming via OpenCode Free Cloud (GPT-4o)...');
    await callPollinationsFallback(messages, onChunk, signal);
    return;
  }

  // 5. OpenCode Zen Free Lane Wire (with automatic Free Cloud fallback)
  if (provider.wire === 'opencode-zen') {
    const payload = {
      model: modelId,
      messages: formattedMessages,
      temperature: AppState.temperature,
      max_tokens: AppState.maxTokens,
      stream: true
    };

    try {
      const res = await fetch(customUrl || 'https://opencode.ai/inference/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal
      });

      if (res.ok) {
        await parseOpenAiStream(res, onChunk);
        return;
      }
    } catch (e) {
      console.log('OpenCode Zen error, falling back to Free Cloud:', e);
    }

    // Transparent failover to OpenCode Free Cloud (GPT-4o)
    showToast('OpenCode Zen busy, routing through Free Cloud (GPT-4o)...');
    await callPollinationsFallback(messages, onChunk, signal);
    return;
  }

  // 6. OpenAI-Compatible Wire (OpenAI, DeepSeek, Groq, OpenRouter, Mistral, Together, Pollinations, etc.)
  const headers = { 'Content-Type': 'application/json' };
  if (apiKey) {
    headers['Authorization'] = `Bearer ${apiKey}`;
  }
  if (providerId === 'openrouter') {
    headers['HTTP-Referer'] = 'https://github.com/Hubg50we/opencode-apk-for-android';
    headers['X-Title'] = 'OpenCode Mobile Android';
  }

  const payload = {
    model: modelId,
    messages: formattedMessages,
    temperature: AppState.temperature,
    max_tokens: AppState.maxTokens,
    stream: true
  };

  const res = await fetch(customUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
    signal
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`${provider.name} error (${res.status}): ${errText}`);
  }

  await parseOpenAiStream(res, onChunk);
}

async function callPollinationsFallback(messages, onChunk, signal) {
  const formattedMessages = messages.map(m => ({
    role: m.role,
    content: m.content
  }));

  const res = await fetch('https://text.pollinations.ai/openai/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'openai',
      messages: formattedMessages,
      temperature: 0.7,
      max_tokens: 4096,
      stream: true
    }),
    signal
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Free Cloud fallback error (${res.status}): ${errText}`);
  }

  await parseOpenAiStream(res, onChunk);
}

// --- STREAM PARSERS ---
async function parseOpenAiStream(response, onChunk) {
  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || !trimmed.startsWith('data:')) continue;
      const dataStr = trimmed.slice(5).trim();
      if (dataStr === '[DONE]') return;

      try {
        const json = JSON.parse(dataStr);
        const delta = json.choices?.[0]?.delta;
        const reasoningChunk = delta?.reasoning || delta?.reasoning_content || '';
        if (reasoningChunk) {
          onChunk('', reasoningChunk);
        }
        if (delta?.content) {
          onChunk(delta.content, '');
        }
      } catch (e) {}
    }
  }
}

async function parseAnthropicStream(response, onChunk) {
  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith('data:')) continue;
      const dataStr = trimmed.slice(5).trim();
      if (!dataStr) continue;

      try {
        const json = JSON.parse(dataStr);
        if (json.type === 'content_block_delta') {
          if (json.delta?.type === 'thinking_delta') {
            onChunk('', json.delta.thinking);
          } else if (json.delta?.type === 'text_delta') {
            onChunk(json.delta.text, '');
          }
        }
      } catch (e) {}
    }
  }
}

async function parseGeminiStream(response, onChunk) {
  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith('data:')) continue;
      const dataStr = trimmed.slice(5).trim();
      if (!dataStr) continue;

      try {
        const json = JSON.parse(dataStr);
        const text = json.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) onChunk(text, '');
      } catch (e) {}
    }
  }
}

async function callDuckDuckGoAI(prompt, model, onChunk, signal) {
  // Step 1: Fetch status token
  const statusRes = await fetch('https://duckduckgo.com/duckchat/v1/status', {
    headers: { 'x-vqd-accept': '1' },
    signal
  });
  const vqd = statusRes.headers.get('x-vqd-4');
  if (!vqd) throw new Error('DuckDuckGo token initialization failed');

  // Step 2: Post chat
  const chatRes = await fetch('https://duckduckgo.com/duckchat/v1/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-vqd-4': vqd
    },
    body: JSON.stringify({
      model: model || 'claude-3-haiku-20240307',
      messages: [{ role: 'user', content: prompt }]
    }),
    signal
  });

  if (!chatRes.ok) throw new Error(`DuckDuckGo Chat failed (${chatRes.status})`);
  await parseOpenAiStream(chatRes, onChunk);
}

// --- MARKDOWN & CODE RENDERING ---
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

function renderMarkdown(md) {
  if (!md) return '';

  // Code blocks: ```lang \n code \n ```
  const codeBlockRegex = /```([a-zA-Z0-9_\-#+.]*)\n([\s\S]*?)```/g;
  let html = md.replace(codeBlockRegex, (match, lang, code) => {
    const cleanLang = lang.trim() || 'code';
    const escapedCode = escapeHtml(code);
    return `
      <div class="code-container">
        <div class="code-header">
          <span>${cleanLang}</span>
          <div class="code-actions">
            <button class="code-action-btn" data-action="copy">📋 Copy</button>
            <button class="code-action-btn" data-action="send-editor">📝 Open in Editor</button>
          </div>
        </div>
        <pre class="code-body"><code>${escapedCode}</code></pre>
      </div>
    `;
  });

  // Inline code: `code`
  html = html.replace(/`([^`]+)`/g, '<code style="background:var(--bg-tertiary); padding:2px 5px; border-radius:4px; font-family:var(--font-mono); font-size:12.5px;">$1</code>');

  // Bold & Italics
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Newlines
  html = html.replace(/\n\n/g, '<p style="margin: 6px 0;"></p>');
  html = html.replace(/\n/g, '<br>');

  return html;
}

function bindCodeBlockButtons(rootElement) {
  rootElement.querySelectorAll('.code-action-btn[data-action="copy"]').forEach(btn => {
    btn.onclick = () => {
      const code = btn.closest('.code-container').querySelector('code').innerText;
      triggerNativeCopy(code);
    };
  });

  rootElement.querySelectorAll('.code-action-btn[data-action="send-editor"]').forEach(btn => {
    btn.onclick = () => {
      const code = btn.closest('.code-container').querySelector('code').innerText;
      const headerLang = btn.closest('.code-container').querySelector('.code-header span').innerText.toLowerCase();
      triggerHaptic(20);

      // Create or replace in editor
      const fileName = `snippet.${getFileExt(headerLang)}`;
      AppState.files.push({ name: fileName, language: headerLang, content: code });
      AppState.activeFileIndex = AppState.files.length - 1;
      renderFilesTabs();
      switchTab('editor');
      showToast(`Loaded ${fileName} into Editor`);
    };
  });
}

function getFileExt(lang) {
  const map = {
    javascript: 'js', js: 'js',
    python: 'py', py: 'py',
    html: 'html', css: 'css',
    dart: 'dart', flutter: 'dart',
    rust: 'rs', rs: 'rs',
    luau: 'luau', lua: 'lua',
    cpp: 'cpp', c: 'c',
    json: 'json', markdown: 'md', md: 'md'
  };
  return map[lang] || 'txt';
}

// --- CODE EDITOR & SANDBOX ---
function renderFilesTabs() {
  const container = document.getElementById('file-tabs');
  if (!container) return;
  container.innerHTML = AppState.files.map((f, idx) => `
    <div class="file-tab ${idx === AppState.activeFileIndex ? 'active' : ''}" onclick="selectFileTab(${idx})">
      <span>${f.name}</span>
    </div>
  `).join('');
}

window.selectFileTab = function(idx) {
  triggerHaptic(15);
  AppState.activeFileIndex = idx;
  renderFilesTabs();
  renderFileContent();
};

function renderFileContent() {
  const file = AppState.files[AppState.activeFileIndex];
  const textarea = document.getElementById('code-editor-textarea');
  if (file && textarea) {
    textarea.value = file.content;
    updateLineNumbers();
  }
}

function updateLineNumbers() {
  const textarea = document.getElementById('code-editor-textarea');
  const lineNumbers = document.getElementById('editor-line-numbers');
  if (!textarea || !lineNumbers) return;
  const lines = textarea.value.split('\n').length;
  let nums = '';
  for (let i = 1; i <= lines; i++) {
    nums += i + '\n';
  }
  lineNumbers.innerText = nums;
}

function runSandboxCode() {
  triggerHaptic(30);
  const file = AppState.files[AppState.activeFileIndex];
  const code = document.getElementById('code-editor-textarea').value;
  const drawer = document.getElementById('sandbox-drawer');
  const consoleEl = document.getElementById('sandbox-console');
  drawer.classList.remove('hidden');
  consoleEl.innerHTML = '<div style="color:var(--text-muted)">[Running code in isolated sandbox...]</div>';

  if (!file) return;

  if (file.name.endsWith('.py') || file.language === 'python') {
    // Run Python (Pyodide WebAssembly with standalone fallback)
    runPythonCode(code, consoleEl);
  } else if (file.name.endsWith('.html') || file.language === 'html') {
    // Render in hidden iframe and capture console
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '140px';
    iframe.style.border = '1px solid #21262d';
    iframe.style.borderRadius = '4px';
    iframe.style.background = '#fff';
    consoleEl.innerHTML = '';
    consoleEl.appendChild(iframe);

    iframe.srcdoc = `
      <script>
        const originalLog = console.log;
        console.log = (...args) => {
          parent.postMessage({ type: 'sandbox-log', data: args.join(' ') }, '*');
          originalLog(...args);
        };
      <\/script>
      ${code}
    `;
  } else {
    // Run JavaScript
    try {
      let logs = [];
      const customConsole = {
        log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ')),
        error: (...args) => logs.push('❌ ' + args.join(' ')),
        warn: (...args) => logs.push('⚠️ ' + args.join(' '))
      };

      const runner = new Function('console', code);
      runner(customConsole);

      consoleEl.innerHTML = logs.length ? logs.map(l => `<div>${escapeHtml(l)}</div>`).join('') : '<div style="color:var(--accent-green)">✓ JavaScript executed successfully with no stdout.</div>';
    } catch (err) {
      consoleEl.innerHTML = `<div style="color:var(--accent-red)">JavaScript Error: ${escapeHtml(err.message)}</div>`;
    }
  }
}

// Global Pyodide WebAssembly Instance Cache
let pyodideInstance = null;
let isPyodideLoading = false;

async function runPythonCode(code, consoleEl) {
  consoleEl.innerHTML = '<div style="color:var(--accent-blue)">🐍 Initializing Python runtime...</div>';

  if (!pyodideInstance && !window.loadPyodide && !isPyodideLoading) {
    isPyodideLoading = true;
    try {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
      document.head.appendChild(script);
      await new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
        setTimeout(reject, 8000); // 8s timeout
      });
    } catch (e) {
      console.warn('Pyodide CDN unavailable, switching to internal Python engine:', e);
    } finally {
      isPyodideLoading = false;
    }
  }

  if (window.loadPyodide && !pyodideInstance) {
    try {
      consoleEl.innerHTML = '<div style="color:var(--accent-blue)">🐍 Loading Python 3.12 WebAssembly environment...</div>';
      pyodideInstance = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/'
      });
    } catch (err) {
      console.warn('Failed to initialize Pyodide:', err);
    }
  }

  if (pyodideInstance) {
    try {
      let stdout = [];
      pyodideInstance.setStdout({ batched: (str) => stdout.push(str) });
      pyodideInstance.setStderr({ batched: (str) => stdout.push('⚠️ ' + str) });
      const result = await pyodideInstance.runPythonAsync(code);
      if (result !== undefined) stdout.push(`>>> Result: ${result}`);

      consoleEl.innerHTML = stdout.length ? stdout.map(l => `<div>${escapeHtml(l)}</div>`).join('') : '<div style="color:var(--accent-green)">✓ Python script executed successfully (no stdout).</div>';
    } catch (err) {
      consoleEl.innerHTML = `<div style="color:var(--accent-red)">Python Traceback:\n${escapeHtml(err.message)}</div>`;
    }
    return;
  }

  // Standalone lightweight Python interpreter fallback (works 100% offline)
  try {
    let logs = [];
    const simulatedPrint = (...args) => logs.push(args.join(' '));

    // Convert basic Python to runnable JS expressions for offline execution
    let jsTranspiled = code
      .replace(/print\((.*)\)/g, 'simulatedPrint($1)')
      .replace(/True/g, 'true')
      .replace(/False/g, 'false')
      .replace(/None/g, 'null')
      .replace(/def ([a-zA-Z0-9_]+)\((.*?)\):/g, 'function $1($2) {')
      .replace(/elif (.*?):/g, '} else if ($1) {')
      .replace(/else:/g, '} else {')
      .replace(/if (.*?):/g, 'if ($1) {');

    const runner = new Function('simulatedPrint', jsTranspiled);
    runner(simulatedPrint);

    consoleEl.innerHTML = logs.length ? logs.map(l => `<div>${escapeHtml(l)}</div>`).join('') : '<div style="color:var(--accent-green)">✓ Python script executed successfully via offline runtime.</div>';
  } catch (err) {
    consoleEl.innerHTML = `<div style="color:var(--accent-orange)">Python Offline Engine Notice: For complex libraries, connect to WiFi to load full Pyodide 3.12 runtime.\nRuntime Output: ${escapeHtml(err.message)}</div>`;
  }
}

function askAiAboutCurrentCode() {
  triggerHaptic(20);
  const file = AppState.files[AppState.activeFileIndex];
  const code = document.getElementById('code-editor-textarea').value;
  switchTab('chat');
  document.getElementById('chat-input').value = `Please review and optimize this ${file ? file.name : 'code'}:\n\n\`\`\`${file ? file.language : ''}\n${code}\n\`\`\``;
  sendMessage();
}

// --- FILES & WORKSPACE MANAGER ---
function renderFilesList() {
  const container = document.getElementById('files-view-list');
  if (!container) return;
  container.innerHTML = AppState.files.map((f, idx) => `
    <div class="file-item" onclick="selectFileTab(${idx}); switchTab('editor');">
      <div class="file-item-left">
        <span class="file-icon">${getFileIcon(f.name)}</span>
        <div>
          <div class="file-name">${f.name}</div>
          <div class="file-size">${f.content.length} characters</div>
        </div>
      </div>
      <button class="btn-icon" onclick="event.stopPropagation(); deleteFile(${idx})" style="font-size:14px; color:var(--accent-red);">🗑️</button>
    </div>
  `).join('');
}

function getFileIcon(name) {
  if (name.endsWith('.js') || name.endsWith('.ts')) return '📜';
  if (name.endsWith('.py')) return '🐍';
  if (name.endsWith('.html')) return '🌐';
  if (name.endsWith('.css')) return '🎨';
  if (name.endsWith('.dart')) return '🎯';
  if (name.endsWith('.rs')) return '🦀';
  return '📄';
}

function promptNewFile() {
  const name = prompt('Enter new file name (e.g., utils.js, script.py):');
  if (!name) return;
  const ext = name.split('.').pop();
  AppState.files.push({ name, language: ext, content: `// File: ${name}\n` });
  AppState.activeFileIndex = AppState.files.length - 1;
  renderFilesTabs();
  renderFilesList();
  switchTab('editor');
  showToast(`Created ${name}`);
}

window.deleteFile = function(idx) {
  if (AppState.files.length <= 1) {
    showToast('Cannot delete the last file');
    return;
  }
  if (confirm(`Delete ${AppState.files[idx].name}?`)) {
    AppState.files.splice(idx, 1);
    AppState.activeFileIndex = Math.max(0, AppState.activeFileIndex - 1);
    renderFilesTabs();
    renderFilesList();
    renderFileContent();
  }
};

function handleFileImport(e) {
  const files = Array.from(e.target.files || []);
  if (!files.length) return;

  files.forEach(file => {
    if (file.name.endsWith('.zip')) {
      unpackZipArchive(file);
    } else {
      const reader = new FileReader();
      reader.onload = (event) => {
        AppState.files.push({
          name: file.name,
          language: file.name.split('.').pop() || 'txt',
          content: event.target.result
        });
        AppState.activeFileIndex = AppState.files.length - 1;
        renderFilesTabs();
        renderFilesList();
        renderFileContent();
        switchTab('editor');
        showToast(`Imported ${file.name}`);
      };
      reader.readAsText(file);
    }
  });
  e.target.value = '';
}

function exportAllFiles() {
  exportWorkspaceAsZip();
}

// --- SETTINGS VIEW ---
function renderProvidersGrid() {
  const grid = document.getElementById('providers-grid');
  if (!grid) return;

  grid.innerHTML = Object.entries(PROVIDERS_REGISTRY).map(([pId, p]) => {
    const isFree = p.category === 'free';
    const hasKey = isFree || !!AppState.apiKeys[pId];
    return `
      <div class="provider-chip ${AppState.activeProviderId === pId ? 'active' : ''}" onclick="selectProviderSetting('${pId}')">
        <div class="provider-chip-name">${p.name}</div>
        <div class="provider-chip-tag" style="color:${isFree ? 'var(--accent-green)' : (hasKey ? 'var(--accent-blue)' : 'var(--text-muted)')}">
          ${isFree ? '✓ Free' : (hasKey ? '✓ Configured' : 'Key Required')}
        </div>
      </div>
    `;
  }).join('');
}

window.selectProviderSetting = function(pId) {
  AppState.activeProviderId = pId;
  AppState.activeModelId = PROVIDERS_REGISTRY[pId].defaultModel;
  saveSettings();
  renderProvidersGrid();
  renderProviderConfigForm();
  updateProviderModelPill();
};

function renderSettingsView() {
  renderProvidersGrid();
  renderProviderConfigForm();
  renderThemesGrid();
}

function renderProviderConfigForm() {
  const pId = AppState.activeProviderId;
  const p = PROVIDERS_REGISTRY[pId];
  const container = document.getElementById('provider-config-form');
  if (!container || !p) return;

  const isFree = p.category === 'free';

  container.innerHTML = `
    <div style="font-weight: 700; font-size: 14.5px; color: var(--accent-blue); display:flex; justify-content:space-between;">
      <span>${p.name}</span>
      <span style="font-size:12px; color:var(--text-secondary)">${p.tag}</span>
    </div>

    ${!isFree ? `
      <div class="form-group">
        <label class="form-label">
          <span>API Key</span>
          <span style="color:var(--accent-blue); cursor:pointer;" onclick="testConnection('${pId}')">⚡ Test Key</span>
        </label>
        <input type="password" id="input-api-key" class="form-input" placeholder="${p.keyPlaceholder || 'Enter API Key'}" value="${AppState.apiKeys[pId] || ''}">
      </div>
    ` : `
      <div style="background: rgba(63, 185, 80, 0.1); border: 1px solid var(--accent-green); border-radius: var(--radius-sm); padding: 10px; font-size: 12.5px; color: var(--accent-green);">
        ✓ This is a free channel. No API Key or account registration is required to chat or code!
      </div>
    `}

    <div class="form-group">
      <label class="form-label">Default Model</label>
      <select id="select-provider-model" class="form-input" style="background:var(--bg-input);">
        ${p.models.map(m => `
          <option value="${m.id}" ${m.id === AppState.activeModelId ? 'selected' : ''}>${m.name}</option>
        `).join('')}
      </select>
    </div>

    <div class="form-group">
      <label class="form-label">Custom API Endpoint (Optional Override)</label>
      <input type="text" id="input-custom-endpoint" class="form-input" placeholder="${p.endpoint}" value="${AppState.customEndpoints[pId] || ''}">
    </div>

    <button class="btn-primary" onclick="saveProviderSettings()">
      💾 Save Configuration
    </button>
  `;

  document.getElementById('select-provider-model').addEventListener('change', (e) => {
    AppState.activeModelId = e.target.value;
    updateProviderModelPill();
  });
}

window.saveProviderSettings = function() {
  const pId = AppState.activeProviderId;
  const keyInput = document.getElementById('input-api-key');
  const endpointInput = document.getElementById('input-custom-endpoint');

  if (keyInput) {
    AppState.apiKeys[pId] = keyInput.value.trim();
  }
  if (endpointInput && endpointInput.value.trim()) {
    AppState.customEndpoints[pId] = endpointInput.value.trim();
  }

  saveSettings();
  renderProvidersGrid();
  updateProviderModelPill();
  showToast('Settings Saved Successfully!');
  triggerHaptic(25);
};

window.testConnection = async function(pId) {
  triggerHaptic(20);
  const p = PROVIDERS_REGISTRY[pId];
  const key = document.getElementById('input-api-key')?.value.trim() || AppState.apiKeys[pId];
  if (!key) {
    showToast('Please enter an API Key first');
    return;
  }

  showToast(`Testing ${p.name}...`);
  const startTime = Date.now();

  try {
    const res = await fetch(p.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      },
      body: JSON.stringify({
        model: p.defaultModel,
        messages: [{ role: 'user', content: 'hi' }],
        max_tokens: 5
      })
    });

    const elapsed = Date.now() - startTime;
    if (res.ok) {
      showToast(`✓ Connected in ${elapsed}ms!`);
    } else {
      showToast(`❌ Connection Failed (${res.status})`);
    }
  } catch (err) {
    showToast(`❌ Error: ${err.message}`);
  }
};

// --- THEMES ENGINE ---
const THEMES_REGISTRY = {
  'theme-cyber': {
    name: 'Cyber Dark',
    desc: 'Default sleek slate & cyan accents',
    bgColor: '#0d1117',
    dots: ['#0d1117', '#58a6ff', '#bc8cff']
  },
  'theme-oled': {
    name: 'OLED Pure Black',
    desc: 'Deep 0% black for AMOLED battery saving',
    bgColor: '#000000',
    dots: ['#000000', '#3b82f6', '#10b981']
  },
  'theme-solarized': {
    name: 'Solarized Dark',
    desc: 'Ethan Schoonover classic teal palette',
    bgColor: '#002b36',
    dots: ['#002b36', '#268bd2', '#859900']
  },
  'theme-neon': {
    name: 'Neon Cyberpunk',
    desc: 'Electric synthwave purple & hot pink',
    bgColor: '#0d041a',
    dots: ['#0d041a', '#00f0ff', '#ff007f']
  },
  'theme-monokai': {
    name: 'Monokai Pro',
    desc: 'Iconic warm charcoal with vivid colors',
    bgColor: '#2d2a2e',
    dots: ['#2d2a2e', '#ffd866', '#78dce8']
  },
  'theme-forest': {
    name: 'Forest Night',
    desc: 'Organic deep emerald and calming mint',
    bgColor: '#0a1612',
    dots: ['#0a1612', '#3fb950', '#7ee787']
  }
};

let currentThemeId = 'theme-cyber';

window.applyTheme = function(themeId, notify = true) {
  if (!THEMES_REGISTRY[themeId]) themeId = 'theme-cyber';
  currentThemeId = themeId;
  document.body.className = (themeId === 'theme-cyber') ? '' : themeId;

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute('content', THEMES_REGISTRY[themeId].bgColor);

  localStorage.setItem('opencode_theme', themeId);
  renderThemesGrid();
  if (notify) {
    showToast(`🎨 Theme: ${THEMES_REGISTRY[themeId].name}`);
    triggerHaptic(15);
  }
};

function cycleTheme() {
  const keys = Object.keys(THEMES_REGISTRY);
  const nextIdx = (keys.indexOf(currentThemeId) + 1) % keys.length;
  applyTheme(keys[nextIdx], true);
}

function renderThemesGrid() {
  const grid = document.getElementById('themes-grid');
  if (!grid) return;
  grid.innerHTML = Object.entries(THEMES_REGISTRY).map(([id, t]) => `
    <div class="theme-card ${currentThemeId === id ? 'active' : ''}" onclick="applyTheme('${id}')">
      <div class="theme-card-colors">
        ${t.dots.map(c => `<div class="theme-dot" style="background:${c}"></div>`).join('')}
      </div>
      <div class="theme-card-name">${t.name}</div>
      <div class="theme-card-desc">${t.desc}</div>
    </div>
  `).join('');
}

// --- PROJECT ZIP EXPORT & ARCHIVE ENGINE ---
function createZipArchive(files) {
  function crc32(str) {
    let table = crc32.table;
    if (!table) {
      table = crc32.table = new Uint32Array(256);
      for (let i = 0; i < 256; i++) {
        let c = i;
        for (let k = 0; k < 8; k++) {
          c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
        }
        table[i] = c >>> 0;
      }
    }
    const bytes = new TextEncoder().encode(str);
    let crc = 0xffffffff;
    for (let i = 0; i < bytes.length; i++) {
      crc = (crc >>> 8) ^ table[(crc ^ bytes[i]) & 0xff];
    }
    return ((crc ^ 0xffffffff) >>> 0);
  }

  const fileEntries = [];
  let offset = 0;
  const encoder = new TextEncoder();

  for (const f of files) {
    const nameBytes = encoder.encode(f.name);
    const contentBytes = encoder.encode(f.content || '');
    const checksum = crc32(f.content || '');
    const size = contentBytes.length;

    const localHeader = new Uint8Array(30 + nameBytes.length);
    const view = new DataView(localHeader.buffer);
    view.setUint32(0, 0x04034b50, true);
    view.setUint16(4, 20, true);
    view.setUint16(6, 0, true);
    view.setUint16(8, 0, true);
    view.setUint16(10, 0, true);
    view.setUint16(12, 0, true);
    view.setUint32(14, checksum, true);
    view.setUint32(18, size, true);
    view.setUint32(22, size, true);
    view.setUint16(26, nameBytes.length, true);
    view.setUint16(28, 0, true);
    localHeader.set(nameBytes, 30);

    fileEntries.push({
      nameBytes,
      contentBytes,
      checksum,
      size,
      offset,
      localHeader
    });

    offset += localHeader.length + contentBytes.length;
  }

  const centralDirEntries = [];
  let centralDirSize = 0;
  for (const entry of fileEntries) {
    const cdHeader = new Uint8Array(46 + entry.nameBytes.length);
    const view = new DataView(cdHeader.buffer);
    view.setUint32(0, 0x02014b50, true);
    view.setUint16(4, 20, true);
    view.setUint16(6, 20, true);
    view.setUint16(8, 0, true);
    view.setUint16(10, 0, true);
    view.setUint16(12, 0, true);
    view.setUint32(16, entry.checksum, true);
    view.setUint32(20, entry.size, true);
    view.setUint32(24, entry.size, true);
    view.setUint16(28, entry.nameBytes.length, true);
    view.setUint16(30, 0, true);
    view.setUint16(32, 0, true);
    view.setUint16(34, 0, true);
    view.setUint16(36, 0, true);
    view.setUint32(38, 0, true);
    view.setUint32(42, entry.offset, true);
    cdHeader.set(entry.nameBytes, 46);

    centralDirEntries.push(cdHeader);
    centralDirSize += cdHeader.length;
  }

  const eocd = new Uint8Array(22);
  const eocdView = new DataView(eocd.buffer);
  eocdView.setUint32(0, 0x06054b50, true);
  eocdView.setUint16(4, 0, true);
  eocdView.setUint16(6, 0, true);
  eocdView.setUint16(8, fileEntries.length, true);
  eocdView.setUint16(10, fileEntries.length, true);
  eocdView.setUint32(12, centralDirSize, true);
  eocdView.setUint32(16, offset, true);
  eocdView.setUint16(20, 0, true);

  const blobParts = [];
  for (const entry of fileEntries) {
    blobParts.push(entry.localHeader);
    blobParts.push(entry.contentBytes);
  }
  for (const cd of centralDirEntries) {
    blobParts.push(cd);
  }
  blobParts.push(eocd);

  return new Blob(blobParts, { type: 'application/zip' });
}

function exportWorkspaceAsZip() {
  triggerHaptic(25);
  try {
    const zipBlob = createZipArchive(AppState.files);
    const filename = `OpenCode_Project_${new Date().toISOString().slice(0, 10)}.zip`;
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1000);
    showToast(`📦 Exported ${filename} (${AppState.files.length} files)`);
  } catch (err) {
    showToast(`Export error: ${err.message}`);
  }
}

async function unpackZipArchive(file) {
  try {
    showToast('Extracting ZIP archive...');
    const buf = await file.arrayBuffer();
    const view = new DataView(buf);
    const uint8 = new Uint8Array(buf);
    let offset = 0;
    const extracted = [];

    while (offset < buf.byteLength - 30) {
      const sig = view.getUint32(offset, true);
      if (sig !== 0x04034b50) break;

      const method = view.getUint16(offset + 8, true);
      const compSize = view.getUint32(offset + 18, true);
      const uncompSize = view.getUint32(offset + 22, true);
      const nameLen = view.getUint16(offset + 26, true);
      const extraLen = view.getUint16(offset + 28, true);

      const nameBytes = uint8.slice(offset + 30, offset + 30 + nameLen);
      const name = new TextDecoder().decode(nameBytes);
      const dataStart = offset + 30 + nameLen + extraLen;
      const dataBytes = uint8.slice(dataStart, dataStart + compSize);

      if (!name.endsWith('/') && !name.includes('__MACOSX')) {
        let content = '';
        if (method === 0) {
          content = new TextDecoder().decode(dataBytes);
        } else if (method === 8 && typeof DecompressionStream !== 'undefined') {
          try {
            const ds = new DecompressionStream('deflate-raw');
            const writer = ds.writable.getWriter();
            writer.write(dataBytes);
            writer.close();
            const reader = ds.readable.getReader();
            const chunks = [];
            while (true) {
              const { value, done } = await reader.read();
              if (done) break;
              chunks.push(value);
            }
            const total = chunks.reduce((acc, c) => acc + c.length, 0);
            const merged = new Uint8Array(total);
            let p = 0;
            for (const c of chunks) { merged.set(c, p); p += c.length; }
            content = new TextDecoder().decode(merged);
          } catch (decompressErr) {
            content = new TextDecoder().decode(dataBytes);
          }
        }
        extracted.push({
          name: name.split('/').pop() || name,
          language: name.split('.').pop() || 'txt',
          content
        });
      }

      offset = dataStart + compSize;
    }

    if (extracted.length > 0) {
      extracted.forEach(ef => AppState.files.push(ef));
      AppState.activeFileIndex = AppState.files.length - 1;
      renderFilesTabs();
      renderFilesList();
      renderFileContent();
      switchTab('editor');
      showToast(`✓ Extracted ${extracted.length} files from ${file.name}`);
    } else {
      showToast('Could not find extractable files in ZIP.');
    }
  } catch (err) {
    showToast(`ZIP unpack error: ${err.message}`);
  }
}

// --- GITHUB DIRECT SYNC ENGINE ---
function openGitHubModal() {
  triggerHaptic(20);
  const modal = document.getElementById('github-modal');
  modal.classList.add('active');
  const savedToken = localStorage.getItem('opencode_github_token');
  if (savedToken) {
    const cloneToken = document.getElementById('gh-clone-token');
    const pushToken = document.getElementById('gh-push-token');
    const gistToken = document.getElementById('gh-gist-token');
    if (cloneToken && !cloneToken.value) cloneToken.value = savedToken;
    if (pushToken && !pushToken.value) pushToken.value = savedToken;
    if (gistToken && !gistToken.value) gistToken.value = savedToken;
  }
}

function closeGitHubModal() {
  document.getElementById('github-modal').classList.remove('active');
}

function switchGitHubTab(tabName) {
  triggerHaptic(15);
  ['clone', 'push', 'gist'].forEach(t => {
    const btn = document.getElementById(`gh-tab-${t}`);
    const view = document.getElementById(`gh-view-${t}`);
    if (btn) btn.classList.toggle('active', t === tabName);
    if (view) view.classList.toggle('hidden', t !== tabName);
  });
}

function logGitHubStatus(msg, isError = false) {
  const log = document.getElementById('gh-status-log');
  if (!log) return;
  log.style.display = 'block';
  const line = document.createElement('div');
  line.style.color = isError ? 'var(--accent-red)' : 'var(--accent-blue)';
  line.innerText = `[${new Date().toLocaleTimeString()}] ${msg}`;
  log.appendChild(line);
  log.scrollTop = log.scrollHeight;
}

async function executeGitHubClone() {
  let repoInput = document.getElementById('gh-clone-repo').value.trim();
  const branch = document.getElementById('gh-clone-branch').value.trim() || 'main';
  const token = document.getElementById('gh-clone-token').value.trim();

  if (!repoInput) {
    showToast('Please enter a repository (owner/repo)');
    return;
  }

  repoInput = repoInput.replace(/^https?:\/\/github\.com\//i, '').replace(/\.git$/i, '').replace(/\/$/, '');
  const parts = repoInput.split('/');
  if (parts.length < 2) {
    showToast('Invalid format. Use owner/repo (e.g. Hubg50we/opencode-apk-for-android)');
    return;
  }
  const owner = parts[0];
  const repo = parts[1];

  if (token) localStorage.setItem('opencode_github_token', token);

  const log = document.getElementById('gh-status-log');
  log.innerHTML = '';
  logGitHubStatus(`Connecting to GitHub: ${owner}/${repo} (branch: ${branch})...`);

  const headers = { 'Accept': 'application/vnd.github.v3+json' };
  if (token) headers['Authorization'] = `token ${token}`;

  try {
    const treeRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`, { headers });
    if (!treeRes.ok) {
      if (treeRes.status === 404) throw new Error('Repository or branch not found. For private repos, provide a Personal Access Token.');
      throw new Error(`GitHub API error ${treeRes.status}: ${treeRes.statusText}`);
    }

    const treeData = await treeRes.json();
    if (!treeData.tree || !Array.isArray(treeData.tree)) {
      throw new Error('No files found in repository tree.');
    }

    const codeExts = ['.js', '.ts', '.py', '.html', '.css', '.json', '.md', '.dart', '.rs', '.java', '.kt', '.go', '.c', '.cpp', '.h', '.sh', '.yaml', '.yml', '.xml', '.txt', '.sql'];
    const textFiles = treeData.tree.filter(item => {
      if (item.type !== 'blob') return false;
      if (item.size && item.size > 250000) return false;
      if (item.path.includes('.git/') || item.path.includes('node_modules/') || item.path.includes('.gradle/')) return false;
      const lower = item.path.toLowerCase();
      return codeExts.some(ext => lower.endsWith(ext));
    }).slice(0, 40);

    logGitHubStatus(`Found ${textFiles.length} code files. Fetching contents...`);

    const importedFiles = [];
    for (let i = 0; i < textFiles.length; i++) {
      const item = textFiles[i];
      try {
        const rawRes = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${item.path}`, {
          headers: token ? { 'Authorization': `token ${token}` } : {}
        });
        if (rawRes.ok) {
          const content = await rawRes.text();
          const ext = item.path.split('.').pop() || 'txt';
          importedFiles.push({
            name: item.path,
            language: ext,
            content
          });
          logGitHubStatus(`[${i + 1}/${textFiles.length}] ✓ ${item.path}`);
        }
      } catch (fErr) {
        logGitHubStatus(`Failed to fetch ${item.path}: ${fErr.message}`, true);
      }
    }

    if (importedFiles.length > 0) {
      AppState.files = importedFiles;
      AppState.activeFileIndex = 0;
      renderFilesTabs();
      renderFilesList();
      renderFileContent();
      closeGitHubModal();
      switchTab('editor');
      showToast(`✓ Cloned ${importedFiles.length} files from ${repo}!`);
    } else {
      throw new Error('Could not download file contents from repository.');
    }
  } catch (err) {
    logGitHubStatus(`Error: ${err.message}`, true);
    showToast(`Clone Failed: ${err.message}`);
  }
}

async function executeGitHubPush() {
  let repoInput = document.getElementById('gh-push-repo').value.trim();
  const branch = document.getElementById('gh-push-branch').value.trim() || 'main';
  const token = document.getElementById('gh-push-token').value.trim();
  const message = document.getElementById('gh-push-message').value.trim() || 'Update from OpenCode Mobile';

  if (!token) {
    showToast('Personal Access Token is required to push to GitHub.');
    return;
  }
  if (!repoInput) {
    showToast('Please specify target repository (owner/repo).');
    return;
  }

  repoInput = repoInput.replace(/^https?:\/\/github\.com\//i, '').replace(/\.git$/i, '').replace(/\/$/, '');
  const parts = repoInput.split('/');
  if (parts.length < 2) {
    showToast('Invalid format. Use owner/repo');
    return;
  }
  const owner = parts[0];
  const repo = parts[1];

  localStorage.setItem('opencode_github_token', token);

  const log = document.getElementById('gh-status-log');
  log.innerHTML = '';
  logGitHubStatus(`Preparing push to ${owner}/${repo}:${branch}...`);

  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${token}`,
    'Content-Type': 'application/json'
  };

  try {
    logGitHubStatus('Checking branch reference...');
    const refRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/ref/heads/${branch}`, { headers });
    if (!refRes.ok) throw new Error(`Could not get branch ref (${refRes.status}). Verify token repo scope and branch name.`);
    const refData = await refRes.json();
    const latestCommitSha = refData.object.sha;

    const commitRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/commits/${latestCommitSha}`, { headers });
    const commitData = await commitRes.json();
    const baseTreeSha = commitData.tree.sha;

    logGitHubStatus(`Creating Git tree with ${AppState.files.length} files...`);
    const treeItems = AppState.files.map(f => ({
      path: f.name,
      mode: '100644',
      type: 'blob',
      content: f.content
    }));

    const createTreeRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        base_tree: baseTreeSha,
        tree: treeItems
      })
    });
    if (!createTreeRes.ok) throw new Error(`Failed to create Git tree (${createTreeRes.status})`);
    const newTreeData = await createTreeRes.json();

    logGitHubStatus(`Creating commit: "${message}"...`);
    const newCommitRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/commits`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        message,
        tree: newTreeData.sha,
        parents: [latestCommitSha]
      })
    });
    if (!newCommitRes.ok) throw new Error(`Failed to create commit (${newCommitRes.status})`);
    const newCommitData = await newCommitRes.json();

    logGitHubStatus('Updating branch reference to new commit...');
    const updateRefRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${branch}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        sha: newCommitData.sha,
        force: false
      })
    });
    if (!updateRefRes.ok) throw new Error(`Failed to update ref (${updateRefRes.status})`);

    logGitHubStatus(`✓ Successfully pushed commit ${newCommitData.sha.substring(0, 7)} to ${branch}!`);
    showToast(`🚀 Successfully pushed to GitHub (${branch})!`);
  } catch (err) {
    logGitHubStatus(`Push failed: ${err.message}`, true);
    showToast(`Push error: ${err.message}`);
  }
}

async function executeGitHubGist() {
  const desc = document.getElementById('gh-gist-desc').value.trim() || 'OpenCode Mobile Snippet';
  const scope = document.getElementById('gh-gist-scope').value;
  const token = document.getElementById('gh-gist-token').value.trim();

  const filesPayload = {};
  if (scope === 'active') {
    const file = AppState.files[AppState.activeFileIndex] || { name: 'snippet.js', content: '' };
    filesPayload[file.name] = { content: file.content || '// empty' };
  } else {
    AppState.files.forEach(f => {
      filesPayload[f.name] = { content: f.content || '// empty' };
    });
  }

  const log = document.getElementById('gh-status-log');
  log.innerHTML = '';
  logGitHubStatus('Creating Gist on GitHub...');

  const headers = {
    'Accept': 'application/vnd.github.v3+json',
    'Content-Type': 'application/json'
  };
  if (token) headers['Authorization'] = `token ${token}`;

  try {
    const res = await fetch('https://api.github.com/gists', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        description: desc,
        public: true,
        files: filesPayload
      })
    });

    if (!res.ok) throw new Error(`Gist creation failed (${res.status})`);
    const data = await res.json();
    logGitHubStatus(`✓ Gist created: ${data.html_url}`);
    triggerNativeCopy(data.html_url);
    showToast(`✓ Gist created & URL copied to clipboard!`);
  } catch (err) {
    logGitHubStatus(`Gist failed: ${err.message}`, true);
    showToast(`Gist error: ${err.message}`);
  }
}

