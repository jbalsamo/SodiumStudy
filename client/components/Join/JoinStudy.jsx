JoinStudy =  React.createClass({
    render() {
        return(
            <div className="text-center">
                <div className="a_btn">
                    <a className="css_btn_class a_btn" href="/join" >Join the {this.props.study} Study</a>
                </div>
                <div className="a_btn">
                    <a className="css_btn_class_info a_btn" href="#" >Learn More...</a>
                </div>
            </div>
        )
    }
});