//
// import React, { Fragment } from 'react';
import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//import PropTypes from 'prop-types';


export const GifExpertApp = (  ) => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories( cats => [ ...cats, 'HunterXHunter']);
    //     // setCategories([...categories,'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories }/>

            <hr />

            {/* <button onClick={(e) => {handleAdd(e)}}>Agregar</button> */}



            <ol>
                {
                    // categories.map( category => {
                    //     return <li key={category}>{category}</li>
                    // })

                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))

                }
            </ol>


        </>
    );

    
}



