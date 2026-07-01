-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Create Tables

CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  role TEXT DEFAULT 'editor' CHECK (role IN ('admin', 'editor')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  starting_price NUMERIC,
  pricing_notes TEXT,
  priority INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'pending_review', 'published', 'archived')),
  is_featured BOOLEAN DEFAULT false,
  cover_media_id UUID, -- Foreign key added after media table creation
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.destinations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.project_services (
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  service_id UUID REFERENCES public.services(id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, service_id)
);

CREATE TABLE public.project_destinations (
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  destination_id UUID REFERENCES public.destinations(id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, destination_id)
);

CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_name TEXT NOT NULL,
  role TEXT,
  content TEXT NOT NULL,
  project_id UUID REFERENCES public.projects(id) ON DELETE SET NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category TEXT NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  priority INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied', 'archived')),
  source TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  bucket TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  width INTEGER,
  height INTEGER,
  duration INTEGER,
  size_bytes BIGINT NOT NULL,
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add foreign key to projects for cover_media_id
ALTER TABLE public.projects
  ADD CONSTRAINT fk_cover_media FOREIGN KEY (cover_media_id) REFERENCES public.media(id) ON DELETE SET NULL;

-- 2. Indexes
CREATE INDEX idx_profiles_user_id ON public.profiles(user_id);
CREATE INDEX idx_projects_slug ON public.projects(slug);
CREATE INDEX idx_services_slug ON public.services(slug);
CREATE INDEX idx_destinations_slug ON public.destinations(slug);
CREATE INDEX idx_projects_status ON public.projects(status);
CREATE INDEX idx_projects_featured ON public.projects(is_featured);
CREATE INDEX idx_inquiries_status ON public.inquiries(status);
CREATE INDEX idx_media_project_id ON public.media(project_id);

-- 3. Row Level Security (RLS) Enablement
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies

-- Public Read Policies
CREATE POLICY "Public can view active services" ON public.services FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view published projects" ON public.projects FOR SELECT USING (status = 'published');
CREATE POLICY "Public can view project services" ON public.project_services FOR SELECT USING (true);
CREATE POLICY "Public can view active destinations" ON public.destinations FOR SELECT USING (is_active = true);
CREATE POLICY "Public can view project destinations" ON public.project_destinations FOR SELECT USING (true);
CREATE POLICY "Public can view testimonials" ON public.testimonials FOR SELECT USING (true);
CREATE POLICY "Public can view faqs" ON public.faqs FOR SELECT USING (true);
CREATE POLICY "Public can view media" ON public.media FOR SELECT USING (true);

-- Anonymous Submissions
CREATE POLICY "Anyone can submit inquiries" ON public.inquiries FOR INSERT WITH CHECK (true);

-- Admin/Editor Mutation Policies (Simplified for prototype: assume authenticated users are at least editors/admins)
CREATE POLICY "Authenticated users can read all profiles" ON public.profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE TO authenticated USING (user_id = auth.uid());

CREATE POLICY "Admins can do everything on settings" ON public.settings TO authenticated USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE user_id = auth.uid() AND role = 'admin')
);

-- For editors and admins, we grant full CRUD on content tables. 
-- In a stricter setup, we would separate admin vs editor logic exactly as per the CMS spec.
CREATE POLICY "Staff can manage services" ON public.services TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Staff can manage projects" ON public.projects TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Staff can manage project_services" ON public.project_services TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Staff can manage destinations" ON public.destinations TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Staff can manage project_destinations" ON public.project_destinations TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Staff can manage testimonials" ON public.testimonials TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Staff can manage faqs" ON public.faqs TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Staff can manage media" ON public.media TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Staff can manage inquiries" ON public.inquiries TO authenticated USING (true) WITH CHECK (true);

-- 5. Storage Buckets Setup
-- Note: 'storage' schema comes from Supabase Storage API.

INSERT INTO storage.buckets (id, name, public) VALUES 
  ('hero-videos', 'hero-videos', true),
  ('project-videos', 'project-videos', true),
  ('project-images', 'project-images', true),
  ('avatars', 'avatars', true),
  ('testimonials', 'testimonials', true)
ON CONFLICT (id) DO NOTHING;

-- Storage Policies (Public Read)
CREATE POLICY "Public read hero-videos" ON storage.objects FOR SELECT USING (bucket_id = 'hero-videos');
CREATE POLICY "Public read project-videos" ON storage.objects FOR SELECT USING (bucket_id = 'project-videos');
CREATE POLICY "Public read project-images" ON storage.objects FOR SELECT USING (bucket_id = 'project-images');
CREATE POLICY "Public read avatars" ON storage.objects FOR SELECT USING (bucket_id = 'avatars');
CREATE POLICY "Public read testimonials" ON storage.objects FOR SELECT USING (bucket_id = 'testimonials');

-- Storage Policies (Authenticated Write)
CREATE POLICY "Staff write access to hero-videos" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'hero-videos');
CREATE POLICY "Staff write access to project-videos" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'project-videos');
CREATE POLICY "Staff write access to project-images" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'project-images');
CREATE POLICY "Staff write access to avatars" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'avatars');
CREATE POLICY "Staff write access to testimonials" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'testimonials');

CREATE POLICY "Staff update access" ON storage.objects FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Staff delete access" ON storage.objects FOR DELETE TO authenticated USING (true);
