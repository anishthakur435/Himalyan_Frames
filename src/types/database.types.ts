export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      destinations: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          slug: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          slug: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          slug?: string
        }
      }
      faqs: {
        Row: {
          answer: string
          category: string
          created_at: string | null
          id: string
          priority: number | null
          question: string
        }
        Insert: {
          answer: string
          category: string
          created_at?: string | null
          id?: string
          priority?: number | null
          question: string
        }
        Update: {
          answer?: string
          category?: string
          created_at?: string | null
          id?: string
          priority?: number | null
          question?: string
        }
      }
      inquiries: {
        Row: {
          client_name: string
          created_at: string | null
          email: string
          id: string
          message: string
          phone: string | null
          source: string | null
          status: string | null
        }
        Insert: {
          client_name: string
          created_at?: string | null
          email: string
          id?: string
          message: string
          phone?: string | null
          source?: string | null
          status?: string | null
        }
        Update: {
          client_name?: string
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          phone?: string | null
          source?: string | null
          status?: string | null
        }
      }
      media: {
        Row: {
          bucket: string
          created_at: string | null
          duration: number | null
          height: number | null
          id: string
          mime_type: string
          project_id: string | null
          size_bytes: number
          storage_path: string
          width: number | null
        }
        Insert: {
          bucket: string
          created_at?: string | null
          duration?: number | null
          height?: number | null
          id?: string
          mime_type: string
          project_id?: string | null
          size_bytes: number
          storage_path: string
          width?: number | null
        }
        Update: {
          bucket?: string
          created_at?: string | null
          duration?: number | null
          height?: number | null
          id?: string
          mime_type?: string
          project_id?: string | null
          size_bytes?: number
          storage_path?: string
          width?: number | null
        }
      }
      profiles: {
        Row: {
          created_at: string | null
          full_name: string | null
          id: string
          role: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          full_name?: string | null
          id?: string
          role?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          full_name?: string | null
          id?: string
          role?: string | null
          user_id?: string
        }
      }
      project_destinations: {
        Row: {
          destination_id: string
          project_id: string
        }
        Insert: {
          destination_id: string
          project_id: string
        }
        Update: {
          destination_id?: string
          project_id?: string
        }
      }
      project_services: {
        Row: {
          project_id: string
          service_id: string
        }
        Insert: {
          project_id: string
          service_id: string
        }
        Update: {
          project_id?: string
          service_id?: string
        }
      }
      projects: {
        Row: {
          cover_media_id: string | null
          created_at: string | null
          description: string | null
          id: string
          is_featured: boolean | null
          slug: string
          status: string | null
          title: string
        }
        Insert: {
          cover_media_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_featured?: boolean | null
          slug: string
          status?: string | null
          title: string
        }
        Update: {
          cover_media_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_featured?: boolean | null
          slug?: string
          status?: string | null
          title?: string
        }
      }
      services: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          pricing_notes: string | null
          priority: number | null
          slug: string
          starting_price: number | null
          title: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          pricing_notes?: string | null
          priority?: number | null
          slug: string
          starting_price?: number | null
          title: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          pricing_notes?: string | null
          priority?: number | null
          slug?: string
          starting_price?: number | null
          title?: string
        }
      }
      settings: {
        Row: {
          key: string
          updated_at: string | null
          value: Json
        }
        Insert: {
          key: string
          updated_at?: string | null
          value: Json
        }
        Update: {
          key?: string
          updated_at?: string | null
          value?: Json
        }
      }
      testimonials: {
        Row: {
          client_name: string
          content: string
          created_at: string | null
          id: string
          project_id: string | null
          rating: number | null
          role: string | null
        }
        Insert: {
          client_name: string
          content: string
          created_at?: string | null
          id?: string
          project_id?: string | null
          rating?: number | null
          role?: string | null
        }
        Update: {
          client_name?: string
          content?: string
          created_at?: string | null
          id?: string
          project_id?: string | null
          rating?: number | null
          role?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
