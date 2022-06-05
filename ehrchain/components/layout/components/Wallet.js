import styled from "styled-components"
import { ethers } from 'ethers'; // Importing the etheres.js library
import { useState } from "react";
import { style } from "@mui/system";

// Adding netwrok info. because after deloying if user is not connected to the polygon network, then it will get because we have added network info.
const networks = {
    polygon: {
      chainId: `0x${Number(80001).toString(16)}`,
      chainName: "Polygon Testnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },
  };


const Wallet = () => {
    const [address, setAddress] = useState('');
    const [balance, setBalance] = useState('')


    const connectWallet = async () => {
        await window.ethereum.request({ method : "eth_requestAccounts" }) // Using this "eth_requestAccount" method we will authenticate the user to the metamask.
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any"); //Metamask is our Web3 provider
        if(provider.network !== "matic") {
            await window.ethereum.request({
                method : "wallet_addEthereumChain",
                params : [
                    {
                         ...networks["polygon"]
                    }
                ]
            })
            const account = provider.getSigner();
            const Address = await account.getAddress();
            setAddress(Address);
            
            const Balance = ethers.utils.formatEther(await account.getBalance());
            setBalance(Balance);
        }
    }
    
  return (
    <ConnectWalletWrapper onClick={connectWallet}>
        {balance == '' ? <Balance></Balance> : <Balance>Acount Balance : {balance.slice(0,4)} Matic</Balance>}
        {address == '' ? <Address>Connect Wallet</Address> :  <Address>Connected to : {address.slice(0,6)}...{address.slice(39)}</Address>} 
    </ConnectWalletWrapper>
  )
}

const ConnectWalletWrapper = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center;
    background-color: ${(props) => props.theme.bgDiv}; 
    padding: 4px 10px;
    margin: 0 15px 0 0;
    height: 80%;
    border-radius: 12px;
    color: ${(props) => props.theme.color};
    font-size: 0.7rem;
    font-family: monospace;
`

const Address = styled.h2`
    background-color: ${(props) => props.theme.bgSubDiv};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    padding: 0 10px;
`

const Balance = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0 5px 0 0;
` 

export default Wallet

// Note:
// 10^(18) Wei = 1 MATIC = 1ETH