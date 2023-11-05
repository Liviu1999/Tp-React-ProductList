export function Search({id, search, setSearch, place, label, showStockOnly, onStockOnlyChange}){
    
    
    return(
        <>
            <input type="text" 
                value={search}
                onChange={e => setSearch(e.target.value)} 
                placeholder={place} />
            <br />
            <input type="checkbox" 
                checked={showStockOnly} 
                onChange={e => onStockOnlyChange(e.target.checked)} 
                id={id} />
            <label htmlFor={id}>{label}</label>
        </>
    )
}

