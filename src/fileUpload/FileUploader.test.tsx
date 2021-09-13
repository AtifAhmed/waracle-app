// __tests__/hello_world.test.js
import { shallow } from "test/test-setup";
import { Provider } from "react-redux";
import FileUploader from "./FileUploader";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

describe("<FileUploader />", () => {
  let wrapper: any;

  const props: any = {
    onFileSelect: jest.fn(),
    setFileUploadErrors: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<FileUploader {...props} />);
  });
  it("defines the component", () => {
    expect(wrapper.find('input[type="file"]')).toBeDefined();
  });
});
