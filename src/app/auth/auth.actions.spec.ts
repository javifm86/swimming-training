import * as fromUser from './auth.actions';

describe('loadUsers', () => {
  it('should return an action', () => {
    expect(fromUser.loadUsers().type).toBe('[User] Load Users');
  });
});
