
CREATE TABLE public.quote_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  zip TEXT NOT NULL,
  service TEXT NOT NULL,
  bedrooms TEXT,
  bathrooms TEXT,
  frequency TEXT,
  preferred_date TEXT,
  message TEXT,
  sms_consent BOOLEAN DEFAULT false,
  email_consent BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.quote_requests
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);
