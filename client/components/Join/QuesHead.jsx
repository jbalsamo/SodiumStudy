QuesHead = React.createClass({
        render() {
            return (
                <div className="text-center">
                    <h1> Question #{this.props.step} of {this.props.quesCount} </h1>
                </div>
            )
        }
    });

