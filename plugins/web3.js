import {Connection, PublicKey, Transaction, TransactionInstruction} from "@solana/web3.js";
import {Token} from "@solana/spl-token";
import Vue from 'vue'

const cluster = "https://api.mainnet-beta.solana.com";
const connection = new Connection(cluster, "confirmed");

const TOKEN_PROGRAM_ID = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
const ASSOCIATED_TOKEN_PROGRAM_ID = new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
const PARASOL_FINANCE_TOKEN = new PublicKey("Hmatmu1ktLbobSvim94mfpZmjL5iiyoM1zidtXJRAdLZ");
const PARASOL_FINANCE_MINT = new PublicKey("PaRaxU6dFX8ZeMPAvW7mXVhJ2UQokrqJhvY9hqyzRjA");

const wallet = {
	isConnected: false,
	publicKey: null
}

export default ({ app }, inject) => {
	inject('wallet', Vue.observable(wallet))
}

if ("solana" in window) {
	const provider = window.solana;
	if (provider.isPhantom) {
		window.solana.connect({ onlyIfTrusted: true })
			.then(({ publicKey }) => {
				wallet.isConnected = window.solana.isConnected;
				wallet.publicKey = publicKey.toString();
			});
	}
}

const findAssociatedTokenAddress = async (walletAddress, tokenMintAddress) => {
	return (
		await PublicKey.findProgramAddress(
			[
				walletAddress.toBuffer(),
				TOKEN_PROGRAM_ID.toBuffer(),
				tokenMintAddress.toBuffer(),
			],
			ASSOCIATED_TOKEN_PROGRAM_ID
		)
	)[0];
};

const createTransaction = async (instructions, feePayer) => {
	let transaction = new Transaction().add(...instructions);
	transaction.feePayer = feePayer
	transaction.recentBlockhash = (
		await connection.getRecentBlockhash()
	).blockhash;
	return transaction;
};

Vue.mixin({
	methods:{
		isPhantomAvailable() {
			if (!"solana" in window) return false;
			return window.solana && window.solana.isPhantom;
		},
		isConnected() {
			return window.solana.isConnected;
		},
		async orderTiers(amount) {
			const transferInstruction = Token.createTransferCheckedInstruction(
				TOKEN_PROGRAM_ID,
				await findAssociatedTokenAddress(new PublicKey(this.$wallet.publicKey), PARASOL_FINANCE_TOKEN),
				PARASOL_FINANCE_TOKEN,
				await findAssociatedTokenAddress(PARASOL_FINANCE_MINT, PARASOL_FINANCE_TOKEN),
				new PublicKey(this.$wallet.publicKey),
				[],
				amount * 10000000,
				7
			);
			const transaction = await createTransaction([transferInstruction], new PublicKey(this.$wallet.publicKey));
			const { signature } = await window.solana.signAndSendTransaction(transaction);
			await connection.confirmTransaction(signature);
			this.$root.$emit('thanks');
		}
	}
});
