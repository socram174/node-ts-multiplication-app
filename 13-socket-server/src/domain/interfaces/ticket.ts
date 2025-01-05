

export interface Ticket {
    id: string;
    number: number;
    createdAt: Date;
    handleAtDesk?: string; // desk number
    handleAt?: Date;
    done: boolean;
}