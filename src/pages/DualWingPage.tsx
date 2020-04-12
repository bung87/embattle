import { Component } from "react";
import * as React from "react";
import DualWingLayout from '../layouts/DualWingLayout';

export default class DualWingPage extends Component<any> {
    constructor(props:any){
        super(props)
    }
    static defaultProps = {
        layout:{
            left:{
                width:"100px"
            },
            right:{
                width:"220px"
            }
        }
    };
    render() {
        const main = (<div><p>A paragraph for the main content.</p>
            <p>And another one.</p></div>);
        const left =( <h1>Here might be a page title</h1>);
        const right = (<p>Here's some contact info</p>)
        return (<DualWingLayout main={main} left={left} right={right} layout={this.props.layout}>
            
        </DualWingLayout>)
    }

}