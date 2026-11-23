<p align="center">
    <a href="https://vedic-lang.github.io">
        <img alt="Vedic"src="https://raw.githubusercontent.com/vedic-lang/vedic/main/assets/vedic-lang.png" width="300vw"/>
    </a>
    <br>
    <a href="https://vedic-lang.github.io/download">Download</a> ·
    <a href="https://vedic-lang.github.io/">Documentation</a> ·
    <a href="https://vedic-lang.github.io/vedic-ide">Online Ide</a>
    <br><br>
    <i>Loved the tool? Please consider <a href="https://paypal.me/ptprashanttripathi/10">donating</a> to help it improve!</i>
    <br>
  <a href="https://paypal.me/PtPrashantTripathi">
        <img height='23' src="https://img.shields.io/badge/support-PayPal-blue?logo=PayPal&style=flat-square&label=Donate" alt="Donate"/>
    </a>
  <a href='https://ko-fi.com/ptprashanttripathi' target='_blank'>
        <img height='23' width="100" src='https://cdn.ko-fi.com/cdn/kofi3.png?v=2' alt='Buy Coffee for ptprashanttripathi' />
    </a>
  <a href="https://www.buymeacoffee.com/ptprashant09" target="_blank">
        <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="23" width="100" style="border-radius:1px" />
    </a>
</p>

# Vedic Code Highlighter

Open a Vedic source file to highlight keywords, strings, numbers, and comments. VS Code also uses the Vedic bracket and line-comment rules when editing. The highlighter works without the Vedic CLI.

## Installation

Search for **Vedic Code Highlighter** in Extensions, or run this command in VS Code Quick Open:

```text
ext install vedic.vedic-syntax-highlighter
```

Existing users of Vedic Syntax Highlighter can update their installed extension. For the **Format** and **Run** buttons, install [Vedic Code Formatter](https://marketplace.visualstudio.com/items?itemName=vedic.vedic) alongside it.

## 👤 Author

<p><a href="https://github.com/ptprashanttripathi"><img width="60" src="https://avatars2.githubusercontent.com/u/26687933?s=200&v=4"/></a></p>

[**Pt. Prashant Tripathi**](https://github.com/ptprashanttripathi)

- Twitter: [@ptprashant09](https://twitter.com/ptprashant09)
- Github: [@ptprashanttripathi](https://github.com/ptprashanttripathi)
- LinkedIn: [ptprashanttripathi](https://www.linkedin.com/in/ptprashanttripathi/)
- Dev.to : [ptprashanttripathi](https://dev.to/ptprashanttripathi)

## 🤝 Contributing

Contributions, issues and feature requests are welcome. [Open an issue](https://github.com/vedic-lang/vedic-code-highlighter/issues).

## Publishing a release

Pull requests build a VSIX that reviewers can download from the workflow run. To authorize publishing once, open the `vedic` publisher in the [Marketplace dashboard](https://marketplace.visualstudio.com/manage/publishers/vedic) and create a Trusted Publishing policy with these values.

| Field | Value |
| --- | --- |
| Policy name | Vedic Code Highlighter release |
| Repository owner | `vedic-lang` |
| Repository | `vedic-code-highlighter` |
| Workflow | `publish.yml` |
| Environment | `marketplace` |

For each release, merge the intended extension version into `main`. Open **Actions → Publish Vedic Code Highlighter to Marketplace → Run workflow**, select `main` and enter the version in `package.json`. The workflow publishes the packaged VSIX under `vedic.vedic-syntax-highlighter` using GitHub’s short-lived identity. [Publishing guide](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#_publish-with-github-actions-and-trusted-publishing)

## 👍 Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/ptprashanttripathi"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160"></a>

## 📝 License

Copyright © 2022 [Pt. Prashant Tripathi](https://github.com/ptprashanttripathi).<br />
See the [project license](https://github.com/vedic-lang/vedic-code-highlighter/blob/main/LICENSE).

***

_Developed with ❤️ in India 🇮🇳_
