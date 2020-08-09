import React, { useContext, useState } from 'react'

type AuthContextProps = {
  isAuthenticating: boolean
  isAuthenticated: boolean
  currentMemberId: string | null
  authToken: string | null
  currentMember: { name: string; username: string; email: string; avatarUrl: string } | null
  register?: (data: { appId: string; username: string; email: string; password: string }) => Promise<void>
  login?: (data: { appId: string; account: string; password: string }) => Promise<void>
  socialLogin?: (data: { provider: string; providerToken: any }) => Promise<void>
  logout?: () => void
}
const defaultAuthContext: AuthContextProps = {
  isAuthenticating: false,
  isAuthenticated: true,
  currentMemberId: null,
  authToken: null,
  currentMember: null,
}

const AuthContext = React.createContext<AuthContextProps>(defaultAuthContext)

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(defaultAuthContext.isAuthenticating)
  const [authToken, setAuthToken] = useState<string | null>(null)

  return (
    <AuthContext.Provider
      value={{
        isAuthenticating,
        isAuthenticated: true,
        currentMemberId: '',
        authToken,
        currentMember: {
          name: 'koyoushow',
          username: 'koyoushow',
          email: 'koyoushow@gmail.com',
          avatarUrl: 'https://image.flaticon.com/icons/svg/848/848006.svg',
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
