import React, { Component } from "react";
import Chart from "react-apexcharts";
import { connect } from "react-redux"
import './nav.css'

class Charts extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            options: {
                chart: {
                    type: "bar"
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    bar: {}
                }
            },
            series: [
                {
                    name: "series-1",
                    data: []
                }
            ]
        };
    }

    render() {
        return (
            <div className='container-fluid' style={{alignItems:'center'}}>
                <Chart options={this.state.options} series={[{
                    name: "series-1",
                    data: this.props.array
                }]} type="bar" width="100%" height={600} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { array } = state
    return { array }
}

export default connect(mapStateToProps)(Charts);