import React from 'react'
import './nav.css'
import { connect } from 'react-redux'
import { Button, ButtonGroup } from 'react-bootstrap'
import { actionMethod, actionStatus, actionArrayGenerate, toggle } from '../Actions/index'

class Navigator extends React.Component {
    constructor(props) {
        super(props)
        this.state = { size: '' }
    }
    handleChange = (e) => {
        this.setState({ size: e.target.value })
    }
    handleStatus = (e) => {
        this.props.changeStatus(e.target.value)
    }
    handleMethod = (e) => {
        this.props.changeMethod(e.target.value)
    }
    handleGenerate = (e) => {
        this.props.generateArray(this.state.size)
    }
    handleEnterKey = (e) => {
        if (e.key === "Enter") {
            this.props.generateArray(this.state.size)
        }
    }
    componentDidUpdate() {
        setTimeout(() => {
            if (this.props.id.length > 0 && this.props.status === 'start') {
                this.props.toggle()
            } else if (this.props.id.length === 0 && this.props.status === 'start') {
                this.props.changeStatus('stop')
            }
        }, 200);
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-1-5'><img src="favicon.ico" alt='React-icon' id='icon' /></div>
                    <div className='col-md-2' id='title'>&nbsp;Sorting <br />Visualizer</div>
                    <div className='col-md-1-5' id='input'>
                        <input className='form-control'
                            value={this.state.size}
                            onChange={this.handleChange}
                            onKeyPress={this.handleEnterKey}
                            placeholder='Enter  Sample  Size  Here'
                            disabled={this.props.status === 'start' ? true : false} />
                    </div>
                    <div className='col-md-2' id='button'>
                        <Button variant='warning' onClick={this.handleGenerate} disabled={this.props.status === 'start' ? true : false} >
                            Randomize
                        </Button>
                    </div>
                    <div className='col-2' id='button'>
                        <ButtonGroup>
                            <Button variant='outline-success' onClick={this.handleStatus} value='start' disabled={this.props.status === 'start' ? true : false} >Start</Button>
                            <Button variant='outline-danger' onClick={this.handleStatus} value='stop' disabled={this.props.status === 'stop' ? true : false} >Stop</Button>
                        </ButtonGroup>
                    </div>
                    <div className='col' id='button'>
                        <ButtonGroup>
                            <Button variant={this.props.method === 'mergeSort' ? 'dark' : 'outline-dark'} onClick={this.handleMethod} value='mergeSort' disabled={this.props.status === 'start' ? true : false} >Merge Sort</Button>
                            <Button variant={this.props.method === 'bubbleSort' ? 'dark' : 'outline-dark'} onClick={this.handleMethod} value='bubbleSort' disabled={this.props.status === 'start' ? true : false} >Bubble Sort</Button>
                            <Button variant={this.props.method === 'quickSort' ? 'dark' : 'outline-dark'} onClick={this.handleMethod} value='quickSort' disabled={this.props.status === 'start' ? true : false} >Quick Sort</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { method, status, array, id } = state
    return { method, status, array, id }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeMethod: (method) => dispatch(actionMethod(method)),
        changeStatus: (status) => dispatch(actionStatus(status)),
        generateArray: (size) => dispatch(actionArrayGenerate(size)),
        toggle: () => dispatch(toggle()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator)