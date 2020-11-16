import React from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    const {data: images, loading} = useFetchGifs(category);


    // useEffect( () => {          // Con useEffect conseguimos que no se renderice la página de modo infinito
    //     getGifs( category )
    //         .then( setImages );   // Poner sólo setImages es lo mismo que poner imgs => setImages ( imgs )
    // }, [ category ])

    //////// VAMOS A PASAR ESTO A UN HELPER LLAMADO getGifs.js ///////////////////////////////
    // const getGifs = async() => {

    //     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=wgNNLIuJxOOB02uS07w1S2xApMJtECQX`;
    //     const resp = await fetch( url );
    //     const {data} = await resp.json();

    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })

    //     // console.log(gifs);
    //     setImages(gifs);

    // }

    // getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            { loading && <p className="animate__animated animate__flash">Cargando...</p> }

            <div className="card-grid">
                
                {
                    images.map( img => (                     // Después de una funcion flecha los paréntesis indican un return

                        <GifGridItem 
                            key={img.id}
                            {...img}                         // Con ... se mandan todas las propiedades de img de forma independiente
                        />
        
                    ))
                }
                
            </ div>
        </>
    )
}
