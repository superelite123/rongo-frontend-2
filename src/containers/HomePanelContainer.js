import React,{Component} from 'react'
import HomePanel from 'components/HomePanel'
class HomePanelContainer extends Component
{
    render()
    {
        return (
            <HomePanel mode={this.props.mode} />
        )
    }
}

export default HomePanelContainer