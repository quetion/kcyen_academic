const root = document.documentElement;
const languageToggle = document.querySelector(".language-toggle");
const languageLabel = document.querySelector("[data-lang-label]");
const themeToggle = document.querySelector(".theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const profileToggle = document.querySelector(".profile-toggle");
const profileLinks = document.querySelector(".author-links");

const publicationAbstracts = new Map([
  ["The Relationship Between the VIX, Aggregate Volatility Magnitude Premium and Economic Policy Uncertainty: Evidence from the Space Industry", {
    zh: "本研究探討 VIX、整體波動幅度溢酬與經濟政策不確定性之間的關聯，並以太空產業為研究場域。藉由產業層級的實證分析，說明不確定性與波動風險如何反映於報酬定價。",
    en: "This study examines the links among the VIX, the aggregate volatility magnitude premium, and economic policy uncertainty, using the space industry as its empirical setting. It considers how uncertainty and volatility risk are reflected in industry-level return pricing."
  }],
  ["Cryptocurrency Dependency of Realized Variance and Economic Policy Uncertainty", {
    zh: "本研究以五分鐘高頻報酬建構已實現變異數與帶符號跳躍變異數，檢驗經濟政策不確定性如何影響主要加密貨幣的連動與尾端風險。全球及歐美的不確定性會明顯提高市場的相依性，且在尾端風險傳遞上尤其顯著。",
    en: "Using five-minute returns to construct realized variance and signed jump variance, this study examines how economic policy uncertainty affects dependence and tail-risk synchronization among major cryptocurrencies. Global and Western uncertainty significantly strengthens connectedness, particularly in tail-risk transmission."
  }],
  ["The Impact of Economic Policy Uncertainty on the Stock Prices of Foreign-Listed Companies in Taiwan", {
    zh: "本研究檢視經濟政策不確定性對臺灣海外上市公司股價的影響。分析不同公司特性與市場環境下的價格反應，以釐清政策不確定性在跨境資本市場中的角色。",
    en: "This study investigates how economic policy uncertainty affects the stock prices of Taiwanese firms listed abroad. It examines price responses across firm characteristics and market conditions to clarify the role of policy uncertainty in cross-border capital markets."
  }],
  ["SVIX, VIX, and Cryptocurrency Market Return", {
    zh: "本研究比較 SVIX 與 VIX 所蘊含的風險訊息，探討其與加密貨幣市場報酬之關係。研究結果有助於理解股票選擇權市場的隱含風險指標，如何連結至加密資產的報酬與風險補償。",
    en: "This study compares the risk information embedded in SVIX and VIX and investigates its relation to cryptocurrency market returns. The analysis sheds light on how option-implied risk measures from equity markets connect to crypto-asset returns and risk compensation."
  }],
  ["Lottery-like Effect and Cryptocurrency", {
    zh: "本研究探討加密貨幣的彩券型特徵與投資人偏好，並分析其對報酬表現的影響。研究提供加密資產市場中投機性需求與橫斷面報酬關係的證據。",
    en: "This study investigates lottery-like characteristics of cryptocurrencies and investor preferences for them, and analyzes their implications for returns. It provides evidence on the relation between speculative demand and cross-sectional performance in crypto-asset markets."
  }],
  ["A Modified Skewness Premium and Stock Future Returns", {
    zh: "本研究提出修正後的偏態溢酬衡量方式，並檢驗其對股票期貨報酬的資訊內涵。結果說明高階分配特徵可為期貨市場的風險定價與報酬預測提供額外線索。",
    en: "This study proposes a modified skewness-premium measure and tests its information content for stock-futures returns. The results show how higher-moment distributional features can provide additional insight into risk pricing and return prediction."
  }],
  ["CEO Overconfidence and Investor Sentiment in M&A Decisions", {
    zh: "本研究探討執行長過度自信與投資人情緒如何共同影響併購決策。藉由檢視管理者行為偏誤與外部市場情緒，分析企業併購時點與決策品質的可能機制。",
    en: "This study examines how CEO overconfidence and investor sentiment jointly shape merger-and-acquisition decisions. It analyzes the possible mechanisms through which managerial bias and external market sentiment influence acquisition timing and decision quality."
  }],
  ["Cryptocurrency Momentum and VIX Premium", {
    zh: "本研究檢驗加密貨幣動能與 VIX 溢酬之間的關係，連結加密資產報酬與傳統市場的避險情緒。研究有助於說明波動風險補償在不同資產市場之間的傳遞。",
    en: "This study tests the relation between cryptocurrency momentum and the VIX premium, linking crypto-asset returns to risk sentiment in traditional markets. It helps explain how compensation for volatility risk may transmit across asset classes."
  }],
  ["Cryptocurrency Return Dependency and Economic Policy Uncertainty", {
    zh: "本研究分析經濟政策不確定性與加密貨幣報酬相依性的關係，著重於市場連結與風險傳染。研究結果可用於理解不確定性升高時加密資產分散投資效果的變化。",
    en: "This study analyzes the relation between economic policy uncertainty and return dependence across cryptocurrencies, with emphasis on market connectedness and risk contagion. The findings inform how diversification benefits may change when uncertainty rises."
  }],
  ["Does the Realized Distribution-based Measure Dominate Particular Moments? Evidence from Cryptocurrency Markets", {
    zh: "本研究比較以已實現分配為基礎的衡量方式與傳統特定動差指標，檢驗其在加密貨幣市場的資訊表現。分析可協助評估不同波動與風險衡量工具的相對適用性。",
    en: "This study compares realized-distribution-based measures with conventional particular-moment measures in cryptocurrency markets. It evaluates the relative usefulness of alternative tools for characterizing volatility and risk."
  }],
  ["Volatility Information and Derivatives Trading — Directional or Volatility Trades?", {
    zh: "本研究探討衍生性商品交易所反映的波動資訊，並區分交易者是在進行方向性交易或波動率交易。研究有助於辨識交易活動背後的資訊動機與市場意涵。",
    en: "This study investigates volatility information embedded in derivatives trading and distinguishes directional trades from volatility trades. The analysis helps identify the information motives and market implications behind trading activity."
  }],
  ["Lottery-like Momentum in the Cryptocurrency Market", {
    zh: "本研究檢驗彩券型特徵與動能效應在加密貨幣市場中的交互作用。研究說明投資人偏好極端正報酬的資產，可能如何改變動能策略的報酬表現。",
    en: "This study tests the interaction between lottery-like characteristics and momentum in cryptocurrency markets. It examines how investor preference for assets with extreme upside potential may alter momentum-strategy performance."
  }],
  ["Economic Policy Uncertainty and Cryptocurrency Volatility", {
    zh: "本研究檢驗經濟政策不確定性與加密貨幣波動度之間的關係。研究揭示政策環境的變化如何成為加密資產風險動態的重要外部因素。",
    en: "This study examines the relation between economic policy uncertainty and cryptocurrency volatility. It shows how changes in the policy environment can serve as an important external driver of crypto-asset risk dynamics."
  }],
  ["The Relationship between Economic Policy Uncertainty and the Cryptocurrency Market", {
    zh: "本研究探討經濟政策不確定性與加密貨幣市場的連動，評估政策風險對新興數位資產市場的影響。結果為理解加密貨幣在不確定環境中的市場角色提供實證基礎。",
    en: "This study explores the connection between economic policy uncertainty and cryptocurrency markets, evaluating how policy risk affects emerging digital-asset markets. It provides an empirical basis for understanding crypto markets in uncertain environments."
  }],
  ["Volatility Information Implied in the Term Structure of VIX", {
    zh: "本研究以多種不受期別影響的變數，檢驗 VIX 期限結構是否能增進已實現波動度的預測。無論在樣本內估計或樣本外預測中，期限結構資訊皆對僅包含水準變數的模型帶來顯著增益。",
    en: "Using multiple maturity-independent variables, this study tests whether information in the VIX term structure improves realized-volatility prediction. The term-structure variables make a substantial incremental contribution both in-sample and out-of-sample beyond level-only models."
  }],
  ["The Information Content of the Implied Volatility Term Structure on Future Returns", {
    zh: "本研究推導隱含變異數期限結構與標的資產預期超額報酬的理論關係，並以 S&P 500 指數進行檢驗。結果顯示期限結構可補充波動率水準資訊，尤其對短期超額報酬具有重要解釋力。",
    en: "This study derives the theoretical relation between the implied-variance term structure and expected excess returns, and tests it with the S&P 500 index. The term structure complements volatility-level information and is particularly informative for short-horizon excess returns."
  }],
  ["The Information Content of Option-Implied Tail Risk on the Future Returns of the Underlying Asset", {
    zh: "本研究由深度價外選擇權價格建構隱含尾端損失與尾端利得指標，檢驗其對標的資產未來報酬的資訊內涵。兩類尾端風險皆可預測 S&P 500 未來報酬，且在景氣衰退期間的效果更為明顯。",
    en: "This study constructs option-implied tail-loss and tail-gain measures from deep out-of-the-money option prices and tests their information content for future underlying-asset returns. Both measures predict future S&P 500 returns, with stronger effects during recessions."
  }],
  ["An Analysis on the Intraday Trading Activity of VIX Derivatives", {
    zh: "本研究以高頻資料分析 VIX 衍生性商品的日內交易活動與 VIX 變動之關係。VIX 期貨的帶符號交易量與當期及未來 VIX 變動相關，顯示期貨市場具有資訊傳遞角色；選擇權交易則較可能反映暫時性的流動性衝擊。",
    en: "Using high-frequency data, this study analyzes the relation between intraday VIX-derivatives trading activity and VIX changes. Signed VIX-futures trading is related to contemporaneous and future VIX movements, while option trading is more consistent with temporary liquidity shocks."
  }]
]);

// Publisher / author-record abstracts. A null value means the paper is forthcoming
// and its original abstract is not yet publicly available.
const originalPublicationAbstracts = new Map([
  ["The Relationship Between the VIX, Aggregate Volatility Magnitude Premium and Economic Policy Uncertainty: Evidence from the Space Industry", null],
  ["Cryptocurrency Dependency of Realized Variance and Economic Policy Uncertainty", "We examine how economic policy uncertainty (EPU) influences realized variance dependency and tail-risk synchronization across major cryptocurrencies. Using 5-min high-frequency returns to construct realized variance and signed jump variance measures, we document that global and Western EPU (the US, UK, France) significantly strengthen both variance dependency (VD) and signed jump variance dependency (SJVD) among the top 15 cryptocurrencies, whereas Asian EPUs exhibit weaker and less consistent effects. The sensitivity of SJVD is particularly pronounced, reflecting the asymmetric transmission of tail risk during uncertainty shocks. These findings remain robust after controlling for Bitcoin’s realized volatility and hold in post-COVID subsample analysis. Our results suggest that cryptocurrency markets exhibit greater systemic interconnectedness and heightened tail-risk co-movements during periods of elevated policy uncertainty, with important implications for risk management and financial stability monitoring."],
  ["The Impact of Economic Policy Uncertainty on the Stock Prices of Foreign-Listed Companies in Taiwan", null],
  ["SVIX, VIX, and Cryptocurrency Market Return", "The literature rarely addresses the correlation between option-implied information in the stock and cryptocurrency markets. This study introduces VMS, defined as the difference between the squared VIX and SVIX indices, which captures the left-tail risk of the stock market (Martin, 2017). Analyzing data from 2014 to 2022, we find that higher VMS predicts increased excess returns in the cryptocurrency market. This relationship remains robust when controlling for economic policy uncertainty (Baker, et al., 2016) and the VIX premium (Cheng, 2019), with no significant impacts from crypto-size or crypto-momentum factors."],
  ["Lottery-like Effect and Cryptocurrency", "In this paper, we conduct a portfolio analysis based on the lottery-like characteristics of cryptocurrencies to examine return predictability. Our results show that cryptocurrencies with higher lottery-like characteristics exhibit lower one-month ahead returns. This phenomenon, known as the lottery-like effect, suggests that investors overvalue cryptocurrencies with stronger lottery-like traits, leading to lower future returns. Moreover, the effect persists over longer horizons, and the results remain robust after controlling for other crypto-asset characteristics."],
  ["A Modified Skewness Premium and Stock Future Returns", "In the spirit of Bates (1991), we construct a modified skewness premium measure and show that it contains information about future stock returns. Instead of complex calculations of implied volatility for American-style equity options, the modified measure is easily calculated and applied. Moreover, a long-short portfolio formed on the modified skewness premium generates an average weekly return of 16 bps (equal to an annualized return of 8.32%) with a t-statistic of 3.82 controlling for common risk factors. Finally, the modified skewness premium has significant cross-sectional predictive power for future stock returns controlling for firms’ characteristics."],
  ["CEO Overconfidence and Investor Sentiment in M&A Decisions", "This study investigates the interactive impact of CEO overconfidence and investor sentiment on merger behavior in U.S. firms. We find that the influence of CEO overconfidence on merger frequency is stronger during periods of high investor sentiment, diminishing in low sentiment times. It suggests that investor sentiment is a more dominant determinant than CEO overconfidence in shaping merger frequency. Furthermore, a bullish market trend motivates overconfident CEOs to pursue diversifying mergers, while a bearish market trend encourages cash payments. Overall, overconfident CEOs adapt their merger behavior based on the economic environment, with investor sentiment playing a dominant role in decision-making."],
  ["Cryptocurrency Momentum and VIX Premium", "The cryptocurrency momentum premium, defined as the risk premium exposure to the cryptocurrencies with higher past return, is a key factor in the cryptocurrency market. In this paper, we investigate whether VIX, VIX premium (Cheng, 2019), or economic policy uncertainty (EPU) can predict changes in cryptocurrency momentum premiums. The empirical analysis indicates that higher VIX premiums can increase the one-month-ahead momentum premium, and that VIX and EPU levels are not predictors of momentum premiums. Overall, we demonstrate that uncertainty can affect the cryptocurrency momentum premium through VIX futures rather than VIX itself or news-based information (i.e., EPU)."],
  ["Cryptocurrency Return Dependency and Economic Policy Uncertainty", "This study investigated whether economic policy uncertainty (EPU) affects the degree of Bitcoin return dependency in the cryptocurrency (crypto) market by calculating the Pearson correlation between Bitcoin returns and the average returns of 19 cryptocurrencies to determine the return dependency. First, we found that an increase in global EPU strengthens the dependency effect. Among the country-level EPU indexes, we found that the increased EPU of crypto-friendly countries (United States, United Kingdom, Japan, and South Korea) is the main enhancer of dependency. By contrast, the EPU index of crypto-unfriendly countries (China and Russia) exhibits a statistically nonsignificant effect. Finally, the empirical results remain similar if we replace Bitcoin with Ethereum to measure dependency."],
  ["Does the Realized Distribution-based Measure Dominate Particular Moments? Evidence from Cryptocurrency Markets", "This study investigates the relationship between the daily returns of cryptocurrencies and their realized performance measure and moments (variance, skewness, and kurtosis). Because the cryptocurrency returns are non-Gaussian distributions and perform bubble-like behaviors, we adopt the performance measure proposed by Schnytzer and Westreich (2013) to capture all informational content related to the distribution of a return. First, the empirical results revealed that there is a positive relationship between the realized performance measure and daily returns. Furthermore, this realized performance measure dominates the realized variance, skewness, and kurtosis in terms of affecting and predicting Bitcoin and Ethereum daily returns."],
  ["Volatility Information and Derivatives Trading — Directional or Volatility Trades?", "We investigate the order flows of S&P 500 index and VIX options and find that the volatility information generated from directional trades of these two options provides consistently effective volatility prediction for the S&P 500 index returns, whereas volatility information generated from volatility trades of S&P 500 index options does not. These results are supported by both in-sample and out-of-sample analyses. In addition, our results show that the volatility information from S&P 500 index options is more useful when the options market is dominated by volatility-informed traders, especially after the introduction of VIX derivatives, which, in general, weakens the predictive power of the volatility information from S&P 500 index options."],
  ["Lottery-like Momentum in the Cryptocurrency Market", "Following the methodology of Bali et al. (2011), we construct the lottery-like portfolio based on the maximum return. First, we find that a higher maximum return leads to a higher future return among 64 cryptocurrencies. This phenomenon is called the lottery-like momentum. Controlling for the momentum effect, the lottery-like momentum still exists in the cryptocurrency market. In addition, we find that the major cryptocurrencies—Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), and Litecoin (LTC)—are less likely to have extreme positive returns. And the absence of extreme positive returns is persistent."],
  ["Economic Policy Uncertainty and Cryptocurrency Volatility", "We investigate the relationship between the economic policy uncertainty index (EPU) and cryptocurrency volatility. We find that a change in EPU of China predicts cryptocurrency volatility, but a change in the EPU of the U.S., Japan, or Korea has no such effect. Moreover, changes in the China EPU are negatively associated with Bitcoin and Litecoin future volatility, which may imply that Bitcoin and Litecoin are hedging tools against the EPU risk. However, changes in China EPU may not affect the cryptocurrency volatility after the Chinese government's regulation of crypto-trading."],
  ["The Relationship between Economic Policy Uncertainty and the Cryptocurrency Market", "In this paper, we investigate whether the economic policy uncertainty (EPU) index provided by Baker et al. (2016) can predict cryptocurrency returns. We show that the EPU index of China can predict the Bitcoin monthly returns while that of U.S. or other Asian countries has no predictive power. Furthermore, the China EPU index has no predictive power for the other main cryptocurrencies. Moreover, China's ban on crypto-trading affects the returns of Bitcoin only among the main cryptocurrencies."],
  ["Volatility Information Implied in the Term Structure of VIX", "This study uses multiple maturity-independent variables to examine whether the volatility information implied in the term structure of volatility index can improve the prediction of realized volatility. The empirical results for the S&P 500 index show that, in terms of both the in-sample estimation and out-of-sample forecasting, the term structure variables provide substantial incremental contribution to the models with only level variables. Our empirical results are robust to various forms of volatility, alternative ways to develop the term structure variable, the impact of macroeconomic variables, and alternative underlying assets."],
  ["The Information Content of the Implied Volatility Term Structure on Future Returns", "We adopt the Heston (1993) stochastic volatility (SV) model framework to examine the theoretical relationship between the term structure of implied volatility and the expected excess returns of underlying assets. Three alternative approaches are adopted for our compilation of the variables representing the information on the squared VIX level and term structure in support of our empirical investigation of the information content of the level and term structure variables on future excess returns in the S&P 500 index. Our empirical results provide support for the important role of the term structure in the determination of future excess returns, with such predictive power being discernible for various horizons. Overall, the information content of the term structure variable is found to be significant, and indeed, a strong complement to that of the level variable. In particular, due to the mean-reversion behavior of volatility, the information in the term structure of implied volatility is found to be very effective in the prediction of shorter-term excess returns."],
  ["The Information Content of Option-Implied Tail Risk on the Future Returns of the Underlying Asset", "We compile option-implied tail loss and gain measures based on a deep out-of-the-money option pricing formula derived by applying extreme value theory, and then use these measures to investigate the information content of option-implied tail risk on the future returns of the underlying assets. Our empirical analysis shows that both tail measures implied by S&P 500 and VIX options can predict future changes in the corresponding underlying assets and are informative on the future returns of the S&P 500 index. The relationships are particularly strong during periods of economic recession and driven by the tail-risk premium."],
  ["An Analysis on the Intraday Trading Activity of VIX Derivatives", "We investigate the relation between trading activity in the VIX derivative markets and changes in the VIX index under a high-frequency framework. We find a significant relation between the signed trading variables of VIX futures and the contemporaneous changes in the VIX index. In addition, the net signed trading variables of VIX futures are significant predictors of future changes in the VIX index. Our results provide support for the informational role of VIX futures and evidence that trading activity in VIX options is likely caused by temporary liquidity shocks rather than the likelihood of informed trading."]
]);

function readPreference(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
}

function savePreference(key, value) {
  try { localStorage.setItem(key, value); } catch { /* Preferences are optional. */ }
}

function applyLanguage(language) {
  const isEnglish = language === "en";
  root.lang = isEnglish ? "en" : "zh-Hant";
  document.querySelectorAll("[data-zh][data-en]").forEach((element) => {
    element.textContent = element.dataset[language];
  });
  document.querySelectorAll(".lang-zh").forEach((element) => { element.hidden = isEnglish; });
  document.querySelectorAll(".lang-en").forEach((element) => { element.hidden = !isEnglish; });
  if (languageLabel) languageLabel.textContent = isEnglish ? "中" : "EN";
  if (languageToggle) languageToggle.setAttribute("aria-label", isEnglish ? "切換至中文" : "Switch to English");
  savePreference("kcy-language", language);
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  const isDark = theme === "dark";
  themeToggle?.setAttribute("aria-label", isDark ? "切換淺色模式" : "切換深色模式");
  savePreference("kcy-theme", theme);
}

function appendPublicationAbstracts() {
  document.querySelectorAll(".publication-item").forEach((item) => {
    const title = item.querySelector("h3")?.textContent.trim();
    const abstract = originalPublicationAbstracts.get(title);
    if (abstract === undefined || item.querySelector(".publication-abstract")) return;

    const details = document.createElement("details");
    details.className = "publication-abstract";

    const summary = document.createElement("summary");
    const readLabel = document.createElement("span");
    readLabel.className = "abstract-read-label";
    readLabel.dataset.zh = abstract ? "閱讀原始摘要" : "摘要狀態";
    readLabel.dataset.en = abstract ? "Read original abstract" : "Abstract status";
    readLabel.textContent = readLabel.dataset.zh;
    const hideLabel = document.createElement("span");
    hideLabel.className = "abstract-hide-label";
    hideLabel.dataset.zh = abstract ? "收起摘要" : "收起";
    hideLabel.dataset.en = abstract ? "Hide abstract" : "Hide";
    hideLabel.textContent = hideLabel.dataset.zh;
    const chevron = document.createElement("span");
    chevron.className = "abstract-chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.textContent = "⌄";
    summary.append(readLabel, hideLabel, chevron);

    const copy = document.createElement("div");
    copy.className = "abstract-copy";
    const original = document.createElement("p");
    original.className = abstract ? "abstract-original" : "abstract-pending";
    original.textContent = abstract || "The publisher's original abstract is not yet publicly available for this forthcoming article.";
    copy.append(original);
    details.append(summary, copy);
    item.append(details);
  });
}

languageToggle?.addEventListener("click", () => applyLanguage(root.lang === "en" ? "zh" : "en"));
themeToggle?.addEventListener("click", () => applyTheme(root.dataset.theme === "dark" ? "light" : "dark"));

menuToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

profileToggle?.addEventListener("click", () => {
  const isOpen = profileLinks.classList.toggle("is-open");
  profileToggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    siteNav?.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

appendPublicationAbstracts();
applyLanguage(readPreference("kcy-language", "zh") === "en" ? "en" : "zh");
applyTheme(readPreference("kcy-theme", "light") === "dark" ? "dark" : "light");
