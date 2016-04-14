IntroStep = React.createClass({
    isHidden() {
        if(this.props.step == 1) {
            return("hidden")
        } else {
            return("noBorderImg")
        }
    }
    ,render() {
        return (
            <div>
                <div className="stepTitle">
                    {this.props.introDoc[this.props.step-1].stepTitle}
                </div>
                <div className="introBody" dangerouslySetInnerHTML={{ __html: this.props.introDoc[this.props.step-1].body}}></div>
                <div className="btnBar text-center">
                    <Button btype="image" imgClass="imgButton" buttonClass={this.isHidden()} myOnClick={this.props.decrStep} bvalue="images/BK-Icon.png" /> <Button btype="text" buttonClass="css_btn_class navButton" myOnClick={this.props.incrStep} bvalue="Next" />
                </div>
            </div>
        )
    }
})