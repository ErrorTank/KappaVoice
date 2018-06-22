import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import {withMouse} from "../mouse-tracker/withMouse";
import {genRandomNum} from "../../utils/num-math-utils";
import {debounce} from "../../utils/common-utils";
import {TransitionGroup, CSSTransition} from "react-transition-group";

export const MovingFigure = withMouse(
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                mouse: {
                    x: 0,
                    y: 0
                },
                show: false
            };
            this.wrapper = React.createRef();
            this.interval = null;
        }


        UNSAFE_componentWillReceiveProps({mouse}) {
            if (this && (mouse.x !== this.props.mouse.x || mouse.y !== this.props.mouse.y)) {
                if (this.interval) {
                    clearInterval(this.interval);
                }
                this.setState({show: false});
                this.appear(1200);
            }
        };

        appear = debounce((timeout) => {
            this.setState({
                mouse: this.props.mouse,
                show: true
            }, () => {
                this.randomMove(timeout);
            });
        }, 600);

        randomMove = (timeout) => {
            let wrapperWidth = this.wrapper.current.clientWidth, wrapperHeight = this.wrapper.current.clientHeight;

            this.interval = setInterval(() => {
                let ranX = genRandomNum({start: 0, end: (wrapperWidth)});
                let ranY = genRandomNum({start: 0, end: (wrapperHeight)});
                this.setState({mouse: {x: ranX, y: ranY}});
            }, timeout);
        };

        componentDidMount() {
            this.appear(1200);
        };

        render() {
            let {renderFigure, children} = this.props;
            let {mouse, show} = this.state;
            console.log(mouse);
            return (
                <div className="moving-figure"
                     ref={this.wrapper}
                >
                    <TransitionGroup
                    >
                        {show && (
                            <CSSTransition
                                key={show}
                                timeout={600}
                                classNames="figure-wrap"
                            >
                                <div className="figure"
                                     style={{
                                         top: mouse.y + "px",
                                         left: mouse.x + "px"
                                     }}
                                >
                                    {renderFigure()}
                                </div>
                            </CSSTransition>
                        )

                        }

                    </TransitionGroup>
                    {children}
                </div>
            )

        }
    }
);
