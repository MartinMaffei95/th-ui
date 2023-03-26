import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export function redirectTo(to: string) {
  history.push(to);
  history.go(0);
}
