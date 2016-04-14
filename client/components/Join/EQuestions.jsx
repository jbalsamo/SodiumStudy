var answersClassName="ans-sec";

EQuestions = React.createClass({
    renderAnswers() {
        // Get tasks from this.props.answers
        console.log("Building Answer list");
        return this.props.answers.map((answer) => {
            return <Answer nextStep={this.props.nextStep} isDisqual={this.props.isDisqual} toContact={this.props.toContact} key={this.props.step + answer.value} answer={answer} answerClassName="answer" />
        });
    },
    render() {

        return (
            <div>
                <QuesHead step={this.props.step} quesCount={this.props.quesCount} />
                <hr/>
                <div className="text-center">
                    <p>{this.props.question.question} </p>
                </div>
                <div className="text-center">
                    <div className={answersClassName}>
                        {this.renderAnswers()}
                    </div>
                    <div>
                        <Button btype="image" imgClass="imgButton" buttonClass="noBorderImg" myOnClick={this.props.decrStep} bvalue="images/BK-Icon.png" />
                    </div>
                </div>
            </div>
        )
    }
});