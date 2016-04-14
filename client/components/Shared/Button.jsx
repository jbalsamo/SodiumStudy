Button = React.createClass({
    render() {
        if (this.props.btype == "image") {
            return(
                <button className={this.props.buttonClass} onClick={this.props.myOnClick}>
                    <img className={this.props.imgClass} src={this.props.bvalue} />
                </button>
            )
        } else {
            return (
                <button className={this.props.buttonClass} onClick={this.props.myOnClick}>
                    {this.props.bvalue}
                </button>
            )
        }
    }
});