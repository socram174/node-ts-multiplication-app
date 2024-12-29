import { envs } from "../../config";


export class DiscordService {

    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;

    constructor() {}

    async notify(message: string){

        const body = {
            content: message,
            // embeds: [
            // {  
            //       image: {
            //         url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGs2cGdxZms2cDVmNW4wd3YyaGYyZXV3Mmd3YzJhbm95NnhldTZ5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EERZRrRpdJawsMVC5f/giphy.gif"
            //     }}
            // ]
        }

        const response = await fetch(this.discordWebhookUrl,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if( !response.ok ){
            console.log('Error sending message to Discord');
            return false;
        }

        return true;

    }

}