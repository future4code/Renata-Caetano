import React from 'react';
import {useForm} from "../../hooks/useForm"
import { user } from '../../services/user';
import { useHistory } from 'react-router-dom';
import { useProtectPage } from '../../hooks/useProtectPage';

const AddPostPage = () => {
    useProtectPage()

    const history = useHistory()
    const {form, onChange} = useForm({text:'',title: ""})

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        createRecipe(form, history)
    }

    return(
        <div>
            
            <Form onSubmit={handleSubmission} >
                <TextField 
                    
                    value={form.title}
                    value={form.text}
                    onChange={handleInputChange}
                />
              
            </Form>
        </div>
    )
}

export default AddPostPage;