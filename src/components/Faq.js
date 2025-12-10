const items = [
  {
    q: "どんなトラブル物件でも対応できますか？",
    a: "再建築不可、借地権・底地、事故物件、老朽化、越境や境界未確定など幅広く対応しています。まずは状況をお聞かせください。"
  },
  {
    q: "査定や訪問に費用はかかりますか？",
    a: "全国どこでも出張無料です。売却に至らない場合でも料金は発生しません。"
  },
  {
    q: "現金化までのスピードは？",
    a: "最短5営業日が目安です。権利関係が複雑な場合も、専門家と連携して最速ルートをご提案します。"
  }
];

export const Faq = () => `
  <section class="faq" id="faq">
    <div class="container">
      <h2 class="section-title">よくあるご質問</h2>
      ${items
        .map(
          (item) => `
            <div class="faq__item">
              <p class="faq__q">Q. ${item.q}</p>
              <p class="faq__a">${item.a}</p>
            </div>
          `
        )
        .join("")}
    </div>
  </section>
`;

