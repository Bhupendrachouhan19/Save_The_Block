import styled from "styled-components";
import FormLeftWrapper from "./Components/FormLeftWrapper";
import FormRightWrapper from './Components/FormRightWrapper';

const Form = () => {
<<<<<<< HEAD
=======

    const [form, setForm] = useState({
        campaignTitle: '',
        story: '',
        requiredAmount: '',
        category: 'health',
    });

    const [loading, setLoading] = useState(false);
    const [address, setAddress] = useState(''); // Campaign address which comes whenever user fills the form and submit it.
    const [uploaded, setUploaded] = useState(false);

    const [storyUrl, setStoryUrl] = useState()
    const [imageUrl, setImageUrl] = useState()


    const FormHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    
    const [image, setImage] = useState(null); 

    const ImageHandler = (e) => {
        setImage(e.target.files[0])
    }

    const startCampaign = async (e) => {
        e.preventDefault();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        // console.log(signer);

        if (form.campaignTitle === '') {
            toast.warn("Empty Campaign Title!");
        } else if (form.story === '') {
            toast.warn("Empty Story!");
        } else if (form.requiredAmount === '') {
            toast.warn("Fill the Required Amount!");
        } else if (uploaded === false) {
            toast.warn("Some fields are Empty");
        } else {
            setLoading(true);

            const contract = new ethers.Contract(
                process.env.NEXT_PUBLIC_ADDRESS,
                CampaignFactory.abi,
                signer
            );
            

            console.log("Starting new campaign ......");
            const campaignData = await contract.createCampaign(
                form.campaignTitle,
                parseInt(form.requiredAmount),
                imageUrl,
                form.category,
                storyUrl
            );

            await campaignData.wait();

            setAddress(campaignData.to);

        }
    }

>>>>>>> 516389e ( Bug Removed: Unhandled Runtime Error)
  return (
    <FormWrapper>
        <FormMain>
            <FormTitle>
                Create New Camapaign
            </FormTitle>
            <FormInputsWrapper>
                <FormLeftWrapper />
                <FormRightWrapper />
            </FormInputsWrapper>
        </FormMain>
    </FormWrapper>
  )
}


const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const FormMain = styled.div`
    width: 80%;
`

const FormTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    font-weight: bold;
    color: ${(props) => props.theme.color};
    font-size: 40px;
    font-family: 'poppins';
    margin-top: 45px;
`

const FormInputsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`


export default Form;



























 

































