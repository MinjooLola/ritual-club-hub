import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.58.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface SampleUser {
  email: string;
  name: string;
  phone: string;
  current_work: string;
  interests: string;
  hobbies: string;
  concerns: string;
  expectations: string | null;
  how_did_you_know: string;
  role: 'user' | 'admin';
}

const sampleUsers: SampleUser[] = [
  {
    email: 'admin@ritualclub.com',
    name: 'Sarah Johnson',
    phone: '+1-555-0101',
    current_work: 'Product Manager at Tech Startup',
    interests: 'Personal development, mindfulness, wellness',
    hobbies: 'Yoga, meditation, reading, hiking',
    concerns: 'Work-life balance, stress management',
    expectations: 'Build better daily habits and find inner peace',
    how_did_you_know: 'Social media recommendation',
    role: 'admin'
  },
  {
    email: 'mike.chen@email.com',
    name: 'Mike Chen',
    phone: '+1-555-0102',
    current_work: 'Software Engineer',
    interests: 'Technology, self-improvement, fitness',
    hobbies: 'Coding, rock climbing, chess',
    concerns: 'Productivity optimization, focus improvement',
    expectations: 'Develop consistent morning routine',
    how_did_you_know: 'Friend referral',
    role: 'user'
  },
  {
    email: 'emma.rodriguez@email.com',
    name: 'Emma Rodriguez',
    phone: '+1-555-0103',
    current_work: 'Marketing Director',
    interests: 'Wellness, creativity, leadership',
    hobbies: 'Painting, journaling, cooking',
    concerns: 'Creative blocks, team management stress',
    expectations: 'Enhance creativity and reduce anxiety',
    how_did_you_know: 'Google search',
    role: 'user'
  },
  {
    email: 'david.kim@email.com',
    name: 'David Kim',
    phone: '+1-555-0104',
    current_work: 'Financial Analyst',
    interests: 'Finance, health, philosophy',
    hobbies: 'Running, investing, philosophy books',
    concerns: 'Financial stress, decision fatigue',
    expectations: 'Better financial habits and mental clarity',
    how_did_you_know: 'Podcast recommendation',
    role: 'user'
  },
  {
    email: 'lisa.thompson@email.com',
    name: 'Lisa Thompson',
    phone: '+1-555-0105',
    current_work: 'Teacher',
    interests: 'Education, mindfulness, community',
    hobbies: 'Gardening, volunteer work, knitting',
    concerns: 'Burnout prevention, work satisfaction',
    expectations: 'Find more joy in daily teaching practice',
    how_did_you_know: 'Community event',
    role: 'user'
  }
];

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase Admin client
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    console.log('Starting sample user creation...');
    const results = [];

    for (const userData of sampleUsers) {
      try {
        console.log(`Creating user: ${userData.email}`);

        // Create the auth user with admin client
        const { data: authUser, error: signUpError } = await supabaseAdmin.auth.admin.createUser({
          email: userData.email,
          password: 'user123',
          email_confirm: true // Skip email confirmation
        });

        if (signUpError) {
          console.error(`Error creating auth user ${userData.email}:`, signUpError);
          results.push({
            email: userData.email,
            success: false,
            error: signUpError.message
          });
          continue;
        }

        if (!authUser.user) {
          console.error(`No user returned for ${userData.email}`);
          results.push({
            email: userData.email,
            success: false,
            error: 'No user returned from signup'
          });
          continue;
        }

        console.log(`Auth user created for ${userData.email}, ID: ${authUser.user.id}`);

        // Create the profile
        const { error: profileError } = await supabaseAdmin
          .from('profiles')
          .insert({
            id: authUser.user.id,
            email: userData.email,
            name: userData.name,
            phone: userData.phone,
            current_work: userData.current_work,
            interests: userData.interests,
            hobbies: userData.hobbies,
            concerns: userData.concerns,
            expectations: userData.expectations,
            how_did_you_know: userData.how_did_you_know,
            role: userData.role
          });

        if (profileError) {
          console.error(`Error creating profile for ${userData.email}:`, profileError);
          results.push({
            email: userData.email,
            success: false,
            error: `Profile creation failed: ${profileError.message}`
          });
          continue;
        }

        console.log(`Profile created for ${userData.email}`);
        results.push({
          email: userData.email,
          success: true,
          role: userData.role
        });

      } catch (error) {
        console.error(`Unexpected error for ${userData.email}:`, error);
        results.push({
          email: userData.email,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    console.log('Sample user creation completed:', results);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Sample users creation completed',
        results: results,
        summary: {
          total: results.length,
          successful: results.filter(r => r.success).length,
          failed: results.filter(r => !r.success).length
        }
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Unexpected error in setup-sample-users:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});