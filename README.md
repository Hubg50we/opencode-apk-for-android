# ⚡ OpenCode Mobile - Android APK

<div align="center">
  <h3>Universal AI Coding Assistant & Mobile IDE for Android</h3>
  <p>Connects to <strong>every kind of AI provider</strong> + <strong>built-in 100% free models</strong> (no key or signup needed) + full code editor & live execution sandbox.</p>
</div>

---

## 📱 APK Download & Installation

The signed Android APK is pre-built and ready to install on any Android device (Android 7.0 / API 24+):

* **Direct APK Download**: [`opencode-android.apk`](./opencode-android.apk) (Size: ~3.1 MB)
* **Local Path**: `C:\Users\Administrator\.gemini\antigravity\scratch\opencode-android.apk`

### How to Install on Android
1. Download `opencode-android.apk` to your phone or transfer it via USB / adb.
2. Open the file on your device and tap **Install** (Enable *"Install from Unknown Sources"* if prompted).
3. Launch **OpenCode** and start coding!

---

## 🚀 Key Features

* **🌐 Connects to Every AI Provider**:
  * **Zero-Config Free Models** (No API Key or account required):
    * **DeepSeek V4.1 Flash (Free lane)**
    * **Kimi K3 (Free lane)**
    * **MiMo V2.6 Flash (Free lane)**
    * **GLM 5.3 Flash (Free lane)**
    * **Nemotron 120B Free**
    * **Kilo AI Free Pool** (`kilo-auto/free`, `liquid-lfm-free`, `nemotron-70b-free`)
    * **Hugging Face Serverless Free** (Qwen 2.5 Coder 32B, DeepSeek R1 Distill 32B)
    * **TRAE / Qoder / Cline Free Channels**
    * **Pollinations AI Free** (GPT-4o, Claude 3.5 Sonnet, DeepSeek R1, Qwen 2.5 Coder 32B, Mistral Large)
    * **DuckDuckGo AI Free** (Claude 3 Haiku, GPT-4o-mini, Llama 3.3 70B, Mixtral 8x7B)
  * **All Commercial AI Clouds** (Bring Your Own API Key):
    * **OpenAI** (GPT-4o, GPT-4o-mini, o1, o3-mini, GPT-4-turbo)
    * **Anthropic Claude** (Claude 3.7 Sonnet with Hybrid Thinking, Claude 3.5 Sonnet, Haiku, Opus)
    * **Google Gemini** (Gemini 2.5 Pro, Gemini 2.0 Flash, Gemini 1.5 Pro)
    * **DeepSeek** (DeepSeek V3 Chat, DeepSeek R1 Reasoner)
    * **Groq** (Llama 3.3 70B, DeepSeek R1 Distill 70B, Mixtral)
    * **OpenRouter** (Unified access to 300+ models)
    * **Mistral AI** (Codestral, Mistral Large, Mistral Small)
    * **Together AI** (Qwen 2.5 Coder 32B, Llama 3.3 70B)
    * **xAI / Grok** (Grok 2, Grok Beta)
    * **Perplexity** (Sonar Pro, Sonar Reasoning)
    * **Cohere** (Command R+, Command R)
    * **Cerebras** (Ultra-fast 2000+ tok/s Llama 3.1 70B)
    * **SambaNova** (Llama 3.3 70B, Qwen 2.5 72B)
    * **SiliconFlow** (DeepSeek V3/R1, Qwen 2.5 Coder)
    * **Moonshot / Kimi** (Moonshot v1 8k/32k/128k)
    * **MiniMax** (MiniMax-01, abab6.5s)
    * **Zhipu GLM** (GLM-4-Plus, GLM-4-Flash)
    * **Alibaba Qwen / DashScope** (Qwen-Max, Qwen-Coder-Plus)
  * **Local Offline & Self-Hosted AI**:
    * **Ollama** (`http://127.0.0.1:11434/v1` or local WiFi IP)
    * **LM Studio** (`http://127.0.0.1:1234/v1`)
    * **Custom OpenAI Endpoint** (Custom base URL, token, and model)

* **💭 Collapsible Thinking / Reasoning Visualizer**:
  * View reasoning and chain-of-thought in real time for **DeepSeek R1**, **OpenAI o1/o3-mini**, and **Claude 3.7 Sonnet**.
  * Expand or collapse reasoning tokens anytime to focus on the final code.

