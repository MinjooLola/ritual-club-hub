import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
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
        Insert: {
          id: string
          email: string
          name: string
          phone: string
          current_work: string
          interests: string
          hobbies: string
          concerns: string
          expectations?: string | null
          how_did_you_know: string
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          phone?: string
          current_work?: string
          interests?: string
          hobbies?: string
          concerns?: string
          expectations?: string | null
          how_did_you_know?: string
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}