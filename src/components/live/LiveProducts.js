import React from 'react'
import {isMobile} from "react-device-detect"
import {Grid,Paper,Typography} from "@material-ui/core";
import LivePanelTemplete from '../base/LivePanelTemplete'
import SectionHeader from '../typo/SectionHeader'
import ProductListItem from './ProductListItem'
const LiveProducts = ({ handleReturn,handleAddProduct,products }) => {
    const widthValue = isMobile?'100%':'100%'
    const rootStyle = {
        top:0,
        width:widthValue,
        height:'100%',
        background:'#DEDCD4'
    }
    return (
        <LivePanelTemplete mode={0}>
            <Grid container>
                <Grid xs={12} item>
                    <SectionHeader title={'ストア管理'} />
                </Grid>
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
        </LivePanelTemplete>
    )
}

export default LiveProducts;