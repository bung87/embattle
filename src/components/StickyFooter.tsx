import React, { Component, RefObject } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

function getWindowHeight() {
    var windowHeight = 0;
    if (typeof window.innerHeight == "number") {
        windowHeight = window.innerHeight;
    } else {
        if (document.documentElement && document.documentElement.clientHeight) {
            windowHeight = document.documentElement.clientHeight;
        } else {
            if (document.body && document.body.clientHeight) {
                windowHeight = document.body.clientHeight;
            }
        }
    }
    return windowHeight;
}

function setFooter(mainEle: HTMLElement, footerEle: HTMLElement) {
    const windowHeight = getWindowHeight();
    if (windowHeight > 0) {
        var contentHeight = mainEle.offsetHeight;
        var footerElement = footerEle;
        var footerHeight = footerElement.offsetHeight;
        if (windowHeight - (contentHeight + footerHeight) >= 0) {
            const top = windowHeight - (contentHeight + footerHeight) + "px";
            footerElement.style.cssText = `position:relative;top:${top}`;
        } else {
            footerElement.style.position = "static";
        }
    }
}
interface Props extends RouteComponentProps{
    main: RefObject<any>
}
// @ts-ignore
const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
const observeDOM = (function () {
    // IE9+, FF, Webkit
    return function (obj: HTMLElement, callback: (mutations: any) => any) {
        if (!obj || !(obj.nodeType === 1)) return null; // validation

        if (MutationObserver) {
            // define a new observer
            var obs = new MutationObserver(function (mutations, observer) {
                callback(mutations);
            })
            // have the observer observe foo for changes in children
            obs.observe(obj, { childList: true, subtree: true });
            return obs
        } else if (typeof window.addEventListener === 'function') {
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
            return null;
        }
        return null;
    }
})();

class StickyFooter extends Component<Props>{
    myRef: React.RefObject<any>;
    boundListener: null;
    obs: null;
    constructor(props: Props) {
        super(props);
        this.myRef = React.createRef<any>();
    }
    adjustFooter(_: any) {
        setFooter(this.props.main.current, this.myRef.current);
    }
    componentDidMount() {
        // @ts-ignore
        this.boundListener = this.adjustFooter.bind(this);
        // @ts-ignore
        this.obs = observeDOM(this.props.main.current, this.boundListener);

        // this.props.history.listen((location, action) => {
        //     setFooter(this.props.offsetHeight, this.myRef.current);
        //   });
    }

    render() {
        return (<div ref={this.myRef}>{this.props.children}</div>)
    }

    componentWillUnmount() {
        if (MutationObserver) {
            // @ts-ignore
            this.obs.disconnect();
        } else if (typeof window.addEventListener === 'function') {
            this.props.main.current.removeEventListener('DOMNodeInserted', this.boundListener, false);
            this.props.main.current.removeEventListener('DOMNodeRemoved', this.boundListener, false);
        }
    }
}

export default withRouter(StickyFooter)