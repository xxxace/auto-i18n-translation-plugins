# 🚀 auto-i18n-translation-plugins

## 🍉 Plugin Introduction

🎉 **Auto Translation Plugin** for frontend languages, supports all JavaScript-based frontend frameworks (e.g., Vue2/3, React). No need to modify source code! With seamless multi-language support 🌐🚀— it integrates Youdao Translator and Google Translator by default and allows custom translators. Compatible with Webpack, Vite, Rollup, and other major build tools.

### 🎯 Key Features:
- 🛠️ **No Source Code Changes**: Instant multi-language translation;
- 🌐 **Supports Multiple Translation Services** (including Google, Youdao, or custom translators);
- 🔍 **Smart Detection** of text requiring translation;
- 🔧 **Flexible Configuration Options** to suit various project requirements.

---

## 📚 Plugin Debugging

```bash
  pnpm install

  pnpm run preview // no choose react
```

## 📖 Supported Features

- **Frameworks**: Supports all frontend frameworks compiled into JS (e.g., Vue2/3, React).
- **Build Tools**: Fully compatible with Webpack, Vite, and Rollup 🚀.
- **Translation Services**: Supports **Youdao Translator** and **Google Translator** by default, with custom translator support.

---

## 🌟 Quick Start

### 1️⃣ Plugin Installation

#### **For Vite Projects:**
```bash
npm install vite-auto-i18n-plugin --save-dev
# or
yarn add vite-auto-i18n-plugin --dev
```

#### **For Webpack Projects:**
```bash
npm install webpack-auto-i18n-plugin --save-dev
# or
yarn add webpack-auto-i18n-plugin --dev
```

---

### 2️⃣ Basic Configuration

#### **Example for Vite** (vite.config.js):
```javascript
import { defineConfig } from 'vite'
import vitePluginAutoI18n from 'vite-auto-i18n-plugin'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          hoistStatic: false,
          cacheHandlers: false,
        }
      }
    }),
    vitePluginAutoI18n({
      option: {
        globalPath: './lang',
        namespace: 'lang',
        distPath: './dist/assets',
        distKey: 'index',
        targetLangList: ['en', 'ko', 'ja'], // Target languages
        originLang: 'zh-cn', // Source language
        translator: new YoudaoTranslator({
          appId: '4cdb9baea8066fef',
          appKey: 'ONI6AerZnGRyDqr3w7UM730mPuF8mB3j'
        })
      }
    })
  ]
})
```

#### **Example for Webpack** (webpack.config.js):
```javascript
const webpackPluginsAutoI18n = require('webpack-auto-i18n-plugin')
const { YoudaoTranslator } = require('webpack-auto-i18n-plugin')

const i18nPlugin = new webpackPluginsAutoI18n.default({
  option: {
    globalPath: './lang',
    namespace: 'lang',
    distPath: './dist/assets', 
    distKey: 'index',
    targetLangList: ['en', 'ko', 'ja', 'ru'], // Fully customizable language list
    originLang: 'zh-cn',
    translator: new YoudaoTranslator({
      appId: '4cdb9baea8066fef',
      appKey: 'ONI6AerZnGRyDqr3w7UM730mPuF8mB3j'
    })
  }
})

module.exports = {
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    i18nPlugin
  ]
}
```

---

### 3️⃣ Translator Configuration Example

The plugin uses Google Translator by default. If proxy configuration is required, prioritize **Youdao Translator**, which provides better translation results ✨. The plugin already comes integrated with Google and Youdao Translators. For custom translators, extend the `Translator` class as shown below.

#### **Using Google Translator (default)**:
```javascript
translator: new GoogleTranslator({
  proxyOption: {
    host: '127.0.0.1',
    port: 8899,
    headers: {
      'User-Agent': 'Node'
    }
  }
})
```

#### **Using Youdao Translator**:
```javascript
translator: new YoudaoTranslator({
  appId: '4cdb9baea8066fef', // Youdao Translator AppId
  appKey: 'ONI6AerZnGRyDqr3w7UM730mPuF8mB3j' // Youdao Translator AppKey
})
```

---

### 4️⃣ Entry File Configuration 🏗️

