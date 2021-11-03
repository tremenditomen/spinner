const arrayFrames = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let counter = 100;

for (const item of arrayFrames) {
  setTimeout(() => {
    process.stdout.write(`\r${item}`);
  }, counter);
  counter += 200;
}
