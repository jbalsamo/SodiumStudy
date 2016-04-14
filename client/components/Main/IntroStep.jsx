IntroStep = React.createClass({
    render() {
        return (
            <div>
                <div className="stepTitle">
                    {this.props.introDoc[this.props.step-1].stepTitle}
                </div>
                <div className="introBody" dangerouslySetInnerHTML={{ __html: this.props.introDoc[this.props.step-1].body}}></div>
                <div className="text-center">
                    <Button btype="image" myOnClick={this.props.decrStep} bvalue="images/BK-Icon.png" /> <Button buttonClass="css_btn_class navButton" myOnClick={this.props.incrStep} bvalue="Next" />
                </div>
            </div>
        )
    }
})