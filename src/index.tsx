import { createClient } from '@supabase/supabase-js'
import type {Database} from './database.types'

const supabase = createClient<Database>(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_KEY,
    )

