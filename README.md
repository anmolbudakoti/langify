### Langify - Translation Web App 🌐

A beautiful, modern translation application built with React that allows users to translate text between multiple languages. Features a sleek UI with dark theme and responsiveness.

## ✨ Features

- 📱 **Fully Responsive**: Works perfectly on all devices from mobile to desktop
- 🔄 **Bidirectional Translation**: Translate between multiple languages
- 🔊 **Text-to-Speech**: Listen to both source and translated text
- 📋 **Copy to Clipboard**: Easily copy translations with visual feedback
- 📜 **Translation History**: View and manage your recent translations
- 💾 **Persistent Storage**: History is saved between sessions
- 🔄 **Language Swap**: Quickly swap between source and target languages
- 🌐 **Multiple APIs**: Uses Lingva Translate API with fallback options


## 🚀 Live Demo

Check out the live demo: [Langify Translate App](https://langifyapp.netlify.app/)

## 🛠️ Technologies Used

- **React.js**: Frontend library for building the user interface
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Beautiful, consistent icons
- **Lingva Translate API**: Free and open-source translation API


## 📦 Installation

1. **Clone the repository**


```shellscript
git clone https://github.com/anmolbudakoti/langify.git
cd 'directory-name'
```

2. **Install dependencies**


```shellscript
npm install
```

4. **Start the development server**


```shellscript
npm run dev
```

5. **Open your browser**


The app will be running at [http://localhost:5173](http://localhost:5173)

## 📖 Usage

### Basic Translation

1. Enter text in the input field
2. Select source and target languages
3. Click the "Translate" button
4. View the translation result


### Additional Features

- **Language Swap**: Click the swap button to reverse source and target languages
- **Text-to-Speech**: Click the speaker icon to hear the text pronounced
- **Copy Translation**: Click the copy icon to copy the translation to clipboard
- **View History**: See your recent translations in the history panel
- **Clear History**: Remove all translation history with the clear button


## 📁 Project Structure

```plaintext
src/
├── components/              # UI components
│   ├── Header.jsx
│   ├── HistoryItem.jsx
│   ├── HistoryPanel.jsx
│   ├── LanguageSelector.jsx
│   ├── TranslationInput.jsx
│   ├── TranslationPanel.jsx
│   └── TranslationResult.jsx
├── hooks/                   # Custom React hooks
│   └── useTranslationHistory.js
├── utils/                   # Utility functions
│   ├── api.js
│   ├── languages.js
│   └── mockTranslations.js
├── App.jsx                   # Main application component
├── App.css                  
└── main.jsx                 # Application entry point
└── index.css
├── index.html                  

```

## 🌐 API Information

This app uses the Lingva Translate API, which is a free and open-source alternative to Google Translate. It provides high-quality translations without requiring authentication or API keys.

The app is configured with multiple Lingva API instances:

- Primary: [https://lingva.ml/api](https://lingva.ml/api)
- Backup: [https://lingva.pussthecat.org/api](https://lingva.pussthecat.org/api)


If both APIs are unavailable, the app falls back to a mock translation function for demonstration purposes.

## 🔧 Customization

### Adding New Languages

To add more languages, edit the `languages.js` file in the `utils` directory:

```javascript
export const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  // Add more languages here
  { code: "new_code", name: "New Language" },
];
```

### Changing API Endpoints

To use different translation API endpoints, modify the `api.js` file in the `utils` directory:

```javascript
const PRIMARY_API = "https://your-primary-api.com/api/v1";
const BACKUP_API = "https://your-backup-api.com/api/v1";
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 📧 Contact

Anmol Budakoti - [anmolbudakoti123@gmail.com](mailto:anmolbudakoti123@gmail.com)

Project Link: [https://github.com/anmolbudakoti/langify](https://github.com/anmolbudakoti/langify)

---

`<p align="center">`Made with ❤️ by Anmol Budakoti`</p>`