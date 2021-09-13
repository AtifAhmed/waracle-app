import { Route, Switch, RouteComponentProps } from "react-router-dom";
import routes from "./routes/routes";
import "./index.scss";
import { Container } from "reactstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="main-content p-4">
      <Container className="" fluid={true}>
        <ToastContainer autoClose={2000} />
        <Switch>
          {routes.map((route, index) => {
            return <Route key={index} path={route.path} exact={route.exact} render={(props: RouteComponentProps<any>) => <route.component {...props} {...route.props} />}></Route>;
          })}
        </Switch>
      </Container>
    </div>
  );
}

export default App;
