export function ProductTable({products}){
    
   

    const rows = []
    let lastCat = null
    for (let product of products) {
        const style = product.stocked ? undefined : {color : 'red'}
        if (product.category !== lastCat) {
            rows.push(<tr key={product.key}>{product.category}</tr>)
        }
        lastCat = product.category
        rows.push(
        <tr>
            <td style={style}>{product.name}</td>
            <td>{product.price}</td>
        </tr>)
    }

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </>
    )
}