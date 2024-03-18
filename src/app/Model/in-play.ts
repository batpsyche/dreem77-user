class Runners {
    back: { price: number, size: number }[]
    lay: { price: number, size: number }[];
    name: string;
    selectionId: number;
}
class Data {
    inplay: boolean;
    is_active: string;
    is_bookmaker_market: string;
    is_fancy: number;
    is_favourite: string;
    is_manual_market: string;
    is_manual_odds: string;
    is_visible: string;
    market_id: string;
    match_date: string;
    match_id: string;
    name: string;
    runner_json: Runners[]
    sport_id: string;
    sport_name: string;
    status?: string;
}
export class InPlay {
    code: number;
    data: Data[];
    error: boolean;
    message: string;
}