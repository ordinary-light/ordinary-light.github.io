// Ordinary Light logo: "ORDINARY" in Archivo extended black, "LIGHT" drawn in square pixels below.
// The pixels use currentColor, so they follow the light and dark themes.
(function(){
  // 7x7 letters drawn with a single line of dots, so the word is as wide as ORDINARY and about as tall as its capitals
  const GLYPHS = {
    L: ["1000000","1000000","1000000","1000000","1000000","1000000","1111111"],
    I: ["1111111","0001000","0001000","0001000","0001000","0001000","1111111"],
    G: ["0111110","1000001","1000000","1000111","1000001","1000001","0111110"],
    H: ["1000001","1000001","1000001","1111111","1000001","1000001","1000001"],
    T: ["1111111","0001000","0001000","0001000","0001000","0001000","0001000"]
  };
  function pixels(word){
    const w = 7, cols = word.length * (w + 1) - 1, rows = 7, r0 = 0.36; // r0: dot radius on a grid of 1
    let r = "";
    [...word].forEach((ch, k) => GLYPHS[ch].forEach((line, y) => [...line].forEach((on, x) => {
      if (on === "1") r += `<circle cx="${k*(w+1) + x + .5}" cy="${y + .5}" r="${r0}"/>`;
    })));
    return `<svg class="px" viewBox="0 0 ${cols} ${rows}" fill="currentColor" aria-hidden="true">${r}</svg>`;
  }
  document.querySelectorAll("[data-logo]").forEach(el => {
    el.setAttribute("aria-label", "Ordinary Light");
    el.innerHTML = `<span class="word" aria-hidden="true">Ordinary</span>${pixels("LIGHT")}`;
  });
})();
