import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import { AuthProvider } from '../context/AuthContext';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  useNavigate: () => mockNavigate,
}), { virtual: true });

describe('Login Component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    Storage.prototype.getItem = jest.fn();
    Storage.prototype.setItem = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  const renderLogin = () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    );
  };

  test('renders login form correctly', () => {
    renderLogin();
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('allows user to type username and password', () => {
    renderLogin();
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('password123');
  });

  test('shows alert on invalid credentials', () => {
    Storage.prototype.getItem.mockReturnValue(JSON.stringify({ username: 'realuser', password: 'realpassword' }));
    
    renderLogin();
    
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(usernameInput, { target: { value: 'wronguser' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    fireEvent.click(loginButton);

    expect(window.alert).toHaveBeenCalledWith("Invalid Username or Password");
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test('navigates to home and sets localStorage on valid credentials', () => {
    Storage.prototype.getItem.mockReturnValue(JSON.stringify({ username: 'testuser', password: 'password123' }));
    
    renderLogin();
    
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    expect(Storage.prototype.setItem).toHaveBeenCalledWith('loggedInUser', 'testuser');
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
