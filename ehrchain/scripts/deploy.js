const hre = require('hardhat');

async function main() {

    // getContractFactory() is a method which is given by ether.js, using this method we can access all the contracts present in the artifacts.
    const CampaignFactory = await hre.ethers.getContractFactory("CampaignFactory");
    const campaignFactory = await CampaignFactory.deploy();

    await campaignFactory.deployed();

    console.log("Factory deployed to: ", campaignFactory.address); //this will return the address of deployed Campaign Fctory, which we will use to access the data in the frontend.
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });