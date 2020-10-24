import React from 'react'
import '../TableResults/TableResults.scss'
import { Observer } from 'mobx-react-lite';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem'
import TableHeader from '../TableHeader/TableHeader'
import TableFooter from '../TableFooter/TableFooter'
import StoreContext from '../../Store/StoreContext'

const TableResults = () => {

    const store = React.useContext(StoreContext)

    return <Observer>{() => (
        <>        
            <table className="table">
                
                <TableHeader />
                <tbody>
                    {store.items.map(item =>{
                    return <ShoppingCartItem 
                                key={item.id}
                                itemId={item.id}
                                itemImage={item.image}
                                itemName={item.productName} 
                                itemPrice={item.unityPrice}
                            />
                    })}
                </tbody>

            </table>
            <TableFooter />
        </>
    )}</Observer>
}

export default TableResults;
