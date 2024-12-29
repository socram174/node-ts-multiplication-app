import { Request, Response } from "express";
import { GithubService } from "../services/github.service";
import { DiscordService } from "../services/discord.service";


export class GithubController {


    constructor(
        private readonly githubService = new GithubService(),
        private readonly discordService = new DiscordService(),
    ) {

    }

    webhookHandler = ( req: Request, res: Response) => {

        const githubEvent = req.header('x-github-event') ?? 'unknown';
        const signature = req.header('x-hub-signature-256') ?? 'unknown';
        const payload = req.body;
        let message: string='';

        switch (githubEvent) {
            case 'issues':
                message = this.githubService.onIssue(payload);
                break;
            case 'star':
                message = this.githubService.onStar(payload);
                break;
            default:
                message = `Unknown event received: ${githubEvent}`;
                break
        }

        this.discordService.notify(message)
            .then( () => {
                res.status(202).send('Accepted');
            })
            .catch( () => {
                res.status(500).json({error: "internal server error"});
            });
    }
}