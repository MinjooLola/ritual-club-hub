-- Make profile fields optional by adding default values and allowing nulls where needed
ALTER TABLE public.profiles 
  ALTER COLUMN current_work SET DEFAULT 'Not specified',
  ALTER COLUMN interests SET DEFAULT 'Not specified',
  ALTER COLUMN hobbies SET DEFAULT 'Not specified',
  ALTER COLUMN concerns SET DEFAULT 'Not specified',
  ALTER COLUMN how_did_you_know SET DEFAULT 'Not specified';