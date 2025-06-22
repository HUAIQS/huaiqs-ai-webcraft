import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ijxqfmifhtwgoqarrbkh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqeHFmbWlmaHR3Z29xYXJyYmtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNTI0MjIsImV4cCI6MjA2NTYyODQyMn0.71HJgJZHF3DhV11Z4h15bNVOTXKCSPOUfJGPZLs8Arg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

