import { Component } from "react";
import * as React from "react";
import styles from './crown_layout.pcss';
interface Props {
    left: Node | Element
    right: Node | Element
    main: Node | Element
    layout:{
        left:{
            width:string
        },
        right:{
            width:string
        }

    }
}
const right = (<p>default right</p>);
const left = (<h1>default left</h1>);
const main = (<div><p>default main</p></div>)

export default class CrownLayout extends Component<Props> {
    static defaultProps = {
        main, right, left,layout:{
            left:{
                width:"200px"
            },
            right:{
                width:"220px"
            }
        }
    };
    constructor(props: any) {
        super(props)
    }
    render() {
        const style = {paddingLeft:this.props.layout.left.width,paddingRight:this.props.layout.right.width}
        const leftStyle = {width:this.props.layout.left.width,left:`-${this.props.layout.left.width}` }
        const rightStyle = {width:this.props.layout.right.width,right:`-${this.props.layout.right.width}`,marginLeft:`-${this.props.layout.right.width}`}
        return (<div className={styles["layout-crown"]} style={style}>
            <div className={styles["layout-crown__main"]}>
                {this.props.main}
            </div>
            <div className={styles["layout-crown__left"]} style={leftStyle}>
                {this.props.left}
            </div>
            <div className={styles["layout-crown__right"]} style={rightStyle}>
                {this.props.right}
            </div>
        </div>)
    }

}