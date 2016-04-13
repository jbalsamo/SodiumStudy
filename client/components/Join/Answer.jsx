Answer = React.createClass({
    procClick(t) {
        if(t == "Disqualify") {
            this.props.isDisqual();
        } else if (t == "Contact") {
            this.props.toContact();
        }
        this.props.nextStep();
    },
    render() {
        return (
            <div className={this.props.answerClassName}>
                <button className="css_btn_class" onClick={this.procClick.bind(this,this.props.answer.action)}>{this.props.answer.value}</button>
            </div>
        )
    }
});
