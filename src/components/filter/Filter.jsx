import  './filter.scss'

function Filter(){
    return (
        <div className='filter'>
        <h1>Búsqueda de resultados</h1>
        <div className="top">
            <div className="item">
                <label htmlFor="city">Localidad</label>
                <input type="text" name="city" id="city" placeholder='Ciudad'/>
            </div>
        </div>

        <div className="bottom">
            <div className="item">
                <label htmlFor="city">Tipo</label>
                <select name="type" id="type">
                    <option value="">Selecciona</option>
                    <option value="buy">Comprar</option>
                    <option value="rent">Alquilar</option>
                    
                </select>
                </div>
                
            <div className="item">
                <label htmlFor="property">Propiedad</label>
                <select name="property" id="property">
                     <option value="">Selecciona</option>
                    <option value="house">Casa</option>
                    <option value="apartment">Departamento</option>
                    <option value="condo">condo</option>
                    <option value="land">Terreno</option>
               
                </select>
            </div>
            
            <div className="item">
                <label htmlFor="minPrice">minPrice</label>
                <input type="number" name="minPrice" id="minPrice" placeholder='any'/>

            </div>
            
            <div className="item">
                <label htmlFor="maxPrice">maxPrice</label>
                <input type="number" name="maxPrice" id="maxPrice" placeholder='any'/>

                </div>
                <div className="item">
                <label htmlFor="bedroom">Habitaciones</label>
                <input type="text" name="bedroom" id="bedroom" placeholder='any'/>
                </div>
            <button>
                <img src="/search.png" alt="" />
            </button>
            
            </div>
        
        </div>
    )

}

export default Filter;