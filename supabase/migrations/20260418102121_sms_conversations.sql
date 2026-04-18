-- SMS Conversations: stores full Claude conversation history per client phone number
CREATE TABLE public.sms_conversations (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phone         TEXT NOT NULL UNIQUE,
  client_name   TEXT NOT NULL,
  service       TEXT,
  zip           TEXT,
  messages      JSONB NOT NULL DEFAULT '[]',
  status        TEXT NOT NULL DEFAULT 'active',  -- active | booked | handed_off | closed
  created_at    TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at    TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.sms_conversations ENABLE ROW LEVEL SECURITY;

-- Only Edge Functions (service_role) can read/write
CREATE POLICY "Service role only" ON public.sms_conversations
  USING (auth.role() = 'service_role');

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER sms_conversations_updated_at
  BEFORE UPDATE ON public.sms_conversations
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
