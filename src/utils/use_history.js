import { useHistory } from "react-router";

export default function UseMyHistory() {
  const history = useHistory();
  const push = (path) => {
    history.push(path);
  };
  const replace = (path) => {
    history.replace(path);
  };
  const back = () => {
    history.goBack();
  };
  return {
    push: push,
    replace: replace,
    back: back,
  };
}
