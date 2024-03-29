// import sendgrid from '@sendgrid/mail'

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY as any)

// const sendMail = async (req: any, res: any) => {
//   try {
//     await sendgrid.send({
//       to: 'sara.bluekens@skynet.be',
//       from: 'sara123@skynet.be',
//       subject: `[Lead from website] : ${req.body.subject}`,
//       html: `<!DOCTYPE html>
//       <html lang="en">
//       <head>
//         <meta charset="utf-8">

//         <title>Portfolio</title>
//         <meta name="description" content="Sara's portfolio">
//         <meta name="SaraBluekens" content="SitePoint">
//       <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

//         <link rel="stylesheet" href="css/styles.css?v=1.0">

//       </head>

//       <body>
//         <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
//               </div>
//               <div class="container" style="margin-left: 20px;margin-right: 20px;">
//               <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
//               <div style="font-size: 16px;">
//               <p>Message:</p>
//               <p>${req.body.message}</p>
//               <br>
//               </div>
//       </body>
//       </html>`,
//     })
//   } catch (error: any) {
//     console.log('mail not sent' + error)
//     return res.status(error.statusCode || 500).json({ error: error.message })
//   }

//   return res.status(200).json({ error: '' })
// }

// export default sendMail
