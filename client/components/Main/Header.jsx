Header = React.createClass({
    render() {
        return(
            <div className="jumbotron">
                <div className="container">
                    <h1 className="text-center">{this.props.study} Study</h1>
                    <p className="text-center">{this.props.sponsor}</p>
                </div>
            </div>
        )
    }
});