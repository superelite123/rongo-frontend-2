import React, { Component } from "react";
import PageTemplate from 'components/base/PageTemplate'
import HomePanelContainer from 'containers/HomePanelContainer'
import ProductListPanelContainer from 'containers/product/ProductListPanelContainer'
import ProductFormPanel from 'components/ProductFormPanel'
class Home extends Component {
    render() {
        return (
            <PageTemplate
                first = {<HomePanelContainer />}
                second = {<ProductListPanelContainer />}
                third = {<ProductFormPanel />}
            ></PageTemplate>
        )
      }
}

export default Home;
