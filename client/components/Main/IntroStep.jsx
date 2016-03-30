IntroStep = React.createClass({
    render() {
        return (
            <div>
                <div className="stepTitle">
                    {this.props.introDoc[this.props.step-1].stepTitle}
                </div>
                <div className="introBody" dangerouslySetInnerHTML={{ __html: this.props.introDoc[this.props.step-1].body}}></div>
                <div className="text-center">
                    <button onClick={this.props.incrStep}>Next</button>
                </div>
            </div>
        )
    }
})