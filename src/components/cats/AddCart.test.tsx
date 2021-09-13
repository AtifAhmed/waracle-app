// __tests__/hello_world.test.js
import { shallow } from "test/test-setup";
import { Provider } from "react-redux";
import AddCat from "./AddCat";
import configureStore from "redux-mock-store";
const mockStore = configureStore();
const mockDispatchfn = jest.fn();

describe("<AddCat />", () => {
  let wrapper: any;

  const props: any = {
    handleSubmit: jest.fn(),
  };

  it("defines the component", () => {
    wrapper = shallow(
      <Provider store={mockStore()}>
        <AddCat />
      </Provider>
    );
    expect(wrapper).toBeDefined();
  });
});
