const anchor = require('@project-serum/anchor');

const main = async() => {
  console.log("Starting Test...")
  anchor.setProvider(anchor.AnchorProvider.env());
  const program = anchor.workspace.Firstcustomproject;
  const tx = await program.rpc.testFunction();
  console.log("Your Transaction Signature", tx);
}

const runMain = async() => {
  try {
    await main();
    process.exit(0);
  }
  catch {
    console.log(error);
    process.exit(1);
  }
}

runMain();