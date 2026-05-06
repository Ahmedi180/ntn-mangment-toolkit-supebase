import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cjrzbqxtxqyvqsrgljlh.supabase.co';
const supabaseAnonKey = 'sb_publishable_YZq2RfGacWOeaK8Xo06_2A_HIVY3tBJ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
