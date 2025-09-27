-- Create profiles table
CREATE TABLE public.profiles (
  id UUID NOT NULL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  current_work TEXT NOT NULL,
  interests TEXT NOT NULL,
  hobbies TEXT NOT NULL,
  concerns TEXT NOT NULL,
  expectations TEXT,
  how_did_you_know TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies for user access
CREATE POLICY "Users can view their own profile" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (auth.uid() = id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Insert 5 sample users with all fields populated
INSERT INTO public.profiles (id, email, name, phone, current_work, interests, hobbies, concerns, expectations, how_did_you_know, role) VALUES
(
  '11111111-1111-1111-1111-111111111111',
  'admin@ritualclub.com',
  'Sarah Johnson',
  '+1-555-0101',
  'Product Manager at Tech Startup',
  'Personal development, mindfulness, wellness',
  'Yoga, meditation, reading, hiking',
  'Work-life balance, stress management',
  'Build better daily habits and find inner peace',
  'Social media recommendation',
  'admin'
),
(
  '22222222-2222-2222-2222-222222222222',
  'mike.chen@email.com',
  'Mike Chen',
  '+1-555-0102',
  'Software Engineer',
  'Technology, self-improvement, fitness',
  'Coding, rock climbing, chess',
  'Productivity optimization, focus improvement',
  'Develop consistent morning routine',
  'Friend referral',
  'user'
),
(
  '33333333-3333-3333-3333-333333333333',
  'emma.rodriguez@email.com',
  'Emma Rodriguez',
  '+1-555-0103',
  'Marketing Director',
  'Wellness, creativity, leadership',
  'Painting, journaling, cooking',
  'Creative blocks, team management stress',
  'Enhance creativity and reduce anxiety',
  'Google search',
  'user'
),
(
  '44444444-4444-4444-4444-444444444444',
  'david.kim@email.com',
  'David Kim',
  '+1-555-0104',
  'Financial Analyst',
  'Finance, health, philosophy',
  'Running, investing, philosophy books',
  'Financial stress, decision fatigue',
  'Better financial habits and mental clarity',
  'Podcast recommendation',
  'user'
),
(
  '55555555-5555-5555-5555-555555555555',
  'lisa.thompson@email.com',
  'Lisa Thompson',
  '+1-555-0105',
  'Teacher',
  'Education, mindfulness, community',
  'Gardening, volunteer work, knitting',
  'Burnout prevention, work satisfaction',
  'Find more joy in daily teaching practice',
  'Community event',
  'user'
);