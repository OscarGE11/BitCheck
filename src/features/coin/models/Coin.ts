export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;

  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;

  total_volume: number;

  high_24h: number;
  low_24h: number;

  price_change_24h: number;
  price_change_percentage_24h: number;

  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;

  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;

  ath: number;
  ath_change_percentage: number;
  ath_date: string;

  atl: number;
  atl_change_percentage: number;
  atl_date: string;

  roi: null | {
    times: number;
    currency: string;
    percentage: number;
  };

  last_updated: string;
}

export interface CoinDetails {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;

  genesis_date: string | null;
  hashing_algorithm: string | null;
  market_cap_rank: number;

  image: {
    thumb: string;
    small: string;
    large: string;
  };

  description: {
    en: string;
  };

  categories: string[];

  links: {
    homepage: string[];
    whitepaper: string | null;
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
  };

  market_data: {
    current_price: Record<string, number>;
    market_cap: Record<string, number>;
    total_volume: Record<string, number>;
  };

  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;

  last_updated: string;
}
