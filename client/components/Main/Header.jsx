Header = React.createClass({
    render() {
        return(
            <div className="jumbotron">
                <div className="container text-center">
                    <img src="images/headerLogo.png" />
                    <h1 className="text-center">{this.props.study} Study</h1>
                    <p className="text-center">{this.props.sponsor}</p>
                </div>
            </div>
        )
    }
});