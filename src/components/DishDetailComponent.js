// This is Presentational Component

import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg
                        width="100%"
                        src={dish.image}
                        value={dish.name}
                    ></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments(comments) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                {/* <p>{comment.rating} stars</p> */}
                                <p>
                                    -- {comment.author},{" "}
                                    {new Intl.DateTimeFormat("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit",
                                    }).format(
                                        new Date(Date.parse(comment.date))
                                    )}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    render() {
        // console.log(this.props.dish);
        if (this.props.dish !== undefined) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}
export default DishDetail;
