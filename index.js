const CoinImp = require('coin-imp');
 
(async () => {
  // Create miner
  const miner = await CoinImp('ea9d4e80f6f28db4918b91d888ba4e6d22860ead561ca1f2522c32929a8de0d5'); // CoinImp's Site Key
 
  // Start miner
  await miner.start();
 
  // Listen on events
  miner.on('found', () => console.log('Found!'));
  miner.on('accepted', () => console.log('Accepted!'));
  miner.on('update', data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );
 
  // Stop miner
  setTimeout(async () => await miner.stop(), 60000);
})();