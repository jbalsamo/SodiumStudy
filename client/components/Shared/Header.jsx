Header = React.createClass({
    render() {
        return (
            <div className="jumbotron">
                <div className="container text-center">
                    <a href="https://heart.stonybrookmedicine.edu/?gclid=CjwKEAjw_7y4BRDykp3Hjqyt_y0SJACome3Tem-Ptrd2pVNOLYHt36qAG6otO2_P6CBRIhUxMUwHyhoCbQfw_wcB"
                       target="_blank">
                        <img className="img-rounded" src="images/headerLogo.png"/>
                    </a>
                    <h3 className="text-center">{this.props.study} Study</h3>
                    <p className="text-center">{this.props.sponsor}</p>
                </div>
            </div>
        )
    }
});