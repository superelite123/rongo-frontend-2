import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import makeStyles from '@material-ui/styles/makeStyles'
import withStyles from "@material-ui/styles/withStyles";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import "react-slideshow-image/dist/styles.css";

const styles = theme => ({
    root: {
        width: '100%',
        height: '375px',
        position: 'relative'
    },
    slideContainer: {
        width: '100%',
        height: '100%'
    },
    eachSlide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '375px'
    },
    imageView: {
        width: '100%',
        height: '100%'
    },
    leftButton: {
        position: 'absolute',
        display: 'block',
        background: 'none',
        bottom: '15px',
        left: '15px',
        border: '0 solid',
        color: 'white',
        '&:focus': {
            outline: '-webkit-focus-ring-color auto 0px'
        }
    },
    rightButton: {
        position: 'absolute',
        display: 'block',
        background: 'none',
        bottom: '15px',
        right: '15px',
        border: '0 solid',
        color: 'white',
        '&:focus': {
            outline: '-webkit-focus-ring-color auto 0px'
        },
    },
    pageCtrl: {
        position: 'absolute',
        display: 'block',
        background: 'none',
        bottom: '15px',
    }
})

class PhotoSlider extends Component {
    constructor() {
        super();
        this.slideRef = React.createRef();
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
        this.state = {
            current: 0
        };
    }

    back() {
        this.slideRef.current.goBack();
    }

    next() {
        this.slideRef.current.goNext();
    }

    render() {

        const { product, classes } = this.props;
        const properties = {
            duration: 5000,
            autoplay: false,
            transitionDuration: 500,
            arrows: false,
            infinite: true,
            onChange: (old, newIndex) => {
                this.setState({
                    current: newIndex
                });
            },
            indicators: i => (
                <div className={`indicator ${this.state.current === i ? "active" : ""}`} >

                </div>
            )
        };

        var images = []
        if (product != null) {
            for (const key in product.portfolios) {
                images.push(product.portfolios[key])
            }
        }

        return (
            <div className={classes.root}>
                <div className={classes.slideContainer}>
                    <Slide ref={this.slideRef} {...properties}>
                        {images.map((each, index) => (
                            <div key={index} className={classes.eachSlide}>
                                <img className={classes.imageView} src={each} alt="sample" />
                            </div>
                        ))}
                    </Slide>
                </div>

                <button onClick={this.back} className={classes.leftButton}>
                    <ArrowBackIosIcon />
                </button>
                
                <div >

                </div>

                <button onClick={this.next} className={classes.rightButton}>
                    <ArrowForwardIosIcon />
                </button>
            </div>
        );
    }
}

export default withStyles(styles)(PhotoSlider);