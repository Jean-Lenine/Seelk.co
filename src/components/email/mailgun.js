

export default function email(info){

    const mailgun = require("mailgun-js");
    const DOMAIN = "sandbox2d9712950ad148bab4c7a0ecc29e9697.mailgun.org";
    const mg = mailgun({apiKey: "12c34938031ec40c1ee6fe9c7b8d40bb-5645b1f9-1aa027da", domain: DOMAIN});
    const data = {
        from: "Mailgun Sandbox <postmaster@sandbox2d9712950ad148bab4c7a0ecc29e9697.mailgun.org>",
        to: "rayane.slimani@epitech.eu",
        subject: "Alert",
        text: "Testing some Mailgun awesomness!"+info
    };
    mg.messages().send(data, function (error, body) {
        console.log(error,body);
    });
}