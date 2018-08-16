function emojify (text) {
  text = text.replace(/pizzas?/ig, "🍕");
  return text.replace(/tacos?/ig, "🌮");
} // i is for "ignore case"
  // g is for "global"
