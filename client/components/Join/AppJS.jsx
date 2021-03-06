AppJS = React.createClass({
    mixins: [ReactMeteorData],
    getInitialState() {
        return {
            step: 1,
            study: "Prohibit Sodium Research",
            studyQuery: "Sodium",
            sponsor: "Stony Brook Medicine Heart Institute",
            eligible: "Continue"
        }
    },

    nextStep() {
        console.log("Incremmenting");
        this.setState({
            step: this.state.step + 1
        });
    },

    decrStep() {
        console.log("Incremmenting");
        if(this.state.step > 1) {
            this.setState({
                step: this.state.step - 1
            });
        }
    },
    isDisqual() {
        this.setState({
            eligible: "Disqualify"
        });
    },
    toContact() {
        this.setState({
            eligible: "Contact"
        });
    },
    getMeteorData() {
        var query = {};
        var queryCnt = {};
        var projectionq = { "question":1, "_id":0 };
        var projectiona = { "answers":1, "_id":0 };

        Meteor.subscribe("questions");
        query = { "order": this.state.step, "study": this.state.studyQuery };
        queryCnt = { "study": this.state.studyQuery };

        return {
            question: Questions.findOne(query, projectionq),
            answers: Questions.findOne(query, projectiona),
            quesCount: Questions.find(queryCnt).count()
        }
    },
    render() {
        if (this.state.step <= this.data.quesCount) {
            console.log("Kill me");
            return (
                <div>
                    <Header study={this.state.study} sponsor={this.state.sponsor}/>
                    <EQuestions nextStep={this.nextStep} decrStep={this.decrStep} isDisqual={this.isDisqual} toContact={this.toContact} step={this.state.step}
                                question={this.data.question} answers={this.data.answers.answers} quesCount={this.data.quesCount}/>
                    <Footer />
                </div>
            )
        } else {
            return (
                <div>
                    <Header study={this.state.study} sponsor={this.state.sponsor}/>
                    <Eligibility eligible={this.state.eligible} />
                    <Footer />
                </div>
            )
        }
    }
});