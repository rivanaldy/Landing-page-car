import { createClient } from '@supabase/supabase-js'

const supabaseUrl = `https://ednlotlckjsmnnjycsmx.supabase.co`
const supabaseAnonKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkbmxvdGxja2pzbW5uanljc214Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5NjQ5MDMsImV4cCI6MjAwNjU0MDkwM30.XzNvjUdKhDrBDmvL2VhB5EoSz6qyIODkPofGIC_NcEk`

export const supabase = createClient(supabaseUrl, supabaseAnonKey)