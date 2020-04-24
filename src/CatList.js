import React from 'react'

const CatList = props => {
    return(
        <div>
            {props.catPics.map(pic => (
                <img src={pic.url} alt={pic.id}/>
            ))}
        </div>
    )
}
export default CatList