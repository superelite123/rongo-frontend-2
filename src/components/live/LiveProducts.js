import React from 'react'
import {Grid} from "@material-ui/core";
import BasePanel from 'components/base/BasePanel';
import PanelHeader from 'components/base/PanelHeader';
import ProductListItem from './ProductListItem'
const LiveProducts = ({ handleReturn, handleAddProduct, products, handleGoBack }) => {
    return (
        <BasePanel mode={0}>
            <PanelHeader 
              title="商品管理"
              leftButtonType={2}
              rightButtonType={0}
              handleLeftButton={handleGoBack}
            />
            <Grid container>
                <Grid xs={12} item>
                    {
                        products.map(
                            (product,index) => (
                                <ProductListItem 
                                    key={index} 
                                    index={index}
                                    product={product} 
                                    handleAddProduct={handleAddProduct}/>
                            )
                        )
                    }
                </Grid>
            </Grid>
        </BasePanel>
    )
}

export default LiveProducts;