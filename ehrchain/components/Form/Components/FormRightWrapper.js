import styled from 'styled-components';
import { FormState } from '../Form';
import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';
import { create as IPFSHTTPCLIENT } from 'ipfs-http-client'; //Importing IPFS http client


// Establishing the connection between the IPFS client and the Infura
const client = IPFSHTTPCLIENT("https://ipfs.infura.io:5001/api/v0")


const FormRightWrapper = () => {

    const Handler = useContext(FormState);  

    const [uploadingLoading, setUploadingLoading] = useState(false);
    const [uploaded, setUploaded] = useState(false);

    const uploadFiles = async (e) => {
        e.preventDefault();
        setUploadingLoading(true);

        // For Uploading Story:
        if(Handler.form.story !== ""){
            // Will try to upload the story to the IPFS
            try {
                const added = await client.add(Handler.form.story); // will add the story to to IPFS.
                Handler.setStoryUrl(added.path); // will pass the content Address or IPFS to the setStoryUrl() method.
            } catch (error) {
                toast.warn(`Error : Story Not Uploaded`); // Will show a popup this message if error occurs while uploading
            }
        }

        // For Uploading Image
        if(Handler.image !== null){
            // Will try to upload the image to the IPFS
            try {
                const added = await client.add(Handler.image); // will add the story to to IPFS.
                Handler.setImageUrl(added.path); // will pass the content Address or IPFS to the setImageUrl() method.
            } catch (error) {
                toast.warn(`Error : Image Not Uploaded`); // Will show a popup this message if error occurs while uploading
            }
        }

        // After file uploaded, setting setUploading() to false
        setUploadingLoading(false);
        setUploaded(true);
        Handler.setUploaded(true);
        toast.success("Files Uploaded Successfully");

    }

  return (
    <FormRight>
      <FormInput>
        <FormRow>
          <RowFirstInput>
            <label>Required Amount</label>
            <Input onChange={Handler.FormHandler} value={Handler.form.requiredAmount} name="requiredAmount" placeholder='Required Amount'></Input>
          </RowFirstInput>
          <RowSecondInput>
            <label>Choose Category</label>
            <Select onChange={Handler.FormHandler} value={Handler.form.category} name="category">
              <option>Health</option>
              <option>Education</option>
              <option>Animal</option>
            </Select>
          </RowSecondInput>
        </FormRow>
      </FormInput>
      {/* Image */}
      <FormInput>
        <label>Select Image</label>
            <Image onChange={Handler.ImageHandler} type={'file'} accept='image/*'>
        </Image>
      </FormInput>

      {
        uploadingLoading == true ? <Button><TailSpin color='#fff' height={20}/></Button> : 
        uploaded == false ? <Button onClick={uploadFiles}> Upload Files to IPFS </Button> :
        <Button style={{cursor: "no-drop"}}>Files uploaded Sucessfully</Button> 
      }
      <Button onClick={Handler.startCampaign}>
        Start Campaign
      </Button>
    </FormRight>
  )
}

const FormRight = styled.div`
  width:45%;
`

const FormInput = styled.div`
  display:flex ;
  flex-direction:column;
  font-family:'poppins';
  margin-top:10px ;
`

const FormRow = styled.div`
  display: flex;
  justify-content:space-between;
  width:100% ;
`

const Input = styled.input`
  padding:15px;
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  margin-top:4px;
  border:none ;
  border-radius:8px ;
  outline:none;
  font-size:large;
  width:100% ;
` 

const RowFirstInput = styled.div`
  display:flex ;
  flex-direction:column ;
  width:45% ;
`

const RowSecondInput = styled.div`
  display:flex ;
  flex-direction:column ;
  width:45% ;
`

const Select = styled.select`
  padding:15px;
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  margin-top:4px;
  border:none ;
  border-radius:8px ;
  outline:none;
  font-size:large;
  width:100% ;
`

const Image = styled.input`
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  margin-top:4px;
  border:none ;
  border-radius:8px ;
  outline:none;
  font-size:large;
  width:100% ;
  &::-webkit-file-upload-button {
    padding: 15px ;
    background-color: ${(props) => props.theme.bgSubDiv} ;
    color: ${(props) => props.theme.color} ;
    outline:none ;
    border:none ;
    font-weight:bold ;
  }  
`

const Button = styled.button`
  display: flex;
  justify-content:center;
  width:100% ;
  padding:15px ;
  color:white ;
  background-color:#00b712 ;
  background-image:
      linear-gradient(180deg, #00b712 0%, #5aff15 80%) ;
  border:none;
  margin-top:30px ;
  cursor: pointer;
  font-weight:bold ;
  font-size:large ;
`

export default FormRightWrapper