* **📝 Mobile Code Editor & Live Sandbox**:
  * Monospace editor with line numbers, syntax highlighting, and auto-indentation.
  * Multi-file project management (`main.js`, `index.html`, `app.py`, etc.).
  * **Run in Sandbox**: Execute JavaScript and HTML directly on device with live console log capturing.
  * One-tap actions: *"Open Code in Editor"*, *"Ask AI About Code"*, *"Copy Code"*, *"Share Code"*.

* **📁 Virtual Workspace & File Manager**:
  * Create, rename, delete files.
  * Import code files from your Android phone storage.
  * Export your entire project as JSON or share via Android native share sheet.

* **🤖 System Personas**:
  * 🤖 General AI Assistant
  * 🏛️ Software Architect (System design, scalability, boundaries)
  * 📱 Mobile & Flutter Pro (Flutter, Dart, Kotlin, accessibility)
  * 🐍 Python & Data Science Pro (Strict typing, clean code)
  * 🛡️ Security Auditor (Vulnerability scanning & remediation)
  * 🧪 QA & Test Automation (Unit tests, edge cases, TDD)

* **📱 Universal Device & OS Support (Mobile, Pads, Tablets, Desktops)**:
  * **Tablets & Pads (iPad / Galaxy Tab / Foldables)**:
    * Automatic **Dual-Pane Split Screen** (`◫` toggle): Side-by-side AI Chat and Code Editor.
    * Left Activity Bar replacing bottom navigation for maximum vertical code view.
    * Physical keyboard shortcuts: `Ctrl+Enter` (Send), `Ctrl+S` (Save), `Ctrl+\` (Split Toggle), `Ctrl+M` (Model Picker).
  * **Smartphones (Android & iOS)**:
    * Compact touch-optimized mobile layout with swipe navigation.
    * Generous touch targets (>48px) adhering to WCAG and Material/iOS guidelines.
  * **Cross-Platform PWA (Progressive Web App)**:
    * Installable standalone on **iOS / iPadOS** (Safari "Add to Home Screen"), **macOS**, **Windows**, **Linux**, and **ChromeOS** / **Samsung DeX**.
    * Full offline Service Worker caching for instant offline boot.

* **⚡ Native Android Bridge**:
  * Native clipboard copying with Android toast notifications.
  * Native Android Intent share sheet.
  * Haptic vibration feedback on taps.
  * Battery optimization exemption to keep streaming generation active in background.

---

## 🛠️ Project Structure

```
opencode-apk-for-android/
├── .github/workflows/
│   └── build-apk.yml               # GitHub Actions CI/CD workflow
├── android/                        # Android native project files
│   ├── build.gradle
│   ├── settings.gradle
│   ├── gradle.properties
│   └── app/
│       ├── build.gradle
│       └── src/main/
│           ├── AndroidManifest.xml
│           ├── java/com/opencode/app/MainActivity.java
│           └── res/values/
│               ├── colors.xml
│               ├── strings.xml
│               └── styles.xml
├── scripts/
│   └── build_apk.py                # Standalone APK packager & cryptographic signer
├── web/                            # OpenCode mobile web application
│   ├── index.html                  # Responsive UI layout & view components
│   ├── style.css                   # Dark cyber IDE stylesheet
│   └── app.js                      # AI multi-provider engine, editor & sandbox
├── opencode-android.apk            # Pre-compiled, signed Android APK
├── package.json
├── .gitignore
└── README.md
```

---

## 🔨 How to Build the APK

### Method 1: Using Python Signer (Instant, No Android SDK required)
```bash
python scripts/build_apk.py
```
This script bundles all web assets into the APK template, creates a fresh RSA-2048 keypair, calculates SHA-256 digests, and generates a valid PKCS#7 signed APK at `./opencode-android.apk`.

### Method 2: Using GitHub Actions (Automated CI/CD)
Whenever you push to `main`, GitHub Actions automatically runs `.github/workflows/build-apk.yml` and uploads the compiled APK to the GitHub Actions Artifacts tab.

---

## 📄 License
MIT License. Inspired by OpenCode, DeepSeek Harness, and open-source AI developer tools.
