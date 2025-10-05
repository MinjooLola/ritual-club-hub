-- 관리자 계정 생성을 위한 임시 함수
DO $$
DECLARE
  admin_user_id uuid;
BEGIN
  -- 1. auth.users에 사용자가 이미 있는지 확인
  SELECT id INTO admin_user_id 
  FROM auth.users 
  WHERE email = 'admin@ritualclub.com';
  
  -- 2. 사용자가 없으면 생성 안내 메시지
  IF admin_user_id IS NULL THEN
    RAISE NOTICE 'User does not exist in auth.users. Please create user first in Supabase Auth dashboard.';
  ELSE
    -- 3. profiles 테이블에 이미 있는지 확인
    IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = admin_user_id) THEN
      -- 4. 프로필 생성
      INSERT INTO public.profiles (
        id, 
        email, 
        name, 
        phone, 
        role
      ) VALUES (
        admin_user_id,
        'admin@ritualclub.com',
        'Minjoo Kim',
        '+82-10-6597-1543',
        'admin'
      );
      RAISE NOTICE 'Admin profile created successfully.';
    ELSE
      -- 5. 이미 있으면 업데이트
      UPDATE public.profiles 
      SET role = 'admin',
          name = 'Minjoo Kim',
          phone = '+82-10-6597-1543'
      WHERE id = admin_user_id;
      RAISE NOTICE 'Admin profile updated successfully.';
    END IF;
  END IF;
END $$;