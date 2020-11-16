//
import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => { //Se pone entre {} setCategories porque hacemos una desestructuración

    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault(); // Esto evita el refresco que por defecto hace el form

        if (inputValue.trim().length > 2) {

            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');

        }


    }



    return ( <
        >
        <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        value = { inputValue }
        onChange = { handleInputChange }
        /> <
        /form> <
        />
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}