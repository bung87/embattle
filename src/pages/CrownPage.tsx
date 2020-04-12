import { Component } from "react";
import * as React from "react";
import CrownLayout from '../layouts/CrownLayout.tsx';

export default class CrownPage extends Component<any> {
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
    constructor(props:any){
        super(props)
    }
    render() {
        const main = (<div><p>A paragraph for the main content.</p>
            <p>And another one.</p></div>);
        const left =( <h1>Here might be a page title</h1>);
        const right = (<p>Here's some contact info</p>)
        return (<CrownLayout main={main} left={left} right={right} layout={this.props.layout}>
            
        </CrownLayout>)
    }

}