import React, { Component } from "react";
/* TweenMax needs to be in scope don't fucking remove */
import { TweenMax } from "gsap"; //eslint-disable-line
import "./styles/main.scss";
import { Provider } from "react-redux";
import { browserHistory, Router } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import PropTypes from "prop-types";
import $ from "jquery";
import "ScrollToPlugin";
import { init as firebaseInit } from "services/Firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.$window = $(window);

    if (document.readyState === "complete") {
      $("body").removeClass("loading");
      $(".loader").remove();
    } else {
      this.$window.on("load", () => {
        $("body").removeClass("loading");
        $(".loader").remove();
      });
    }

    firebaseInit();
  }

  render() {
    const {
      store,
      routes,
    } = this.props;

    const history = syncHistoryWithStore(browserHistory, store);
    return (
      <Provider store={store}>
        <div>
          <Router
            history={history}
            children={routes}
            onUpdate={() => window.scrollTo(0, 0)}
          />
        </div>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
};

export default App;
