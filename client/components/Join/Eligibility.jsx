Eligibility = React.createClass({
    render() {
        if (this.props.eligible == "Continue") {
            return (
                <div className="studyStatus">
                    Eligible.
                </div>
            )
        } else if (this.props.eligible == "Disqualify") {
            return (
                <div className="studyStatus">
                    Disqualified!
                </div>
            )
        } else {
            return (
                <div className="studyStatus">
                    Please, contact us.
                </div>
            )
        }
    }
});