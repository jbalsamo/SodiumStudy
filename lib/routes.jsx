FlowRouter.route("/", {
    name: "Home",
    action(params) {
        ReactLayout.render(Home);
    }
})

FlowRouter.route("/join", {
    name: "AppJS",
    action(params) {
        ReactLayout.render(AppJS);
    }
})
