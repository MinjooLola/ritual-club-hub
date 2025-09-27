import { useState, useEffect, createContext, useContext } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

type Profile = {
  id: string
  email: string
  name: string
  phone: string
  current_work: string
  interests: string
  hobbies: string
  concerns: string
  expectations: string | null
  how_did_you_know: string
  role: 'user' | 'admin'
  created_at: string
  updated_at: string
}

type AuthContextType = {
  user: User | null
  profile: Profile | null
  loading: boolean
  signUp: (email: string, password: string, profileData: Omit<Profile, 'id' | 'email' | 'role' | 'created_at' | 'updated_at'>) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const useAuthProvider = () => {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        fetchProfile(session.user.id)
      }
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        if (session?.user) {
          await fetchProfile(session.user.id)
        } else {
          setProfile(null)
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        console.error('Error fetching profile:', error)
        return
      }

      setProfile(data)
    } catch (error) {
      console.error('Error fetching profile:', error)
    }
  }

  const signUp = async (
    email: string, 
    password: string, 
    profileData: Omit<Profile, 'id' | 'email' | 'role' | 'created_at' | 'updated_at'>
  ) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) throw error

    if (data.user) {
      // Create profile
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: data.user.id,
          email,
          ...profileData,
          role: 'user',
        })

      if (profileError) throw profileError
    }
  }

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  return {
    user,
    profile,
    loading,
    signUp,
    signIn,
    signOut,
  }
}

export { AuthContext }