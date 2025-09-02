// //  # User authentication, login/logout



// import { createContext, useContext, useReducer } from 'react';
// import { User } from '../types/auth';

// type AuthState = {
//   user: User | null;
//   token: string | null;
// };

// type AuthAction =
//   | { type: 'LOGIN'; payload: { user: User; token: string } }
//   | { type: 'LOGOUT' };

// const initialState: AuthState = { user: null, token: null };

// const AuthContext = createContext<{
//   state: AuthState;
//   dispatch: React.Dispatch<AuthAction>;
// }>({ state: initialState, dispatch: () => null });

// const authReducer = (state: AuthState, action: AuthAction): AuthState => {
//   switch (action.type) {
//     case 'LOGIN':
//       return { user: action.payload.user, token: action.payload.token };
//     case 'LOGOUT':
//       return { user: null, token: null };
//     default:
//       return state;
//   }
// };

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);
//   return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
// };

// export const useAuth = () => useContext(AuthContext);
