import React from 'react'

const MenuCard = ({menuData}) => {
    return ( 
        <>
       <section className='main-card--container'>
        {menuData.map((data) => {
            const {id,name,description,category,image} = data;
            return (
                <>  
                <div className='card-container' key={id}>
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-number card-circle subtle'>
                        {id}
                        </span>
                        <span className='card-author subtle' style={{ color:"red" }}>{name}</span>
                        <h2 className='card-title'>{category}</h2>
                        <span className='card-description subtle'>{description}
                         </span>
                         <div className="card-read">Read</div>
                    </div>
                    <img src={image} alt={image+id} className='card-media' />
                    <div className="card-tag subtle">Order Now</div>
                </div>
            </div>
                </>
            )

        })}
        </section>
       

        </>
    )
}

export default MenuCard