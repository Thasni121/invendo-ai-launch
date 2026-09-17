CREATE TABLE public.corporate_training_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  organization text NOT NULL,
  work_email text NOT NULL,
  phone text NOT NULL,
  job_title text NOT NULL,
  training_requirement text NOT NULL,
  industry text NOT NULL,
  department_team text NOT NULL,
  number_of_participants text NOT NULL,
  preferred_duration text NOT NULL,
  preferred_format text NOT NULL,
  preferred_timeline text NOT NULL,
  training_objectives text NOT NULL,
  ai_readiness jsonb DEFAULT '{}'::jsonb,
  source text NOT NULL DEFAULT 'Corporate Training Enquiry',
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT corporate_training_enquiries_name_length CHECK (char_length(name) BETWEEN 2 AND 120),
  CONSTRAINT corporate_training_enquiries_organization_length CHECK (char_length(organization) BETWEEN 2 AND 160),
  CONSTRAINT corporate_training_enquiries_email_length CHECK (char_length(work_email) BETWEEN 5 AND 255),
  CONSTRAINT corporate_training_enquiries_phone_length CHECK (char_length(phone) BETWEEN 7 AND 40),
  CONSTRAINT corporate_training_enquiries_job_title_length CHECK (char_length(job_title) BETWEEN 2 AND 120),
  CONSTRAINT corporate_training_enquiries_objectives_length CHECK (char_length(training_objectives) BETWEEN 10 AND 2500)
);

GRANT INSERT ON public.corporate_training_enquiries TO anon;
GRANT INSERT ON public.corporate_training_enquiries TO authenticated;
GRANT ALL ON public.corporate_training_enquiries TO service_role;

ALTER TABLE public.corporate_training_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit corporate training enquiries"
ON public.corporate_training_enquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Service role can manage corporate training enquiries"
ON public.corporate_training_enquiries
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);