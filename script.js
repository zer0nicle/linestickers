/**
 * ゼロニクルスタジオ — インタラクション
 * - 日英言語切り替え
 * - Created/ 実スタンプの疑似トーク送信
 * - シェア / コピー / お問い合わせ
 */

(() => {
  "use strict";

  /* =========================================================
     スタンプセット（Created フォルダ実画像）
     storeUrl は公開後に LINE STORE のURLへ差し替え
     ========================================================= */
  const STICKER_SETS = {
    samurai: {
      banner: "Created/01/main.png",
      tab: "Created/01/tab-16-muki.png",
      titleKey: "stickers.set.samurai",
      descKey: "stickers.set.samurai.desc",
      storeUrl: {
        ja: "https://store.line.me/stickershop/product/35046416/ja",
        en: "https://store.line.me/stickershop/product/35046416/en",
      },
      stickers: [
        { id: "s01", img: "Created/01/01-nandato.png", label: { ja: "なんだと！", en: "What?!" } },
        { id: "s02", img: "Created/01/02-yurusenai.png", label: { ja: "許せない！", en: "Unforgivable!" } },
        { id: "s03", img: "Created/01/03-iikagennnisite.png", label: { ja: "いい加減にしろ！", en: "Cut it out!" } },
        { id: "s04", img: "Created/01/04-kiruzo.png", label: { ja: "斬るぞ！", en: "I'll cut you!" } },
        { id: "s05", img: "Created/01/05-fuzakeruna.png", label: { ja: "ふざけるな！", en: "Don't mess with me!" } },
        { id: "s06", img: "Created/01/06-bakanisuruna.png", label: { ja: "馬鹿にするな！", en: "Don't mock me!" } },
        { id: "s07", img: "Created/01/07-sinjiraren.png", label: { ja: "信じられん！", en: "Unbelievable!" } },
        { id: "s08", img: "Created/01/08-kora.png", label: { ja: "こら！", en: "Hey!" } },
        { id: "s09", img: "Created/01/09-yamero.png", label: { ja: "やめろ！", en: "Stop it!" } },
        { id: "s10", img: "Created/01/10-tatakikiru.png", label: { ja: "叩き斬る！", en: "Slash!" } },
        { id: "s11", img: "Created/01/11-oi.png", label: { ja: "おい！", en: "Oi!" } },
        { id: "s12", img: "Created/01/12-chotto.png", label: { ja: "ちょっと！", en: "Hold on!" } },
        { id: "s13", img: "Created/01/13-dameda.png", label: { ja: "ダメだ！", en: "No way!" } },
        { id: "s14", img: "Created/01/14-ah.png", label: { ja: "あっ！", en: "Ah!" } },
        { id: "s15", img: "Created/01/15-mou.png", label: { ja: "もう！", en: "Ugh!" } },
        { id: "s16", img: "Created/01/16-muki.png", label: { ja: "ムキーッ！", en: "Mukii!" } },
      ],
    },
    burnout: {
      banner: "Created/02/main-st.png",
      tab: "Created/02/tab-st.png",
      titleKey: "stickers.set.burnout",
      descKey: "stickers.set.burnout.desc",
      storeUrl: {
        ja: "https://store.line.me/stickershop/product/36205039/ja",
        en: "https://store.line.me/stickershop/product/36205039/en",
      },
      stickers: [
        { id: "b01", img: "Created/02/01_silent_rage.png", label: { ja: "無言の怒り", en: "Silent rage" } },
        { id: "b02", img: "Created/02/02_furious_typing.png", label: { ja: "怒りのタイピング", en: "Furious typing" } },
        { id: "b03", img: "Created/02/03_exasperated_sigh.png", label: { ja: "あきれたため息", en: "Exasperated sigh" } },
        { id: "b04", img: "Created/02/04_crushing_can.png", label: { ja: "缶つぶし", en: "Crushing can" } },
        { id: "b05", img: "Created/02/05_dark_glare.png", label: { ja: "暗い睨み", en: "Dark glare" } },
        { id: "b06", img: "Created/02/06_forced_smile.png", label: { ja: "作り笑い", en: "Forced smile" } },
        { id: "b07", img: "Created/02/07_quiet_frustration.png", label: { ja: "静かな苛立ち", en: "Quiet frustration" } },
        { id: "b08", img: "Created/02/08_cold_refusal.png", label: { ja: "冷たい拒否", en: "Cold refusal" } },
      ],
    },
    oyaji: {
      banner: "Created/03/main.png",
      tab: "Created/03/tab.png",
      titleKey: "stickers.set.oyaji",
      descKey: "stickers.set.oyaji.desc",
      storeUrl: {
        ja: "https://store.line.me/stickershop/product/38178510/ja",
        en: "https://store.line.me/stickershop/product/38178510/en",
      },
      stickers: [
        { id: "o01", img: "Created/03/01_silent_rage.png", label: { ja: "無言の怒り", en: "Silent rage" } },
        { id: "o02", img: "Created/03/02_crying_rivers.png", label: { ja: "大号泣", en: "Crying rivers" } },
        { id: "o03", img: "Created/03/03_furious_shout.png", label: { ja: "怒号", en: "Furious shout" } },
        { id: "o04", img: "Created/03/04_moved_to_tears.png", label: { ja: "感涙", en: "Moved to tears" } },
        { id: "o05", img: "Created/03/05_table_slam.png", label: { ja: "机バン", en: "Table slam" } },
        { id: "o06", img: "Created/03/06_sobbing_quietly.png", label: { ja: "静かな嗚咽", en: "Quiet sob" } },
        { id: "o07", img: "Created/03/07_steaming_ears.png", label: { ja: "耳から湯気", en: "Steaming ears" } },
        { id: "o08", img: "Created/03/08_happy_crying.png", label: { ja: "うれし泣き", en: "Happy crying" } },
        { id: "o09", img: "Created/03/09_sulking_mad.png", label: { ja: "ふてくされ", en: "Sulking mad" } },
        { id: "o10", img: "Created/03/10_dramatic_kneel_cry.png", label: { ja: "土下座泣き", en: "Dramatic kneel cry" } },
        { id: "o11", img: "Created/03/11_table_flip.png", label: { ja: "テーブル返し", en: "Table flip" } },
        { id: "o12", img: "Created/03/12_sniffling_pitiful.png", label: { ja: "みじめな鼻すすり", en: "Pitiful sniffle" } },
        { id: "o13", img: "Created/03/13_gritting_teeth.png", label: { ja: "歯ぎしり", en: "Gritting teeth" } },
        { id: "o14", img: "Created/03/14_biting_handkerchief.png", label: { ja: "ハンカチ噛み", en: "Biting handkerchief" } },
        { id: "o15", img: "Created/03/15_fiery_eyes.png", label: { ja: "燃える目", en: "Fiery eyes" } },
        { id: "o16", img: "Created/03/16_hugging_pillow_cry.png", label: { ja: "抱き枕泣き", en: "Pillow cry" } },
        { id: "o17", img: "Created/03/17_pointing_finger_scold.png", label: { ja: "指差し説教", en: "Finger scold" } },
        { id: "o18", img: "Created/03/18_holding_back_tears.png", label: { ja: "涙こらえる", en: "Holding back tears" } },
        { id: "o19", img: "Created/03/19_stamping_feet.png", label: { ja: "足踏み", en: "Stamping feet" } },
        { id: "o20", img: "Created/03/20_tearful_apology.png", label: { ja: "涙の謝罪", en: "Tearful apology" } },
        { id: "o21", img: "Created/03/21_dark_aura.png", label: { ja: "暗黒オーラ", en: "Dark aura" } },
        { id: "o22", img: "Created/03/22_gloomy_droop.png", label: { ja: "しょんぼり", en: "Gloomy droop" } },
        { id: "o23", img: "Created/03/23_ripping_paper.png", label: { ja: "紙破り", en: "Ripping paper" } },
        { id: "o24", img: "Created/03/24_corner_crying.png", label: { ja: "隅っこ泣き", en: "Corner crying" } },
        { id: "o25", img: "Created/03/25_cursing_the_sky.png", label: { ja: "空に呪詛", en: "Cursing the sky" } },
        { id: "o26", img: "Created/03/26_waterfall_tears.png", label: { ja: "滝泣き", en: "Waterfall tears" } },
        { id: "o27", img: "Created/03/27_flared_nostrils.png", label: { ja: "鼻ふん", en: "Flared nostrils" } },
        { id: "o28", img: "Created/03/28_towel_wiping_tears.png", label: { ja: "タオル拭き", en: "Towel wipe" } },
        { id: "o29", img: "Created/03/29_breaking_pencil.png", label: { ja: "鉛筆折り", en: "Breaking pencil" } },
        { id: "o30", img: "Created/03/30_rainy_day_tears.png", label: { ja: "雨の日の涙", en: "Rainy day tears" } },
        { id: "o31", img: "Created/03/31_headache_frustration.png", label: { ja: "頭痛い", en: "Headache" } },
        { id: "o32", img: "Created/03/32_snack_crying.png", label: { ja: "おやつ泣き", en: "Snack crying" } },
        { id: "o33", img: "Created/03/33_red_glowing_eyes.png", label: { ja: "赤目発光", en: "Red glowing eyes" } },
        { id: "o35", img: "Created/03/35_envious_handkerchief.png", label: { ja: "嫉妬ハンカチ", en: "Envious handkerchief" } },
        { id: "o36", img: "Created/03/36_laughing_and_crying.png", label: { ja: "泣き笑い", en: "Laugh-cry" } },
        { id: "o37", img: "Created/03/37_shaking_fists.png", label: { ja: "ガクブル拳", en: "Shaking fists" } },
        { id: "o38", img: "Created/03/38_crying_with_cat.png", label: { ja: "猫と号泣", en: "Crying with cat" } },
        { id: "o39", img: "Created/03/39_volcano_rage.png", label: { ja: "火山怒り", en: "Volcano rage" } },
        { id: "o40", img: "Created/03/40_tearful_thumbs_up.png", label: { ja: "涙のサムズアップ", en: "Tearful thumbs up" } },
      ],
    },
  };

  const I18N = {
    ja: {
      brand: "ゼロニクルスタジオ",
      "nav.stickers": "スタンプ",
      "nav.creator": "クリエイター",
      "nav.contact": "お仕事依頼",
      "nav.cta": "ストアへ",
      "hero.brand": "ゼロニクルスタジオ",
      "hero.title": "言えない本音を、スタンプで一発。",
      "hero.lead":
        "怒りも涙も、ムキーッも。<br>ゼロニクルの感情スタンプをトーク画面で試してから、LINE STOREで手に入れよう。",
      "hero.cta": "LINE STOREで見る",
      "hero.secondary": "スタンプを試す",
      "stickers.title": "スタンプを試してみよう",
      "stickers.desc":
        "スタンプをタップすると、トーク画面に送られます。使い心地をチェックしてから購入できます。",
      "stickers.set.samurai": "侍ガエル",
      "stickers.set.samurai.desc": "江戸の街に吠える、怒りカエル侍。",
      "stickers.set.burnout": "燃え尽き",
      "stickers.set.burnout.desc": "デスクに張り付く、現代の疲弊戦士。",
      "stickers.set.oyaji": "ぶち切れおじさん",
      "stickers.set.oyaji.desc": "湯気も涙も一級品。感情爆発系おじさん。",
      "stickers.buy": "購入する（LINE STOREへ）",
      "chat.name": "友だち",
      "chat.status": "プレビュー中",
      "chat.clear": "クリア",
      "chat.hint": "左のスタンプをタップして送信",
      "chat.empty": "スタンプを選ぶと\nここに表示されます",
      "chat.welcome": "ムキーッ！送ってみろ！",
      "creator.title": "クリエイターについて",
      "creator.desc": "ゼロニクルスタジオのこと、キャラクターのこと。",
      "creator.name": "ゼロニクル",
      "creator.role": "イラストレーター・スタンプクリエイター",
      "creator.storyTitle": "想い",
      "creator.story":
        "チャットでうまく言えない怒り、疲れ、涙。そんな本音を、ひと押しで届けたい。<br>ゼロニクルスタジオは、感情を誇張して笑いに変えるスタンプをつくっています。",
      "creator.bgTitle": "制作背景",
      "creator.bg":
        "日常の「ムキーッ」から生まれた侍ガエルを皮切りに、燃え尽きサラリーマン、ぶち切れおじさんへとキャラクターを広げてきました。<br>見て笑えて、送って気持ちが晴れる。そんなスタンプを目指しています。",
      "chardex.title": "キャラクター図鑑",
      "chardex.c1.name": "侍ガエル",
      "chardex.c1.desc":
        "江戸の街で吠える怒りカエル侍。鉢巻を締め、ムキーッと蒸気を噴く。",
      "chardex.c2.name": "燃え尽きくん",
      "chardex.c2.desc":
        "デスクに張り付く現代の疲弊戦士。無言の怒りと作り笑いが得意技。",
      "chardex.c3.name": "ぶち切れおじさん",
      "chardex.c3.desc":
        "耳から湯気、目から滝。怒りのボルテージも涙の量も一級品。",
      "sns.title": "フォローしてね",
      "sns.desc": "新作スタンプや制作裏話を発信中",
      "sns.x": "X でフォロー",
      "sns.ig": "Instagram",
      "contact.title": "お仕事のご依頼や感想など",
      "contact.desc":
        "企業コラボ・オーダーメイドスタンプ制作など、お気軽にご相談ください。<br>また、スタンプの使い心地や感想などもお気軽にご連絡ください。",
      "contact.name": "お名前",
      "contact.email": "メールアドレス",
      "contact.message": "メッセージ",
      "contact.submit": "送信する",
      "contact.or": "または",
      "share.title": "友だちにも教えよう",
      "share.desc": "このページをシェアして、ムキーッを広げてください。",
      "share.x": "Xでシェアする",
      "share.copy": "リンクをコピー",
      "share.copied": "コピーしました",
      "share.tweet":
        "言えない本音をスタンプで一発！ゼロニクルスタジオのLINEスタンプ公式サイト。トーク画面で試せます。",
      "footer.copy": "© 2026 zeronicle",
      "footer.note": "本サイトはLINEスタンプのプロモーション用ポートフォリオです。",
      "contact.mailSubject": "【ゼロニクルスタジオ】お仕事のご相談",
      "contact.mailBodyPrefix": "お問い合わせ内容",
    },
    en: {
      brand: "Zeronicle Studio",
      "nav.stickers": "Stickers",
      "nav.creator": "Creator",
      "nav.contact": "Work with us",
      "nav.cta": "Store",
      "hero.brand": "Zeronicle Studio",
      "hero.title": "Say the unsayable — in one tap.",
      "hero.lead":
        "Rage, tears, and full-on Mukii. Preview Zeronicle’s emotion stickers in chat, then grab them on LINE STORE.",
      "hero.cta": "View on LINE STORE",
      "hero.secondary": "Try stickers",
      "stickers.title": "Try the stickers",
      "stickers.desc":
        "Tap a sticker to send it into the chat preview. Feel how they land in conversation before you buy.",
      "stickers.set.samurai": "Samurai Frog",
      "stickers.set.samurai.desc": "A furious frog samurai roaring through Edo streets.",
      "stickers.set.burnout": "Burnout",
      "stickers.set.burnout.desc": "Desk-bound, drained, and quietly boiling.",
      "stickers.set.oyaji": "Rage Uncle",
      "stickers.set.oyaji.desc": "Steam from the ears, rivers from the eyes.",
      "stickers.buy": "Buy on LINE STORE",
      "chat.name": "Friend",
      "chat.status": "Preview",
      "chat.clear": "Clear",
      "chat.hint": "Tap a sticker on the left to send",
      "chat.empty": "Pick a sticker\nto preview it here",
      "chat.welcome": "Send me a Mukii!",
      "creator.title": "About the creator",
      "creator.desc": "Zeronicle Studio and the characters behind the stickers.",
      "creator.name": "zeronicle",
      "creator.role": "Illustrator & sticker creator",
      "creator.storyTitle": "Why I create",
      "creator.story":
        "Anger, exhaustion, tears — feelings that are hard to type. Zeronicle Studio turns those oversized emotions into stickers you can laugh with and send in one tap.",
      "creator.bgTitle": "How it started",
      "creator.bg":
        "It began with Samurai Frog — born from everyday “Mukii” moments — then grew into Burnout Guy and Rage Uncle. Funny to look at, satisfying to send.",
      "chardex.title": "Character guide",
      "chardex.c1.name": "Samurai Frog",
      "chardex.c1.desc":
        "A furious frog samurai in Edo. Headband tight, steam blasting.",
      "chardex.c2.name": "Burnout Guy",
      "chardex.c2.desc":
        "Glued to the desk. Master of silent rage and forced smiles.",
      "chardex.c3.name": "Rage Uncle",
      "chardex.c3.desc":
        "Steam from the ears, tears like waterfalls. Peak emotion voltage.",
      "sns.title": "Follow along",
      "sns.desc": "New packs, process notes, and behind-the-scenes",
      "sns.x": "Follow on X",
      "sns.ig": "Instagram",
      "contact.title": "Work inquiries & feedback",
      "contact.desc":
        "Brand collabs, custom sticker packs, and more — feel free to reach out.<br>Feedback on the stickers is welcome too.",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.message": "Message",
      "contact.submit": "Send",
      "contact.or": "or",
      "share.title": "Share with friends",
      "share.desc": "Spread a little Mukii.",
      "share.x": "Share on X",
      "share.copy": "Copy link",
      "share.copied": "Link copied",
      "share.tweet":
        "Say the unsayable in one tap — Zeronicle Studio LINE stickers. Try them in the chat preview!",
      "footer.copy": "© 2026 zeronicle",
      "footer.note": "A promotional portfolio site for LINE stickers.",
      "contact.mailSubject": "[Zeronicle Studio] Work inquiry",
      "contact.mailBodyPrefix": "Inquiry",
    },
  };

  let lang = localStorage.getItem("zeronicle-lang") || "ja";
  let activeSet = "samurai";
  let chatInitialized = false;

  const stickerGrid = document.getElementById("sticker-grid");
  const chatMessages = document.getElementById("chat-messages");
  const setBuyLink = document.getElementById("set-buy-link");
  const chatClearBtn = document.getElementById("chat-clear");
  const shareXBtn = document.getElementById("share-x");
  const shareCopyBtn = document.getElementById("share-copy");
  const copyToast = document.getElementById("copy-toast");
  const contactForm = document.getElementById("contact-form");
  const langButtons = document.querySelectorAll(".lang-btn");
  const setTabs = document.querySelectorAll(".set-tab");
  const setBannerImg = document.getElementById("set-banner-img");
  const setBannerTitle = document.getElementById("set-banner-title");
  const setBannerDesc = document.getElementById("set-banner-desc");
  const chatAvatar = document.querySelector(".chat-avatar-img");

  function t(key) {
    return (I18N[lang] && I18N[lang][key]) || I18N.ja[key] || key;
  }

  function applyI18n() {
    document.documentElement.lang = lang === "en" ? "en" : "ja";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(key);
      if (value == null) return;
      // <br> を含む文言は HTML として反映（改行を保持）
      if (value.includes("<br>")) el.innerHTML = value;
      else el.textContent = value;
    });

    langButtons.forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    updateBuyLink();
    syncHeroStoreUrl();
    updateSetBanner();
    renderStickerGrid();

    const empty = chatMessages && chatMessages.querySelector(".chat-empty");
    if (empty) empty.textContent = t("chat.empty");

    localStorage.setItem("zeronicle-lang", lang);
  }

  function setLanguage(next) {
    if (next !== "ja" && next !== "en") return;
    lang = next;
    applyI18n();
  }

  function syncHeroStoreUrl() {
    const heroCta = document.querySelector(".hero-actions .cta-primary");
    if (!heroCta) return;
    // 差し替え: ヒーローCTA = 代表セット（侍ガエル）
    const urls = STICKER_SETS.samurai.storeUrl;
    heroCta.href = urls[lang] || urls.ja;
  }

  function updateBuyLink() {
    const set = STICKER_SETS[activeSet];
    if (!set || !setBuyLink) return;
    setBuyLink.href = set.storeUrl[lang] || set.storeUrl.ja;
  }

  function updateSetBanner() {
    const set = STICKER_SETS[activeSet];
    if (!set) return;
    if (setBannerImg) setBannerImg.src = set.banner;
    if (setBannerTitle) {
      setBannerTitle.setAttribute("data-i18n", set.titleKey);
      setBannerTitle.textContent = t(set.titleKey);
    }
    if (setBannerDesc) {
      setBannerDesc.setAttribute("data-i18n", set.descKey);
      setBannerDesc.textContent = t(set.descKey);
    }
    if (chatAvatar) chatAvatar.src = set.tab;
  }

  function renderStickerGrid() {
    if (!stickerGrid) return;
    const set = STICKER_SETS[activeSet];
    if (!set) return;

    stickerGrid.innerHTML = "";

    set.stickers.forEach((sticker) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "sticker-btn";
      btn.setAttribute("role", "listitem");
      btn.setAttribute("aria-label", sticker.label[lang] || sticker.label.ja);

      const img = document.createElement("img");
      img.src = sticker.img;
      img.alt = sticker.label[lang] || sticker.label.ja;
      img.loading = "lazy";
      btn.appendChild(img);

      btn.addEventListener("click", () => sendSticker(sticker));
      stickerGrid.appendChild(btn);
    });
  }

  function setActiveSet(setId) {
    if (!STICKER_SETS[setId]) return;
    activeSet = setId;

    setTabs.forEach((tab) => {
      const isActive = tab.dataset.set === setId;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    updateBuyLink();
    updateSetBanner();
    renderStickerGrid();
  }

  function resetChat(withWelcome) {
    if (!chatMessages) return;
    chatMessages.innerHTML = "";
    chatInitialized = false;

    if (withWelcome) {
      appendFriendText(t("chat.welcome"));
      chatInitialized = true;
    } else {
      const empty = document.createElement("p");
      empty.className = "chat-empty";
      empty.textContent = t("chat.empty");
      chatMessages.appendChild(empty);
    }
  }

  function appendFriendText(text) {
    const row = document.createElement("div");
    row.className = "chat-row is-friend";
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble";
    bubble.textContent = text;
    row.appendChild(bubble);
    chatMessages.appendChild(row);
    scrollChatToBottom();
  }

  function sendSticker(sticker) {
    if (!chatMessages) return;

    const empty = chatMessages.querySelector(".chat-empty");
    if (empty) empty.remove();

    if (!chatInitialized) {
      appendFriendText(t("chat.welcome"));
      chatInitialized = true;
    }

    const row = document.createElement("div");
    row.className = "chat-row";

    const img = document.createElement("img");
    img.className = "chat-sticker";
    img.src = sticker.img;
    img.alt = sticker.label[lang] || sticker.label.ja;
    row.appendChild(img);

    chatMessages.appendChild(row);
    scrollChatToBottom();
  }

  function scrollChatToBottom() {
    requestAnimationFrame(() => {
      chatMessages.scrollTop = chatMessages.scrollHeight;
    });
  }

  function shareOnX() {
    const url = window.location.href;
    const text = t("share.tweet");
    const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}`;
    window.open(intent, "_blank", "noopener,noreferrer");
  }

  async function copyLink() {
    const url = window.location.href;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const ta = document.createElement("textarea");
        ta.value = url;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      showCopyToast();
    } catch (err) {
      console.warn("Copy failed:", err);
    }
  }

  function showCopyToast() {
    if (!copyToast) return;
    copyToast.hidden = false;
    copyToast.textContent = t("share.copied");
    clearTimeout(showCopyToast._timer);
    showCopyToast._timer = setTimeout(() => {
      copyToast.hidden = true;
    }, 2000);
  }

  function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.name.value || "").trim();
    const email = (form.email.value || "").trim();
    const message = (form.message.value || "").trim();

    if (!name || !email || !message) {
      form.reportValidity();
      return;
    }

    const to = "zer0nicle.inc@gmail.com";
    const subject = t("contact.mailSubject");
    const body = [
      `${t("contact.name")}: ${name}`,
      `${t("contact.email")}: ${email}`,
      "",
      `${t("contact.mailBodyPrefix")}:`,
      message,
    ].join("\n");

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  function setupReveal() {
    const targets = document.querySelectorAll(
      ".section-head, .sticker-panel, .chat-panel, .creator-layout, .chardex, .sns-block, .contact-form, .section-share > div"
    );
    targets.forEach((el) => el.classList.add("reveal"));

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => io.observe(el));
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  setTabs.forEach((tab) => {
    tab.addEventListener("click", () => setActiveSet(tab.dataset.set));
  });

  if (chatClearBtn) {
    chatClearBtn.addEventListener("click", () => resetChat(false));
  }

  if (shareXBtn) shareXBtn.addEventListener("click", shareOnX);
  if (shareCopyBtn) shareCopyBtn.addEventListener("click", copyLink);
  if (contactForm) contactForm.addEventListener("submit", handleContactSubmit);

  applyI18n();
  setActiveSet("samurai");
  resetChat(true);
  setupReveal();
})();
