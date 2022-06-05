// SPDX-License-Identifier: Unlicensed

pragma solidity >0.7.0 <=0.9.0;


// written #2 contract
contract CampaignFactory {

    // creating array of all addresses of all Campaigns that are create.
    address[] public deployedCampaigns;

    event camapaignCreated(
        string title,
        uint requiredCampaignAmount,
        address indexed owner,
        address camapaignAddress,
        string imgURL,
        uint indexed timestamp,
        string indexed category
    );

    function createCampaign(
    string memory campaignTitle, 
    uint requiredCampaignAmount, 
    string memory imgURL, 
    string memory category,
    string memory storyURL
    ) public {
        // Initializing 'Camapaign' contract
        Campaign newCampaign = new Campaign(campaignTitle, requiredCampaignAmount, imgURL, storyURL);

        // addding the addressess of created campaign to the array deployedCampaigns
        deployedCampaigns.push(address(newCampaign));

        emit camapaignCreated(
            campaignTitle, 
            requiredCampaignAmount, 
            msg.sender, 
            address(newCampaign), 
            imgURL,
            block.timestamp,
            category
        );
    }
}



// Written #1 contract
contract Campaign {
    // state variables get stored in 'Storage'(ex:HDD)
    string public title;
    uint public requiredAmount;
    string public image;
    string public story;
    address payable public owner;
    uint public receivedAmount;


    // Defining donate event:
    // 'indexed' keyword used for filtering purpose in nextjs
    // Also we can't add more than 3 indexed items in an event
    // Event can't be accessed in RemixIDE, but is accessable from the Frontend(linke Reactjs, Nextjs).
    // Event makes the frontend more awesome
    event donated(
        address indexed donar, 
        uint indexed amount, 
        uint indexed timestamp
        );


    // parameter variables get stored in 'Memory'(ex:RAM)
    // Also only string & array parameter variables requires 'memory' value, but other parameter variables like 'uint' doesn't required.
    constructor(
        string memory campaignTitle, 
        uint requiredCampaignAmount,
        string memory imageURL,
        string memory storyURL
    ) {
        // Defining values in state variables for parameter variables
        title = campaignTitle;
        requiredAmount = requiredCampaignAmount;
        image = imageURL;
        story = storyURL;
        owner = payable(msg.sender); // We need to define owner 'payable'. 'msg' is a global variable in solidity. 'msg.sender' returns the address of the account which starts the contract. 'msg.value' returns the gas value(in Wei) used in the transaction.
    }

    // donate function, so that anyone came come and donate 
    function donate() public payable {
        require(requiredAmount > receivedAmount, "required amount fullfilled");
        owner.transfer(msg.value);
        receivedAmount += msg.value;

        // whenever this function get called, donated event with get emit
        emit donated(
            msg.sender,
            msg.value, 
            block.timestamp //'block' is a global variable here.
            ); 
    }
}







