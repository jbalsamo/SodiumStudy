Eligibility = React.createClass({
    render() {
        if (this.props.eligible = "Continue") {
            return (
                <div>
                    Eligible.
                </div>
            )
        } else if (this.props.eligible = "Disqualify") {
            return (
                <div>
                    Disqualified!
                </div>
            )
        } else {
            return (
                <div>
                    Please, contact us.
                </div>
            )
        }
    }
});