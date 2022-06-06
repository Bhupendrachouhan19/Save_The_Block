Video Title: Complete Web3 Crowdfunding Dapp Project in Hindi | Solidity | Next.js | Hardhat | styled-components

Tech used:
1. Remix
2. Nextjs
3. Polygon Protocol
4. IPFS
5. Hardhat
6. Styled-components:
  -> Material UI


-----------------------------
Steps used:
1) Setiing up Project starter environment and adding dependencies.
2) Writing smartcontract on Remix IDE.
5) Working on Frontend.

-----------------------------
Important Links 
Infura: https://infura.io/dashboard 
Gnosis Chain: https://poa.gitbook.io/xdai/for-users/wallets/metamask/metamask-setup
Mumbai Polygonscan: https://mumbai.polygonscan.com/
Mumbal Polygonscan Faucet: https://faucet.polygon.technology/

for frontend dependencies:
Material UI: https://mui.com/material-ui/getting-started/installation/

-----------------------------
Sequence of commands I have used:
1)npx creat-next-app ehrchain
    cd ehrchain
2)npm install --save-dev hardhat
3)npx hardhat init
  selcted: create an empty hardhat.config.js
  npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
4)Create folders named 'contracts' and 'scripts'.
5)Creating 'Campaign.sol' file and copy pasting the contract code from the Remix IDE.
6)npx hardhat compile
7)Now'll configure our hardhat to the 'Polygon Mumbai' Test network using Infura .
8)Connect to 'Gnosis Chain' using metamask wallet.
9)Now configuring a metamask account into hardhat.
10)npx hardhat acconts -> will give the metamask account address which is connected to the polygon network.
11)Creating 'deploy.js' file and writing function to deploy the 'CampaignFactory' smart on the polygon blockchain.
Run this command to deploy the smartcontract:
npx hardhat run scripts/deploy.js

**Now let's start working on the frontend**
1)Installing Material UI, run:
npm install @mui/material @emotion/react @emotion/styled
2)Run the project:
npm run dev

*NOTE : npm run dev is used to view or run the application worked on while in development mode to see active changes 
while npm start on the other hand cannot be run until npm build has been run 
which is usually when the project/ application has reached a MVP or presentation stage...
the application is probably ready for use at that stage that's when npm start is used.

3)Install (you can install all this by using 'npm install' command):
    "@mui/styled-engine-sc": "^5.8.0",
    "@types/styled-components": "^5.1.25",
    "styled-components": "^5.3.5"
    
4) To prevent facing problem while renderin styled-components,
run, npm i --save-dev "babel-plugin-styled-components"
Create .babelrc file in the root directory and copy paste below code init:
{
  "presets": ["next/babel"],
  "plugins": [
    ["styled-components", { "ssr" : true }]
  ]
}
5)Importing Google Fonts, Remember we can't use styled component directory to use google fonts. So create a 'style' folder in the root directory and import Google Fonts there in a 'global.css' file then import this file in the pages/_app.js file.
6)Downloading material ui dependencies to import material ui icons:
npm install @emotion/styled @emotion/react @mui/icons-material
7)After Doing all the header work and styling, now add the Wallet connect button in the Header.
8)After completing the all Header and navigation part, now start working on the frontend of the pages like dashborad, campaign, create campaign and about us.
9)Now work on the taking input from the user and uploading it to the IPFS part.
10)Install the 'React Developer Tools' extension.
11)Installing React Load Spinner and react-toastify:
npm i react-loader-spinner react-toastify 
12)'Uploading to IPFS par' -> Installing IPFS http client:
npm install ipfs-htttp-client







-----------------------------
Solidity:-
1. State Variales:
->Title (Campaign Title)
->Required Amount
->Image
->Story
->Owner
->Recieved Amount