Ensure to include the language configuration file at the top of your **project entry file** (e.g., `main.js`):
```javascript
import './src/lang.js' // 📍 Must be the first import in the entry file
```

---

### 5️⃣ Language Configuration File Example 📂

Create a file named `src/lang.js`:
```javascript
// The globalPath config generates the following files:
import '../../lang/index' 
import langJSON from '../../lang/index.json'

const langMap = {
  en: window?.lang?.en || _getJSONKey('en', langJSON),
  zhcn: window?.lang?.zhcn || _getJSONKey('zhcn', langJSON),
  ko: window?.lang?.ko || _getJSONKey('ko', langJSON),
  ja: window?.lang?.ja || _getJSONKey('ja', langJSON)
}
const lang = window.localStorage.getItem('lang') || 'zhcn'
window.$t.locale(langMap[lang], 'lang')
```

---

## ⚙️ Configuration Parameters

| Parameter         | Type        | Required | Default                      | Description                                                          |
|-------------------|-------------|----------|------------------------------|----------------------------------------------------------------------|
| translateKey      | string      | ✅       | `$t`                         | The function name for calling translations, defaults to `$t`.        |
| excludedCall      | string[]    | ❌       | `['$i8n', 'require', …]`     | A list of function calls excluded from translation.                  |
| excludedPattern   | RegExp[]    | ❌       | `[/\.\w+$/]`                 | Regular expressions to exclude certain patterns, e.g., file paths.   |
| excludedPath      | string[]    | ❌       | `['node_modules']`           | Exclude files under specified directories (e.g., `node_modules`).     |
| includePath       | RegExp[]    | ❌       | `[/src\//]`                  | Define a whitelist for directories/files to translate (`src` by default). |
| globalPath        | string      | ❌       | `'./lang'`                   | The path where translation configuration files are generated.        |
| distPath          | string      | ✅       | `''`                         | The directory where the translation files are built.                 |
| distKey           | string      | ✅       | `'index'`                    | The name of the main translation file after bundling.                |
| namespace         | string      | ✅       | `''`                         | The project namespace, helpful for avoiding global conflicts.         |
| originLang        | string      | ✅       | `'zh-cn'`                    | The source language for translation.                                 |
| targetLangList    | string[]    | ✅       | `['en']`                     | A list of target languages for translation.                          |
| buildToDist       | boolean     | ❌       | `false`                      | Whether to bundle translation files into the main build bundle.      |
| translator        | Translator  | ❌       | `GoogleTranslator`           | The translation instance.                                            |
| translatorOption  | Object      | ❌       | `{}`                         | Additional configuration for the translator (lower precedence).      |

---

## ❓ Why `buildToDist`?

In Vite environments, the plugin only generates translation configuration files when executed. These files are not bundled immediately into the main package. ⚠️ To address this, `buildToDist` bundles the translation files into the main build upon generation. Note: This might result in duplicate translation configuration files.

---

## 🔄 How to Update Translations?

After executing the plugin, two files will be generated in the `\lang` directory:
- **index.js**: Contains translation-related functions.
- **index.json**: Stores the translation text content.

If you need to update translations, directly modify the `index.json` file and save the changes.

---

## ⚠️ Important Notes

1. **Proxy Requirements**
   - For domestic users, **Youdao Translator** is highly recommended.
   - Using Google Translator in regions like China requires proxy configuration.
   - The default proxy port is **7890**, but it can be customized via the `proxyOption`.

2. **Translation Rate Limits**
   - Google Translator is a free service but may impose restrictions for excessive requests 🔒.
   - Add sufficient time intervals between consecutive translation requests 💡.

3. **Translation Update Mechanism**
   - The `globalPath` directory contains `index.json`, which is the core translation file.
   - Modify and save the `index.json` to instantly update translation content.

---

## 📦 Example Project

☁️ See the example project here: [example](./example) (click to view).

---

## 📜 License

This plugin is available under the **MIT License** 🪪. Free to use, and contributions are welcome!

We hope this plugin makes internationalization development easier and more efficient for you! 🌍✨

---

## 🎆 authors

Original authors: wenps、xu-code、Caleb-Xu、Winfans