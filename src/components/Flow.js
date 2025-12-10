const steps = [
  {
    tag: "STEP 1",
    title: "お問い合わせ",
    body: "電話・メール・LINEで受付。物件の状況を簡単にヒアリングします。"
  },
  {
    tag: "STEP 2",
    title: "現地またはオンライン査定",
    body: "全国どこでも無料出張。権利関係や越境など懸念も整理し、解決プランを提示。"
  },
  {
    tag: "STEP 3",
    title: "ご提示・ご契約・お支払い",
    body: "最短5営業日で現金化。残置物や近隣調整もこちらで対応し、遅延によるリスクを抑えます。"
  }
];

export const Flow = () => `
  <section class="flow" id="flow">
    <div class="container">
      <h2 class="section-title">ご依頼の流れ</h2>
      <div class="steps">
        ${steps
          .map(
            (step) => `
              <article class="step">
                <span class="step__tag">${step.tag}</span>
                <h3 class="step__title">${step.title}</h3>
                <p class="step__body">${step.body}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  </section>
`;

