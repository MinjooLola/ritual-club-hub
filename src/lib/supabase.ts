import { createClient } from '@supabase/supabase-js'

// Try different possible environment variable names used by Lovable
const supabaseUrl = 
  import.meta.env.VITE_SUPABASE_URL || 
  import.meta.env.SUPABASE_URL ||
  import.meta.env.VITE_SUPABASE_PROJECT_URL

const supabaseAnonKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  import.meta.env.SUPABASE_ANON_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY

// Temporary fallback for development - you'll need to replace these with your actual Supabase credentials
const fallbackUrl = 'https://your-project.supabase.co'
const fallbackKey = 'your-anon-key'

const finalUrl = supabaseUrl || fallbackUrl
const finalKey = supabaseAnonKey || fallbackKey

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not found. Using fallback values. Please configure your Supabase connection properly.')
}

export const supabase = createClient(finalUrl, finalKey)

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