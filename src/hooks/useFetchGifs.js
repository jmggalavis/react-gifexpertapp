import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {          // Con useEffect conseguimos que no se renderice la página de modo infinito
        getGifs( category )
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                });

            });   
    }, [ category ])

    return state;       // state tiene el valor de { data:[], loading:true }

}
