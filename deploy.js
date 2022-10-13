const ethers = require("ethers");
const fs = require("fs");
require("dotenv").config();

// http://127.0.0.1:7545
async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  console.log(process.env.PRIVATE_KEY);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy(); // Stop here! Wait for contract to deploy
  await contract.deployTransaction.wait(1);
  // Get number
  const currentFavouriteNumber = await contract.retrieve();
  console.log(
    `Current Favourite Number : ${currentFavouriteNumber.toString()}`
  );
  const transactionResponse = await contract.store("7");
  const transactionReceipt = await transactionResponse.wait(1);
  const updatedFavouriteNumber = await contract.retrieve();
  console.log(`Updated favourite number is: ${updatedFavouriteNumber}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
