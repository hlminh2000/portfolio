'use server'
import { Resend } from 'resend';
import { emailSchema } from '@/lib/utils';

const EmailTemplate = (props: { name: string, email: string, message: string }) => (
  <div>
    <ul>
      <li>Name: <strong>{props.name}</strong></li>
      <li>Email: <strong>{props.email}</strong></li>
      <li>Message: <strong>{props.message}</strong></li>
    </ul>
  </div>
);

export const sendEmail = async (args: { name: string, email: string, message: string }) => {
  const {data, error } = emailSchema.safeParse(args)
  if(error) throw error
  const resend = new Resend(process.env.RESEND_API_KEY);
  return resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['hlminh2000@gmail.com'],
    subject: `Minhified.dev blog message - ${args.name}`,
    react: <EmailTemplate {...data} />,
  });
}
