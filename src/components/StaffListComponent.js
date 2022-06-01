import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
//import { dateFormat } from "dateformat";

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStaff: null,
            colummDefault: "col-12 col-md-6 col-lg-4",
        };
    }

    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff });
    }

    // onColummSelect(col) {
    //     this.setState({ colummDefault: col });
    // }

    renderStaff(staff) {
        if (staff !== null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardBody>
                            <CardTitle>{staff.name}</CardTitle>
                            <CardText>Ngày sinh: {staff.doB}</CardText>
                            <CardText>
                                Ngày vào công ty: {staff.startDate}
                            </CardText>
                            <CardText>Phòng ban: {staff.department}</CardText>
                            <CardText>
                                Số ngày nghỉ còn lại: {staff.annualLeave}
                            </CardText>
                            <CardText>
                                Số ngày làm thêm: {staff.overTime}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else return <div></div>;
    }

    render() {
        const staffInfo = this.props.staffs.map((staff) => {
            return (
                <div className={this.state.colummDefault}>
                    <Card
                        key={staff.id}
                        onClick={() => this.onStaffSelect(staff)}
                    >
                        <CardBody>
                            <CardTitle>{staff.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">{staffInfo}</div>
                <div className="row mt-5">
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        );
    }
}
export default StaffList;
