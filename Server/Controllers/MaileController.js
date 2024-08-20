import express from "express";
import mailer from "nodemailer";

const sendMail = async(user, res) =>
{
    const transporter = mailer.createTransport(
        {
            host : process.env.HOST,
            service : process.env.SERVICE,
            post : Number(process.env.PORT),
            secure : Boolean(process.env.SECURE),
            auth : {
                user : process.env.USER,
                pass : process.env.PASS
            },
            tls : 
        {
            rejectUnauthorized : false
        }
        }
    );

    console.log(user.body);

    const messageOptions = {
        from : `"Biotikos" <${process.env.USER}>`,
        to : user.body.email,
        subject : "Invitation to Samhitha 24 - Bioblitz Intra Institutional Fest",
        html : `<div>
        <p>Dear ${user.body.message}</p>
        <p>We are thrilled to extend a cordial invitation to you to attend the much-anticipated event of Samhitha 24 - Bioblitz, our intra-institutional fest, scheduled to take place on March 29, 30, and 31 at the JVC Auditorium at SASTRA Deemed University.</p>
        <p>This event promises to be an enriching experience filled with insightful talks, engaging workshops, and opportunities for networking and collaboration. We have attached the agenda for the three-day event along with your entry pass for your convenience.</p>
        <p>We would like to emphasize that all registered attendees for workshops and talks are requested to attend the talk scheduled for Friday. Certificates will be issued based on your presence in the auditorium by our organizers.</p>
        <p>Furthermore, we encourage you to participate in the workshops scheduled for Saturday and Sunday, where you can enhance your skills and knowledge in various domains. Certificates for workshop participation will be distributed on Sunday afternoon as the event draws to a close.</p>
        <p>Please note that certificates will only be issued to those who attend both the talk and workshop sessions, as verified by our organizers.</p>
        <p>We look forward to your presence at Samhitha 24 - Bioblitz and are excited to embark on this journey of exploration and learning together.</p>
        <p>Kindly join the WhatsApp group using the below link to receive further updates on our event and future communication.</p>
        <p><a href="https://chat.whatsapp.com/Det4vACEnDSLIGrQo8LTNf">https://chat.whatsapp.com/Det4vACEnDSLIGrQo8LTNf</a></p>
        <p>Kindly make sure you are showing this mail and the entry pass attached in this mail to get into Sastra and this pass will serve as proof of your payment and participation in our event which will be keenly checked by our organizers' team of BIOTIKOS.</p>
        <p>Warm Regards,</p>
        <p>Subaranjana Saravanaguru<br>
            Chairperson of BIOTIKOS<br>
            Student Association of the Department of Biotechnology<br>
            School of Chemical & Biotechnology<br>
            SASTRA Deemed University<br>
            Thanjavur, TN, INDIA</p>
    </div>`,
        attachments: [
            {
                filename: 'Agenda for SAMHITHA 2024.pdf',
                path: './hello.pdf'
            },
            {
                filename: 'ENTRY PASS FOR SAMHITHA.pdf',
                path: './hello2.pdf'
            }
        ]
    }

    transporter.sendMail(messageOptions, (error, info) => {
        if(error)
        {
            console.log(error);
            res.status(500).json({message : error});
        }
        res.status(200).json({message : "Successfull"});
    })
}

export default sendMail;