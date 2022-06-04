// This is Presentational Component

import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class Menu extends Component {
    render() {
        // console.log(this.props);
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg
                            width="100%"
                            src={dish.image}
                            value={dish.name}
                        ></CardImg>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">{menu}</div>
            </div>
        );
    }
}
export default Menu;
