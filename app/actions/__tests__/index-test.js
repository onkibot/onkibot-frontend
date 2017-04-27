import {
    setNavbarOpen,
    setUserSearch,
    loginUser,
    sessionUser,
    logoutUser,
    signupUser
} from '../';

describe('Index actions', () => {
    it('should set navbar open', () => {
        expect(setNavbarOpen(true))
        .toEqual({
            type: 'SET_NAVBAR_OPEN',
            open: true
        });
    });
    it('should set user search', () => {
        expect(setUserSearch('word'))
        .toEqual({
            type: 'SET_USER_SEARCH',
            searchWord: 'word'
        });
    });

    it('should use thunk function for login', () => {
        const credentials = {
            email: 'email',
            password: 'password'
        };
        expect(loginUser(credentials)).toBeDefined();
    });
    it('should use thunk function getting session', () => {
        expect(sessionUser()).toBeDefined();
    });
    it('should use thunk function for logout', () => {
        expect(logoutUser()).toBeDefined();
    });
    it('should use thunk function for login', () => {
        const signupInfo = {
            email: 'email',
            password: 'password'
        };
        expect(signupUser(signupInfo)).toBeDefined();
    });
});
