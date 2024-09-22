require('dotenv').config();
const ethers = require('ethers');

async function checkBalance() {
    // Connect to the network
    const provider = new ethers.providers.JsonRpcProvider(process.env.API_URL);

    // Get the wallet address from the private key
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    // Fetch the balance
    const balance = await wallet.getBalance();

    // Log the balance (formatted in EWT or ETH)
    console.log(`Balance: ${ethers.utils.formatEther(balance)} ETH/EWT`);
}

checkBalance().catch(console.error);
