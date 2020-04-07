const sentence = "hello there from lighthouse labs";

const typewriterAnimation = (sentence) => {
  // set a counter to control the delay
  let timeoutCounter = 0;

  // loop through the characters in the sentence
  // and print each to standard output before
  // incrementing the delay by 50 ms
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timeoutCounter);
    timeoutCounter += 50;
  }

  // add a newline to push the command prompt
  // back onto a separate line
  setTimeout(() => {
    process.stdout.write('\n');
  }, timeoutCounter);
};

typewriterAnimation(sentence);
