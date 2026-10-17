-- Online booking (/book) with a 30% Stripe deposit.
-- Only the Netlify functions touch these tables, with the service-role key. RLS is on with NO public
-- policies, so the browser (anon key) can neither read client data nor write bookings directly.

CREATE TABLE IF NOT EXISTS public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'expired', 'canceled')),
  service_date DATE NOT NULL,
  slot TEXT NOT NULL,
  service TEXT NOT NULL,
  size_label TEXT NOT NULL,
  frequency TEXT,
  addons TEXT[] NOT NULL DEFAULT '{}',
  total_cents INTEGER NOT NULL,
  deposit_cents INTEGER NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT NOT NULL,
  zip TEXT NOT NULL,
  notes TEXT,
  sms_consent BOOLEAN NOT NULL DEFAULT false,
  stripe_session_id TEXT UNIQUE,
  paid_at TIMESTAMPTZ
);

-- One booking per date + arrival window. Pending rows hold the slot during checkout; the functions
-- expire stale pendings before inserting, so an abandoned checkout releases the slot.
CREATE UNIQUE INDEX IF NOT EXISTS bookings_one_per_slot
  ON public.bookings (service_date, slot)
  WHERE status IN ('pending', 'paid');

CREATE INDEX IF NOT EXISTS bookings_date_idx ON public.bookings (service_date);

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Days or windows the owner closes by hand (vacation, full day, holiday).
-- slot NULL = the whole day is closed; slot '08:00' = only that window.
CREATE TABLE IF NOT EXISTS public.booking_blocks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  block_date DATE NOT NULL,
  slot TEXT,
  reason TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS booking_blocks_date_idx ON public.booking_blocks (block_date);

ALTER TABLE public.booking_blocks ENABLE ROW LEVEL SECURITY;
