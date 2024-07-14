import EmailTemplate from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const request = await req.json();
    const { name, email, subject, message } = request;
    console.log(name, email, subject, message);
    const { data, error } = await resend.emails.send({
      from: `${name} <artesonora@uint.studio>`,
      //   TODO: change to the correct email(s)
      to: ['vitorbutkus@gmail.com'],
      reply_to: `${name} <${email}>`,
      subject: subject,
      react: EmailTemplate({ name, email, subject, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
