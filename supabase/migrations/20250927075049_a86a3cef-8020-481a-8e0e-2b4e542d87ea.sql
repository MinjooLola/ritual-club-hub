-- Create auth users directly and their profiles
-- Note: This uses Supabase's internal functions to create proper auth users

-- First, let's create the auth users using Supabase's functions
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES 
(
  '00000000-0000-0000-0000-000000000000',
  '11111111-1111-1111-1111-111111111111',
  'authenticated',
  'authenticated',
  'admin@ritualclub.com',
  crypt('user123', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
),
(
  '00000000-0000-0000-0000-000000000000',
  '22222222-2222-2222-2222-222222222222',
  'authenticated',
  'authenticated',
  'mike.chen@email.com',
  crypt('user123', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
),
(
  '00000000-0000-0000-0000-000000000000',
  '33333333-3333-3333-3333-333333333333',
  'authenticated',
  'authenticated',
  'emma.rodriguez@email.com',
  crypt('user123', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
),
(
  '00000000-0000-0000-0000-000000000000',
  '44444444-4444-4444-4444-444444444444',
  'authenticated',
  'authenticated',
  'david.kim@email.com',
  crypt('user123', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
),
(
  '00000000-0000-0000-0000-000000000000',
  '55555555-5555-5555-5555-555555555555',
  'authenticated',
  'authenticated',
  'lisa.thompson@email.com',
  crypt('user123', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
);

-- Now create their profiles
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