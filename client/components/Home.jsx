var introDoc = [
    {
        stepTitle: "Welcome to the Prohibit Sodium Research Study",
        body: "",
        links: [
            {
                text: "Read Consent Document",
                hyperlink: ""
            },
            {
                text: "E-mail Consent Document",
                hyperlink: ""
            }
        ]
    },
    {
        stepTitle: "About the Study",
        body: "<p> You are being asked to participate in the PROHIBIT SODIUM study conducted at Stony Brook Medicine. </p> <p>This app is designed for informative purposes only. You should not rely on this information as a substitute for personal medical treatment. If you are concerned about your health, please consult your primary health provider, or if there is a medical emergency call immediately 911.</p>",
        links: [
            {
                text: "Learn More...",
                hyperlink: ""
            }
        ]
    }
];

Home = React.createClass({
    componentDidMount: function () {
        console.log("adding appStore link if missing");
        if(document.getElementById('lnkStoreDiv') == null) {
            sbmApps.linkStore();
        }
    },
    getInitialState() {
        return {
            introstep: 1,
            study: "Prohibit Sodium Research",
            sponsor: "Stony Brook Medicine Heart Institute",
        }
    },
    incrStep() {
        console.log("Increment intro Steps");
        this.setState({
            introstep: this.state.introstep + 1
        });
    },
    render() {
        if (this.state.introstep <= introDoc.length) {
            return (
            <div>
                <Header study={this.state.study} sponsor={this.state.sponsor} />
                <IntroStep incrStep={this.incrStep} step={this.state.introstep} introDoc={introDoc} />
            </div>
        )} else {
            return(
                <div>
                    <Header study={this.state.study} sponsor={this.state.sponsor} />
                    <Splash />
                    <JoinStudy study="Sodium" />
                </div>

            )}
        }
});