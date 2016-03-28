Home = React.createClass({
    componentDidMount: function () {
        console.log("adding appStore link if missing");
        if(document.getElementById('lnkStoreDiv') == null) {
            sbmApps.linkStore();
        }
    },

    render() {
        return (
            <div>
                <Header study="Sodium" sponsor="Department of Cardiology" />
                <Splash />
                <JoinStudy study="Sodium" />
            </div>
        )
    }
});