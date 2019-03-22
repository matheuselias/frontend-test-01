import { signin, signout} from 'actions';
import { AUTHENTICATE_USER } from 'actions/types';

describe('signin', () => {
  let action;

  beforeEach(() => {
    action = signin(() => {});
  });

  it('has AUTHENTICATE_USER type', () => {
    expect(action.type).toEqual(AUTHENTICATE_USER);
  })

  it('return true when logged', () => {
    expect(action.payload).toEqual(true);
  })
})

describe('signout', () => {
  let action;
  
  beforeEach(() => {
    action = signout();
  });

  it('has AUTHENTICATE_USER type', () => {
    expect(action.type).toEqual(AUTHENTICATE_USER);
  })

  it('return false when logout', () => {
    expect(action.payload).toEqual(false);
  })
})