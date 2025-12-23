import ContactFormEmail from "@/app/components/contact-form-email"
import { render } from "@react-email/render"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(request:Request){
    try{
        const body = await request.json()
        const { email, website, interests, projectCategory, productStage, message, budget } = body
        if(!email){
            return NextResponse.json(
                {error: "Email is required"},
                {status: 400}
            )
        }

        const emailHtml = await render(
      ContactFormEmail({
        email,
        website: website || '',
        interests: interests || [],
        projectCategory,
        productStage,
        message: message || '',
        budget: budget || '',
      })
    );

        const {data, error} = await resend.emails.send({
            from: "Contact Form <contact@gaming.agency>",
            to: "hello@gaming.agency",
            subject: `New Contact Form Submission from ${email}`,
            html: emailHtml,
        })

        if(error){
            console.error('Resend Error:::',error)
            return NextResponse.json(
                {error: 'failed to send email'},
                {status: 500}
            )
        }


        return NextResponse.json(
            {message:"email sent successfully"},
            {status: 200}
        )

    }catch(error){
        console.error("API ERROR:::::",error)
        return NextResponse.json(
            {error: 'Internal server error'},
            {status: 500}
        )
    }
}
