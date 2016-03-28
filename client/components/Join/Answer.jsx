Answer = React.createClass({
    render() {
        return (
            <div className={this.props.answerClassName}>
                <button onClick={this.props.onClick}>{this.props.answer.value}</button>
            </div>
        )
    }
});
