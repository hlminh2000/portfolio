'use server'
import { z } from 'zod';
import { Resend } from 'resend';
import { emailSchema } from '@/lib/utils';

const EmailTemplate = ({
  name,
}: { name: string }) => (
  <div>
    <h1>Welcome, {name}!</h1>
  </div>
);

const sendEmail = async (args: { name: string, email: string, message: string }) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  return resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['hlminh2000@gmail.com'],
    subject: 'Hello world',
    react: <EmailTemplate name={args.name} />,
  });

}


export async function POST(req: Request) {
  const body = emailSchema.parse(await req.json());

  const {data, error} = await sendEmail(body);

  return Response.json(data);
}